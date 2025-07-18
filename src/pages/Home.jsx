import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  Grid, TextField, Slider, Typography, Pagination
} from "@mui/material";

const Home = () => {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [page, setPage] = useState(1);

  const perPage = 6;

  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="Buscar"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Typography gutterBottom>Filtrar por precio</Typography>
      <Slider
        value={priceRange}
        onChange={(_, value) => setPriceRange(value)}
        valueLabelDisplay="auto"
        min={0}
        max={100}
        sx={{ width: 300 }}
      />

      <Grid container spacing={2} mt={2}>
        {paginated.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filtered.length / perPage)}
        page={page}
        onChange={(_, value) => setPage(value)}
        sx={{ mt: 3 }}
      />
    </div>
  );
};

export default Home;
