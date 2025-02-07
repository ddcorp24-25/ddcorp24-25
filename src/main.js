import data from "./data.js";
import HelpView from './HelpView.js';
import View from './View.js';
import GameListView from './GameListView.js';
import Router from './Router.js';

// Définir les vues et les routes
const helpElement = document.querySelector('.help');
const gameListElement = document.querySelector('.gameList');
const aboutElement = document.querySelector('.about');

const helpView = new HelpView(helpElement);
const gameListView = new GameListView(gameListElement);
const aboutView = new View(aboutElement);

const routes = [
	{ path: '/gameList', view: gameListView, title: 'jeu' },
	{ path: '/', view: gameListView, title: 'Jeu' },
	{ path: '/about', view: aboutView, title: 'À propos' },
	{ path: '/help', view: helpView, title: 'Support' },
];

Router.routes = routes;
Router.navigate('/about');

// Tri des données par défaut
data.sort(gameListView.compareName);
gameListView.renderGameList(data);

// Mise à jour du menu de navigation
document.querySelectorAll('body > header ul.mainMenu li > a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const path = event.currentTarget.getAttribute('href');
        console.log('Navigating to:', path);
		Router.navigate(path);
    });
});
