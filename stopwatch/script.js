let Reqnum = 0;
let interval = null;
let time = document.getElementById("time")
function padStart(value)
{
    return String(value).padStart(2,"0")
}

function Increment()
{
    const minutes = Math.floor(Reqnum /60);
    const Seconds = Reqnum % 60;
    time.innerHTML =    `${padStart(minutes)} : ${padStart(Seconds)}`

}

function ad()
{
    Reqnum++;
    Increment();
}
function start()
{
    if(interval) stop()
interval = setInterval(ad,1000)
}
function stop()
{
clearInterval(interval)
}
function reset()
{
    stop()
     Reqnum = 0;
    Increment()


}
