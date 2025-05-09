import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <img
            src="/herfa.svg"
            alt=""
            width="46"
            height="46"
            title="herfa - home"
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Link href="/app">Explore →</Link>
      </div>
    </header>
  );
};

export default Header;
