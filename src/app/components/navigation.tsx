"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname();
return (
    <nav>
        <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
        Home
        </Link>
        <Link href="/create" className={pathname === "/create" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Create
        </Link>
        <Link href="/ideas" className={pathname === "/ideas" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Ideas
        </Link>
        <Link href="/login" className={pathname === "/login" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Log In
        </Link>
        <Link href="/register" className={pathname === "/register" ? "font-bold mr-4" : "mr-4 text-blue-500"}>
            Register
        </Link>
    </nav>
)
}