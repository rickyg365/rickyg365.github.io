const btn = document.getElementById("ripple-btn");

let playAnimation = (e) => {
    const rect = e.target.getBoundingClientRect();

    const clientX = e.clientX;
    const clientY = e.clientY;

    const clientXinBtn = clientX - rect.x;
    const clientYinBtn = clientY - rect.y;

    // console.log(rect);
    // console.log(clientX);
    // console.log(clientY);
    // console.log(clientXinBtn);
    // console.log(clientYinBtn);

    const rippleDomElement = document.createElement("span");
    rippleDomElement.className = "ripple";

    rippleDomElement.style.top = `${clientYinBtn}px`;
    rippleDomElement.style.left = `${clientXinBtn}px`;

    const removeFunction = () => {
        btn.removeChild(rippleDomElement);
    };

    rippleDomElement.addEventListener("animationend", removeFunction);

    btn.appendChild(rippleDomElement);
};

btn.addEventListener("click", playAnimation);
