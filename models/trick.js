import mongoose from "mongoose";

const Trick = mongoose.model("Trick", {
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  machine: {
    type: String,
    default: "",
  },
  theme: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    default: "",
  },
  steps: [
    { instruction: { type: String }, buttons: { type: Array, default: [] } },
  ],
  youtubeLinks: {
    type: Array,
    default: [],
  },
});

export default Trick;
