import { getAllStories } from "../services/stories.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";

export const getStoriesController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filter = parseFilterParams(req.query);
  const stories = await getAllStories({
    page,
    perPage,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: "Successfully found stories!",
    data: stories,
  });
};
