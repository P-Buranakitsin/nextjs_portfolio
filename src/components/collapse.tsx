import { useState } from 'react';

interface CollapseProps {
  content: JSX.Element[];
}

const Collapse: React.FC<CollapseProps> = ({ content }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const collapseButtonText = collapseOpen ? 'Show less' : 'Show all';

  return (
    <div>
      <div className="collapse" id="collapseExample">
        {content}
      </div>
      <div className="d-flex align-self-center justify-content-center">
        <button
          className="btn btn-outline-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded={collapseOpen ? 'true' : 'false'}
          aria-controls="collapseExample"
          onClick={toggleCollapse}
        >
          {collapseButtonText}
        </button>
      </div>
    </div>
  );
};

export default Collapse;
