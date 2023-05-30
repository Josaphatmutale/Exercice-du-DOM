let btnDisparitionGauche = document.getElementById('disparition-gauche');
let btnApparitionGauche = document.getElementById('apparition-gauche');
let btnDisparitionDroite = document.getElementById('disparition-droite');
let btnApparitionDroite = document.getElementById('apparition-droite');
let partLeft = document.getElementById('part-left');
let partRight = document.getElementById('part-right');
let body = document.getElementById('baby');
let lien = document.getElementById('lien');
let btnMenu = document.getElementById('btn-menu');
let btnFermer = document.getElementById('btn-fermer');
// let autrePage = document.getElementById('autre-page-2');
let paragraphe = document.querySelector('.paragraphe2');


btnMenu.addEventListener('click', (e) => {
    if(lien.style.display = 'none'){
        console.log((lien.style.display = 'block') + (btnMenu.style.display = 'none') + (btnFermer.style.display ='block'));
    } 
//    setTimeout(() =>{
//     btnMenu.dispatchEvent(new MouseEvent('click'))
//    }, 2000)
})

btnFermer.addEventListener('click', (e) => {
    console.log((btnMenu.style.display = 'block') + (lien.style.display = 'none'))
})

btnDisparitionDroite.addEventListener('click', (e) => {
    if(partRight.style.display = 'block'){
        console.log((partRight.style.display = 'none') + (btnDisparitionDroite.style.display = 'none') + (btnApparitionDroite.style.display = 'block'));
    };
})


btnApparitionDroite.addEventListener('click', (e) =>{
   if(partRight.style.display = 'none'){
    console.log((partRight.style.display = 'block') + (btnDisparitionDroite.style.display = 'block') + (btnApparitionDroite.style.display = 'none'))
   }
})

btnDisparitionGauche.addEventListener('click', (e) =>{
    if(partLeft.style.display = 'block'){
        console.log((partLeft.style.display = 'none') + (btnDisparitionGauche.style.display = 'none') + (btnApparitionGauche.style.display = 'block') + (paragraphe.style.display = 'block'));
    }
})

btnApparitionGauche.addEventListener('click', (e) =>{
    if(partLeft.style.display = 'none'){
        console.log((partLeft.style.display = 'block') + (btnDisparitionGauche.style.display = 'block') + (btnApparitionGauche.style.display = 'none') + (paragraphe.style.display = 'none'));
    }
})


let identity = {
    nom : "Muntala",
    postnom : "Muleka",
    prenom : "Josaphat"
}

console.log(Object.values(identity));

let tableau = [
    nomDuPere = 'Mutale',
    postnomDuPere = 'Kisonde',
    prenomDuPere = 'François'
]
 let i;
console.log(tableau[0] +' '+' '+tableau[1]+" "+tableau[2])

for( i in tableau){
    console.log(i)
}
console.log(typeof(tableau[0]))
console.log(Array.isArray(tableau));

console.log(Date(Date.now()));


let number = [
    1,2,3,4,5,6,7,8,9,10
]

number.forEach(elem =>{
    console.log(elem)
})

let callBack = number.map(elem => {
    return elem + 1;
})
console.log(callBack);

let addition = number.reduce((addition1,addition2) =>{
    return addition1 + addition2
}, 0);
console.log(addition);

try{
    if(number[3]){
        console.log(`Le nombre vérifié est ${number[3]}`);
    } else 
       throw new Error("Il y a une erreur")
} catch (err) {
    console.error(err);
}
// console.log(`Le programme marche encore`)

console.log(`Le plus grand nombre entre 1 et 10 est` +' '+ Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(`Le plus petit nombre entre 1 et 10 est`+' '+ Math.min(1,2,3,4,5,6,7,8,9,10))

let identityOfPresident = [
     nameOfPresident = 'Laurant',
     postnameOfPresident = 'Désiré',
     lastnameOfPresident = 'Kabi',
     otherName = "Matata Ponyo Mapong"
]

identityOfPresident.forEach(callBackNameOfPresident =>{
    console.log(callBackNameOfPresident);
})

let filtre = identityOfPresident.filter(elementDeFiltre =>{
    return ((elementDeFiltre.length > 10) + (elementDeFiltre.length < 5));
})
console.log(filtre);


// let question = prompt(`Entrez quelque chose soit un a soit un b`);
// switch(question){
//     case 'a' :
//     console.log(`Vous avez choisi un ${question} donc vous pouvez y accéder`);
//     break;
//     case 'b' :
//     console.log(`Vous avez choisi un ${question} donc vous ne pouvez pas y accéder`);
//     break;
//     default :
//     console.log(`Vous n'avez choisi ni un a ni un b`);
//     break
// }

let fonction = (a,b) => (a+b)
console.log(fonction(1,1));

let dayOfBirthday = (param = 0) => param + 1;
console.log('Je suis né',dayOfBirthday(26),'Avril');
console.log(dayOfBirthday());

let popo = function(a,b){
    return a-b;
}
console.log(popo(4,5));


function diviserNombre (division1,division2){
    return division1 * division2
}
console.log(diviserNombre(25,23));

let parole = (nameOfAutor, postnameOfAutor, ageOfAutor, profession) =>`Je m'appelle ${nameOfAutor} ${postnameOfAutor}, j'ai ${ageOfAutor} ans et je suis un ${profession}
`
console.log(parole('Mutale','Muleka',22,'programmeur'))

// let func =  () => console.log("Bonsoir");
// setTimeout(func,5000);
// console.log("Bonjour");

let presentation = [
    nom = "Mutale",
    postnom = "Sankata",
    prenom = "Josias",
    age = 24
]
presentation.forEach(voir => {
    console.log(voir);
})

for( let i in presentation){
    console.log(i)
}

console.log(presentation);

let procedure = (premierParametre = 0) => premierParametre + 1;
console.log('Ma première procédure est de',procedure(98),'%');
