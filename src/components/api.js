import axios from "axios";

const urlArticle = "http://127.0.0.1:8000/user";


export const getAllArticles = async(id) => {
    id = id || "";
    return await axios.get(`${urlArticle}/${id}`);
}
export const deletearticle = async(id) => {
    return await axios.delete(`${urlArticle}/${id}`);
}

export const addarticle = async(article) => {
    return await axios.post(urlArticle, article);
}
export const editarticle = async(id, article) => {
    return await axios.put(`${urlArticle}/${id}`, article);
}