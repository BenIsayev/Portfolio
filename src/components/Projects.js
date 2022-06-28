import { useState } from 'react';
import { faList, faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectsList from '../components/ProjectsList';
import ProjectsGallery from '../components/ProjectsGallery';
import ContactBtn from './ContactBtn';

import tableroImg from '../assets/img/tablero-snap.png';
import memeImg from '../assets/img/meme-generator-snap.png';
import mineSweeperImg from '../assets/img/minesweeper-snap.png';
import appsusImg from '../assets/img/Appsus-snap.png';
import ProjectModal from './ProjectModal';

const ProjectsPage = ({ scrollToContact }) => {
  const pickedStyle = {
    background: '#fff',
    color: '#1c1c1c',
  };

  const notPickedStyle = {
    background: 'none',
    color: '#fff',
  };
  const [layout, setLayout] = useState('list');
  const [listBtnStyle, setListBtnStyle] = useState(pickedStyle);
  const [galleryBtnStyle, setgalleryBtnStyle] = useState(notPickedStyle);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Tablero',
      description: 'A project managment app inspired by Trello',
      appLink: 'https://tablero-project.herokuapp.com/',
      clientLink: 'https://github.com/BenIsayev/Tablero-frontend',
      serverLink: 'https://github.com/BenIsayev/Tablero-backend',
      imageLink: tableroImg,
      technologies: ['VueJS', 'MonogoDB', 'ExpressJs', 'REST API', 'SCSS'],
    },
    {
      name: 'Meme generator',
      description: 'Generate funny memes to share with your friends!',
      appLink: 'https://benisayev.github.io/MemeGenerator/',
      clientLink: 'https://github.com/BenIsayev/MemeGenerator/',
      serverLink: '',
      imageLink: memeImg,
      technologies: ['Vanilla JS', 'Canvas'],
    },
    {
      name: 'Mine Sweeper',
      description: 'Try to avoid all the mines!',
      appLink: 'https://benisayev.github.io/MineSweeper/',
      clientLink: 'https://github.com/BenIsayev/MineSweeper',
      serverLink: '',
      imageLink: mineSweeperImg,
      technologies: ['Vanilla JS'],
    },
    {
      name: 'Appsus',
      description: 'Keep notes and mail some mails',
      appLink: 'https://tomermalkiman.github.io/Appsus/#/',
      clientLink: 'https://github.com/TomerMalkiman/Appsus',
      serverLink: '',
      imageLink: appsusImg,
      technologies: ['Vanilla JS'],
    },
  ];

  const setListLayout = () => {
    setLayout('list');
    setgalleryBtnStyle(notPickedStyle);
    setListBtnStyle(pickedStyle);
  };

  const setGalleryLayout = () => {
    setLayout('gallery');
    setListBtnStyle(notPickedStyle);
    setgalleryBtnStyle(pickedStyle);
  };

  const openProjectModal = (idx, a) => {
    setSelectedProject(projects[idx]);
    setIsProjectModalOpen(true);
  };

  return (
    <section className='projects-view' id='projects'>
      <div className='title'>
        <span>See</span>
        <h1>My Projects</h1>
        <div className='line'></div>
      </div>
      <div className='layout-select'>
        <ul>
          <li onClick={setListLayout} style={listBtnStyle}>
            <FontAwesomeIcon icon={faList} />
          </li>
          <li onClick={setGalleryLayout} style={galleryBtnStyle}>
            <FontAwesomeIcon icon={faImages} style={galleryBtnStyle} />
          </li>
        </ul>
      </div>
      {layout === 'list' && (
        <ProjectsList projects={projects} openProjectModal={openProjectModal} />
      )}
      {layout === 'gallery' && (
        <ProjectsGallery
          projects={projects}
          openProjectModal={openProjectModal}
        />
      )}
      <ContactBtn scrollToContact={scrollToContact} />
      {isProjectModalOpen && (
        <ProjectModal
          project={selectedProject}
          closeModal={() => setIsProjectModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
