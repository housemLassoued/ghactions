
function greet(name) {
    return `Hello, ${name}!`; // Utilisation des backticks pour l'interpolation
}

module.exports = greet; // On exporte la fonction

// Si ce fichier est exécuté directement, afficher un message
//if (require.main === module) {
 //   console.log(greet("World"));
//}
