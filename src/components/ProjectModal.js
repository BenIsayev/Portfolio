import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className='project-modal-container'>
      <div className='screen' onClick={closeModal}></div>
      <div className='project-modal'>
        <button className='close-modal-btn' onClick={closeModal}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <h1>{project.name}</h1>
        <img src={project.imageLink} alt='Preview of the project' />
        <span>{project.description}</span>
        <span className='tech-used'>
          <span>Technologies used</span>:
          {project.technologies.map((tech, idx) => {
            return idx === project.technologies.length - 1 ? (
              <span> {tech}.</span>
            ) : (
              <span> {tech},</span>
            );
          })}
        </span>
        <div className='links'>
          <a target='_blank' rel='noreferrer' href={project.appLink}>
            Try it yourself
          </a>
          <a target='_blank' rel='noreferrer' href={project.clientLink}>
            Client code
          </a>
          {project.serverLink && (
            <a target='_blank' rel='noreferrer' href={project.serverLink}>
              Server code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
