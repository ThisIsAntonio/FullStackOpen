const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
    `mongodb+srv://antonioac86:${password}@cluster0.imyel.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const phonebook = new Phonebook({
    name: name,
    number: number,
})

if ( name && number ) {
    // Saving the information in mongodb
    phonebook.save().then(result => {
        console.log('Person saved on the Phonebook!')
        console.log('name: ', name)
        console.log('number: ', number) 
        mongoose.connection.close()
    })
} else {
    // Showing the phonebook list from mongodb
    console.log('Phonebook:')
    Phonebook.find({}).then(result => {
        result.forEach(phonebook => {
            console.log(`${phonebook.name} ${phonebook.number}`)
        })
        
        if (result.length === 0) {
            console.log('No notes found')
        }
        mongoose.connection.close()
    })
}