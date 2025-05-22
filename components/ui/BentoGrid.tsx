"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import MagicButton from "./MagicButton"
import { IoCopyOutline } from "react-icons/io5"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useMemo } from "react"

// Importações dinâmicas para componentes que podem usar APIs do browser
const BackgroundGradientAnimation = dynamic(
  () =>
    import("./GradientBg").then((mod) => ({
      default: mod.BackgroundGradientAnimation,
    })),
  { ssr: false }
)
const GlobeDemo = dynamic(
  () => import("./GridGlobe").then((mod) => ({ default: mod.GlobeDemo })),
  { ssr: false }
)

const ConfettiAnimation = ({ isActive }: { isActive: boolean }) => {
  const confettiParticles = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1 + Math.random()}s`,
        transform: `rotate(${Math.random() * 360}deg)`,
        key: i,
      })),
    []
  ) // empty deps: só gera no client

  const starParticles = useMemo(
    () =>
      [...Array(15)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        fontSize: `${0.5 + Math.random() * 1}rem`,
        key: `star-${i}`,
      })),
    []
  )

  if (!isActive) return null

  return (
    <div className="absolute -bottom-5 right-0 w-96 h-96 pointer-events-none">
      <div className="relative w-full h-full">
        {confettiParticles.map((style) => (
          <div
            key={style.key}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded animate-bounce"
            style={style}
          />
        ))}
        {starParticles.map((style) => (
          <div
            key={style.key}
            className="absolute text-yellow-400 animate-ping"
            style={style}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  )
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopy = async () => {
    if (!mounted) return

    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText("19matheushenrique03@gmail.com")
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      } else {
        // Fallback para navegadores mais antigos
        fallbackCopyTextToClipboard("19matheushenrique03@gmail.com")
      }
    } catch (err) {
      console.error("Falha ao copiar texto: ", err)
      fallbackCopyTextToClipboard("19matheushenrique03@gmail.com")
    }
  }

  const fallbackCopyTextToClipboard = (text: string) => {
    if (typeof document === "undefined") return

    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      const successful = document.execCommand("copy")
      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      }
    } catch (err) {
      console.error("Fallback: Não foi possível copiar", err)
    }

    document.body.removeChild(textArea)
  }

  if (!mounted) {
    return (
      <div
        className={cn(
          "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 relative rounded-3xl border bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <Image
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center")}
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            )}
          </div>
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 relative rounded-3xl border  bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          )}
        </div>
        {id === 6 && BackgroundGradientAnimation && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && GlobeDemo && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["React Js", "Next Js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base
                  opacity-50 lg:opacity-100 rounded-lg text-center
                  bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Tailwind", "Node Js", "Postgresql"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base
                  opacity-50 lg:opacity-100 rounded-lg text-center
                  bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <ConfettiAnimation isActive={copied} />
              <MagicButton
                title={copied ? "Email copiado" : "Copie meu Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
