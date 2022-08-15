import React from "react";
import { useUser } from "@clerk/clerk-react";

const WelcomeSection = () => {
  const { user } = useUser();
  const userFirstName = user.firstName;

  return (
    <section className="relative h-screen">
      <div className="w-full mx-auto my-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16 mt-10">
            <h1
              className="text-5xl md:text-6xl  leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Hello, {userFirstName}
            </h1>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4">
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 tracking-wide">
                  ZPlatform
                </span>
              </h3>
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Where you access essential online services with convenience
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-sky-600 hover:bg-sky-700 w-full mb-4 sm:w-auto sm:mb-0 p-5 mt-12 rounded-lg"
                    href="#0"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
