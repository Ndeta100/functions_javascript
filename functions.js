function one(){
    return 1
}
one() // invoking a function

const obj={
    two(){
        return 2
    }
}

function three(){
    return 3
}
three.call()


const four=new Function('return 4')
four()

function woohoo(){
    console.log('woohoo')
}
woohoo.yell='ahhhhhh'

const specialObj={
    yell:'ahhhhhh',
    name:'woohoo', 
}

const obj={

}

// Functions are first class citizens in JS
 var stuff=function(){}

 function a(fn){
     fn()
 }

 a(function(){console.log('hi there')})

//  Functions can be returned as values
function b(){
    return function c(){console.log('bye')}
}
var d=b()
d()

// Careful initializing functions in a loop
// DON'T DO THIS
for(let i=0; i<6;i++){
    function a(){

    }
    a()
}

//  DO THIS
function a(){

}
for(let i=0; i<6;i++){

    a()
}

function e(param=8){
    return param
}

function letNdetaLogin(){
    let array=[]
    for(let i=0; i<100000; i++){
        array.push(i)
    }
    return 'Access granted Ndeta'
}
letNdetaLogin()

function letMusaLogin(){
    let array=[]
    for(let i=0; i<1000000; i++){
        array.push(i)
    }
    return 'Access granted to Musa'
}
letMusaLogin()

// refactoring
const giveAccessTo=(name)=>{
    return 'Access granted to' + name
}
function letUserLogin(user){
    let array=[]
    for(let i=0; i<1000000; i++){
        array.push(i)
    }
    return giveAccessTo(user)
}
letUserLogin('Ndeta')

// What if we had  an admin
function letAdminLogin(admin){
    let array=[]
    for(let i=0; i<1000000000; i++){
        array.push(i)
    }
    return giveAccessTo(admin)
}

// Let's create an authenticate function this time
function authenticate(verify){
    let array=[]
    for(let i=0; i<verify; i++){
        array.push(i)
    }
    return true
}

// Let's create a general function
function letPerson(person, fn){
    if(person.level==='admin'){
        fn(500000)
    }else if(person.level==='user'){
        fn(1000000)
    }
    return giveAccessTo(person.name)
}
letPerson({level:'user', name:'Tim'}, authenticate)
letPerson({level:'user', name:'Tim'}, sing)

function sing(person){
    return 'lal lala llala my name is ' + person.name
}

// Higher order functions
const multiplyBy=(num1)=>{
    return function(num2){
        return num1*num2
    }
}

const multiplyByTwo=multiplyBy(2)

// CLOSURE
function a1(){
    let grandpa='grandpa'
    return function b(){
       let father='father'
       return function c(){
           let son='son'
           return `${grandpa}> ${father} >${son}`
       }
    }
}
a1()()()

function boo(string){
    return function(name){
       return function (name2){
        console.log(`${string} ${name}  ${name2}`)
       }
    }
}
boo('hi')('tim')('becca')

// Exercise
function callMeMaybe(){
    const callMe='Hi! I am now here!'
    setTimeout(()=>{
        console.log(callMe)
    },4000) 
}
callMeMaybe()

// Memory Efficient
function heavyDuty(index){
    const bigArray=new Array(7000).fill(':joy:')
    console.log('created!')
    return bigArray[index]
}
heavyDuty(566)
heavyDuty(566)
heavyDuty(566)
const getHeavyDuty=heavyDuty2()
getHeavyDuty(564)
getHeavyDuty(580)
getHeavyDuty(509)

function heavyDuty2(index){
    const bigArray=new Array(7000).fill(':joy:')
    console.log('created again!')
    return function(index){
        return bigArray[index]
    }
}
// Encapsulation
const makeNuclearButton=()=>{
    let timeWithoutDistruction=0
    const passTime=()=>{
        timeWithoutDistruction++
    }
    const lunch=()=>{
        timeWithoutDistruction=-1
        return 'Boom'
    }
    const totalPeaceTime=()=>{
        timeWithoutDistruction
    }
    setInterval(() => {
        passTime
    }, 100);
    return {
        lunch:lunch,
        totalPeaceTime:totalPeaceTime
    }
}