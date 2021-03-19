import { post } from "axios";
import { config as configEnvironments } from "../config";

const API_URL = "http://localhost:8000/api/movies";

function getMovies() {
  return post(`${API_URL}`, {
    akelab: configEnvironments.clientId,
  });
}

export { getMovies };
