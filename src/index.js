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
    let strarr = expr.split('**********');
    let arr = strarr.map(word => {
      let wordarr = [];
      for (let i = 0; i < word.length; i += 10) {
        wordarr.push(word.slice(i , i + 10))
      };
      return wordarr
    });
    let symbols = arr.map(word => word.map(letter => {
      let newletter = '';
      for (i = 0; i < letter.length; i += 2) {
        if (letter.slice(i, i + 2) === '10') newletter = newletter + '.';
        if (letter.slice(i, i + 2) === '11') newletter = newletter + '-';
      };
      return newletter;
    }));
    let result = symbols.map(word => word.map(letter => MORSE_TABLE[letter]))
    return result.map(a => a.join('')).join(' ')
  }

module.exports = {
    decode
}