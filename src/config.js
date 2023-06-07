const env = process.env.NODE_ENV || "development"

const config = {
    test: {
        API_ENDPOINT: "http://localhost:9000/api/todos"
    },
    development: {
        API_ENDPOINT: "http://localhost:9000/api/todosfirebase"
    },
    production: {
        API_ENDPOINT: "<deployed-api-endpoint>"
    },
}[env];

export default config;