import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "public/assets/contact.jpg";
import { RotateLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#44A8B3",
};

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="fixed inset-0 w-full lg:h-screen flex items-center justify-center z-40">
      <RotateLoader
        color={"#44A8B3"}
        className="scale-[150%]"
        loading={loading}
        cssOverride={override}
        size={18}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
const Contact = () => {

  return (
    <>
      <div id="contact" className="w-full lg:h-screen">
        <div
          className="max-w-[1240px] m-auto px-2 py-16 w-full"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p className="text-xl tracking-widest uppercase text-primary">Contact</p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid justify-center items-center">
            {/* left */}
            <div
              className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className="py-2">Tubagus Ass'ad</h2>
                  <p className="text-xl mt-2">Full-Stack Developer</p>
                  <p className="py-4 text-lg">
                    I am available for freelance or full-time positions. Contact me and
                    let&apos;s talk.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/in/si-acus/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
                        <FaLinkedinIn title="Linkedin" />
                      </div>
                    </a>
                    <a
                      href="https://github.com/si-acus/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
                        <FaGithub title="GitHub" />
                      </div>
                    </a>

                    <Link href="mailto:tubagus.assad@gmail.com">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
                        <AiOutlineMail title="Contact" />
                      </div>
                    </Link>

                    <Link href="/resume">
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
                        <BsFillPersonLinesFill title="Resume" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-primary" size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;