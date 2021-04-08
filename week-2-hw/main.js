const Create = require('./creation.js')


create = new Create()


create.create_doctors(10)


console.log(create.all_created_doctors)
