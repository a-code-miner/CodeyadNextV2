import Link from "next/link";
import { Container, ListGroup, Row } from "react-bootstrap";

export default function Home(props) {
	return (
		<>
			<Container>
				<Row className='mt-5'>
					<ListGroup>
						{props.users.map((user) => (
							<ListGroup.Item key={user.id}><Link className='text-decoration-none' href={`/users/${user.id}`}>{user.name}</Link></ListGroup.Item>
						))}
					</ListGroup>
				</Row>
			</Container>
		</>
	);
};

// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get users
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await res.json()
	// By returning { props: { users } }, the Blog component
	// will receive `users` as a prop at build time
	return {
		props: {
			users,
		},
	};
};
