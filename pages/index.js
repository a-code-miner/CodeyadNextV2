import Link from "next/link";
import { Container, ListGroup, Row } from "react-bootstrap";

export default function Home(props) {
	return (
		<>
			<Container>
				<Row className='mt-5'>
					<ListGroup>
						<ListGroup.Item action>
							<Link href={'/posts'}><div>posts</div></Link>
						</ListGroup.Item>
					</ListGroup>

				</Row>
			</Container>
		</>
	);
};
