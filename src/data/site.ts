// Single source of truth for business details and homepage content.
// Every fact below was read off mmdanceacademy.com on 2026-09-05.
// Nothing here is invented; open questions live in CONTENT-NEEDED.md.

export const site = {
  name: 'M & M Dance Academy',
  shortName: 'M&M Dance',
  tagline: 'Dance classes in Monroeville, Pennsylvania',
  url: 'https://www.mmdanceacademy.com',
  phone: '(412) 373-5020',
  phoneHref: 'tel:+14123735020',
  // Displayed as text in their header and used for placement enquiries.
  email: 'lmdance5678@gmail.com',
  // The "Email Us Today!" button on their homepage points here instead.
  emailAlt: 'Lori.mmdance@hotmail.com',
  address: {
    street: '4314 Old William Penn Hwy',
    suite: 'Suite 104',
    city: 'Monroeville',
    state: 'PA',
    zip: '15146',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=4314+Old+William+Penn+Hwy+Monroeville+PA+15146',
  instagram: 'http://instagram.com/mmdanceacademy',
  // Their own homepage: "30 fantastic years!"
  yearsPhrase: '30 fantastic years',
  // Their own mission statement, quoted from the homepage.
  mission:
    'To teach dance in a nurturing, stress-free, compassionate and positive atmosphere.',
};

// From their Contact & Location page. Sunday was left blank there -- see
// CONTENT-NEEDED.md; it is shown as closed here and needs confirming.
export const hours = [
  { day: 'Monday to Thursday', open: '4:30 PM', close: '8:30 PM' },
  { day: 'Friday', note: 'Closed' },
  { day: 'Saturday', open: '10:00 AM', close: '1:00 PM' },
  { day: 'Sunday', note: 'Closed' },
];

export const hoursSchema = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '16:30', closes: '20:30' },
  { days: ['Saturday'], opens: '10:00', closes: '13:00' },
];

export const proof = [
  { figure: '30 years', label: 'Teaching dance in Monroeville' },
  { figure: 'Age 2½ and up', label: 'Preschool through high school, plus adult tap' },
  { figure: '11 styles', label: 'Ballet to hip-hop to Scottish dancing' },
  { figure: '3 levels', label: 'Recreational, hip-hop teams, dance company' },
];

// Their Classes page list, plus Contemporary which their homepage names.
export const classes = [
  'Ballet',
  'Tap',
  'Jazz',
  'Hip-Hop',
  'Acro-Gymnastics',
  'Musical Theater',
  'Contemporary',
  'Jazz/Gym Combo',
  'Scottish Dancing',
  'Preschool "4 Fun" 1 and 2',
  'Adult Tap',
];

// Their Classes page groups students this way.
export const groups = [
  {
    name: 'Preschool and kindergarten',
    ages: 'Ages 2 to 4',
    body:
      'We love this age group because they rock and rule. Princess and character themes keep them engaged while they learn proper ballet, jazz, tap and gymnastic technique.',
    image: '/images/preschool.jpg',
    alt: 'Preschool dancers in costume at M & M Dance Academy',
  },
  {
    name: 'Youth and teen',
    ages: 'Through high school',
    body:
      'Ballet and tap combos, jazz, hip-hop, acro and musical theater, at every ability from a first class to competition standard.',
    image: '/images/company.jpg',
    alt: 'The M & M Dance Academy company team in costume',
  },
  {
    name: 'Boys are welcome',
    ages: 'Every age',
    body:
      'We had a record number of boys join the studio this past season, and there is room for more.',
    image: '/images/boys.jpg',
    alt: 'A group of M & M Dance Academy dancers in costume',
  },
];

// The three tiers described on their Competitions page.
export const levels = [
  {
    name: 'Recreational',
    body:
      'Non-competitive classes for every age and level, from two and a half years through high school. Weekly class, a costume, and the year-end recital.',
  },
  {
    name: 'Hip-hop competition teams',
    body:
      'For dancers who want to compete without committing to the full company schedule.',
  },
  {
    name: 'Dance company',
    body:
      'By audition. The company competes at three competitions a season, plus festivals and the recital, across all dance subjects.',
  },
];

// Verbatim from their Competitions page, under "Successful Dancers".
export const alumni = [
  'Miss Pennsylvania 2011, Juliann Sheldon',
  'Pittsburgh Civic Light Opera productions',
  "Pennsylvania Governor's School for the Arts",
  'Dance and theater scholarships to universities and colleges',
  'Master’s degrees and assistantships in dance programmes',
  'Cruise ship performers',
  'Disney World performers',
  'Print ad work for dance and fitness magazines',
  'Leads and feature dancers in local high school musicals',
  'Pitt cheerleaders and dance team',
];
