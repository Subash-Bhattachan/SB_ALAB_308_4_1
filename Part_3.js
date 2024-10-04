
//const str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rowData = str.split("\n");
const columns = [];

for (let i = 0; i<rowData.length; i++) {
  
  //columns.push(rowData[i].split(","));
    for (let j = 0; j<rowData.length; j++){
            columns.push(rowData[j].split(","));
    }
    break;
}
console.log(columns);



const the_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
const rows = the_string.split('\n') // split the string ny new line character
const headers = rows[0].split(',') // split first row to headers

// console.log(headers)
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

console.log(result)