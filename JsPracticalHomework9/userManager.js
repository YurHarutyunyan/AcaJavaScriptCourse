  class User {
    constructor(id, name, email) {
      this.email = email;
      this.name = name;
      this.id = id;
    }
  }
  function createUserManager(){
  class UserManager {
    userData = new Map();
    addUsers(users) {
      users.forEach((element) => {
        this.userData.set(element['id'], element);
      });
    }
    getUserById(id) {
      return this.userData.get(id);
    }
  }
  return new UserManager();
  }
  const userManager = createUserManager()
  console.log(userManager);
  const user1 = new User(1,'xulio','xuli@.com');
const user2 = new User(2,'iglesias','igo@.com');
userManager.addUsers([user1,user2])
console.log(userManager);
console.log(userManager.getUserById(1))