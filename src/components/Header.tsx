const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <a href="/">
          <img
            src="/herfa.svg"
            alt=""
            width="46"
            height="46"
            title="herfa - home"
          />
        </a>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="/app">Explore →</a>
      </div>
    </header>
  );
};

export default Header;
