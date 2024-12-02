import {UserProfile} from "./components/UserProfile.jsx";
import {UserDetails} from "./components/UserDetails.jsx";
import LoginForm from "./components/LoginForm.jsx";
import {RegisterForm} from "./components/RegisterForm.jsx";
import {useState} from "react";

export default function App() {
    const isAuthenticated = true;

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
                <RegisterForm />
            </div>
    );
}