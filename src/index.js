const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrmorse = expr.split("");
    while (arrmorse[0] === '0') arrmorse.shift()
    while (arrmorse[arrmorse.length - 1] === '0') arrmorse.pop()
    let newExpr = arrmorse.join('');
    if (newExpr.indexOf('0') < 0) 
    return '.';
 
    for (let i = 1; ; i++) {
    if (newExpr.indexOf(`1${"0".repeat(i)}1`) >= 0 ||
         newExpr.indexOf(`${"1".repeat(i+1)}`) < 0) {
             newExpr = newExpr.replace(new RegExp(`0{${i}}`, 'g'), '0')
             .replace(new RegExp(`1{${i}}`, 'g'), '1' )
             //.replace(new RegExp(`*{${i}}`, 'g'), '*' )
             break
         }
     }
     return newExpr
     .replace(/111/g, '-')
     .replace(/000/g, ' ')
     .replace(/1/g, '.')
     .replace(/0/g, '');
 
 }
 
 function morsedecode(decodemorse) {
     let morseArray = decodemorse.split(" ");
     for (let i = 0; i < morseArray; i++) {
         if (morseArray[i] === "" && morseArray[i+1] === "") {
             morseArray.splice(i, 2, ' ')
 
         }
     if (morseArray[i] !== "") {
         morseArray[i] = MORSE_TABLE[morseArray[i]]
     }
 else {
     morseArray[i] = ' '
 
 }}
 return morseArray.join('')
 }


module.exports = {
    decode
}