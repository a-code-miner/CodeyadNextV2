
export default function Home(props) {
	console.log(props);
	return (
		<>
			<ul>
				{props.posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
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
