
function Calculate() {
  var weight = document.getElementById("input1").value;
  var mercury = weight * 0.37;
  var venus = weight * 0.91;
  var earth = weight * 1.9;
   var mars = weight * 0.38;
  var moon = weight * 0.166;
  const jupiter = weight * 2.34;
  var neptune = weight * 1.12;
  var pluto = weight * 0.06;
  var saturn = weight * 1.06;
  var uranus = weight * 0.92;
 
  
  
  document.getElementById("m").innerHTML = "your weight is:" + mercury;
  document.getElementById("v").innerHTML = "your weight is:" + venus;
  document.getElementById("e").innerHTML = "your weight is:" + earth;
  document.getElementById("ma").innerHTML = "your weight is:" + mars;
  document.getElementById("mo").innerHTML = "your weight is:" + moon;
 document.getElementById("jup").innerHTML = "your weight is:" + jupiter;
  document.getElementById("np").innerHTML = "your weight is:" + neptune;
  document.getElementById("p").innerHTML = "your weight is:" + pluto;
  document.getElementById("s").innerHTML = "your weight is:" + saturn;
  document.getElementById("u").innerHTML = "your weight is:" + uranus;
 


}


function displaying(elementValue){
if(elementValue.value == "mer"){
document.getElementById('check1').style.display = "block"
document.getElementById('check2').style.display = "none"
document.getElementById('check3').style.display = "none"
document.getElementById('check4').style.display = "none"
document.getElementById('check5').style.display = "none"
document.getElementById('check6').style.display = "none"
document.getElementById('check7').style.display = "none"
document.getElementById('check8').style.display = "none"
document.getElementById('check9').style.display = "none"
document.getElementById('check10').style.display = "none"
}
if(elementValue.value == "ven"){
    document.getElementById('check2').style.display = "block"
    document.getElementById('check1').style.display = "none"
    document.getElementById('check3').style.display = "none"
    document.getElementById('check4').style.display = "none"
    document.getElementById('check5').style.display = "none"
    document.getElementById('check6').style.display = "none"
    document.getElementById('check7').style.display = "none"
    document.getElementById('check8').style.display = "none"
    document.getElementById('check9').style.display = "none" 
    document.getElementById('check10').style.display = "none"
    
    
}
if(elementValue.value == "ear"){
  document.getElementById('check3').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check5').style.display = "none"
    document.getElementById('check6').style.display = "none"
    document.getElementById('check7').style.display = "none"
    document.getElementById('check8').style.display = "none"
    document.getElementById('check9').style.display = "none"
    document.getElementById('check10').style.display = "none"
  
}
if(elementValue.value == "mar"){
  document.getElementById('check4').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check5').style.display = "none"
document.getElementById('check6').style.display = "none"
document.getElementById('check7').style.display = "none"
document.getElementById('check8').style.display = "none"
document.getElementById('check9').style.display = "none"
document.getElementById('check10').style.display = "none"}


if(elementValue.value == "moo"){
  document.getElementById('check5').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check6').style.display = "none"
document.getElementById('check7').style.display = "none"
document.getElementById('check8').style.display = "none"
document.getElementById('check9').style.display = "none"
document.getElementById('check10').style.display = "none"

  
}


if(elementValue.value == "jup"){
  document.getElementById('check6').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check5').style.display = "none"
document.getElementById('check4').style.display = "none"
document.getElementById('check7').style.display = "none"
document.getElementById('check8').style.display = "none"
document.getElementById('check9').style.display = "none"
document.getElementById('check10').style.display = "none"
}
if(elementValue.value == "nep"){
  document.getElementById('check7').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check5').style.display = "none"
document.getElementById('check6').style.display = "none"
document.getElementById('check8').style.display = "none"
document.getElementById('check9').style.display = "none"
document.getElementById('check10').style.display = "none"}

  

if(elementValue.value == "plu"){
  document.getElementById('check8').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check5').style.display = "none"
  document.getElementById('check6').style.display = "none"
  document.getElementById('check7').style.display = "none"
  document.getElementById('check9').style.display = "none"
  document.getElementById('check10').style.display = "none"
}


if(elementValue.value == "sat"){
  document.getElementById('check9').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check5').style.display = "none"
  document.getElementById('check6').style.display = "none"
  document.getElementById('check8').style.display = "none"
  document.getElementById('check7').style.display = "none"
  document.getElementById('check10').style.display = "none"
  

  
}
if(elementValue.value == "ur"){
  document.getElementById('check10').style.display = "block"
  document.getElementById('check1').style.display = "none"
  document.getElementById('check2').style.display = "none"
  document.getElementById('check3').style.display = "none"
  document.getElementById('check4').style.display = "none"
  document.getElementById('check5').style.display = "none"
  document.getElementById('check6').style.display = "none"
  document.getElementById('check7').style.display = "none"
  document.getElementById('check8').style.display = "none"
  document.getElementById('check9').style.display = "none"
  
}

}