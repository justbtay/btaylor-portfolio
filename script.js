const projects = {
  hacks: {
    title: 'Hacks Season 4',
    image: 'images/hacks.svg',
    description: 'Add approved campaign imagery, case study copy, launch context, and final results for Hacks Season 4 here.',
    role: 'Originals marketing strategy, social storytelling, launch planning, and audience conversation support.'
  },
  rehearsal: {
    title: 'The Rehearsal Season 2',
    image: 'images/rehearsal.svg',
    description: 'Add approved campaign assets and public-safe notes for The Rehearsal Season 2 here.',
    role: 'Campaign positioning, audience insight, creative alignment, and social strategy support.'
  },
  gemstones: {
    title: 'The Righteous Gemstones Season 4',
    image: 'images/gemstones.svg',
    description: 'Add approved visuals and project narrative for The Righteous Gemstones Season 4 here.',
    role: 'Campaign planning, fan engagement, launch strategy, and awards framing.'
  },
  'life-larry': {
    title: 'Life, Larry and the Pursuit of Unhappiness',
    image: 'images/life-larry.svg',
    description: 'Add approved marketing and publicity highlights, campaign pillars, and promotional moments here.',
    role: 'Strategy, campaign planning, promotional framing, and stakeholder alignment.'
  },
  stuart: {
    title: 'Stuart Fails to Save the Universe',
    image: 'images/stuart.svg',
    description: 'Add approved social, publicity, fan engagement, and convention coverage visuals here.',
    role: 'Marketing and publicity planning, social collaboration, and fan-forward rollout support.'
  },
  clios: {
    title: 'CLIO Awards Work',
    image: 'images/clios.svg',
    description: 'Add approved awards submissions, category strategy, campaign narrative, and public-facing results here.',
    role: 'Awards positioning, submission strategy, category mapping, and case study storytelling.'
  },
  ajlt: {
    title: 'And Just Like That...',
    image: 'images/ajlt.svg',
    description: 'Add approved imagery, campaign notes, and public-safe highlights for And Just Like That here.',
    role: 'Campaign strategy, partnerships, activation thinking, and audience engagement.'
  },
  'team-comedy': {
    title: 'Team Comedy',
    image: 'images/team-comedy.svg',
    description: 'Add approved examples of team process, campaign cadence, hot sheet work, and cross-functional planning here.',
    role: 'Comedy portfolio strategy, planning cadence, priority tracking, and cross-functional alignment.'
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'hacks';
const project = projects[id] || projects.hacks;

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
};

setText('#project-title', project.title);
setText('#project-description', project.description);
setText('#project-role', project.role);

document.title = `${project.title} | Brittany Taylor`;

const image = document.querySelector('#project-image');
if (image) {
  image.src = project.image;
  image.alt = `${project.title} image placeholder`;
}
