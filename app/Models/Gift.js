


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
              <div class="card elevation-4">
                <img src="${this.url}" alt="">
                <p class="text-center">${this.tag}</p>
              </div>
            </div>
    `
  }
}