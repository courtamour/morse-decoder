const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*****': ' ',
};

function decode(expr) {
    let morseSymbols = Object.keys(MORSE_TABLE);
    let result = [];
    let symbols = [];
    let literas = [];
    let numbers = [];
    let arr=[];
    let probel = expr.match(/(.{10}|.)/g
    );
    probel.forEach((element) => {
        if ((element) == '**********') {
            numbers.push('*****');
        }
        else {
            for (let i = 0; i < element.length; i++) {
                let elements = `${element[i]}${element[i + 1]}`;
                ++i;
                numbers.push(elements);
            }
        }
    });
    numbers.forEach(element => {
        if (element == '10') {
            symbols.push('.');
        }
        else if (element == '11') {
            symbols.push('-');
        }
        else if (element == '*****') {
            symbols.push(element);
        }
        else if (element == '00') {
            symbols.push('0');
        }
    });
    let str = symbols.join('');
    for (i = 0; i < str.length; i++) {
        let lit = [];
        let a = 0;
        while (a < 5) {
            lit.push(str[i + a]);
            ++a;
        }
        i += 4;
        literas.push(lit.join(''));
    }
    literas.forEach(el => {
        
        el.split('').forEach(val=>{
            if(!(val == '0')){
                arr.push(val);
            }
        });

        arr.push('1');
    }
    );
    arr = arr.join('').split('1');
    arr.forEach(element => {
        morseSymbols.forEach(morseElement => {
            if (element === morseElement) {
                result.push(MORSE_TABLE[morseElement]);
            }
        });
    });
    return result.join('');
    // return result.join('');

}

module.exports = {
    decode
}