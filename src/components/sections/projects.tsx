import Image from 'next/image';
import styles from '@/styles/components/sections/Projects.module.scss';
import { useEffect, useState } from 'react';
import LinkButton from '../linkButton';
import { Calculator, PersonLinesFill } from 'react-bootstrap-icons';

interface TechProps {
  name: string;
  img: string;
  url: string;
}

interface ProjectProps {
  title: string;
  img: string;
  description: string;
  techs: TechProps[];
  url: string;
  github: string;
  icon?: React.ReactNode;
}

const techs: TechProps[] = [
  {
    name: 'node.js',
    img: '/images/techs/nodejs.svg',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'react.js',
    img: '/images/techs/react.png',
    url: 'https://react.dev/',
  },
  {
    name: 'postgreSQL',
    img: '/images/techs/postgreSQL.png',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'bootstrap',
    img: '/images/techs/bootstrap.png',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'jquery',
    img: '/images/techs/jquery.svg',
    url: 'https://jquery.com/',
  },
  {
    name: 'django',
    img: '/images/techs/django.svg',
    url: 'https://www.djangoproject.com/',
  },
  {
    name: 'MATLAB',
    img: '/images/techs/matlab.png',
    url: 'https://uk.mathworks.com/products/matlab.html',
  },
  {
    name: 'ReactNative',
    img: '/images/techs/reactNative.png',
    url: 'https://reactnative.dev/',
  },
  {
    name: 'JavaScript',
    img: '/images/techs/js.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
];

const featuredProjects: ProjectProps[] = [
  {
    title: 'Chup Chup',
    img: '/images/chupchup.png',
    description:
      'Chup Chup is a dynamic voucher selling platform that offers a wide range of vouchers from multiple industries. As a voucher selling platform, Chup Chup focuses on providing customers with discounted deals and savings in various sectors, including restaurants, hotels, and automotive services.',
    techs: techs.filter((tech) =>
      ['node.js', 'react.js', 'postgreSQL', 'bootstrap'].includes(tech.name)
    ),
    url: 'https://www.chupchup.com/',
    github: '',
  },
  {
    title: 'Ecommerce37',
    description:
      'Ecommerce37 is a full stack ecommerce web app developed for the Internet Technology course at the University of Glasgow. It offers essential features like user authentication, item search, shopping cart management, profile picture customization, and order history.',
    img: '/images/ecommerce37.png',
    techs: techs.filter((tech) =>
      ['bootstrap', 'jquery', 'django'].includes(tech.name)
    ),
    url: 'https://pavaruthb.pythonanywhere.com/',
    github: 'https://github.com/P-Buranakitsin/ecommerce37',
  },
  {
    title:
      'Development of MATLAB Application for Solving Two-dimensional Diffusion Equation by Bubnov-Galerkin Method on Triangular and Quadrilateral Meshes',
    description:
      'This is my senior project at Chulalongkorn University. I, along with two friends, had developed a MATLAB application to solve linear partial differential equations of which form is similar to the diffusion equation. My area of responsibility was to design and develop Graphical User Interface (GUI) of the application to accept user inputs, such as types of boundary conditions, diffusivity, volumetric source, into the application.',
    github: '',
    img: '/images/matlab_proj_cu.png',
    techs: techs.filter((tech) => ['MATLAB'].includes(tech.name)),
    url: 'https://www.linkedin.com/in/pavaruth-buranakitsin-a717a8188/overlay/1591111345075/single-media-viewer/?profileId=ACoAACxBefUB_A_Bdj93ldKTb7xUNAzw3uNc4-A',
  },
];

const otherProjects: ProjectProps[] = [
  {
    title: 'ReactNative-ContactApp',
    description:
      'The React Native Contact App is a practice app that allows you to manage your phone contacts. You can view, edit, add, and delete contacts, including changing names and images for each contact individually.',
    github: 'https://github.com/P-Buranakitsin/ReactNative-ContactApp',
    img: '',
    techs: techs.filter((tech) => ['ReactNative'].includes(tech.name)),
    url: '',
    icon: <PersonLinesFill color={'white'} size={50} />,
  },
  {
    title: 'Expense-Calculator',
    description:
      'Expense Calculator is a web app made with vanilla Javascript that simplifies splitting expenses among friends. It automates calculations, saving time and avoiding errors. Easily input and manage expenses to ensure fair distribution. Effortlessly handle complex calculations and simplify expense sharing.',
    github: 'https://github.com/P-Buranakitsin/Expense-Calculator',
    img: '',
    techs: techs.filter((tech) => ['JavaScript'].includes(tech.name)),
    url: '',
    icon: <Calculator color={'white'} size={50} />,
  },
];

export default function ProjectsSection() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [touchEnabled, setTouchEnabled] = useState(false);

  useEffect(() => {
    // Detech touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setTouchEnabled(true);
    }

    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Update the screen width initially
    updateScreenWidth();

    // Add event listener to update the screen width on resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const listFeaturedProjects = featuredProjects.map((project, index) => {
    const columns = [];
    const colPic = (
      <div className="col-sm-5">
        <div className="overflow-hidden rounded">
          <Image
            alt=""
            src={project.img}
            className={`img-fluid rounded ${styles.projectImg}`}
            width={99999}
            height={99999}
            onClick={() => {
              window.open(project.url, '_blank');
            }}
          />
        </div>
      </div>
    );

    const isEven = index % 2 === 0;
    const textEndClass = isEven ? 'text-end' : '';

    const colDescription = (
      <div className="col-sm-7 mt-sm-0 mt-3 d-flex flex-column">
        <div className={`fs-4 text-primary fw-semibold ${textEndClass}`}>
          Featured Project
        </div>
        <h5 className={`text-white fw-medium ${textEndClass}`}>
          {project.title}
        </h5>
        <div className={`fs-5 text-white fw-light ${textEndClass}`}>
          {project.description}
        </div>
        {project.github.length > 0 && (
          <div className="mt-2">
            <LinkButton
              label="GitHub"
              url={project.github}
              useGitHubIcon={true}
            />
          </div>
        )}
        <h6 className={`text-white fw-medium mt-3 ${textEndClass}`}>
          Made with:
        </h6>
        <div className={`row flex-wrap ${isEven ? 'justify-content-end' : ''}`}>
          {project.techs.map((tech, index) => {
            return (
              <div
                className={`col-2 d-flex align-items-end ${
                  isEven ? 'justify-content-end' : ''
                }`}
                key={index}
              >
                <Image
                  alt=""
                  src={tech.img}
                  className={`img-fluid ${styles.projectImg}`}
                  width={60}
                  height={60}
                  onClick={() => {
                    window.open(tech.url, '_blank');
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );

    if (isEven || screenWidth < 576) {
      // The number 576 comes from bootstrap sm width
      columns.push(colPic, colDescription);
    } else {
      columns.push(colDescription, colPic);
    }

    return (
      <div className="row mb-5 mt-5" key={index}>
        {columns}
      </div>
    );
  });

  const listOtherProjects = otherProjects.map((project, index) => {
    return (
      <div className="col-sm-4 mt-sm-0 mt-3" key={index}>
        <div
          className={`rounded-3 border border-primary p-3 h-100 ${
            touchEnabled ? '' : styles.otherProjectCol
          }`}
        >
          <div className="d-flex justify-content-center mb-2">
            {project.icon}
          </div>
          <h5 className="text-white fw-medium text-center mb-3">
            {project.title}
          </h5>
          <div className="fs-6 text-white fw-light">{project.description}</div>
          {project.github.length > 0 && (
            <div className="mt-2">
              <LinkButton
                label="GitHub"
                url={project.github}
                useGitHubIcon={true}
              />
            </div>
          )}
          <h6 className="text-white fw-medium mt-3">Made with:</h6>
          <div className="row flex-wrap">
            {project.techs.map((tech, index) => {
              return (
                <div className="col-4" key={index}>
                  <Image
                    alt=""
                    src={tech.img}
                    className={`img-fluid ${styles.projectImg}`}
                    width={50}
                    height={50}
                    onClick={() => {
                      window.open(tech.url, '_blank');
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="fw-semibold text-white border-bottom pb-2 mb-4">
            Projects
          </h2>
          {listFeaturedProjects}
        </div>
        <div className="col-sm-10">
          <h3 className="fw-semibold text-white text-center mt-2 mb-4">
            Other Noteworthy Projects
          </h3>
          <div className="row">{listOtherProjects}</div>
        </div>
      </div>
    </div>
  );
}
