export default function LoginForm(props) {
    window.addEventListener('resize', (e) => {
        console.log(window.innerWidth, window.innerHeight);
    })

    return (
        <form method="POST" action="" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log(formData.get('username'));
            const username = formData.get('username')
            const password = formData.get('password')
            fetch('/api/users/login', {
                method: 'POST',
                body: {
                    username,
                    password,
                },
            })
        }}
        >
            <label htmlFor="username">Username</label>
            <br/>
            <input id="username" type="text" name="username" placeholder="Username"
                onChange={(e) => {
                    //props.onChange();
                    console.log(`UserName: ${e.target.value}`);
                }}
            />
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input id="password" type="password" name="password" placeholder="Password"
                onChange={(e) => {
                    console.log(`Password: ${e.target.value}`);
                }}
            />
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}