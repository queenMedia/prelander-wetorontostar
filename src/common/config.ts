export default {
  api: process.env.API || "http://localhost:5000",
  api_local: process.env.API_LOCAL || `http://localhost:${process.env.PORT || "3000"}`,
  landing: process.env.LANDING || "http://localhost:8000",
  ipregistry_key: process.env.IPREGISTRY_KEY,
  ipregistry_url: process.env.IPREGISTRY_URL
};
