(()=>{"use strict";const e=((e,t)=>{const s=document.querySelector("nav ul"),n=[],{heading:o}={heading:"Menu"},d=document.createElement("div"),l=document.createElement("div");l.classList.add("dropdown-js-menu"),l.style.display="none";const c=document.createElement("ul");c.classList.add("dropdown-js-menu-list"),d.addEventListener("mouseover",(()=>{l.style.display="block"})),d.addEventListener("mouseleave",(()=>{l.style.display="none"}));const a=()=>{var e;c.textContent="",d.classList.add("dropdown-js"),d.textContent=o,d.appendChild(l),l.appendChild(c),e=c,n.forEach((t=>{const s=document.createElement("a");s.href=t.link;const n=document.createElement("li");n.classList.add("dropdown-js-menu-list-list-item"),n.textContent=t.content,s.appendChild(n),e.appendChild(s)})),s.appendChild(d)};return a(),{addListItem:(e,t)=>{n.push({content:e,link:t}),a()},setMenuCss:e=>{l.style.cssText=e},setListCss:e=>{c.style.cssText=e},setElementCss:e=>{console.log(d),d.style.cssText=e},setListItemCss:e=>{const t=document.querySelectorAll(".dropdown-js-menu-list-list-item");console.log(t),t.forEach((t=>{t.style.cssText=e}))}}})();e.addListItem("home","http://google.com"),e.addListItem("contact","http://facebook.com"),e.addListItem("about","http://yahoo.com")})();
//# sourceMappingURL=main.js.map