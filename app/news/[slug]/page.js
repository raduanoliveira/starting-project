import Link from "next/link"

export default async function NewsDetailPage({params}){
    const {slug} = await params
    return (<>
    <header>
        <Link href='/'>Return to Home</Link>
        <Link href='/news'>Return to News</Link>
    </header>
    <main>
        <p>
            <h1>{slug}</h1>
        </p>
    </main>
    </>)
}