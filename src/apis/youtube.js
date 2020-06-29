import axios from 'axios';


const KEY = 'AIzaSyAyaL9Xr4MUbn4gqvPN1I5bQQkB_wCZlQU';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        // order:"viewCount",
        key: KEY

    }

});



