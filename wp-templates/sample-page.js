import { gql } from "@apollo/client";

// The Component is required
export default function Component(props) {
  const { title, content } = props?.data?.post;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

// Query is optional
Component.query = gql`
  query GetPageDataByURI($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
      slug
    }
  }
`;
