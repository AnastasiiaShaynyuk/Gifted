import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { Pop } from "../Utils/Pop.js";
import { sandboxGiftsApi } from "./AxiosService.js"



class SandboxGiftsService {

  async getGift() {
    const res = await sandboxGiftsApi.get('')
    console.log('[get gifts]', res.data);
    appState.gifts = res.data.map(g => new Gift(g))
    // appState.gifts = new Gift(res.data)
    // console.log('appState gifts')

  }

  async openGift(giftId) {
    try {
      let openedGift = appState.gifts.find(g => g.id == giftId)
      openedGift.opened = true
      appState.emit('gifts')
      let res = await sandboxGiftsApi.put(`${giftId}`, openedGift)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createGift(formData) {
    // console.log(formData);
    const res = await sandboxGiftsApi.post('', formData)
    console.log(res.data)
    appState.gifts.unshift(new Gift(res.data))
    appState.emit('gifts')
    console.log(appState.gifts)

  }
}

export const sandboxGiftsService = new SandboxGiftsService()