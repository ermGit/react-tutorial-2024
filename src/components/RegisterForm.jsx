import {useState} from "react";
import {isDisabled} from "jsdom/lib/jsdom/living/helpers/form-controls.js";

export function RegisterForm(props) {
    const [formFields, setFormFields] = useState({
        username: '',
        password: '',
        displayName: '',
    })

    const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label htmlFor="username">Username</label>
                <br/>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formFields.username}
                    onChange={(e) => {
                        setFormFields((currentState) => (
                            {
                                ...currentState,
                                username: e.target.value
                            }
                        ));
                        //setUsername(e.target.value)
                    }}
                />
                <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formFields.password}
                    onChange={(e) => {
                        setFormFields((currentState) => (
                            {
                                ...currentState,
                                password: e.target.value
                            }
                        ));
                    }}
                />
                <br/>
                <label htmlFor="password">Display Name</label>
                <br/>
                <input
                    id="displayName"
                    type="text"
                    name="displayName"
                    value={formFields.displayName}
                    onChange={(e) => {
                        setFormFields((currentState) => (
                            {
                                ...currentState,
                                displayName: e.target.value
                            }
                        ));
                    }}
                />
                <br/>
                <input disabled={isDisabled} type="submit" value="Register" />
            </form>
            <br/>
            <div>
                <span>Username: {formFields.username}</span>
            </div>
        </div>
    )
}