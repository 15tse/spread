const fruit=['banana','apple','orange','waterlamon'];
const [firstfruit,...otherfruit]=['banana','apple','orange','waterlamon'];
console.log('firstfruit',firstfruit)
console.log('otherfruit',otherfruit);

fruit.push('nana');
console.log('add firut',fruit)

for (let i = 0; i < fruit.length; i++) {
    
    console.log(fruit[i])
   
}

const shape=['rectangle',]
const [firstshape,restshape='circle']=(shape)
console.log(firstshape)
console.log(restshape)
let a=1;
let b=3;
[a,b]=[b,a]
console.log(a)
console.log(b)