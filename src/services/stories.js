import { StoriesCollection } from "../db/models/stories.js";

export const getAllStories = async () => {
  const stories = await StoriesCollection.find();
  return stories;
};