import Link from "next/link";
import { Container, ListGroup, Row } from "react-bootstrap";

export default function Home(props) {
	return (
		<>
			<Container>
				<Row className='mt-5'>
					<ListGroup>
						{props.posts.map((post) => (
							<ListGroup.Item key={post.id}><Link className='text-decoration-none' href={`/posts/${post.id}`}>{post.title}</Link></ListGroup.Item>
						))}
					</ListGroup>
				</Row>
			</Container>
		</>
	);
};

// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()
	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};
};
