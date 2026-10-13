// Showroom Projects Data
// This data is pulled from your actual project specifications

const projectsData = {
  'network-desk': {
    id: 'network-desk',
    order: 1,
    name: 'Network Desk',
    tagline: 'Relationship intelligence for your job search',
    description: 'Ranks your LinkedIn connections by likelihood to help with your job search and surfaces the best people to contact this week.',
    longDescription: 'Your network is your career asset. Network Desk reveals which connections matter most and surfaces the right people to contact this week.',
    problem: 'Most job seekers spray and pray — sending 50 messages hoping 2–3 respond. Network Desk turns this inside out.',
    inputs: [
      'LinkedIn export (connections, messages, invites)',
      'Target companies for job search',
      'Weekly availability in hours'
    ],
    outputs: [
      'Prioritized queue of 8–15 people to contact this week',
      'Personalized contact drafts for each person',
      'Friday dashboard: referrals made, conversations started, hiring manager meetings'
    ],
    demoUrl: 'demo-network-desk.html',
    repoUrl: '#',
    demoOnSampleData: true
  },
  'hyrox-40': {
    id: 'hyrox-40',
    order: 2,
    name: 'HYROX 40',
    tagline: 'iPhone-first PWA for five-day HYROX training',
    description: 'iPhone-first PWA for five-day HYROX training with nested timers and target-vs-actual scoring.',
    longDescription: 'Five days to race-ready. Built for iPhone, designed for HYROX athletes.',
    problem: 'HYROX is precise. You need nested timers that keep you in rhythm and show you whether you\'re improving week to week.',
    inputs: [
      'Baseline fitness level',
      'Week number'
    ],
    outputs: [
      'Nested timers for workouts, segments, and rest',
      'Target-vs-actual performance scoring',
      'Week-over-week progress tracking'
    ],
    demoUrl: 'demo-hyrox-40.html',
    repoUrl: '#',
    demoOnSampleData: true
  },
  'danish-learning': {
    id: 'danish-learning',
    order: 3,
    name: 'Danish Learning',
    tagline: 'Builds a daily three-document lesson packet tailored to your level',
    description: 'Builds a daily three-document lesson packet (læring, opgaver, facit) tailored to your level, then scores your completed homework.',
    longDescription: 'Personalized language instruction. Daily lessons that adapt to your level.',
    problem: 'Generic textbooks don\'t work. You need daily lessons that match your exact level and your actual learning goals.',
    inputs: [
      'Current Danish level (A1–B2)',
      'Topics or grammar focus for the week',
      'Time spent on homework'
    ],
    outputs: [
      'Daily lesson (explanations + examples)',
      'Daily exercises (written + comprehension)',
      'Answer key with scoring and gap analysis'
    ],
    demoUrl: 'demo-danish-learning.html',
    repoUrl: '#',
    demoOnSampleData: true
  }
};

export default projectsData;
