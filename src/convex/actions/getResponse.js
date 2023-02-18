import fetch from "node-fetch";
import { action } from "../_generated/server";

function giphyUrl(queryString) {
//   return (
//     "https://api.giphy.com/v1/gifs/translate?api_key=" +
//     process.env.GIPHY_KEY +
//     "&s=" +
//     encodeURIComponent(queryString)
//   );
}

// Post a GIF chat message corresponding to the query string.
export default action(async ({ runMutation }, queryString, author) => {
    console.log("action!");
    // const data = await fetch('/profile');
    // console.log(data);
//     fetch('/profile')
//         .then(function (response) {

//             return response.json();
//         }).then(function (text) {
//             console.log('GET response:');
//             console.log(text.name); 
//         });

//   // Fetch GIF url from GIPHY.
//   const data = await fetch(giphyUrl(queryString));
//   const json = await data.json();
//   if (!data.ok) {
//     throw new Error(`Giphy errored: ${JSON.stringify(json)}`);
//   }
//   const gifEmbedUrl = json.data.embed_url;

//   // Write GIF url to Convex.
//   await runMutation("sendMessage", gifEmbedUrl, author, "giphy");
});