import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
const GET_POSTS = gql`
  query getPosts {
    posts {
      nodes {
        title
        excerpt
        databaseId
        uri
      }
    }
  }
`;
export default function Blog() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.posts.nodes.map((post) => (
        <li key={post.databaseId}>
          <Link href={`${post.uri}`}>
            <h1>{post.title}</h1>
          </Link>
          <Link href={`${post.uri}`}>
            <h1>{post.excerpt}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
}
