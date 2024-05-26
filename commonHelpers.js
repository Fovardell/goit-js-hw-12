import{a as m,S as b,i as d}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,views:e,downloads:t,likes:a,comments:L})=>`
		<a href="${i}" class="gallery-item">
			<div class="img-frame">
				<img
					src="${r}"
					alt="${o}" title="${o}">
					<ul class="img-info">
					<li>
						<p class="info-headers">Likes</p>
						<p class="info-text">${a}</p>
					</li>
					<li>
						<p class="info-headers">Views</p>
						<p class="info-text">${e}</p>
					</li>
					<li>
						<p class="info-headers">Comments</p>
						<p class="info-text">${L}</p>
					</li>
					<li>
						<p class="info-headers">Downloads</p>
						<p class="info-text">${t}</p>
					</li>
				</ul>
			</div>
		</a>
	`).join("")}m.defaults.baseURL="https://pixabay.com/api/";const v="44037717-f466124c8e4208be15c31102c",q={form:document.querySelector("form"),frame:document.querySelector(".gallery"),loader:document.querySelector(".loader"),lightbox:new b(".gallery a"),loadMore:document.querySelector(".load-more")},{form:h,frame:u,loader:n,lightbox:g,loadMore:l,card:S}=q;let c,f;h.addEventListener("submit",s=>{if(s.preventDefault(),c=1,!s.target.querry.value){d.error({title:"Error",message:"Your search query must not be empty. Please try again!",position:"topRight",timeout:3500});return}u.innerHTML="",n.classList.remove("hidden"),f=s.target.querry.value.trim().split(" ").join("+"),y(f).then(r=>{if(!r.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3500});return}u.insertAdjacentHTML("beforeend",p(r.hits)),g.refresh(),l.classList.remove("hidden")}).catch(r=>{console.log(r)}).finally(()=>{h.reset(),n.classList.add("hidden")})});l.addEventListener("click",()=>{const i=document.querySelector(".img-frame").getBoundingClientRect().height*2;c++,n.classList.remove("hidden"),l.classList.add("hidden"),y(f).then(o=>{if(c===Math.ceil(o.totalHits/15)||Math.ceil(o.totalHits/15)===1){n.classList.add("hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3500}),l.classList.add("hidden");return}u.insertAdjacentHTML("beforeend",p(o.hits)),g.refresh(),l.classList.remove("hidden"),n.classList.add("hidden"),window.scrollBy({top:i,left:0,behavior:"smooth"})}).catch(console.log)});async function y(s){return(await m.get("?",{params:{q:s,safesearch:"true",image_type:"photo",orientation:"horizontal",key:v,page:c,per_page:15}})).data}
//# sourceMappingURL=commonHelpers.js.map
