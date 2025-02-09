document.addEventListener("DOMContentLoaded", function () {
    const topics = [
        { name: "Functional Programming", link: "https://your-github-notebook-link.com" },
        { name: "Machine Learning Basics", link: "https://your-github-notebook-link.com" },
        { name: "Deep Learning Concepts", link: "https://your-github-notebook-link.com" },
        { name: "Python for Data Science", link: "https://your-github-notebook-link.com" },
    ];

    const topicsList = document.getElementById("topics-list");

    topics.forEach(topic => {
        let div = document.createElement("div");
        div.classList.add("topic");
        div.innerHTML = `<a href="${topic.link}" target="_blank">👉 ${topic.name}</a>`;
        topicsList.appendChild(div);
    });
});

