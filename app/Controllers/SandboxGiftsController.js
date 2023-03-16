import { appState } from "../AppState.js";
import { sandboxGiftsService } from "../Services/SandboxGiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGift() {
  console.log('drawing')
  let gift = appState.gifts
  let template = ''
  gift.forEach(g => template += g.opened ? g.GiftTemplate : g.ClosedGiftTemplate);
  // gift.forEach(g => template += g.GiftTemplate);
  setHTML('gifts', template)
}


export class SandboxGiftsController {
  constructor() {
    console.log('hello from sandbox controller');
    this.getGift()
    appState.on('gifts', _drawGift)
  }

  async getGift() {
    try {
      await sandboxGiftsService.getGift()
    } catch (error) {
      console.error(error)
    }
  }

  async openGift(giftId) {
    try {
      await sandboxGiftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createGift() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      const formData = getFormData(form)
      // @ts-ignore
      form.reset()
      await sandboxGiftsService.createGift(formData)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}