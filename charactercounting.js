

function countLetters(word) {
    var newWord = word.replace(/\s/g, '');
    var objectHere = {};
    for (var i = 0; i < newWord.length; i++) {
        var times = newWord.charAt(i);
        if (objectHere[times]) {
            objectHere[times]++;
        } else {
            objectHere[times] = 1;
        }
    }
    return objectHere
}

console.log(countLetters("lighthouse in the house"))