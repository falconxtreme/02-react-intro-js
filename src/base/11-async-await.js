// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("https://asasasasasaa");
//   });
//   return promesa;
// };

// getImagenPromesa().then(console.log).catch(console.error);

const getImagen = async () => {
  try {
    const api_key = "xQnjXFKPiWqQKNK6qWeTp8LhMTVkXCnX";

    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );

    const { data } = await resp.json();
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

console.log(getImagen());
