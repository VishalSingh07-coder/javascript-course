let marvel_heroes=["ironman","thor","hulk","captain america"]
let dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

//to make two arrays a single array we use 2 methods
//method 1(using concatenate operation)

let heroes=marvel_heroes.concat(dc_heroes)
// console.log(heroes);
//method 2
let new_heroes=[...marvel_heroes,...dc_heroes];//spread method

// console.log(new_heroes);


let num=[1,2,3,[4,5],6,7,[9,10]]
// console.log(num.flat(Infinity));

//functions used in scraping

// console.log(Array.isArray("vishal"));

    // console.log(Array.from("vishal"));
    let id1=1000
    let id2=1001
    let id3=1002
    console.log(Array.of(id1,id2,id3));
