import { Funnel, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./../../components/main/MainHeader";

function GreetingPage() {
  const [search, setSearch] = useState(null);
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <MainHeader />
      {/* ==================== PAGE ==================== */}
      <div className="relative flex items-center justify-center flex-col h-[82vh]">
        {/* ==================== OVERLAY ==================== */}
        <div
          className="absolute inset-0 rounded-4xl bg-cover bg-no-repeat bg-center w-full h-[83vh] -z-10 blur-xs"
          style={{
            backgroundImage: `linear-gradient(to top right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/greetings-page-image.jpg')`,
          }}
        />
        {/* ==================== HEADING ==================== */}
        <div className="text-green-500 text-4xl md:text-5xl font-bold">
          <span className="text-orange-500">Kage</span> Sekai
        </div>
        {/* ==================== SEARCH & FILTER ==================== */}
        <div className="relative mt-6">
          {/* -------------------- SEARCH -------------------- */}
          <div className="absolute top-[30%] left-[2.5%]">
            <Search size={18} strokeWidth={3} />
          </div>
          <form>
            <input
              type="text"
              className="w-162.5 h-11.25 rounded-full bg-white/70 pl-10 font-light"
              placeholder="Search anime"
              name="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                e.preventDefault();
              }}
            />
          </form>
          {/* -------------------- FILTER -------------------- */}
          <div className="absolute top-[30%] right-[2.5%] flex items-center justify-center">
            <Funnel size={18} />
            <span className="text-xs font-medium">FILTER</span>
          </div>
        </div>
        <div className="w-87.5 text-center space-x-1 mt-4 font-light">
          <span>
            <Link className="text-white hover:text-gray-400 transition-colors duration-300 text-[16px]">
              One Piece,
            </Link>
          </span>
          <span>
            <Link className="text-white hover:text-gray-400 transition-colors duration-300 text-[16px]">
              Jujutsu Kaisen The Culling,
            </Link>
          </span>
          <span>
            <Link className="text-white hover:text-gray-400 transition-colors duration-300 text-[16px]">
              The Strongest Job Is,
            </Link>
          </span>
          <span>
            <Link className="text-white hover:text-gray-400 transition-colors duration-300 text-[16px]">
              Hells Paradise,
            </Link>
          </span>
          <span>
            <Link className="text-white hover:text-gray-400 transition-colors duration-300 text-[16px]">
              There Was A Cute
            </Link>
          </span>
        </div>
        {/* ==================== WATCH BUTTON ==================== */}
        <div>
          <Link to={"/home"}>
            <button
              type="button"
              className="mt-5 text-white font-semibold bg-orange-500 px-6 py-3 rounded-md md:text-lg transition-all duration-200 hover:bg-orange-600 hover:-translate-y-1"
            >
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GreetingPage;
