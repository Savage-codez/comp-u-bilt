// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
{
  authors: ["Suzanne Collins"],
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule:",
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  title: "The Hunger Games"
}
*/

// set up book schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// create Book model using schema
const User = mongoose.model("User", userSchema);

// export model
module.exports = User;
