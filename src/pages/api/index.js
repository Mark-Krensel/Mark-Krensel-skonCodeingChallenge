export default async function handler(request, response) {
  switch (request.method) {
    case "POST":
      console.log("Y");
      const postData = JSON.parse(request.body);
      const nameToBeChecked = postData.userName;
      const passwordToBeChecked = postData.userPassword;

      const checkUser = (users) => {
        const usercheck = users.find(
          (user) =>
            user.name === nameToBeChecked &&
            user.password === passwordToBeChecked
        );
        if (usercheck) {
          console.log("Login successful");
        } else {
          console.log("Wrong password or username");
        }
        console.log(usercheck);
      };
      checkUser(users);

    default:
      return response
        .status(405)
        .json({ message: "HTTP method is not allowed" });
  }
}

const users = [
  {
    id: "1",
    name: "Batman",
    password: "Batcave",
  },
];
