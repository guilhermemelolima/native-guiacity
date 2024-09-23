import axios from 'axios';


const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const baseurl = process.env.EXPO_PUBLIC_URL_GET_PLACES_BY_FILTER

export const useApi = () => ({
  getPlacesByFilter: async (filter: string): Promise<any> => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-23.5900,-48.0400&radius=10000&type=${filter}&key=${GOOGLE_API_KEY}`);
        return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
			console.error(error.response.data )
		}
    }
  },
  getNextPlaces: async (nextPageToken: string): Promise<any> => {
	try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextPageToken}&key=${GOOGLE_API_KEY}`);
        return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
			console.error(error.response.data )
		}
    }
  }
});
