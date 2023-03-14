const dal = require("../data/datalayer");
const _ = require("underscore");

const defaultNumber = 10;
const defaultPage = 1;

const business = {
    getAllCustomers : function() {
        return dal.getAllCustomers();
    },

    getCustomers : function(number, page) {
        if( number === undefined || page === undefined){
            number = defaultNumber;
            page=defaultPage;
        }
        const resCustomers = dal.getCustomers(number, page);

        resCustomers.page=page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.cell(resCustomers.total / number);

        return resCustomers;
    },

    addCustomer : function(customer) {

    },

    getCounterByAttribute : function(attr) {

    },
};

module.exports = business;