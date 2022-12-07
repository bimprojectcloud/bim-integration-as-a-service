const fetch = require("node-fetch");

class BIMIntegration {

    static SERVER = "https://integrate.bimproject.cloud";

    static client(connectionString) {
        return new this(connectionString);
    }

    connectionString

    constructor(connectionString) {
        this.connectionString = connectionString;
    }

    async createURL(bimType) {
        const response = await fetch(
            this.constructor.SERVER,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${ this.connectionString }`,
                },
                body: JSON.stringify(
                    {
                        bimType,
                    }
                ),
            },
        );
        const data = await response.json();
        return data.url;
    }

}

module.exports = BIMIntegration;
