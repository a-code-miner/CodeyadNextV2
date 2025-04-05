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

export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/users')
    const users = await res.json()
    return {
        props: {
            users,
        }
    };
};
