document.addEventListener("DOMContentLoaded", function () {
  // Array of topics; in future, simply add new objects to this array.
  const topics = [
    { name: "Functional Programming", link: "https://your-github-notebook-link.com" },
    { name: "Machine Learning Basics", link: "https://your-github-notebook-link.com" },
    { name: "Deep Learning Concepts", link: "https://your-github-notebook-link.com" },
    { name: "Python for Data Science", link: "https://your-github-notebook-link.com" }
  ];

  const topicsContainer = document.getElementById("topics-container");

  topics.forEach(topic => {
    // Create a topic card element
    const card = document.createElement("div");
    card.className = "topic-card";

    // Card inner HTML structure
    card.innerHTML = `
      <div class="card-content">
        <h3>${topic.name}</h3>
        <p>Explore this topic to enhance your skills and knowledge.</p>
      </div>
      <div class="card-footer">
        <a href="${topic.link}" target="_blank">View Notebook</a>
      </div>
    `;

    // Append the card to the topics container
    topicsContainer.appendChild(card);
  });
});

