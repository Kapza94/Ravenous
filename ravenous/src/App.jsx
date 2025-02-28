import "./App.css";
import BusinessList from "./BusinessList";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [businesses, setBusinesses] = useState([
    {
      name: "MarginOTTO",
      address: "110 paddington Way",
      city: "Bordertown",
      category: "Italian",
      rating: 4.5,
      reviewCount: 90,
      postcode: "NY 11010",
    },
    {
      name: "restaurant 2",
      address: "55 restaurants place",
      category: "Sushi",
      rating: 3,
      reviewCount: 400,
      postcode: "NY 11111",
    },
  ]);
  return (
    <>
      <Header />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
