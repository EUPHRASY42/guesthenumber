// let min = 1;
// let max = 10;
// let essais=3;
// let random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);
// let reponse = parseInt.prompt("Devine le nombre au quel je pense");
// console.log (`Tu a répondu: ${reponse}`);
// function resultat(){
  
//   for (let essaie = 3; essaie > 0; essaie--) {
   
//     if (random===reponse) {
//         alert("bravo tu as devine le nombre mystère");
//         return(resultat)
//     } 
    
//     else {
//         console.log(`Tu a perdu la réponse était ${random}`);
//         document.body.className = "rouge";
        
//     }
// }
// alert("t'as perdu");
// }
// resultat();











let min = 1;
let max = 10;
let essaisMax = 3;

function resultat() {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log("Nombre mystère :", random); // Pour tricher un peu

  for (let essais = essaisMax; essais > 0; essais--) {
    let reponse = parseInt(prompt(`Devine le nombre Essais restants : ${essais}`));
    // console.log(`Tu as répondu : ${reponse}`);

    if (reponse === random) {
      alert("Bravo ! Tu as deviné le nombre mystère ");
      document.body.className = "vert";
      return; // On arrête la fonction, car il a gagné
    } else {
      alert("Raté !");
    }
  }

  // Si on sort de la boucle, c'est qu'on a perdu
  alert(`Dommage, tu as perdu  Le nombre mystère était ${random}`);
  document.body.className = "rouge";
}

resultat();





// function lancerJeu() {
//   const nombreMystere = Math.floor(Math.random() * 10) + 1;
//   let essais = 3;

//   while (essais > 0) {
//     const proposition = parseInt(prompt(`Devine le nombre . Il te reste ${essais} essai(s) :`));

//     if (proposition === nombreMystere) {
//       alert("Bravo ! Tu as deviné le nombre mystère ");
//       return lancerJeu(); // Le jeu recommence automatiquement après victoire
//     } else {
//       essais--;
//       if (essais > 0) {
//         alert("Raté ! Essaie encore.");
//       } else {
//         alert(`Dommage ! Le nombre mystère était ${nombreMystere}. Le jeu recommence.`);
//         return lancerJeu(); // Le jeu recommence automatiquement après défaite
//       }
//     }
//   }
// }

// // Lancer le jeu
// lancerJeu();
















//Le joueur choisira un nombre aléatoire entre 1 et 10 (inclus)T
//9 Tu as trois essais pour deviner ce nombre
//FT Utilise la fonction prompt() pour saisir ta proposition de 
//nombre
//3 Si ton nombre est égal au nombre mystère, tu gagnes !  
//Sinon tu dois retenter ta chance. Au bout de trois essais, tu 
//as perdu et le jeu recommencP