function problem15(arrayOfUsers) {
  const averageAgeOfUsers = arrayOfUsers.reduce((ageCount, currentUserAge) => {
    return ageCount + currentUserAge.age / arrayOfUsers.length;
  }, 0);
  return averageAgeOfUsers;
}
problem15([
  {
    name: "John Doe",
    age: 30,
    isAdmin: false,
  },
  {
    name: "Jane Smith",
    age: 25,
    isAdmin: true,
  },
  {
    name: "Bob Johnson",
    age: 40,
    isAdmin: false,
  },
]);
