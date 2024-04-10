import Link from 'next/link';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">Accueil</Link>
            </li>
            <li>
                <Link href="/movie">Movie</Link>
            </li>
            <li>
                <Link href="/movie/add">Add</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;