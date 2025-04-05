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
						<ListGroup.Item action>
							<Link href={'/users'}><div>users</div></Link>
						</ListGroup.Item>
						<ListGroup.Item action>
							<Link href={'/admin'}><div>admin</div></Link>
						</ListGroup.Item>
						<ListGroup.Item action>
							<Link href={'/admin/panel'}><div>admin - panel</div></Link>
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</Container>
		</>
	);
};
