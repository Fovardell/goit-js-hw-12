export function renderGallery(arr) {
	return arr.map(({ webformatURL, largeImageURL, tags, views, downloads, likes, comments }) => {
		return `
		<a href="${largeImageURL}" class="gallery-item">
			<div class="img-frame">
				<img
					src="${webformatURL}"
					alt="${tags}" title="${tags}">
					<ul class="img-info">
					<li>
						<p class="info-headers">Likes</p>
						<p class="info-text">${likes}</p>
					</li>
					<li>
						<p class="info-headers">Views</p>
						<p class="info-text">${views}</p>
					</li>
					<li>
						<p class="info-headers">Comments</p>
						<p class="info-text">${comments}</p>
					</li>
					<li>
						<p class="info-headers">Downloads</p>
						<p class="info-text">${downloads}</p>
					</li>
				</ul>
			</div>
		</a>
	`;
	}).join('');
}
