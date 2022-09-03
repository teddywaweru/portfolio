import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {/* TODO */}
          </p>
        </div>

        {/* <div>
          <div>
            <h2>Data Science Projects</h2>
          </div>
          <div>
            <h2>Systems Programming</h2>
          </div>
          <div>
            <h2>Hobby-related</h2>
          </div>


        </div> */}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            // <div className="flex h-80">
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
                target="blank">
                <div className="flex relative">
                  <img
                    width={600} height={400}
                    alt="gallery"
                    className="absolute inset-0 w-full object-cover object-center rounded-3xl h-full"
                    src={project.image}
                  />
                  <div className=" flex relative opacity-0 hover:opacity-95 transition-all duration-500">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 transition-all duration-500">
                    <h1 className="title-font text-lg font-semibold text- text-white mb-3">
                      {project.title}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      <em>{project.subtitle}</em> 
                    </h2>
                    <p className="leading-relaxed text-white">{project.description}</p>
                  </div>
                  <div className=" w-32">
                    {/* TODO */}
                  </div>
                  </div>
                </div>
              </a>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}