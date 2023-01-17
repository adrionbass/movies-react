const API = "httpS://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzQ4N2U1NGRkZjlhODc1MzA4Njk0ODdiMDZhMGRjMCIsInN1YiI6IjYzYzZkNDJlNWFkNzZiMDA3Y2FmM2Q4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQlrCjfxJOsFCMQZrpDZRYSzB99EbRc2S7O9wpWxRlU",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then(result => result.json())
}