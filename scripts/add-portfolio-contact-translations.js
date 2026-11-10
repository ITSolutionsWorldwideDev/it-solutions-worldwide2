const fs = require('fs');

const enContact = {
  headerTitle: "Let's Connect",
  headerSubtitle: "Ready to transform your business? Get in touch with our experts today",
  getInTouch: "Get in Touch",
  getInTouchSubtext: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  emailUs: "Email Us",
  callUs: "Call Us",
  visitUs: "Visit Us",
  followUs: "Follow Us",
  yourName: "Your Name",
  emailAddress: "Email Address",
  phoneNumber: "Phone Number",
  company: "Company",
  serviceInterested: "Service Interested In",
  yourMessage: "Your Message",
  namePlaceholder: "John Doe",
  emailPlaceholder: "john@example.com",
  phonePlaceholder: "+1 (555) 000-0000",
  companyPlaceholder: "Your Company",
  servicePlaceholder: "e.g. Web Development, Cloud, AI...",
  messagePlaceholder: "Tell us about your project...",
  sendMessage: "Send Message",
  sending: "Sending...",
  successMsg: "Thank you! Your message has been sent successfully. We'll be in touch soon.",
  errorMsg: "Failed to send message. Please try again or email us directly."
};

const nlContact = {
  headerTitle: "Laten We Praten",
  headerSubtitle: "Klaar om uw bedrijf te transformeren? Neem vandaag nog contact op met onze experts",
  getInTouch: "Neem Contact Op",
  getInTouchSubtext: "Heeft u een project in gedachten? We horen graag van u. Stuur ons een bericht en we reageren zo snel mogelijk.",
  emailUs: "E-mail Ons",
  callUs: "Bel Ons",
  visitUs: "Bezoek Ons",
  followUs: "Volg Ons",
  yourName: "Uw Naam",
  emailAddress: "E-mailadres",
  phoneNumber: "Telefoonnummer",
  company: "Bedrijf",
  serviceInterested: "Interesse In Dienst",
  yourMessage: "Uw Bericht",
  namePlaceholder: "Jan Jansen",
  emailPlaceholder: "jan@voorbeeld.nl",
  phonePlaceholder: "+31 (0)10 000 0000",
  companyPlaceholder: "Uw Bedrijf",
  servicePlaceholder: "bijv. Webontwikkeling, Cloud, AI...",
  messagePlaceholder: "Vertel ons over uw project...",
  sendMessage: "Bericht Verzenden",
  sending: "Verzenden...",
  successMsg: "Bedankt! Uw bericht is succesvol verzonden. We nemen snel contact met u op.",
  errorMsg: "Verzenden mislukt. Probeer het opnieuw of stuur ons direct een e-mail."
};

function addContact(file, data) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!json.portfolio) json.portfolio = {};
  json.portfolio.contactSection = data;
  fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8');
  console.log('Added contactSection to ' + file);
}

addContact('./public/locales/en/common.json', enContact);
addContact('./public/locales/nl/common.json', nlContact);
addContact('./i18n/locales/en/common.json', enContact);
addContact('./i18n/locales/nl/common.json', nlContact);

