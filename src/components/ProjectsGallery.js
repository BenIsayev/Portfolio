import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectsGallery = ({ projects, openProjectModal }) => {
  return (
    <div className='projects-gallery'>
      <Carousel
        onClickItem={openProjectModal}
        showThumbs={false}
        showIndicators={false}
      >
        {projects.map((project) => (
          <div key={project.name} className='project-preview'>
            <img src={project.imageLink} alt='Preview of the project' />
            <p>{project.name}</p>
            <p>{project.description}</p>
            <span>Expand</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsGallery;
