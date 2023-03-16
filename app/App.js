import { GiphyController } from "./Controllers/GiphyController.js";
import { SandboxGiftsController } from "./Controllers/SandboxGiftsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  giphyController = new GiphyController()

  sandboxGiftsController = new SandboxGiftsController()
}

window["app"] = new App();
