function PortfolioItem({ image, title, category }) {
  return (
    <div className="portfolio-item">
        <img src={image} alt={title} className="portfolio-image" />
        <h3>{title}</h3>
        <p>{category}</p>
    </div>
  )
}

export default PortfolioItem