import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar ({ user, setUser }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        });
    }

    return (
        <div className='nav'>
            <h1>FGC Combo Hub</h1>
            <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            </div>
            <span>Welcome, {user.username}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default NavBar