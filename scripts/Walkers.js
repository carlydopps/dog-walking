import { getWalkers, getCities, getWalkerCities } from "./database.js"

const walkers = getWalkers()

// Define a variable who value is the array of objects returned by the getWalkerCities function
const walkerCities = getWalkerCities()

// Adding event listener to document through dot notation
    // description of event: "click",
    // argument for function: clickEvent
        // function defines a variable itemClicked whose value is equal to the target of the clickEvent (target is what is being clicked on)
        // If the itemClicked.id references "walker"
            // Create a variable whose value is an array with values of [itemClicked.id split with "--", walkerID]
                // This basically says toss the characters in front of the "--" in itemClicked.id
                    // It does this by NOT adding a variable name to store that value in front of the comma [HERE, walkerId]
                // And it stores the first character after the "--" (second character in general) in itemClicked.id in the variable walkerId
            // for each walker of walkers
                // if the walker.id equals parseInt(walkerId) - parseInt will convert walkerID to a string and return the first integer found among the string
                    // Add an alert to the window that reads '${walker.name} services ${walker.city}'

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const matches = matchWalkerToCities(walker)
                    const cities = matchCityToName(matches)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
        return itemClicked
    }
)



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        // walkerHTML += `<li>${walker.fullName}</li>`
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}



// Define a function to find all cities for the walker
    // Define an empty array to store the cities that match the walker
    // For each city in the walkerCities array
        // if the city walkerId matches the id of the walker that was clicked on
            // Add it the city object to the array of cities that match the walker
    // Retrn the array of cities that match the walker

const matchWalkerToCities = (walker) => { // Walker doesn't need to be defined here because it will be called with the walker variable from the for loop in the addEventListener
    const matches = []
    for (const i of walkerCities) {
        if (i.walkerId === walker.id) {
            matches.push(i)
        }
    }
    return matches
}

// Define a variable whose value is the array of objects returned by the getCities function
const cities = getCities()

// Define a function to find the name of each walker city
    // Define variable whose value is an empty string to add the city names to
    // For each city in the matchingWalkerCities
        // If the city id matches the id of the city from the full cities list
            // Add the city name followed by 'and ' to the city names string
    // Remove the last five characters ' and ' from the city names string
    // Return the city names string

const matchCityToName = (matchedCities) => {
    let matchingCities = ""
    for (const i of matchedCities) {
        for (const city of cities) {
            if (i.cityId === city.id) {
                matchingCities += `${city.name} and `
            }
        }
    }
    matchingCities = matchingCities.slice(0, -5)
    return matchingCities
}
