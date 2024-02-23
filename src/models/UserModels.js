const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullname: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    avatar: {
      type: String, ///clodudinary url
      required: true,
    },

    coverImage: {
      type: String, ///clodudinary url
    },

    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save" async function(next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password ,10)
    next()
});

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}


const User = new mongoose.model("User", UserSchema);
module.exports = User;
