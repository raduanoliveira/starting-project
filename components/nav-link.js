'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({label, pathName}){
    const path = usePathname()
    return <Link href={pathName} className={path.startsWith(pathName) ? 'active' : undefined}>{label}</Link>
}