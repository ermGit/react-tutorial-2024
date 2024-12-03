import {UserProfile} from "./components/UserProfile.jsx";
import {UserDetails} from "./components/UserDetails.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {RegisterForm} from "./components/RegisterForm.jsx";
import {useState, useEffect} from "react";

export default function App() {
    const isAuthenticated = true;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(5);

    const [secondCounter, setSecondCounter] = useState(0);
    const [sync, setSync] = useState(false);

    const [blogPostData, setBlogPostData] = useState(
        {
            title: "",
            body: "",
        }
    );

    // Called when the component is mounted/rendered
    // Can be called many times especially when state changes and causes the
    // component to re-render
    // With [] empty dependency array, the useEffect is only called once.
    // With something in the [counter], then useEffect is called
    // whenever that state is changed.
    useEffect(
        () => {
            console.log("Rendering...");
            document.title = "React Tutorial";
        },
        [
            sync
        ]
    );

    useEffect(() => {
        console.log("Fetching...");
        fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "GET",
            })
            .then(
                (response) => {
                    console.log(response);
                    return response.json();
                }
            )
            .then(
                (json) => {
                    console.log(json)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }, []);

    useEffect(
        () => {
            const controller = new AbortController();
            async function fetchUsers() {
                // The await keyword blocks the script until the call returns
                try {
                    const response = await fetch(
                        "https://jsonplaceholder.typicode.com/users",
                        {signal: controller.signal}
                    );
                    const json = await response.json();
                    console.log("Fetching2...");
                    console.log(json);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchUsers();

            // Called when componenet unmounts
            // Clean up function
            return () => {
                controller.abort();
            };
        }
    );

    useEffect(
        () => {
            const controller = new AbortController();
        }
    );

            const [mockUsers, setUsers] = useState([
        {
            id: 1,
            username: 'John1',
            email: 'john1@example.com',
        },
        {
            id: 2,
            username: 'John2',
            email: 'john2@example.com',
        },
        {
            id: 3,
            username: 'John3',
            email: 'john3@example.com',
        },
        {
            id: 4,
            username: 'John4',
            email: 'john4@example.com',
        }
    ]);

    return isAuthenticated ? (
        <div>
            <form
                onSubmit={
                (e) => {
                    e.preventDefault();
                    if (blogPostData.title && blogPostData.body) {
                        console.log("blogPostData fetching post", blogPostData);
                        fetch(
                            "https://jsonplaceholder.typicode.com/posts",
                            {
                                method: "POST",
                                body: JSON.stringify({
                                    userId: 1,
                                    title: blogPostData.title,
                                    body: blogPostData.body,
                                }),
                                headers: {
                                    "Content-Type": "application/json; charset=UTF-8",
                                },
                            }
                        )
                        .then(response =>
                                response.json()
                        )
                        .then((json) => {
                               console.log("Success!");
                                console.log(json);
                            }
                        )
                        .catch((err) => {
                                console.log(err);
                            }
                        );
                    }
                }}
            >
                <label htmlFor="title">Title</label>
                <br/>
                <input
                    type="text"
                    id="title"
                    value={blogPostData.title}
                    onChange={(e) => {
                        setBlogPostData((currentBlogPostData) =>
                            (
                                {...currentBlogPostData, title: e.target.value}
                            )
                        );
                    }}
                />
                <br/>
                <label htmlFor="body">Body</label>
                <br/>
                <input
                    type="text"
                    id="body"
                    value={blogPostData.body}
                    onChange={(e) => {
                        setBlogPostData((currentBlogPostData) =>
                            (
                                {...currentBlogPostData, body: e.target.value}
                            )
                        );
                    }}
                />
                <br/>
                <button type="submit">
                    Create Post
                </button>
            </form>
            <br/>

            <div>
                <div>You clicked the button {secondCounter} times</div>
                <button
                    onClick={() => {
                        setSecondCounter((secondCounter) => secondCounter + 1)
                    }}
                >
                    Click Me
                </button>
                <button
                    onClick={() => {
                        setSync((current) => !current);
                    }}
                >
                    Sync
                </button>

            </div>
            <br/>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(username);
                    console.log(email);
                    const newUser = {
                        id: counter,
                        username: username,
                        email: email,
                    };
                    setCounter(
                        (currentCounter) => currentCounter + 1
                    );
                    setUsers(
                        (currentUsersState) => [...currentUsersState, newUser]
                    );
                }}
            >
                <div>
                    <label htmlFor="username">Username</label>
                    <br/>
                    <input
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
            <br/>
            {mockUsers.map(
                (user) => {
                    return (
                        <UserDetails
                            key={user.id}
                            setUsers={setUsers}
                            user={user}
                        />
                    );
                }
            )}

            <h1>Root Component</h1>
            <UserProfile
                username="Bob"
                age={25}
                favoriteFoods={[
                    {
                        name: "Sushi",
                        id: "sushi",
                    },
                    {
                        name: "Pizza",
                        id: "pizza",
                    }
                ]}
            />
        </div>
    ) : (
        <div>
            <h1>
                Please Log in
            </h1>
            <RegisterForm/>
        </div>
    );
}