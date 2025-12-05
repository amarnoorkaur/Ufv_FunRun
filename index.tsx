import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Layout } from './components/Layout';
import { Page } from './types';
import { ETHICAL_THEORIES, FAQS, LAND_ACKNOWLEDGEMENT, SAMPLE_DONATIONS, SAMPLE_COMMUNITY_POSTS, THEORY_FEATURE_MAPPINGS } from './constants';
import { 
  ShieldCheck, Heart, Users, Lock, Scale, Activity, Brain, Smile, Globe, 
  CheckCircle, ArrowRight, Smartphone, Calendar, UserCheck, Gift, BookOpen,
  Shirt, Zap, Package, ThumbsUp, MessageCircle, Search, Filter, Plus,
  Award, Recycle, TrendingUp, Send, Sparkles
} from 'lucide-react';

// --- Reusable UI Components ---

const SectionHeading = ({ children, align = 'center' }: { children: React.ReactNode, align?: 'center' | 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-ufv-dark mb-4">{children}</h2>
    <div className={`h-1.5 w-24 bg-ufv-green rounded-full ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

const PrimaryButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <button 
    onClick={onClick} 
    className={`bg-ufv-green text-white px-8 py-3 rounded-ufv font-heading font-bold hover:bg-opacity-90 transition-all shadow-soft flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <button 
    onClick={onClick} 
    className={`bg-white text-ufv-green border-2 border-ufv-green px-8 py-3 rounded-ufv font-heading font-bold hover:bg-ufv-light transition-all flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);

// --- Page Components ---

const HeroSection = ({ onNavigate }: { onNavigate: (page: Page) => void }) => (
  <div className="relative bg-ufv-dark text-white overflow-hidden min-h-[80vh] flex items-center">
    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552674605-46d5040292b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
      <div className="inline-block px-4 py-2 mb-8 rounded-full border border-ufv-lightGreen bg-ufv-green/30 text-ufv-lightGreen text-xs md:text-sm font-bold tracking-wider uppercase backdrop-blur-sm">
        A Community Wellness Initiative
      </div>
      <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-8 leading-tight">
        Running Together,<br /><span className="text-ufv-lightGreen">Thriving Together</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
        Built for our entire UFV family: students, staff, alumni, and local partners. Because when we move together, we build more than fitness. We build community.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <PrimaryButton onClick={() => onNavigate(Page.GET_INVOLVED)} className="text-lg px-10 py-4 shadow-lg hover:bg-ufv-lightGreen hover:text-ufv-dark">
          Join Our Community <ArrowRight size={20} />
        </PrimaryButton>
        <button 
          onClick={() => onNavigate(Page.ABOUT_APP)} 
          className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-ufv font-heading font-bold text-lg hover:bg-white hover:text-ufv-dark transition-colors"
        >
          How It Works
        </button>
      </div>
      {/* Values Promise Banner */}
      <div className="mt-16 flex flex-wrap gap-8 text-sm text-gray-300">
        <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-ufv-lightGreen" /> Your Privacy, Protected</div>
        <div className="flex items-center gap-2"><Heart size={18} className="text-ufv-lightGreen" /> Community First, Always</div>
        <div className="flex items-center gap-2"><Users size={18} className="text-ufv-lightGreen" /> Free for Everyone</div>
      </div>

      {/* Campus Illustration */}
      <div className="mt-16 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <svg className="w-full h-auto" width="100%" height="520" viewBox="0 0 1400 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Sky Gradient */}
          <defs>
            <linearGradient id="heroSkyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E9F7E9"/>
              <stop offset="100%" stopColor="#F1F6F1"/>
            </linearGradient>
            {/* Track path for runner animation */}
            <path id="heroTrackPath" 
                  d="M90 430 C350 370, 550 410, 750 390 S1200 440, 1340 400" 
                  fill="none"/>
          </defs>

          <rect width="1400" height="520" fill="url(#heroSkyGrad)"/>

          {/* Title - moved to top */}
          <text x="700" y="110" textAnchor="middle" fontSize="48" fill="#006341" fontFamily="Inter" fontWeight="600">
            Welcome to the UFV Fun Run Community
          </text>

          {/* Birds with gentle animation - positioned in sky corners */}
          <g>
            <path d="M120 160 q10-7 20 0 M160 170 q10-7 20 0" stroke="#6E8F6E" strokeWidth="2" fill="none">
              <animateTransform attributeName="transform" type="translate" values="0,0; 5,-3; 0,0" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M1200 150 q10-7 20 0 M1240 160 q10-7 20 0" stroke="#6E8F6E" strokeWidth="2" fill="none">
              <animateTransform attributeName="transform" type="translate" values="0,0; -5,-2; 0,0" dur="2.5s" repeatCount="indefinite"/>
            </path>
          </g>

          {/* Background Hills */}
          <path d="M0 360 Q350 260 700 320 T1400 300 V520 H0 Z" fill="#CFEAD0"/>
          <path d="M0 390 Q380 310 720 360 T1400 350 V520 H0 Z" fill="#B4DBB5"/>

          {/* Campus Buildings */}
          {/* Building 1 */}
          <rect x="160" y="230" width="200" height="110" fill="#DCE8DC" rx="10"/>
          <rect x="180" y="255" width="160" height="16" fill="#C0D6C0"/>
          <rect x="180" y="280" width="160" height="16" fill="#C0D6C0"/>
          <rect x="180" y="305" width="160" height="16" fill="#C0D6C0"/>

          {/* Building 2 */}
          <rect x="450" y="200" width="230" height="130" fill="#DCE8DC" rx="10"/>
          <rect x="475" y="225" width="180" height="18" fill="#C0D6C0"/>
          <rect x="475" y="255" width="180" height="18" fill="#C0D6C0"/>
          <rect x="475" y="285" width="180" height="18" fill="#C0D6C0"/>

          {/* Building 3 */}
          <rect x="780" y="220" width="200" height="120" fill="#DCE8DC" rx="10"/>
          <rect x="805" y="245" width="150" height="16" fill="#C0D6C0"/>
          <rect x="805" y="270" width="150" height="16" fill="#C0D6C0"/>
          <rect x="805" y="295" width="150" height="16" fill="#C0D6C0"/>

          {/* Trees with subtle sway animation */}
          <g>
            <circle cx="230" cy="330" r="32" fill="#0B9E43">
              <animateTransform attributeName="transform" type="scale" values="1,1; 1.02,0.98; 1,1" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="500" cy="330" r="32" fill="#0B9E43">
              <animateTransform attributeName="transform" type="scale" values="1,1; 0.98,1.02; 1,1" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="850" cy="330" r="32" fill="#0B9E43">
              <animateTransform attributeName="transform" type="scale" values="1,1; 1.02,0.98; 1,1" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1150" cy="330" r="32" fill="#0B9E43">
              <animateTransform attributeName="transform" type="scale" values="1,1; 0.98,1.02; 1,1" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="360" r="24" fill="#0B9E43"/>
            <circle cx="875" cy="360" r="24" fill="#0B9E43"/>
          </g>

          {/* Ground shading */}
          <ellipse cx="700" cy="450" rx="620" ry="60" fill="#E0EFE0"/>

          {/* Track Path */}
          <path d="M90 430 C350 370, 550 410, 750 390 S1200 440, 1340 400"
                stroke="#0B9E43" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.90"/>

          {/* Animated Runners */}
          {/* Runner 1 - Red */}
          <g>
            <ellipse rx="30" ry="8" fill="#000" opacity="0.15">
              <animateMotion dur="12s" repeatCount="indefinite">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="ry" values="8;6;8" dur="0.3s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          <g>
            <circle r="20" fill="#EF4444">
              <animateMotion dur="12s" repeatCount="indefinite">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="cy" values="0;-5;0" dur="0.3s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Runner 2 - Blue (offset start) */}
          <g>
            <ellipse rx="30" ry="8" fill="#000" opacity="0.15">
              <animateMotion dur="14s" repeatCount="indefinite" begin="-4s">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="ry" values="8;6;8" dur="0.35s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          <g>
            <circle r="20" fill="#3B82F6">
              <animateMotion dur="14s" repeatCount="indefinite" begin="-4s">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="cy" values="0;-5;0" dur="0.35s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Runner 3 - Orange (offset start) */}
          <g>
            <ellipse rx="30" ry="8" fill="#000" opacity="0.15">
              <animateMotion dur="16s" repeatCount="indefinite" begin="-8s">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="ry" values="8;6;8" dur="0.32s" repeatCount="indefinite"/>
            </ellipse>
          </g>
          <g>
            <circle r="20" fill="#F59E0B">
              <animateMotion dur="16s" repeatCount="indefinite" begin="-8s">
                <mpath xlinkHref="#heroTrackPath"/>
              </animateMotion>
              <animate attributeName="cy" values="0;-5;0" dur="0.32s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>
      </div>
    </div>
  </div>
);

const AboutInitiative = () => (
  <div className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading>Our Mission & Values</SectionHeading>
      
      <div className="text-xl text-gray-600 text-center mb-16 font-light max-w-2xl mx-auto">
        Technology that serves people first. Not profit, not data brokers, but you.
      </div>

      <div className="prose prose-lg mx-auto text-gray-700 space-y-8 font-sans leading-relaxed">
        <p>
          At UFV Fun Run, we believe that <strong>health, connection, and community belong to everyone</strong>, not just a few. This project was born out of a commitment to build something that serves our entire UFV family: students, staff, alumni, and local partners.
        </p>
        <p>
          We're dedicated to creating a space where every runner, regardless of their fitness level, schedule, or background, feels welcome, supported, and empowered. Because when we run together, we don't just build endurance, <em>we build relationships, belonging, and a healthier, stronger community</em>.
        </p>
        
        <div className="bg-ufv-light p-8 rounded-ufv border-l-8 border-ufv-green shadow-soft">
          <h3 className="text-2xl font-heading font-bold text-ufv-green mb-4">Our Promise</h3>
          <p className="text-base text-ufv-dark font-medium">
            We promise respect, privacy, and fairness because we genuinely care about you. Every decision we make considers its impact on all members of our community. Your wellbeing is not just a feature; it's our entire purpose.
          </p>
        </div>

        <p>
          Unlike commercial apps, we answer to no shareholders. Our only stakeholders are <strong>you</strong>: the students, faculty, alumni, and community members of the Fraser Valley. Together, we're building something that puts people before profit.
        </p>
      </div>

      {/* Community Stories Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-ufv border border-gray-200">
          <p className="text-gray-600 italic mb-4">"As a first-year student, I felt isolated on campus. Joining the Saturday run helped me make friends and feel like I actually belong here."</p>
          <p className="text-sm font-bold text-ufv-green">Sarah, Computer Science Student</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-ufv border border-gray-200">
          <p className="text-gray-600 italic mb-4">"I love that this app doesn't try to sell me anything or track my every move. It just helps me stay active with my colleagues."</p>
          <p className="text-sm font-bold text-ufv-green">Michael, UFV Staff Member</p>
        </div>
      </div>

      {/* Why This Project Matters Now */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-orange-100 rounded-full mb-6">
            <Sparkles className="text-orange-600" size={48} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-ufv-dark mb-4">Why This Project Matters Now</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Student wellbeing is at a critical moment. Here's why UFV is stepping up to lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Brain className="text-red-600" size={24} />
              </div>
              <h4 className="text-xl font-heading font-bold text-ufv-dark">Rising Student Stress</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Post-pandemic mental health challenges, financial pressures, and academic stress have created unprecedented need for accessible wellness resources. Students need support that meets them where they are.
            </p>
            <div className="bg-white/60 rounded-lg p-4 text-sm text-gray-600">
              <strong className="text-red-700">The reality:</strong> Many students cannot afford gym memberships, therapy, or wellness apps. Free, community-based solutions are essential.
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <h4 className="text-xl font-heading font-bold text-ufv-dark">Need for Ethical Alternatives</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Commercial fitness apps harvest data, create unhealthy competition, and exploit users for profit. Students deserve technology that respects their privacy and supports genuine wellbeing.
            </p>
            <div className="bg-white/60 rounded-lg p-4 text-sm text-gray-600">
              <strong className="text-blue-700">Our answer:</strong> Build apps that serve people, not shareholders. Prove that ethical tech is possible.
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-heading font-bold text-ufv-dark">UFV Leading Ethical Innovation</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Universities should model the values they teach. UFV has the academic foundation, community scale, and values alignment to demonstrate that technology can be built differently.
            </p>
            <div className="bg-white/60 rounded-lg p-4 text-sm text-gray-600">
              <strong className="text-green-700">The opportunity:</strong> If we succeed, other institutions can replicate this model. UFV becomes a leader.
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
              <h4 className="text-xl font-heading font-bold text-ufv-dark">Strengthening Community Belonging</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Loneliness and disconnection are epidemics on campuses. Shared physical activity builds bonds, creates traditions, and gives students a reason to show up for each other.
            </p>
            <div className="bg-white/60 rounded-lg p-4 text-sm text-gray-600">
              <strong className="text-purple-700">The vision:</strong> Saturday runs become UFV's signature community event. Running together, thriving together.
            </div>
          </div>
        </div>
      </div>

      {/* Why You Can Trust This Project */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
            <ShieldCheck className="text-ufv-green" size={48} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-ufv-dark mb-4">Why You Can Trust This Project</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand skepticism, especially when government funding is involved. Here's why this project is different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl p-8 border-l-4 border-ufv-green shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Scale className="text-red-600" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-ufv-dark mb-2">Addressing Community Skepticism</h4>
                <p className="text-gray-600 leading-relaxed">
                  Yes, this project received provincial funding from David Eby's government. We understand that raises questions. But here's the truth: this is one of <strong>dozens of community wellness grants</strong> distributed across BC to nonprofit organizations. It's not a political campaign tool. It's a public health investment, managed locally by UFV students, staff, and faculty.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-blue-500 shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="text-blue-600" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-ufv-dark mb-2">Complete Political Neutrality</h4>
                <p className="text-gray-600 leading-relaxed">
                  Zero political messaging. Zero campaign content. Zero partisan influence. Our governance board includes student representatives, faculty advisors, and community partners. <strong>No politicians</strong>. Decisions are made democratically by our community, not by any political office.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-purple-500 shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lock className="text-purple-600" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-ufv-dark mb-2">Transparent, Nonprofit Governance</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every dollar is accounted for. Quarterly financial reports are published publicly. No hidden fees, no profit motive, no corporate interests. This project exists solely to serve the UFV community. <strong>You can audit our finances anytime.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border-l-4 border-green-500 shadow-soft">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Heart className="text-green-600" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-heading font-bold text-ufv-dark mb-2">User Control & Democratic Decisions</h4>
                <p className="text-gray-600 leading-relaxed">
                  Major features and policies are decided by <strong>community vote</strong>. Your voice matters. You're not just a user, you're a stakeholder. We practice genuine participatory design, where students and community members shape the app's direction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-ufv-green text-white p-8 rounded-xl text-center">
          <p className="text-xl font-medium leading-relaxed">
            "We earn your trust through transparency, accountability, and genuine service to the community. Not through marketing slogans, but through our actions every single day."
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AboutApp = () => (
  <div className="bg-ufv-light py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading>The Saturday Fun Run & Beyond</SectionHeading>
      <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-16">
        More than just a tracker. It's a digital companion for our campus culture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Calendar, title: "Weekly Saturday Fun Run", desc: "Every Saturday at 10 AM, unlock a special campus route. Join hundreds of students for a 5K loop." },
          { icon: Activity, title: "Ethical Tracking", desc: "Track distance and pace locally. Your data stays on your phone until you share it." },
          { icon: Users, title: "Groups & Challenges", desc: "Create groups for your major or dorm. Compete in 'Total Distance' challenges for charity." }
        ].map((feature, idx) => (
          <div key={idx} className="bg-white p-8 rounded-ufv shadow-soft hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-ufv-green">
            <div className="w-14 h-14 bg-ufv-light rounded-full flex items-center justify-center mb-6">
              <feature.icon className="text-ufv-green" size={32} />
            </div>
            <h3 className="text-xl font-heading font-bold text-ufv-dark mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed font-sans">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-soft flex flex-col md:flex-row">
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold text-ufv-dark mb-8">Designed for Everyone</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
              <CheckCircle className="text-ufv-lightGreen mt-1 mr-4 flex-shrink-0" size={24} />
              <span className="text-gray-700 text-lg"><strong>No Wearable Needed:</strong> Just bring your phone.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-ufv-lightGreen mt-1 mr-4 flex-shrink-0" size={24} />
              <span className="text-gray-700 text-lg"><strong>Smartwatch Sync:</strong> Integrates with HealthKit & Google Fit.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-ufv-lightGreen mt-1 mr-4 flex-shrink-0" size={24} />
              <span className="text-gray-700 text-lg"><strong>Accessibility First:</strong> High contrast & screen-reader optimized.</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-gray-200 min-h-[400px] bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
      </div>
    </div>
  </div>
);

const Ethics = ({ onNavigate }: { onNavigate?: (page: Page) => void }) => {
  const principles = [
    {
      title: "You Decide What's Right for You",
      description: "Your pace. Your goals. Your comfort level. We never judge, rank, or punish you. Everyone's health journey looks different, and that's okay.",
      feature: "Personal goal-setting with no public rankings or performance scores",
      icon: Brain,
      color: "blue"
    },
    {
      title: "Designed for Our UFV Culture",
      description: "Inclusive. Respectful. Community rooted. We honor the identity of UFV and the land we live on, not corporate 'hustle culture.'",
      feature: "Saturday Fun Runs built around campus life and local traditions",
      icon: Globe,
      color: "green"
    },
    {
      title: "Built for Public Good, Not Profit",
      description: "No shareholders. No ads. No selling your data. This is a public initiative created to serve the community, not exploit it.",
      feature: "100% free forever with transparent, nonprofit governance",
      icon: Heart,
      color: "red"
    },
    {
      title: "Your Rights Come First",
      description: "We will NEVER use your data in a way that disrespects your autonomy. Privacy is not a feature. It's a duty we take seriously.",
      feature: "Local-first data storage with full export and delete controls",
      icon: ShieldCheck,
      color: "purple"
    },
    {
      title: "Built for Everyday Joy and Connection",
      description: "Fun Run is designed to give you immediate joy, connection, and a sense of achievement, every time you participate.",
      feature: "Instant endorphin boost through community runs and celebrations",
      icon: Smile,
      color: "yellow"
    },
    {
      title: "Rules That Protect Everyone, Always",
      description: "Our strict privacy rules and community guidelines exist to maximize long term happiness and safety for every member.",
      feature: "Uncompromising privacy policy and transparent moderation",
      icon: Lock,
      color: "indigo"
    },
    {
      title: "Fairness at Every Step",
      description: "Every member gets equal access to resources, opportunities, and support, no matter their background, income, or ability.",
      feature: "No paywalls, premium tiers, or exclusive features",
      icon: Scale,
      color: "teal"
    },
    {
      title: "We Lead with Character",
      description: "Kindness, honesty, and respect shape everything we design. Technology should help us become better humans, not distract us from being one.",
      feature: "Community Stories that celebrate growth, resilience, and support",
      icon: Award,
      color: "orange"
    }
  ];

  const features = [
    { icon: Lock, title: "No GPS Tracking", desc: "Your location stays private. We never store where you've been." },
    { icon: Users, title: "No Competition Pressure", desc: "Challenges are optional. No leaderboards that shame you." },
    { icon: Smartphone, title: "Accessibility-First", desc: "Screen readers, high contrast, works on older phones." },
    { icon: Gift, title: "Free Forever", desc: "No subscriptions, no premium tiers, no hidden costs." },
    { icon: ShieldCheck, title: "No Data Brokers", desc: "We don't sell, share, or monetize your information." },
    { icon: MessageCircle, title: "Community Driven", desc: "Features voted on by students. Your voice shapes the app." },
    { icon: Heart, title: "Equal Access", desc: "Same features for everyone, regardless of income." },
    { icon: Sparkles, title: "Transparent Updates", desc: "All changes explained. No sneaky policy updates." }
  ];

  const testimonials = [
    {
      quote: "I was so anxious about using fitness apps because they always made me feel bad about myself. Fun Run is different. It celebrates that I showed up, not how fast I went.",
      name: "Maya",
      role: "Second year Psychology Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      quote: "As someone with a disability, I've been excluded from so many wellness apps. This one actually thought about people like me. The accessibility features aren't an afterthought. They're built in.",
      name: "Jordan",
      role: "Graduate Student, Education",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "I love that my data isn't being sold to advertisers. For once, I feel like the product isn't ME. It's actually the service helping me.",
      name: "Aisha",
      role: "UFV Staff Member",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string, text: string, light: string, border: string } } = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      green: { bg: 'bg-ufv-green', text: 'text-ufv-green', light: 'bg-green-50', border: 'border-green-200' },
      red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-600', light: 'bg-yellow-50', border: 'border-yellow-200' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-600', light: 'bg-teal-50', border: 'border-teal-200' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' }
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Emotional Story Intro */}
      <div className="relative bg-gradient-to-br from-ufv-dark via-gray-900 to-ufv-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-ufv-green rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-ufv-lightGreen rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-ufv-lightGreen mb-8">
            <Heart size={16} className="animate-pulse" /> Our Design Philosophy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-8 leading-tight">
            Ethical by Design.<br />
            <span className="text-ufv-lightGreen">Human by Nature.</span>
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              We started building Fun Run because we were tired of wellness apps that made us feel <em>worse</em> about ourselves. Apps that tracked our every move, sold our data, and pressured us to compete.
            </p>
            <p>
              We wanted something different. Something built by students, for students. Something that celebrates showing up, not just showing off.
            </p>
            <p className="text-white font-medium">
              This is technology that respects you. Wellness that welcomes everyone. A community that cares.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-ufv-lightGreen" /> Free Forever
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-ufv-lightGreen" /> No Data Sales
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-ufv-lightGreen" /> Community Owned
            </div>
          </div>
        </div>
      </div>

      {/* Our Ethical Design Principles */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ufv-dark mb-4">Our Ethical Design Principles</h2>
            <div className="h-1.5 w-24 bg-ufv-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These aren't just slogans. They're the values that guide every feature, every decision, and every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => {
              const colors = getColorClasses(principle.color);
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl p-6 border ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div className={`w-14 h-14 ${colors.light} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <principle.icon className={colors.text} size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-ufv-dark mb-3 leading-snug">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{principle.description}</p>
                  <div className={`${colors.light} rounded-lg p-3 border ${colors.border}`}>
                    <p className="text-xs font-medium text-gray-700">
                      <span className={`${colors.text} font-bold`}>In the app:</span> {principle.feature}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How These Principles Shape Your Experience */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ufv-dark mb-4">How These Principles Shape Your Experience</h2>
            <div className="h-1.5 w-24 bg-ufv-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every feature in Fun Run was designed with these principles in mind. Here's what that looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-ufv-light to-white rounded-xl p-6 border border-gray-200 hover:border-ufv-green transition-all duration-300 hover:shadow-soft group"
              >
                <div className="w-12 h-12 bg-ufv-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ufv-green transition-colors">
                  <feature.icon className="text-ufv-green group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-heading font-bold text-ufv-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ethics in Real Life - Student Voices */}
      <div className="py-24 bg-ufv-green/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ufv-dark mb-4">Ethics in Real Life</h2>
            <div className="h-1.5 w-24 bg-ufv-green rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people in our community. This is what ethical design feels like.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-ufv-green rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-serif">"</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-ufv-green/20"
                  />
                  <div>
                    <p className="font-heading font-bold text-ufv-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Difference We're Making */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-ufv-dark to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ufv-lightGreen rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="text-ufv-lightGreen" size={32} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 leading-snug max-w-3xl mx-auto">
                Ethics isn't a checkbox for us. It's the standard we're building toward every single day.
              </h3>
              
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                When you join the Fun Run community, you're choosing technology that respects you as a human being. Not as a data point. Not as a revenue source. As a person who deserves wellness without exploitation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate && onNavigate(Page.ABOUT_APP)}
                  className="px-8 py-4 bg-ufv-lightGreen text-ufv-dark rounded-xl font-heading font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  Explore the App <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onNavigate && onNavigate(Page.GET_INVOLVED)}
                  className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-heading font-bold hover:bg-white/20 transition-colors"
                >
                  Join the Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Banner */}
      <div className="py-16 bg-ufv-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldCheck className="text-white" size={32} />
            <h3 className="text-2xl font-heading font-bold text-white">Our Commitment to You</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-sm text-green-100">Free, Forever</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">Zero</p>
              <p className="text-sm text-green-100">Data Sold to Third Parties</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-bold mb-2">Always</p>
              <p className="text-sm text-green-100">Community Governed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Impact = () => (
  <div className="py-24 bg-ufv-dark text-white relative overflow-hidden">
    {/* Abstract background shape */}
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-ufv-green rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-heading font-bold mb-8 text-white">Community Impact</h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
            Imagine a UFV campus where wellness isn't a side note. Every Saturday, students and staff lace up their running shoes, not for competition, but for community. Every step counts: for your health, your friends, your campus, and your future.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="mt-1 bg-white/10 p-3 rounded-lg h-fit"><Brain className="text-ufv-lightGreen" size={28} /></div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Mental Wellness</h3>
                <p className="text-gray-400 leading-relaxed">Running together helps reduce stress and anxiety. We care about your wellbeing beyond grades. Movement is medicine, and community is the cure for isolation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="mt-1 bg-white/10 p-3 rounded-lg h-fit"><Users className="text-ufv-lightGreen" size={28} /></div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Belonging & Connection</h3>
                <p className="text-gray-400 leading-relaxed">Everyone belongs, whether you run for fun, fitness, or friendship. We create shared, low-pressure events where new friendships bloom naturally.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="mt-1 bg-white/10 p-3 rounded-lg h-fit"><Scale className="text-ufv-lightGreen" size={28} /></div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Giving Back</h3>
                <p className="text-gray-400 leading-relaxed">Any resources gathered go right back into the community, supporting student wellness programs, campus clubs, and local businesses. Benefits shared fairly, for everyone.</p>
              </div>
            </div>
          </div>

          {/* Stakeholder Benefits */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-ufv-lightGreen">Students</div>
              <p className="text-sm text-gray-400">Free fitness & friends</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-ufv-lightGreen">Staff</div>
              <p className="text-sm text-gray-400">Work-life wellness</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-ufv-lightGreen">Alumni</div>
              <p className="text-sm text-gray-400">Stay connected</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-ufv-lightGreen">Local Partners</div>
              <p className="text-sm text-gray-400">Community growth</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-ufv-lightGreen opacity-20 rounded-2xl transform rotate-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Students exercising" 
            className="relative rounded-2xl shadow-2xl border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  </div>
);

const Comparison = () => (
  <div className="py-24 bg-ufv-light">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading>Why We're Different</SectionHeading>
      <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
        We prioritize your wellbeing, your privacy, and your community, not shareholder returns.
      </p>

      <div className="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-6 border-b border-gray-200 w-1/3 text-gray-500 font-heading uppercase text-sm tracking-wider">What Matters</th>
                <th className="p-6 border-b border-gray-200 text-red-700 font-heading font-bold text-lg">Commercial Apps</th>
                <th className="p-6 border-b border-ufv-green bg-ufv-green/10 text-ufv-green font-heading font-bold text-lg">UFV Fun Run</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-sans">
              {[
                { feature: "Our Purpose", bad: "Profit & Growth", good: "Community Wellbeing" },
                { feature: "Your Data", bad: "Sold to advertisers", good: "Private & Protected" },
                { feature: "Cost", bad: "Subscriptions & Paywalls", good: "Free Forever, For All" },
                { feature: "Design Goal", bad: "Maximize screen time", good: "Support your wellness" },
                { feature: "Who Benefits", bad: "Shareholders", good: "You & Your Community" },
                { feature: "Transparency", bad: "Hidden algorithms", good: "Open & Honest" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-semibold text-gray-700">{row.feature}</td>
                  <td className="p-6 text-gray-500">{row.bad}</td>
                  <td className="p-6 bg-ufv-green/5 text-ufv-dark font-bold flex items-center gap-2">
                    <CheckCircle size={16} className="text-ufv-lightGreen" />
                    {row.good}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Values Statement */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 italic max-w-2xl mx-auto">
          "We believe technology should serve people, not the other way around. That's not just our slogan; it's how we make every decision."
        </p>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
          <ShieldCheck className="text-ufv-green" size={48} />
        </div>
        <h2 className="text-4xl font-heading font-bold text-ufv-dark mb-6">Privacy, Transparency & Trust</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We understand that trust is earned, and that starts with respect for your privacy.
        </p>
      </div>

      {/* Our Commitment Banner */}
      <div className="bg-ufv-green text-white p-8 rounded-xl mb-10 text-center">
        <p className="text-lg font-medium leading-relaxed">
          "Your data is your own. We will <strong>never</strong> sell it, track you without consent, or exploit your information. Respecting your privacy and autonomy is not optional. It's our duty."
        </p>
      </div>

      <div className="bg-ufv-light p-10 rounded-xl shadow-inner space-y-10 border border-gray-200">
        <div className="flex gap-6">
            <div className="mt-1"><UserCheck className="text-ufv-dark" size={24}/></div>
            <div>
              <h3 className="text-xl font-heading font-bold text-ufv-dark mb-3">What We Collect (Only the Essentials)</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Account credentials (encrypted and secure).</li>
                <li>Distance and time to help you track your personal progress.</li>
                <li>Self reported mood scores (completely optional).</li>
              </ul>
              <p className="mt-4 text-sm text-ufv-green font-medium">You always stay in control: you choose what to share.</p>
            </div>
        </div>
        <div className="flex gap-6">
            <div className="mt-1"><Lock className="text-ufv-dark" size={24}/></div>
            <div>
                <h3 className="text-xl font-heading font-bold text-ufv-dark mb-3">What We Will NEVER Do</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Sell your data to advertisers or third parties.</li>
                    <li>Track your exact GPS location history.</li>
                    <li>Run ads or hide features behind paywalls.</li>
                    <li>Share your information without your explicit consent.</li>
                </ul>
            </div>
        </div>
        <div className="flex gap-6">
            <div className="mt-1"><Globe className="text-ufv-dark" size={24}/></div>
            <div>
                <h3 className="text-xl font-heading font-bold text-ufv-dark mb-3">Your Rights & Our Governance</h3>
                <p className="text-gray-600 leading-relaxed">
                    All data is stored on Canadian servers in compliance with BC's FIPPA laws. You can download or delete your entire history with one button tap. Equal protection for everyone, no exceptions.
                </p>
            </div>
        </div>
      </div>

      {/* Trust Statement */}
      <div className="mt-10 text-center">
        <p className="text-gray-600 italic">"Our goal is simple: we want you to feel safe, respected, and confident every time you log in."</p>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-ufv-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-ufv shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-heading font-bold text-lg text-ufv-dark">{faq.question}</h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-ufv-green/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-5 h-5 text-ufv-green" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600 leading-relaxed font-sans">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GetInvolved = () => (
  <div className="py-32 bg-ufv-green text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Join Us. You Belong Here</h2>
      <p className="text-2xl text-green-50 mb-6 font-light">
        By joining the Fun Run, you become part of something bigger: a shared commitment to wellbeing, fairness, and community care.
      </p>
      <p className="text-lg text-green-100 mb-12 max-w-2xl mx-auto">
        Whether you're a student, staff member, alumni, or community partner, everyone is welcome. No pressure, no judgment, just community.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-10 py-4 bg-white text-ufv-green rounded-ufv font-heading font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center justify-center gap-3">
          <Smartphone size={24} /> Download for iOS
        </button>
        <button className="px-10 py-4 bg-ufv-dark text-white rounded-ufv font-heading font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl flex items-center justify-center gap-3">
          <Smartphone size={24} /> Download for Android
        </button>
      </div>
      <p className="mt-10 text-white/70 text-sm font-sans">
        Also available for Apple Watch and WearOS. Always free, forever.
      </p>

      {/* Community Charter Snippet */}
      <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto text-left">
        <h3 className="text-xl font-heading font-bold mb-4 text-center">Our Community Charter</h3>
        <p className="text-green-100 text-sm leading-relaxed text-center">
          By joining the Fun Run, we commit together to respect each other, support each other's privacy, and run for shared wellbeing. Your participation, feedback, and trust matter. We build this together.
        </p>
      </div>

      {/* Ways to Get Involved */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="bg-white/10 p-6 rounded-lg">
          <Heart className="mx-auto mb-3" size={32} />
          <h4 className="font-bold mb-2">Become a Run Leader</h4>
          <p className="text-sm text-green-100">Help organize and lead Saturday runs</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <Users className="mx-auto mb-3" size={32} />
          <h4 className="font-bold mb-2">Volunteer</h4>
          <p className="text-sm text-green-100">Support events and welcome newcomers</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <Globe className="mx-auto mb-3" size={32} />
          <h4 className="font-bold mb-2">Partner With Us</h4>
          <p className="text-sm text-green-100">Local businesses and wellness centres</p>
        </div>
      </div>
    </div>
  </div>
);

// --- GiveHub Component ---
const GiveHub = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Items', icon: Package },
    { id: 'fitness', label: 'Fitness', icon: Activity },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'clothing', label: 'Clothing', icon: Shirt },
    { id: 'appliances', label: 'Appliances', icon: Zap },
  ];

  const filteredDonations = SAMPLE_DONATIONS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !item.claimed;
  });

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'fitness': return <Activity size={16} />;
      case 'books': return <BookOpen size={16} />;
      case 'clothing': return <Shirt size={16} />;
      case 'appliances': return <Zap size={16} />;
      default: return <Package size={16} />;
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
            <Gift className="text-ufv-green" size={48} />
          </div>
          <h2 className="text-4xl font-heading font-bold text-ufv-dark mb-4">GiveHub</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            A community driven marketplace where UFV members donate and claim items for free. Reduce waste, help peers, build community.
          </p>
          
          {/* Ethical Values Banner */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
              <Recycle size={16} /> Circular Economy
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
              <Users size={16} /> Equal Access For All
            </div>
            <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm">
              <Award size={16} /> Earn Impact Points
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-ufv-light p-6 rounded-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-ufv-green focus:ring-2 focus:ring-ufv-green/20 outline-none transition-all"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-ufv-green text-white px-6 py-3 rounded-lg font-bold hover:bg-ufv-dark transition-colors">
              <Plus size={20} /> Donate an Item
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mt-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-ufv-green text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <cat.icon size={16} /> {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDonations.map(item => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                      item.category === 'fitness' ? 'bg-orange-100 text-orange-700' :
                      item.category === 'books' ? 'bg-blue-100 text-blue-700' :
                      item.category === 'clothing' ? 'bg-pink-100 text-pink-700' :
                      item.category === 'appliances' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {getCategoryIcon(item.category)}
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.condition === 'new' ? 'bg-green-100 text-green-700' :
                      item.condition === 'likeNew' ? 'bg-teal-100 text-teal-700' :
                      item.condition === 'good' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.condition}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-ufv-green font-bold text-sm">
                    <Award size={14} /> +{item.impactPoints} pts
                  </div>
                </div>
                
                <h3 className="text-lg font-heading font-bold text-ufv-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img src={item.donorAvatar} alt={item.donorName} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.donorName}</p>
                      <p className="text-xs text-gray-500">{item.postedDate}</p>
                    </div>
                  </div>
                  <button className="bg-ufv-green text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-ufv-dark transition-colors">
                    Claim Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-ufv-dark text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Community Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-ufv-lightGreen mb-2">247</div>
              <p className="text-gray-400 text-sm">Items Donated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufv-lightGreen mb-2">189</div>
              <p className="text-gray-400 text-sm">Items Claimed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufv-lightGreen mb-2">$4,200</div>
              <p className="text-gray-400 text-sm">Value Shared</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-ufv-lightGreen mb-2">156</div>
              <p className="text-gray-400 text-sm">Active Givers</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm italic">
            "Promoting circular economy practices aligns with sustainability ethics. Reducing inequities by allowing everyone equal access regardless of financial background."
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Community Stories Component ---
const CommunityStories = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [newComment, setNewComment] = useState<{[key: string]: string}>({});

  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'successStory', label: 'Success Stories' },
    { id: 'mentalHealth', label: 'Mental Health' },
    { id: 'seekingAdvice', label: 'Seeking Advice' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'motivation', label: 'Motivation' },
  ];

  const filteredPosts = SAMPLE_COMMUNITY_POSTS.filter(post => 
    activeFilter === 'all' || post.category === activeFilter
  );

  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'successStory': return 'bg-green-100 text-green-700';
      case 'mentalHealth': return 'bg-purple-100 text-purple-700';
      case 'seekingAdvice': return 'bg-orange-100 text-orange-700';
      case 'tips': return 'bg-blue-100 text-blue-700';
      case 'motivation': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    // Convert camelCase to Title Case with spaces
    return category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  };

  return (
    <div className="py-24 bg-ufv-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
            <MessageCircle className="text-ufv-green" size={48} />
          </div>
          <h2 className="text-4xl font-heading font-bold text-ufv-dark mb-4">Community Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your journey, seek advice, and connect with others. Your story might be exactly what someone needs to hear today.
          </p>
        </div>

        {/* Create Post Banner */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="text-ufv-green" size={24} />
            </div>
            <div className="flex-1">
              <button className="w-full text-left px-4 py-3 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 transition-colors">
                Share your story, ask a question, or offer encouragement...
              </button>
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100 transition-colors">
                  <TrendingUp size={14} /> Share Success
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors">
                  <Brain size={14} /> Mental Health
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-colors">
                  <MessageCircle size={14} /> Ask Advice
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors">
                  <Sparkles size={14} /> Share Tips
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id 
                  ? 'bg-ufv-green text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Post Header */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-bold text-ufv-dark">{post.author}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryStyle(post.category)}`}>
                        {getCategoryLabel(post.category)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{post.postedDate}</p>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-ufv-dark mb-3">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{post.content}</p>

                {/* Post Actions */}
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-ufv-green transition-colors">
                    <ThumbsUp size={18} /> <span className="font-medium">{post.likes}</span>
                  </button>
                  <button 
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className="flex items-center gap-2 text-gray-500 hover:text-ufv-green transition-colors"
                  >
                    <MessageCircle size={18} /> <span className="font-medium">{post.comments.length} Comments</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-ufv-green transition-colors ml-auto">
                    <Heart size={18} /> Support
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              {expandedPost === post.id && (
                <div className="bg-gray-50 border-t border-gray-200 p-6">
                  {/* Existing Comments */}
                  <div className="space-y-4 mb-6">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="flex gap-3">
                        <img src={comment.authorAvatar} alt={comment.author} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                        <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-ufv-dark">{comment.author}</span>
                            <span className="text-xs text-gray-400">{comment.postedDate}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{comment.content}</p>
                          <button className="flex items-center gap-1 text-gray-400 hover:text-ufv-green text-sm mt-2 transition-colors">
                            <ThumbsUp size={14} /> {comment.likes}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Comment */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-ufv-green" size={16} />
                    </div>
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        placeholder="Add a supportive comment..."
                        value={newComment[post.id] || ''}
                        onChange={(e) => setNewComment({...newComment, [post.id]: e.target.value})}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-ufv-green focus:ring-2 focus:ring-ufv-green/20 outline-none transition-all text-sm"
                      />
                      <button className="bg-ufv-green text-white px-4 py-2 rounded-lg hover:bg-ufv-dark transition-colors">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Community Guidelines */}
        <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-heading font-bold text-ufv-dark mb-4 flex items-center gap-2">
            <Heart className="text-ufv-green" size={24} /> Community Guidelines
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-ufv-lightGreen mt-0.5 flex-shrink-0" size={18} />
              <span>Be kind, supportive, and respectful to all members</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-ufv-lightGreen mt-0.5 flex-shrink-0" size={18} />
              <span>Share personal experiences, not medical advice</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-ufv-lightGreen mt-0.5 flex-shrink-0" size={18} />
              <span>Protect privacy. Do not share others' information</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-ufv-lightGreen mt-0.5 flex-shrink-0" size={18} />
              <span>If struggling, reach out to UFV Counseling Services</span>
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic">
            This is a safe space for our community. If you see content that concerns you, please report it to our moderation team.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- About the Grant Page ---
const AboutGrant = () => (
  <div className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
          <Globe className="text-ufv-green" size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-ufv-dark mb-6">About the Provincial Grant</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the funding, governance, and transparency behind the UFV Fun Run initiative.
        </p>
      </div>

      {/* Why the Province Funded This */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Scale className="text-blue-600" size={24} />
          </div>
          Why the Province Funded This Project
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            In 2024, the BC government under Premier David Eby launched a <strong>Community Wellness Grant Program</strong> to address rising mental health challenges, social isolation, and physical inactivity among postsecondary students across the province.
          </p>
          <p>
            UFV's proposal for a community driven fitness app stood out because it emphasized <strong>ethical technology, local partnership, and democratic governance</strong>. Unlike commercial fitness apps that prioritize profit and data extraction, our proposal centered on genuine community wellbeing.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-900 font-medium mb-2">
              <strong>Key Funding Criteria We Met:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-blue-800">
              <li>Addresses documented mental health and physical wellness needs among students</li>
              <li>Community governed with transparent decision making processes</li>
              <li>Free and accessible to all students, staff, alumni, and community partners</li>
              <li>Built on ethical technology principles taught in UFV's own curriculum</li>
              <li>Supports local Fraser Valley businesses and circular economy initiatives</li>
            </ul>
          </div>
          <p>
            This grant is part of a broader public health investment, not a partisan political initiative. Similar grants were awarded to universities, colleges, and community organizations across BC, regardless of their location's political leanings.
          </p>
        </div>
      </div>

      {/* Why the UFV Community is Skeptical */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Brain className="text-orange-600" size={24} />
          </div>
          Understanding Community Skepticism
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            We recognize that many in the UFV community have legitimate concerns about a project funded by the provincial government. Common questions include:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="font-bold text-ufv-dark mb-2">❓ "Is this just political branding?"</p>
              <p className="text-gray-600 text-sm">No. There is zero political messaging, no campaign content, and no partisan influence on app features or governance.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="font-bold text-ufv-dark mb-2">❓ "Will my data be shared with the government?"</p>
              <p className="text-gray-600 text-sm">Absolutely not. Your data stays private. The government has no access to user data. None. Full stop.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="font-bold text-ufv-dark mb-2">❓ "Who really controls this project?"</p>
              <p className="text-gray-600 text-sm">UFV students, staff, and faculty. Our governance board operates independently with full authority over all decisions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="font-bold text-ufv-dark mb-2">❓ "What happens when the grant runs out?"</p>
              <p className="text-gray-600 text-sm">We've built a sustainability plan with minimal ongoing costs. Community donations and UFV institutional support will keep it free forever.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Remain Neutral, Ethical, and Community Owned */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="text-green-600" size={24} />
          </div>
          Neutrality, Ethics & Community Ownership
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-ufv-green rounded-xl p-6">
            <div className="w-12 h-12 bg-ufv-green/10 rounded-full flex items-center justify-center mb-4">
              <Users className="text-ufv-green" size={24} />
            </div>
            <h3 className="font-heading font-bold text-lg text-ufv-dark mb-3">Community Governance Board</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 5 student representatives (elected)</li>
              <li>• 2 faculty advisors (ethics & CS)</li>
              <li>• 2 staff members (wellness office)</li>
              <li>• 2 community partners (local businesses)</li>
              <li>• 0 politicians or government officials</li>
            </ul>
          </div>
          <div className="bg-white border-2 border-ufv-green rounded-xl p-6">
            <div className="w-12 h-12 bg-ufv-green/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="text-ufv-green" size={24} />
            </div>
            <h3 className="font-heading font-bold text-lg text-ufv-dark mb-3">Data Independence</h3>
            <p className="text-sm text-gray-600">
              All user data is stored on Canadian servers managed by UFV IT. The provincial government has <strong>zero access</strong>. Our privacy architecture is audited annually by independent third parties.
            </p>
          </div>
          <div className="bg-white border-2 border-ufv-green rounded-xl p-6">
            <div className="w-12 h-12 bg-ufv-green/10 rounded-full flex items-center justify-center mb-4">
              <Scale className="text-ufv-green" size={24} />
            </div>
            <h3 className="font-heading font-bold text-lg text-ufv-dark mb-3">Democratic Decisions</h3>
            <p className="text-sm text-gray-600">
              Major features and policies require community approval via student vote. Quarterly town halls allow any UFV member to propose changes, challenge decisions, or request audits.
            </p>
          </div>
        </div>
      </div>

      {/* Transparent Use of Funds */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <TrendingUp className="text-purple-600" size={24} />
          </div>
          How Funds Are Used Transparently
        </h2>
        <div className="bg-ufv-light rounded-xl p-8 mb-6">
          <h3 className="text-xl font-heading font-bold text-ufv-dark mb-6">Grant Allocation Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark">App Development & Maintenance</p>
                  <p className="text-sm text-gray-500">Student developers, hosting, security audits</p>
                </div>
              </div>
              <span className="font-bold text-ufv-green">45%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark">Student Wellness Programs</p>
                  <p className="text-sm text-gray-500">Mental health resources, fitness workshops</p>
                </div>
              </div>
              <span className="font-bold text-ufv-green">30%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark">Community Events & Partnerships</p>
                  <p className="text-sm text-gray-500">Saturday runs, local business partnerships</p>
                </div>
              </div>
              <span className="font-bold text-ufv-green">15%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark">Transparency & Governance</p>
                  <p className="text-sm text-gray-500">Audits, reports, community consultations</p>
                </div>
              </div>
              <span className="font-bold text-ufv-green">10%</span>
            </div>
          </div>
        </div>
        <div className="bg-ufv-green text-white p-6 rounded-xl">
          <p className="text-lg font-medium">
            📊 <strong>Full financial reports published quarterly</strong> on our website. Every dollar accounted for. No hidden costs, no administrative bloat, no profit margins.
          </p>
        </div>
      </div>

      {/* How the Project Supports Students Financially */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <Heart className="text-red-600" size={24} />
          </div>
          Supporting Students Financially
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            This project directly benefits students' financial wellbeing in multiple ways:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
              <h4 className="font-heading font-bold text-xl text-green-900 mb-4">💰 Paid Student Opportunities</h4>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Part-time developer positions (competitive hourly wages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Event coordination roles for Saturday runs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Content creation and community management positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>UX research and design internships</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <h4 className="font-heading font-bold text-xl text-blue-900 mb-4">💸 Cost Savings for Students</h4>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Free fitness tracking (saves $10-20/month on commercial apps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>GiveHub eliminates costs for textbooks, equipment, clothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Reduces need for expensive gym memberships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={18} />
                  <span>Mental health benefits reduce counseling expenses</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <p className="text-purple-900 font-medium">
              <strong>Student Wellness Scholarship Fund:</strong> A portion of any surplus funds goes directly into scholarships for students facing financial barriers to wellness activities (fitness classes, sports equipment, nutritious food).
            </p>
          </div>
        </div>
      </div>

      {/* Why UFV is Leading Ethical Technology */}
      <div className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-ufv-dark mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-ufv-green/20 rounded-full flex items-center justify-center">
            <Sparkles className="text-ufv-green" size={24} />
          </div>
          Why UFV is Leading Ethical Technology
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            UFV has a unique opportunity and responsibility to demonstrate that technology can be built differently. Here's why:
          </p>
          <div className="bg-white rounded-xl p-8 border-2 border-ufv-green shadow-soft">
            <h4 className="font-heading font-bold text-2xl text-ufv-green mb-6">UFV's Ethical Tech Advantage</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="text-ufv-green" size={18} />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Academic Foundation</p>
                  <p className="text-gray-600">UFV's Computer Science and Philosophy programs teach the ethical theories we're implementing. Students learn these frameworks in class, then see them applied in real-world technology.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-ufv-green" size={18} />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Community-Scale Innovation</p>
                  <p className="text-gray-600">UFV's size allows for genuine participatory design. Every student, staff member, and community partner can meaningfully contribute to governance and feature development.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="text-ufv-green" size={18} />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Fraser Valley Values</p>
                  <p className="text-gray-600">Our region's multicultural fabric, commitment to sustainability, and respect for Indigenous land stewardship inform our technology design in ways Silicon Valley cannot replicate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-ufv-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="text-ufv-green" size={18} />
                </div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Model for Other Institutions</p>
                  <p className="text-gray-600">If we succeed, other universities can replicate this model. UFV can become a leader in ethical technology, attracting students who want to build tech that serves people, not exploits them.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-ufv-green text-white p-8 rounded-xl text-center">
            <p className="text-2xl font-heading font-bold mb-4">This is UFV's Moment</p>
            <p className="text-lg leading-relaxed">
              We can prove that ethical technology isn't just a utopian dream. It's practical, scalable, and sustainable. The Fun Run is our proof of concept.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-ufv-light p-12 rounded-2xl">
        <h3 className="text-2xl font-heading font-bold text-ufv-dark mb-4">Questions or Concerns?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Transparency is our commitment. If you have questions about funding, governance, or privacy, we want to hear from you.
        </p>
        <button className="bg-ufv-green text-white px-8 py-4 rounded-ufv font-heading font-bold hover:bg-ufv-dark transition-colors">
          Contact Our Governance Board
        </button>
      </div>
    </div>
  </div>
);

// --- Local Economic & Social Impact Component ---
const LocalImpact = () => (
  <div className="py-24 bg-gradient-to-b from-white to-ufv-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
          <TrendingUp className="text-ufv-green" size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-ufv-dark mb-6">Local Economic & Social Impact</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How the Fun Run strengthens the Fraser Valley economy, supports local businesses, and builds community resilience.
        </p>
      </div>

      {/* Impact Areas Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Support for Fraser Valley Wellness Businesses */}
        <div className="bg-white rounded-2xl p-10 shadow-soft border border-gray-200 hover:border-ufv-green transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
              <Smile className="text-blue-600" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ufv-dark">Supporting Local Wellness Businesses</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              The Fun Run app <strong>partners with Fraser Valley wellness businesses</strong> to create mutual benefit. Local gyms, yoga studios, healthy cafes, and sports equipment stores gain visibility and customer traffic through our community.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="font-bold text-blue-900 mb-3">How It Works:</p>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Partner businesses offer exclusive discounts to Fun Run participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Saturday runs feature local cafes as refreshment stops (paid partnerships)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Local health professionals host free workshops via the app</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={16} />
                  <span>Community challenges spotlight Fraser Valley wellness destinations</span>
                </li>
              </ul>
            </div>
            <p className="text-sm italic text-gray-600">
              Result: Healthier students support healthier local businesses. Economic benefit stays in the Fraser Valley, not siphoned off to Silicon Valley corporations.
            </p>
          </div>
        </div>

        {/* Reduced Financial Strain on Students */}
        <div className="bg-white rounded-2xl p-10 shadow-soft border border-gray-200 hover:border-ufv-green transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <Heart className="text-green-600" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ufv-dark">Reducing Student Financial Strain</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              Financial stress is one of the biggest barriers to student wellness. The Fun Run removes multiple cost barriers simultaneously.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-800 font-bold text-sm">$0</span>
                </div>
                <div>
                  <p className="font-bold text-green-900">No App Subscription Fees</p>
                  <p className="text-sm text-green-800">Saves $10-20/month compared to Strava Premium, Peloton, or Nike Run Club premium tiers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-800 font-bold text-sm">$0</span>
                </div>
                <div>
                  <p className="font-bold text-green-900">No Gym Membership Required</p>
                  <p className="text-sm text-green-800">Outdoor running is free. Saves $30-80/month on gym fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-800 font-bold text-sm">$0</span>
                </div>
                <div>
                  <p className="font-bold text-green-900">No Equipment Costs</p>
                  <p className="text-sm text-green-800">Works on any smartphone. No wearables required.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <p className="text-3xl font-bold mb-2">$480 - $1,200</p>
              <p className="text-sm">Estimated annual savings per student compared to commercial alternatives</p>
            </div>
          </div>
        </div>

        {/* GiveHub Circular Economy */}
        <div className="bg-white rounded-2xl p-10 shadow-soft border border-gray-200 hover:border-ufv-green transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center">
              <Recycle className="text-purple-600" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ufv-dark">GiveHub: Circular Economy in Action</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              GiveHub creates a <strong>circular economy within the UFV community</strong>, where resources circulate among students without requiring money to change hands.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-900 mb-3">Economic Benefits:</p>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li className="flex items-start gap-2">
                  <Recycle className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong>Waste reduction:</strong> Extends product lifespan, reduces landfill burden</span>
                </li>
                <li className="flex items-start gap-2">
                  <Recycle className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong>Resource efficiency:</strong> Items get reused instead of sitting unused in closets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Recycle className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong>Social capital:</strong> Builds trust and reciprocity within the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <Recycle className="text-purple-600 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong>Equity:</strong> Provides access to resources regardless of financial means</span>
                </li>
              </ul>
            </div>
            <p className="text-sm italic text-gray-600">
              "One student's unused textbook becomes another's lifeline. One person's outgrown fitness gear empowers someone else to start their wellness journey. Value created without extraction."
            </p>
          </div>
        </div>

        {/* Health → Wellbeing → Academic Success */}
        <div className="bg-white rounded-2xl p-10 shadow-soft border border-gray-200 hover:border-ufv-green transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
              <Brain className="text-orange-600" size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ufv-dark">Health → Wellbeing → Academic Success</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              Physical activity isn't just about fitness. <strong>Research shows direct links between physical health, mental wellbeing, and academic performance.</strong>
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏃</div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Regular Physical Activity</p>
                  <p className="text-sm text-gray-600">Saturday runs + personal tracking encourage consistent movement</p>
                </div>
              </div>
              <div className="text-center text-2xl text-ufv-green">↓</div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">😊</div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Improved Mental Health</p>
                  <p className="text-sm text-gray-600">Reduced anxiety, depression, and stress. Better sleep quality.</p>
                </div>
              </div>
              <div className="text-center text-2xl text-ufv-green">↓</div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Enhanced Academic Performance</p>
                  <p className="text-sm text-gray-600">Better focus, memory, and cognitive function. Higher course completion rates.</p>
                </div>
              </div>
              <div className="text-center text-2xl text-ufv-green">↓</div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <p className="font-bold text-ufv-dark mb-1">Graduation & Career Success</p>
                  <p className="text-sm text-gray-600">Better job prospects, higher earning potential, lifelong wellness habits.</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
              <p className="text-orange-900 font-medium">
                <strong>For UFV:</strong> Higher retention rates, better graduation outcomes, enhanced institutional reputation → attracts more students and funding
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Happiness → Stronger Local Economy */}
      <div className="bg-gradient-to-r from-ufv-green to-ufv-dark text-white rounded-2xl p-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading font-bold mb-6">Community Happiness → Stronger Local Economy</h3>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Happier, healthier communities are more economically productive. When people feel good, they contribute more, support local businesses, volunteer more, and build social capital that strengthens the entire region.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🤝</div>
              <p className="font-bold mb-2">Social Cohesion</p>
              <p className="text-sm text-green-100">Stronger community bonds reduce isolation and increase civic participation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">💼</div>
              <p className="font-bold mb-2">Economic Vitality</p>
              <p className="text-sm text-green-100">Healthy workers are more productive and take fewer sick days</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-3">🌱</div>
              <p className="font-bold mb-2">Sustainable Growth</p>
              <p className="text-sm text-green-100">Long term community wellness reduces healthcare costs and social services burden</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <p className="text-4xl font-bold text-ufv-green mb-2">100%</p>
          <p className="text-sm text-gray-600 font-medium">Free for All</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <p className="text-4xl font-bold text-ufv-green mb-2">$500+</p>
          <p className="text-sm text-gray-600 font-medium">Avg. Student Savings/Year</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <p className="text-4xl font-bold text-ufv-green mb-2">20+</p>
          <p className="text-sm text-gray-600 font-medium">Local Business Partners</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-sm">
          <p className="text-4xl font-bold text-ufv-green mb-2">Zero</p>
          <p className="text-sm text-gray-600 font-medium">Data Sold</p>
        </div>
      </div>
    </div>
  </div>
);

// --- App Mockup Screens Component ---
const AppMockup = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex p-4 bg-ufv-green/10 rounded-full mb-6">
          <Smartphone className="text-ufv-green" size={48} />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-ufv-dark mb-6">App Preview</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A glimpse at the intuitive, user-friendly interface designed with your wellness journey in mind.
        </p>
      </div>

      {/* Mockup Screens Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Login Screen */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] flex flex-col items-center justify-center border-4 border-gray-100">
            <div className="w-20 h-20 bg-ufv-green/10 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="text-ufv-green" size={40} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-ufv-dark mb-2">Welcome Back</h3>
            <p className="text-sm text-gray-500 mb-6 text-center">Sign in to continue your wellness journey</p>
            <div className="w-full max-w-xs space-y-3">
              <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4 text-sm text-gray-400">
                Email
              </div>
              <div className="h-12 bg-gray-100 rounded-lg flex items-center px-4 text-sm text-gray-400">
                Password
              </div>
              <div className="h-12 bg-ufv-green rounded-lg flex items-center justify-center text-white font-bold">
                Sign In
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">Login Screen</h4>
            <p className="text-sm text-gray-600">Simple, secure authentication</p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] border-4 border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-gray-500">Today's Progress</p>
                <h3 className="text-2xl font-heading font-bold text-ufv-dark">3.2 km</h3>
              </div>
              <div className="w-12 h-12 bg-ufv-green/10 rounded-full flex items-center justify-center">
                <Activity className="text-ufv-green" size={24} />
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Distance</span>
                <span className="font-bold text-ufv-dark">3.2 km</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Pace</span>
                <span className="font-bold text-ufv-dark">6:15 /km</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">Time</span>
                <span className="font-bold text-ufv-dark">20:05</span>
              </div>
            </div>

            <div className="bg-ufv-light p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-2">Weekly Stats</p>
              <div className="flex gap-1">
                {[40, 60, 45, 80, 55, 70, 50].map((height, i) => (
                  <div key={i} className="flex-1 bg-ufv-green/20 rounded-t" style={{height: `${height}px`}}>
                    <div className="w-full bg-ufv-green rounded-t" style={{height: `${height * 0.7}px`}}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">Dashboard</h4>
            <p className="text-sm text-gray-600">Track your progress at a glance</p>
          </div>
        </div>

        {/* Saturday Run Map */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] flex flex-col border-4 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-ufv-dark">Saturday Fun Run</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">LIVE</span>
            </div>
            
            {/* Map Placeholder */}
            <div className="flex-1 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 h-1 bg-ufv-green rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-ufv-green rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Users className="text-white" size={32} />
                </div>
                <p className="text-sm font-bold text-ufv-dark">47 Runners</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Route</span>
                <span className="font-bold text-ufv-dark">Campus Loop 5K</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Next Run</span>
                <span className="font-bold text-ufv-dark">Sat 10:00 AM</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">Saturday Run Map</h4>
            <p className="text-sm text-gray-600">See who's running in realtime</p>
          </div>
        </div>

        {/* Challenges Page */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] border-4 border-gray-100">
            <h3 className="font-heading font-bold text-lg text-ufv-dark mb-4">Active Challenges</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-blue-600" size={16} />
                  <span className="font-bold text-sm text-blue-900">30-Day Streak</span>
                </div>
                <div className="flex items-center justify-between text-xs text-blue-700">
                  <span>Progress: 12/30 days</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-green-600" size={16} />
                  <span className="font-bold text-sm text-green-900">Team Challenge</span>
                </div>
                <div className="flex items-center justify-between text-xs text-green-700">
                  <span>CS Department: 47 km</span>
                  <span>2nd place</span>
                </div>
                <div className="w-full bg-green-200 h-2 rounded-full mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="text-purple-600" size={16} />
                  <span className="font-bold text-sm text-purple-900">Wellness Warrior</span>
                </div>
                <div className="flex items-center justify-between text-xs text-purple-700">
                  <span>Complete 10 activities</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-purple-200 h-2 rounded-full mt-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-3 bg-ufv-green text-white rounded-lg font-bold hover:bg-ufv-dark transition-colors flex items-center justify-center gap-2">
              <Plus size={18} /> Join New Challenge
            </button>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">Challenges</h4>
            <p className="text-sm text-gray-600">Personal & team goals</p>
          </div>
        </div>

        {/* GiveHub Preview */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] border-4 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-ufv-dark">GiveHub</h3>
              <Gift className="text-ufv-green" size={24} />
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-ufv-dark mb-1">Psychology Textbook</p>
                    <p className="text-xs text-gray-500">Posted 2h ago</p>
                  </div>
                </div>
                <button className="w-full mt-2 py-2 bg-ufv-green text-white rounded text-xs font-bold">Claim</button>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="text-green-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-ufv-dark mb-1">Yoga Mat</p>
                    <p className="text-xs text-gray-500">Posted 1d ago</p>
                  </div>
                </div>
                <button className="w-full mt-2 py-2 bg-ufv-green text-white rounded text-xs font-bold">Claim</button>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shirt className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-ufv-dark mb-1">Winter Jacket</p>
                    <p className="text-xs text-gray-500">Posted 3d ago</p>
                  </div>
                </div>
                <button className="w-full mt-2 py-2 bg-ufv-green text-white rounded text-xs font-bold">Claim</button>
              </div>
            </div>

            <button className="w-full mt-4 py-3 border-2 border-ufv-green text-ufv-green rounded-lg font-bold hover:bg-ufv-light transition-colors">
              Donate an Item
            </button>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">GiveHub</h4>
            <p className="text-sm text-gray-600">Share resources, help peers</p>
          </div>
        </div>

        {/* Community Stories Preview */}
        <div className="bg-gradient-to-br from-ufv-light to-white rounded-2xl p-8 shadow-soft border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-inner mb-4 min-h-[400px] border-4 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-ufv-dark">Community</h3>
              <MessageCircle className="text-ufv-green" size={24} />
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">RunnerMike23</span>
                </div>
                <p className="text-sm font-medium text-ufv-dark mb-2">First 5K complete! 🎉</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Heart size={12} /> 24</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} /> 8</span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">SarahK_CS</span>
                </div>
                <p className="text-sm font-medium text-ufv-dark mb-2">Tips for running in the rain?</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Heart size={12} /> 12</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} /> 15</span>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-200 rounded-full"></div>
                  <span className="text-xs font-bold text-gray-700">AlexM</span>
                </div>
                <p className="text-sm font-medium text-ufv-dark mb-2">Saturday run was amazing!</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Heart size={12} /> 45</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} /> 22</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-3 bg-ufv-green text-white rounded-lg font-bold hover:bg-ufv-dark transition-colors flex items-center justify-center gap-2">
              <Plus size={18} /> Share Your Story
            </button>
          </div>
          <div className="text-center">
            <h4 className="font-heading font-bold text-lg text-ufv-dark mb-1">Community Stories</h4>
            <p className="text-sm text-gray-600">Connect & support each other</p>
          </div>
        </div>
      </div>

      {/* Live Route Preview Section */}
      <section className="py-16 px-6 mb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-ufv-dark mb-4">Live Route Preview</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See a simulated 5KM loop around UFV's core campus. The moving dot represents a typical runner completing the Fun Run route. No GPS required, just distance and time tracking.
          </p>
        </div>
        
        <div className="max-w-[960px] mx-auto bg-white rounded-[18px] shadow-xl p-4 md:p-6 overflow-hidden">
          <svg 
            className="w-full h-auto block mx-auto" 
            viewBox="0 0 900 550"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            {/* Background (map style) */}
            <defs>
              {/* Soft grid pattern */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="#F3F4F6"/>
                <path d="M40 0 H0 V40" fill="none" stroke="#E2E5EA" strokeWidth="1"/>
              </pattern>

              {/* Park green */}
              <linearGradient id="parkGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#CFEAD0"/>
                <stop offset="100%" stopColor="#B8E2B5"/>
              </linearGradient>

              {/* Drop shadow for map card */}
              <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="rgba(0,0,0,0.15)"/>
              </filter>
            </defs>

            {/* Map card background */}
            <g filter="url(#shadow)">
              <rect x="20" y="20" width="860" height="510" rx="20" fill="white"/>
              <rect x="40" y="80" width="820" height="430" rx="18" fill="url(#grid)"/>
            </g>

            {/* Title & badge */}
            <text x="50%" y="55" textAnchor="middle" fontSize="28" fill="#006341"
                  fontFamily="Inter, system-ui" fontWeight="600">
              UFV Campus 5KM Live Route
            </text>

            <rect x="710" y="35" rx="10" ry="10" width="150" height="36" fill="#006341"/>
            <text x="785" y="59" textAnchor="middle" fontSize="18" fill="white"
                  fontFamily="Inter, system-ui">
              5.0 km Loop
            </text>

            {/* Park / green areas */}
            <rect x="70" y="110" width="230" height="140" rx="18" fill="url(#parkGrad)"/>
            <text x="90" y="135" fontSize="13" fill="#2F4F2F" fontFamily="Inter">Campus Green</text>

            <rect x="580" y="120" width="230" height="160" rx="18" fill="url(#parkGrad)"/>
            <text x="600" y="145" fontSize="13" fill="#2F4F2F" fontFamily="Inter">Riverside Trail</text>

            {/* Roads (light grey like Google Maps) */}
            <g stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round">
              <line x1="80" y1="220" x2="820" y2="220"/>
              <line x1="120" y1="140" x2="120" y2="480"/>
              <line x1="320" y1="120" x2="320" y2="480"/>
              <line x1="520" y1="120" x2="520" y2="480"/>
              <line x1="720" y1="120" x2="720" y2="480"/>
            </g>

            {/* Buildings */}
            {/* A Building */}
            <rect x="340" y="260" width="110" height="60" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="395" y="292" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">A Building</text>

            {/* B Building + Cafeteria */}
            <rect x="180" y="290" width="130" height="70" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="245" y="320" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">B Building</text>
            <text x="245" y="337" textAnchor="middle" fontSize="11" fill="#666" fontFamily="Inter">Cafeteria</text>

            {/* S Building */}
            <rect x="540" y="250" width="130" height="70" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="605" y="285" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">S Building</text>

            {/* Library */}
            <rect x="380" y="170" width="110" height="60" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="435" y="205" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">Library</text>

            {/* Student Lounge */}
            <rect x="650" y="300" width="130" height="70" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="715" y="332" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">Student Lounge</text>

            {/* Fitness Centre */}
            <rect x="420" y="350" width="120" height="70" fill="#E5ECE5" stroke="#A3BAA3" strokeWidth="2.5" rx="8"/>
            <text x="480" y="385" textAnchor="middle" fontSize="13" fill="#333" fontFamily="Inter">Fitness Centre</text>

            {/* Bus Loop */}
            <ellipse cx="210" cy="200" rx="55" ry="22" fill="#E6EFE6" stroke="#A3BAA3" strokeWidth="2"/>
            <text x="210" y="205" textAnchor="middle" fontSize="12" fill="#333" fontFamily="Inter">Bus Loop</text>

            {/* Trees clusters */}
            <g fill="#0B9E43">
              <circle cx="110" cy="410" r="13"/>
              <circle cx="135" cy="430" r="16"/>
              <circle cx="160" cy="410" r="14"/>

              <circle cx="760" cy="170" r="15"/>
              <circle cx="785" cy="190" r="18"/>
              <circle cx="805" cy="165" r="13"/>

              <circle cx="600" cy="430" r="14"/>
              <circle cx="625" cy="450" r="16"/>
              <circle cx="645" cy="430" r="13"/>
            </g>

            {/* Landmarks text */}
            <text x="525" y="150" fontSize="12" fill="#374151" fontFamily="Inter">Scenic Hill</text>
            <text x="735" y="260" fontSize="12" fill="#374151" fontFamily="Inter">Campus Quad</text>
            <text x="250" y="500" fontSize="12" fill="#374151" fontFamily="Inter">Tree Trail</text>
            <text x="85" y="380" fontSize="12" fill="#374151" fontFamily="Inter">Parking Lot</text>

            {/* ROUTE PATH (for animation) */}
            <path id="routePath"
                  d="
                    M140 460
                    C220 150, 390 135, 580 180
                    S830 310, 700 410
                    S460 470, 230 455
                  "
                  fill="none" stroke="#22C55E" strokeWidth="8" strokeLinecap="round"/>

            {/* START / FINISH markers (visually) */}
            <circle cx="140" cy="460" r="10" fill="#006341" stroke="white" strokeWidth="3"/>
            <text x="165" y="455" fontSize="14" fill="#111827" fontFamily="Inter">Start</text>

            <circle cx="230" cy="455" r="10" fill="#F97316" stroke="white" strokeWidth="3"/>
            <text x="255" y="450" fontSize="14" fill="#111827" fontFamily="Inter">Finish</text>

            {/* ANIMATED RUNNER (dot moving along route) */}
            <g>
              {/* Pulsing halo */}
              <circle r="13" fill="rgba(34,197,94,0.20)">
                <animate attributeName="r" from="6" to="16" dur="1.2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="0.9" to="0" dur="1.2s" repeatCount="indefinite"/>
                <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#routePath"/>
                </animateMotion>
              </circle>

              {/* Runner icon (dot) */}
              <circle r="6" fill="#EF4444" stroke="white" strokeWidth="2">
                <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#routePath"/>
                </animateMotion>
              </circle>
            </g>
          </svg>
        </div>
      </section>

      {/* Feature Highlights */}
      <div className="bg-ufv-dark text-white rounded-2xl p-12">
        <h3 className="text-3xl font-heading font-bold mb-8 text-center">Designed for Your Experience</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-ufv-lightGreen" size={32} />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">Intuitive Interface</h4>
            <p className="text-gray-300 text-sm">Simple, clean design that puts your wellness first, not confusing features or upsells.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-ufv-lightGreen" size={32} />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">Privacy by Design</h4>
            <p className="text-gray-300 text-sm">Your data stays local. Share only what you want, when you want. No surveillance, ever.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-ufv-lightGreen" size={32} />
            </div>
            <h4 className="font-heading font-bold text-lg mb-2">Community-Centered</h4>
            <p className="text-gray-300 text-sm">Every feature built with input from students, staff, and community members. Your voice matters.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [page, setPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (page) {
      case Page.HOME:
        return (
          <>
            <HeroSection onNavigate={setPage} />
            <AboutApp />
            <LocalImpact />
            <GetInvolved />
          </>
        );
      case Page.ABOUT_INITIATIVE:
        return <AboutInitiative />;
      case Page.ABOUT_APP:
        return <AboutApp />;
      case Page.ABOUT_GRANT:
        return <AboutGrant />;
      case Page.ETHICS:
        return <Ethics onNavigate={setPage} />;
      case Page.IMPACT:
        return <Impact />;
      case Page.COMPARISON:
        return <Comparison />;
      case Page.PRIVACY:
        return <Privacy />;
      case Page.FAQ:
        return <FAQSection />;
      case Page.GET_INVOLVED:
        return <GetInvolved />;
      case Page.GIVEHUB:
        return <GiveHub />;
      case Page.COMMUNITY_STORIES:
        return <CommunityStories />;
      case Page.APP_MOCKUP:
        return <AppMockup />;
      default:
        return <HeroSection onNavigate={setPage} />;
    }
  };

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {renderPage()}
    </Layout>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);