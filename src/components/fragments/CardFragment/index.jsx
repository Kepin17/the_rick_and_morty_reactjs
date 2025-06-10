import Button from "../../elements/Button";

const CardFragments = ({ key, children }) => {
  return (
    <div className="card  border-2 border-gray-300 rounded-lg shadow-lg" key={key}>
      {children}
    </div>
  );
};

const CardHeader = ({ images }) => {
  return (
    <div className="header-card w-full h-50">
      <img src={images} alt={images} className="header-image w-full h-full bg-cover" />
    </div>
  );
};

const CardContent = ({ name, gender, species, status = "Active", children }) => {
  return (
    <div className="card-content p-5 flex flex-col gap-2">
      <h1 className="card-title font-bold">{name}</h1>
      <div className="status-wrapper flex items-center gap-2">
        <span className={`status ${status === "Dead" ? "bg-red-500" : status === "Alive" ? "bg-green-500" : "bg-gray-400"} text-white px-2 py-1 rounded`}>{status}</span>
        <span className="gender bg-blue-500 text-white px-2 py-1 rounded">{gender}</span>
        <span className="species bg-amber-500 text-white px-2 py-1 rounded">{species}</span>
      </div>
      <Button>{children}</Button>
    </div>
  );
};

CardFragments.CardHeader = CardHeader;
CardFragments.CardContent = CardContent;

export default CardFragments;
