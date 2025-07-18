// src/components/GuardarPedido.jsx

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../firebase/config";
import { Button, Box, Typography } from "@mui/material";

const pedidoEjemplo = {
  buyer: {
    name: "Juan Pérez",
    email: "juan@example.com",
    address: "Av. Falsa 123, Lima",
  },
  items: [
    { id: 1, name: "Zapatillas Verdes", price: 79.99 },
    { id: 2, name: "Camiseta Oversize", price: 29.99 },
  ],
  total: 109.98,
  date: serverTimestamp(),
};

const GuardarPedido = () => {
  const guardarPedido = async () => {
    try {
      const docRef = await addDoc(collection(db, "orders"), pedidoEjemplo);
      alert(`Pedido guardado con ID: ${docRef.id}`);
    } catch (error) {
      console.error("Error al guardar pedido:", error);
      alert("Error al guardar el pedido");
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h6">Simular Pedido</Typography>
      <Button variant="contained" color="primary" onClick={guardarPedido}>
        Guardar Pedido de Prueba
      </Button>
    </Box>
  );
};

export default GuardarPedido;
