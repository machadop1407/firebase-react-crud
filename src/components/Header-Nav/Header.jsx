import { useContext } from "react";
import { UserContext } from "../users/User";

function Header() {

    const user = useContext(UserContext);
    let userName = user.loggedInUser.username

    return (
        <nav className='center'>
            <h1>POS-Till</h1>
            <h3>you are currently logged in as {userName}</h3>
        </nav>
    )
}

export default Header
