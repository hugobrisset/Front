const fs = require("fs");


const filename = "./data/customers.json";

let datalayer = {
    getAllCustomers : function() {
        const data = fs.readFileSync(filename);
        return JSON.parse(data);
    },

    getNextId : function(){

    },
    addCustomer: function(customer) {

    },
    getCustomers : function(number, page) {
        let rawdata = fs.readFileSync(filename);
        let customers = JSON.parse(rawdata);
        const total = customers.lenght;

        if(number && page){
            customers = customers.slice((page-1) * number, page);
        }

        const result = {
            total : total,
            result : customers
        };

        return result;
    },
};

module.exports = datalayer;