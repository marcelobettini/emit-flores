var words = ["palotes", "cAballo", "DONCELLA", "Jalapeño"];
function addWord(word) {
    words.push(word);
    return "se agreg\u00F3 \"".concat(word, "\" al listado");
}
function findWord(word) {
    return words.find(function (w) { return w === word.toLowerCase(); });
}
addWord("camiseta");
console.log(findWord("DONCELLA")); //-> doncella
function removeWord(word) {
    return words.filter(function (w) { return w.toUpperCase() == word.toUpperCase(); });
}
console.log(removeWord("jalapeño"));
