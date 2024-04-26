//@ts-ignore:next-line
import axios from "axios";

export default class HttpService {
  static async get<T>(url: string): Promise<T | null> {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}
