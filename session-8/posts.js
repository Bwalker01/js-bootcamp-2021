//Fetch API

const url = `https://jsonplaceholder.typicode.com/posts`;

//fetch(url).then((response) => console.log(response));

const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

console.log(fetchData());

const displayPosts = (posts) => {
  const postsList = document.getElementById("posts");

  posts.forEach(function (post) {
    const { id, body } = post;
    const listItem = document.createElement("li");
    listItem.innerHTML = `ID: ${id} | Body: ${body}`;
    postsList.appendChild(lsitItem);
  });
};
