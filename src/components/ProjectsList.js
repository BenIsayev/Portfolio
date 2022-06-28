const ProjectsList = ({ projects, openProjectModal }) => {
  const setOpactiy = (id) => {
    document.getElementById(id).classList.add('appear');
  };
  return (
    <div className='projects-list'>
      {projects.map((project, idx) => (
        <div
          className='project-preview'
          id={project.name}
          key={project.name}
          style={{ animationDelay: `0.${idx}s` }}
          onAnimationEnd={() => {
            setOpactiy(project.name);
          }}
          onClick={() => openProjectModal(idx)}
        >
          <div className='project-img'>
            <img src={project.imageLink} alt='Preview of the project' />
          </div>
          <div className='project-details'>
            <h1>{project.name}</h1>
            <h4>{project.description}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
