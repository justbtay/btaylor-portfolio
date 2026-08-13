const projectOrder = [
  'hacks',
  'rehearsal',
  'gemstones',
  'life-larry',
  'stuart',
  'clios',
  'ajlt',
  'team-comedy'
];

const projects = {
  hacks: {
    title: 'Hacks Season 4',
    image: 'images/hacks.svg',
    description: 'Add approved campaign imagery, case study copy, launch context, and final results for Hacks Season 4 here.'
  },
  rehearsal: {
    title: 'The Rehearsal Season 2',
    image: 'images/rehearsal.svg',
    description: 'Add approved campaign assets and public-safe notes for The Rehearsal Season 2 here.'
  },
  gemstones: {
    title: 'The Righteous Gemstones Season 4',
    image: 'images/gemstones.svg',
    description: 'Add approved visuals and project narrative for The Righteous Gemstones Season 4 here.'
  },
  'life-larry': {
    title: 'Life, Larry and the Pursuit of Unhappiness',
    image: 'images/life-larry.svg',
    description: 'Add approved marketing and publicity highlights, campaign pillars, and promotional moments here.'
  },
  stuart: {
    title: 'Stuart Fails to Save the Universe',
    image: 'images/stuart.svg',
    description: 'Add approved social, publicity, fan engagement, and convention coverage visuals here.'
  },
  clios: {
    title: 'CLIO Awards Work',
    image: 'images/clios.svg',
    description: 'Add approved awards submissions, category strategy, campaign narrative, and public-facing results here.'
  },
  ajlt: {
    title: 'And Just Like That...',
    image: 'images/ajlt.svg',
    description: 'Add approved imagery, campaign notes, and public-safe highlights for And Just Like That here.'
  },
  'team-comedy': {
    title: 'Team Comedy',
    image: 'images/team-comedy.svg',
    description: 'Add approved examples of team process, campaign cadence, hot sheet work, and cross-functional planning here.'
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id') || projectOrder[0];
const project = projects[id] || projects[projectOrder[0]];

const setText = (selector, text) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
};

setText('#project-name', project.title);
setText('#project-description', project.description);
document.title = `${project.title} | Brittany Taylor`;

const img = document.querySelector('#project-img');
if (img) {
  img.src = project.image;
  img.alt = `${project.title} image placeholder`;
}

const currentIndex = Math.max(projectOrder.indexOf(id), 0);
const prevId = projectOrder[(currentIndex - 1 + projectOrder.length) % projectOrder.length];
const nextId = projectOrder[(currentIndex + 1) % projectOrder.length];
const prevLink = document.querySelector('#prev-project');
const nextLink = document.querySelector('#next-project');

if (prevLink) {
  prevLink.href = `project.html?id=${prevId}`;
  prevLink.textContent = 'Previous Project';
}

if (nextLink) {
  nextLink.href = `project.html?id=${nextId}`;
  nextLink.textContent = 'Next Project';
}
