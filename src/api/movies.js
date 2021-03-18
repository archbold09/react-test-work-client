import { get } from "axios";

const getMovies = async () => {
  return get(dataPath)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export { getMovies };
