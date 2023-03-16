import { sandboxGiftsApi } from "./AxiosService.js"



class SandboxGiftsService {
  async getGift() {
    const res = await sandboxGiftsApi.get('')
    console.log('[get gifts]', res.data);
  }

}

export const sandboxGiftsService = new SandboxGiftsService()