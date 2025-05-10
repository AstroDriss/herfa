import Link from "next/link";

// TODO: make it responsive
const Header = () => {
  return (
    <header className="z-50">
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
              <Link href="/ideas">Ideas</Link>
            </li>
            <li>
              <Link href="/professionals">Profs</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Link href="/coming-soon">Register →</Link>
      </div>
    </header>
  );
};

export default Header;
