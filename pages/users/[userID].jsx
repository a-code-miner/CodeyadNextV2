import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

function userID({ user }) {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <Button className="mt-3" onClick={() => router.back()}>Back</Button>
            <br /><br />
            {user.name}
            <br />
            {user.username}
            <br />
            {user.id}
            <br />
            {user.phone}
            <br />
            {user.website}
            <br />
            {user.address.street}
            <br />
            {user.address.suite}
            <br />
            {user.address.zipcode}
            <br />
            {user.address.geo.lat}
            <br />
            {user.address.geo.lng}
            <br />
            {user.address.city}
        </div>
    );
};

export default userID;


export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    const paths = users.map(user => {
        return { params: { userID: `${user.id}` } }
    })
    return {
        paths,
        fallback: false
    };
};


export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.userID);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`);
    const user = await res.json();
    return {
        props: {
            user,
        },
    };
};

