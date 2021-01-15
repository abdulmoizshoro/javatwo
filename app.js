//.....Changing case.....//
      //.....01.....//
var enterName = prompt("Enter your name")
alert(enterName.toUpperCase())

      //.....02.....//

var fullName = prompt("Enter your name")
var spaceFind = fullName.indexOf(" ");

var firstName = fullName.slice(0 ,1).toUpperCase() + fullName.slice(1,spaceFind);

var lastName = fullName.slice(++spaceFind,++spaceFind).toUpperCase() + fullName.slice(spaceFind);

document.write(firstName)
document.write(" ")
document.write(lastName)


//......Strings: measuring length and extracting parts......//
      //.....01.....//
var mobileModel = prompt("Enter Fav Mobile Model")
alert(mobileModel.length())

      //.....02.....//
var str = prompt("Enter anything")
var lastLetter = str.slice(str.length-1)
alert(lastLetter)

//....Strings: finding segment....//
      //.....01.....//
var word = "Pakistani"
var findIndex = word.indexOf("n")
document.write(findIndex)

      //.....02.....//
var userName = prompt("Enter your name")
for (var i=0; i < userName.length; i++){
if(userName.charAt(i) === "!" ||userName.charAt(i) === "@" ){
    prompt("enter a valid username")
}
}

      //.....03.....//
      function count(i, j) 
      {
      i += '';
      j += '';
  
      if (j.length <= 0) 
      {
          return i.length + 1;
      }
    subStr = j.replace('&', '\\');
         return (i.match(new RegExp(subStr, 'gi')) || []).length;
       
      }
   
  console.log(count("The quick brown fox jumps over the lazy dog", 'the'));


//...Strings: finding a character at a location....//
      //.....01.....//
var word1 = "Pakistani"
document.write(word1.charAt(3))

//...Strings: replacing characters....//
      //.....01.....//
var word2 = "Hyderabad"
var intoArray = word2.split()
intoArray.splice(0,5,"Islam")
document.write(intoArray.splice(0,5,"Islam")+word2.slice(5))

      //.....02.....//
var message = "Ali and Sami are best friends. They play cricket and football together."
var changedMessage = message.replace(/and/g,"&")
document.write(changedMessage)

   //...Rounding numbers....//
      //.....01.....//
var enterNum = +prompt("Enter positive number")
a
document.write(enterNum+"</br>")
b
document.write(Math.round(enterNum)+"</br>")
c
document.write(Math.floor(enterNum)+"</br>")
d
document.write(Math.ceil(enterNum)+"</br>")

      //.....02.....//
var enterNum = +prompt("Enter negative number")
//a
document.write(enterNum+"</br>")
//b
document.write(Math.round(enterNum)+"</br>")
//c
document.write(Math.floor(enterNum)+"</br>")
//d
document.write(Math.ceil(enterNum)+"</br>")
      
//...Generating random numbers....//

      //.....01.....//
var dice = Math.round(Math.random()*6)
document.write(dice)

      //.....02.....//
var player1 = prompt("Player 1. Head or Tales?")
var player2 = prompt("Player 2. Head or Tales?")

var random = Math.round(Math.random()*2);

if (random == 1)
{
    alert("Tails Wins!")
}
else if(random == 2)
{
    alert("Heads Wins!")
}
else if(random == 0)
{
    alert("Match Draw!")
}
document.write(random)

      //.....03.....//
 var randomNumber = Math.round(Math.random()*6)
 var userNum = prompt("Enter Num Form 1-10")
if (randomNumber == userNum){
    alert("Congratulate!")
}

//...Converting strings to integers and decimals....//
      //.....01.....//
var weight = prompt("Enter your weight")
var weightToNumber = Number(weight)
document.write(weightToNumber)

//...Converting strings to numbers, numbers to string....//
      //.....01.....//
var numberString = "472"
var numberStringToNumber =  Number(numberString)
document.write(numberStringToNumber+" "+"type is"+" "+ typeof(numberStringToNumber))

      //.....02.....//
var num = 35.36
var numToString = num.toString()
document.write(numToString)


//...Controlling the length of decimals....//
var percentage = 30 / 45 * 100
var roundedPercentage = percentage.toFixed(2)
document.write(roundedPercentage)

