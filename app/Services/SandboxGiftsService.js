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
      let res = await sandboxGiftsApi.put(`${giftId}`, openedGift)
      let giftIndex = appState.gifts.findIndex(g => g.id == giftId)
      // NOTE This is SUPER important! (Otherwise your page will draw old information)
      appState.gifts.splice(giftIndex, 1, new Gift(res.data))
      appState.emit('gifts')
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createGift(formData) {
    console.log('FORM DATA', formData);
    const res = await sandboxGiftsApi.post('', formData)
    console.log('RES DATA', res.data)
    appState.gifts.unshift(new Gift(res.data))
    appState.emit('gifts')
    console.log(appState.gifts)

  }
}

export const sandboxGiftsService = new SandboxGiftsService()