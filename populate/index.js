const config = require("../config/dev");
const mongoose = require("mongoose");

const fakeDb = require("./FakeDb");

exports.connect = () => {
  return mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    async (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(">starting populating DB");
        await fakeDb.populate();
        await mongoose.connection.close();
        console.log("> DB has been populated");
      }
    }
  );
};
