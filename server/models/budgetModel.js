const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const budgetSchema = new Schema({
  budget: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Budget', budgetSchema);
