import PropTypes from "prop-types";
import "../styles/components.scss";
const ProjectsSection = () => {
  const projects = [
    {
      key: 1,
      name: "My-Potfolio",
      description: "react based site",
      img: "https://i.pinimg.com/736x/bc/f3/81/bcf381481c2454abda805aa824bc3092.jpg",
      link: "http://",
    },
    {
      key: 2,
      name: "JSSD.com",
      description: "community web site",
      img: "https://static.vecteezy.com/system/resources/thumbnails/001/874/132/small_2x/abstract-geometric-white-background-free-vector.jpg",
      link: "http://",
    },
    {
      key: 3,
      name: "Coin Clush",
      description: "API intregation site",
      img: "https://cdn.photoroom.com/v2/image-cache?path=gs://background-7ef44.appspot.com/backgrounds_v3/white/Photoroom_white_background_extremely_fine_texture_only_white_co_9eaf61eb-311d-49fc-b703-a2477a59d2ce.jpg",
      link: "http://",
    },
  ];

  return (
    <div>
      <center>
        <h1 className="project-title">Projects_</h1>
      </center>
      <section className="project-section">
        {projects.map((item) => {
          return (
            <a
              key={item.key}
              href={item.link}
              className="project-card-container"
            >
              <img className="project-img" src={item.img} alt="" />
              <div className="project-details">
                <div className="porject-name">
                  <h4 className="pr-name">{item.name}</h4>
                  <h5 className="pr-dis">{item.description}</h5>
                </div>
                <div className="arrow">
                  <svg
                    className="arrow"
                    width="15"
                    height="25"
                    viewBox="0 0 14 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="arrow-color"
                      d="M2 2L11 11.5L2 21"
                      stroke="black"
                      strokeWidth="3"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </section>
      <hr />
    </div>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      discription: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ProjectsSection;
