import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8e36aa55ed9946b88a004749ddc04047'
    }
});