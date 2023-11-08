import { useRouter } from 'next/router';

export default function() {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.id}</h1>
            <p>This is the dynamic router page.</p>
        </>
    )
}