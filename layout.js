import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
            Kids Comic - educational and fun AI
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <Link href="/" className={router.pathname=="/" ? "active" : ""}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={router.pathname=="/about" ? "active" : ""}>About</Link>
                </li>
                </ul>
            </div>
        </div>     
        <div>
            &nbsp;
        </div>
        {children}
    </>
  )
}