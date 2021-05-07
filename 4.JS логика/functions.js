let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{
    "name": "Vasya",
    "email": "vasya@example.com",
    "age": 20,
    "skills": {"php": 0, "js": -1, "madness": 10, "rage": 10}
}, {
    "name": "Dima",
    "email": "dima@example.com",
    "age": 34,
    "skills": {"php": 5, "js": 7, "madness": 3, "rage": 2}
}, {
    "name": "Colya",
    "email": "colya@example.com",
    "age": 46,
    "skills": {"php": 8, "js": -2, "madness": 1, "rage": 4}
}, {
    "name": "Misha",
    "email": "misha@example.com",
    "age": 16,
    "skills": {"php": 6, "js": 6, "madness": 5, "rage": 2}
}, {
    "name": "Ashan",
    "email": "ashan@example.com",
    "age": 99,
    "skills": {"php": 0, "js": 10, "madness": 10, "rage": 1}
}, {
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11,
    "skills": {"php": 0, "js": 0, "madness": 0, "rage": 10}
}]
let testData4 = [{"name": "Vasya", "email": "vasya@example.com", "age": 20}, {
    "name": "Dima",
    "email": "dima@example.com",
    "age": 34
}, {"name": "Colya", "email": "colya@example.com", "age": 46}, {
    "name": "Misha",
    "email": "misha@example.com",
    "age": 16
}, {"name": "Ashan", "email": "ashan@example.com", "age": 99}, {
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11
}, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11
}]]]]]]

//1
let cloneDeep = (data) => {
    return [...data]
};
console.log(cloneDeep(testData))

//2
function joinArrayOfArrays(arr) {
    let joined = [arr.reduce((a, e) => a.concat(e))];
    return joined;
}

joinArrayOfArrays([[testData], [testData3]]);

//3
function MultiplicatorUnitFailure() {
    return false
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b
    } else {
        return MultiplicatorUnitFailure()
    }
}
function reliableMultiply(a,b){
    do{
        primitiveMultiply(a,b)
    }while (primitiveMultiply===true)
}

console.log(reliableMultiply(2,4))

//4
function foo(){
    Array.call(this);
}
foo.prototype=new Array();
foo.prototype.constructor=foo;

foo.prototype.append=function(item){
    this.unshift(item);
};
//5
function recursivearray(array) {
    if (array.length > 0) {
        console.log(array.shift());
        recursivearray(array);
    }
}
recursivearray(testData2);
//6
function printParallel(val, delay)
{
    setTimeout(function()
    {
        console.log(val);
    }, delay);
}

function solution(inputData) {
    var first = inputData.substring(0, 1);
    var strArr = inputData.split(" ");
    var strHashSplitArr = strArr[1].split("#");

    for (var i = 0; i < strHashSplitArr.length; i++)
    {
        var loopInp = strHashSplitArr[i].split("*");
        var maxVal = parseInt(loopInp[0]);
        var modifier = parseInt(loopInp[1]);

        if (first == 1)
        {
            for (var j = 1; j <= maxVal; j++)
            {
                console.log(j+modifier);
            }
        }
        else if (first == 2)
        {
            for (var j = 1; j <= maxVal; j++)
            {
                printParallel(j+modifier, modifier);
            }
        }
    }
}

//7

//8
function arrSlice(arr,num){
   return  arr.slice(arr,num)
}
//9

//10
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}
//11

//12
