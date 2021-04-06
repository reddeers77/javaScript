School = class{

    available_classes = ["Math","Turkish","Science","History","Sports","Music","Geology","English"]

    constructor(name){
        this.name = name
        this.students = []
        this.classes = []
    }

    add_student(Student){
        this.students.push(Student)
    }

    open_class(class_name){

        if (in_list(class_name, this.available_classes) == false && in_list(class_name, this.classes) == true){
            this.classes.push(class_name)
            console.log(class_name+" class has just opened!")

        }
        else{
            console.log("class is already avaiable or wrong class name")
            return false
        }
    
        

    }
        
    
}


Student = class{
    year = "215"    

    constructor(name){
        this.name = name
        this.Schools = []
        this.number = this.year
        this.taken_classes = []
        
    }

    register_to_school(School){        
        
        var number = String(this.number)
        var sequence = String(School.students.length) 
        this.number = parseInt(number+sequence)      
        this.Schools.push(School)
        School.add_student(this)    

    }

    take_class(class_name, School){
        
        var available_classes = (School.classes)
        
        if (in_list( class_name, available_classes ) == false){

            this.taken_classes.push(class_name)

        }
        else{
            console.log(class_name+" is not available or check the class name")
            return false
        }
    }

}

function create_school(school_name){
    return school_name = new School(school_name)
    
}
function create_student(student_name){
    return student_name = new Student(student_name)
}

//checks if list consists the element. if elements in the list return False, else True
function in_list(element,list){

    for (index in list){

        if ( list[index] == element ){            
            return false
        }        
    }       
    return true
}

egemen = create_student("egemen guney")
levo = create_student("ldc")
mubi = create_student("mubi")
my_first_school = create_school("Ahmet Hasim IOO")
egemen.register_to_school(my_first_school)
levo.register_to_school(my_first_school)
mubi.register_to_school(my_first_school)


my_first_school.open_class("Math")
my_first_school.open_class("English")
my_first_school.open_class("Turkish")
my_first_school.open_class("Math")
my_first_school.open_class("Sports")
my_first_school.open_class("Science")


egemen.take_class("Math",my_first_school)
egemen.take_class("English",my_first_school)

egemen.take_class("adfadsad",my_first_school)
egemen.take_class("Science",my_first_school)
mubi.take_class("Sports",my_first_school)
console.log(egemen.taken_classes)
console.log(mubi.taken_classes)