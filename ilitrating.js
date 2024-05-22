const numbers=[8,6,3,2,5]
for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i])
}

const colors=['red','yellow','blue'] 
colors.forEach((colors) => {
    console.log(colors);
    
})

const grades=[25,30,50]
const squregrades=grades.map((grade)=>{
    return grade *grade;

})
console.log(squregrades)

const ages=[11,12,23,34,55]
const adults=ages.filter((adult)=>{
    return adult>18;
})
console.log(adults)
 
