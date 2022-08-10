var myString = 'I\'am a "fun" ninja string';

if (myString.indexOf("ninja") === -1) {
  console.log("the word ninja is not in the string");
} else {
  console.log(
    "the word ninja starts at the position" + myString.indexOf("ninja")
  );
}
console.log(myString.length);
console.log(myString.toUpperCase());
