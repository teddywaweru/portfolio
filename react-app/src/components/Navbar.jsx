import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/#about" className="ml-3 text-xl">
            Teddy Waweru
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <div className="text-green-500">
            <a href="/#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="/#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <text href="/#testimonials" className="mr-5  text-gray-500">
              Testimonials
            </text>
          </div>
        </nav>
        <text
          href="mailto:teddywaweru@gmail.com"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </text>
      </div>
    </header>
  );
}