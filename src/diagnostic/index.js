import zxcvbn from "zxcvbn"
import wordlist from './dictionary.js'

const dictionary = new Map(wordlist.map((val, i) => [val, i]));
const has = word => dictionary.has(word);

// list of all words
const consecutive = (phrase, contextIndex = 0, cache = new Set()) =>
    phrase.length ?
        phrase.split('')
            .reduce((prev, curr, i) => cache.has(contextIndex) /*|| !/[a-zA-Z]/.test(curr)*/ ? prev : [...prev, [prev[prev.length - 1][0] + curr, i + 1]], [['']])
            .slice(1)
            .filter(([part, i]) => has(part.toLowerCase()) && cache.add(contextIndex))
            .sort(([part1], [part2]) => part2.length - part1.length)
            .map(([word, i]) => [[word, i + contextIndex], ...consecutive(phrase.slice(i), i + contextIndex, cache)])
            .reduce((prev, curr) => [...prev, ...curr], [])
        : [];
/* const phrases = (phrase) => {
  const ret = [[]]
  const cache = new Set()
   cache
  consecutive(phrase, contextIndex, cache).forEach(c => {
    const lastChain = ret[ret.length - 1]
    const lastElem = lastChain[lastChain.length - 1]
    if(lastElem && c[1] < lastElem[1]){
      ret.push([c])
    } else {
      lastChain.push(c)
    }
  })
  return ret
} */
const phrases = phrase => {
    let cache = new Set();
    return phrase.split('')
        .reduceRight((prev, curr) => [...prev, curr + prev[prev.length - 1]], [''])
        .slice(1)
        .reverse()
        .map((part, i) => consecutive(part, i, cache))
        .filter(results => results.length)
        .map(topPhrase)
        .reduce((prev, curr) => [...prev, ...curr], [])
};
/* const topPhrase = phrase => {
  const phrases = consecutive(phrase)
  var top = [['', 0]]
  for(var i = 0; i < phrases.length; i++){
    if(top[i][1] < phrases[i][1]){
      top.push(phrases[i])
    } else {
      break
    }
  }
  return top.slice(1)
} */
const topPhrase = phrases => {
    let top = [['', 0]];
    for (let i = 0; i < phrases.length; i++) {
        if (top[i][1] < phrases[i][1]) {
            top.push(phrases[i])
        } else {
            break
        }
    }
    return top.slice(1)
};
const diagnostic = phrase => {
    const top = phrases(phrase);
    const nonwords = top.length ? [...top, ["", phrase.length]]
        .reduce((prev, curr) => [...prev, curr[1] - curr[0].length, curr[1]], [])
        .slice(1, -1)
        .reduce((prev, curr, i, arr) => {
            if ((i % 2) === 1) {
                return [...prev, [arr[i - 1], curr]]
            } else {
                return prev
            }
        }, [])
        .map(segment => [phrase.slice(segment[0], segment[1]), segment[1]])
        .filter(nonword => nonword[0].length) : [[phrase, phrase.length]];
    return [
        top.map(([word, i]) => ({
            tag: [word, i],
            dictScore: Math.log(dictionary.get(word)),
            rawScore: word.length * Math.log(26)
        })),
        nonwords.map(([nonword, i]) => ({
            tag: [nonword, i],
            rawScore: nonword.length * Math.log(Math.max(...nonword.split('').map(c => c.charCodeAt(0))))
        }))
    ]
};
const analysis = phrase => {
    const [worddiag, nonworddiag] = diagnostic(phrase);
    /*
    * Common scenarios
    */
    let message = '';
    const nonwordRawTotal = nonworddiag.reduce((a, {rawScore}) => a + rawScore, 0);
    console.log('Nonword Raw total', nonwordRawTotal);
    let nonwordTotal;
    let wordTotal;
    if (worddiag.length > 0) {
        const wordRawTotal = worddiag.reduce((a, {rawScore}) => a + rawScore, 0);
        console.log('Word Raw total', wordRawTotal, worddiag);
        const wordDictTotal = worddiag.reduce((a, {dictScore}) => a + dictScore, 0);
        console.log('Word Dict total', wordDictTotal);
        if (wordRawTotal < wordDictTotal) {
            message += 'Your password is a seemingly random sequence of characters (or rare words)\n';
            wordTotal = wordRawTotal
        } else {
            message += 'Your password is the sequence "' + worddiag.map(({tag}) => tag[0]) + '" of top 10000 most common words or word fragments\n';
            wordTotal = wordDictTotal
        }
        if (nonworddiag.length === 1) {
            message += 'It also contains a single sequence of non-alphabetical characters, a common pattern \n';
            nonwordTotal = nonwordRawTotal
        } else if (nonworddiag.length > 1 && nonworddiag.map(({tag}) => tag[0]).reduce((a, b) => a === b ? a : NaN)) {
            message += "It's also formatted as words connected together with a delimiter, \"" + nonworddiag[0].tag[0] + "\", a common patern\n";
            nonwordTotal = nonworddiag[0].rawScore
        } else if (nonworddiag.length === 0) {
            message += "And it has no other special characters\n";
            nonwordTotal = 0
        } else {
            message += "And it has special characters that appear random\n";
            wordTotal = wordRawTotal;
            nonwordTotal = nonwordRawTotal
        }
        message += "A normal computer could crack it in " + convertMS(Math.exp(wordTotal + nonwordTotal - 23))
    } else {
        nonwordTotal = nonwordRawTotal;
        message += 'Your password is a sequence of purely non-alphabetical characters\n';
        message += "A normal computer could crack it in " + convertMS(Math.exp(nonwordTotal - 23))
    }
    return message
};
const convertMS = (seconds) => {
    console.log(seconds);``
    let day, hour, minute;
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return `
    	${day === 1 ? day + ' day' : day + ' days'}
        ${hour === 1 ? hour + ' hour' : hour + ' hours'} 
        ${minute === 1 ? minute + ' minute' : minute + ' minutes'} 
        ${minute === 1 ? seconds + ' second' : seconds + ' seconds'}
    `
};

const checkPassword = (password) => {
    return zxcvbn(password).score >= 2;
};

export default {analysis, checkPassword}
