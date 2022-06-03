import "../styles/styles.scss";

function InitApp() {
    const logMessage: string = "Up and running...";
    const message = document.createElement("p");
    message.innerHTML = logMessage;
    document.querySelector("body").append(message);
    console.log(logMessage);

    const img = new Image();
    img.onload = () => {
        console.log("Image loaded");
    };
    img.src = "image.jpg";
}

InitApp();
