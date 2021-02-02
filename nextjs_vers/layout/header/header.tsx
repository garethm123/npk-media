import { useState } from "react"
import Nav from "./nav/nav"
import Logo from './logo/logo'
import Link from "next/link"
import MenuButton from './menuButton/menuButton'
import style from './header.module.scss'


const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={style.header}>
      <Link href="/">
        <a>
          <Logo/>
        </a>
      </Link>

      <MenuButton open={open} setOpen={setOpen} />
      <Nav open={open} />

    </header>
  )
}
export default Header