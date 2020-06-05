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
    img: 'cus.jpg',
    title: 'Custom Dataset Statistical Analyzing and Classification',
    info: 'With any dataset it can analyze the data using multiple methods finding its data distibution using plots find diffrent type of correlations and covariance. it can find all summary of the dataset and it is used for supervised machine learning.',
    info2: 'It can use for supervised classification methods like Logistic regression, Random forest, XGboost, Neural network with default parameters.',
    url: 'https://github.com/grtvishnu/Custom-Dataset-Analysis-Classification',
    repo: 'https://github.com/grtvishnu/Custom-Dataset-Analysis-Classification', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'air.jpg',
    title: 'Air Pollution Prediction and Forecasting',
    info: 'Predicting Air Quality can help governments warn people at high risk. In this work feature importance of air pollution, Implementing Random forest, XGBoost, CatBoost and Deep learning machine learning (ML) approaches. We use 8 features, including meteorological data, ground-measured PM 2.5 and gaseous pollutants.',
    info2: 'Forecasting Air quality using deep learning technique LSTM and Prophet package by Facebook we can extract the trend yearly seasonality, and weekly seasonality of the time series',
    url: 'https://github.com/grtvishnu/Air-Pollution-Prediction-and-Forecasting',
    repo: 'https://github.com/grtvishnu/Air-Pollution-Prediction-and-Forecasting', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mov.jpg',
    title: 'Movie Recommendation Using RecommenderLab and Shiny R',
    info: 'The main goal of this machine learning project is to build a recommendation engine that recommends movies to users. This R project is designed to understand the functioning of how a recommendation system works.',
    info2: 'System provides suggestions to the users through a filtering process that is based on user preferences and browsing history. ',
    url: 'https://github.com/grtvishnu/Movie_recommendation',
    repo: 'https://github.com/grtvishnu/Movie_recommendation', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact Me',
  email: 'optra7@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/vishnumon021',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/grt_vishnu',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vishnuvu/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/grtvishnu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};