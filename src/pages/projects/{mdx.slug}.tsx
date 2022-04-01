import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Text } from "@/components/atoms/Text";

const ProjectPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.preview_image);

  return (
    <div className="flex flex-col items-center justify-center">
      <Text type="mainTitle">{data.mdx.frontmatter.title}</Text>
      <Text type="paragraph">{data.mdx.frontmatter.description}</Text>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <GatsbyImage image={image} alt="Project's preview" />
    </div>
  );
};

export const GetPostData = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        tags
        date
        preview_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, sizes: "400", width: 600)
          }
        }
      }
      body
    }
  }
`;

export default ProjectPage;
