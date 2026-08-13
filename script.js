const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !show);
    });
  });
});

const caseData = {
  'weekly-dose': ['Weekly Dose', 'Audience ritual, editorial cadence, and weekly conversation strategy.'],
  captain: ['Captain', 'Brand positioning framework for a high-visibility originals launch.'],
  'hot-sheet': ['Hot Sheet', 'Internal and external storytelling system for fast-moving priorities.'],
  'team-comedy': ['Team Comedy', 'Slate narrative, campaign architecture, and audience segmentation.'],
  clios: ['CLIOs', 'Awards positioning, submission story, and creative effectiveness framing.'],
  inspo: ['Inspo Lab', 'Reference gathering, visual territories, and creative alignment toolkit.']
};

const params = new URLSearchParams(window.location.search);
const project = params.get('project');
if (project && caseData[project]) {
  const [title, summary] = caseData[project];
  const titleNode = document.querySelector('#case-title');
  const summaryNode = document.querySelector('#case-summary');
  if (titleNode) titleNode.textContent = title;
  if (summaryNode) summaryNode.textContent = summary;
}
