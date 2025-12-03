let input = document.getElementById("hi")
let result = document.getElementById("res")
function reverse(str) {
    return str.split("").reverse().join("");
}

function work() {
    let value = input.value
    let rev = reverse(value);
    console.log(rev);

    if(value === rev)
    {
        result.textContent = `it is a palindrome ${value}=${rev}`
    }
    else
    {
         result.textContent = `it is  not a palindrome ${value}=${rev}`

    }
}
