import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => (
  <Alert variant="primary" className="text-center">
    <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
      Benvenuto in CosmoBooks!
    </h1>
    <p style={{ fontSize: "18px", marginTop: "10px" }}>
      Esplora l'universo infinito dei libri e lasciati trasportare dalla magia
      della lettura.
    </p>
  </Alert>
);

export default Welcome;
