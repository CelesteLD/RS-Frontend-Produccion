import backend from "../../../backend.js";

export class RestaurantService {

  static async getRestaurants() {
    const response = await backend.get("/api/rest/all");
    return response.data;
  }

}

