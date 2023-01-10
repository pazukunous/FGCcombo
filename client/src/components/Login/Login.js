import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

function Login ({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const history = useHistory(); 

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
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
        <div>
            <div className='logincontent'>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label" htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login