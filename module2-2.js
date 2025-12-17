
const rewApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "AeroX Wireless Mouse",
    category: "Accessories",
    price: 35,
    rating: 4.5,
    stock: 50,
  },
  {
    id: "p-003",
    productName: "Vision Pro Monitor",
    category: "Electronics",
    price: 300,
    rating: 4.6,
    stock: 25,
  },
  {
    id: "p-004",
    productName: "HyperSound Headphones",
    category: "Audio",
    price: 150,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-005",
    productName: "SmartHub Tablet",
    category: "Electronics",
    price: 650,
    rating: 4.4,
    stock: 20,
  },
  {
    id: "p-006",
    productName: "ProCharge Power Bank",
    category: "Accessories",
    price: 45,
    rating: 4.3,
    stock: 60,
  },
  {
    id: "p-007",
    productName: "CloudType Keyboard",
    category: "Accessories",
    price: 80,
    rating: 4.5,
    stock: 35,
  },
  {
    id: "p-008",
    productName: "UltraView Smart TV",
    category: "Home Appliance",
    price: 950,
    rating: 4.9,
    stock: 10,
  },
];


const topElectronicsProducts = rewApiData.filter(item=> item.category === "Electronics" ).sort((a,b)=> b.rating - a.rating).slice(0,3).map(item=>( {name:  item.productName} ))



console.log(topElectronicsProducts)