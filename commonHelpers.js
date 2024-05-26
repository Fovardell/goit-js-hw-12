import{a as m,S as b,i as d}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function p(s){return s.map(({webformatURL:t,largeImageURL:a,tags:o,views:e,downloads:r,likes:l,comments:L})=>`
		<a href="${a}" class="gallery-item">
			<div class="img-frame">
				<img
					src="${t}"
					alt="${o}" title="${o}">
					<ul class="img-info">
					<li>
						<p class="info-headers">Likes</p>
						<p class="info-text">${l}</p>
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
						<p class="info-text">${r}</p>
					</li>
				</ul>
			</div>
		</a>
	`).join("")}m.defaults.baseURL="https://pixabay.com/api/";const v="44037717-f466124c8e4208be15c31102c",q={form:document.querySelector("form"),frame:document.querySelector(".gallery"),loader:document.querySelector(".loader"),lightbox:new b(".gallery a"),loadMore:document.querySelector(".load-more")},{form:h,frame:u,loader:n,lightbox:g,loadMore:i,card:H}=q;let c,f;h.addEventListener("submit",s=>{if(s.preventDefault(),c=1,!s.target.querry.value){d.error({title:"Error",message:"Your search query must not be empty. Please try again!",position:"topRight",timeout:3500});return}u.innerHTML="",n.classList.remove("hidden"),i.classList.remove("hidden"),f=s.target.querry.value.trim().split(" ").join("+"),y(f).then(t=>{if(!t.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3500});return}u.insertAdjacentHTML("beforeend",p(t.hits)),g.refresh(),i.classList.remove("hidden"),Math.ceil(t.totalHits/15)<=1&&(i.classList.add("hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3500}))}).catch(t=>{console.log(t)}).finally(()=>{h.reset(),n.classList.add("hidden")})});i.addEventListener("click",()=>{const a=document.querySelector(".img-frame").getBoundingClientRect().height*2;c++,n.classList.remove("hidden"),i.classList.add("hidden"),y(f).then(o=>{c===Math.ceil(o.totalHits/15)&&(n.classList.add("hidden"),i.classList.add("hidden"),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3500})),Math.ceil(o.totalHits/15)>c&&i.classList.remove("hidden"),u.insertAdjacentHTML("beforeend",p(o.hits)),g.refresh(),n.classList.add("hidden"),window.scrollBy({top:a,left:0,behavior:"smooth"})}).catch(console.log)});async function y(s){return(await m.get("?",{params:{q:s,safesearch:"true",image_type:"photo",orientation:"horizontal",key:v,page:c,per_page:15}})).data}
//# sourceMappingURL=commonHelpers.js.map
