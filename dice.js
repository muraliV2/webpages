function rolldice()
{
let bx = document.getElementById("bx").value
let values =[]
let images =[]
let btn = document.getElementById("btn")
let im = document.getElementById("diceimages")
let val = document.getElementById("diceresult")
    for(let i =1;i<=bx;i++)
    {        
    const value = Math.floor(Math.random() * 6 + 1); 
        images.push(`<img src="dice-images/${value}.png">`)
        values.push(value);
  }
   val.textContent =`dice : ${values}`
   im.innerHTML = images.join('')   
}
 




