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
    application: 'We honor the "Higher Mandate" of Public Service. Our "creator" (the nonprofit initiative funded by the Province) commands us to prioritize wellbeing over profit.',
    icon: 'Scale'
  },
  {
    id: '4',
    name: 'Ethical Egoism',
    pageNumber: 64,
    concept: 'Personal interest.',
    application: 'It is rational to act in your self interest by improving your cardiovascular health. We appeal to your desire for a longer, healthier life.',
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
    application: 'Strict privacy rules might seem restrictive to developers, but they create the greatest long term happiness by fostering a safe environment free of surveillance.',
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
    application: 'We encourage the virtues of consistency (streaks), honesty (self reported times), and courage (starting the run). The app builds character, not just muscle.',
    icon: 'Heart'
  }
];

export interface TheoryFeatureMapping {
  theoryName: string;
  features: string[];
}

export const THEORY_FEATURE_MAPPINGS: TheoryFeatureMapping[] = [
  {
    theoryName: 'Subjective Relativism',
    features: [
      'No judgment algorithms: The app never labels your performance as "good" or "bad"',
      'Personal goal setting: You define success on your own terms',
      'Optional sharing: Choose what you share with the community, if anything'
    ]
  },
  {
    theoryName: 'Cultural Relativism',
    features: [
      'Aligned with UFV campus values: Inclusivity, respect, and land acknowledgement',
      'Saturday Fun Runs reflect local community culture, not Silicon Valley "hustle"',
      'Designed for Fraser Valley climate, geography, and multicultural community'
    ]
  },
  {
    theoryName: 'Divine Command Theory',
    features: [
      'Governed by a "higher mandate" of public service, not profit',
      'Our funding source (provincial grant) commands us to serve the public good',
      'Service first architecture: Every feature asks "does this help our community?"'
    ]
  },
  {
    theoryName: 'Ethical Egoism',
    features: [
      'Health benefits directly serve your self interest: better cardiovascular fitness, mood, energy',
      'Personal progress tracking helps you achieve your individual goals',
      'Your participation makes you healthier, happier, and more connected'
    ]
  },
  {
    theoryName: 'Kantianism',
    features: [
      'We treat you as an end in yourself, never merely as a means to profit',
      'Categorical imperative: "Never sell user data" because universal data selling would destroy trust',
      'Respect for autonomy: You always control your data, your pace, your participation'
    ]
  },
  {
    theoryName: 'Act Utilitarianism',
    features: [
      'Saturday Fun Runs maximize immediate happiness for the greatest number',
      'Instant endorphin boost and social connection each week',
      'GiveHub provides immediate utility by matching needs with resources'
    ]
  },
  {
    theoryName: 'Rule Utilitarianism',
    features: [
      'Strict privacy rules create long term safety and happiness for everyone',
      'No advertising policy prevents the gradual erosion of user trust',
      'Transparent governance rules ensure accountability and fairness over time'
    ]
  },
  {
    theoryName: 'Social Contract Theory',
    features: [
      'Clear mutual agreement: you participate respectfully, we protect your privacy',
      'Transparent Terms of Service with no hidden clauses',
      'Democratic governance: students vote on major features and policy changes'
    ]
  },
  {
    theoryName: 'Rawls\' Theory of Justice',
    features: [
      'Designed for the least advantaged: works on old phones, uses minimal data',
      'Equal features for everyone: no premium tiers or paywalls',
      'Accessibility first: screen readers, high contrast, multiple languages'
    ]
  },
  {
    theoryName: 'Virtue Ethics',
    features: [
      'Encourages virtues: consistency (streaks), courage (starting), honesty (self reporting)',
      'Community Stories celebrate character development and resilience',
      'The app builds moral habits, not just physical fitness'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Who is the FunRun for?",
    answer: "Everyone connected to UFV: students, staff, alumni, and local community partners. We built this for the entire UFV family, regardless of fitness level, background, or role. Everyone belongs here."
  },
  {
    question: "Is the app really free?",
    answer: "Yes, completely free forever. No premium tiers, no micro transactions, no ads, no hidden paywalls. Equal access for everyone is not just a feature, it's a core value."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We only collect what's strictly necessary: distance, time, and your personal tracking data. We will never sell your data, run ads, or share your information without your explicit consent. You always stay in control of what you share."
  },
  {
    question: "Does the Fun Run track my location?",
    answer: "No. We never track or store your GPS location. The app only records distance traveled and time elapsed. Your running routes, locations, and movement patterns are never collected, stored, or transmitted. This is a core privacy commitment. We measure your progress without surveillance."
  },
  {
    question: "Why should I trust a publicly funded tech project?",
    answer: "Great question! While the provincial government provided the funding, this project is completely nonpartisan and community governed. Here's why you can trust us: (1) All finances are published quarterly with full transparency, (2) A community governance board with elected student representatives makes all major decisions, (3) No politicians or government officials have access to user data or app decisions, (4) Our nonprofit structure means no profit motive to exploit users, and (5) You can audit our code, finances, and policies anytime. We earn trust through transparency, not through marketing."
  },
  {
    question: "How does the app prevent unhealthy competition?",
    answer: "We're explicitly designed to be noncompetitive and judgment free. There are no public leaderboards that rank runners against each other. You can choose to share your stats or keep them completely private. Challenges are optional and focus on personal goals, not beating others. We celebrate participation, not perfection. Whether you walk, jog, or run, you're equally valued in our community. The app uses encouraging language instead of shame-based motivation."
  },
  {
    question: "How does the app stay free forever?",
    answer: "The provincial Community Wellness Grant covers initial development and maintenance. Beyond that, our sustainability model includes: (1) No expensive features that require constant updates, (2) Minimal hosting costs through efficient design, (3) UFV institutional support for long term maintenance, (4) Optional community donations (never required), and (5) No shareholders or investors demanding returns. We built this to last, not to generate profit."
  },
  {
    question: "What makes this app more ethical than commercial fitness apps?",
    answer: "Commercial apps optimize for engagement and profit, which often means addictive design patterns, social pressure, and data harvesting. We optimize for your genuine wellbeing. We don't use psychological tricks to keep you scrolling. We don't sell your data. We don't create artificial FOMO or pressure. Our success is measured by community health outcomes and user satisfaction, not by quarterly revenue or growth metrics. We answer to our community, not shareholders."
  },
  {
    question: "How is GiveHub sustainable and equitable?",
    answer: "GiveHub operates on a circular economy model where students help each other without money changing hands. All items are free to claim. Donors earn 'Impact Points' that recognize their contribution to the community, but these points have no monetary value. This prevents exploitation and keeps the focus on mutual aid. Moderation by student volunteers ensures fairness and prevents abuse of the system."
  },
  {
    question: "How is my privacy protected beyond legal requirements?",
    answer: "We go far beyond minimum legal compliance. Your running data is stored locally on your device by default. GPS traces are never saved permanently. We use end to end encryption for all communications. We've implemented 'privacy by design' principles, meaning we simply don't collect data we don't absolutely need. You can export or delete all your data anytime with one tap. No third party trackers, no analytics companies, no data brokers. Period."
  },
  {
    question: "Where exactly do profits or savings go?",
    answer: "This is a nonprofit initiative. We have no profits. The provincial grant covers development and maintenance costs. Any extra funds from optional donations or merchandise sales go directly into: (1) Student wellness program scholarships, (2) Mental health resources on campus, (3) Supporting local Fraser Valley businesses that partner with us, and (4) Maintaining free access for everyone forever. Complete financial transparency reports are published quarterly on our website."
  },
  {
    question: "How does this project ensure equal participation?",
    answer: "Accessibility is built into every feature. The app works on older phones, uses minimal data, and doesn't require expensive wearables. All Saturday runs offer multiple distance options (1K, 3K, 5K) and walking groups. We provide accommodations for users with disabilities, including audio cues and high contrast modes. Language support includes English, Punjabi, and Mandarin to reflect our diverse community. Financial barriers are eliminated: no fees, no equipment requirements, no hidden costs."
  },
  {
    question: "Do I need special equipment?",
    answer: "Just your phone! The app works perfectly on its own. If you have a smartwatch, it syncs beautifully, but it's never required. We believe wellness should be accessible to everyone."
  },
  {
    question: "How can I get more involved?",
    answer: "We'd love that! You can become a Run Leader, volunteer at events, or partner with us if you're a local business. This is a community built initiative. Your participation, feedback, and trust truly matter."
  }
];

export const LAND_ACKNOWLEDGEMENT = "The University of the Fraser Valley recognizes that our campuses are situated on the ancestral and unceded traditional lands of the Halq'eméylem-speaking Stó:lō peoples (People of the River). We express our respect and gratitude to the Indigenous peoples who have cared for these lands since time immemorial, and commit to honouring that stewardship in all that we do.";

export const SAMPLE_DONATIONS: DonationItem[] = [
  {
    id: '1',
    title: 'Yoga Mat (Purple)',
    category: 'fitness',
    description: 'Lightly used yoga mat, perfect for beginners. Cleaned and ready for a new home!',
    condition: 'likeNew',
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
    condition: 'likeNew',
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
    category: 'successStory',
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
    category: 'seekingAdvice',
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
    category: 'mentalHealth',
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
