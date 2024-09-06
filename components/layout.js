import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
        <div>
            <nav className="navigation">
                <ul>
                <li>
                    <Link href="/" className={router.pathname=="/" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={router.pathname=="/about" ? "active" : ""}>About</Link>
                </li>
                </ul>
            </nav>
        </div>
        {children}
    </>
  )
}