import camiseta from '../assets/camiseta.jpg';
import zapatillas from '../assets/zapatillas.jpg';
import mochila from '../assets/mochila.jpg';
import lentes from '../assets/lentes.jpg';
import reloj from '../assets/reloj.jpg';
import auriculares from '../assets/auriculares.jpg';
import bolso from '../assets/bolso.jpg';
import gorra from '../assets/gorra.jpg';

const products = [
  {
    id: 1,
    name: "Camiseta Oversize",
    price: 29.99,
    description: "Camiseta de algodón orgánico unisex, perfecta para el verano.",
    image: camiseta,
  },
  {
    id: 2,
    name: "Zapatillas Rojas",
    price: 79.99,
    description: "Zapatillas urbanas con diseño moderno y suela antideslizante.",
    image: zapatillas,
  },
  {
    id: 3,
    name: "Mochila Minimalista",
    price: 45.00,
    description: "Mochila resistente al agua, ideal para estudiantes y viajeros.",
    image: mochila,
  },
  {
    id: 4,
    name: "Lentes de Sol Vintage",
    price: 19.50,
    description: "Lentes con protección UV400 y diseño retro ligero.",
    image: lentes,
  },
  {
    id: 5,
    name: "Reloj Clasico",
    price: 35.99,
    description: "Un Reloj clasico VINTAGE.",
    image: reloj,
  },
  {
    id: 6,
    name: "Auriculares Beats",
    price: 55.00,
    description: "Auriculares con cancelación de ruido y micrófono integrado.",
    image: auriculares,
  },
  {
    id: 7,
    name: "Bolso Tote Ecológico",
    price: 22.90,
    description: "Bolso reutilizable hecho de materiales reciclados. Estilo y sostenibilidad.",
    image: bolso,
  },
  {
    id: 8,
    name: "Gorra Blanca Clásica",
    price: 18.00,
    description: "Gorra ajustable con visera curva. Diseño simple y versátil.",
    image: gorra,
  },
];

export default products;
