import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ProcessSummary } from './components/ProcessSummary';
import { AboutStudio } from './components/AboutStudio';
import { CaseStudies } from './components/CaseStudies';
import { Services } from './components/Services';
import { FeaturedCase } from './components/FeaturedCase';
import { Testimonials } from './components/Testimonials';
import { VideoDemo } from './components/VideoDemo';
import { Pricing } from './components/Pricing';
import { NewsInsights } from './components/NewsInsights';
import { FAQ } from './components/FAQ';
import { WorkflowCTA } from './components/WorkflowCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingBadge } from './components/FloatingBadge';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('video-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col selection:bg-[#c7ff97] selection:text-[#050505] overflow-x-hidden">
      {/* Sticky top Navigation Header */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Content Flow */}
      <main className="flex-1 flex flex-col">
        {/* 01. Hero Section */}
        <Hero onOpenContact={scrollToContact} onOpenDemo={scrollToDemo} />

        {/* 02. Numbers & Client Logos Marquee */}
        <Marquee />

        {/* 03. Sprints / Check-ins Lifecycle */}
        <ProcessSummary />

        {/* 04. About the Studio */}
        <AboutStudio onOpenContact={scrollToContact} />

        {/* 05. Case Studies Grid */}
        <CaseStudies />

        {/* 06. Core Capabilities & Services */}
        <Services onOpenContact={scrollToContact} />

        {/* 07. Featured In-Depth Case: Helpdesk SaaS */}
        <FeaturedCase />

        {/* 08. Client Testimonials & Outcomes */}
        <Testimonials />

        {/* 09. Video Demo Walkthrough */}
        <div id="video-demo">
          <VideoDemo />
        </div>

        {/* 10. Pricing Plans & Engagement Models */}
        <Pricing onOpenContact={scrollToContact} />

        {/* 11. News & Insights Articles */}
        <NewsInsights />

        {/* 12. Pre-Call FAQ Accordion */}
        <FAQ onOpenContact={scrollToContact} />

        {/* 13. Workflow Audit Invitation CTA */}
        <WorkflowCTA onOpenContact={scrollToContact} />

        {/* 14. Contact Form & Status Rail */}
        <ContactForm />
      </main>

      {/* 15. Comprehensive Studio Footer */}
      <Footer />

      {/* Floating authentic Framer badge */}
      <FloatingBadge />
    </div>
  );
}
