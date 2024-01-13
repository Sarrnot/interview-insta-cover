const BASE_URL =
    "https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master";
const DATA_URL = `${BASE_URL}/movies.json`;
const IMAGE_DIRECTORY_URL = `${BASE_URL}/public/images`;

const itemTemplate = ({ title, episodeNumber, imageSrc }) => `
    <li class="movie__item">
        <div class="movie__title">${title}</div>
        <div class="movie__episode-number">Episode: ${episodeNumber}</div>
        <img class="movie__image" src="${imageSrc}" loading="lazy">
    </li>
`;

const response = await fetch(DATA_URL);
const json = await response.json();

const sortByEpisode = (a, b) => a.episodeNumber > b.episodeNumber;

const parsedData = json.movies
    .map((data) => ({
        title: data.title,
        episodeNumber: data.episode_number,
        imageSrc: `${IMAGE_DIRECTORY_URL}/${data.poster}`,
    }))
    .sort(sortByEpisode);

const listElement = document.querySelector(".js-list");

const render = () =>
    (listElement.innerHTML = parsedData
        .map((item) => itemTemplate(item))
        .join(""));

render();

const sortButton = document.querySelector(".js-sort");
sortButton.addEventListener("click", () => {
    parsedData.reverse();
    render();
});
