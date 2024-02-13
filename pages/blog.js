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
            <h2>{post.title}</h2>
          </Link>
          <div>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
