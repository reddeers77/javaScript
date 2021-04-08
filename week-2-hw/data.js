const fs = require('fs')



const save_data = function(data){
    fs.writeFileSync('./data.json', JSON.stringify(data))
}

const load_data = function(){
    return JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
}

module.exports = {save_data, load_data}