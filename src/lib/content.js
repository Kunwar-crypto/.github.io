// The content files are ordinary JSON, edited through Pages CMS.
// Vite bundles them at build time when GitHub Pages redeploys.
const publicationFiles = import.meta.glob('../data/publications/*.json', { eager: true, import: 'default' });
const researchFiles = import.meta.glob('../data/research/*.json', { eager: true, import: 'default' });
const newsFiles = import.meta.glob('../data/news/*.json', { eager: true, import: 'default' });
const awardFiles = import.meta.glob('../data/awards/*.json', { eager: true, import: 'default' });
const experienceFiles = import.meta.glob('../data/experience/*.json', { eager: true, import: 'default' });
const toArray = (files) => Object.values(files);
export const publications = toArray(publicationFiles).sort((a, b) => b.year - a.year || Number(b.featured) - Number(a.featured));
export const research = toArray(researchFiles).sort((a, b) => a.order - b.order);
export const news = toArray(newsFiles).sort((a, b) => String(b.date).localeCompare(String(a.date)));
export const awards = toArray(awardFiles).sort((a, b) => b.year - a.year);
export const experiences = toArray(experienceFiles).sort((a, b) => a.order - b.order);
export const journalPapers = publications.filter(p => p.category === 'Journal article');
export const phdPapers = publications.filter(p => p.featured && p.category === 'Journal article');
export const prettyDate = (d) => /^\d{4}-\d{2}-\d{2}$/.test(String(d)) ? new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric', timeZone:'UTC' }) : String(d);
