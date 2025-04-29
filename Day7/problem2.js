// Add a releaseDate (as a Date object) in product, then try deep copying using JSON.parse(JSON.stringify(...)).

function cloneAndChange(obj) {
    // Step 1: Deep clone
    let deepCopy=JSON.parse(JSON.stringify(obj));
    console.log(obj.releaseDate);//1745915003653 -> returns a timestamp (number), NOT a Date object!
    console.log(deepCopy.releaseDate);//1745915003653
}
  
const product = {
    id: 101,
    releaseDate:Date.now(),
    details: {
      name: "Phone",
      price: 699
    }
};
  
cloneAndChange(product);

  