import "../styles/components.scss";
import PropTypes from "prop-types";

const CardComponent = ({ Project }) => {
  <div className="project-card-container">
    {Project.map((item) => {
    //   {console.log(item)}
      return (
        <div key={item.key} className="card">
          <center>
            <div className="card-img"></div>
          </center>
          <center>
            <h1 className="card-title">{item.title}</h1>
          </center>
          <center>
            <p className="card-dis">{item.description}</p>
          </center>
        </div>
      );
    })}
  </div>;
};

CardComponent.propTypes = {
  project: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CardComponent;
