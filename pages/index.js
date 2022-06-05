import Link from "next/link"
import { useRouter } from "next/router"

function Home() {
    const router = useRouter();
    const handleClick = () => {
        router.replace("/products")
    }
  return (
    <div>
        <h1>Homepage</h1>
        <Link href="/about">
            <a>About Us</a>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link href="/profile">
            <a>Profile</a>
        </Link>
        <button onClick={handleClick}>
            Buy product
        </button>
    </div>
  )
}

export default Home