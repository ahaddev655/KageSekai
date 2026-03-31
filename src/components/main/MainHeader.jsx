import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GenreAndTypeData from "../../data/GenreAndTypeData.json";
import { Menu } from "lucide-react";

function MainHeader() {
  const [genreToggle, setGenreToggle] = useState(false);
  const [typeToggle, setTypeToggle] = useState(false);
  const [canvasToggle, setCanvasToggle] = useState(false);
  const dropdownRef = useRef();

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

  return (
    <header className="w-full bg-[#0C1116] py-6 top-0 left-0 shadow-xl border-b border-gray-600">
      {/* ==================== DESKTOP CANVAS ==================== */}
      <div className="container-class lg:flex items-center justify-center gap-3 text-white hidden">
        {/* -------------------- GENRE -------------------- */}
        <button
          type="button"
          className="relative"
          onMouseEnter={() => setGenreToggle(true)}
          onMouseLeave={() => setGenreToggle(false)}
          ref={dropdownRef}
        >
          <span
            className={`font-medium text-[15px] tracking-wide 
              ${
                genreToggle
                  ? "after:block after:h-[0.1rem] after:w-full text-orange-400 after:bg-orange-500 transition-colors duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-allafter:duration-350 after:ease-in-out"
                  : "after:block hover:text-orange-500 after:w-0 after:h-[0.1rem] hover:after:w-full after:bg-orange-500 transition-colors duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-all after:duration-350 after:ease-in-out"
              }`}
          >
            GENRES
          </span>
          {/* -------------------- GENRE DROPDOWN -------------------- */}
          <div
            className={`transition-all left-0 absolute duration-300 pt-1 ease-in-out bg-transparent w-max min-w-77.5! h-auto rounded-md ${
              genreToggle
                ? "z-10 opacity-100 translate-y-0 pointer-events-auto"
                : "-z-10 translate-y-10 opacity-0 pointer-events-none"
            }`}
          >
            <div className="bg-[#1c2228] p-3 rounded-md shadow-xl">
              <div className="grid lg:grid-cols-4 grid-cols-2 lg:space-x-8 space-x-3 space-y-3">
                {GenreAndTypeData.genres.map((genre, i) => (
                  <Link
                    to={`/genres/${formattedGenre(genre)}`}
                    key={i}
                    className="text-sm font-light text-gray-400 hover:text-orange-400 text-start transition-all ease-in-out duration-200 hover:translate-x-1"
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </button>

        {/* -------------------- TYPES -------------------- */}
        <button
          type="button"
          className="relative"
          onMouseEnter={() => setTypeToggle(true)}
          onMouseLeave={() => setTypeToggle(false)}
          ref={dropdownRef}
        >
          <span
            className={`font-medium text-[15px] tracking-wide 
              ${
                typeToggle
                  ? "after:block after:h-[0.1rem] after:w-full text-orange-400 after:bg-orange-500 transition-colors duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-allafter:duration-350 after:ease-in-out"
                  : "after:block hover:text-orange-500 after:w-0 after:h-[0.1rem] hover:after:w-full after:bg-orange-500 transition-colors duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-all after:duration-350 after:ease-in-out"
              }`}
          >
            TYPES
          </span>
          {/* -------------------- TYPES DROPDOWN -------------------- */}
          <div
            className={`transition-all left-0 absolute duration-300 pt-1 ease-in-out bg-transparent min-w-30 h-auto rounded-md ${typeToggle ? "opacity-100 translate-y-0 pointer-events-auto z-10" : "translate-y-10 opacity-0 pointer-events-none -z-10"}`}
          >
            <div className="bg-[#1c2228] p-3 rounded-md shadow-xl flex flex-col space-y-3">
              {GenreAndTypeData.types.map((type, i) => (
                <Link
                  to={`/types/${formattedType(type)}`}
                  key={i}
                  className="text-sm font-light text-gray-400 hover:text-orange-400 text-start transition-all ease-in-out duration-200 hover:translate-x-1"
                >
                  {type}
                </Link>
              ))}
            </div>
          </div>
        </button>

        {/* -------------------- RECENTS -------------------- */}
        <Link
          to={"/recents"}
          className="font-medium text-[15px] tracking-wide after:block hover:text-orange-500 after:w-0 after:h-[0.1rem] hover:after:w-full after:bg-orange-500 transition-colors
          duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-all after:duration-350 after:ease-in-out"
        >
          RECENTS
        </Link>

        {/* -------------------- ONGOING -------------------- */}
        <Link
          to={"/ongoing"}
          className="font-medium text-[15px] tracking-wide after:block hover:text-orange-500 after:w-0 after:h-[0.1rem] hover:after:w-full after:bg-orange-500 transition-colors
          duration-350 ease-in-out after:content-[''] after:rounded-full after:transition-all after:duration-350 after:ease-in-out"
        >
          ONGOING
        </Link>
      </div>
      {/* ==================== MOBILE CANVAS ==================== */}
      <div className="lg:hidden block container-class">
        {/* -------------------- MOBILE CANVAS BUTTON -------------------- */}
        <button type="button" onClick={() => setCanvasToggle(!canvasToggle)}>
          {Array(3)
            .fill()
            .map((i) => (
              <div
                key={i}
                className={`h-[2.5px] w-6.25 transition-colors duration-200 mt-1 rounded-full ${canvasToggle ? "bg-orange-400" : "bg-white"}`}
              />
            ))}
        </button>
        {/* -------------------- CANVAS -------------------- */}
        <div
          className={`absolute top-[44%] left-0 w-full py-6 flex origin-top flex-col items-start gap-3 text-white bg-[#11171d] px-8 transition-all duration-200 ${
            canvasToggle
              ? "z-50 opacity-100 scale-y-100 pointer-events-auto visible"
              : "-z-10 scale-y-0 opacity-0 pointer-events-none invisible"
          }`}
        >
          {/* -------------------- GENRE -------------------- */}
          <div className="w-full">
            <button
              type="button"
              className="relative w-full text-left"
              onClick={() => {
                setGenreToggle(!genreToggle);
                setTypeToggle(false);
              }}
              ref={dropdownRef}
            >
              <span
                className={`font-medium text-[15px] tracking-wide transition-colors duration-350 ease-in-out after:content-[''] after:block after:h-[0.1rem] after:bg-orange-500 after:rounded-full after:transition-all after:duration-350 after:ease-in-out ${
                  genreToggle
                    ? "text-orange-400 after:w-full"
                    : "hover:text-orange-500 after:w-0 hover:after:w-full"
                }`}
              >
                GENRES
              </span>
            </button>
            {/* -------------------- GENRE DROPDOWN -------------------- */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                genreToggle
                  ? "max-h-125 opacity-100 mt-4"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="bg-[#1c2228] p-4 rounded-md shadow-xl">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {GenreAndTypeData.genres.map((genre, i) => (
                    <Link
                      to={`/genres/${formattedGenre(genre)}`}
                      key={i}
                      onClick={() => {
                        setCanvasToggle(false);
                        setGenreToggle(false);
                      }}
                      className="text-sm font-light text-gray-400 hover:text-orange-400 transition-all duration-200 hover:translate-x-1"
                    >
                      {genre}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* -------------------- TYPES -------------------- */}
          <div className="w-full">
            <button
              type="button"
              className="relative w-full text-left"
              onClick={() => {
                setTypeToggle(!typeToggle);
                setGenreToggle(false);
              }}
            >
              <span
                className={`font-medium text-[15px] tracking-wide transition-colors duration-350 ease-in-out after:content-[''] after:block after:h-[0.1rem] after:bg-orange-500 after:rounded-full after:transition-all after:duration-350 after:ease-in-out ${
                  typeToggle
                    ? "text-orange-400 after:w-full"
                    : "hover:text-orange-500 after:w-0 hover:after:w-full"
                }`}
              >
                TYPES
              </span>
            </button>
            {/* -------------------- TYPES DROPDOWN -------------------- */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                typeToggle
                  ? "max-h-75 opacity-100 mt-4"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="bg-[#1c2228] p-4 rounded-md shadow-xl flex flex-col space-y-3">
                {GenreAndTypeData.types.map((type, i) => (
                  <Link
                    to={`/types/${formattedType(type)}`}
                    key={i}
                    onClick={() => {
                      setCanvasToggle(false);
                      setTypeToggle(false);
                    }}
                    className="text-sm font-light text-gray-400 hover:text-orange-400 transition-all duration-200 hover:translate-x-1"
                  >
                    {type}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* -------------------- RECENTS -------------------- */}
          <Link
            to="/recents"
            onClick={() => setCanvasToggle(false)}
            className="font-medium text-[15px] tracking-wide py-1 hover:text-orange-500 transition-colors duration-350"
          >
            RECENTS
          </Link>

          {/* -------------------- ONGOING -------------------- */}
          <Link
            to="/ongoing"
            onClick={() => setCanvasToggle(false)}
            className="font-medium text-[15px] tracking-wide py-1 hover:text-orange-500 transition-colors duration-350"
          >
            ONGOING
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
