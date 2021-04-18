const Person = require('./person.js')

module.exports = class Meetup{
    constructor(name, location, attendees=[]){
        this.name = name
        this.location = location
        this.attendees = attendees
    }

    report(){
        console.log(this.name+' meetup has'+ this.attendees.length+' attendees')
    }

    static create({name, location, attendees}){
        const meetup = new Meetup(name, location)
        
        meetup.attendees = attendees.map(Person.create)
        
        return meetup
    }
}