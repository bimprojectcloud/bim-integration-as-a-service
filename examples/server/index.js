const express = require("express");
const BIMIntegration = require("./BIMIntegration");

const app = express();

const bimType = {
    "bimClass": {
        "ref": "BimClass",
        "id": "35a29d59-2f42-4c7f-9364-0d599cafca3f",
    },
    "geometryType": {
        "ref": "GeometryType",
        "id": "824cf009-012b-491e-a3e6-b3d0ef624ead",
    },
    "name": "luminaire name",
    "properties": [
        {
            "value": "random product code 01234",
            "parameter": {
                "ref": "Parameter",
                "id": "633afb41b2e8cb6b28aa849c",
            },
        },
        {
            "value": "pink",
            "parameter": {
                "ref": "Parameter",
                "id": "633afb41b2e8cb6b28aa81c1",
            },
        },
        {
            "value": "2c4609ab-8503-44cd-ade2-ece732e12a4e",
            "parameter": {
                "ref": "Parameter",
                "id": "633afb41b2e8cb6b28aa825e",
            },
        },
        {
            "value": 2361,
            "parameter": {
                "ref": "Parameter",
                "id": "633afb41b2e8cb6b28aa84c1",
            },
        },
        {
            "value": 258,
            "parameter": {
                "ref": "Parameter",
                "id": "633afb41b2e8cb6b28aa8481",
            },
        },
    ],
};

const CONNECTION_STRING = "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzNhZmI0MWIyZThjYjZiMjhhYTg0MmIifQ.ATna0evR89mmB2IgFlIlcXnfhoBzjW6clewmffg-FIsnctUcAhLnDuyGO6IcB6aELvwAQBRHX3VSRXTuDxivJEetARjg_a1umz4pQ_0QdTG3bgbAsj0MrXjQMWz7ZooDsjFQsStIGtbZGw9cCvycmPIS4MAhH9m25HbR-m32MZDLfcz5";

app.use(express.static("public"));

app.post(
    "/",
    (req, res) => {
        BIMIntegration
            .client(CONNECTION_STRING)
            .createURL(bimType)
            .then(
                (integrationURL) => {
                    res.redirect(integrationURL);
                },
                () => {
                    res.send("Something went wrong.");
                },
            );
    },
);

app.listen(80);
