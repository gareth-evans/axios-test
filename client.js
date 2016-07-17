var statusCodes = [
    "100",
    "101",
    "102",
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "226",
    "300",
    "301",
    "302",
    "303",
    "304",
    "305",
    "306",
    "307",
    "308",
    "400",
    "401",
    "402",
    "403",
    "404",
    "405",
    "406",
    "407",
    "408",
    "409",
    "410",
    "411",
    "412",
    "413",
    "414",
    "415",
    "416",
    "417",
    "421",
    "422",
    "423",
    "424",
    "426",
    "428",
    "429",
    "431",
    "451",
    "500",
    "501",
    "502",
    "503",
    "504",
    "505",
    "506",
    "507",
    "508",
    "510",
    "511"
];

var axios = require('axios');

for (var i = 0; i < statusCodes.length; i++) {
    axios.get('http://localhost:8181/' + statusCodes[i])
    .then(response => {
        console.log(response.status + ' received by success handler')
    })
    .catch(error => console.log(error.response.status + ' received by error handler: ' + error.message));
}

