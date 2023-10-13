const User = {
}

window.onload = () => {
    User.firstName = "John";
    User.lastName = "Smith";
    console.log(User);
    User.firstName = "Paul";
    delete User.firstName
    console.log(User)
}