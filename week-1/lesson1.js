Person = class{   

    constructor(name, age, ){
        this.name = name
        this.age = age
        this.meetings = []
    }

    attend(meetup){
        this.meetings.push(meetup)  
        meetup.add_attendee(this)    
               
    }   
}

Meetup = class{

    constructor(name){
        this.name = name
        this.attendees = []
        this.meetup_days = []
                
    }

    add_attendee(Person){
        this.attendees.push(Person)
    }

    printAttendeeNames(){
        for (var i in this.attendees){
            console.log(this.attendees[i].name)
        }
    }
    printAttendeeNameswithForEach(){
        this.attendees.forEach(printName)
        
    }

    create_meetup_day(theDay){
        if (in_list(theDay,this.meetup_days)){
            
            this.meetup_days.push(theDay)
        }
        
        
    }
}

printName = Person => console.log(Person.name)

red = new Meetup("red")
yellow = new Meetup("yellow")

egemen = new Person("egemen",24)
levent = new Person("levent",23)

egemen.attend(red)
egemen.attend(yellow)

levent.attend(red)

red.printAttendeeNames()
red.printAttendeeNameswithForEach()
//checks if list consists the element. if elements in the list return False, else True
function in_list(element,list){

    for (index in list){

        if ( list[index] == element ){            
            return false
        }        
    }       
    return true
}


red.create_meetup_day("tuesday")
red.create_meetup_day("friday")
red.create_meetup_day("sunday")
red.create_meetup_day("tuesday")
red.create_meetup_day("monday")
console.log(egemen.meetings[0].meetup_days)
