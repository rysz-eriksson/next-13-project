"use client";

import Link from "next/link"
import clsx from "clsx"
import {usePathname} from "next/navigation"
import type { Route } from "next";

type ActiveLinkProps = {
    className: string;
    activeClassName: string;
    href: Route<string>;
    children: React.ReactNode;
    exact?: boolean;
    forceActive?: boolean;
}

export const ActiveLink = ({ className, activeClassName,  href, children, exact = false, forceActive }: ActiveLinkProps) => {
    const pathname = usePathname()

    const checkIfActive = () => {
        if (forceActive) {
            return true;
        }
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