import React from "react";
import HomeHeader from "../../components/main/home/HomeHeader";
import AnimeSwiper from "../../components/main/home/AnimeSwiper";
import NewRelease from './../../components/main/home/NewRelease';

function HomePage() {
  return (
    <>
      <HomeHeader />
      <AnimeSwiper />
      <div className="container-class">
        <NewRelease />
      </div>
    </>
  );
}

export default HomePage;
