import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Gato {
  nome: string;
  nomeMae: string;
  nomePai: string;
}
function App() {
  const [gatos, setGatos] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3000/gatos`);
    setGatos(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {gatos.map((gato: Gato, index) => (
        <Fragment key={index}>
          <p>{gato.nome}</p>
          <p>{gato.nomeMae}</p>
          <p>{gato.nomePai}</p>
        </Fragment>
      ))}
    </>
  );
}

export default App;
