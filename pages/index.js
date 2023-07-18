import Link from "next/link";

function Homepage() {
    return (
        <div>
            <h1>The Home page</h1>
            <ul>
                <li>
                    <Link href="/portfolio">portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">clients</Link>
                </li>
                <li>
                    <Link href="/blog/something">blog</Link>
                </li>
            </ul>
        </div>
    );
}

export default Homepage;
