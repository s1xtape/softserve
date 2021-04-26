//Task 1 start
class paginationHelper {
    #kolPerPage
    #arr = [];
    #pageC
    #arrKol
    constructor(content,contentOnPage){
        this.#kolPerPage = +contentOnPage;
        this.#arrKol = content.length;
        let i = 0
        while(i < this.#arrKol){
            this.#arr.push(content.splice(0,contentOnPage));
            i += contentOnPage;
        }
        this.#pageC = this.#arr.length;
    }
    pageCount(){
        return this.#pageC;
    }
    itemCount(){
        return this.#arrKol;
    }
    pageItemCount(num){
        return num >= this.#pageC || num < 0 ? -1 : this.#arr[num].length;
    }
    pageIndex(num){
        return num < 0 || num >= this.#arrKol ? -1 : (Math.ceil((num+1)/this.#kolPerPage)-1);
    }
}
var helper = new paginationHelper(['a','b','c','d','e','f'], 4);

//Task 1 end

//Task 2 start 
class fighter {
    #name
    #health
    #attack
    constructor(name,health,attack){
        this.#name = name;
        this.#health = +health;
        this.#attack = +attack;
    }
    getName(){
        return this.#name;
    }
    getHealth(){
        return this.#health;
    }
    getAttack(){
        return this.#attack;
    }
}

function declareWinner (fighterOne, fighterTwo, firstAttacker) {
    let name = [fighterOne.getName(),fighterTwo.getName()];
    let health = [fighterOne.getHealth(),fighterTwo.getHealth()];
    let attack = [fighterOne.getAttack(),fighterTwo.getAttack()];
    if (firstAttacker != fighterOne.getName()) {
        name.reverse();
        health.reverse();
        attack.reverse();
    }
    let flag = 0;
    while(flag == 0){
        health[1] -= attack[0];
        if(health[1] <= 0){
            flag = 1;
            break;
        }
        console.log(health);
        health[0] -= attack[1];
        if(health[0] <= 0){
            flag = 2;
            break;
        }
        console.log(health);
    }
    if(flag == 1){
        alert("WINNNNEEEER : " + name[0]);
    } 
    if(flag == 2) {
        alert("WINNNNEEEER : " + name[1]);
    }
    console.log(health);
}
let fF = new fighter ("Stalone", 1000, 100);
let sF = new fighter ("Schwarzenegger", 800, 150);
declareWinner(fF,sF,"Stalone");