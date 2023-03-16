import { sandboxGiftsService } from "../Services/SandboxGiftsService.js";



export class SandboxGiftsController {
  constructor() {
    console.log('hello from sandbox controller');
    this.getGift()
  }

  async getGift() {
    try {
      await sandboxGiftsService.getGift()
    } catch (error) {
      console.error(error)
    }
  }
}