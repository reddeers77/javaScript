const Create = require('./creation.js')
const Data = require('./data.js')


create = new Create()

hp = create.create_hospital("Hospital", 15)
create.create_doctors(10,5)
create.create_doctors(2,1)
create.create_doctors(2,8)


for ( var i in create.all_created_doctors){
    const doctor = create.all_created_doctors[i]
    hp.hire_doctor(doctor)

}

create.create_patients(8,2)
create.create_patients(3,7)
create.create_patients(1,9)

for ( var i in create.all_created_patients){
    hp.accept_patient(create.all_created_patients[i])

}

dr = create.all_created_doctors[3]


dr.treat_to_patient(dr.patients[0])
console.log(dr)

dr.treat_to_patient(dr.patients[0])



console.log(hp)
Data.save_data(hp)
const datas = Data.load_data()
console.log(datas)