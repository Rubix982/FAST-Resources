!function(){var e;window.Redgate=window.Redgate||{},window.Redgate.Hub=window.Redgate.Hub||{},window.Redgate.Hub.Nav=(e=function(){var e;document.querySelector(".header--primary__menu-button").offsetHeight?(e="mobile-nav--open",document.body.classList.contains(e)?document.body.classList.remove(e):document.body.classList.add(e)):function(){var e="header--primary--collapsed",n=document.querySelector(".js-header-primary-collapse"),t=document.querySelector(".nav-bar--dark"),a=document.querySelector(".nav-bar__menu-button");if(!n||!t)return!1;n.classList.contains(e)?(n.classList.remove(e),a&&(a.innerHTML="",a.classList.add("icon--chevron-up"),a.classList.remove("icon--chevron-down"))):(n.classList.add(e),a&&(a.classList.remove("icon--chevron-up"),a.classList.add("icon--chevron-down")))}()},{init:function(){(function(){if(void 0!==window.Redgate.Hub.isHubSubPage)return window.Redgate.Hub.isHubSubPage;var e=window.location.pathname;"/"===e.charAt(0)&&(e=e.substr(1)),"/"===e.charAt(e.length-1)&&(e=e.slice(0,-1));var n=e.split("/");return n.length>1&&""!==n[0]&&"hub"===n[0]})()&&function(){for(var e=["events","product-learning"],n=0;n<e.length;n++){var t=e[n];if(0===window.location.pathname.indexOf("/hub/".concat(t))){var a=document.querySelector('.nav-bar--dark a[href$="/hub/'.concat(t,'/"]'));a&&a.parentElement.classList.add("active")}}}(),function(){var n=document.querySelector(".nav-bar__menu-button");if(!n)return!1;n.addEventListener("click",(function(n){n.preventDefault(),e()}))}()}}),window.addEventListener("load",window.Redgate.Hub.Nav.init)}();