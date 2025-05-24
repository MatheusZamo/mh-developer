"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { useEffect, useRef, useState, useCallback } from "react"

type CardItem = {
  quote: string
  name: string
  title: string
}

type InfiniteMovingCardsProps = {
  items: CardItem[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      )
    }
  }, [direction])

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      let duration = "20s"
      if (speed === "normal") duration = "40s"
      else if (speed === "slow") duration = "80s"
      containerRef.current.style.setProperty("--animation-duration", duration)
    }
  }, [speed])

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollerRef.current!.appendChild(duplicatedItem)
      })
      getDirection()
      getSpeed()
      setStart(true)
    }
  }, [getDirection, getSpeed])

  useEffect(() => {
    addAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addAnimation, items])

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] p-5 md:p-16 md:w-[60vw] dark:border-zinc-800 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={idx}
            style={{
              background: "rgb(4,7,29)",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="md:text-lg relative z-20 text-lg leading-[1.6] font-normal text-neutral-800 dark:text-white">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <div className="me-3">
                    <div className="me-3">
                      <Image
                        src="/profile.svg"
                        alt="profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl leading-[1.6] font-bold text-neutral-500 dark:text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-white-200">
                      {item.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
