// Task 1 start code

let L,W,H;
let otvet1;

let inputL = document.querySelector('.inputL') // vvod l
let inputW = document.querySelector('.inputW') // vvod w
let inputH = document.querySelector('.inputH') // vvod h
let button1 = document.querySelector('.button1') // button1
 
button1.onclick = function()
{

  L= +inputL.value;
  W= +inputW.value;
  H= +inputH.value;
  if(L > 0 && W > 0 && H > 0)
  {
    if(L <= 1000 && W <= 1000 && H <= 1000)
    {
      otvet1=(((L*2)+(W*2))*H)/16;
      otvet1=Math.ceil(otvet1);
      document.getElementById("otvet1").innerHTML = "Для покраски комнаты нужно - " + otvet1 + " банок краски";
    }
    else
    {
      document.getElementById("otvet1").innerHTML = "Вы ввели значение превышающие 1000!";
    }
  }
  else
  {
    document.getElementById("otvet1").innerHTML = " Значение не может быть меньше либо равно 0!";
  }
}
//Task 1 end code

//Task 2 start code

let A1,A2,A3,B1,B2,B3;
let otvet2;

let inputA1 = document.querySelector('.inputA1')
let inputA2 = document.querySelector('.inputA2')
let inputA3 = document.querySelector('.inputA3')
let inputB1 = document.querySelector('.inputB1')
let inputB2 = document.querySelector('.inputB2')
let inputB3 = document.querySelector('.inputB3')
let button2 = document.querySelector('.button2')

button2.onclick = function()
{
  A1= +inputA1.value;
  A2= +inputA2.value;
  A3= +inputA3.value;
  B1= +inputA1.value;
  B2= +inputB2.value;
  B3= +inputB3.value;
  if(A1>0 && A2>2 && A3>0 && B1>0 && B2>0 && B3>0)
  {
    if(A1<=100 && A2<=100 && A3<=100 && B1<=100 && B2<=100 && B3<=100)
    {
      let arrA = [A1 , A2 , A3];
      let arrB = [B1 , B2 , B3];
      arrA.sort((a,b)=>a<b?1:-1);
      arrB.sort((a,b)=>a<b?1:-1);
      otvet2=arrA[0]*arrB[0]+arrA[1]*arrB[1]+arrA[2]*arrB[2];
      document.getElementById("otvet2").innerHTML = "Максимально возможная прибыль - "+otvet2;
    }
    else
    {
      document.getElementById("otvet2").innerHTML = "Вы ввели значение привышающие 100!";
    }
  }
  else
  {
    document.getElementById("otvet2").innerHTML = "Значения не могут быть равны или быть меньше 0!";
  }
}
//Task 2 end code

//Task 3 start code
let ticket,leftside,rightside;
let input_ticket = document.querySelector('.inputTicket')
let button3 = document.querySelector('.button3')

button3.onclick = function()
{
  ticket = input_ticket.value;
  let splitedticket = ticket.toString().split('');
  let arrTicket = splitedticket.map(Number)
  console.log(arrTicket)
  if(arrTicket.length == 6)
  {
    leftside=arrTicket[0]+arrTicket[1]+arrTicket[2];
    rightside=arrTicket[3]+arrTicket[4]+arrTicket[5];
    if(rightside==leftside)
    {
      document.getElementById("otvet3").innerHTML = "Поздравляем вы счастливчик!!!";
    }
    else
    {
      document.getElementById("otvet3").innerHTML = "К сожелению не повезло!";
    }
  }
  else
  {
    document.getElementById("otvet3").innerHTML = "Номер билета должен состоять из 6 цифр";
  }
}
// Task 3 end code