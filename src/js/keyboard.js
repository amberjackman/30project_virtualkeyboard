export class Keyboard {
  #swichEl;
  #fontSelectEl;
  #containerEl;
  #keboardEl;
  #inputGroupEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#swichEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown",(event) => {
      // console.log(event.code);
      this.#inputGroupEl.classList.toggle(
        "error",
        /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/.test(event.key)
      );

      this.#keboardEl 
        .querySelector(`[data-code=${event.code}]`)
        ?.classList.add("active");
 
    });

    document.addEventListener("keyup",(event) => {
      this.#keboardEl 
        .querySelector(`[data-code=${event.code}]`)
        ?.classList.remove("active");
    
    });
  }

  
  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : " "
    );
  }
  

  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value
  }

}