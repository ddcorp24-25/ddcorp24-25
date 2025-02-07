import { renderGameThumbnail } from './renderGameThumbnail.js';
import View from './View.js';
import data from './data.js';

class GameListView extends View{
    constructor(element) {
        super(element);
        // Gestion de la barre de recherche
        this.magnifier = document.querySelector('.toggleSearchButton');
        this.form = document.querySelector('.searchForm');
        this.magnifier.addEventListener('click', () => this.toggleSearchForm());
        this.form.addEventListener('submit', (event) => this.filterForm(event));
    }

    renderGameList(data) {
        let htmlRes = '';
        data.forEach((game) => htmlRes += renderGameThumbnail(game));
        // Insert the generated HTML into the DOM
        this.element.querySelector('.gameList .results').innerHTML = htmlRes;
    }

    toggleSearchForm() {
        if (this.form.getAttribute('style') === 'display: none') {
            this.form.setAttribute('style', '');
            this.magnifier.classList.add('opened');
        } else {
            this.form.setAttribute('style', 'display: none');
            this.magnifier.classList.remove('opened');
        }
    }

    filterForm(event) {
        event.preventDefault();
        console.log("filterForm activé !");
    
        if (!data) {
            console.error("Erreur : Aucune donnée de jeu disponible !");
            return;
        }
    
        const searchValue = this.form.querySelector('input[name=search]').value;
        const filterValue = this.form.querySelector('select[name=ordering]').value;
    
        const filteredData = data.filter(game => 
            game.name.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === ''
        );
    
        if (filterValue === '-metacritic') {
            filteredData.sort(this.compareMetric).reverse();
        } else if (filterValue === '-released') {
            filteredData.sort(this.compareReleaseDate).reverse();
        } else {
            filteredData.sort(this.compareName);
        }
    
        this.renderGameList(filteredData);
    }
    
    
    // Fonctions de tri
    compareMetric(a, b) {
        return a.metacritic - b.metacritic;
    }

    compareReleaseDate(a, b) {
        return new Date(a.released) - new Date(b.released);
    }

    compareName(a, b) {
        return a.name.localeCompare(b.name);
    }
}

export default GameListView;
