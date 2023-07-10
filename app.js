// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }

const createInstructor = (firstName, lastName) => {
    return {
      firstName,
      lastName
    }
}

var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

var instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}
  
instructor[favoriteNumber] = "That is my favorite!"


// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
// }

var instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
}


const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise
        }
    }
}