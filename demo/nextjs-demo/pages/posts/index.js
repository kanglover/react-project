import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/blog?title=${props.title}`} legacyBehavior>
            <a>{props.title}</a>
        </Link>
    </li>
);

const RouterLink = props => (
    <li>
        <Link href="/dynamic/[id]" as={`/dynamic/${props.id}`} legacyBehavior>
            <a>{props.id}</a>
        </Link>
    </li>
);

const FirstPost = (props) => {
    return (
        <>
            <h1> Posts </h1>
            <h2>
                <Link href='/' legacyBehavior>
                    <a title="home">Back to home</a>
                </Link>
            </h2>

            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>

            <ul>
                <RouterLink id="first" />
                <RouterLink id="second" />
                <RouterLink id="third" />
            </ul>

            <ul>
                {
                    props?.shows?.map(show => (
                        <li key={show.id}>
                            <Link href="/dynamic/[id]" as={`/dynamic/${show.id}`} legacyBehavior>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            {/* CSS 样式规则只对当前组件有影响，对子组件中的元素没有影响 */}
            <style jsx>{`
                h1, a {
                    font-family: 'Arial';
                }
                ul {
                    padding: 0
                }
                li {
                    list-style: none;
                    margin: 5px, 0;
                }
                a {
                    color: red;
                }
                a:hover {
                    opacity: 0.6;
                }
            `}</style>

            {/* CSS 样式规则对子组件中的元素也有影响 */}
            <style jsx global> {`
                a {
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}

export default FirstPost;

export async function getStaticProps(context) {
    // context 对象，此对象包含一个 query 对象
    // context.query
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        props: {
            shows: data.map(entry => entry.show)
        }
    };
}