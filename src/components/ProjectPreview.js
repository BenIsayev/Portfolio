const ProjectPreview = ({ project }) => {
  return (
    <div className='project-preview'>
      <div className='project-img'>
        <img src={project['image-link']} alt='' />
      </div>
      <div className='project-details'>
        <h2>{project.name}</h2>
        <span>{project.description}</span>
        <div className='links'>
          <a target='_blank' href={project['app-link']}>
            Try it yourself!
          </a>
          <a target='_blank' href={project['client-link']}>
            Client code
          </a>
          {project['server-link'] && (
            <a target='_blank' href={project['server-link']}>
              Server code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
