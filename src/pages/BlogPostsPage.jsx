import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export function BlogPostsPage() {
    const [posts, setPosts] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        if (state && state.posts) {
            setPosts(state.posts);
        }
    })

    return (
        <div>
            <h1>Welcome to Blog Posts Page</h1>
            {posts.map((post, index) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <section>
                       <p>{post.content}</p>
                    </section>
                </div>
            ))}
        </div>
    )
}