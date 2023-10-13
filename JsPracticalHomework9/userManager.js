function mapCreation() {
  class User {
    constructor(id, name, email) {
      this.email = email;
      this.name = name;
      this.id = id;
    }
  }
  class UserManager {
    userData = new Map();
    addUsers(users) {
      users.forEach((element) => {
        userData.set(element[id], element);
      });
    }
    getUserById(id) {
      return this.userData.get(id);
    }
  }
}
