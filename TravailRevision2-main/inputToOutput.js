export function inputToOutput(input) {

    let output = `!!%${input.type}%%`; // déclare une varaible output qui égale à un string qui contient les caractères et le type de l'input (table et miroir)

    Object.keys(input).forEach(key => {  // utilise Object.keys pour obtenir un tableau des clés de l'objet input puis parcourt chaque clé avec forEach
        if (key === 'type') return; // ici on retourne immédiatement car le type a déjà été mis dans la variable output

        let formattedKey = key.replace(/([A-Z])/g, '-$1').toLowerCase(); // défini une variable qui va mettre un tiret entre les 2 mots et mettre en minuscule
        let value = input[key]; // défini une variable value qui correspond à la clé dans l'objet input

        if (Array.isArray(value)) { // vérifie si la valeur est un tableau
            value = value.join('&'); // joint les éléments du tableau en un string avec & (pour wood&stone)
        }

        output += `attribute-${formattedKey}="${value}"%%`; //ajoute chaque formattedkey et value à output pour créer un string qui correspond et le mot attrsibute
    });

    output = output.slice(0, -2) + '%!!'; // enlève les deux derniers %%
    return output;
}
