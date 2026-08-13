const projects = {
  hacks: ['Hacks Season 4', 'images/hacks.svg', 'Add approved campaign imagery, case study copy, launch context, and final results for Hacks Season 4 here.', 'Originals marketing strategy, social storytelling, launch planning, and audience conversation support.'],
  rehearsal: ['The Rehearsal Season 2', 'images/rehearsal.svg', 'Add approved campaign assets and public-safe notes for The Rehearsal Season 2 here.', 'Campaign positioning, audience insight, creative alignment, and social strategy support.'],
  gemstones: ['The Righteous Gemstones Season 4', 'images/gemstones.svg', 'Add approved visuals and project narrative for The Righteous Gemstones Season 4 here.', 'Campaign planning, fan engagement, launch strategy, and awards framing.'],
  'life-larry': ['Life, Larry and the Pursuit of Unhappiness', 'images/life-larry.svg', 'Add approved marketing and publicity highlights, campaign pillars, and promotional moments here.', 'Strategy, campaign planning, promotional framing, and stakeholder alignment.'],
  stuart: ['Stuart Fails to Save the Universe', 'images/stuart.svg', 'Add approved social, publicity, fan engagement, and convention coverage visuals here.', 'Marketing and publicity planning, social collaboration, and fan-forward rollout support.'],
  clios: ['CLIO Awards Work', 'images/clios.svg', 'Add approved awards submissions, category strategy, campaign narrative, and public-facing results here.', 'Awards positioning, submission strategy, category mapping, and case study storytelling.'],
  ajlt: ['And Just Like That...', 'images/ajlt.svg', 'Add approved imagery, campaign notes, and public-safe highlights for And Just Like That here.', 'Campaign strategy, partnerships, activation thinking, and audience engagement.'],
  'team-comedy': ['Team Comedy', 'images/team-comedy.svg', 'Add approved examples of team process, campaign cadence, hot sheet work, and cross-functional planning here.', 'Comedy portfolio strategy, planning cadence, priority tracking, and cross-functional alignment.']
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'hacks';
const [title, imagePath, description, role] = projects[id] || projects.hacks;

const setText = (selector, text) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
};

setText('#project-name', title);
setText('#project-description', description);
setText('#project-role', role);
document.title = `${title} | Brittany Taylor`;

const img = document.querySelector('#project-img');
if (img) {
  img.src = imagePath;
  img.alt = `${title} image placeholder`;
}
