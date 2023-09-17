import type { Route } from "next"
import { ActiveLink } from "../atoms/ActiveLink"

export const NavBar = () => {
    const links = [
        {
            name: "Home",
            href: "/",
            exact: true
        },
        {
            name: "All",
            href: "/products",
            exact: false
        }
    ]
    return (
    <nav className="h-16 flex justify-center align-middle">
    <ul className="w-auto flex">
      {links.map(link => (
        <li key={link.name} className="mx-4">
          <ActiveLink 
            className="text-blue-400 hover:text-blue-600"
            activeClassName="underline"
            href={(link.href) as Route}
            exact={link.exact}
          >
            {link.name}
          </ActiveLink>
        </li>
      ))}
    </ul>
  </nav>
  )
}

// `text-blue-400 hover:text-blue-600` underline