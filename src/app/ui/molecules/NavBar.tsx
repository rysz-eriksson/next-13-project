import { ActiveLink } from "../atoms/ActiveLink"

export const NavBar = () => {
    return (
    <nav className="h-16 flex justify-center align-middle">
    <ul className="w-auto flex">
      <li className="mx-4">
        <ActiveLink href="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/products">Products</ActiveLink>
      </li>
    </ul>
  </nav>
  )
}