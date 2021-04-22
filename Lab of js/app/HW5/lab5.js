//Task 1 start
buttonCalc.onclick = function () {
    let calcNum = inputCalc.value.trim().split('');
    let action = '';
    let sepPos = -1;
    calcNum.includes("+") ? action = '+' : calcNum.includes("-") ? action = '-' : calcNum.includes("*") ? action = '*' : action = '/';
    sepPos = calcNum.indexOf(action);
    let firstNumber = calcNum.splice(sepPos+1);
    let secondNumber = calcNum.splice(0,sepPos);
    let leftR = +toNum(firstNumber);
    let rightR = +toNum(secondNumber);
    let result = 0;
    switch (action) {
        case "+":{
            result = leftR + rightR;
            break;
        }
        case "-":{
            result = leftR - rightR;
            break;
        }
        case "*":{
            result = leftR * rightR;
            break;
        }
        case "/":{
            result = leftR / rightR;
            break;
        }
    }
    document.getElementById('otvetCalc').innerHTML = "Результат вычисления в числах :" + result + ". Quipu :" + toQuipu(result);
}

function toNum(array){
    let number = "";
    let kol = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] == '@' ? kol++ : console.log('@');
        array[i] == '@' && i == array.length-1 ? (number = number.concat(kol), console.log(kol), kol = 0) : console.log('add last number');
        array[i] == '~' && array[i-1] == '@' ? (number = number.concat(kol),console.log(kol),kol = 0) : console.log('add number');
        array[i] == '~' && array[i-1] == '~' ? number = number.concat(0) : console.log('add 0');
    }
    return number;
}

function toQuipu(result){
    let resultStr = "";
    let numbers = "" + result;
    numbers = numbers.split('');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = +numbers[i];
        numbers[i] > 0 ? (resultStr = resultStr.concat('@'.repeat(numbers[i])), resultStr = resultStr.concat('~')) : resultStr = resultStr.concat('~');
    }
    return resultStr;
}
//Task 1 end
//Task 2 start 
let maxA = [];
function findMaxProd (num){
    maxA = [num,num];
    let arr = [num,0];
    let iter = num;
    while (iter != 1) {
            console.log("opachi");
            arr.splice(1)
            arr[0]--;
            iter = arr[0];
            arr[1] = num - arr[0];
            findMax(arr);
            if(arr[1] > 2){
            checkArr(arr,1);
            }else{
                if(arr[1] == 2){
                    arr.splice(1);
                    arr.push(1);
                    arr.push(1);
                }
            }
            findMax(arr);
    }
    console.log(arr + "   final");
    console.log(maxA);
    alert(maxA.join(' '));
}

function checkArr(arr,i){
    let temp = arr[i];
    while (arr[i] !=1 ) {
            arr.splice(i+1)
            arr[i]--;
            arr[i+1] = temp - arr[i];
            findMax(arr);
            if(arr[i+1] > 2){
            checkArr(arr,i+1);
            }else{
                if(arr[i+1] == 2){
                    arr.splice(i+1);
                    arr.push(1);
                    arr.push(1);
                }
            }
           findMax(arr);
    }
}
function findMax(arr){
    let m = 1;
    let a = new Array();
    arr.forEach(element => {
        m *= element;        
    });
    if(m > maxA[0]){
        maxA[0] = m;
        maxA.splice(1);
        maxA.push(arr.join(','));
    }
    if(m == maxA[0]){
        console.log(arr);
        maxA.push(arr.join(','));
    }
}
//Task 2 end
// Task 3 start

function clerk(arr){
    const arrL = arr.length;
    let serve = true;
    let twentyFife = 0;
    let fifty = 0;
    let sto = 0;
    let i = 0;
    while(i < arrL){
        
        
        switch (arr[i]) {
            case 25:
                twentyFife++;
                break;
            case 50:
                twentyFife >= 1 ? (fifty++ , twentyFife--) : serve = false;
                break;
            case 100:
                fifty >= 1 && twentyFife >= 1 ? (sto++ , fifty-- , twentyFife--) : twentyFife >= 3 ? (sto++ , twentyFife -= 3) : serve = false; 
                break;
        } 
        i++;
        console.log(twentyFife + "  " + fifty + "  " + sto);
    }
    serve == true ? alert("Все клиенты были обслужены!  :)") : alert("Не все клиенты были обслужены!  :(");
}

// Task 3 end