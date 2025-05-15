import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default Clients
