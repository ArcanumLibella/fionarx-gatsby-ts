import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { Blobs } from "@/components/organisms/Blobs";

const ProjectPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.preview_image);

  return (
    <div className="flex flex-col justify-between overflow-hidden xl:flex-row md:ml-20 xl:h-screen">
      {/* SLIDER */}
      {/* FIXME: GatsbyImage must have height 100% */}
      {/* <div className="overflow-hidden h-[60vh] xl:max-h-screen xl:h-screen"> */}
      <GatsbyImage
        image={image}
        alt="Project's preview"
        imgClassName="h-full"
      />
      {/* </div> */}
      <div className="relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[520px] xl:max-w-[35%]">
        <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh]" />
        <div>
          {/* TITLE */}
          <Text type="secondTitle" className="mb-4">
            {data.mdx.frontmatter.title}
          </Text>

          {/* TAGS */}
          <div className="flex flex-wrap items-start w-full gap-2 mb-10 md:gap-4">
            {data.mdx.frontmatter.tags
              .split(",")
              .map((tag) => tag.trim())
              .filter((tag) => tag.length > 0)
              .map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
          </div>

          {/* DESCRIPTION */}
          <Text type="paragraphSmall" className="mb-10">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Text>

          <div className="flex justify-between">
            <div className="flex">
              <Text
                type="custom"
                className="mr-6 text-base font-bold uppercase font-body text-purple-light lg:text-xbase"
              >
                ROLE
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                <Text type="paragraphLight">Designer</Text>
                <Text type="paragraphLight">Front-end developer</Text>
              </div>
            </div>
            <div className="flex">
              <Text
                type="custom"
                className="mr-6 font-bold uppercase mr-6text-base font-body text-purple-light lg:text-xbase"
              >
                YEAR
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                <Text type="paragraphLight">2020</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GetPostData = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
        tags
        date
        preview_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;

export default ProjectPage;
