const students = [
    {
        name: "tsega",
        age: 25,
        Education: "Bc"
    },
    {
        name: "abel",
        age: 21,
        Education: "Bc"
    },
    {
        name: "robel",
        age: 40,
        Education: "ms"
    },

];

function studentsData() {
    return students;
}
async function fetchStudents() {
const response= await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
return response.json(); 
console.log(data);
}
const result = fetchStudents();
result.then((data) => {

console.log(data);})