import { initBackgroundAnimation } from './backgroundAnimation.js'
import MicroModal from 'micromodal'
import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButtons.js'

initBackgroundAnimation()

MicroModal.init({ awaitCloseAnimation: true, disableFocus: true, disableScroll: true })

const OPTIONS = { loop: true }

// A helper to initialize one Embla instance + its controls
function initEmblaCarousel(emblaNode) {
    const viewportNode = emblaNode.querySelector('.embla__viewport')
    const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
    const nextBtnNode = emblaNode.querySelector('.embla__button--next')
    const dotsNode = emblaNode.querySelector('.embla__dots')

    // 1) Create the Embla instance
    const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

    // 2) Wire up prev/next buttons
    const removePrevNext = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode)

    // 3) Wire up dot buttons
    const removeDotHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode)

    // 4) Clean up when Embla is destroyed
    emblaApi.on('destroy', () => {
        removePrevNext()
        removeDotHandlers()
    })

    return emblaApi
}

// Find *every* carousel on the page and init it
document.querySelectorAll('.embla').forEach(initEmblaCarousel)
