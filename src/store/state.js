import { Container } from 'unstated';
import PouchDB from 'pouchdb';

type DbState = {
  items: {},
};

class DbContainer extends Container<DbState> {
  state = {
    items: {},
  };

  constructor(name) {
    super();

    this.localDB = new PouchDB(name);

    try {
      const credentials = require('../secret');
      const { cloudantUrl, username, password } = credentials.default;

      if (credentials.default.cloudant_url) {
        this.remoteDB = new PouchDB(cloudantUrl, {
          auth: { username, password },
        });
      }
    } catch (ex) {
      throw new Error('Unable to find secret.js file. Remote sync disabled.');
    }

    /**
     * If a remote DB is intialized, synchronize local CouchDB with a remote CouchDB
     */
    if (this.remoteDB) {
      this.syncToRemote();
    }

    this.getItems().then(items => this.setState({ items }));
  }

  /**
   * Synchronize local PouchDB with a remote CouchDB
   */
  syncToRemote() {
    this.localDB
      .sync(this.remoteDB, {
        live: true,
      })
      .on('change', () => {
        this.getItems().then(items => this.setState({ items }));
      })
      .on('paused', err => {
        // replication paused (e.g. replication up to date, user went offline)
        console.log('paused', err);
      })
      .on('active', () => {
        // replicate resumed (e.g. new changes replicating, user went back online)
        console.log('active');
      })
      .on('denied', err => {
        // a document failed to replicate (e.g. due to permissions)
        console.log('denied', err);
      })
      .on('complete', info => {
        // handle complete
        console.log('complete', info);
      })
      .on('error', err => {
        // handle error
        console.log('error');
        console.log(JSON.stringify(err));
      });
  }

  async getItems() {
    const items = {};
    const allItems = await this.localDB.allDocs({ include_docs: true });
    allItems.rows.forEach(n => (items[n.id] = n.doc));
    console.log(`Items from database: ${JSON.stringify(allItems)}`);
    return items;
  }

  /**
   * Save the item
   */
  async saveItem(item) {
    this.localDB.post(item);
  }

  async deleteItem(item) {
    this.localDB.remove(item);
  }
}

export default DbContainer;
