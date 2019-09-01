import axios from 'axios';

//Youtube Video V3 API Key:
const KEY = 'KEY';

//creating and exporting an instance of the axios object
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});