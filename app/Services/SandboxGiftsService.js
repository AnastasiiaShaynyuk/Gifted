import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxGiftsApi } from "./AxiosService.js"



class SandboxGiftsService {
  async getGift() {
    const res = await sandboxGiftsApi.get('')
    console.log('[get gifts]', res.data);
    appState.gifts = res.data.map(g => new Gift(g))
    // appState.gifts = new Gift(res.data)
    // console.log('appState gifts')

  }

}

export const sandboxGiftsService = new SandboxGiftsService()