import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Navigation } from '../components/Navigation';
import { SocialLinks } from '../components/SocialLinks';
import { Footer } from '../components/Footer';
import { Marquee } from '../components/Marquee';

import { Hero } from '../sections/Hero';
import { DetailExploration } from '../sections/DetailExploration';
import { MotionShowcase } from '../sections/MotionShowcase';
import { CraftNarrative } from '../sections/CraftNarrative';
import { FashionCarousel } from '../sections/FashionCarousel';
import { SignatureMoment } from '../sections/SignatureMoment';
import { useCameraOrbit } from '../hooks/useCameraOrbit';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { calculateOrbit } = useCameraOrbit();

  useGSAP(() => {
    // 1. Hero Reveal
    const heroTl = gsap.timeline();
    heroTl.from('.hero-bg', { scale: 1.2, duration: 2, ease: 'power2.out' })
      .from('#logo-path', { drawSVG: 0, duration: 2, ease: 'power2.inOut' }, 0)
      .from('.hero-title span', { y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: 'power4.out' }, '-=1.5')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 1 }, '-=0.5')
      .from('.hero-cta', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');

    // Simulate drawSVG with stroke-dasharray
    const path = document.querySelector('#logo-path') as SVGPathElement;
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' });
    }

    // 2. Detail Exploration
    gsap.from('.detail-image-1', {
      scrollTrigger: {
        trigger: '.detail-exploration-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
      x: -100,
      opacity: 0,
      rotate: -5,
    });

    gsap.from('.detail-image-2', {
      scrollTrigger: {
        trigger: '.detail-exploration-section',
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
      },
      x: 100,
      opacity: 0,
      rotate: 5,
    });

    // 3. Motion Showcase (Pinned 3D Model Effect with zero-allocation quickSetters)
    const setRotateY = gsap.quickSetter('.showcase-bag', 'rotationY', 'deg');
    const setScale = gsap.quickSetter('.showcase-bag', 'scale');
    const setZ = gsap.quickSetter('.showcase-bag', 'z', 'px');

    ScrollTrigger.create({
      trigger: '.showcase-section',
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const modelViewer = document.querySelector('#bag-model') as any;
        
        const { orbitString } = calculateOrbit(progress);
        if (modelViewer) {
          modelViewer.cameraOrbit = orbitString;
        }

        // Hardware-accelerated setter updates (no new tween allocation per tick)
        setRotateY(progress * 360);
        setScale(1 + progress * 0.5);
        setZ(progress * 200);
      },
    });

    // 4. Craftsmanship Narrative
    gsap.from('.craft-text p, .craft-container > *', {
      scrollTrigger: {
        trigger: '.craft-section',
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    // 5. Carousel
    const carouselItems = gsap.utils.toArray('.carousel-item');
    gsap.to(carouselItems, {
      xPercent: -100 * (carouselItems.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.carousel-section',
        pin: true,
        scrub: 1,
        end: () => `+=${carouselRef.current?.offsetWidth}`,
      },
    });

    // 6. Signature Moment
    gsap.to('.signature-bg-image', {
      scrollTrigger: {
        trigger: '.signature-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: -100,
      scale: 1.1,
    });

    // Marquee
    gsap.to('.marquee-inner', {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'none',
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="page-wrapper">
      <div className="grain-overlay" />
      
      <Navigation />
      <SocialLinks />

      <main>
        <Hero />
        <DetailExploration />
        <MotionShowcase />
        <CraftNarrative />
        <Marquee />
        <FashionCarousel ref={carouselRef} />
        <SignatureMoment />
      </main>

      <Footer />
    </div>
  );
};
