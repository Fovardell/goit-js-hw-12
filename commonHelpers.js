import{S as m,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,views:e,downloads:r,likes:n,comments:p})=>`
		<a href="${s}" class="gallery-item">
			<div class="img-frame">
				<img
					src="${t}"
					alt="${i}" title="${i}">
					<ul class="img-info">
					<li>
						<p class="info-headers">Likes</p>
						<p class="info-text">${n}</p>
					</li>
					<li>
						<p class="info-headers">Views</p>
						<p class="info-text">${e}</p>
					</li>
					<li>
						<p class="info-headers">Comments</p>
						<p class="info-text">${p}</p>
					</li>
					<li>
						<p class="info-headers">Downloads</p>
						<p class="info-text">${r}</p>
					</li>
				</ul>
			</div>
		</a>
	`).join("")}const h="https://pixabay.com/api/",y="44037717-f466124c8e4208be15c31102c",l=new URLSearchParams({key:y,image_type:"photo",orientation:"horizontal",safesearch:"true"});function g(o){return l.append("q",o),fetch(`${h}?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const L={form:document.querySelector("form"),frame:document.querySelector(".gallery"),loader:document.querySelector(".loader"),lightbox:new m(".gallery a")},{form:c,frame:u,loader:f,lightbox:b}=L;c.addEventListener("submit",o=>{if(o.preventDefault(),!o.target.querry.value){a.error({title:"Error",message:"Your search query must not be empty. Please try again!",position:"topRight",timeout:3500});return}u.innerHTML="",f.classList.remove("hidden");const t=o.target.querry.value.trim().split(" ").join("+");g(t).then(s=>{if(!s.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3500});return}u.innerHTML=d(s.hits),b.refresh()}).catch(s=>{console.log(s)}).finally(()=>{c.reset(),f.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
