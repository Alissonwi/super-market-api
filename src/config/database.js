require("dotenv").config({
	path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
  });
  
  module.exports = {
	uri: `${process.env.IP_MONGO}`
  };
  