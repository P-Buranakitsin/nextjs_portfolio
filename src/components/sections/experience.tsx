import Image from 'next/image';
import { Variant } from 'react-bootstrap/esm/types';
import LinkButton from '../linkButton';

const jobs: {
  title: string;
  img: string;
  company: string;
  duration: string;
  location: string;
  descriptions: string[];
  skills: { name: string; bg: Variant }[];
  credentials: string;
}[] = [
  {
    title: 'Junior Frontend Developer',
    company: 'Cheddo Technology · Full-time',
    img: '/images/cheddo.png',
    descriptions: [
      'Create functional front-end for both websites and mobile applications using frameworks such as React and React Native',
      'Integrate APIs from back-end with front-end of the websites and mobile applications',
      'Manage states across websites and mobile applications using Redux.js',
    ],
    location: 'Bangkok, Thailand',
    duration: 'Jan 2021 - Aug 2022 · 1 yr 8 mos',
    skills: [
      { name: 'Redux Thunk', bg: 'info' },
      { name: 'Git', bg: 'warning' },
      { name: 'Typescript', bg: 'info' },
      { name: 'React', bg: 'primary' },
      { name: 'React Native', bg: 'primary' },
    ],
    credentials: '',
  },
  {
    title: 'Design Engineering Intern',
    company: 'Triumph Group · Internship',
    img: '/images/triumph.jpeg',
    duration: 'Jun 2019 - Jul 2019 · 2 mos',
    location: 'Chon Buri, Thailand',
    skills: [],
    descriptions: [
      'Performed adhesive bond strength tensile lap shear testing under supervision of experienced technicians',
      'Assisted design engineers in components scanning',
      'Assisted design engineers in technical drawings',
    ],
    credentials:
      'https://drive.google.com/file/d/12tt0-Bt_enzz1OAMLzK7aJjGiyYzV9vv/view?usp=share_link',
  },
  {
    title: 'Intern',
    company: 'Thai Airways International · Internship',
    img: '/images/thai_airways.jpeg',
    duration: 'Jun 2018 - Jul 2018 · 2 mos',
    location: 'Bangkok Metropolitan Area',
    skills: [],
    descriptions: [
      'Suvarnabhumi International Airport tour on several workshops including: Oxygen Distribution System, Aircraft Structure Reparation, Brake and Wheel, etc.',
      'Learnt how to use Aircraft Maintenance Manual (AMM) based on real-life cases',
    ],
    credentials: '',
  },
];

export default function ExperienceSection() {
  const listJobs = jobs.map((job, index) => {
    return (
      <div className="row mb-5 mt-4" key={index}>
        <div className="col-sm-2">
          <Image
            alt=""
            src={job.img}
            className="img-fluid rounded"
            width={100}
            height={100}
          />
        </div>
        <div className="col-sm-10 mt-sm-0 mt-3">
          <h5 className="text-white fw-medium">{job.title}</h5>
          <div className="fs-5 text-white fw-light ">{job.company}</div>
          <div className="fs-6 text-secondary fw-medium">{job.duration}</div>
          <p className="fs-6 text-secondary fw-medium">{job.location}</p>
          <ul>
            {job.descriptions.map((description, index) => {
              return (
                <li className="text-white" key={index}>
                  {description}
                </li>
              );
            })}
          </ul>
          {job.skills.length > 0 && (
            <div className="d-flex flex-wrap align-items-center">
              <div className="fs-6 text-white fw-bold me-3">Skills:</div>
              {job.skills.map((skill, index, job) => {
                return (
                  <>
                    <div key={index} className="text-secondary fw-semibold">
                      {skill.name}
                    </div>
                    {index < job.length - 1 && (
                      <div className="text-white mx-3">·</div>
                    )}
                  </>
                );
              })}
            </div>
          )}
          {job.credentials.length > 0 && (
            <LinkButton
              url={job.credentials}
              label="Show internship certificate"
              useGitHubIcon={false}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="fw-semibold text-white border-bottom pb-2 mb-4">
            Experience
          </h2>
          {listJobs}
        </div>
      </div>
    </div>
  );
}
