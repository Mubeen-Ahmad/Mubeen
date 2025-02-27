document.addEventListener("DOMContentLoaded", function () {
  // JSON file ka URL (GitHub Raw Link)
  const jsonURL =
    "https://raw.githubusercontent.com/Mubeen-Ahmad/urls/refs/heads/main/links.json";

  fetch(jsonURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.courses) return;

      // 🎯 Courses ko render karna (index.html)
      const coursesListEl = document.getElementById("courses-list");
      if (coursesListEl) {
        const fragment = document.createDocumentFragment();
        Object.keys(data.courses).forEach((key) => {
          const course = data.courses[key];

          // Course Card Create
          const card = document.createElement("div");
          card.className = "course-card";
          card.innerHTML = `
            <h3>${course.topic_name}</h3>
            <p>${course.description}</p>
            <a href="${course.url}" class="btn">Open Notes</a>
          `;
          fragment.appendChild(card);
        });
        coursesListEl.appendChild(fragment);
      }

      // 🎯 Functional Programming Subtopics Render (functional.html)
      const subtopicsListEl = document.getElementById("subtopics-list");
      if (subtopicsListEl && data.courses.functional_programming?.subtopics) {
        const functional = data.courses.functional_programming;
        console.log(data.courses);

        const fragment = document.createDocumentFragment();

        Object.keys(functional.subtopics).forEach((key) => {
          const subtopic = functional.subtopics[key];

          // Subtopic Card Create
          const card = document.createElement("div");
          card.className = "subtopic-card";
          card.innerHTML = `
            <h3>${subtopic.topic_name}</h3>
            <p>${subtopic.description}</p>
            <a href="${subtopic.url}" target="_blank" class="btn">Open Notebook</a>
          `;
          fragment.appendChild(card);
        });

        subtopicsListEl.appendChild(fragment);
      }
    })
    .catch((error) => console.error("🚨 Error fetching JSON:", error.message));
});
