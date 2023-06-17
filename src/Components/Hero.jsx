import React from "react";
import logo from "../assets/logo.jpg";

const Hero = () => {
  return (
    <div className="font-primary hero py-[100px] min-h-screen flex justify-center items-center">
      <div className="container gap-6 flex justify-center items-center text-center flex-col">
        <h1 className="text-6xl hero-head tracking-wide uppercase md:text-8xl font-bold break- ">
          A FUCKIN TOKEN
        </h1>
        <p className="text-3xl hero-para">Welcome to a fucking moon token</p>
        <p className="text-3xl hero-para">
          0xc5Ca5De58c1Ba9494A59fe05C2F0BB66D474a511
        </p>

        <ul className="flex flex-col justify-center md:flex-row gap-4 items-center list-disc list-inside">
          <li className="text-2xl">1month lp Lock</li>
          <li className="text-2xl">5% tax</li>
        </ul>
        <div className="flex flex-wrap justify-center items-center gap-3 ">
          <a
            href=""
            target="_blank"
            className="px-8 btn1 bg-yellow-300 text-black py-4 uppercase text-2xl"
          >
            telegram
          </a>
          <a
            href=""
            target="_blank"
            className="px-8 btn bg-white text-black py-4 uppercase text-2xl"
          >
            twitter
          </a>
          <a
            href=""
            className="px-8 btn bg-transparent border border-black rounded-md py-4 uppercase text-2xl"
          >
            chart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
