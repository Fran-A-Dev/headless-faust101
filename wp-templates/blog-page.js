import { gql } from "@apollo/client";

// The Component is required
export default function Component(props) {
  const { title, content } = props?.data?.post;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <h2>Posts</h2>
      {props?.data?.posts?.nodes.map(
        (
          post,
          index // Map over the nodes array to render each post title
        ) => (
          <h3 key={index}>{post.title}</h3>
        )
      )}
    </>
  );
}

// Query is optional
Component.query = gql`
  query GetPageDataByURI($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      slug
    }
    posts {
      nodes {
        title
      }
    }
  }
`;
