//  "Télécharger mon CV" button
    document.querySelector("#a-propos button").addEventListener("click", function() {
        alert("Téléchargemetn du CV en cours... ");       
    });
 // "Voir le projet" buttons
    document.querySelectorAll(".project-card button").forEach(button => {
        button.addEventListener("click", function() {
            alert("Projets en cours de développement...");
        });
    });

// //  "Contactez-moi" button
//     document.querySelector("#contact button").addEventListener("click", function() {
//         alert("Formulaire de contact en cours de développement...");       
//     });


      document.querySelector("#hero button").addEventListener("click", function() {
        const projectsSection = document.getElementById("projets");
        if (projectsSection) {
            window.scrollTo({
                top: projectsSection.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        }
    });

    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log("Contenu de formObject :", formObject); // Pour le débogage

            // Vérifiez les noms des champs ici
            if (formObject.prenom || formObject.nom || formObject.sujet || formObject.message) {
                console.log("Form submitted:", formObject);
                alert("Merci pour votre message, je vous répondrai dès que possible !");
                  contactForm.reset();
            } else {
                alert("Aucune information n'est saisie");
                contactForm.reset();
            }
         
        });
    }

    
