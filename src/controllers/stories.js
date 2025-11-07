import { getAllStories } from "../services/stories.js";

export const getStoriesController = async (req, res, next) => {
  const contacts = await getAllStories();

  res.status(200).json({
    status: 200,
    message: "Successfully found contacts!",
    data: contacts,
  });
};