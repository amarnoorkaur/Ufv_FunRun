import React from 'react';
import { EthicalTheory, FaqItem, DonationItem, CommunityPost } from './types';
import { ShieldCheck, Heart, Users, Lock, Scale, Activity, Brain, Smile, Globe } from 'lucide-react';

export const ETHICAL_THEORIES: EthicalTheory[] = [
  {
    id: '1',
    name: 'Subjective Relativism',
    pageNumber: 56,
    concept: 'Each person decides right/wrong.',
    application: 'We respect your personal fitness journey. There is no "correct" pace or distance. You define your own success criteria without judgment from the app logic.',
    icon: 'Brain'
  },
  {
    id: '2',
    name: 'Cultural Relativism',
    pageNumber: 58,
    concept: 'Society decides right/wrong.',
    application: 'Built specifically for the UFV culture. We align with our university\'s values of inclusivity and land stewardship, rather than Silicon Valley "hustle culture."',
    icon: 'Globe'
  },
  {
    id: '3',
    name: 'Divine Command',
    pageNumber: 61,
    concept: 'Higher Authority/Creator.',
    application: 'We honor the "Higher Mandate" of Public Service. Our "creator" (the non-profit initiative funded by the Province) commands us to prioritize well-being over profit.',
    icon: 'Scale'
  },
  {
    id: '4',
    name: 'Ethical Egoism',
    pageNumber: 64,
    concept: 'Self-interest.',
    application: 'It is rational to act in your self-interest by improving your cardiovascular health. We appeal to your desire for a longer, healthier life.',
    icon: 'Activity'
  },
  {
    id: '5',
    name: 'Kantianism',
    pageNumber: 67,
    concept: 'Duty & Universal Law ("Ought to do").',
    application: 'We treat you as an end, not a means. We have a categorical imperative to never sell your data, because if every app did that, trust would collapse.',
    icon: 'ShieldCheck'
  },
  {
    id: '6',
    name: 'Act Utilitarianism',
    pageNumber: 72,
    concept: 'Produce immediate happiness.',
    application: 'The "Fun Run" is designed to maximize immediate joy (endorphins) and social connection for the greatest number of students every Saturday.',
    icon: 'Smile'
  },
  {
    id: '7',
    name: 'Rule Utilitarianism',
    pageNumber: 77,
    concept: 'Follow rules that maximize happiness.',
    application: 'Strict privacy rules might seem restrictive to developers, but they create the greatest long-term happiness by fostering a safe environment free of surveillance.',
    icon: 'Lock'
  },
  {
    id: '8a',
    name: 'Social Contract Theory',
    pageNumber: 81,
    concept: 'Morality via mutual agreement.',
    application: 'You agree to participate respectfully; we agree to protect your identity. A fair exchange of trust without hidden clauses or predatory Terms of Service.',
    icon: 'Users'
  },
  {
    id: '8b',
    name: 'Rawls’ Theory of Justice',
    pageNumber: 83,
    concept: 'Fairness / Veil of Ignorance.',
    application: 'Designed for the least advantaged. Whether you are an elite athlete or a beginner, the app provides equal utility and accessibility features.',
    icon: 'Scale'
  },
  {
    id: '9',
    name: 'Virtue Ethics',
    pageNumber: 88,
    concept: 'Character, Honesty, Reasoning.',
    application: 'We encourage the virtues of consistency (streaks), honesty (self-reported times), and courage (starting the run). The app builds character, not just muscle.',
    icon: 'Heart'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Who is the Fun-Run for?",
    answer: "Everyone connected to UFV: students, staff, alumni, and local community partners. We built this for the entire UFV family, regardless of fitness level, background, or role. Everyone belongs here."
  },
  {
    question: "Is the app really free?",
    answer: "Yes, completely free forever. No premium tiers, no micro-transactions, no ads, no hidden paywalls. Equal access for everyone is not just a feature — it's a core value."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We only collect what's strictly necessary: distance, time, and your personal tracking data. We will never sell your data, run ads, or share your information without your explicit consent. You always stay in control of what you share."
  },
  {
    question: "Do I need special equipment?",
    answer: "Just your phone! The app works perfectly on its own. If you have a smartwatch, it syncs beautifully, but it's never required. We believe wellness should be accessible to everyone."
  },
  {
    question: "Where do profits or resources go?",
    answer: "This is a non-profit community initiative. Any surplus funds from merchandise or voluntary donations go directly back into the community, supporting student wellness programs, campus clubs, and local businesses. Benefits shared fairly, for everyone."
  },
  {
    question: "How can I get more involved?",
    answer: "We'd love that! You can become a Run Leader, volunteer at events, or partner with us if you're a local business. This is a community-built initiative — your participation, feedback, and trust truly matter."
  }
];

