import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Saved from "../components/Saved/Saved";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            {/* <Search /> */}
            <Saved />
        </div>
    )
}

export default Home;