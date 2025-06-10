import "./App.css";
import Button from "./components/elements/Button";

function App() {
  return (
    <>
      <div className="card-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="card h-auto border-2 border-gray-300 rounded-lg shadow-lg">
          <div className="header-card w-full">
            <img src="/images/card-img-default.jpg" alt="card-img" className="header-image w-full h-full bg-cover" />
          </div>
          <div className="card-content p-5 flex flex-col gap-2">
            <h1 className="card-title font-bold">Name</h1>
            <div className="status-wrapper flex items-center gap-2">
              <span className="status bg-green-500 text-white px-2 py-1 rounded">Active</span>
              <span className="status bg-blue-500 text-white px-2 py-1 rounded">Gender</span>
              <span className="status bg-amber-500 text-white px-2 py-1 rounded">Species</span>
            </div>
            <Button>View All Episode</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
