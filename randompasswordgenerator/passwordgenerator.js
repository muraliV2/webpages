//random password generator

function RandomPass()
{
let AllowedLength = document.getElementById("len").value
let AllowedLower = document.getElementById("Lc").checked
let AllowedUpper = document.getElementById("Uc").checked
let AllowedNumbers = document.getElementById("numb").checked
let AllowedSymbols = document.getElementById("Sym").checked
let result1 = document.getElementById("res")


    const LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const UpperCaseChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const AllNumbers ='1234567890'
    const AllSymbols = '!@#$%^&*'

    let AllowedPass = "";
    let Password = "" ;
    AllowedPass += AllowedLower ? LowerCaseChars : "" ;
    AllowedPass += AllowedUpper ? UpperCaseChars :  "" ; 
    AllowedPass += AllowedSymbols ? AllSymbols : "" ;
    AllowedPass += AllowedNumbers ? AllNumbers : "" ;


    if(AllowedLength<=0)
    {
       return `('Please enter atleast one value)`
    }
    if(AllowedPass.length === 0)
    {
        return `(please use any one form)`
    }

    for(let i =1;i<=AllowedLength;i++)
    {
      let lg = Math.floor(Math.random() * AllowedPass.length);
      Password += AllowedPass[lg];
      

    }
    // return Password;
    // return AllowedPass
    result1.textContent = Password;

}


