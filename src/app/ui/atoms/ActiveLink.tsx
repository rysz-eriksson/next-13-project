"use client";

import Link from "next/link"
import clsx from "clsx"
import {usePathname} from "next/navigation"

type ActiveLinkProps = {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link
            href={href}
            className={clsx(`text-blue-400 hover:text-blue-600` , isActive && `underline`)}
        >
            {children}
        </Link>
    )
}