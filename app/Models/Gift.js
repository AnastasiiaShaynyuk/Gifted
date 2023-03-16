


export class Gift {
  forEach(arg0) {
    throw new Error("Method not implemented.")
  }
  constructor(data) {
    this.id = data.id
    this.tag = data.tag || 'Here is your Gift!'
    this.url = data.url || 'http://placekitten.com/200/300'
    this.opened = data.opened
  }

  get GiftTemplate() {
    return `
    <div class="col-4 p-2">
              <div class="card elevation-4 card-height">
                <img src="${this.url}" alt="">
                <p class="text-center p-0">${this.tag}</p>
                <div class ="text-end me-1 mb-1">
                <button class = "btn btn-outline-danger" onclick="app.sandboxGiftsController.delete('${this.id}')"><i class="mdi mdi-delete"></i></button> 
                </div>
              </div>
            </div>
    `
  }

  get ClosedGiftTemplate() {
    return `
    <div class="col-4 p-2">
    <div class="card card-bg card-height elevation-4" onclick="app.sandboxGiftsController.openGift('${this.id}')">
      <div class="gray-card">
        <h6 class="mt-2">${this.tag}</h6>
        <p class="mb-2 text-dark lighten-20">Click to Open</p>
      </div>
    </div>
  </div>`
  }
}