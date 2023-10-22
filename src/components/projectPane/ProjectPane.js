import React from 'react';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import './ProjectPane.css'; 

const projectData = {
  title: 'My Awesome Project',
  description: 'A description of my awesome coding project.',
  technologies: ['React', 'Node.js', 'MongoDB'],
  githubLink: 'https://github.com/your-username/my-awesome-project',
  liveDemoLink: 'https://www.example.com/my-awesome-project-demo',
};

const ProjectPane = () => {
  return (
    <div className="project-pane"> {/* Updated class name here */}
      <Typography variant="h5">{projectData.title}</Typography>
      <Typography variant="body1">{projectData.description}</Typography>

      <Typography variant="h6">Technologies Used:</Typography>
      <List>
        {projectData.technologies.map((tech, index) => (
          <ListItem key={index}>
            <ListItemText primary={tech} />
          </ListItem>
        ))}
      </List>

      <div className="project-links">
        <Link href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </Link>
        <Link href={projectData.liveDemoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default ProjectPane;
