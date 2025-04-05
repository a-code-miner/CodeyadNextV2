// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

function postID({ post }) {
    // const router = useRouter(); // next/navigation
    const router = useRouter(); // next/router
    console.log(router.query);
    // return router.isFallback ? (
    //     <h1>Loading...</h1>
    // ) : (
    //     <div>
    //         <Button className="mt-3" onClick={() => router.back()}>Back</Button>
    //         <br /><br />
    //         {post.id}
    //         <br />
    //         {post.title}
    //         {/* {user.name}
    //         <br />
    //         {user.username}
    //         <br />
    //         {user.id}
    //         <br />
    //         {user.phone}
    //         <br />
    //         {user.website}
    //         <br />
    //         {user.address.street}
    //         <br />
    //         {user.address.suite}
    //         <br />
    //         {user.address.zipcode}
    //         <br />
    //         {user.address.geo.lat}
    //         <br />
    //         {user.address.geo.lng}
    //         <br />
    //         {user.address.city} */}
    //     </div>
    // );
    return (
        <>
            <Button className="mt-3" onClick={() => router.back()}>Back</Button>
            <br /><br />
            {post.id}
            <br />
            {post.title}
        </>
    );
};

export default postID;


export async function getStaticPaths() {
    const res = await fetch(`http://localhost:4000/posts`);
    const posts = await res.json();
    // const paths = posts.map(post => {
    //     return { params: { postID: `${post.id}` } }
    // });
    return {
        paths: [
            { params: { postID: '1' } },
            { params: { postID: '2' } },
            { params: { postID: '3' } },
        ],
        fallback: 'blocking'
    };
};


export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.postID);
    const res = await fetch(`http://localhost:4000/posts/${params.postID}`);
    const post = await res.json();
    return {
        props: {
            post,
        },
        revalidate: 20,
    };
};

