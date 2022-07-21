import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import { Blobs } from "@/components/organisms/Blobs";
import { LinkButton } from "@/components/molecules/LinkButton";
import { COLORS } from "@/constants/Colors";
import { ArrowRightIcon } from "@/assets/icons";

const ProjectPage = ({ data }) => {
  const image1 = getImage(data.mdx.frontmatter.image1);
  // const image2 = getImage(data.mdx.frontmatter.image2);
  // const image3 = getImage(data.mdx.frontmatter.image3);

  return (
    <div className="flex flex-col justify-between overflow-hidden xl:flex-row md:ml-20 xl:h-screen">
      {/* SLIDER */}
      {/* FIXME: GatsbyImage must have height 100% */}
      {/* <div className="overflow-hidden h-[60vh] xl:max-h-screen xl:h-screen"> */}
      <GatsbyImage
        image={image1}
        alt="Project's preview"
        imgClassName="h-full"
      />
      {/* </div> */}
      <div className="relative flex flex-col-reverse w-full xl:h-screen p-5 pb-10 md:p-10 xl:min-w-[520px] xl:max-w-[35%]">
        <LinkButton
          label="Back"
          side="left"
          path="/projects"
          className="absolute top-10 "
        />
        <Blobs className="hidden fixed xl:flex justify-center items-center xl:-right-1/10 xl:-top-1/5 w-[56vw] h-[40vh] xl:w-[40vw] xl:h-[48vh] 2xl:w-[35vw] 2xl:h-[44vh] z-0" />
        <div className="pt-16 md:pt-12 xl:pt-0">
          {/* TITLE */}
          <Text type="secondTitle" className="mb-4">
            {data.mdx.frontmatter.title}
          </Text>

          <div className="flex justify-between mb-10">
            {/* TAGS */}
            <div className="flex flex-wrap items-start w-full gap-2 md:gap-4">
              {data.mdx.frontmatter.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag.length > 0)
                .map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
            </div>

            <a
              href={data.mdx.frontmatter.link}
              target="_blank"
              className="flex items-center group text-tomato"
              rel="noreferrer"
            >
              <Text type="custom" className="font-bold uppercase text-tomato">
                Discover
              </Text>
              <ArrowRightIcon
                fill={COLORS.tomato.DEFAULT}
                className="transition-all group-hover:translate-x-1 ml-4"
              />
            </a>
          </div>

          {/* DESCRIPTION */}
          <Text type="paragraphSmall" className="mb-10">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </Text>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <Text
                type="custom"
                className="mr-6 text-base font-bold uppercase font-body text-purple-light lg:text-xbase"
              >
                ROLE
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                {data.mdx.frontmatter.roles
                  .split(",")
                  .map((role) => role.trim())
                  .filter((role) => role.length > 0)
                  .map((role) => (
                    <Text
                      key={role}
                      type="paragraphLight"
                      className="capitalize"
                    >
                      {role}
                    </Text>
                  ))}
              </div>
            </div>
            <div className="flex flex-col">
              <Text
                type="custom"
                className="mr-6 font-bold uppercase mr-6text-base font-body text-purple-light lg:text-xbase"
              >
                YEAR
              </Text>
              <div /* className="mt-0.5 md:mt-1.5 2xl:mt-0.5" */>
                <Text type="paragraphLight">{data.mdx.frontmatter.date}</Text>
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
        tags
        roles
        # linkSite
        date
        link
        image1 {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        image3 {
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
