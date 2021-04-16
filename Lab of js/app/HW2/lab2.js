//Task 1 start code
let masiv;

let inputMasiv = document.querySelector('.inputMasiv')
let button1 = document.querySelector('.button1')

button1.onclick = function()
{
    masiv= inputMasiv.value;
    let rab = masiv.toString().split(';');
    let kolStr = rab.length;
    for (let index = 0; index < kolStr; index++) {
        let rab2 = rab[index];
       rab[index] = rab2.toString().split(',');
    }
    for (let index = 0; index < rab.length; index++) {
        for (let index2 = 0; index2 < rab[index].length; index2++) 
        {
            let rab3 = +rab[index][index2];
            rab[index][index2]=rab3;
        }
    }
    console.log(rab);
    otvet1= SumOfMin(rab,kolStr);
    document.getElementById("otvet1").innerHTML = "Сума минимальних в строках - "+ otvet1;
}

function SumOfMin(rab,kolStr)
{
    let summin = 0;
    for (let index = 0; index < kolStr; index++) {
        rab[index].sort((a, b)=>a - b );
        summin = summin + rab[index][0];
    }
    return summin;
}
//Task 1 end code

//Task 2 start code
let masiv2;
let otvet2;

let inputMasiv2 = document.querySelector('.inputMasiv2')
let button2 = document.querySelector('.button2')

button2.onclick = function()
{
    masiv2 = inputMasiv2.value;
    let arr = masiv2.toString().split(',');
    let str_kol = arr.length;
    for (let index = 0; index < str_kol; index++) {
        let temp = +arr[index];
        arr[index]=temp;
    }
    if(str_kol>= 2)
    {
        otvet2=TwoOfMax(arr);
        document.getElementById("otvet2").innerHTML= " Два самих больших числа в масиве " + otvet2;
    }
    else
    {
        document.getElementById("otvet2").innerHTML="Необходимо ввести минимум два числа!";
    }
}
function TwoOfMax(array)
{
    let result = [0,0];
    array.sort((a,b)=> b-a);
    result[0]=array[1];
    result[1]=array[0];
    return result;
}
// Task 2 end code

// Task 3 start code
let masiv3;
let otvet3;

let inputMasiv3 = document.querySelector('.inputMasiv3')
let button3 =document.querySelector('.button3')

button3.onclick = function()
{
    masiv3 = inputMasiv3.value;
    masiv3 = masiv3.replace(/\s+/g,' ').trim();
    otvet3=ShortWord(masiv3);
    document.getElementById("otvet3").innerHTML = "Длина самого короткого слова - " + otvet3;
}
function ShortWord(string) {
    let result1 = 0;
    let ArrOfL =  new Array();
    let tempArr = masiv3.toString().split(' ');
    for (let index = 0; index < tempArr.length; index++) {
        ArrOfL[index]=tempArr[index].length;
    }
    ArrOfL.sort((a, b)=>a-b);
    result = ArrOfL[0];
    return result;
}
//Task 3 end code