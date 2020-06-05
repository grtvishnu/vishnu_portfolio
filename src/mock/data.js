import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is ',
  name: 'Vishnu Unnikrishnan',
  subtitle: 'I am a Data Scientist',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Computer Science Engineering graduate, with interests in data analytics, data science, and database management. I love the challenge of coding and I am passionate about making data-driven decisions! ',
  paragraphTwo: 'I found that my favorite projects were ones where I got to deep dive into data analysis and create visualizations. I was interested in pursuing a technical position where I could develop models,learn new technologies/coding languages, and/or utilize statistics. ',
  paragraphThree: 'I chose to enroll in an intensive Data Science course through Thinkful in order to solidify my technical skills and practice implementing machine learning models through project work.',
  resume: 'https://drive.google.com/file/d/1JslebhkuYaWjbeO707mj6egsNVC9rYD1/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Air Pollution Prediction and Forecasting',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};