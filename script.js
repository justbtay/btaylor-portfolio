const projects = window.PORTFOLIO_PROJECTS || [];
const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));

const gallery = document.querySelector('#gallery');
if (gallery) {
  gallery.innerHTML = projects.map(project => `
    <a class="project-tile" href="project.html?id=${encodeURIComponent(project.id)}" aria-label="Open ${escapeHTML(project.title)}">
      <img src="${project.hero}" alt="${escapeHTML(project.title)}" loading="lazy" decoding="async">
      <span class="project-overlay"><span>${escapeHTML(project.title)}</span></span>
    </a>`).join('');
}

const projectRoot = document.querySelector('#project-content');
if (projectRoot) {
  const params = new URLSearchParams(location.search);
  const requestedId = params.get('id');
  let index = projects.findIndex(p => p.id === requestedId);
  if (index < 0) index = 0;
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const awards = project.awards?.length
    ? `<div class="awards">${project.awards.map(a => `<p>${escapeHTML(a)}</p>`).join('')}</div>` : '';
  const overview = project.overview
    ? `<section class="project-copy"><h2>Overview</h2><p>${project.overview}</p>${project.externalLink ? `<a class="text-link" href="${project.externalLink.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.externalLink.label)}</a>` : ''}</section>` : '';
  let video = '';
  if (project.video?.type === 'youtube') {
    video = `<div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/${project.video.id}" title="${escapeHTML(project.title)} video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  }
  if (project.video?.type === 'vimeo') {
    const path = project.video.hash ? `${project.video.id}?h=${project.video.hash}` : project.video.id;
    video = `<div class="video-wrapper"><iframe src="https://player.vimeo.com/video/${path}" title="${escapeHTML(project.title)} video" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  const galleryImages = project.gallery?.length
    ? `<section class="project-gallery">${project.gallery.map((src, i) => `<img src="${src}" alt="${escapeHTML(project.title)} supporting image ${i + 1}" loading="lazy" decoding="async">`).join('')}</section>` : '';

  projectRoot.innerHTML = `
    <header class="project-heading"><h1>${escapeHTML(project.title)}</h1>${awards}</header>
    <img class="project-hero" src="${project.hero}" alt="${escapeHTML(project.title)} hero image">
    ${overview}${video}${galleryImages}
    <nav class="project-nav" aria-label="Project navigation">
      <a href="project.html?id=${encodeURIComponent(previous.id)}">Previous Project</a>
      <a href="index.html">Back to Work</a>
      <a href="project.html?id=${encodeURIComponent(next.id)}">Next Project</a>
    </nav>`;
  document.title = `${project.title} | Brittany Taylor`;
}
