import { StoriesCollection } from "../db/models/stories.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllStories = async ({
  page, perPage, filter = {},
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const storiesQuery = StoriesCollection.find()
    .populate("category", 'name')
    .populate("ownerId", "name");

  if (filter.favoriteCount) {
    storiesQuery.sort({ favoriteCount: -1 });
    storiesQuery.limit(3);
  } else {
    storiesQuery.skip(skip).limit(limit);
  }

  if (filter.category) {
    storiesQuery.where('category').equals(filter.category);
  }

   const storiesCount = await StoriesCollection.find()
    .merge(storiesQuery)
    .countDocuments();

  const stories = await storiesQuery.exec();

  const paginationData = calculatePaginationData( storiesCount, perPage, page);

  return {
    data: stories,
    ...paginationData,
   };
};
