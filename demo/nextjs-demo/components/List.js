import Link from 'next/link';

export default function List() {
    return (
        <>
            <li>
                go to <Link href="/posts" legacyBehavior><a>posts page!</a></Link>
            </li>
            <li>
                go to <Link href="/blog" legacyBehavior><a>blog page!</a></Link>
            </li>
        </>
    )
}