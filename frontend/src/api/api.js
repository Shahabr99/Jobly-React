import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      const response = await axios({ url, method, data, params, headers });
      console.log("API responded:", response.data)
      return response.data
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routesstatic 

  // Get the current user
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get details on a company by handle. */
  static async getCompanies(name) {
    const res = await this.request("companies", {name});
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log(res)
    return res.company;
  }

  //Getting the current username.
  static async getUser(username) {
    const res = await this.request(`/${username}`)
    return res.username;
  }

  //Get token from backend when signup.
  static async signup(data) {
      
      const res = await this.request(`auth/register`, data, "post");
  
      return res.token
  }

  // Get token from backend when login.
  static async login(data) {
    const res = await this.request("auth/token", data, "post");
    console.log(res)
    return res.token;
  }

  // Get all the jobs from database
  static async getJobs(title) {
    const res = await this.request("jobs", {title});
    return res.jobs
  }

  //Adding jobs id and user id to association table.
  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {} ,"post");
  }
}



export default JoblyApi;