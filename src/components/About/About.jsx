import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile-pic-anime.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] lg:px-[15vw] font-sans bg-[#0f0f1a] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-white">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-[#ffffff] drop-shadow-lg">
            Naveen Kumar J
          </h2>
          {/* Typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#a855f7]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Frontend Developer", "Problem Solver", "Tech Enthusiast"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#a855f7]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 leading-relaxed">
            Enthusiastic Software Engineer with a strong problem-solving mindset
            and a passion for software development. Eager to learn and grow,
            with a commitment to building efficient and reliable applications.
            Continuously improving skills to excel in software engineering
            roles.
          </p>
          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/14KgyRv9I7MD15k0dHEl-e54RvuCjG3A5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-md shadow-purple-500/50"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] border-4 border-purple-600 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Naveen Kumar J"
              className="w-full h-full rounded-full object-top object-cover shadow-[0_10px_20px_rgba(168,85,247,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
