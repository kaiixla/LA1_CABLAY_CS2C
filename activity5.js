//making a variable for the first and last name of the actor
let favActorFirstName = "Tom";
let favActorLastName = "Hanks";

//concatinating the first and last name
let fullName = favActorFirstName + " " + favActorLastName;

//turning the full name into uppercase
let uppercase = fullName.toUpperCase();

//concatinating the message and the uppercase full name
let message = "My favorite actor is " + uppercase;

//append the message to include the "his best show is A Man Called Otto."
message += " his best show is A Man Called Otto.";

//console to display the output
console.log(message);
