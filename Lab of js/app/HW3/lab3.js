// Task 1 start
let inputText = document.querySelector('.inputText') // input T1
let buttonText = document.querySelector('.buttonText') // buttonT1
buttonText.onclick = function(){
    let notArrText = inputText.value;
    notArrText = notArrText.replace(/\s+/g, ' ').trim();
    let arr = notArrText.toString().split(' ');
    const arrLength = arr.length;
    let res = new Array(arrLength);
    for( let i = 0; i < arrLength; i++){
        const wordLength = arr[i].length;
        for( let k = 0; k < wordLength; k++){
            if(false == isNaN(arr[i][k])){
                const num = +arr[i][k];
                res[num-1] = arr[i];
            }
        }
    }
    let otvetText = res.join(' ');
    document.getElementById('otvetText').innerHTML = "Обработанная строка: " + otvetText;
}
// Task 1 end
// Task 2 start   X,O,X,O,X,O,O,O,X = X    O,X,O,X,O,X,X,X,O = O    X,X,O,X,O,X,X,X,O = N
let inputZero = document.querySelector('.inputZero') // input T1
let buttonZero = document.querySelector('.buttonZero') // buttonT2
buttonZero.onclick = function(){
    let notArrZero = inputZero.value;
    let arr = notArrZero.toString().split(',');
    let otvetZero = winCheck(arr);
    if(otvetZero == 1){
        document.getElementById('otvetZero').innerHTML = "Победили X";
    }
    if(otvetZero == 2){
        document.getElementById('otvetZero').innerHTML = "Победили O";
    }
    if(otvetZero == 0){
        document.getElementById('otvetZero').innerHTML = "Ничья";
    }
    if(otvetZero == -1){
        document.getElementById('otvetZero').innerHTML = "заполнено не до конца";
    }
}

function winCheck(field){
    let w = 0
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,4],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < 8; i++) {
        if (field[win[i][0]] == "X" && field[win[i][1]] == "X" && field[win[i][2]] == "X") {
            w = 1;
            
        }
        if (field[win[i][0]] == "O" && field[win[i][1]] == "O" && field[win[i][2]] == "O"){
            w = 2;
             
        } 
    }
    for (let i = 0; i < 9; i++){
        if((field[i] != "X" && field[i] != "O") ){console.log(i);
             w = -1;
        }
    }
    console.log(field);
    return w;
}
// Task 2 end
// Task 3 start
function chairs(arr) {
    const arrLength = arr.length;
    const needChairs = arr[arrLength - 1];
    const roomsCount = arrLength - 1;
    let chairsHave = 0;
    let chairsTake = new Array();
    for(let i = 0; i < roomsCount; i++){
        if(chairsHave != needChairs){
        const peopleInRoom = arr[i][0].length;
        const chairsInRoom = arr[i][1];
        const availableChairs = chairsInRoom - peopleInRoom;
        if(availableChairs > 0){
            if((chairsHave + availableChairs) > needChairs){
                chairsTake.push(needChairs - chairsHave);
                chairsHave = needChairs;
            }
            else{
                chairsTake.push(availableChairs);
                chairsHave += availableChairs;
            }
        }
        else{
            chairsTake.push(0);
        }
        }
        else{
            break;
        }
    }
    chairsTake.join(', ');
    if(chairsHave < needChairs){
        document.getElementById('otvetChair').innerHTML = "Порядок взятия стульев: " + chairsTake;
        document.getElementById('otvetChairTwo').innerHTML = "но стульев не хватило!";
    }
    else{
        document.getElementById('otvetChair').innerHTML = "Порядок взятия стульев: " + chairsTake;
        document.getElementById('otvetChairTwo').innerHTML = "Стульев достаточно!";
    }
}