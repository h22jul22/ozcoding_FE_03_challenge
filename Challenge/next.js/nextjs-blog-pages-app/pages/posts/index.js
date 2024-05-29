import Header from '@/components/Header';
import posts from '@/utils/posts';
import classes from '/styles/Posts.module.css';
import Link from 'next/link';

export default function Posts() {
    return (
        <>
            <Header />
            <h1 className={classes.title}>블로그 포스트</h1>
            <main className={classes.post}>
                <ul>
                    {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                                <Link href={'/posts/' + post.id} className={classes.link}>
                                    🔎 자세히 보기
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}
