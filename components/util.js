const padTotwo = (number) => (number <=9 ? `0${number}` : number);

export const displayTime = (centiseconds) => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0){
        centiseconds = 0;
    }

    if (centiseconds < 100){
        return `00:00:${padTotwo(centiseconds)}`;
    }

    let remainCentiseconds = centiseconds %100;
    seconds = (centiseconds = remainCentiseconds) /100;

    if (seconds < 60){
        return `00:${padTotwo(seconds)}:${padTotwo(remainCentiseconds)}`;
    }
    
    let remaingSeconds = seconds % 60;
    minutes = (seconds - remaingSeconds) / 60;

    return `${padTotwo(minutes)} : ${padTotwo(remaingSeconds)} : ${padTotwo(remainCentiseconds)}`
}