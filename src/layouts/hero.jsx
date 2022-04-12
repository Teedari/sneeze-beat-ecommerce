import React from "react";
import { Link } from "react-router-dom";
import heroSvg from "../assets/svgs/marshmelo.svg";
import SearchBar from "../components/SearchBar";
import urls from "../utils/routes/page.routes";
import genreData from "../data/genre.json";
import { beatGoTo } from "../utils/helpers";
const Hero = () => {
  const GenreDisplay = () => {
    return genreData.map((genre, index) => (
      <li key={index} className="bg-slate-900 text-primary  py-1 px-2 rounded-lg">
        <Link to={beatGoTo(genre.label.toLowerCase())}>{genre.label}</Link>
      </li>
    ));
  };
  return (
    <section className="container hero">
      <div className="hero-content flex flex-col gap-5 items-start">
        <ul className="flex gap-2 items-center">
          <li className="font-semibold">Trending:</li>
          <GenreDisplay />
          {/* <li className="bg-slate-900 text-primary  py-1 px-2 rounded-lg">
            <Link to={beatGoTo("hip pop")}>Hip pop</Link>
          </li>
          <li className="bg-slate-900 text-primary  py-1 px-2 rounded-lg">
            <Link to={beatGoTo("raggae")}>Reggae</Link>
          </li>
          <li className="bg-slate-900 text-primary  py-1 px-2 rounded-lg">
            <Link to={beatGoTo("afro pop")}>Trap</Link>
          </li> */}
        </ul>
        <SearchBar />
        <h1 className="uppercase  text-slate-300 font-bold">
          The perfect place for music heaven.
        </h1>
        <p className="text-muted">
          Aliquip proident est quis qui Lorem ex. Dolor sunt sunt dolore eu esse
          adipisicing eiusmod fugiat ullamco occaecat qui exercitation do
          aliqua. Enim aliquip duis aliquip ipsum laborum.
        </p>
      </div>
      <div className="hero-image">
        <div>
          <img src={heroSvg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
