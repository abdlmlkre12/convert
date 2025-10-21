const num = document.getElementById("text-inp")
const convertbtn=document.getElementById("convert-btn ")
let lengthText = document.getElementById("length-txt")
let volumeText = document.getElementById("volume-txt")
let massText = document.getElementById("mass-txt")

convertbtn.addEventListener("click" , function(){
    let number = num.value
    lengthText.textContent = number +" meters = " +((number *3.281).toFixed(2)) +" feet | " +number +" feet = " +((number/3.281).toFixed(2)) +" meters"
    volumeText.textContent = number +" liters = " +((number *0.264).toFixed(2)) +" gallon | " +number +" gallon = " +((number/0.264).toFixed(2)) +" liters"
    massText.textContent = number +" kilogram = " +((number *2.204).toFixed(2)) +" pound | " +number +" pound = " +((number/2.204).toFixed(2)) +" kilogram"

})
