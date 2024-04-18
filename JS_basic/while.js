//usinh while loop
var array=[];
i=0;
while(i<5){
    array.push(i);
    i++;
}

console.log(array);

var myarray=[];
for(j=0;j<5;j++){
    myarray.push(j);
}

console.log(myarray);

var matrix = []; // Initialize the matrix as an empty array
k=0;
for (var i = 0; i < 5; i++) {
    matrix[i] = []; // Initialize each row as an empty array
    for (var j = 0; j < 5; j++) {
        matrix[i].push(j); // Assign the value of k to the current element
        k++; // Increment k for the next element
    }
}

console.log(matrix);
