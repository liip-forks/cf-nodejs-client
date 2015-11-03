/*jslint node: true*/
/*global describe: true, it: true*/
"use strict";

var chai = require("chai"),
    expect = require("chai").expect;

var HttpUtils = require('../../lib/utils/HttpUtils');
HttpUtils = new HttpUtils();

describe("HttpUtils", function () {

    it("HTML 200 Test", function () {
        this.timeout(5000);

        var url = "https://api.run.pivotal.io/v2/info";
        var options = {
            method: 'GET',
            url: url
        };

        return HttpUtils.request(options, "200", false).then(function (result) {
            expect(result).is.a("string");
        });
    });

    it("HTML 404 Test", function () {
        this.timeout(5000);

        var url = "https://github.com/cf-nodejs-client";
        var options = {
            method: 'GET',
            url: url
        };

        return HttpUtils.request(options, "404", false).then(function (result) {
            expect(result).is.a("string");
        });
    });

});