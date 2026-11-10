const fs = require('fs');

const enSection3 = {
  eyebrow: 'OUR WORK · PORTFOLIO',
  headingPrefix: "Let's Build Something",
  headingHighlight: 'Exceptional',
  headingSuffix: 'Together.',
  subtext: "Tell us about your project. We'll respond within one business day with a tailored proposal."
};

const nlSection3 = {
  eyebrow: 'ONS WERK · PORTFOLIO',
  headingPrefix: 'Laten We Samen Iets',
  headingHighlight: 'Buitengewoons',
  headingSuffix: 'Bouwen.',
  subtext: 'Vertel ons over uw project. We reageren binnen één werkdag met een op maat gemaakt voorstel.'
};

function addSection3(file, data) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!json.portfolio) json.portfolio = {};
  json.portfolio.section3 = data;
  fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8');
  console.log('Added section3 to ' + file);
}

addSection3('./public/locales/en/common.json', enSection3);
addSection3('./public/locales/nl/common.json', nlSection3);
addSection3('./i18n/locales/en/common.json', enSection3);
addSection3('./i18n/locales/nl/common.json', nlSection3);

