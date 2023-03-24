

document.getElementById('sidebar_toggler').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('show')
})


document.getElementById("search_button").addEventListener("click", function () {
    document.getElementById("search_box").classList.add("show");
  });
  
  document.getElementById("search_close").addEventListener("click", function () {
    document.getElementById("search_box").classList.remove("show");
  });


  
document.getElementById("colorFlipper").addEventListener("click", function () {
  let hexCode = "#";

  hexCode += (Math.random()*100).toString(16).substring(3, 9);

  document.body.style.background = hexCode;
});

setInterval(function () {
    let hexCode = "#";
      hexCode += (Math.random()*100).toString(16).substring(3, 9);
        document.body.style.background = hexCode;
 },500)



 
 const calcy = () =>{
  let ban = document.getElementById('ban').value;
  let maths = document.getElementById('maths').value;
  let eng = document.getElementById('eng').value;
  let phy = document.getElementById('phy').value;
  let grades="";
 
let totalGrades = parseFloat(ban) + parseFloat(maths) + parseFloat(eng) + parseFloat(phy);
 

let perc = (totalGrades/400) * 100;

debugger;

 if(perc >= 80 && perc <= 100){
   grades='A+';
 } else if(perc >=70 && perc < 80){
    grades='A';
 } else if(perc >=60 && perc < 70){
    grades='A-';
  } else if(perc >=50 && perc < 60){
    grades='B';
  } else if(perc >=40 && perc < 50){
    grades='C';
  } else if(perc >=33 && perc < 40){
    grades='D';
  } else{
    grades='F';
  }

  if(perc >= 33){
    document.getElementById('showData').innerHTML = `Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass.`;
  }
  else{
    document.getElementById('showData').innerHTML = `Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`;
  }

 }

 