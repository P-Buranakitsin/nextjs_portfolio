import Image from 'next/image';
import { Variant } from 'react-bootstrap/esm/types';
import styles from '@/styles/components/sections/About.module.scss';

const mySkills: { name: string; bg: Variant }[] = [
  {
    name: 'React.js',
    bg: 'primary',
  },
  {
    name: 'Javascript',
    bg: 'warning',
  },
  {
    name: 'HTML',
    bg: 'danger',
  },
  {
    name: 'CSS',
    bg: 'primary',
  },
  {
    name: 'Git',
    bg: 'danger',
  },
  {
    name: 'Responsive Web Design',
    bg: 'secondary',
  },
  {
    name: 'Java',
    bg: 'danger',
  },
  {
    name: 'Python',
    bg: 'primary',
  },
  {
    name: 'Django',
    bg: 'success',
  },
  {
    name: 'SASS',
    bg: 'danger',
  },
  {
    name: 'SQL',
    bg: 'primary',
  },
  {
    name: 'Node.js',
    bg: 'success',
  },
  {
    name: 'Express.js',
    bg: 'warning',
  },
  {
    name: 'Bootstrap',
    bg: 'primary',
  },
];

export default function AboutSection() {
  const listMySkills = mySkills.map((skill, index) => {
    return (
      <li className="text-white me-2" key={index}>
        <div className="text-white fw-semibold">{skill.name}</div>
      </li>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="fw-semibold text-white border-bottom pb-3 mb-3">
            About Me
          </h2>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center mt-4 mb-4">
          <Image
            alt=""
            src={'/images/me.jpeg'}
            width={225}
            height={225}
            className="rounded-circle img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-white fw-semibold ">Get to know me!</h4>
          <p className="fs-5 text-secondary ">
            Hi there! I am Pavaruth Buranakitsin, an Aerospace Engineering
            graduate who found a passion for software engineering during a
            MATLAB project to solve finite element problems in my senior year. I
            pursued an MSc in Information Technology at the University of
            Glasgow and spent 1 year and 8 months as a junior front-end
            developer, building mobile and web applications using React and
            React Native.
          </p>
          <p className="fs-5 text-secondary ">
            I am eager to work as a full-stack, back-end, or front-end developer
            after graduation, creating user-friendly, scalable, and efficient
            software solutions. Outside of work, I stay up-to-date on software
            engineering trends, experiment with new technologies, and enjoy
            traveling and staying active. With my skills, dedication, and
            enthusiasm, I am excited to make a positive impact on any team I
            join.
          </p>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
          <h4 className="text-white fw-semibold">My Skills</h4>
          <p className="fs-5 text-secondary ">
            Here are some skills that I am confident with:
          </p>
          <ul className={`${styles.ulSkills}`}>{listMySkills}</ul>
        </div>
      </div>
    </div>
  );
}
