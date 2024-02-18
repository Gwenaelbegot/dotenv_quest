require('dotenv').config();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

if (!name || !city || !language) {
    console.error('Définir les variables denvironnement');
    // ProcessingInstruction.exit premet de términer le processus en cours avec un code de sortie spécfique => 1 si dif de 0.
    process.exit(1); 
}
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);