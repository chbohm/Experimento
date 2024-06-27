import Link from "next/link";

function NotFound(){

    return(
        <div>
            <h1>Page Not Found</h1>
            <h1>404</h1>
            <Link href="/home">Go Home</Link>
        </div>
    )

}

export default NotFound