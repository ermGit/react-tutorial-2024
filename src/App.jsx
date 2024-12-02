import {UserProfile} from "./components/UserProfile.jsx";
import {UserDetails} from "./components/UserDetails.jsx";

export default function App() {
    const mockUsers = [
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
            username: 'John2',
            email: 'john2@example.com',
        },
        {
            id: 4,
            username: 'John2',
            email: 'john2@example.com',
        }
    ];

    return (
        <div>
            {mockUsers.map(
                (user) => {
                    return (
                        <UserDetails
                            key={user.id}
                            setUsers={() => {return true;}}
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
    )
}