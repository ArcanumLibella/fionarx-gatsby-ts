import { ProjectCard } from "@/components/organisms/ProjectCard";

const MyProjectsPage = () => {
  return (
    <div className="flex items-center justify-center h-screen min-h-full overflow-hidden md:pl-20 bg-midnight">
      <div className="flex items-center h-screen min-h-full gap-12 px-8 overflow-x-auto xl:gap-[6vw] md:px-12 lg:px-24 xl:px-32">
        {/* FIXME: Remove scroll bar */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default MyProjectsPage;