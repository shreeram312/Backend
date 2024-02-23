const mongoose = require("mongoose");
const mongooseaggregatepaginate = require("mongoose-aggregate-paginate-v2");

const Videoschema = new mongoose.Schema(
  {
    videofile: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    Views: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

Videoschema.plugin(mongooseaggregatepaginate);
const Video = new mongoose.model("Video", Videoschema);

module.exports = Video;
