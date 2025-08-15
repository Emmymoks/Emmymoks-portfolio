import PortfolioGrid from "../components/PortfolioGrid.jsx";

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl mb-8 text-center lg:text-left">
        Portfolio
      </h1>
      <PortfolioGrid />
    </div>
  );
}
