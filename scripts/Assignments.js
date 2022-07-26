import { getPets, getWalkers, getWalkerCities, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
export const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findCity = (walker, allWalkerCities) => {
    let currentCity = null


    // foundMatch will have the value of match object that made line 31 evaluate to true
    const foundMatch = walkerCities.find(
        // Anynomous funciton / callback function
        (match) => {
            return match.walkerId === walker.id
        }
    )

    // foundCity will have the value of the city object that made line 38 evaluate to true
    const foundCity = cities.find(
        (city) => {
            return foundMatch.cityId === city.id
        }
    )


    // for (const match of walkerCities) {
    //     if (match.walkerId === walker.id) {
    //         for (const city of cities) {
    //             if (match.cityId === city.id) {
    //                 currentCity = city
    //             }
    //         }
    //     }
    // }
    return foundCity
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentCity = findCity(currentPetWalker, walkerCities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}


// Find array method iterates through and as soon as the quality check is true, it ends so it returns first match

// For loops never stop, so it returns the last match

