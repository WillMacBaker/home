/* 
    This file contains an array of objects, which is where
    project data used to populate ProjectPane.tsx are stored.

*/

export const projects  = [
    {
        title: "My FreeCodeCamp Portfolio",
        subtitle: "What have I submitted to the site recently?",
        description: 
            "See how I'm getting along on FreeCodeCamp",
        image: "src/assets/images/FreeCodeCamp_logo.png",
        link: "https://www.freecodecamp.org/willmacbaker",
        boxShadow: 'purple'
    },
    {
        title: "Basic Pokemon API JS",
        subtitle: "subtitle",
        description: 
            "Search the database of original pokemon here!",
        image: "",
        link: "https://willmacbaker.github.io/JSPortfolio/pokemonSearch/pokemon.html",
        boxShadow: '',
    },
    {
        title: "Gif Search Tool",
        subtitle: "Search for a GIF, any GIF!",
        description: "Hooked up to the GIPHY API, this basic page application can query GIPHY with user-chosen search queries",
        image: "src/assets/images/giphyProjectImage.png",
        link: "https://willmacbaker.github.io/giphy-technical-challenge/",
        boxShadow: '#4a90e2',
    }
]