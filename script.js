const projects = {
  'life-larry': {
    kicker: 'Marketing and Publicity Plan',
    title: 'Life, Larry and the Pursuit of Unhappiness',
    summary: 'A campaign plan built around Larry David’s take on American history, social amplification, promotional moments, and audience awareness drivers.',
    role: 'Originals marketing strategy, campaign planning, stakeholder alignment, promotional framing.',
    involved: 'Campaign objectives, audience snapshot, campaign pillars, roadmap, digital and social support, paid media, publicity, semiquincentennial promotions, pie giveaways, and KidSuper Studios collaboration notes.',
    notes: 'Before publishing, replace with approved public assets, press links, and only cleared results. Keep internal planning details private.',
    theme: 'navy'
  },
  rooster: {
    kicker: 'Comedy Series Campaign',
    title: 'Rooster',
    summary: 'A comedy launch anchored in talent appeal, ensemble storytelling, social-first content, and audience entry points.',
    role: 'Campaign strategy, creative direction, social strategy, key art and trailer rollout planning.',
    involved: 'Brand social framework, audience targeting, talent-forward content, coffee or hot chocolate partnership thinking, Austin and New York activation opportunities, fan screenings, and launch timeline coordination.',
    notes: 'Replace this with approved imagery and public-safe highlights. Remove any internal dates or unannounced details before publishing.',
    theme: 'cream'
  },
  stuart: {
    kicker: 'Marketing and Publicity Plans',
    title: 'Stuart Fails to Save the Universe',
    summary: 'A fan-forward campaign with social content, talent toolkits, convention coverage, and community management built around weekly momentum.',
    role: 'Strategy, marketing and publicity planning, social collaboration, activation support.',
    involved: 'Community management, weekly social toolkits, junket shoot content, CCXP and SDCC coverage, social campaign SOW feedback, episodic concepts, and fan experience support.',
    notes: 'Add approved key art, SDCC images, social examples, and public press moments when available.',
    theme: 'graphite'
  },
  hacks: {
    kicker: 'Social Performance and Conversation',
    title: 'Hacks',
    summary: 'Social strategy rooted in celebrity cameos, relationship-driven compilations, dialogue-forward edits, and audience conversation.',
    role: 'Social strategy input, campaign insights, performance framing.',
    involved: 'Tracking performance themes including cameo moments, Ava and Deborah relationship discourse, quote-led engagement, and platform-native social formats.',
    notes: 'Use this page to showcase cleared examples of social strategy, audience insights, and campaign learnings.',
    theme: 'blush'
  },
  clios: {
    kicker: 'Awards Positioning',
    title: 'CLIOs / Awards Submissions',
    summary: 'Awards storytelling for entertainment marketing, fan engagement, partnerships, activations, and social campaign impact.',
    role: 'Awards framing, submission story, category mapping, campaign narrative.',
    involved: 'Submission planning across titles and categories including experiential and activations, fan engagement, partnerships, public relations, social campaigns, digital, mobile, and out-of-home.',
    notes: 'Add only submitted or approved awards work. This page is designed to hold category, challenge, idea, execution, and outcome.',
    theme: 'red'
  },
  curb: {
    kicker: 'Fan Engagement Stunt',
    title: 'Curb Your Enthusiasm',
    summary: 'A fan engagement stunt connecting on-screen narrative, merchandise, a real-world billboard placement, and social conversation.',
    role: 'Campaign storytelling, awards narrative, stunt framing.',
    involved: 'Custom caftan merchandise, catchascaftan.com redirect, physical billboard recreation at the episode location, social amplification, fan interaction, and submission copy.',
    notes: 'Confirm rights and image permissions before adding any production stills, social posts, or stunt photography.',
    theme: 'ivory'
  },
  'comedy-pod': {
    kicker: 'Team Comedy Operating System',
    title: 'Team Comedy',
    summary: 'A working cadence for comedy campaign updates, hot sheet priorities, weekly inspiration, and cross-functional alignment.',
    role: 'Strategy team coordination, campaign status, priority tracking.',
    involved: 'Weekly status updates, hot items, team updates, creative, social, media, activations, partnerships, and campaign tracker alignment.',
    notes: 'This can become a process case study showing how you keep complex multi-title comedy work organized.',
    theme: 'green'
  },
  'come-back': {
    kicker: 'Marketing and PR Planning',
    title: 'The Comeback',
    summary: 'A nostalgic, talent-led campaign framework with podcast storytelling and social positioning around a beloved comedy return.',
    role: 'Marketing strategy, publicity plan support, campaign messaging.',
    involved: 'Marketing and PR planning, paid media flighting, podcast concept, episodic rollout, and audience reconnection through Valerie Cherish’s legacy.',
    notes: 'Use this page for approved creative, podcast art, key beats, and public-facing campaign language.',
    theme: 'blue'
  },
  process: {
    kicker: 'Strategic Workflow',
    title: 'Strategy Process',
    summary: 'A repeatable workflow for building marketing plans, creative development, rollout planning, and team communication.',
    role: 'Campaign strategy process design and execution.',
    involved: 'Internal slide development, review cycles, programming handoff, trailer and key art rollout communication, AV and OOH coordination, paid media alignment, and creative kickoff processes.',
    notes: 'This works well as a public portfolio page if framed as process expertise without exposing internal documents.',
    theme: 'tan'
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'life-larry';
const data = projects[id] || projects['life-larry'];

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

setText('#project-kicker', data.kicker);
setText('#project-title', data.title);
setText('#project-summary', data.summary);
setText('#project-role', data.role);
setText('#project-involved', data.involved);
setText('#project-notes', data.notes);
setText('#project-mark', data.title);

document.title = `${data.title} | Brittany Taylor`;
const visual = document.querySelector('#project-visual');
if (visual) {
  visual.className = `project-visual paper ${data.theme}`;
}
