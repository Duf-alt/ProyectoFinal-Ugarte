import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField, Button, Typography, Box
} from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required("Nombre requerido"),
  email: yup.string().email("Email inválido").required("Email requerido"),
  address: yup.string().required("Dirección requerida"),
});

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const {
    register, handleSubmit, formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    alert("Compra realizada con éxito");
    console.log("Datos del cliente:", data);
    console.log("Productos:", cart);
    dispatch({ type: "CLEAR" });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5">Finalizar compra</Typography>
      {cart.length === 0 ? (
        <Typography>Tu carrito está vacío.</Typography>
      ) : (
        <>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>{item.name} - S/ {item.price.toFixed(2)}</li>
            ))}
          </ul>
          <Typography>Total: S/ {total.toFixed(2)}</Typography>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Dirección"
              fullWidth
              margin="normal"
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
            <Button type="submit" variant="contained" color="primary">
              Comprar
            </Button>
          </form>
        </>
      )}
    </Box>
  );
};

export default Checkout;
