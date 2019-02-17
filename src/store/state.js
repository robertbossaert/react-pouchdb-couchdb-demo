import PouchDB from 'pouchdb';

class DbContainer {
  constructor(name) {
    this.localDB = new PouchDB(name);

    try {
      const credentials = require('../secret');
      const { cloudantUrl, username, password } = credentials.default;

      if (credentials.default.cloudantUrl) {
        this.remoteDB = new PouchDB(cloudantUrl, {
          auth: { username, password },
        });
      }
    } catch (ex) {
      throw new Error('Unable to find secret.js file. Remote sync disabled.');
    }
  }
}

export default DbContainer;
