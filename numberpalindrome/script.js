let res = document.getElementById("res")
function check()
{
let num = document.getElementById("inp").value
num = Number(num)
let rem=0;
let rev=0;
let copy = num
while(num>0)
{
rem = num % 10
    rev = rev * 10 + rem
num = Math.floor(num /10)
    console.log(rev)
}
if(copy == rev)
{
    res.textContent = "result : it is a palindrome number"
}
else
{
    res.textContent =  "result : it is not  a palindrome number"
}
}
