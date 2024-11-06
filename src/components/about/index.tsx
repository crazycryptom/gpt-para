import React from "react";

const About = () => {
  return (
    <div className="px-4 py-9 2xl:container md:px-6 mt-20 md:py-12 lg:px-20 lg:py-16 2xl:mx-auto">
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="flex w-full flex-col justify-center lg:w-5/12">
          <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">
            About Us
          </h1>
          <p className="text-base font-normal leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 pt-12 lg:flex-row">
        <div className="flex w-full flex-col justify-center lg:w-5/12">
          <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">
            Our Story
          </h1>
          <p className="text-base font-normal leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
            <div className="flex flex-col items-center justify-center p-4 pb-6">
              <img
                className="hidden md:block"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="block md:hidden"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Alexa
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pb-6">
              <img
                className="hidden md:block"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="block md:hidden"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Olivia
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pb-6">
              <img
                className="hidden md:block"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="block md:hidden"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Liam
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 pb-6">
              <img
                className="hidden md:block"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="block md:hidden"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
