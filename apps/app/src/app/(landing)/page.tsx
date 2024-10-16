
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex justify-between px-16 py-20  max-sm:flex-col max-sm:gap-20">
      <div className="md:max-w-[370px] max-w-[281px] flex flex-col items-center gap-6">
        <h1 className="md:h1-medium h2-medium ">
          Manage All Your Team&apos;s
          <span className="inline-block relative align-middle ml-2">
            <div className=" md:max-w-[155px] max-w-[116px]">
              <Image
                src="/images/rectangle.png"
                alt="rectangle"
                width={155}
                height={71}
                className="block"
              />
            </div>

            <span className="absolute inset-0 flex items-center justify-center text-white -left-5 ">
              Tasks
            </span>
          </span>
          <br />
          More Efficiently
        </h1>

        <p className=" text-dark_gray small-medium text-justify">
          Start building and developing your team by starting to manage your
          team work system, And create a comfortable and easy collaboration
          atmosphere
        </p>
      </div>

      <div className="flex-1 flex items-center sm:justify-end justify-center lg:pr-20">
        <div className="md:max-w-[441px] md:w-full w-[247px] ">
          <Image
            src="/images/cards.png"
            alt="Landing Page Image"
            width={1920}
            height={1080}
            layout="responsive"
            quality={75}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
