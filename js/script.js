
let table;
let turno = 0;


function creazioneTabella() {
    table = [[],[],[],[],[],[],[]];
    for (let i=0; i<7; i++){
        for (let j=0; j<6; j++){
            table.push("-");
        }
    }
}


function giocata(id){
let i=0;

do{

    if (i!=0){
        i++;
    }
   
}while (table[0][i] == "-");

let riga = i.toString();

let bottone = document.getElementById(id+riga);

bottone.classList.add("text-danger");

 
}