export const LAND_ACKNOWLEDGEMENT = "The University of the Fraser Valley recognizes that our campuses are situated on the ancestral and unceded traditional lands of the Halq'eméylem-speaking Stó:lō peoples (People of the River). We express our respect and gratitude to the Indigenous peoples who have cared for these lands since time immemorial, and commit to honouring that stewardship in all that we do.";

export const SAMPLE_DONATIONS: DonationItem[] = [
  {
    id: '1',
    title: 'Yoga Mat (Purple)',
    category: 'fitness',
    description: 'Lightly used yoga mat, perfect for beginners. Cleaned and ready for a new home!',
    condition: 'like-new',
    donorName: 'Emma T.',
    donorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    postedDate: '2 days ago',
    claimed: false,
    impactPoints: 15
  },
  {
    id: '2',
    title: 'Introduction to Psychology Textbook',
    category: 'books',
    description: 'PSYC 101 textbook, 4th edition. Some highlighting but in great condition.',
    condition: 'good',
    donorName: 'James L.',
    donorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    postedDate: '1 day ago',
    claimed: false,
    impactPoints: 20
  },
  {
    id: '3',
    title: 'Running Shoes (Size 10)',
    category: 'fitness',
    description: 'Nike running shoes, worn only a few times. Great for the Saturday Fun Runs!',
    condition: 'like-new',
    donorName: 'Priya S.',
    donorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    postedDate: '3 days ago',
    claimed: true,
    impactPoints: 25
  },
  {
    id: '4',
    title: 'Winter Jacket (Medium)',
    category: 'clothing',
    description: 'Warm winter jacket, perfect for those cold morning runs. No rips or stains.',
    condition: 'good',
    donorName: 'Alex M.',
    donorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    postedDate: '5 hours ago',
    claimed: false,
    impactPoints: 20
  },
  {
    id: '5',
    title: 'Resistance Bands Set',
    category: 'fitness',
    description: 'Complete set of 5 resistance bands with different strengths. Never used!',
    condition: 'new',
    donorName: 'Sarah K.',
    donorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    postedDate: '1 week ago',
    claimed: false,
    impactPoints: 18
  },
  {
    id: '6',
    title: 'Electric Kettle',
    category: 'appliances',
    description: 'Works perfectly! Great for making tea or instant oatmeal before runs.',
    condition: 'good',
    donorName: 'Mike R.',
    donorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    postedDate: '4 days ago',
    claimed: false,
    impactPoints: 12
  }
];

