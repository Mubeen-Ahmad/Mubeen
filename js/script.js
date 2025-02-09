document.addEventListener("DOMContentLoaded", function () {
  // JSON file URL – isey apne actual JSON file ke raw link se replace karein
  const jsonURL =
    "https://raw.githubusercontent.com/Mubeen-Ahmad/urls/refs/heads/main/links.json";

  fetch(jsonURL)
    .then((response) => response.json())
    .then((data) => {
      // Populate courses if element exists (index.html)
      const coursesListEl = document.getElementById("courses-list");
      if (coursesListEl && data.courses) {
        const courses = data.courses;
        for (let key in courses) {
          if (courses.hasOwnProperty(key)) {
            const course = courses[key];
            // Create a course card element
            const card = document.createElement("div");
            card.className = "course-card";
            card.innerHTML = `
              <h3>${course.topic_name}</h3>
              <p>${course.description}</p>
              <a href="${course.url}" class="btn">Open Notes</a>
            `;
            coursesListEl.appendChild(card);
          }
        }
      }

      // Populate subtopics if element exists (functional.html)
      const subtopicsListEl = document.getElementById("subtopics-list");
      if (
        subtopicsListEl &&
        data.courses &&
        data.courses.functional_programming
      ) {
        const functional = data.courses.functional_programming;
        if (functional.subtopics) {
          const subtopics = functional.subtopics;
          for (let key in subtopics) {
            if (subtopics.hasOwnProperty(key)) {
              const subtopic = subtopics[key];
              // Create a subtopic card element
              const card = document.createElement("div");
              card.className = "subtopic-card";
              card.innerHTML = `
                <h3>${subtopic.topic_name}</h3>
                <p>${subtopic.description}</p>
                <a href="${subtopic.url}" target="_blank" class="btn">Open Notebook</a>
              `;
              subtopicsListEl.appendChild(card);
            }
          }
        }
      }
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
