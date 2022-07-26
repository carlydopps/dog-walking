import { getPets, getWalkers } from "./database.js"
import { findWalker } from "./Assignments.js"

const pets = getPets()
const walkers = getWalkers()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

// Define an event listener to display a message when a pet is clicked
    // Define a variable to store the value of the target
    // If the primary key of the target starts with "pet"
        // Split the id and use array deconstruction to store the integer in a new variable
    // For each pet in the pets array
        // If the pet id matches the target id after applying parse Int
            // Generate a message saying "[Pet name] is being walked by [walker name]"

document.addEventListener (
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("pet")) {
            const [, petId] = clickEvent.target.id.split("--")
            // for (const pet of pets) {
            //     if (pet.id === parseInt(petId)) {
            //         // const assignedWalker = findWalker(pet, walkers)
            //         for (const walker of walkers) {
            //             if (walker.id === pet.walkerId) {
            //                 window.alert(`${pet.name} is being walked by ${walker.name}`)
            //             }
            //         }
            //     }
            // }
            const foundPet = pets.find(
                (pet) => {
                    return pet.id === parseInt(petId)
                }
            )
            const foundWalker = findWalker(foundPet, walkers)
            window.alert(`${foundPet.name} is being walked by ${foundWalker.name}`)
        }
    }
)