export const SAMPLE_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    author: 'RunnerMike23',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    title: 'Running saved me from depression. Here is my story.',
    content: 'Two years ago, I was in a really dark place. Failed courses, lost friends, and felt completely alone. A friend dragged me to my first Saturday Fun Run, and I could barely finish 1km. But something clicked. The community welcomed me without judgment. Week by week, I got stronger, not just physically but mentally. Running became my therapy. Today, I completed my first 10K and I have a support system I never knew I needed. If you are struggling, please give it a try. You are not alone.',
    category: 'success-story',
    likes: 234,
    postedDate: '2 days ago',
    comments: [
      {
        id: 'c1',
        author: 'WellnessWarrior',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: 'This is so inspiring! I started my journey 3 months ago and I can already feel the difference. Thank you for sharing!',
        likes: 45,
        postedDate: '1 day ago'
      },
      {
        id: 'c2',
        author: 'FreshStart2024',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        content: 'I needed to read this today. Going to my first run this Saturday. Nervous but hopeful.',
        likes: 67,
        postedDate: '1 day ago'
      }
    ]
  },
  {
    id: '2',
    author: 'AnxietyFighter',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    title: 'How do you deal with anxiety before exams? Looking for advice.',
    content: 'Finals are coming up and my anxiety is through the roof. I have been trying to keep up with running but some days it feels impossible to even get out of bed. Does anyone have tips for managing exam stress while staying active? I feel like if I stop running, things will get worse, but I am so exhausted.',
    category: 'seeking-advice',
    likes: 89,
    postedDate: '5 hours ago',
    comments: [
      {
        id: 'c3',
        author: 'ZenRunner',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        content: 'I totally understand this. What helped me was doing shorter runs on tough days, even just 10 minutes. It is not about the distance, it is about showing up for yourself. Also, the UFV counseling center has drop-in hours if you need to talk to someone.',
        likes: 34,
        postedDate: '4 hours ago'
      },
      {
        id: 'c4',
        author: 'MorningJogger',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
        content: 'Study breaks with walks helped me so much! Even 15 minutes outside can reset your brain. You have got this!',
        likes: 28,
        postedDate: '3 hours ago'
      }
    ]
  },
  {
    id: '3',
    author: 'HealthyHabits',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    title: '5 morning habits that transformed my energy levels',
    content: '1. Wake up 30 mins earlier (yes, really!)\n2. Drink water before coffee\n3. 10 min stretch or yoga\n4. No phone for the first hour\n5. Eat a proper breakfast with protein\n\nI have been doing this for 3 months and my productivity has skyrocketed. Plus, my Saturday runs feel so much easier now. Anyone else have morning routines that work for them?',
    category: 'tips',
    likes: 156,
    postedDate: '1 week ago',
    comments: [
      {
        id: 'c5',
        author: 'EarlyBird',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        content: 'The no phone rule is a game changer. I used to scroll for 30 mins before even getting up. Now I actually have time for breakfast!',
        likes: 42,
        postedDate: '6 days ago'
      }
    ]
  },
  {
    id: '4',
    author: 'RecoveryRoad',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    title: 'Dealing with a knee injury. How to stay positive?',
    content: 'I twisted my knee last week and the doctor said no running for at least a month. I am really struggling because running was my main way of managing stress. Has anyone been through this? How did you stay active and positive during recovery?',
    category: 'mental-health',
    likes: 67,
    postedDate: '3 days ago',
    comments: [
      {
        id: 'c6',
        author: 'PhysioStudent',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        content: 'Swimming or water jogging might be an option if your physio approves! It is low impact but still gives you that endorphin boost. Also, upper body workouts can help maintain some fitness.',
        likes: 23,
        postedDate: '2 days ago'
      },
      {
        id: 'c7',
        author: 'BeenThere',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        content: 'I had a similar injury last year. It is tough, but use this time to focus on nutrition and sleep. You will come back stronger. The community will still be here when you are ready!',
        likes: 31,
        postedDate: '2 days ago'
      }
    ]
  },
  {
    id: '5',
    author: 'GratefulRunner',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    title: 'From 300lbs to my first marathon. Never give up!',
    content: 'Three years ago I weighed 300lbs and could not walk up a flight of stairs without getting winded. Today I crossed the finish line of my first marathon. It was not easy. There were setbacks, injuries, and days I wanted to quit. But the UFV Fun Run community kept me going. Every Saturday, rain or shine, someone was there to run with me. This is not just about fitness. It is about finding your people. If I can do it, anyone can.',
    category: 'motivation',
    likes: 412,
    postedDate: '1 day ago',
    comments: [
      {
        id: 'c8',
        author: 'NewBeginnings',
        authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        content: 'Crying reading this. Thank you for sharing your journey. Starting my own this Saturday!',
        likes: 89,
        postedDate: '20 hours ago'
      }
    ]
  }
];
