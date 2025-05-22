import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div
        className="w-full absolute left-0 -bottom-72
      min-h-96"
      >
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-50"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[60vw]">
          Pronto para levar <span className="text-purple">sua</span> presença
          digital para o próximo nível?
        </h1>

        <p
          className="text-white-200 md:mt-10 my-5
        text-center"
        >
          Entre em contato hoje mesmo e vamos discutir como posso ajudar você a
          atingir seus objetivos.
        </p>
        <a
          href="https://wa.me/31991826861?text=Olá%21%20Vi%20seus%20serviços%20no%20site%2c%20gostaria%20de%20mais%20mais%20informações%21"
          target="_blank"
        >
          <MagicButton
            title="Entrar em Contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div
        className="flex mt-16 md:flex-row flex-col
      justify-between items-center"
      >
        <p
          className="md:text-base text-sm
        md:font-normal font-light"
        >
          Copyright © 2025 Mh Developer
        </p>
        <div
          className="flex items-center md:gap-3
        gap-6"
        >
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex
            justify-center items-center backdrop-filter
            backdrop-blur-lg saturate-180 bg-opacity-75
            bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="blank">
                <Image
                  src={profile.img}
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                  priority
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
