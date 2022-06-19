const addToZero = (numArr) => {
    let value = false
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
          if (i !== j) {
            if (numArr[i] + numArr[j] === 0) {
                 value = true;
            }  
          }
        }
      }
      return value
}





console.log(addToZero([1,2,3, -2]))


let checkUniqueChar = (string) => {

    for (let i = 0; i < string.length; i++) {
        for (j = 0; j < string.length; j++) {
            if (i !== j ) {
                if (string[i]=== string[j]){
                    return false
                }
            }
        }
    }
    return true
}
console.log(checkUniqueChar('moonday'))
console.log(checkUniqueChar('monday'))

const pangram = (sentence) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = sentence.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }
 console.log(pangram("The quick brown fox jumps over the lazy dog"))


 function longestStringReduce(arr) {
    let longestWord = arr.reduce((a, b) => a.length < b.length ? b : a, "");
    return longestWord.length
  }

  console.log(longestStringReduce(["hi", "hello"]))