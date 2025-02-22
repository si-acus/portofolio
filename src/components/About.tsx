import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "public/assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
          <p className="uppercase text-xl tracking-widest text-primary">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-lg">
            I'm a passionate Full-Stack Developer with a strong background in web development, software engineering, and system design. With experience in both frontend and backend technologies, I specialize in building scalable, efficient, and user-friendly applications.
          </p>
          <p className="py-2 text-gray-600 text-lg">
            I thrive in solving complex problems, optimizing performance, and creating seamless digital experiences. Whether it's developing robust APIs, crafting intuitive user interfaces, or architecting backend systems, I always strive for innovation and excellence.
          </p>
          <p className="py-2 text-gray-600 text-lg">
            Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay ahead in the ever-evolving tech world.					</p>
          <p className="py-2 text-gray-600 text-lg">
            Let's connect, collaborate, and build something amazing together! 🚀
          </p>
          <div className="w-[50%]">
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <div data-aos="fade-up" data-aos-duration="1000">
            <Image src={AboutImg} className="rounded-xl " alt="/" height={800} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;