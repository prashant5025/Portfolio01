import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsPersonBadgeFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                  alt="/"
                />
              </div>

              <div className="">
                <h2 className="py-2">Prashant Singh</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and Let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items justify-between py-4">
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link href="">
                      <FaLinkedin size={24} />
                    </Link>
                  </div>
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link href="">
                      <FaGithub size={24} />
                    </Link>
                  </div>
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link href="">
                      <AiOutlineMail size={24} />
                    </Link>
                  </div>
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                    <Link href="">
                      <BsFillPersonLinesFill size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
                <form action="">
                    
                </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
