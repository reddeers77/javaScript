const fs = require('fs')




/*


const file1 = fs.readFileSync(__dirname + '/file/1.txt', 'utf8')
console.log(file1)

const file2 = fs.readFileSync(__dirname + '/file/2.txt', 'utf8')
console.log(file2)

const file3 = fs.readFileSync(__dirname + '/file/3.txt', 'utf8')
console.log(file3)

console.log("aaaaa")


fs.readFile(__dirname + '/file/1.txt', 'utf8', (err,contents1) => {
    console.log(contents1)
    fs.readFile(__dirname + '/file/2.txt', 'utf8', (err, contents2) => {
        console.log(contents2)
        fs.readFile(__dirname + '/file/3.txt', 'utf8', (err, contents3) => {
            console.log(contents3)
        })
    })
})

console.log("egomn")

*/

/*
let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if(err) return reject(err)

            resolve(contents)
        })
    })
}
// try catch blokları gibi 
readFile(__dirname + '/file/1.txt')
    .then(console.log)
    .then(() => readFile(__dirname + '/file/2.txt'))
    .then(console.log)
    .then(() => readFile(__dirname + '/file/3.txt'))
    .then(console.log)
    .catch(err => console.log(err))

*/
/*
async function main(){
    const contents1 = await readFile(__dirname + '/file/1.txt')
    console.log(contents1)

    const contents2 = await readFile(__dirname + '/file/2.txt')
    console.log(contents2)

    const contents3 = await readFile(__dirname + '/file/3.txt')
    console.log(contents3)
    
}

main()

console.log("last?")

*/