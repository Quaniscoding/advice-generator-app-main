
document.getElementById('btnGetRandom').onclick = async function () {
    const response = await fetch("https://api.adviceslip.com/advice");
    const getAdvice = await response.json();
    let id = getAdvice.slip.id;
    let advice = getAdvice.slip.advice;
    document.getElementById("advice-id").innerHTML = `Advice #${id}`;
    document.getElementById("advice-text").innerHTML = `${`"${advice}"`}`;
}