import { Button } from 'react-bootstrap';

export default function HomeSection() {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">
          Hi, I am Pavaruth Buranakitsin
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            I am currently studying for an MSc in Information Technology at the
            University of Glasgow, with a passion for web development. After I
            graduate, I aspire to work as a developer in either front-end,
            back-end, or full-stack development. I am committed to continuously
            improving my skills and staying up to date with industry trends.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              variant="outline-primary"
              className="btn-lg px-4 me-sm-3"
              href="./#about"
            >
              Get to know me
            </Button>
            <Button
              variant="outline-light"
              className=" btn-lg px-4"
              href="./#contact"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
