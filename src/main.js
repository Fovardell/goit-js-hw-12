import { renderGallery } from "./js/render-functions";
// import { fetchImages } from "./js/pixabay-api";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "44037717-f466124c8e4208be15c31102c";

import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
const selectors = {
	form: document.querySelector('form'),
	frame: document.querySelector('.gallery'),
	loader: document.querySelector('.loader'),
	lightbox: new SimpleLightbox('.gallery a'),
	loadMore: document.querySelector('.load-more'),
};
const { form, frame, loader, lightbox, loadMore, card } = selectors;
let pageIncrement;
let querryValue;
form.addEventListener("submit", (event) => {
	event.preventDefault();
	pageIncrement = 1;
	if (!event.target.querry.value) {
		iziToast.error({
			title: "Error",
			message: "Your search query must not be empty. Please try again!",
			position: "topRight",
			timeout: 3500,
		});
		return;
	}

	frame.innerHTML = "";
	loader.classList.remove("hidden");

	querryValue = event.target.querry.value.trim().split(" ").join("+");
	fetchImages(querryValue).then(res => {
		if (!res.hits.length) {
			iziToast.error({
				title: "Error",
				message: "Sorry, there are no images matching your search query. Please try again!",
				position: "topRight",
				timeout: 3500,
			});
			return;
		}
		frame.insertAdjacentHTML("beforeend", renderGallery(res.hits));
		lightbox.refresh();
		loadMore.classList.remove("hidden");
		if (Math.ceil(res.totalHits / 15) <= 1) {
			loadMore.classList.add("hidden");
			iziToast.info({
				message: "We're sorry, but you've reached the end of search results.",
				position: "topRight",
				timeout: 3500,
			});
		}
	})
		.catch(error => {
			console.log(error);
		})
		.finally(() => {
			form.reset();
			loader.classList.add("hidden");
		});

});


loadMore.addEventListener("click", () => {
	const lastArticle = document.querySelector('.img-frame');
	const cardHeight = lastArticle.getBoundingClientRect().height;
	const scrollHeight = cardHeight * 2;

	pageIncrement++;
	loader.classList.remove("hidden");
	loadMore.classList.add("hidden");

	fetchImages(querryValue).then((res) => {
		if (pageIncrement === Math.ceil(res.totalHits / 15)) {
			loader.classList.add("hidden");
			loadMore.classList.add("hidden");
			iziToast.info({
				message: "We're sorry, but you've reached the end of search results.",
				position: "topRight",
				timeout: 3500,
			});
		}
		frame.insertAdjacentHTML("beforeend", renderGallery(res.hits));
		lightbox.refresh();
		loader.classList.add("hidden");

		window.scrollBy({
			top: scrollHeight,
			left: 0,
			behavior: 'smooth',
		});
	}).catch(console.log);
});


async function fetchImages(querryValue) {
	const respose = await axios.get(`?`, {
		params: {
			q: querryValue,
			safesearch: "true",
			image_type: "photo",
			orientation: "horizontal",
			key: API_KEY,
			page: pageIncrement,
			per_page: 15,
		}
	});
	return respose.data;
}
