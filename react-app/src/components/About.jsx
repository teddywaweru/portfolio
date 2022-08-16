import React from "react";
import teddyWPortrait from "../imgs/TeddyW_portrait_photo_.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";



export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <p className="text-center text-white">
        <em>Under active development. Contact Teddy via mail: 
          <a href="mailto:" className="text-green-500">teddywaweru@gmail.com</a>
        </em>
      </p>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

        <img className="rounded-full" src={teddyWPortrait} alt="" />
      </div>

        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-6xl mb-4 font-extrabold text-white">
            Hello, I'm Teddy Waweru.
          <h2 className="title-font sm:text-xl text-3xl mb-4 font-medium text-white">
          Python Developer |Data Analyst| Machine Learning Engineer 
          </h2>
          <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-white rounded-md ">
            I am an aspiring <strong>back-end developer</strong> interested in <strong>building &amp; merging</strong>  services, &amp; dealing wih <strong>data.</strong>
          </p>
          <div className=" lg:flex-grow justify-end h-[100px] ">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Quick Mail?
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
            <div>
              <div className=" text-center m-8">
              <a href="https://www.github.com/teddywaweru" target="_blank" rel="noreferrer">
              <FontAwesomeIcon  className="fill-current text-gray-500 text-right m-4" size='3x' icon={faLinkedin}/>
              <FontAwesomeIcon  className="fill-current text-gray-500 text-right m-4" size='3x' icon={faGithub}/>
              </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rounded-md lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <div className="rounded-md lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./coding.svg"
          />
        </div> */}

      </div>
    </section>
  );
}