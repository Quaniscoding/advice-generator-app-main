const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");
document.getElementById('btnGetRandom').onclick = async function () {
    audio.play();
    const response = await fetch("https://api.adviceslip.com/advice");
    const getAdvice = await response.json();
    let id = getAdvice.slip.id;
    let advice = getAdvice.slip.advice;
    document.getElementById("advice-id").innerHTML = `Advice #${id}`;
    document.getElementById("advice-text").innerHTML = `${`"${advice}"`}`;
}