import React from "react";
import HomeHeader from "../../components/main/home/HomeHeader";
import AnimeSwiper from "../../components/main/home/AnimeSwiper";
import NewRelease from './../../components/main/home/NewRelease';
import UpComing from "../../components/main/home/UpComing";
import HomeFooter from "../../components/main/home/HomeFooter";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <AnimeSwiper />
      <div className="container-class">
        <NewRelease />
        <UpComing />
      </div>
      <HomeFooter />
    </>
  );
}

export default HomePage;
