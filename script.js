function calculateMinCost() {
  //your code here
	var input = document.getElementById('rope-lengths').value;

  // Parse the input into an array of integers
  var ropeLengths = input.split(',').map(Number);

  // Sort the array in non-decreasing order
  ropeLengths.sort((a, b) => a - b);

  // Initialize variables
  var totalCost = 0;
  var n = ropeLengths.length;

  // Merge the ropes until there's only one left
  while (n > 1) {
    // Calculate the cost of merging the two smallest ropes
    var cost = ropeLengths[0] + ropeLengths[1];

    // Update the total cost
    totalCost += cost;

    // Merge the two ropes by removing them from the array and adding their sum
    ropeLengths.splice(0, 2, cost);

    // Update the number of ropes
    n--;
  }

  // Print the minimum cost inside the result div
  document.getElementById('result').innerHTML = totalCost;
}  
