import { useState } from "react";
import Porta from "../componentes/Porta";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <input type="text" />
      <Porta value={p1} />
    </div>
  )
}
