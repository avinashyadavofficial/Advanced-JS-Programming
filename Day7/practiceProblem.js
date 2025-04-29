// Write a function cloneAndChange:
// Takes an object
// Deep copies it
// Changes one nested property
// Logs both the original and modified objects

function cloneAndChange(obj) {
    // Step 1: Deep clone
    let deepCopy=JSON.parse(JSON.stringify(obj));
    // Step 2: Modify clone
    deepCopy.details.name="Mobile";
    // Step 3: Return both
    console.log(obj);
    console.log(deepCopy);
}
  
const product = {
    id: 101,
    details: {
      name: "Phone",
      price: 699
    }
};
  
cloneAndChange(product);

  