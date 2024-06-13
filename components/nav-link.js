"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ path, children }) {
    const currentPath = usePathname();
    return <Link href={path} className={currentPath.startsWith(path) ? 'active' : undefined}>{children}</Link>
}