
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();

    //seconds
    const seconds = now.getSeconds();

    const secondsDegrees = ((seconds * 360) / 60) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(seconds);

    //minutes
    const minutes = now.getMinutes();

    const minutesDegrees = ((minutes * 360) / 60) + 90;

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    console.log(minutes);

    //hours
    const hours = now.getHours();

    const hoursDegrees = ((hours * 360) / 12 ) + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(hours);

}

setInterval(setDate, 1000);