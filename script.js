const photos = [
  "shaina1.jpg",
  "shaina2.jpg",
  "shaina3.jpg",
  "shaina4.jpg",
  "shaina5.jpg",
  "shaina6.jpg",
  "shaina7.jpg",
  "shaina8.jpg",
  "shaina9.jpg",
  "shaina10.jpg",
  "shaina11.jpg",
  "shaina12.jpg",
  "shaina13.jpg",
  "shaina14.jpg",
  "shaina15.jpg",
  "shaina16.jpg",
  "shaina17.jpg",
  "shaina18.jpg",
  "shaina19.jpg",
  "shaina20.jpg",
  "shaina21.jpg",
  "shaina22.jpg",
  "shaina23.jpg",
  "shaina24.jpg",
  "shaina25.jpg",
  "shaina26.jpg",
  "shaina27.jpg",
  "shaina28.jpg",
  "shaina29.jpg",
  "shaina30.jpg"



];

const message = `Hey Shaina,

I made this little website for someone special.

Someone beautiful.
Someone adorable.
Someone who somehow manages to occupy my thoughts every day.

There's only one problem...

She still doesn't know how pretty she is.`;

const $ = id => document.getElementById(id);

$("notMeBtn").addEventListener("mouseenter", () => {
    $("notMeBtn").style.position = "fixed";
    $("notMeBtn").style.left =
        Math.random() * (window.innerWidth - 150) + "px";
    $("notMeBtn").style.top =
        Math.random() * (window.innerHeight - 80) + "px";
});

$("meBtn").onclick = () => {
    $("questionScreen").classList.add("hidden");
    $("introScreen").classList.remove("hidden");

    $("bgMusic").play().catch(() => {});

    typeWriter();
};

function typeWriter() {
    let i = 0;

    const timer = setInterval(() => {

        $("typewriter").textContent +=
            message[i] || "";

        i++;

        if (i >= message.length) {
            clearInterval(timer);
            $("continueBtn").classList.remove("hidden");
        }

    }, 25);
}

$("continueBtn").onclick = () => {

    $("introScreen").classList.add("hidden");
    $("heartScreen").classList.remove("hidden");

    createPetals();
    createHeart();
    buildGallery();
};

function createPetals() {

    const container = $("petals");

    for (let i = 0; i < 25; i++) {

        const petal = document.createElement("img");

        petal.src = "petal.png";

        petal.className = "petal";

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.width =
            (20 + Math.random() * 20) + "px";

        petal.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        petal.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(petal);
    }
}

function createHeart() {

    const container =
        document.getElementById("heartContainer");

    container.innerHTML = "";

    const isMobile =
        window.innerWidth < 768;

    const count =
        isMobile ? 60 : 80;

    const scale =
        isMobile ? 11 : 18;

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;

    for(let i = 0; i < count; i++){

        const t =
            (i / count) *
            Math.PI * 2;

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );

        const y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);

        const word =
            document.createElement("div");

        word.className =
            "heart-word";

        word.innerText =
            "I love you";

        word.style.left =
            (centerX + x * scale) + "px";

        word.style.top =
            (centerY - y * scale) + "px";

        word.style.animationDelay =
            (i * 0.05) + "s";

        container.appendChild(word);
    }
}
window.addEventListener("resize", () => {

    const heartScreen =
        document.getElementById("heartScreen");

    if(
        !heartScreen.classList.contains("hidden")
    ){
        createHeart();
    }

});

function buildGallery() {

    const grid = $("galleryGrid");

    if (grid.children.length > 0) return;

    photos.forEach((src, index) => {

        const card = document.createElement("div");

        card.className = "polaroid";

        card.style.transform =
            `rotate(${(index % 2 ? 1 : -1) * (Math.random() * 6)}deg)`;

        card.innerHTML =
            `<img src="${src}" alt="">`;

        card.onclick = () => {

            $("viewerImg").src = src;

            $("photoViewer")
                .classList.remove("hidden");
        };

        grid.appendChild(card);
    });
}

$("galleryBtn").onclick = () => {
    $("galleryModal").classList.remove("hidden");
};

$("reasonsBtn").onclick = () => {
    $("reasonsModal").classList.remove("hidden");
};

$("secretBtn").onclick = () => {
    $("secretModal").classList.remove("hidden");
};

[
    "galleryModal",
    "photoViewer",
    "reasonsModal",
    "secretModal"
].forEach(id => {

    $(id).onclick = e => {

        if (e.target === $(id)) {
            $(id).classList.add("hidden");
        }

    };
});