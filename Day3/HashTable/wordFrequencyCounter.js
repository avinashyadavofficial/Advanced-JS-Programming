function wordFrequency(text) {
    let freq = {};
  
    for (let word of text.split(" ")) {
      freq[word] = (freq[word] || 0) + 1;
    }
  
    return freq;
}
let text="Hi Hi Avinash Avinash yadav"//{ Hi: 2, Avinash: 2, yadav: 1 }
console.log(wordFrequency(text));
  