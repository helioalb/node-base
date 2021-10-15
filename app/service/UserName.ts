import User from '../../domain/User';

class UserName {
  private user: User;

  constructor() {
    this.user = new User(new FakeDatabaseImpl());
  }

  public getName(): string {
    return this.user.getName()
  }
}
