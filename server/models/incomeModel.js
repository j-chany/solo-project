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
// creater scehma for Income stuff

const source = new Schema({
  name: { type: String },
  categories: { type: String },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  budget: { type: Number },
});

module.exports = mongoose.model('Source', source);
