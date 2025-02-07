export const renderGameThumbnail = ({ background_image, name, released, metacritic }) => {
    return `
	<a href="${background_image}">
        <img src="${background_image}"/>
        <footer>
            <h3>${name}</h3>
            <div class="infos">
                <time datetime="${released}">${new Date(released).toLocaleDateString()}</time>
                <span class="metacritic">${metacritic}</span>
            </div>
        </footer>
    </a>`;
}