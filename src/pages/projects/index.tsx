import { Blobs } from "@/components/organisms/Blobs";
import { BlobsLight } from "@/components/organisms/BlobsLight";
import { ProjectCard } from "@/components/organisms/ProjectCard";
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  return (
    <div className="flex items-center justify-center h-full min-h-screen overflow-hidden md:pl-20 bg-midnight">
      <BlobsLight className="hidden fixed xl:flex justify-center items-center -top-1/5 -right-1/10 xl:right-auto xl:top-auto xl:-left-1/10 xl:-bottom-1/5 w-[56vw] h-[36vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[64vh] z-0" />
      <Blobs className=" fixed flex justify-center items-center -right-1/10 -top-1/5 w-[56vw] h-[40vh] lg:w-[48vw] lg:h-[54vh] xl:w-[40vw] xl:h-[72vh] z-0" />
      <div className="flex items-center h-full gap-12 px-8 overflow-x-auto overflow-y-hidden xl:gap-[6vw] md:px-12 lg:px-24 xl:px-32">
        {/* FIXME: Remove scroll bar */}
        {data.allMdx.nodes.map((node) => (
          <ProjectCard
            key={node.id}
            name={node.frontmatter.title}
            tags={node.frontmatter.tags}
            slug={node.slug}
            imageData={node.frontmatter.preview_image}
          />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          title
          date
          tags
          preview_image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, sizes: "400", width: 400)
            }
          }
        }
        slug
        id
      }
    }
  }
`;

export default ProjectsPage;
