import React, { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const inputField = useRef(null);

  const searchHandeler = (e) => {
    e.preventDefault();

    console.log(searchQuery);

    getData(searchQuery);

    setSearchQuery("");
    inputField.current.blur();
  };
  const getData = async (searchQuery) => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=/${searchQuery}`
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <div className="app min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputField={inputField}
          searchHandler={(e) => searchHandeler}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favprotes" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
