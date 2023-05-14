// An array of names
const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop through each name and print a message based on the name
for (let i = 0; i < names.length; i++) {
  if (names[i].startsWith("J")) {
    console.log("Good Bye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
