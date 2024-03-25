// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://asasads.com"));

// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "CUmwR3S23QlLHDxk0pAbOkNKCJuMiYE4";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const img = document.createElement("img");
    const { url } = await data.images.original;
    img.src = await url;
    document.body.append(img);
  } catch (error) {
    console.error(error)
  }
};

getImagen();
