export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" title="Thread Affair Monochrom Suit">
          <picture>
            <img
              src="/images/products/product-01a.jpg"
              alt="Thread Affair Monochrom Suit"
            />
          </picture>
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="/" title="Thread Affair Monochrom Suit">
            Thread Affair Monochrom Suit
          </a>
        </h1>

        <h2 className="product-tile-subtitle">
          <a href="/" title="London Fit Semi-Slim">
            London Fit Semi-Slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">{/* add pricing */}</section>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to cart</button>
      </footer>
    </article>
  );
}
