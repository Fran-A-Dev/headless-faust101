import { gql } from "@apollo/client";

// The Component is required
export default function Component(props) {
  const { title, content } = props?.data?.page;

  return (
    <>
      <h1>{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </>
  );
}

Component.query = gql`
  query GetPageDataByURI($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
      slug
    }
  }
`;
