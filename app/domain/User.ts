export default class User {
  private database: FakeDatabaseInterface;

  constructor(database: FakeDatabaseInterface) {
    database = database;
  }

  public getName() {
    return this.database.findName();
  }
}


