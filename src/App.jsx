import axios from "axios";
import "./App.css";
import Button from "./components/elements/Button";
import { useEffect, useState } from "react";
import CardFragments from "./components/fragments/CardFragment";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setDatas(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="card-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {datas.map((item, index) => (
          <CardFragments key={index}>
            <CardFragments.CardHeader images={item.image} />
            <CardFragments.CardContent name={item.name} status={item.status} species={item.species} gender={item.gender}>
              Click me
            </CardFragments.CardContent>
          </CardFragments>
        ))}
      </div>
    </>
  );
}

export default App;
