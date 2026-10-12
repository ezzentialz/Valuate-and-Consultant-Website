'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import {
  Color,
  Group,
} from 'three';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/context/I18nContext';

function FloatingShape({
  geometry,
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  geometry: 'box' | 'octa' | 'ico' | 'torus';
  position: [number, number, number];
  color: number;
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4 * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const geomProps = {
    box: <boxGeometry args={[1, 1, 1]} />,
    octa: <octahedronGeometry args={[0.8]} />,
    ico: <icosahedronGeometry args={[0.8]} />,
    torus: <torusGeometry args={[0.6, 0.2, 16, 32]} />,
  }[geometry];

  return (
    <group ref={ref} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          {geomProps}
          <meshStandardMaterial
            color={new Color(color)}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

function HeroCanvas() {
  const shapes = useMemo(
    () => [
      { geometry: 'octa' as const, position: [-6, 2, -2] as [number, number, number], color: 0xc8a951, scale: 1.2, speed: 0.8 },
      { geometry: 'box' as const, position: [6, 1, -3] as [number, number, number], color: 0x4a8ac8, scale: 0.9, speed: 1.1 },
      { geometry: 'ico' as const, position: [4, 4, -5] as [number, number, number], color: 0xc85a8a, scale: 0.7, speed: 1.3 },
      { geometry: 'torus' as const, position: [-5, 5, -6] as [number, number, number], color: 0x8ac84a, scale: 0.8, speed: 0.9 },
    ],
    []
  );

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 2, 12], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={new Color(0xc8a951)} />
      <pointLight position={[-10, -5, 10]} intensity={0.5} color={new Color(0x4a8ac8)} />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </Canvas>
  );
}

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <span className="w-12 h-px bg-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold uppercase tracking-[0.3em]">
              {t.hero.subtitle.split(' ')[0]}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 animate-slide-up">
            {t.hero.title.split(' ').slice(0, 3).join(' ')}
            <br />
            <span className="text-gradient-gold">
              {t.hero.title.split(' ').slice(3).join(' ')}
            </span>
          </h1>

          <p className="text-xl text-white/70 mb-12 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#services" className="btn-primary">
              {t.hero.cta}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">
          {t.hero.scrollDown}
        </span>
        <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  building: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  cog: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  search: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  handshake: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
  ),
  briefcase: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 9V7a4 4 0 00-8 0v2M5 9h14l-1 11a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  file: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

