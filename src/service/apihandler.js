import axios from 'axios';


class ApiHandler {
    constructor(accessToken) {
        this.baseUrl = "http://localhost:3032";
        this.accessToken = accessToken || null;
        if (!accessToken) {
            return false
        }
    }

    #POST_REQUEST = (endpoint, data, accessToken, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }
        const reqOptions = {
            method: "POST",
            data: data || {},
            headers: {}
        }
        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }

        if (options) {
            if (options.multipart) {
                reqOptions.headers["Content-Type"] = "multipart/form-data"
            }
        }


        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
            .then((res) => res.data)
            .catch((error) => error?.response?.data || { data: { error: true, message: "une erreur est survenue" } })
    }

    #GET_REQUEST = (endpoint, id, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }

        const reqOptions = {
            method: "GET",
            headers: {}
        }

        // console.log(options)

        if (options) {
            if (options.accessToken) {
                reqOptions.headers.Authorization = `Bearer ${options.accessToken}`
            }
        }

        const apiUrl = !id ? `${this.baseUrl}${endpoint}` : `${this.baseUrl}${endpoint}/${id}`

        return axios(apiUrl, reqOptions)
            .then((res) => res.data)
            .catch((error) => error?.response?.data || { data: { error: true, message: "une erreur est survenue" } })
    }

    #PATCH_REQUEST = (endpoint, data, accessToken, options) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }

        // console.log(options)

        const reqOptions = {
            method: "PATCH",
            data: data || {},
            headers: {}
        }

        if (options) {
            if (options.multipart) {
                reqOptions.headers["Content-Type"] = "multipart/form-data"
            }
        }

        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }

        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
            .then((res) => res.data)
            .catch((error) => error?.response?.data || { data: { error: true, message: "une erreur est survenue" } })
    }

    #DELETE_REQUEST = (endpoint, data, accessToken) => {
        if (!endpoint) {
            return { error: true, message: "aucun endpoint a été défini" }
        }
        const reqOptions = {
            method: "DELETE",
            data: data || {},
            headers: {}
        }
        if (accessToken) {
            reqOptions.headers.Authorization = `Bearer ${accessToken}`
        }


        return axios(`${this.baseUrl}${endpoint}`, reqOptions)
            .then((res) => res)
            .catch((error) => error?.response?.data || { error: true, message: "une erreur est survenue" })
    }


// news : getall,get bt id, create, update, delete 

// categorie getall, get by id 








    // User methods
    user = {
        SignIn: async (data) => {
            return await this.#POST_REQUEST("/user/signin", data)
        },
        GetProfile: async () => {
            return await this.#POST_REQUEST("/user/profile", {}, this.accessToken)
        },
    }

    // categorie methods
    categorie = {
        GetAll: async () => {
            return await this.#GET_REQUEST("/categorie")
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/categorie/find", data, this.accessToken)
        },
    }

    // New methods
    new = {
        Create: async (data) => {
            return await this.#POST_REQUEST("/new/create", data, this.accessToken, { multipart: true })
        },
        Update: async (data) => {
            return await this.#PATCH_REQUEST("/new/update", data, this.accessToken, { multipart: data.thumbnail ? true : false })
        },
        GetAll: async () => {
            return await this.#GET_REQUEST("/new")
        },
        GetById: async (data) => {
            return await this.#POST_REQUEST("/new/find", data)
        },
        Delete: async (data) => {
            return await this.#DELETE_REQUEST("/new/delete", data, this.accessToken)
        }
    }


    updateAccessToken = (token) => {
        // localStorage.setItem("accessToken", token)
        return this.accessToken = token
    }
}

export default ApiHandler;