import axios from "axios";

const ENDPOINT = "http://localhost:40000/log";

const logRead = async (datetime = [], location = [], types = []) => {
    try {
        const response = await axios.post(ENDPOINT + "/read", {
            datetime: datetime,
            location: location,
            types: types,
        });
        return response.data;
    } catch (err) {
        console.error("Error occured in services.logService.read", err);
        return { err: err };
    }
};

export { logRead };
