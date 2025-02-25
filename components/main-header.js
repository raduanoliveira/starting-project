import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
    return <>
        <header id='main-header'>
            <div id='logo'>
                <Link href='/'>
                    NextNews
                </Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink label='News' pathName='/news'/></li>
                    <li><NavLink label='Archive' pathName='/archive'/></li>
                </ul>
            </nav>
        </header>
    </>
}