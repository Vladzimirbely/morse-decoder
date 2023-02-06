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
    let arr = [];
    let obj = {};
    let morse = MORSE_TABLE;

    for (let i = 0; i < Object.keys(morse).length; i++) {
        arr.push(Object.keys(morse)[i].replaceAll('-', 11).replaceAll('.', 10).padStart(10, 0));
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < Object.values(morse).length; j++) {
            obj[arr[j]] = Object.values(morse)[j];
        }
    }

    const newObj = Object.entries(obj);
    let newStr = '';

    for (let k = 0; k < expr.length; k += 10) {
        let letter = expr.slice(k, k + 10);
        if (letter === '**********') {
            newStr += ' ';
            }
        for (let n = 0; n < newObj.length; n++) {
            if (letter === newObj[n][0]) {
                newStr += newObj[n][1];
            }
        }
    }
    return newStr;
}

module.exports = {
    decode
}