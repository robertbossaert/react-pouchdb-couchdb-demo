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

      if (credentials.default.cloudantUrl) {
        this.remoteDB = new PouchDB(cloudantUrl, {
          auth: { username, password },
        });
      }
    } catch (ex) {
      throw new Error('Unable to find secret.js file. Remote sync disabled.');
    }
  }

  async getItems() {
    const items = {};
    const allItems = await this.localDB.allDocs({ include_docs: true });
    allItems.rows.forEach(n => (items[n.id] = n.doc));
    console.log(`Items from database: ${JSON.stringify(allItems)}`);
    return items;
  }

  updateState = items => this.setState({ items });

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
