import React from 'react';

import { ProjectCard } from '@/components/organisms/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen py-4 md:py-8 md:pl-20 bg-midnight">
      <div className="flex items-center h-full gap-12 px-8 overflow-x-scroll xl:gap-[6vw] md:px-24 xl:px-32">
        {/* FIXME: 
          Add dynamic height 
          Remove scroll bar
        */}
        <ProjectCard height="5/6" />
        <ProjectCard height="[20vh]" />
        <ProjectCard height="5/6" />
        <ProjectCard height="5/6" />
        <ProjectCard height="5/6" />
        <ProjectCard height="5/6" />
        <ProjectCard height="5/6" />
      </div>
    </div>
  );
};

export default ProjectsPage;
