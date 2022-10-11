import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='contentSpreadX navbar'>
            <Link to="/">Home</Link>
            <Link to="/items">items</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Nav
