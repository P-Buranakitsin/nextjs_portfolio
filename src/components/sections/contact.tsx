import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import styles from '@/styles/components/sections/Contact.module.scss';

export default function ContactSection() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="fw-semibold text-white text-center pb-2 mb-2 ">
            Contact Me
          </h2>
        </div>
        <div className="col-sm-8">
          <p className="fs-5 mb-5 text-secondary text-center">
            If you find my profile intriguing and would like to get in touch,
            please do not hesitate to reach out to me through one of the social
            media platforms mentioned below or via email.
          </p>
          <div className="row justify-content-center">
            <div className="col-sm-2 col-4 d-flex justify-content-center">
              <Linkedin
                size={40}
                color={'#0d6efd'}
                className={`${styles.contactIcon}`}
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/pavaruth-buranakitsin-a717a8188/',
                    '_blank'
                  );
                }}
              />
            </div>
            <div className="col-sm-2 col-4 d-flex justify-content-center">
              <Github
                size={40}
                color={'#0d6efd'}
                className={`${styles.contactIcon}`}
                onClick={() => {
                  window.open('https://github.com/P-Buranakitsin', '_blank');
                }}
              />
            </div>
            <div className="col-sm-2 col-4 d-flex justify-content-center">
              <Envelope
                size={40}
                color={'#0d6efd'}
                className={`${styles.contactIcon}`}
                onClick={() => {
                  window.open(
                    'mailto:pavaruth.buranakitsin@gmail.com?subject=Subject&body=Body%20goes%20here'
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
