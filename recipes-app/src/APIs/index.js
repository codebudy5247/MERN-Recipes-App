import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5000" });

export const fetchRecipes = () => API.get("/api/recipe");
//export const fetchPostDetails = (id) => API.get(`/posts/${id}`);
//export const createRecipes = (newPost) => API.post("/api/recipe", newPost);