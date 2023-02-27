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

    let arr =[];
    for(let i=0;i<expr.length;i+=10){
        arr.push(expr.slice(i,i+10))
    }

    let arr2 = []
    for(let i= 0;i<arr.length;i++){
        let charCode = ""
        let str =arr[i]
        if(arr[i]==="**********"){
            arr2.push(" ")
        } else{
        for (let j=0;j<str.length;j= j+2){
            if(str.slice(j,j+2)==="10"){

                charCode =charCode+"."
            }
            if(arr[i].slice(j,j+2)==="11"){
                charCode+="-"
            }
        }
        arr2.push(charCode)

    }}
    console.log(arr2)
    let res = arr2.reduce((res1,el)=>{
        if(MORSE_TABLE.hasOwnProperty(el)){
            res1=res1+MORSE_TABLE[el]
        }else{
            res1 =res1+" "
        }
        return res1
    },"")
    console.log(res)
    return res

}




module.exports = {
    decode
}