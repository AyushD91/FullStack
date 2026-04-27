const form = document.getElementById("postForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("message").innerText = "✅ Post submitted successfully!";
    form.reset();
  })
  .catch(error => {
    document.getElementById("message").innerText = "❌ Error submitting post";
  });
});