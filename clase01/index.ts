const words: string[] = ["palotes", "cAballo", "DONCELLA", "Jalapeño"];
function addWord(word: string): string {
  words.push(word);
  return `se agregó "${word}" al listado`;
}

function findWord(word: string): string | undefined {
  return words.find((w) => w === word.toLowerCase());
}
addWord("camiseta");
console.log(findWord("DONCELLA")); //-> doncella

function removeWord(word: string): string[] {
  return words.filter((w) => w.toUpperCase() == word.toUpperCase());
}
console.log(removeWord("jalapeño"));
