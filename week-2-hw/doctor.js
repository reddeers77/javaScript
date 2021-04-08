const Chalk = require('chalk')

module.exports = class Doctor{

    constructor(name, knowladge){
        this.name = name
        this.knowladge = knowladge
    }

    treat_to_patient(patient){
        
        const treatment = (this.knowladge/5)
        patient.health_damage -= treatment
        if (patient.health_damage < 0){
            patient.health_damage = 0
            console.log(Chalk.bgGreen(" You are healthy now"))
            this.drop_patient(patient)
            this.examination_capacity+=1 
            // drop the patient
        }    
        else{            
            console.log(Chalk.bgBlueBright(" You are getting better your current health_damage is :"+patient.health_damage))
        
        } 
    }

    drop_patient(patient){
        const index = this.patients.indexOf(patient)
        this.patients.splice(index, 1)
        
    }


    
}