import { useEffect, useState } from "react";
import "../CSS/navbar.css";

export default function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShrink(true); // scrolling down
      } else {
        setShrink(false); // scrolling up or top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);
  return (
    <>
      <section className="wrap">
        <div className={`Navbar ${shrink ? "shrink" : ""}`}>
          <div className="log-box">
            <h1 className="logo">RepoFixer</h1>
          </div>
          <div className="things">
            <ul className="items">
              <li>Home</li>
              <li>Features</li>
              <li>Demo</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="change">
            <button className="toggle">
              <img src="public/moon.png" alt="" />
            </button>
            <button
  className="start"
  onClick={(e) => {
    e.preventDefault();
    window.location.assign(
      "http://127.0.0.1:8000/api/auth/github/login/"
    );
  }}
>
  Get Started →
</button>

          </div>
        </div>
      </section>
    </>
  );
}
