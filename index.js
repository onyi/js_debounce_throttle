window.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");

    let debButton = document.createElement("button");
    debButton.innerHTML = "Click me for Debounce"

    const generatePsudoText = (text) => {
        let span = document.createElement("span");
        span.innerHTML = `<br> ${new Date().toUTCString()} - ${text || "Helloworld"} <br>`;
        return span;
    }

    debButton.addEventListener("click", debounce(1000, function() {
        console.log('Debounce button clicked!');
        root.appendChild(generatePsudoText(`Debounce action`))
    }));

    root.appendChild(debButton);




    let thButton = document.createElement("button");
    thButton.innerHTML = `Click me for Throttle!`;
    thButton.addEventListener("click", throttle(2000, function(){
        console.log(`Throttle button clicked!`);   
        root.appendChild(generatePsudoText("Throttle action"));
    }))

    root.appendChild(thButton);

})

const debounce = (delay, callback) => {

    let debTimeout;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(debTimeout);
        debTimeout = setTimeout(
            () => {
                callback.apply(context, args)
            }
        , delay);
    }
}

const throttle = (limit, callback) => {
    let isThrottling;
    return function(){
        let context = this;
        let args = arguments;
        if(!isThrottling){
            callback.apply(context, args);
            isThrottling = true;
            setTimeout( () => isThrottling = false, limit);
        }
    }
}

