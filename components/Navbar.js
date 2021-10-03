import Link from 'next/link'
import { useState } from 'react'
import navbar from '../styles/Navbar.module.scss'

export default function Navbar({ }) {
  const [ checked, setChecked ] = useState(false);

  function toggle() { setChecked(!checked) }

    return <>
    <nav className={navbar.mainnav}>
      <Link className="main-link" href="/"><a>Home</a></Link>
      <Link className="main-link" href="/about"><a>About Us</a></Link>
      <Link className="main-link" href="/howitworks"><a>How it Works</a></Link>
      <Link className="main-link" href="/board"><a>Meet the Board</a></Link>
      <Link className="main-link" href="/join"><a>Join the Team</a></Link>
      <Link className="main-link" href="/"><a>Contact</a></Link>
      <div className={navbar.socials}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </nav>

    <nav className={navbar.mobilenav} role="navigation">
      <div id={navbar.menuToggle}>
        <input type="checkbox" checked={checked} onChange={toggle} />
          <span></span>
          <span></span>
          <span></span>
          <ul id={navbar.menu}>
            <Link className="main-link" passHref href="/"><li><a onClick={toggle}>Home</a></li></Link>
            <Link className="main-link" passHref href="/about"><li><a onClick={toggle}>About Us</a></li></Link>
            <Link className="main-link" passHref href="/howitworks"><li><a onClick={toggle}>How it Works</a></li></Link>
            <Link className="main-link" passHref href="/board"><li><a onClick={toggle}>Meet the Board</a></li></Link>
            <Link className="main-link" passHref href="/join"><li><a onClick={toggle}>Join the Team</a></li></Link>
            <Link className="main-link" passHref href="/"><li><a onClick={toggle}>Contact</a></li></Link>
            <li className={navbar.socials}>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
          </ul>
      </div>
    </nav>
    </>;
}