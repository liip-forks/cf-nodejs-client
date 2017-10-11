"use strict";

const CloudControllerBase = require("./CloudControllerBase");
const rest = require("restler");//TODO: Analyze a way to remove this dependency
const fs = require("fs");

/**
 * This public class manages the operations related with Applications on Cloud Controller.
 */
class Tasks extends CloudControllerBase {



    /**
     * Creates a new application on Cloud Controller.
     * {@link http://apidocs.cloudfoundry.org/214/apps/creating_an_app.html}
     *
     * @example
     * var appOptions = {
     *     "name": name,
     *     "space_guid": space_guid,
     *     "buildpack" : buildPack
     * }
     *
     * @param  {JSON} appOptions   [options to create the application]
     * @return {JSON}              [information about the application]
     */
    run (appGuid, appOptions) {

        const url = `${this.API_URL}/v3/apps/`;
        const options = {
            method: "POST",
            url: url + appGuid + '/tasks',
            headers: {
                "Content-Type": "application/json",
                Authorization: `${this.UAA_TOKEN.token_type} ${this.UAA_TOKEN.access_token}`
            },
            body: JSON.stringify(appOptions)
        };

        return this.REST.request(options, this.HttpStatus.ACCEPTED, true);
    }



}

module.exports = Tasks;
