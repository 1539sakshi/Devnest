getData();

function getData() {
  url= "https://meme-api.herokuapp.com/gimme";
    
        fetch(url).then((response) => response.json())
        .then((data) => {
          const myDiv = document.querySelector(".myDiv");
          const imageTag = document.createElement("img");
          imageTag.setAttribute("src", data.url);
          myDiv.appendChild(imageTag);
        })

        .catch((error) => console.log("ERROR OCCURED"));
}

