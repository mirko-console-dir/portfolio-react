import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './EmblaCarouselAutoplay'


type EmblaCarouselProps = {
  slides: ReactNode[]
  options?: EmblaOptionsType
  isAutoplay?: boolean
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = (props) => {
  const { slides, options, isAutoplay } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(), 
    Autoplay({ 
      playOnInit: isAutoplay ? true  : false, 
      delay: 4000 
    })
  ])

  const { toggleAutoplay } = useAutoplay(emblaApi)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)


  const handlePrevButtonClick = () => {
    onPrevButtonClick()
    if(isAutoplay) toggleAutoplay()
  }

  const handleNextButtonClick = () => {
    onNextButtonClick()
    if(isAutoplay) toggleAutoplay()
  }

  const handleDotClick = (index: number) => {
    onDotButtonClick(index)
    if(isAutoplay) toggleAutoplay()
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons invisible lg:visible">
          <PrevButton onClick={handlePrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={handleNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots gap-2">
          {scrollSnaps.map((_, index: number) => (
              <DotButton
                key={index}
                onClick={() => handleDotClick(index)}
                className={'neumorphism__out embla__dot'.concat(
                  index === selectedIndex ? ' neumorphism__in embla__dot--selected' : ''
                )}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
