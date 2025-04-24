function generateBinary(N) {
    const result = [];
    const queue = [];
  
    queue.push("1");
  
    for (let i = 0; i < N; i++) {
      const current = queue.shift();
      result.push(current);
  
      queue.push(current + "0");
      queue.push(current + "1");
    }
  
    return result;
  }
  console.log(generateBinary(5)); //  ["1", "10", "11", "100", "101"]
  