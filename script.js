
const content = [
    {
        img: './assets/shared/icon-compatible.svg',
        header: "HIGHLY COMPATIBLE",
        about: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
    },
    {
        img: './assets/shared/icon-bluetooth.svg',
        header: "WIRELESS WITH BLUETOOTH",
        about: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
    },
    {
        img: './assets/shared/icon-battery.svg',
        header: "HIGH CAPACITY BATTERY",
        about: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
    },
    {
        img: './assets/shared/icon-light.svg',
        header: "RGB BACKLIT MODES",
        about: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
    }
]

var main = document.querySelector(".content")

for(var x of content){
    let text = `
    <div class="card flex">
        <div class="icon flex">
            <img src=${x.img} alt="Here may be icon">
        </div>
        <div>
            <h1>${x.header}</h1>
            <p>
                ${x.about}
            </p>
        </div>
    </div>
    `

    main.innerHTML += text
}