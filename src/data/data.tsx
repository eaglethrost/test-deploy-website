import {
  AcademicCapIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/Portrait.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
  ProjectItem
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Dimas Putra Anugerah',
  description: "Personal website of Dimas Putra Anugerah",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Dimas Putra Anugerah`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Aspiring Developer
      </p>
    </>
  ),
  actions: [
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Final year bachelor of Computer Science student at the University of Adelaide. My goal is to become
  a high quality developer who brings positive impact to the world. I love the problem-solving aspect
  of my degree and learning how exciting technologies work. Currently looking for part-time and graduate software engineer roles, 
  please feel free to contact.`,
  aboutItems: [
    {label: 'Location', text: 'Adelaide, Australia', Icon: MapIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Study', text: 'The University of Adelaide', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Music, F1, Football, History', Icon: SparklesIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Golang',
        level: 7,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'Javascript',
        level: 7,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'R',
        level: 5,
      },
      {
        name: 'MongoDB',
        level: 4,
      }
    ],
  }, 
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Indonesian',
        level: 9,
      }
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2023 (Expected)',
    location: 'The University of Adelaide',
    title: 'Bachelor of Computer Science',
    content: <p>GPA: 6.5/7</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'Australian Institute of Machine Learning',
    title: 'Research Intern',
    content: (
      <div>
        <li>Designed and implemented a program to decompose complex instructions into simpler subtasks for robots</li>
        <li>Used PyTorch, Stanza, and GPT3.5 to create a natural language processing model that improves the accuracy of the instruction decomposition by 40%</li>
      </div>
    ),
  },
  {
    date: 'December 2022 - February 2023',
    location: 'Equnix Business Solutions',
    title: 'Software Developer Intern',
    content: (
      <div>
        <li>Helped create a technical assessment report for a client PostgreSQL database system</li>
        <li>Tester and source code documentation writer for a LAN device synchronization program</li>
        <li>Supported a Point of Sales software store deployment</li>
        <li>Analyzed client database growth and created statistical models to predict future values</li>
      </div>
    ),
  },
  {
    date: 'January 2021 - February 2021',
    location: 'Mandalika Grand Prix Association',
    title: 'Data Science Intern',
    content: (
      <div>
        <li>Developed a program that takes in and cleans hundreds of tweets on an event</li>
        <li>Extracted statistical, sentiment, and topic analysis from tweets using data analysis techniques</li>
        <li>Produced comprehensive weekly reports and a final report on findings</li>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

export const projects: ProjectItem[] = [
  {
    date: 'March 2023',
    link: 'https://tinnamchoi.github.io/unihack-2023/',
    title: 'The Sound of Personality',
    content: (
      <p>
        A web application predicts a user’s MBTI from their music preferences. Preference is obtained from the user’s Spotify account or a music preference quiz. Submission for UNIHACK 2023 
      </p>
    ),
  },
  {
    date: 'April 2022 - June 2022',
    link: 'https://github.com/eaglethrost/Social-Event-Planner',
    title: 'Social Event Planner',
    content: (
      <p>
        A social web application that allows users to create events, add them to a calender, invite other users, and sync calendars.
      </p>
    ),
  },
  {
    date: 'April 2021 - May 2021',
    link: 'https://github.com/eaglethrost/Classroom-Reservation',
    title: 'Classroom Simulation Reservation',
    content: (
      <p>
        A simulation of a classroom booking system written in C++ for a university course project, with an emphasis on object-oriented principles.
      </p>
    ),
  },
  {
    date: 'August 2020 - September 2020',
    link: 'https://github.com/eaglethrost/Battleship',
    title: 'Battleship',
    content: (
      <p>
        A Battleship game where the player has to guess coordinates in a board to sink ships. The game runs in a terminal, displays the game board as ASCII characters, and features interactive dialogues with players.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'dimazanugrah12@gmail.com',
      href: 'mailto:dimazanugrah12@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Adelaide, Australia',
      href: 'https://goo.gl/maps/GEf8817uuzaZd9CW9',
    },
    {
      type: ContactType.Github,
      text: 'eaglethrost',
      href: 'https://github.com/eaglethrost/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Dimas Putra Anugerah',
      href: 'https://www.linkedin.com/in/dimasputraanugerah/',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/eaglethrost/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dimasputraanugerah/'},
];
