import React from "react";
import { motion } from "framer-motion";
import { Captions, Play } from "lucide-react";

function UpComing() {
  const mockAnimes = [
    {
      id: 1,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 2,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 3,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 4,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 5,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 6,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 7,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 8,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 9,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 10,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 11,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
    {
      id: 12,
      title: "Renegade Immortal",
      type: "ONA",
      image: "/assets/mock-image.jpg",
    },
  ];
  return (
    <div className="py-12">
      <div>
        <h1 className="text-3xl text-white font-bold font-montserrat">
          Upcoming Animes
        </h1>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-6">
        {mockAnimes.map((anime, i) => (
          <motion.div
            initial={{ y: 20, opacity: 0, display: "hidden" }}
            whileInView={{ y: 0, opacity: 1, display: "block" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2 * anime.id,
              duration: 0.5,
              ease: "easeInOut",
            }}
            key={i}
            className="relative overflow-hidden rounded-lg group"
          >
            {/* -------------------- IMAGE -------------------- */}
            <img
              src={anime.image}
              alt={anime.title || "Anime Cover"}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* -------------------- OVERLAY -------------------- */}
            <div className="absolute inset-0 bg-linear-to-t from-[#27272a] to-transparent opacity-100 z-10" />

            {/* -------------------- CONTENT -------------------- */}
            <div className="absolute z-20 bottom-2 left-4.5">
              <h1 className="text-white text-[15px] font-medium">
                {anime.title.length > 17
                  ? anime.title.slice(0, 17) + "..."
                  : anime.title}
              </h1>
              <div className="flex mt-2.5 items-center gap-2">
                <div className="flex items-center font-medium p-1 gap-1 text-sm bg-orange-500 rounded-md text-[#dfdfdf]">
                  <Captions size={20} />?
                </div>
                <span className="text-sm text-gray-400 font-medium">
                  {anime.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default UpComing;
