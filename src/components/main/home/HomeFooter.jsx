import React from "react";
import { Link } from 'react-router-dom';

function HomeFooter() {
  return (
    <footer className="md:flex items-center justify-between gap-2 bg-[#0d1217] py-6 container-class border-t border-gray-500">
      <Link
        to={"/home"}
        className="text-green-500 md:text-xl font-bold whitespace-nowrap mr-4"
      >
        <span className="text-orange-500">Kage</span> Sekai
      </Link>
      <p className="text-white text-sm">Copyright ©AnimeKAI. All Rights Reserved</p>
    </footer>
  );
}

export default HomeFooter;
