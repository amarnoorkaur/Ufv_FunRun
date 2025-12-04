import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Layout } from './components/Layout';
import { Page } from './types';
import { ETHICAL_THEORIES, FAQS, LAND_ACKNOWLEDGEMENT, SAMPLE_DONATIONS, SAMPLE_COMMUNITY_POSTS } from './constants';
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
        <div className="flex items-center gap-2"><Heart size={18} className="text-ufv-lightGreen" /> Community-First, Always</div>
        <div className="flex items-center gap-2"><Users size={18} className="text-ufv-lightGreen" /> Free for Everyone</div>
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
          At UFV Fun-Run, we believe that <strong>health, connection, and community belong to everyone</strong>, not just a few. This project was born out of a commitment to build something that serves our entire UFV family: students, staff, alumni, and local partners.
        </p>
        <p>
          We're dedicated to creating a space where every runner, regardless of their fitness level, schedule, or background, feels welcome, supported, and empowered. Because when we run together, we don't just build endurance — <em>we build relationships, belonging, and a healthier, stronger community</em>.
        </p>
        
        <div className="bg-ufv-light p-8 rounded-ufv border-l-8 border-ufv-green shadow-soft">
          <h3 className="text-2xl font-heading font-bold text-ufv-green mb-4">Our Promise</h3>
          <p className="text-base text-ufv-dark font-medium">
            We promise respect, privacy, and fairness because we genuinely care about you. Every decision we make considers its impact on all members of our community. Your well-being is not just a feature; it's our entire purpose.
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
          <p className="text-sm font-bold text-ufv-green">— Sarah, Computer Science Student</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-ufv border border-gray-200">
          <p className="text-gray-600 italic mb-4">"I love that this app doesn't try to sell me anything or track my every move. It just helps me stay active with my colleagues."</p>
          <p className="text-sm font-bold text-ufv-green">— Michael, UFV Staff Member</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutApp = () => (
  <div className="bg-ufv-light py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading>The Saturday Fun-Run & Beyond</SectionHeading>
      <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-16">
        More than just a tracker. It's a digital companion for our campus culture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Calendar, title: "Weekly Saturday Fun-Run", desc: "Every Saturday at 10 AM, unlock a special campus route. Join hundreds of students for a 5K loop." },
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

const Ethics = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Brain': return <Brain />;
      case 'Globe': return <Globe />;
      case 'Scale': return <Scale />;
      case 'Activity': return <Activity />;
      case 'ShieldCheck': return <ShieldCheck />;
      case 'Smile': return <Smile />;
      case 'Lock': return <Lock />;
      case 'Users': return <Users />;
      case 'Heart': return <Heart />;
      default: return <Heart />;
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>9.5 Theories of Ethical Tech</SectionHeading>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          We built this app using the very same ethical frameworks taught in UFV's philosophy and computer science courses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ETHICAL_THEORIES.map((theory) => (
            <div key={theory.id} className="border border-gray-200 rounded-ufv p-8 hover:border-ufv-green transition-colors hover:shadow-soft group bg-white">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-ufv-light rounded-full text-ufv-dark group-hover:bg-ufv-green group-hover:text-white transition-colors">
                  {getIcon(theory.icon)}
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-xl font-heading font-bold text-ufv-dark">{theory.name}</h3>
                    <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded border">pg {theory.pageNumber}</span>
                  </div>
                  <p className="text-sm font-bold text-ufv-green mb-3 uppercase tracking-wider">{theory.concept}</p>
                  <p className="text-gray-600 leading-relaxed font-sans">{theory.application}</p>
                </div>
              </div>
            </div>
          ))}
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
            Imagine a UFV campus where wellness isn't a side note. Every Saturday, students and staff lace up their running shoes, not for competition, but for community. Every step counts — for your health, your friends, your campus, and your future.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="mt-1 bg-white/10 p-3 rounded-lg h-fit"><Brain className="text-ufv-lightGreen" size={28} /></div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Mental Wellness</h3>
                <p className="text-gray-400 leading-relaxed">Running together helps reduce stress and anxiety. We care about your well-being beyond grades. Movement is medicine, and community is the cure for isolation.</p>
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
        We prioritize your well-being, your privacy, and your community, not shareholder returns.
      </p>

      <div className="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-6 border-b border-gray-200 w-1/3 text-gray-500 font-heading uppercase text-sm tracking-wider">What Matters</th>
                <th className="p-6 border-b border-gray-200 text-red-700 font-heading font-bold text-lg">Commercial Apps</th>
                <th className="p-6 border-b border-ufv-green bg-ufv-green/10 text-ufv-green font-heading font-bold text-lg">UFV Fun-Run</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-sans">
              {[
                { feature: "Our Purpose", bad: "Profit & Growth", good: "Community Well-being" },
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
                <li>Distance and time — to help you track your personal progress.</li>
                <li>Self-reported mood scores (completely optional).</li>
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
        By joining the Fun-Run, you become part of something bigger: a shared commitment to well-being, fairness, and community care.
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
          By joining the Fun-Run, we commit together to respect each other, support each other's privacy, and run for shared well-being. Your participation, feedback, and trust matter. We build this together.
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
            A community-driven marketplace where UFV members donate and claim items for free. Reduce waste, help peers, build community.
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
                      item.condition === 'like-new' ? 'bg-teal-100 text-teal-700' :
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
    { id: 'success-story', label: 'Success Stories' },
    { id: 'mental-health', label: 'Mental Health' },
    { id: 'seeking-advice', label: 'Seeking Advice' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'motivation', label: 'Motivation' },
  ];

  const filteredPosts = SAMPLE_COMMUNITY_POSTS.filter(post => 
    activeFilter === 'all' || post.category === activeFilter
  );

  const getCategoryStyle = (category: string) => {
    switch(category) {
      case 'success-story': return 'bg-green-100 text-green-700';
      case 'mental-health': return 'bg-purple-100 text-purple-700';
      case 'seeking-advice': return 'bg-orange-100 text-orange-700';
      case 'tips': return 'bg-blue-100 text-blue-700';
      case 'motivation': return 'bg-pink-100 text-pink-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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
            <Impact />
            <GetInvolved />
          </>
        );
      case Page.ABOUT_INITIATIVE:
        return <AboutInitiative />;
      case Page.ABOUT_APP:
        return <AboutApp />;
      case Page.ETHICS:
        return <Ethics />;
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