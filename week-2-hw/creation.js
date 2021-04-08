const Hospital = require('./hospital.js')
const Doctor = require('./doctor.js')
const Patient = require('./patient.js')
const Chalk = require("chalk")

module.exports = class Creation{

    constructor(){

        this.all_created_hospitals = []
        this.all_created_doctors = []
        this.all_created_patients = []

    }

    create_hospital(name, doc_capacity){
        const hospital = new Hospital(name, doc_capacity)
        this.all_created_hospitals.push(hospital)
        return hospital
    }

    create_doctor(name, knowladge){
        return new Doctor(name, knowladge)

    }

    

    create_doctors(num_of_doctors, knowladge){
        const created_doctors = []
        const last_doctor_number = (this.all_created_doctors.length)+num_of_doctors
        if ( this.all_created_doctors.length > 0 ){
            var i = this.all_created_doctors.length
        }
        else{
            var i = 1
        }
        while ( last_doctor_number >= i){
            const created_doctor = this.create_doctor( ("Doctor"+i), knowladge)            
            created_doctors.push(created_doctor)
            this.all_created_doctors.push(created_doctor)
            console.log(Chalk.green("Doctor has been created "+created_doctor.name))
            i+=1
        }
        
        return created_doctors
    }

    create_patients(num_of_patients, health_damage){
        const created_patients = []
        const last_patient_number = (this.all_created_patients.length)+num_of_patients
        if ( this.all_created_patients.length > 0){
            var i = this.all_created_patients.length
        }
        else{
            var i = 1
        }
        while (last_patient_number >= i){
            const created_patient = this.create_patient ( "Patient"+i, health_damage)            
            created_patients.push(created_patient)
            this.all_created_patients.push(created_patient)
            console.log(Chalk.yellow("Patient has been created "+created_patient.name))
            i+=1
        }
        return created_patients


    }

    create_patient(name, health_damage){
        return new Patient(name, health_damage)

    }

}

