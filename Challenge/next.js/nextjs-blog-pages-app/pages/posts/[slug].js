import Header from '@/components/Header';
import Post from '@/components/Post';
import posts from '@/utils/posts';

export default function PostSlug({ post }) {
    return (
        <>
            <Header />
            <Post post={post} />
        </>
    );
}

export function getStaticPaths() {
    const paths = posts.map((post) => ({ params: { slug: String(post.id) } }));
    return { paths, fallback: false };
}

export function getStaticProps({ params }) {
    return {
        props: {
            post: posts.find((post) => post.id === Number(params.slug)),
        },
    };
}
