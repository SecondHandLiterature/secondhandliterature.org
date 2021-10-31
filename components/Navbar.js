import Link from 'next/link'
import navbar from '../styles/Navbar.module.scss'
import { useState, useEffect } from "react"

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      function handleScroll() {
          let currScrollPos = window.pageYOffset;
          if (scrollPosition > currScrollPos) {
              document.getElementById("main-nav").style.top = "0px";
              // document.getElementsByClassName("nav-container")[0].style.top = "0px";
          } else {
              document.getElementById("main-nav").style.top = "-84.63px";
              // document.getElementsByClassName("nav-container")[0].style.top = "-84.63px";
          }
          setScrollPosition(currScrollPos);
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  });
}

export default function Navbar({ }) {
  useScroll();

  const [ checked, setChecked ] = useState(false);

  function toggle() { setChecked(!checked) }

    return <>
    <nav id="main-nav" className={navbar.mainnav}>
      <Link className="main-link" href="/"><a>Home</a></Link>
      <Link className="main-link" href="/about"><a>About Us</a></Link>
      <Link className="main-link" href="/howitworks"><a>How it Works</a></Link>
      <Link className="main-link" href="/board"><a>Meet the Board</a></Link>
      <Link className="main-link" href="/contact"><a>Contact</a></Link>
      <div className={navbar.socials}>
        <a href="https://www.instagram.com/secondhandliterature/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
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
            <Link className="main-link" passHref href="/contact"><li><a onClick={toggle}>Contact</a></li></Link>
            <li className={navbar.socials}>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </li>
          </ul>
      </div>
    </nav>
    </>;
}