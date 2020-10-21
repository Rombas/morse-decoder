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
    // write your solution here
    let res = '';
    let buf = '';
    for (let i = 0; i < expr.length; i = i + 10){
      buf = '';  
      for (j = 0; j < 10; j += 2){
            if (expr[i+j] === '*'){
              buf += ' ';
              break;
            }
            if (expr[i+j] === '1' && expr[i+j+1] === '0')
            buf += '.';
            else if (expr[i+j] === '1' && expr[i+j+1] === '1')
            buf += '-';
        }
        if (buf === ' ') res += ' ';
        else res += MORSE_TABLE[buf];
    }
    return res;
  }

module.exports = {
    decode
}