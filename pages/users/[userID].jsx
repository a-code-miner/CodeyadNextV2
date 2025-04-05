// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

function postID({ user }) {
    // const router = useRouter(); // next/navigation
    const router = useRouter(); // next/router
    console.log(router.query);

    return (
        <>
            <Button className="mt-3" onClick={() => router.back()}>Back</Button>
            <br /><br />
            {user.id}
            <br />
            {user.name}
        </>
    );
};

export default postID;


// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:4000/users`);
//     const posts = await res.json();
//     // const paths = posts.map(post => {
//     //     return { params: { postID: `${post.id}` } }
//     // });
//     return {
//         paths: [
//             { params: { userID: '1' } },
//             { params: { userID: '2' } },
//             { params: { userID: '3' } },
//         ],
//         fallback: 'blocking'
//     };
// };


export async function getServerSideProps(context) {
    const { params, req, res, query } = context;
    res.setHeader('Set-Cookie', [`page=${params.userID}`]);
    console.log(req.headers.cookie);
    console.log(query);
    console.log(params.userID);
    const response = await fetch(`http://localhost:4000/users/${params.userID}`);
    const user = await response.json();
    return {
        props: {
            user,
        },
    };
};

