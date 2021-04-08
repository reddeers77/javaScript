const Chalk = require("chalk")

module.exports = class Hospital{

    constructor(name, doc_capacity){
        
        this.name = name
        this.doc_capacity = doc_capacity
        this.doctors = []
        this.patients = []
        
    }

    hire_doctor(doctor) {

        if ( this.doctors.length < this.doc_capacity){
            this.doctors.push(doctor)
            doctor.hospital = this.name
            doctor.examination_capacity = 2
            doctor.patients = []
            doctor.patients_capacity = 10
                        
        }
        else {
            console.log(Chalk.bgRed("doctor capacity is full"))
        }
        
    }
    accept_patient(patient){

        if ( this.doctors.length>0) {
            var proper_doctors = this.proper_doctors(patient)
            if( proper_doctors.length>0 ){            
                for (var i in proper_doctors){
                    var doctor = proper_doctors[i]
                    if ( doctor.examination_capacity != 0 && doctor.patients_capacity !=0 ){
                        this.attend_patient_to_doctor( doctor, patient)
                        console.log(Chalk.bgGreen("patient "+patient.name+" attend to Dr. "+doctor.name))
                        return true
                    }                    
                    else{                        
                        continue
                    }
                }
                if (patient.doctor == false){
                    console.log(Chalk.bgRed("unfortunately all doctors are busy, come back later"))    
                }
            }
            else{
                console.log(Chalk.bgRed("we dont have proper doctors, please search for another hospital"))
            }
        }
        else{
            console.log(Chalk.bgRed("sorry we dont have any doctors now"))
        }

    }

    attend_patient_to_doctor(doctor,patient){

        doctor.patients.push(patient)
        this.patients.push(patient)
        doctor.examination_capacity-=1
        doctor.patients_capacity-=1
        patient.doctor = doctor.name
        
    }

    proper_doctors(patient){

        var proper_doctors = []
        var health_damage = patient.health_damage
        for ( var i in this.doctors){
            if( this.doctors[i].knowladge > health_damage){
                proper_doctors.push(this.doctors[i])
            }
            else{
                continue
            }
        }
        return proper_doctors

    }
    
    

    
    
    
    
}