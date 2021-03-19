import { post } from "axios";
import { config as configEnvironments } from "../config";

/* Prod */
const API_URL = "http://localhost:8000/api/movies";
/* Dev */
// const API_URL = "http://localhost:8000/api/movies";
function getMovies() {
  return post(`${API_URL}`, {
    akelab: configEnvironments.clientId,
  });
}

export { getMovies };
