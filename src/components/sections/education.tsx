import Image from 'next/image';
import LinkButton from '../linkButton';
import Collapse from '../collapse';

const degrees: {
  name: string;
  img: string;
  description: string;
  duration: string;
}[] = [
  {
    name: 'University of Glasgow',
    img: '/images/UofG.jpeg',
    description: 'Master of Science - MS, Information Technology',
    duration: 'Sep 2022 - Sep 2023',
  },
  {
    name: 'Chulalongkorn University',
    img: '/images/cu.jpeg',
    description:
      'Bachelor of Engineering - BE, Aerospace, Aeronautical and Astronautical Engineering',
    duration: '2016 - 2020',
  },
  {
    name: 'Assumption College Thonburi',
    img: '/images/act.jpg',
    description: 'High School Diploma',
    duration: '2004 - 2015',
  },
];

const certifications: {
  name: string;
  img: string;
  issuingOrg: string;
  issueDate: string;
  url: string;
}[] = [
  {
    name: 'Certificate of Completion - Node.js, Express, MongoDB & More: The Complete Bootcamp 2022',
    img: '/images/udemy.jpeg',
    issueDate: 'Jul 2022',
    issuingOrg: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-bd6af9d8-772f-4097-84d4-17ebec218e65/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email',
  },
  {
    name: 'Certificate of Completion, ACHIEVE CHALLENGE: PYTHON FOR DATA SCIENCE 35 DAYS',
    img: '/images/BIH.jpeg',
    issueDate: 'Sep 2020',
    issuingOrg: 'Bangkok Innovation House Co., Ltd.',
    url: 'https://drive.google.com/file/d/1hWGhMRQ80QCknLcj5GGfy2HJoqmvSoq7/view?usp=sharing',
  },
  {
    name: 'Certificate of Completion, THINKING LIKE A PROGRAMMER PATHWAY (GOLD AWARD)',
    img: '/images/cu.jpeg',
    issueDate: 'Aug 2020',
    issuingOrg: 'Chulalongkorn University',
    url: 'https://cert.chulamoocachieve.com/7IZ5P.pdf',
  },
  {
    name: 'Certificate of Completion, Business Intelligence Analyst Course 2020',
    img: '/images/udemy.jpeg',
    issueDate: 'June 2020',
    issuingOrg: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-44b80f72-dab4-46ef-aa6e-7c89f2ea4ee3/',
  },
];

export default function EducationSection() {
  const listDegrees = degrees.map((degree, index) => {
    return (
      <div className="row mb-4 mt-4" key={index}>
        <div className="col-sm-2">
          <Image
            alt=""
            src={degree.img}
            width={100}
            height={100}
            className="img-fluid rounded "
          />
        </div>
        <div className="col-sm-10 mt-sm-0 mt-3">
          <h5 className="text-white fw-medium ">{degree.name}</h5>
          <p className="fs-5 text-white fw-light ">{degree.description}</p>
          <p className="fs-6 text-secondary fw-medium">{degree.duration}</p>
        </div>
      </div>
    );
  });

  const listCertifications = (start: number, end: number) => {
    return certifications.slice(start, end).map((certification, index) => {
      return (
        <div className="row mb-4 mt-4" key={index}>
          <div className="col-sm-2">
            <Image
              alt=""
              src={certification.img}
              width={100}
              height={100}
              className="img-fluid rounded "
            />
          </div>
          <div className="col-sm-10 mt-sm-0 mt-3">
            <h5 className="text-white fw-medium ">{certification.name}</h5>
            <div className="fs-5 text-white fw-light ">
              {certification.issuingOrg}
            </div>
            <p className="fs-6 text-secondary fw-medium">
              Issued {certification.issueDate}
            </p>
            <div className="d-flex flex-column">
              <div className="">
                <LinkButton url={certification.url} label="Show credential" useGitHubIcon={false} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="fw-semibold text-white border-bottom pb-2 mb-4">
            Education
          </h2>
        </div>
        <div className="col-md-6">
          <h4 className="text-white fw-semibold ">Degrees</h4>
          <div className="col-12">{listDegrees}</div>
        </div>
        <div className="col-md-6 mt-md-0 mt-3">
          <h4 className="text-white fw-semibold">Certifications</h4>
          <div className="col-12">
            {listCertifications(0, 3)}
            <Collapse content={listCertifications(3, 999)} />
          </div>
        </div>
      </div>
    </div>
  );
}
