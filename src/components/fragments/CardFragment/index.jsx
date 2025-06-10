import React from "react";

const CardFragments = ({ images, name, gender, species, status }) => {
  return (
    <div className="card h-auto border-2 border-gray-300 rounded-lg shadow-lg">
      <CardHeader images={images} />
    </div>
  );
};

const CardHeader = ({ images }) => {
  return (
    <div className="header-card w-full">
      <img src={images} alt={images} className="header-image w-full h-full bg-cover" />
    </div>
  );
};

const cardContent = ({ name, gender, species, status = "Active" }) => {
  <div className="card-content p-5 flex flex-col gap-2">
    <h1 className="card-title font-bold">{name}</h1>
    <div className="status-wrapper flex items-center gap-2">
      <span className="status bg-green-500 text-white px-2 py-1 rounded">{status}</span>
      <span className="gender bg-blue-500 text-white px-2 py-1 rounded">{gender}</span>
      <span className="species bg-amber-500 text-white px-2 py-1 rounded">{species}</span>
    </div>
    <Button>View All Episode</Button>
  </div>;
};

export default CardFragments;
