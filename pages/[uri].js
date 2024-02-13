import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
const GET_POST = gql`
  query GetPost($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      date
      uri
    }
  }
`;
export default function Blog() {
  const router = useRouter();
  const { uri } = router.query;
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      uri,
    },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h1>{data.post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: data.post.content }} />
    </div>
  );
}
