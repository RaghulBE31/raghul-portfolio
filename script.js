const contactForm = document.getElementById("contactForm");
        const formStatus = document.getElementById("formStatus");
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            formStatus.textContent = "";
            formStatus.style.color = "#b91c1c";
            if (name.length < 2) {
                formStatus.textContent =
                    "Name must contain at least 2 characters.";
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formStatus.textContent =
                    "Please enter a valid email address.";
                return;
            }
            if (message.length < 10) {
                formStatus.textContent =
                    "Message must contain at least 10 characters.";
                return;
            }
            formStatus.style.color = "#15803d";
            formStatus.textContent =
                "message has been sent.";
        });
        const projectForm = document.getElementById("projectForm");
        const newProjects = document.getElementById("newProjects");
        const projectStatus = document.getElementById("projectStatus");
        let projectCount = 3;
        projectForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const projectName =
                document.getElementById("projectName").value.trim();
            const projectDescription =
                document.getElementById("projectDescription").value.trim();
            projectStatus.style.color = "#b91c1c";
            projectStatus.textContent = "";
            if (projectName.length < 3) {
                projectStatus.textContent =
                    "Project name must contain at least 3 characters.";
                return;
            }
            if (projectDescription.length < 10) {
                projectStatus.textContent =
                    "Description must contain at least 10 characters.";
                return;
            }
            const project = document.createElement("article");
            project.className = "project-card";
            const heading = document.createElement("h3");
            heading.textContent = `${++projectCount}. ${projectName}`;
            const description = document.createElement("p");
            description.textContent = projectDescription;
            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete-button";
            deleteButton.textContent = "Remove Project";
            deleteButton.addEventListener("click", function () {
                project.remove();
                projectStatus.style.color = "#15803d";
                projectStatus.textContent = "Project removed.";
            });
            project.appendChild(heading);
            project.appendChild(description);
            project.appendChild(deleteButton);
            newProjects.appendChild(project);
            projectStatus.style.color = "#15803d";
            projectStatus.textContent = "Project added successfully!";
            projectForm.reset();
        });
