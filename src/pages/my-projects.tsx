import { Blobs } from "@/components/organisms/Blobs";
import { BlobsLight } from "@/components/organisms/BlobsLight";
import { ProjectCard } from "@/components/organisms/ProjectCard";

const MyProjectsPage = () => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen overflow-hidden md:pl-20 bg-midnight">
      <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh] z-0" />
      <Blobs className=" fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] z-0" />
      <div className="flex items-center h-full gap-12 px-8 overflow-x-auto overflow-y-hidden xl:gap-[6vw] md:px-12 lg:px-24 xl:px-32">
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