export function AboutSection() {
  const { t } = useI18n();

  const stats = [
    { value: '30+', label: t.about.stats.years },
    { value: '2,500+', label: t.about.stats.projects },
    { value: '800+', label: t.about.stats.clients },
    { value: '8', label: t.about.stats.branches },
  ];

  return (
    <section id="about" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(rgba(200,169,81,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle">{t.about.subtitle}</span>
            <h2 className="section-title text-white mb-8">{t.about.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-6 hover:border-brand-gold/40 transition-all duration-500 group"
                >
                  <div className="text-4xl font-display font-bold text-brand-gold mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-secondary inline-flex items-center gap-2">
              {t.about.readMore}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <Image
                src="/images/hero-slide.jpg"
                alt={t.about.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              <div className="absolute inset-0 border-2 border-brand-gold/20 rounded-2xl group-hover:border-brand-gold/60 transition-all duration-500" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <span className="text-brand-gold font-bold">30</span>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {t.about.stats.years}
                      </div>
                      <div className="text-brand-gold text-xs">1992 - 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-brand-gold/40" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-brand-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <div
      className="card-3d group relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-all duration-500 -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:rotate-12 transition-all duration-500">
          {serviceIcons[icon]}
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
          {title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-brand-gold-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </div>
  );
}

export function PropertiesSection() {
  const { t } = useI18n();

  const propertyTypes = [
    { label: t.properties.buy, icon: '🏢', desc: 'คอนโดมิเนียม บ้านเดี่ยว ทาวน์โฮม ที่ดิน' },
    { label: t.properties.rent, icon: '🏠', desc: 'ห้องเช่า สำนักงาน ร้านค้า คลังสินค้า' },
    { label: t.properties.sell, icon: '📋', desc: 'ฝากขายทรัพย์สิน ประเมินราคาตลาด' },
    { label: t.properties.agent, icon: '🤝', desc: 'สมัครเป็นตัวแทนขายกับเรา' },
  ];

  return (
    <section id="properties" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-gold/5" />

      <div className="section-container relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="section-subtitle">{t.properties.subtitle}</span>
            <h2 className="section-title text-white">{t.properties.title}</h2>
          </div>
          <a
            href="https://www.peakidea.net/public/thevaluation/%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3-%e0%b8%8b%e0%b8%b7%e0%b9%89%e0%b8%ad-%e0%b8%82%e0%b8%b2%e0%b8%a2-%e0%b9%80%e0%b8%8a%e0%b9%88%e0%b8%b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap"
          >
            ดูทรัพย์สินทั้งหมด
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((prop, i) => (
            <a
              key={i}
              href="#properties"
              className="group relative glass-panel p-8 overflow-hidden hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-gold transition-colors">
                {prop.label}
              </h3>
              <p className="text-white/60 text-sm">{prop.desc}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 'คอนโด' },
            { value: 'บ้าน' },
            { value: 'ที่ดิน' },
            { value: 'พาณิชย์' },
          ].map((tag, i) => (
            <div key={i} className="text-center py-4 px-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-brand-gold text-sm font-medium">{tag.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BranchesSection() {
  const { t, locale } = useI18n();

  const branches = [
    { city: 'กรุงเทพฯ', name: 'สำนักงานใหญ่', address: '719 เคพีเอ็น ทาวเวอร์ ชั้น 12 ถนนพระราม 9', phone: '0-2717-0801-8' },
    { city: 'ชลบุรี', name: 'สาขาชลบุรี', address: 'ถนนสุขุมวิท อำเภอเมืองชลบุรี', phone: '0-3812-3456' },
    { city: 'เชียงใหม่', name: 'สาขาเชียงใหม่', address: 'ถนนนิมมานเหมินทร์ อำเภอเมืองเชียงใหม่', phone: '0-5321-7890' },
    { city: 'ขอนแก่น', name: 'สาขาขอนแก่น', address: 'ถนนศรีจันทร์ อำเภอเมืองขอนแก่น', phone: '0-4322-4567' },
    { city: 'ภูเก็ต', name: 'สาขาภูเก็ต', address: 'ถนนเยาวราช อำเภอเมืองภูเก็ต', phone: '0-7621-8901' },
    { city: 'หาดใหญ่', name: 'สาขาหาดใหญ่', address: 'ถนนเพชรเกษม อำเภอหาดใหญ่', phone: '0-7412-3456' },
  ];

  return (
    <section id="branches" className="relative py-32 bg-brand-navy-light/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-subtitle">{t.branches.subtitle}</span>
          <h2 className="section-title text-white">{t.branches.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <div key={i} className="card-3d group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-brand-gold/10 to-transparent" />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-brand-gold transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-brand-gold text-sm mt-1">{branch.city}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4">{branch.address}</p>
              <div className="flex items-center gap-2 text-brand-gold text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {branch.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareersSection() {
  const { t } = useI18n();

  const positions = [
    { title: 'ผู้ประเมินมูลค่าทรัพย์สิน', type: 'Full-time', location: 'กรุงเทพฯ' },
    { title: 'นักวิเคราะห์การเงิน', type: 'Full-time', location: 'กรุงเทพฯ' },
    { title: 'วิศวกรสำรวจอาคาร', type: 'Full-time', location: 'ทั่วประเทศ' },
    { title: 'เจ้าหน้าที่การตลาด', type: 'Full-time', location: 'กรุงเทพฯ' },
  ];

  return (
    <section id="careers" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(rgba(200,169,81,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-subtitle">{t.careers.subtitle}</span>
            <h2 className="section-title text-white mb-8">{t.careers.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              ร่วมสร้างทีมงานที่เติบโตไปกับองค์กรชั้นนำของประเทศ เราพร้อมสนับสนุนพัฒนาทักษะและความก้าวหน้าในสายอาชีพ
            </p>

            <div className="space-y-4">
              {positions.map((pos, i) => (
                <div key={i} className="glass-panel p-5 flex items-center justify-between hover:border-brand-gold/40 transition-all duration-300 group">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-brand-gold transition-colors">{pos.title}</h4>
                    <p className="text-white/50 text-sm mt-1">{pos.type} • {pos.location}</p>
                  </div>
                  <a
                    href="mailto:info@thevaluation.com?subject=สมัครงาน"
                    className="px-4 py-2 border border-brand-gold/40 text-brand-gold text-sm rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
                  >
                    {t.careers.apply}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-display text-white mb-6">ทำไมต้องเรา?</h3>
              <ul className="space-y-4">
                {[
                  'เงินเดือนและสวัสดิการที่แข่งขันได้',
                  'โอกาสเติบโตในสายอาชีพ',
                  'อบรมและพัฒนาทักษะอย่างต่อเนื่อง',
                  'วัฒนธรรมองค์กรที่โปร่งใส',
                  'โบนัสตามผลงาน',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ArticlesSection() {
  const { t } = useI18n();

  const articles = [
    {
      title: 'แนวโน้มตลาดอสังหาริมทรัพย์ไทย 2569',
      date: '12 ต.ค. 2569',
      category: 'ตลาด',
      readTime: '5 นาที',
    },
    {
      title: 'การประเมินมูลค่าทรัพย์สินเพื่อการกู้ยืม',
      date: '8 ต.ค. 2569',
      category: 'การเงิน',
      readTime: '8 นาที',
    },
    {
      title: 'มาตรฐานการประเมินมูลค่าสากล IVS',
      date: '3 ต.ค. 2569',
      category: 'มาตรฐาน',
      readTime: '6 นาที',
    },
  ];

  return (
    <section id="articles" className="relative py-32 bg-brand-navy-light/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="section-subtitle">{t.articles.subtitle}</span>
            <h2 className="section-title text-white">{t.articles.title}</h2>
          </div>
          <a
            href="https://www.thevaluation.com/%e0%b8%9a%e0%b8%97%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary whitespace-nowrap"
          >
            {t.articles.readMore}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <a
              key={i}
              href="https://www.thevaluation.com/%e0%b8%9a%e0%b8%97%e0%b8%84%e0%b8%a7%e0%b8%b2%e0%b8%a1%e0%b8%a7%e0%b8%b4%e0%b8%88%e0%b8%b1%e0%b8%a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-medium">
                  {article.category}
                </span>
                <span className="text-white/40 text-xs">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-brand-gold transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-white/40 text-sm">{article.readTime}</span>
                <span className="text-brand-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t.articles.readMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { t } = useI18n();

  return (
    <section className="relative py-32 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(rgba(11,20,38,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(11,20,38,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-container relative text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-navy mb-6">
          ประสบการณ์ ในการประเมินมูลค่าทรัพย์สินมากกว่า 30 ปี
        </h2>
        <p className="text-xl text-brand-navy/80 mb-10 max-w-2xl mx-auto">
          บริการทั้งในระดับชาติและระดับสากล ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:027170801"
            className="px-10 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-[0_10px_40px_rgba(11,20,38,0.4)]"
          >
            {t.contact.title}
          </a>
          <a
            href="mailto:info@thevaluation.com"
            className="px-10 py-4 border-2 border-brand-navy text-brand-navy font-semibold rounded-full hover:bg-brand-navy hover:text-white transition-all duration-300"
          >
            info@thevaluation.com
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useI18n();
  const [formState, setFormState] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        `Phone: ${formState.phone || '-'}`,
        '',
        formState.message,
      ].join('\n')
    );

    setSubmitted(true);
    window.location.href = `mailto:info@thevaluation.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-grid" style={{
          backgroundImage: `linear-gradient(rgba(200,169,81,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-subtitle">{t.contact.subtitle}</span>
          <h2 className="section-title text-white">{t.contact.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{t.contact.address}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    719 เคพีเอ็น ทาวเวอร์ ชั้น 12 ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{t.contact.phoneLabel}</h4>
                  <p className="text-white/60 text-sm">0-2717-0801-8</p>
                  <p className="text-white/60 text-sm mt-1">มือถือ 081-512-9411, 083-888-4810</p>
                </div>
              </div>
            </div>

            <div className="card-3d">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{t.contact.emailLabel}</h4>
                  <a href="mailto:info@thevaluation.com" className="text-brand-gold text-sm hover:text-brand-gold-light transition-colors">
                    info@thevaluation.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-3d space-y-6">
            {submitted && (
              <div className="p-4 rounded-lg bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-sm flex items-center gap-2 animate-fade-in">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                กำลังเปิดอีเมลเพื่อส่งข้อความถึงเรา
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 text-sm mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">{t.contact.phone}</label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">{t.contact.email}</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-2">{t.contact.message}</label>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-gold focus:bg-white/10 transition-all duration-300 resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="relative py-32 bg-brand-navy-light/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-subtitle">{t.services.subtitle}</span>
          <h2 className="section-title text-white">{t.services.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
