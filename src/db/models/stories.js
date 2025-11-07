import { model, Schema } from 'mongoose';
import "../models/category.js";
import "../models/user.js";

const storySchema = new Schema(
    {
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    favoriteCount: {
      type: Number,
      default: 0,
    }
  },
);

export const StoriesCollection = model('stories', storySchema);