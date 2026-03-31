import React from "react";
import { motion } from "framer-motion";
import { Captions, Play } from "lucide-react";

function NewRelease() {
  const mockAnimes = [
    {
      id: 1,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 2,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 3,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 4,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 5,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 6,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 7,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 8,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 9,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 10,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 11,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 12,
      title: "Renegade Immortal",
      episodes: "134",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
  ];
  return (
    <div
      className="py-12"
    >
      <div>
        <h1 className="text-3xl text-white font-bold font-montserrat">
          Recent Releases
        </h1>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-6">
        {mockAnimes.map((anime, i) => (
          <motion.div
            initial={{ y: 20, opacity: 0, display: "hidden" }}
            whileInView={{ y: 0, opacity: 1, display: "block" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.3 * anime.id,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative overflow-hidden cursor-pointer rounded-lg group"
          >
            {/* -------------------- IMAGE -------------------- */}
            <img
              src={anime.image}
              alt={anime.title || "Anime Cover"}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* -------------------- OVERLAY -------------------- */}
            <div className="absolute inset-0 bg-linear-to-t from-[#27272a] to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* -------------------- PLAY -------------------- */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="grid place-items-center w-14 h-14 bg-white/20 border border-white/30 rounded-full scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                <Play
                  fill="white"
                  color="white"
                  size={28}
                  strokeWidth={2}
                  className="ml-1"
                />
              </div>
            </div>

            {/* -------------------- CONTENT -------------------- */}
            <div className="absolute z-20 bottom-2 left-4.5 group-hover:opacity-0 opacity-100 transition-opacity duration-300 ease-in-out">
              <h1 className="text-white text-[15px] font-medium">
                {anime.title.length > 17
                  ? anime.title.slice(0, 17) + "..."
                  : anime.title}
              </h1>
              <div className="flex mt-2.5 items-center gap-2">
                <div className="flex items-center p-1 gap-1 text-[13px] bg-orange-500 rounded-md text-[#dfdfdf]">
                  <Captions size={20} />
                  {anime.episodes}
                </div>
                <span className="text-sm text-gray-400 font-medium">{anime.type}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;
