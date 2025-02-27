document.addEventListener("DOMContentLoaded", function () {
  // JSON file ka URL (GitHub Raw Link)
  const jsonURL =
    "https://raw.githubusercontent.com/Mubeen-Ahmad/urls/refs/heads/main/links.json";

  // ✅ Current Page ka Name extract karna (e.g., "functional_programming.html")
  const pagePath = window.location.pathname.split("/").pop();
  const courseKey = pagePath.replace(".html", ""); // "functional_programming" or "dsa"

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

      // ✅ Current Page ke Mutabiq Subtopics Render
      const subtopicsListEl = document.getElementById("subtopics-list");

      // ⚡ Dynamically selected courseKey ko use karo
      if (subtopicsListEl && data.courses[courseKey]?.subtopics) {
        const courseData = data.courses[courseKey]; // ✅ Current course ka data
        const fragment = document.createDocumentFragment();

        Object.keys(courseData.subtopics).forEach((key) => {
          const subtopic = courseData.subtopics[key];

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
