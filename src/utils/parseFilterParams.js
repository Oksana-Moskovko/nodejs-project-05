import { CategoryCollection } from "../db/models/category.js";

const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;
  const isCategory = (category) => CategoryCollection.findById(category);

  if (isCategory(category)) return category;
};

const parseFavoriteCount = (favoriteCount) => {
  const isString = typeof favoriteCount === 'string';
  if (!isString) return;

   const isFavoriteCount = (favoriteCount) => ['popular'].includes(favoriteCount);

  if (isFavoriteCount(favoriteCount)) return favoriteCount;
};

export const parseFilterParams = (query) => {
    const { category, type} = query;

    const parsedCategory = parseCategory(category);
    const parsedFavoriteCount = parseFavoriteCount(type);

  return {
      category: parsedCategory,
      favoriteCount: parsedFavoriteCount,
  };
};

