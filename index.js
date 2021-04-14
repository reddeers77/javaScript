const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')






const loadedFile = Database.load()
const meetup = Meetup.create(loadedFile)

meetup.report()

const m2 = new Meetup('meetup','ankara')

meetup.attendees[0].attend(m2)

m2.report()