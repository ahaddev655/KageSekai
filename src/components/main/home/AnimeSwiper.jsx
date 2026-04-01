import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { Bookmark } from "lucide-react";

const ANIME_DATA = [
  {
    id: 1,
    title: "Jack-of-All-Trades, Party of None",
    tags: ["TV", "Adventure", "Fantasy", "Action"],
    description:
      "'Orn Doula, today will be your last day in the party.' Orn, once a skilled Swordsman, had adapted to the role of Enchanter to fill a crucial gap in the Hero Party...",
    rating: "PG 13",
    release: "2026",
    quality: "HD",
    image: "/assets/download.png",
  },
  {
    id: 2,
    title: "Hell's Paradise Season 2",
    tags: ["TV", "Adventure", "Shounen", "Action"],
    description:
      "Seeking the key to the elixir of immortality, the group arrives at the fortress of the island's monstrous ruler, the Tensen. To survive and escape the island, cooperation becomes essential-regardless of whether one is a condemned criminal or an exe...",
    rating: "R",
    release: "2026",
    quality: "HD",
    image: "/assets/downloada.png",
  },
];

const AnimeSwiper = () => {
  return (
    <div className="w-full h-125 md:h-150 lg:h-175 relative overflow-hidden bg-black container mx-auto">
      <Swiper
        modules={[Autoplay]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {ANIME_DATA.map((anime) => (
          <SwiperSlide key={anime.id} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-5000 scale-100 swiper-slide-active:scale-110"
              style={{ backgroundImage: `url(${anime.image})` }}
            />

            <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center sm:items-start items-center container-class space-y-4 md:space-y-6">
              {/* Title */}
              <h1 className="md:text-3xl text-xl font-semibold text-white tracking-tight">
                {anime.title}
              </h1>

              {/* Metadata Tags */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1">{anime.tags[0]}</span>
                {anime.tags.slice(1).map((tag) => (
                  <span key={tag} className="before:content-['•'] before:mr-2">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 sm:text-sm text-xs leading-relaxed max-w-2xl line-clamp-2 sm:text-start text-center">
                {anime.description}
              </p>

              {/* Stats Box */}
              <div className="flex bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-lg sm:self-start text-center gap-8">
                <div>
                  <p className="text-[10px] uppercase text-gray-400">Rating</p>
                  <p className="text-sm font-semibold text-white">
                    {anime.rating}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-400">Release</p>
                  <p className="text-sm font-semibold text-white">
                    {anime.release}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-400">Quality</p>
                  <p className="text-sm font-semibold text-white italic">
                    {anime.quality}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 relative z-30">
                <button className="text-white font-semibold bg-orange-500 px-6 py-3 rounded-md md:text-lg transition-all duration-200 hover:bg-orange-600 hover:-translate-y-1">
                  Watch Now
                </button>
                <button className="p-3 border border-white/20 hover:bg-white/10 rounded-md transition-all">
                  <Bookmark color="#fff" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeSwiper;
