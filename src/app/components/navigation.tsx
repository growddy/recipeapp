"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
    const pathname = usePathname();
return (
    <nav className="flex justify-between items-center p-4 bg-black">
  {/* Left-aligned links */}
  <div className="flex items-center gap-4">
    <a className="header title text-4xl">
      CookCraft
    </a>
    <Link
      href="/"
      className={pathname === "/" ? "font-bold text-blue-700" : "text-blue-100"}
    >
      Home
    </Link>
    <Link
      href="/create"
      className={pathname === "/create" ? "font-bold text-blue-700" : "text-blue-100"}
    >
      Create
    </Link>
    <Link
      href="/explore"
      className={pathname === "/explore" ? "font-bold text-blue-700" : "text-blue-100"}
    >
      Explore
    </Link>
  </div>
  
  <SignedOut>
  <SignInButton mode="modal" />
  </SignedOut>
  <SignedIn>
    <div className="flex items-center gap-4">
        <Link
        href="/myprofile"
        className={pathname === "/myprofile" ? "font-bold text-blue-700" : "text-blue-100"}
        >
        My Profile
        </Link>
        <UserButton />
    </div>
</SignedIn>
</nav>  
)
}