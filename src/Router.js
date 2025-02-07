class Router {
    static routes = [];

    static navigate(path) {
		const route = Router.routes.find(route => route.path === path);
	
		if (route) {
			Router.updateMenuLink(path);
			Router.removeActiveSection();
	
			// Vérifier si la vue est valide avant de l'afficher
			if (route.view) {
				route.view.show();
			} else {
				console.error('Vue pour le chemin ' + path + ' est undefined');
			}
	
			Router.updateTitle(route.title);
		} else {
			console.error('Route non trouvée pour le chemin : ' + path);
		}
	}
	

    static updateMenuLink(path) {
        const navLinks = document.querySelectorAll('body > header ul.mainMenu li > a');
        navLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(`a[href="${path}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    static removeActiveSection() {
        const activeSection = document.querySelector('.viewContainer .viewContent.activeOnly > article.active');
        if (activeSection) {
            activeSection.classList.remove('active');
        }
    }

    static updateTitle(title) {
        const titleElement = document.querySelector('.viewTitle');
        if (titleElement) {
            titleElement.innerHTML = `<h1>${title}</h1>`;
        }
    }
}

export default Router;
