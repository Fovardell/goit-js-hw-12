const LINK = 'https://pixabay.com/api/';
const API_KEY = "44037717-f466124c8e4208be15c31102c";
const params = new URLSearchParams({
	key: API_KEY,
	image_type: "photo",
	orientation: "horizontal",
	safesearch: "true",
});
export function fetchImages(querryValue) {
	params.append("q", querryValue);
	return fetch(`${LINK}?${params}`).then(res => {
		if (!res.ok) {
			throw new Error(res.status);
		}
		return res.json();
	});
}