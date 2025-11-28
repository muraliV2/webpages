//random password generator

function RandomPass(AllowedLength,AllowedLower,AllowedUpper,AllowedNumbers,AllowedSymbols)
{
    const LowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const UpperCaseChars ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const AllNumbers ='1234567890'
    const AllSymbols = '!@#$%^&*'

    let AllowedPass = "";
    let Password = " " ;
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
    return Password;
    // return AllowedPass

}
const AllowedLength = 10;
const AllowedLower = true;
const AllowedUpper = true;
const AllowedNumbers = true;
const  AllowedSymbol = true;



 const hi = RandomPass(AllowedLength,AllowedLower,AllowedUpper,AllowedNumbers,AllowedSymbol)


console.log(hi)

