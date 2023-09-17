"use client";

import Link from "next/link"
import clsx from "clsx"
import {usePathname} from "next/navigation"

type ActiveLinkProps = {
    className: string;
    activeClassName: string;
    href: string;
    children: React.ReactNode;
    exact?: boolean;
}

export const ActiveLink = ({ className, activeClassName,  href, children, exact = false }: ActiveLinkProps) => {
    const pathname = usePathname()

    const checkIfActive = () => {
        if (exact) {
            return pathname === href
        }
        return pathname.startsWith(href)
    }

    return (
        <Link
            href={href}
            className={clsx(`${className}`, checkIfActive() && `${activeClassName}`)}
        >
            {children}
        </Link>
    )
}