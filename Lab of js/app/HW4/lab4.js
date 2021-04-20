//Task 1 start

let buttonIp = document.querySelector('.buttonIp')
buttonIp.onclick = function(){
    let firstIp = inputIpFirst.value.split('.');
    let secondIp = inputIpSecond.value.split('.');
    console.log(firstIp);
    console.log(secondIp);
    for (let i = 0; i < 4; i++) {
        firstIp[i] = +firstIp[i];
        secondIp[i] = +secondIp[i];
    }
    console.log(firstIp);
    console.log(secondIp);
    if(inValid(firstIp,secondIp)){
    let kolIpAdr = 0;
    kolIpAdr += secondIp[3] > firstIp[3] ? (secondIp[3] - firstIp[3]) : kolIpAdr;
    kolIpAdr += secondIp[2] < firstIp[2] ? kolIpAdr : secondIp[3] < firstIp[3] ? ((secondIp[2] - 1) - firstIp[2]) * 256 + (256 - (firstIp[3] - secondIp[3])) : (secondIp[2] - firstIp[2]) * 256;
    kolIpAdr += secondIp[1] < firstIp[1] ? kolIpAdr : secondIp[2] < firstIp[2] ? ((secondIp[1] - 1) - firstIp[1]) * 65536 + (65536 - (firstIp[2] - secondIp[2])) : (secondIp[1] - firstIp[1]) * 65536;
    kolIpAdr += secondIp[0] < firstIp[0] ? kolIpAdr : secondIp[1] < firstIp[1] ? ((secondIp[0] - 1) - firstIp[0]) * 16777216 + (16777216 - (firstIp[1] - secondIp[1])) : (secondIp[0] - firstIp[0]) * 16777216;
    document.getElementById('otvetIp').innerHTML = "Кількість доступних IP-адресов - "+kolIpAdr;
    }
}
function inValid(ipOne,ipTwo) {
    let result = true;
    const checkIpOne = ipOne.length == 4 && ipOne[0] <= 256 && ipOne[1] <= 256 && ipOne[2] <= 256 && ipOne[3] <= 256 && ipOne[0] >= 0 && ipOne[1] >= 0 && ipOne[2] >= 0 && ipOne[3] >= 0;
    const checkIpTwo = ipTwo.length == 4 && ipTwo[0] <= 256 && ipTwo[1] <= 256 && ipTwo[2] <= 256 && ipTwo[3] <= 256 && ipTwo[0] >= 0 && ipTwo[1] >= 0 && ipTwo[2] >= 0 && ipTwo[3] >= 0;
    result = checkIpOne ? true : false;
    result = checkIpTwo ? true : false;
    return result;
}

//Task 1 end

//Task 2 start

buttonMorse.onclick = function(){
    let morse = inputMorse.value.trim().split('   ');
    for (let i = 0; i < morse.length; i++) {
        morse[i] = morse[i].toString().split(' '); 
    }
    let result = morseDecode(morse);
    document.getElementById('otvetMorse').innerHTML = "Расшифровка: " + result.join(' ');
}
function morseDecode(code){
    const morseCode = ["0", "-----","1", ".----","2", "..---","3", "...--","4", "....-","5", ".....","6", "-....","7", "--...","8", "---..","9", "----.","a", ".-","b", "-...","c", "-.-.","d","-..","e", ".","f", "..-.","g", "--.","h", "....","i", "..","j", ".---","k", "-.-","l", ".-..","m", "--","n", "-.","o", "---","p", ".--.","q", "--.-","r", ".-.","s", "...","t", "-","u", "..-","v", "...-","w", ".--","x", "-..-","y", "-.--","z", "--..",".", ".-.-.-",",", "--..--","?", "..--..","!", "-.-.--","-", "-....-","/", "-..-.","@", ".--.-.","(", "-.--.",")", "-.--.-"];
    const wordKol = code.length;
    let res = new Array();
    for(let i = 0; i < wordKol; i++){
        const wordlength = code[i].length;
        let word = new Array();
        for(let k = 0; k < wordlength; k++){
            let cIndex = morseCode.findIndex(el => el == code[i][k]);
            word.push(morseCode[cIndex-1]);
        }
        res.push(word.join(''));
    }
    return res;
}
//Task 2 end

//Task 3 start


//Task 3 end