const api_key = "xQnjXFKPiWqQKNK6qWeTp8LhMTVkXCnX";

const peticion = fetch(
  `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch((err) => console.error(err));
