window.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");

    let debButton = document.createElement("button");
    debButton.innerHTML = "Click me for Debounce"

    const generatePsudoText = () => {
        let span = document.createElement("span");
        span.innerHTML = `<br> ${new Date().toUTCString()} - Helloworld <br>`;
        return span;
    }

    debButton.addEventListener("click", debounce(1000, function() {
        console.log('I am clicked!');
        root.appendChild(generatePsudoText())
    }));

    root.appendChild(debButton);
})

const debounce = (delay, callback) => {

    let debTimeout;
    console.log(`Debounce`)
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(debTimeout);
        debTimeout = setTimeout(
            () => {
                console.log(`Hi?`)
                callback.apply(context, args)
            }
        , delay);
    }
}

