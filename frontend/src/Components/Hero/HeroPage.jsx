import React from 'react'
import banner from "../../assets/banner.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HeroPage() {
  return (
    <div>
      <img src={banner} alt="" />
    </div>
  )
}

export default HeroPage
