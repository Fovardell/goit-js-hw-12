
import { renderGallery } from "./js/render-functions";
import { fetchImages } from "./js/pixabay-api";
import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const selectors = {
	form: document.querySelector('form'),
	frame: document.querySelector('.gallery'),
	loader: document.querySelector('.loader'),
	lightbox: new SimpleLightbox('.gallery a'),
};
const { form, frame, loader, lightbox } = selectors;

form.addEventListener("submit", (event) => {
	event.preventDefault();

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
	const querryValue = event.target.querry.value.trim().split(" ").join("+");
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
		frame.innerHTML = renderGallery(res.hits);
		lightbox.refresh();
	})
		.catch(error => {
			console.log(error);
		})
		.finally(() => {
			form.reset();
			loader.classList.add("hidden");
		});

});