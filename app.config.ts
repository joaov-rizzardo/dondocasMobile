require('dotenv').config()

const appName = "Dondocas Mobile"

export default {
    name: appName,
    version: "1.0.0",
    extra: {
        backendApi: process.env.BASE_URL_BACKEND_API
    }
}