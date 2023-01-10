import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

function Signup ({ setUser, bio }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [main, setMain] = useState("")
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    

    function findMainId(value){
        switch(value){
            case "Makoto":
                setMain(1)
                break;
            case "Ken":
                setMain(2)
                break;
            default:
                setMain(null)

        }
    }

    function handleSubmit(e) {
        // post request for User
        // else return error message
        e.preventDefault()
        console.log(username)
        console.log(password)
        console.log(main)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                character_id: main,
                bio: "Default Bio"
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setUser(userData)
                    history.push("/")
                  })
                } else {
                  res.json().then((err) => setErrors(err.errors))
                }
            });
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <label htmlFor="main">Choose a Main</label>
                <select id="main" name="main" onChange={(e) => findMainId(e.target.value)}>
                    <option defaultValue="null">(Choose)</option>
                    <option value="Makoto">Makoto</option>
                    <option value="Ken">Ken</option>
                </select>
                {/* <input
                    type="text"
                    id="main"
                    value={main}
                    onChange={(e) => setMain(e.target.value)}
                /> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup