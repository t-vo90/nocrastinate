const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

// mongoose.set('debug', true)

mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.zh8uj.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection established'))
  .catch(console.log)

// Create a New "Classes"/Model on the Database
// const Panda = mongoose.model('Panda', { name: String, age: Number })

// Async Function which awaits the Classes/Models you are specifying
// async function main() {
//   const pandas = await Panda.find({ age: { $lte: 21 } })
//   console.log(pandas)
// }

// main()

// const panda = new Panda({ name: 'Robert', age: 18 })
//
// panda.save().then(() => console.log(`we have a new panda ${panda.name}`))
