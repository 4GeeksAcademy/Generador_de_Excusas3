function generar_frase() {
    let cadena = "";
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let array = [who, action, what, when]

    for (let x = 0; x < array.length; x++) {

        let random_index = Math.floor((Math.random() * array[x].length));
        random_index = random_index;
        cadena = cadena + " " + array[x][random_index];
    }

    return cadena;

}

function imprimir_frase() {
    document.getElementById("excuse").innerHTML = generar_frase();
}
