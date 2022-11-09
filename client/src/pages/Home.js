import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Saved from "../components/Saved/Saved";
import "./main.css";

function Home({ searchedBooks, setSearchedBooks }) {
    const [nav, setNav] = useState("search");

    return (
        <div>
            <Navbar setNav={setNav}/>
            <Header />
            {nav === "search" ? <Search /> : <Saved />}
        </div>
    )
}

export default Home;