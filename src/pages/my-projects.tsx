import { ProjectCard } from "@/components/organisms/ProjectCard";

const MyProjectsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen min-h-full overflow-hidden md:pl-20 bg-midnight">
      <div className="flex items-center h-screen min-h-full gap-12 px-8 overflow-x-auto xl:gap-[6vw] md:px-24 xl:px-32">
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

export default MyProjectsPage;
