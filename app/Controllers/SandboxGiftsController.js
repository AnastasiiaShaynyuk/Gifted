import { appState } from "../AppState.js";
import { sandboxGiftsService } from "../Services/SandboxGiftsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawGift() {
  console.log('drawing')
  let gift = appState.gifts
  let template = ''
  gift.forEach(g => template += g.GiftTemplate);
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
}