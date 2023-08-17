const { default: mongoose } = require('mongoose');

module.exports = async function connectDB() {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MongoDB Connected ${connection.connection.host}`.cyan.underline.bold
  );
};
