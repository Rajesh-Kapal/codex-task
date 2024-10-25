const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ed60da7a5dmsha819a0b3278cf03p120c18jsn3d4287cdd1eb",
    "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

const btn = document.querySelector("#btn");
const summary = document.querySelector("#summarize");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputUrl = document.querySelector("#url").value;
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${inputUrl}&lang=en&engine=2`;
  summary.innerText='Please wait...'
  fetch(url, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      summary.innerText = data.summary
    })
    .catch((error) => {
      console.log(error);
    });
});
