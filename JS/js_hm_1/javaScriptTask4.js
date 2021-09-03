let password = prompt ("Enter the password");

switch(password){

    case "pass123":
        console.log("You are logged in");
    break;

    case "admin":
        console.log("You are logged in as an admin");
    break;

    default:
        console.log("The password is not correct");
    break;
}