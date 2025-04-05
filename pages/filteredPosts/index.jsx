import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

function FilteredPosts({ posts }) {
    const router = useRouter(); // next/router
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handleFilterPosts = async (userId) => {
        router.push(`/filteredPosts?userId=${userId}`, null, {
            shallow: true
        });
        const res = await fetch(`http://localhost:4000/posts?userId=${userId}`);
        const posts = await res.json();
        setFilteredPosts(posts);
    }

    console.log(router.query);
    return (
        <Container>
            <Button onClick={() => router.back()}>Back</Button>
            <br />
            <Button onClick={() => handleFilterPosts(1)}>Filter</Button>
            <Row className="mt-3 w-100">
                <ListGroup>
                    {filteredPosts.map((post) => (
                        <ListGroupItem key={post.id}>
                            <Link className="text-decoration-none" href={`/posts/${post.id}`}>{post.title}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Row>
        </Container>
    );
};

export default FilteredPosts;


export async function getServerSideProps(context) {
    const { query } = context;
    const { userId } = query;
    const q = userId ? `?userId=${userId}` : '';
    const res = await fetch(`http://localhost:4000/posts${q}`);
    const posts = await res.json();
    return {
        props: {
            posts,
        },
    };
};

