import React from "react";
import HomeHeader from "../../components/main/home/HomeHeader";
import AnimeSwiper from "../../components/main/home/AnimeSwiper";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <div>
        <AnimeSwiper />
      </div>
    </>
  );
}

export default HomePage;
