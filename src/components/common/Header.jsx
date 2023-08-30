export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840" title="Call us">
                <i className="fa-solid fa-phone">Toll Free 1-877-666-1840</i>
              </a>
            </li>

            <li>
              <a href="mailto:office@threadaffair.com" title="Email us">
                office@threadaffair.com
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search">
          <ul>
            <li>
              <button type="button" title="Menue">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Search">
                <i className="fa-solid fa-search"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <ul>
            <li>
              <button type="button" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </li>

            <li>
              <button type="button" title="User">
                <i className="fa-solid fa-user"></i>
              </button>
            </li>
          </ul>
        </div>

        <a href="/" title="Thread Affair" className="header-logo">
          <picture>
            <img src="/images/logo.jpg" alt="Thread Affair - logo"></img>
          </picture>
        </a>
      </section>

      <section className="header-primary">
        <nav className="nav-primary">
          <ul>
            <li>
              <a href="/" title="Home">
                Home
              </a>
            </li>

            <li>
              <a href="/" title="Costume">
                Costume
              </a>
            </li>

            <li>
              <a href="/" title="Camasi">
                Camasi
              </a>
            </li>

            <li>
              <a href="/" title="Accesorii">
                Accesorii
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-secondary">
          <ul>
            <li>
              <a href="/" title="Glamour Suits">
                Glamour Suits
              </a>
            </li>

            <li>
              <a href="/" title="Wedding Suits">
                Wedding Suits
              </a>
            </li>

            <li>
              <a href="/" title="Office Suits">
                Office Suits
              </a>
            </li>

            <li>
              <a href="/" title="Customize your Suit">
                Customize your Suit
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}