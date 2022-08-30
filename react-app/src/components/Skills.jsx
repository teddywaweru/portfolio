// import { BadgeCheckIcon } from "@heroicons/react/solid";
import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, technologies } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-2">
          <ChipIcon className="w-10 inline-block mb-4" />
          {/* <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-500 mb-4">
            Skills &amp; Technologies
          </h1> */}
        </div>
        <div className="flex flex-row-reverse">
          {/* <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 px-4 justify-center"> */}
          <div className=" lg:w-4/5 sm:mx-2 sm:mb-2 -mx-2 h-auto w-full">
            <h1 className=" sm:text-4xl text-3xl font-medium title-font text-green-500 w-full text-center">
            Skills
            </h1>
          </div>
          {/* <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 px-4 justify-center"> */}
          <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 h-auto w-full">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-green-500 w-full text-center">
            Technologies
            </h1>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-wrap lg:w-4/5 sm:mx-2 sm:mb-2 -mx-2 h-auto justify-center px-8">
            {technologies.map((technology) => (
              <div key={technology} className="p-1 sm:w-auto w-full">
                <div className="bg-gray-800 flex p-4  items-center rounded-3xl w-100">
                  {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                  <span className="title-font font-medium text-white">
                    {technology}
                  </span>
                </div>
              </div>
            ))}
          </div>
        {/* </div> */}
        {/* <div className=" flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 px-4 justify-center"> */}
            <div className="flex flex-wrap lg:w-4/5 sm:mx-2 sm:mb-2 -mx-2 justify-center">
              {skills.map((skill) => (
                <div key={skill} className="p-1 sm:w-auto w-full">
                  <div className="bg-gray-800 flex p-4 items-center rounded-3xl w-100">
                    {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className=" text-center">
          <p>
            Current tassle is with Django, React &amp; DevOps Frameworks 
          </p>
            <em>We're still growing here. I'm hopeful about putting <strong> Rust </strong> on this list. </em> 🤞
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
      </div>
    </section>
  );
}