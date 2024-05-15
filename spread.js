//combined
const fruit1=['banana','orange']
const fruit2=['avecado','lemon']
const combined=[...fruit1,...fruit2]
console.log(combined)

const addnumbers=[1,2,3]
function sum(a,b,c){
    return a+b+c;
}
const Result = sum(...addnumbers)
console.log(Result);

function mul(...numbers){
    return numbers.reduce((total,num)=>total * num, 1);

}
const result = mul(1,2,3,4,5);
console.log(result)
const colors=['red','yellow','bule']
const copyofcolors=[...colors]
console.log(copyofcolors)