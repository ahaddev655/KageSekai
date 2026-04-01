import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GenreAndTypeData from "../../../data/GenreAndTypeData.json";
import { Funnel, Search, UserRound } from "lucide-react";

function HomeHeader() {
  const [genreToggle, setGenreToggle] = useState(false);
  const [typeToggle, setTypeToggle] = useState(false);
  const [canvasToggle, setCanvasToggle] = useState(false);
  const [search, setSearch] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const dropdownRef = useRef();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const formattedGenre = (genre) => {
    return genre.toLowerCase().replaceAll(" ", "-");
  };

  const formattedType = (type) => {
    return type.toLowerCase().replaceAll(" ", "-");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setGenreToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (token && id) {
      setUserExists(true);
      return;
    }
  }, []);

  return (
    <header className="fixed z-50 top-5 left-0 right-0 mx-auto w-[90%] md:w-[85%] lg:w-[90%] xl:w-300">
      <div className="flex items-center justify-between w-full bg-[#0d1217] py-2 px-4 rounded-2xl relative">
        {/* ==================== HEADING ==================== */}
        <Link
          to={"/home"}
          className="text-green-500 md:text-xl font-bold whitespace-nowrap mr-4"
        >
          <span className="text-orange-500">Kage</span> Sekai
        </Link>

        {/* -------------------- MOBILE CANVAS BUTTON -------------------- */}
        <button
          type="button"
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setCanvasToggle(!canvasToggle)}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-[2.5px] w-6 transition-colors duration-200 rounded-full ${
                canvasToggle ? "bg-orange-400" : "bg-white"
              }`}
            />
          ))}
        </button>

        {/* ==================== DESKTOP NAVIGATION (Fixed 'hidden' issue) ==================== */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-6 text-white">
            {/* -------------------- SEARCH & FILTERS -------------------- */}
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
                <Search size={18} strokeWidth={3} />
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="w-64 xl:w-md h-9 text-[13px] rounded-full bg-[#181c21] pl-10 pr-20 font-light focus:outline-none focus:ring-1 focus:ring-orange-500"
                  placeholder="Search anime"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center text-gray-400 cursor-pointer hover:text-white">
                <Funnel size={16} />
                <span className="text-[10px] font-bold ml-1">FILTER</span>
              </div>
            </div>

            {/* -------------------- GENRE (Desktop) -------------------- */}
            <div
              className="relative group"
              onMouseEnter={() => setGenreToggle(true)}
              onMouseLeave={() => setGenreToggle(false)}
            >
              <button
                type="button"
                className={`font-medium text-[13px] tracking-wide transition-colors duration-350 ${genreToggle ? "text-orange-400" : "hover:text-orange-500"}`}
              >
                GENRES
                <div
                  className={`h-0.5 bg-orange-500 transition-all duration-350 ${genreToggle ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>

              <div
                className={`absolute top-full -left-40 pt-4 transition-all duration-300 ${genreToggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <div className="bg-[#1c2228] p-4 rounded-md shadow-2xl border border-gray-800">
                  <div className="grid grid-cols-4 gap-x-8 gap-y-2 w-max">
                    {GenreAndTypeData.genres.map((genre, i) => (
                      <Link
                        to={`/genres/${formattedGenre(genre)}`}
                        key={i}
                        className="text-sm font-light text-gray-400 hover:text-orange-400 transition-all duration-200 hover:translate-x-1"
                      >
                        {genre}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------- TYPES (Desktop) -------------------- */}
            <div
              className="relative group"
              onMouseEnter={() => setTypeToggle(true)}
              onMouseLeave={() => setTypeToggle(false)}
            >
              <button
                type="button"
                className={`font-medium text-[13px] tracking-wide transition-colors duration-350 ${typeToggle ? "text-orange-400" : "hover:text-orange-500"}`}
              >
                TYPES
                <div
                  className={`h-0.5 bg-orange-500 transition-all duration-350 ${typeToggle ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>

              <div
                className={`absolute top-full left-0 pt-4 transition-all duration-300 ${typeToggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <div className="bg-[#1c2228] p-4 rounded-md shadow-2xl border border-gray-800 flex flex-col space-y-2 w-32">
                  {GenreAndTypeData.types.map((type, i) => (
                    <Link
                      to={`/types/${formattedType(type)}`}
                      key={i}
                      className="text-sm font-light text-gray-400 hover:text-orange-400 transition-all duration-200 hover:translate-x-1"
                    >
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/recents"
              className="font-medium text-[13px] tracking-wide hover:text-orange-500 group"
            >
              RECENTS
              <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-350" />
            </Link>

            <Link
              to="/ongoing"
              className="font-medium text-[13px] tracking-wide hover:text-orange-500 group"
            >
              ONGOING
              <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-350" />
            </Link>
            {/* -------------------- PROFILE -------------------- */}
            {userExists ? (
              <Link to={"/profile"}>
                <button className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[#1c2228] group ml-4">
                  <UserRound
                    size={17}
                    strokeWidth={2.5}
                    className="text-white group-hover:text-gray-300 transition-colors"
                  />
                </button>
              </Link>
            ) : (
              <Link to={"/auth"}>
                <button className="border border-white/20 hover:bg-white/10 text-white rounded-md px-5 py-2 text-sm font-medium transition-all duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* -------------------- PROFILE -------------------- */}
        {userExists ? (
          <Link to={"/profile"} className="lg:hidden block">
            <button className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[#1c2228] group ml-4">
              <UserRound
                size={17}
                strokeWidth={2.5}
                className="text-white group-hover:text-gray-300 transition-colors"
              />
            </button>
          </Link>
        ) : (
          <Link to={"/auth"} className="lg:hidden block">
            <button className="border border-white/20 block hover:bg-white/10 text-white rounded-md px-5 py-2 text-sm font-medium transition-all duration-300">
              Login
            </button>
          </Link>
        )}

        {/* ==================== MOBILE CANVAS ==================== */}
        <div
          className={`lg:hidden fixed top-21.25 left-5 right-5 transition-all duration-300 origin-top transform ${
            canvasToggle
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-[#11171d] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl border border-gray-800">
            {/* Mobile Genre Accordion */}
            <div className="w-full">
              <button
                onClick={() => setGenreToggle(!genreToggle)}
                className="w-full text-left text-white font-medium text-[13px] flex justify-between items-center"
              >
                GENRES
                <span className={genreToggle ? "text-orange-500" : ""}>
                  {genreToggle ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${genreToggle ? "max-h-100 mt-4" : "max-h-0"}`}
              >
                <div className="grid grid-cols-2 gap-2 bg-[#1c2228] p-3 rounded-lg">
                  {GenreAndTypeData.genres.map((genre, i) => (
                    <Link
                      key={i}
                      to={`/genres/${formattedGenre(genre)}`}
                      className="text-sm text-gray-400 hover:text-orange-400 py-1"
                      onClick={() => setCanvasToggle(false)}
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Type Accordion */}
            <div className="w-full">
              <button
                onClick={() => setTypeToggle(!typeToggle)}
                className="w-full text-left text-white font-medium text-[13px] flex justify-between items-center"
              >
                TYPES
                <span className={typeToggle ? "text-orange-500" : ""}>
                  {typeToggle ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${typeToggle ? "max-h-50 mt-4" : "max-h-0"}`}
              >
                <div className="flex flex-col gap-2 bg-[#1c2228] p-3 rounded-lg">
                  {GenreAndTypeData.types.map((type, i) => (
                    <Link
                      key={i}
                      to={`/types/${formattedType(type)}`}
                      className="text-sm text-gray-400 hover:text-orange-400"
                      onClick={() => setCanvasToggle(false)}
                    >
                      {type}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/recents"
              className="text-white font-medium text-[13px]"
              onClick={() => setCanvasToggle(false)}
            >
              RECENTS
            </Link>
            <Link
              to="/ongoing"
              className="text-white font-medium text-[13px]"
              onClick={() => setCanvasToggle(false)}
            >
              ONGOING
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
