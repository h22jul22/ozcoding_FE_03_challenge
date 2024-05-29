import Header from '@/components/Header';
import Post from '@/components/Post';
import posts from '@/utils/posts';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PostSlug() {
    const router = useRouter();
    const [post, setPost] = useState({});

    const getPost = () => {
        const [post] = posts.filter((post) => post.id === Number(router.query.slug));
        setPost(post);
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <>
            <Header />
            <Post post={post} />
        </>
    );
}
