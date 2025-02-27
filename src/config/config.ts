require('dotenv').config();



const setup = {

    port : 4000,
    mongodb: {
        uri : process.env.MONGODB_URL
    }

}

export default setup

