const searchGenres = (genreIds, genres) => {
  const result = [];
  for (let i = 1; i < genres.length; i++) {
    for (let j = 0; j < genreIds.length; j++) {
      if (genres[i].id === genreIds[j]) result.push(genres[i].name);
    }
  }
  return result;
};
export { searchGenres };
