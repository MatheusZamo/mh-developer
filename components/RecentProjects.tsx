"use client"

import { FaLocationArrow } from "react-icons/fa6"

import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import Image from "next/image"

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Pequena seleção de{" "}
        <span className="text-purple">projetos recentes</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title="Acessar" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[50vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    className=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  width={400}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        width={40}
                        height={40}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Acessar projeto
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
