const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoDB URI:
const mongoDB_URI =
  'mongodb+srv://james990327:james990327@soloproject.zxwcui2.mongodb.net/?retryWrites=true&w=majority';
// connect to DB
mongoose
  .connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'soloproject',
  })
  .then(() => console.log('Connected to Mongo DB!'))
  .catch((err) => console.log(err));
// creater user scehma
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
