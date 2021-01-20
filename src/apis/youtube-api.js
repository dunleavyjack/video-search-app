import axios from 'axios';

const KEY = "AIzaSyAixrLeWGyWBhpVvjfi57PCpV20i59nLnw"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
