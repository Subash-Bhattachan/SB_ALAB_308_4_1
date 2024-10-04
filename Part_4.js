
const the_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const rows = the_string.split('\n') // split the string ny new line character
const headers = rows[0].split(',') // split first row to headers
const result = []  // create an empty array


for (let i = 1; i < rows.length; i++)  // loop for each row of data
   {
  const cols = rows[i].split(',') // split the columns at comma character
  const obj = {}  // create an empty object
  for (let j = 0; j < headers.length; j++) // for length of headers
     {
    obj[headers[j].toLowerCase()] = cols[j] // matching the headers to column data
  }
  result.push(obj)
}
//console.log(result)


console.log("===============Sorting and Manipulating Data=====================")
result.splice(-1);

const arr = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
result.splice(1, 0, arr)

const arr1 = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
result.push(arr1)
console.log(result);




// Calculating the average age of the group
    let total = 0;
    let numPerson = 0;
    let theAverage = 0;
    for (let i = 0; i < result.length; i++) {
            total += Number(result[i].age);
            numPerson++;
    }
    
    theAverage = total / numPerson;
    console.log("The average age of the people is " + theAverage + " years.")







    
