const Hospital = require('./hospital.js')
const Doctor = require('./doctor.js')
const Patient = require('./patient.js')

module.exports = class Creation{

    constructor(){

        this.all_created_hospitals = []
        this.all_created_doctors = []
        this.all_created_patients = []

    }

    create_hospital(name, doc_capacity){
        return new Hospital(name, doc_capacity)
    }

    create_doctor(name, knowladge){
        return new Doctor(name, knowladge)

    }

    

    create_doctors(num_of_doctors){
        const created_doctors = []
        const last_doctor_number = (this.all_created_doctors.length)+num_of_doctors
        if ( this.all_created_doctors.length > 0 ){
            var i = this.all_created_doctors.length
        }
        else{
            var i = 1
        }
        while ( last_doctor_number >= i){
            const created_doctor = this.create_doctor( ("Doctor"+i), 6)
            console.log(created_doctor)
            created_doctors.push(created_doctor)
            this.all_created_doctors.push(created_doctor)
            i+=1
        }
        
        return created_doctors
    }

    create_patient(name, health_damage){
        return new Patient(name, health_damage)

    }

}

