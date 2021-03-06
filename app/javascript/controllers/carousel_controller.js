import ApplicationController from './application_controller'

let totalImages

let currentScreenSize


/* This is the custom StimulusReflex controller for the Cart Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  static targets = ["image"]

    initialize() {
      this.showImage(0);
      totalImages = this.imageTargets.length;
    }

    nextImage(event) {
      this.hideImage(event);
      let nextI = this.index + 1
      if (document.getElementById(`image-${nextI}`) !== null) {
        this.showImage(nextI)
      } else {
        this.showImage(0);
      }
    }

    previousImage(event) {
      this.hideImage(event);
      let prevI = this.index - 1;
      console.log(this.index);
      if (this.index == 0) {
        this.showImage(totalImages - 1);
      } else {
        this.showImage(prevI);
      }
    }

    showImage(index) {
      this.index = index;
      this.imageTargets.forEach((el, i) => {
        if (index == i) {
          el.classList.toggle("hidden");
        }
      })
    }

    hideImage(event) {
      this.imageTargets.forEach((el, i) => {
        if (this.index == el.dataset.index) {
          el.classList.toggle("hidden");
        }
      });

    }
}
