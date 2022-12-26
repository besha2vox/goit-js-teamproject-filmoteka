function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=n.parcelRequire085b;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},n.parcelRequire085b=r),r.register("kyEFX",(function(t,n){var i,s;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},s=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("g8j98",(function(t,n){function i(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}function s(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}function r(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}e(t.exports,"saveDataToLocalSt",(function(){return i})),e(t.exports,"loadDataFromLocalSt",(function(){return s})),e(t.exports,"removeDataFromLocalSt",(function(){return r}))})),r.register("h6eer",(function(t,n){e(t.exports,"siteNav",(function(){return i})),e(t.exports,"libraryLink",(function(){return s})),e(t.exports,"sigupLink",(function(){return r})),e(t.exports,"loginLink",(function(){return o})),e(t.exports,"logoutLink",(function(){return a})),e(t.exports,"greeting",(function(){return c})),e(t.exports,"loginLinks",(function(){return l})),e(t.exports,"logoutLinks",(function(){return u})),e(t.exports,"homeLink",(function(){return h})),e(t.exports,"libraryPage",(function(){return d})),e(t.exports,"homePage",(function(){return f})),e(t.exports,"watchedBtn",(function(){return p})),e(t.exports,"queueBtn",(function(){return g})),e(t.exports,"moviesList",(function(){return m})),e(t.exports,"logo",(function(){return v})),e(t.exports,"slider",(function(){return y})),e(t.exports,"header",(function(){return w}));const i=document.getElementById("nav"),s=document.getElementById("link__library"),r=document.getElementById("link__signup"),o=document.getElementById("link__login"),a=document.getElementById("link__logout"),c=(document.getElementById("devider"),document.querySelector(".greeting")),l=document.querySelectorAll(".login-user"),u=document.querySelectorAll(".logout-user"),h=document.querySelector(".home-link"),d=document.querySelectorAll(".library"),f=document.querySelectorAll(".home"),p=document.querySelector(".watched"),g=document.querySelector(".queue"),m=document.querySelector(".movies-grid__list"),v=document.querySelector(".logo"),y=document.querySelector(".movies-slider"),w=document.querySelector("header.header")})),r.register("7rYDH",(function(t,n){e(t.exports,"API",(function(){return s}));var i=r("g8j98");class s{async basicFetch(e){return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log("error",e)}))}async getTrendingMovies(e){const t=new URLSearchParams({api_key:this.API_KEY,page:this._pageToFetch,keyword:this._queryToFetch,language:o()}),n=`${this.BASE_URL}trending/movie/${e}?${t.toString()}`;return await this.basicFetch(n)}async getNowPlaingMovies(){const e=`${this.BASE_URL}/movie/now_playing?api_key=${this.API_KEY}`;return await this.basicFetch(e)}async getUpcomingMovies(){const e=new URLSearchParams({api_key:this.API_KEY}),t=`${this.BASE_URL}/movie/upcoming?${e.toString()}`;return await this.basicFetch(t)}async getMovieLatest(){const e=new URLSearchParams({api_key:this.API_KEY,language:o(),page:this.pageToFetch}),t=`${this.BASE_URL}movie/${id}?${e.toString()}`;return await this.basicFetch(t)}async getSearchMoviesByID(e){const t=new URLSearchParams({api_key:this.API_KEY,language:o()}),n=`${this.BASE_URL}movie/${e}?${t.toString()}`;return await this.basicFetch(n)}async getMoviesByKeyWord(){const e=new URLSearchParams({api_key:this.API_KEY,language:o(),query:this._queryToFetch,page:this.pageToFetch}),t=`${this.BASE_URL}search/movie?${e.toString()}`;return await this.basicFetch(t)}async getMovieTreiler(e){const t=`${this.BASE_URL}movie/${e}/videos?api_key=${this.API_KEY}`;return await this.basicFetch(t)}async getGenres(){const e=new URLSearchParams({api_key:this.API_KEY,language:o()}),t=`${this.BASE_URL}genre/movie/list?${e.toString()}`;return await this.basicFetch(t)}incrementPage(){this._pageToFetch+=1}decrementPage(){this._pageToFetch<=1||(this._pageToFetch-=1)}resetPage(){this._pageToFetch=0}get queryToFetch(){return this._queryToFetch}set queryToFetch(e){this._queryToFetch=e}get pageToFetch(){return this._pageToFetch}set pageToFetch(e){this._pageToFetch=e}constructor(){this._queryToFetch="",this._pageToFetch=1,this.BASE_URL="https://api.themoviedb.org/3/",this.API_KEY="9cca312caffd11f4ae9f11244d585025"}}function o(){return"UA"===(0,i.loadDataFromLocalSt)("language")?"uk-UK":"en-US"}})),r.register("9lWur",(function(n,i){e(n.exports,"Modal",(function(){return o}));var s=r("8pbzW");class o{async open(e){const t=function(e){const t='<img src="https://media.istockphoto.com/id/1018127028/vector/sorry.jpg?s=612x612&w=0&k=20&c=Ghc4Qgtbg1V-dreFXiGGT5haoq3Cwo6Kw6qpv2ibwRg=" />';return`<div class="backdrop">\n  <button type="button" class="poop-close" style="display:none">\n  <svg class="icon-poop-close" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M8 8L22 22" stroke-width="2"/>\n    <path d="M8 22L22 8" stroke-width="2"/>\n    </svg>\n  </button>\n    <div class="modal">\n    <button type="button" class="modal__close">\n    <svg class="icon-close" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M8 8L22 22" stroke-width="2"/>\n    <path d="M8 22L22 8" stroke-width="2"/>\n    </svg>\n    </button>\n    ${e||t}\n    </div>\n    </div>`}(e);document.body.insertAdjacentHTML("afterend",t),document.body.classList.add("modal-open"),this.backdrop=document.querySelector(".backdrop"),this.closeIcon=document.querySelector(".modal__close"),this.closePoop=document.querySelector(".poop-close"),this.backdrop.addEventListener("click",this.onbackDropClose),this.closeIcon.addEventListener("click",this.onCloseClick),this.closePoop.addEventListener("click",(()=>{document.querySelector(".backdrop-iframe").remove(),this.closePoop.remove()})),window.addEventListener("keyup",this.onEscClose),this.onShow&&this.onShow()}close(){document.querySelector(".backdrop").remove(),document.body.classList.remove("modal-open"),this.backdrop.removeEventListener("click",this.onbackDropClose),this.closeIcon.removeEventListener("click",this.onCloseClick),this.closePoop.removeEventListener("click",this.onCloseClick),window.removeEventListener("keyup",this.onEscClose),this.onClose&&this.onClose}constructor({onShow:e,onClose:n}={}){t(s)(this,"onbackDropClose",(e=>{e.target.classList.contains("backdrop")&&this.close()})),t(s)(this,"onCloseClick",(e=>{this.close()})),t(s)(this,"onEscClose",(e=>{"Escape"===e.code&&this.close()})),this.onShow=e,this.onClose=n,this.backdrop=null}}})),r.register("8pbzW",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),r.register("bTcpz",(function(t,n){e(t.exports,"getModalMarkup",(function(){return a}));var i=r("g8j98"),s=r("gUo8S"),o=r("37v9V");const a=async({overview:e,vote_average:t,popularity:n,original_title:r,genres:a,poster_path:c,vote_count:l,title:u,id:h})=>{const d=`https://image.tmdb.org/t/p/original${c}`,f=a.map((e=>e.name)).join(", "),p="UA"===(0,i.loadDataFromLocalSt)("language"),g=p?"На жаль, опис фільму відсутній.":"Unfortunately, there is no description of the film.",m=p?"На жаль, жанри відсутні.":"Unfortunately, there are no genres.",v=c?d:s.fakePoster;return`<div class="modal-movie" data-id='${h}'>\n      <div class="poster-wrap">\n     ${await(0,o.checkTrailer)(h)?'\n<div class="trailer-wrapper">\n<a class="movie-poop">\n<img class="youpoop" width="50" height="35" src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="poop" />\n</a>\n    </div>':""}\n  <img class="poster" width="375" src=${v} />\n  </div>\n  <div class="modal-movie__descr">   \n    \n    <div class="modal-movie__info-weapper">\n    <h2 class="modal-movie__title">${u}</h2>  \n    <ul class="modal-movie__list list">\n    <li class="modal-movie__item">\n    <p class="modal-movie__key">${p?"Оцінка/Оцінок":"Vote / Votes"}</p>\n     <p class="modal-movie__value">\n       <span class="modal-movie__value--accent">${t.toFixed(1)}</span> / ${l}\n     </p>\n    </li>\n    <li class="modal-movie__item">\n     <p class="modal-movie__key">${p?"Популярність":"Popularity"}</p>\n     <p class="modal-movie__value">${n.toFixed(1)}</p>\n    </li>\n    <li class="modal-movie__item">\n    <p class="modal-movie__key">${p?"Офіційна назва":"Original Title"}</p>\n     <p class="modal-movie__value modal-movie__value--uppercase">\n     ${r}</p>\n    </li>\n    <li class="modal-movie__item">\n    <p class="modal-movie__key">${p?"Жанр":"Genre"}</p>\n     <p class="modal-movie__value">${f.length>1?f:m}</p>\n    </li>\n    \n    </ul>  \n      <div class="modal-movie__about-wrapper">\n      <p class="modal-movie__about">${p?"Опис":"About"}</p>\n      <p class="modal-movie__overview">${e||g}</p>\n      </div>\n      \n      \n       <ul class="buttons-list buttons-list__film-modal">\n     <li class="buttons-list__item">\n         <button class="button button--transparent" type="button" data-list="watched"  data-id=${h}>${p?"У переглянуті":"Add to watched"}\n         </button>\n     </li>\n     <li class="buttons-list__item">\n         <button class="button button--transparent" type="button" data-list="queue"  data-id=${h}>${p?"У чергу":"Add to queue"}\n         </button>\n     </li>\n     <li class="buttons-list__item">\n   </li>\n     </ul>\n     <p class='modal-movie__notify form__error-notification--for-header'></p>\n    </div>\n  </div>\n</div>`}})),r.register("gUo8S",(function(t,n){e(t.exports,"fakePoster",(function(){return i})),e(t.exports,"emptyLib",(function(){return s})),e(t.exports,"imgForRandom",(function(){return r}));const i="https://www.tgv.com.my/assets/images/404/movie-poster.jpg",s='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>\n  <path style="" d="M421.996,61.051L408.95,12.363c-0.937-3.497-4.532-5.572-8.029-4.635L13.218,111.613\n    c-4.112,1.102-6.552,5.328-5.45,9.44l5.085,18.979l67.404,19.623l336.936-90.282C420.816,68.401,422.967,64.676,421.996,61.051z" fill="#c7c7c9" data-original="#c7c7c9" class=""></path>\n  <path style="" d="M80.256,159.654l19.803-5.306v-24.685c0-6.608-5.406-12.016-12.015-12.016H44.869\n    c-6.608,0-12.016,5.406-12.016,12.016v16.191L80.256,159.654z" fill="#b0b0b5" data-original="#b0b0b5" class=""></path>\n  <path style="" d="M12.852,225.136v243.294c0,4.207,3.411,7.618,7.618,7.618h323.621l84.404-156.588v-94.324\n    L12.852,225.136L12.852,225.136z" fill="#464754" data-original="#464754" class=""></path>\n  <path style="" d="M375.811,286.121H65.538c-2.623,0-4.749,2.126-4.749,4.749v52.726c0,2.623,2.126,4.749,4.749,4.749\n    h276.625c10.376-11.39,23.533-20.196,38.398-25.355v-32.12C380.561,288.247,378.435,286.121,375.811,286.121z" fill="#e1e1e5" data-original="#e1e1e5" class=""></path>\n  <g>\n    <path style="" d="M342.163,328.345H65.538c-2.623,0-4.749-2.126-4.749-4.749v20.001c0,2.623,2.126,4.749,4.749,4.749\n      h276.625c10.376-11.39,23.533-20.196,38.398-25.355V302.99C365.697,308.149,352.538,316.955,342.163,328.345z" fill="#c7c7c9" data-original="#c7c7c9" class=""></path>\n    <rect x="124.747" y="286.126" style="" width="63.954" height="62.223" fill="#c7c7c9" data-original="#c7c7c9" class=""></rect>\n  </g>\n  <rect x="124.747" y="328.348" style="" width="63.954" height="20.001" fill="#b0b0b5" data-original="#b0b0b5" class=""></rect>\n  <rect x="252.654" y="286.126" style="" width="63.954" height="62.223" fill="#c7c7c9" data-original="#c7c7c9" class=""></rect>\n  <rect x="252.654" y="328.348" style="" width="63.954" height="20.001" fill="#b0b0b5" data-original="#b0b0b5" class=""></rect>\n  <g>\n    <polygon style="" points="299.349,34.944 288.608,103.827 366.849,82.862 377.59,13.979 \t" fill="#464754" data-original="#464754" class=""></polygon>\n    <polygon style="" points="132.126,145.755 210.367,124.791 221.108,55.909 142.868,76.873 \t" fill="#464754" data-original="#464754" class=""></polygon>\n  </g>\n  <path style="" d="M421.989,164.38H86.319c-3.458,0-6.261-2.803-6.261-6.261v-28.456\n    c0-6.608-5.407-12.015-12.015-12.015H24.868c-6.608,0-12.015,5.407-12.015,12.015v34.717v30.866v32.89h415.644v-57.247\n    C428.496,167.294,425.583,164.38,421.989,164.38z" fill="#e1e1e5" data-original="#e1e1e5" class=""></path>\n  <path style="" d="M32.991,164.379v-34.717c0-6.608,5.406-12.016,12.015-12.016H24.868\n    c-6.608,0-12.015,5.406-12.015,12.016v34.717v30.866v32.89h20.138v-32.89V164.379z" fill="#c7c7c9" data-original="#c7c7c9" class=""></path>\n  <circle style="" cx="45.403" cy="151.359" r="12.414" fill="#464754" data-original="#464754" class=""></circle>\n  <circle style="" cx="411.172" cy="411.172" r="93.325" fill="#ff6b08" data-original="#ff6465" class=""></circle>\n  <path style="" d="M337.848,411.172c0-48.164,36.486-87.801,83.324-92.791c-3.286-0.35-6.621-0.534-10.001-0.534\n    c-51.542,0-93.325,41.783-93.325,93.325s41.783,93.325,93.325,93.325c3.379,0,6.714-0.184,10.001-0.534\n    C374.334,498.973,337.848,459.336,337.848,411.172z" fill="#ff001b" data-original="#ef525a" class=""></path>\n  <path style="" d="M418.286,430.684l-28.872,16.275c-2.638,1.487-5.742-0.676-5.742-4.001v-63.569\n    c0-3.325,3.104-5.488,5.742-4.001l56.388,31.785c2.924,1.648,2.924,6.353,0,8.002L418.286,430.684z" fill="#e1e1e5" data-original="#e1e1e5" class=""></path>\n  <path style="" d="M403.672,383.424l-14.259-8.037c-2.638-1.487-5.742,0.676-5.742,4.001v63.569\n    c0,3.325,3.104,5.488,5.742,4.001l14.259-8.037V383.424z" fill="#c7c7c9" data-original="#c7c7c9" class=""></path>\n  <g>\n    <polygon style="" points="371.264,164.379 290.263,164.379 319.018,228.999 400.02,228.999 \t" fill="#464754" data-original="#464754" class=""></polygon>\n    <polygon style="" points="128.261,164.379 157.017,228.999 238.018,228.999 209.263,164.379 \t" fill="#464754" data-original="#464754" class=""></polygon>\n  </g>\n  <path d="M46.199,131.449c-10.981,0-19.914,8.933-19.914,19.914s8.933,19.914,19.914,19.914s19.914-8.933,19.914-19.914\n    S57.18,131.449,46.199,131.449z M46.199,156.276c-2.709,0-4.913-2.204-4.913-4.913c0-2.709,2.204-4.913,4.913-4.913\n    c2.709,0,4.913,2.204,4.913,4.913C51.112,154.072,48.908,156.276,46.199,156.276z" fill="#12181c" data-original="#000000" class=""></path>\n  <path d="M393.891,368.855c-7.691-4.337-16.926,1.531-16.926,10.535v63.569c0,4.333,2.247,8.337,5.864,10.452\n    c3.445,2.012,7.581,2.046,11.063,0.084l56.388-31.785c8.004-4.512,8.003-16.559,0-21.07L393.891,368.855z M438.42,411.174\n    l-46.453,26.185l0,0v-52.371L438.42,411.174L438.42,411.174z" fill="#12181c" data-original="#000000" class=""></path>\n  <path d="M505.079,421c-4.074-0.759-7.988,1.928-8.747,5.999c-7.557,40.561-43.038,70-84.364,70\n    c-47.415,0-85.825-38.603-85.825-85.825c0-51.525,45.508-92.078,97.454-85.03c35.686,4.873,65.55,32.009,72.629,68.651\n    c0.786,4.067,4.72,6.724,8.786,5.941c4.067-0.786,6.727-4.719,5.941-8.786c-7.517-38.918-37.058-69.032-74.162-78.476\n    c0-5.119,0-136.769,0-142.584c0-7.724-6.284-14.009-14.009-14.009c-12.092,0-290.303,0-302.396,0\n    c0.001,0,299.541-80.261,299.541-80.261l0,0c7.613-2.041,12.148-9.895,10.108-17.508L416.99,10.424\n    c-0.972-3.626-3.298-6.658-6.549-8.535c-3.25-1.877-7.039-2.375-10.667-1.404l0,0l0,0l0,0c0,0-383.146,102.664-387.702,103.884\n    c-8.119,2.175-12.929,10.506-10.755,18.627l4.83,18.025c0,7.795,0,321.29,0,327.409c0,8.336,6.782,15.119,15.12,15.119h156.146\n    c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H21.266c-0.065,0-0.119-0.053-0.119-0.118V235.637c7.409,0,393.154,0,400.643,0v75.19\n    c-11.003-1.07-22.129-0.345-32.936,2.198v-22.154c0-6.754-5.495-12.25-12.25-12.25c-2.05,0-307.198,0-310.273,0\n    c-6.754,0-12.251,5.495-12.251,12.25v52.727c0,6.754,5.495,12.25,12.251,12.25c7.978,0,255.66,0,261.389,0\n    c-4.978,7.555-8.968,15.815-11.786,24.597H61.583c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h250.788\n    c-0.807,5.126-1.229,10.38-1.229,15.729c0,19.922,5.885,40.072,17.899,57.375H212.414v0.008c-4.073,0.08-7.351,3.401-7.351,7.492\n    s3.279,7.412,7.351,7.492v0.008h0.149l0,0l0,0h129.284c18.16,17.599,42.895,28.451,70.121,28.451\n    c48.549,0,90.231-34.592,99.111-82.252C511.837,425.675,509.15,421.759,505.079,421z M385.043,19.962l17.701-4.743l12.619,47.093\n    l-38.534,10.326L385.043,19.962z M306.803,40.927l62.396-16.719l-8.214,52.676l-62.397,16.72L306.803,40.927z M228.562,61.891\n    l62.396-16.719l-8.214,52.676l-62.396,16.719L228.562,61.891z M150.32,82.856l62.397-16.719l-8.214,52.676l-62.397,16.719l0,0\n    L150.32,82.856z M134.477,87.101l-8.214,52.676l-37.909,10.158v-20.27c0-10.761-8.754-19.516-19.516-19.516H48.46L134.477,87.101z\n     M21.148,220.636v-90.972l0,0c0-2.447,2.067-4.515,4.515-4.515h43.175c2.447,0,4.515,2.067,4.515,4.515v28.456\n    c0,7.512,6.133,13.762,13.762,13.762h37.07l21.696,48.755L21.148,220.636L21.148,220.636z M162.298,220.636l-21.696-48.755h64.582\n    l21.696,48.755H162.298z M243.299,220.636l-21.696-48.755h64.582l21.696,48.755H243.299z M324.301,220.636l-21.696-48.755h64.582\n    l21.696,48.755H324.301z M405.302,220.636l-21.696-48.755h38.185v48.755H405.302z M118.037,340.847H69.083v-47.224h48.954V340.847z\n     M181.991,340.847h-48.954v-47.224h48.954V340.847z M245.946,340.847h-48.954v-47.224h48.954V340.847z M309.901,340.847h-48.954\n    v-47.224h48.954V340.847z M324.902,340.847v-47.224h48.954v24.188c-12.787,5.23-24.456,13.102-34.134,23.036L324.902,340.847\n    L324.902,340.847z" fill="#12181c" data-original="#000000" class=""></path>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </g></svg>',r='\n  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" \n  width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g id="XMLID_1_">\n  <g id="XMLID_4063_"><path id="XMLID_1678_" d="m480.5 305h-449c-14.6 0-26.5-11.9-26.5-26.5v-247c0-14.6 11.9-26.5 26.5-26.5h449c14.6 0 26.5 11.9 26.5 26.5v247c0 14.6-11.9 26.5-26.5 26.5z" \n  fill="#323d2c" data-original="#323d2c"></path><path id="XMLID_1677_" d="m5 45h502v220h-502z" fill="#68a1d6" data-original="#68a1d6"></path><g id="XMLID_1405_"><path id="XMLID_2504_" \n  d="m378 362h-10v-81c0-1.5.7-3 1.9-3.9l31.5-25 6.2 7.8-29.6 23.5z" fill="#ebeadf" data-original="#ebeadf"></path></g><path id="XMLID_1418_" d="m218 193v-76l76 38z" fill="#fffcfa" data-original="#fffcfa"></path>\n  <path id="XMLID_1412_" d="m243 305c0-6.1-2.8-11.6-7.1-15.3 2.6-5.1 3.1-11.2.7-16.9s-7-9.7-12.4-11.4c.5-5.7-1.4-11.5-5.8-15.8s-10.2-6.3-15.8-5.8c-1.7-5.4-5.7-10.1-11.4-12.4s-11.8-1.9-16.9.7c-3.7-4.4-9.2-7.1-15.3-7.1s-11.6 2.8-15.3 7.1c-5.1-2.6-11.2-3.1-16.9-.7s-9.7 7-11.4 12.4c-5.7-.5-11.5 1.4-15.8 5.8s-6.3 10.2-5.8 15.8c-5.4 1.7-10.1 5.7-12.4 11.4s-1.9 11.8.7 16.9c-4.4 3.7-7.1 9.2-7.1 15.3s2.8 11.6 7.1 15.3c-2.6 5.1-3.1 11.2-.7 16.9s7 9.7 12.4 11.4c-.5 5.7 1.4 11.5 5.8 15.8s10.2 6.3 15.8 5.8c1.7 5.4 5.7 10.1 11.4 12.4s11.8 1.9 16.9-.7c3.7 4.4 9.2 7.1 15.3 7.1s11.6-2.8 15.3-7.1c5.1 2.6 11.2 3.1 16.9.7 5.7-2.3 9.7-7 11.4-12.4 5.7.5 11.5-1.4 15.8-5.8s6.3-10.2 5.8-15.8c5.4-1.7 10.1-5.7 12.4-11.4s1.9-11.8-.7-16.9c4.3-3.7 7.1-9.2 7.1-15.3z" fill="#f8d707" data-original="#f8d707">\n  </path><path id="XMLID_1408_" d="m418 507h-90l-19-150h128z" fill="#db3328" data-original="#db3328"></path>\n  <path id="XMLID_2533_" d="m309 357 2.5 19h86.3c12 0 21.3 10.6 19.8 22.5l-13.6 108.5h14l19-150z" fill="#b5100b" data-original="#b5100b"></path>\n  <path id="XMLID_1406_" d="m417 337h-88c-11 0-20 9-20 20h128c0-11-8.9-20-20-20z" fill="#c4c1ab" data-original="#c4c1ab"></path>\n  <path id="XMLID_1404_" d="m424.6 455 5.8-46h-114.8l5.8 46z" fill="#ebeadf" data-original="#ebeadf"></path>\n  <path id="XMLID_2534_" d="m424.6 455 5.8-46h-14.1l-5.8 46z" fill="#c4c1ab" data-original="#c4c1ab"></path>\n  <g id="XMLID_1407_"><path id="XMLID_2503_" d="m293 352h160v10h-160z" fill="#ebeadf" data-original="#ebeadf"></path>\n  </g><circle id="XMLID_608_" cx="160" cy="247" fill="#fffa5a" r="15.7" data-original="#fffa5a"></circle><circle id="XMLID_1409_" cx="126" cy="277" fill="#fffa5a" r="15.7" data-original="#fffa5a">\n  </circle><circle id="XMLID_2558_" cx="134" cy="255" fill="#fffa5a" r="15.7" data-original="#fffa5a"></circle><circle id="XMLID_629_" cx="142" cy="283" fill="#f8d707" r="15.7" data-original="#f8d707">\n  </circle><g fill="#eda900"><circle id="XMLID_2565_" cx="92.4" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle>\n  <circle id="XMLID_2559_" cx="114.5" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle><circle id="XMLID_2560_" cx="136.5" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle>\n  <circle id="XMLID_2561_" cx="158.6" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle><circle id="XMLID_2562_" cx="180.7" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle>\n  <circle id="XMLID_2563_" cx="202.8" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle><circle id="XMLID_2564_" cx="224.9" cy="310.6" r="15" fill="#eda900" data-original="#eda900"></circle>\n  </g><circle id="XMLID_1410_" cx="151" cy="267" fill="#f8d707" r="15.7" data-original="#f8d707"></circle><circle id="XMLID_1411_" cx="177" cy="261" fill="#f8d707" r="15.7" data-original="#f8d707"></circle>\n  <path id="XMLID_1417_" d="m223 507h-128l-20.4-179.6c-1.4-12 8-22.4 20-22.4 10.5 0 19.2 8 20.1 18.4l.8 9.6-.5-6.1c-1-11.8 8.3-21.9 20.1-21.9h3.8c11.1 0 20.2 9 20.2 20.2v7.8-7.8c0-11.1 9-20.2 20.2-20.2h3.8c11.8 0 21.1 10.1 20.1 21.9l-.5 6.1.8-9.6c.9-10.4 9.6-18.4 20.1-18.4 12 0 21.4 10.5 20 22.4z" \n  fill="#db3328" data-original="#db3328"></path><path id="XMLID_2476_" d="m159 325.2c0-11.1-9-20.2-20.2-20.2h-3.8c-10.9 0-19.7 8.6-20.1 19.2l.6 8.8 11.5 174h32v-174z" \n  fill="#ebeadf" data-original="#ebeadf"></path><ellipse id="XMLID_1413_" cx="159" cy="406" fill="#f8d707" rx="40" ry="20" data-original="#f8d707"></ellipse><g id="XMLID_2467_">\n  <path id="XMLID_2471_" d="m223.4 305c-10.5 0-19.2 8-20.1 18.4l-.8 9.6-11.5 174h32l20.4-179.6c1.4-11.9-7.9-22.4-20-22.4z" fill="#ebeadf" data-original="#ebeadf"></path></g></g>\n  <g id="XMLID_3725_"><g id="XMLID_603_"><path id="XMLID_3212_" d="m218 198c-.9 0-1.8-.3-2.6-.7-1.5-.9-2.4-2.5-2.4-4.3v-76c0-1.7.9-3.3 2.4-4.3s3.3-1 4.9-.2l76 38c1.7.8 2.8 2.6 2.8 4.5s-1.1 3.6-2.8 4.5l-76 38c-.8.3-1.5.5-2.3.5zm5-72.9v59.8l59.8-29.9z" fill="#060d1a" data-original="#060d1a">\n  </path></g><g id="XMLID_604_"><path id="XMLID_3209_" d="m223 512h-128c-2.5 0-4.7-1.9-5-4.4l-20.4-179.6c-.8-7.1 1.5-14.3 6.2-19.6 4.8-5.3 11.6-8.4 18.8-8.4 8.3 0 15.7 4 20.3 10.2.5-.7 1.1-1.4 1.7-2 4.8-5.2 11.5-8.2 18.5-8.2h3.8c8.2 0 15.6 4 20.2 10.1 4.6-6.1 11.9-10.1 20.2-10.1h3.8c7 0 13.8 3 18.5 8.2.6.6 1.1 1.3 1.7 2 4.6-6.2 11.9-10.2 20.3-10.2 7.2 0 14 3.1 18.8 8.4s7 12.5 6.2 19.6l-20.6 179.6c-.3 2.5-2.5 4.4-5 4.4zm-123.5-10h119.1l19.9-175.1c.5-4.3-.9-8.6-3.8-11.8s-7-5.1-11.3-5.1c-7.9 0-14.4 6-15.1 13.8l-.3 3.4v.1l-.5 6.1c-.2 2.8-2.7 4.8-5.4 4.5-2.8-.2-4.8-2.7-4.5-5.4l.5-6.1c.4-4.3-1-8.4-3.9-11.5-2.9-3.2-6.9-4.9-11.2-4.9h-3.8c-8.4 0-15.2 6.8-15.2 15.2v7.8c0 2.8-2.2 5-5 5s-5-2.2-5-5v-7.8c0-8.4-6.8-15.2-15.2-15.2h-3.8c-4.3 0-8.3 1.7-11.2 4.9s-4.3 7.2-3.9 11.5l.5 6.1c.2 2.8-1.8 5.2-4.5 5.4s-5.2-1.8-5.4-4.5l-.5-6.1s0 0 0-.1l-.3-3.4c-.7-7.8-7.2-13.8-15.1-13.8-4.3 0-8.4 1.8-11.3 5.1s-4.2 7.5-3.8 11.8z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_606_">\n  <path id="XMLID_3208_" d="m83.4 362.3h68.7v10h-68.7z" fill="#060d1a" transform="matrix(.066 .998 -.998 .066 476.459 225.531)" data-original="#060d1a"></path></g>\n  <g id="XMLID_2028_"><path id="XMLID_3207_" d="m76.2 454.4h95.4v10h-95.4z" fill="#060d1a" transform="matrix(.066 .998 -.998 .066 574.09 305.522)" data-original="#060d1a"></path>\n  </g><g id="XMLID_627_"><path id="XMLID_3205_" d="m154 426h10v81h-10z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_697_">\n  <path id="XMLID_3204_" d="m154 333h10v53h-10z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_628_">\n  <path id="XMLID_3203_" d="m188.9 412.5h10v94.5h-10z" fill="#060d1a" transform="matrix(.998 .061 -.061 .998 28.334 -10.944)" data-original="#060d1a"></path></g>\n  <g id="XMLID_2027_"><path id="XMLID_3202_" d="m195.2 332.9h10v68.7h-10z" fill="#060d1a" transform="matrix(.998 .066 -.066 .998 24.644 -12.4)" data-original="#060d1a">\n  </path></g><g id="XMLID_605_"><path id="XMLID_3199_" d="m159 431c-25.7 0-45-10.7-45-25s19.3-25 45-25 45 10.7 45 25-19.3 25-45 25zm0-40c-20 0-35 7.9-35 15s15 15 35 15 35-7.9 35-15-15-15-35-15z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_607_">\n  <path id="XMLID_3196_" d="m418 512h-90c-2.5 0-4.6-1.9-5-4.4l-19-150c-.2-1.4.3-2.9 1.2-3.9.9-1.1 2.3-1.7 3.8-1.7h128c1.4 0 2.8.6 3.8 1.7.9 1.1 1.4 2.5 1.2 3.9l-19 150c-.3 2.5-2.5 4.4-5 4.4zm-85.6-10h81.2l17.7-140h-116.6z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_630_"><path id="XMLID_3195_" d="m293 352h160v10h-160z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_649_"><path id="XMLID_3192_" d="m437 362h-128c-2.8 0-5-2.2-5-5 0-13.8 11.2-25 25-25h88c13.8 0 25 11.2 25 25 0 2.8-2.2 5-5 5zm-122.1-10h116.3c-2.1-5.8-7.6-10-14.1-10h-88c-6.6 0-12.2 4.2-14.2 10z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_666_"><path id="XMLID_3191_" d="m378 337h-10v-56c0-1.5.7-3 1.9-3.9l31.5-25 6.2 7.8-29.6 23.5z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_672_"><path id="XMLID_3188_" d="m424.6 460h-103.2c-2.5 0-4.6-1.9-5-4.4l-5.8-46c-.2-1.4.3-2.9 1.2-3.9.9-1.1 2.3-1.7 3.8-1.7h114.8c1.4 0 2.8.6 3.8 1.7.9 1.1 1.4 2.5 1.2 3.9l-5.8 46c-.3 2.5-2.5 4.4-5 4.4zm-98.8-10h94.4l4.6-36h-103.5z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_2612_"><path id="XMLID_2878_" d="m230.8 260h142.2v10h-142.2z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_576_"><path id="XMLID_2877_" d="m73 317c-2-3.6-3-7.8-3-12 0-6.1 2.2-11.9 6.2-16.5-1.9-5.7-1.8-11.9.6-17.6.1-.3.3-.6.4-.9h-72.2c-2.8 0-5-2.2-5-5v-220c0-2.8 2.2-5 5-5h502c2.8 0 5 2.2 5 5v220c0 2.8-2.2 5-5 5h-94v-10h89v-210h-492v210h77.2c2.1 0 4 1.3 4.7 3.3s.1 4.2-1.6 5.6c-1.9 1.6-3.4 3.6-4.4 5.9-1.7 4.1-1.5 8.7.5 12.6 1.1 2.1.6 4.6-1.2 6.1-3.4 2.9-5.3 7-5.3 11.5 0 2.5.6 5 1.8 7.2z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_2611_"><path id="XMLID_2867_" d="m243 300h110v10h-110z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_2608_"><path id="XMLID_2866_" d="m480.5 310h-87.5v-10h87.5c11.9 0 21.5-9.6 21.5-21.5v-247c0-11.9-9.6-21.5-21.5-21.5h-449c-11.9 0-21.5 9.6-21.5 21.5v247c0 11.9 9.6 21.5 21.5 21.5h43.5v10h-43.5c-17.4 0-31.5-14.1-31.5-31.5v-247c0-17.4 14.1-31.5 31.5-31.5h449c17.4 0 31.5 14.1 31.5 31.5v247c0 17.4-14.1 31.5-31.5 31.5z" fill="#060d1a" data-original="#060d1a"></path></g><g id="XMLID_2025_">\n  <path id="XMLID_2865_" d="m245 317-8.8-4.8c1.2-2.2 1.8-4.7 1.8-7.2 0-4.4-1.9-8.6-5.3-11.5-1.8-1.5-2.3-4-1.2-6.1 2-3.9 2.2-8.6.5-12.6-1.7-4.1-5.1-7.2-9.3-8.6-2.2-.7-3.7-2.9-3.5-5.2.4-4.4-1.2-8.8-4.3-11.9s-7.5-4.7-11.9-4.3c-2.3.2-4.5-1.2-5.2-3.5-1.3-4.2-4.5-7.6-8.6-9.3s-8.7-1.5-12.6.5c-2.1 1.1-4.6.6-6.1-1.2-2.9-3.4-7-5.3-11.5-5.3s-8.6 1.9-11.5 5.3c-1.5 1.8-4 2.3-6.1 1.2-3.9-2-8.6-2.2-12.6-.5-4.1 1.7-7.2 5.1-8.5 9.3-.7 2.2-2.9 3.7-5.2 3.5-4.4-.4-8.8 1.2-11.9 4.3l-7.1-7.1c4.3-4.3 10-6.9 16-7.3 2.7-5.4 7.2-9.7 12.8-12s11.9-2.5 17.6-.6c4.5-4 10.4-6.2 16.5-6.2s11.9 2.2 16.5 6.2c5.7-1.9 11.9-1.8 17.6.6 5.6 2.3 10.2 6.6 12.8 12 6 .4 11.7 2.9 16 7.3 4.3 4.3 6.9 10 7.3 16 5.4 2.7 9.7 7.2 12 12.8s2.5 11.9.6 17.6c4 4.5 6.2 10.4 6.2 16.5 0 4.3-1.1 8.4-3 12.1z" fill="#060d1a" data-original="#060d1a">\n  </path></g></g></g></g>\n  </svg>\n  '})),r.register("37v9V",(function(t,n){e(t.exports,"searchTrailer",(function(){return s})),e(t.exports,"checkTrailer",(function(){return o}));const i=new(0,r("7rYDH").API);async function s(e){const t=await i.getMovieTreiler(e);if(!t||!t.results[0])return"";let n=function(e){return`\n  <div class='backdrop-iframe'>\n  <div class="poobox">\n      <iframe\n              class="trailer" id="poop"\n\n        src="https://www.youtube.com/embed/${e}"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n        allowfullscreen\n      ></iframe>\n      </div>\n      </div>`}(t.results.find((e=>"Trailer"===e.type)).key);return n}async function o(e){const t=await i.getMovieTreiler(e);return!(!t||!t.results[0])}})),r.register("6DImk",(function(t,n){e(t.exports,"createMovieCardMarkup",(function(){return a}));var i=r("g8j98"),s=r("8ZhYW"),o=r("gUo8S");async function a({genre_ids:e,id:t,title:n,poster_path:r,vote_average:a,release_date:c,genres:l}){const u=await async function(e,t){return e?await function(e){const t=JSON.parse((0,i.loadDataFromLocalSt)(s.GENRES_STORAGE_KEY));return e.map((e=>t.find((t=>t.id===e)))).map((({name:e})=>e)).slice(0,3).join(", ")}(e):await t.map((e=>e.name)).slice(0,3).join(", ")}(e,l),h=r?`https://image.tmdb.org/t/p/original${r}`:o.fakePoster;return u.length<1&&c?await(`<li class="movie-card" id="${t}">\n    <img src=${h} \n        alt="Poster of ${n}" class="movie-card__img" />\n          <div class="movie-card__info">\n            <p class="movie-card__name">${n}</p>\n            <div class="movie-card__wrap">\n            <p class="movie-card__info-wrap">\n              <span class="movie-card__release">${c.split("-")[0]}</span></p>\n              </div>\n          </div>\n      </li>`):!c&&u.length>0?await(`<li class="movie-card" id="${t}">\n    <img src=${h} \n        alt="Poster of ${n}" class="movie-card__img" />\n          <div class="movie-card__info">\n            <p class="movie-card__name">${n}</p>\n            <div class="movie-card__wrap">\n            <p class="movie-card__info-wrap">\n              <span class="movie-card__genre">${u}</span></p>\n              </div>\n          </div>\n      </li>`):u.length<1&&!c?await(`<li class="movie-card" id="${t}">\n    <img src=${h} \n        alt="Poster of ${n}" class="movie-card__img" />\n          <div class="movie-card__info">\n            <p class="movie-card__name">${n}</p>\n            <div class="movie-card__wrap">\n            <p class="movie-card__info-wrap"></p>\n              </div>\n          </div>\n      </li>`):await(`<li class="movie-card" id="${t}">\n    <img src=${h} \n        alt="Poster of ${n}" class="movie-card__img" />\n          <div class="movie-card__info">\n            <p class="movie-card__name">${n}</p>\n            <div class="movie-card__wrap">\n            <p class="movie-card__info-wrap">\n              <span class="movie-card__genre">${u}</span> | <span class="movie-card__release">${c.split("-")[0]}</span></p>\n              </div>\n          </div>\n      </li>`)}})),r.register("8ZhYW",(function(t,n){e(t.exports,"GENRES_STORAGE_KEY",(function(){return a})),e(t.exports,"fetchGenres",(function(){return c}));var i=r("7rYDH"),s=r("g8j98");const o=new(0,i.API),a="all_genres";async function c(){const e=await async function(){try{return await o.getGenres()}catch(e){console.log(e.message)}}(),t=JSON.stringify(e.genres);(0,s.saveDataToLocalSt)(a,t)}c()})),r.register("5PF1K",(function(e,t){e.exports=import("./"+r("kyEFX").resolve("j4Ppy")).then((()=>r("f6YhW")))})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.65697327.js","j4Ppy":"slider-trend.9b29addd.js"}'));var o,a,c,l=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(e){if(a===setTimeout)return setTimeout(e,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(e){a=u}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(e){c=h}}();var f,p=[],g=!1,m=-1;function v(){g&&f&&(g=!1,f.length?p=f.concat(p):m=-1,p.length&&y())}function y(){if(!g){var e=d(v);g=!0;for(var t=p.length;t;){for(f=p,p=[];++m<t;)f&&f[m].run();m=-1,t=p.length}f=null,g=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function w(e,t){this.fun=e,this.array=t}function _(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new w(e,t)),1!==p.length||g||d(y)},w.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=_,l.addListener=_,l.once=_,l.off=_,l.removeListener=_,l.removeAllListeners=_,l.emit=_,l.prependListener=_,l.prependOnceListener=_,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},E=function(e){return function(e){const t=b(e);return I.encodeByteArray(t,!0)}(e).replace(/\./g,"")},T=function(e){try{return I.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function L(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return"object"==typeof indexedDB}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,D=()=>{try{return A()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&T(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},N=e=>{var t,n;return null===(n=null===(t=D())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},R=e=>{const t=N(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},M=e=>{var t;return null===(t=D())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(F,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new P(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(B(n)&&B(r)){if(!j(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function B(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function z(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function $(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t){const n=new K(e,t);return n.subscribe.bind(n)}class K{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){return e&&e._delegate?e._delegate:e}class X{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new O;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Y{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Q(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=[];var Z,ee;(ee=Z||(Z={}))[ee.DEBUG=0]="DEBUG",ee[ee.VERBOSE=1]="VERBOSE",ee[ee.INFO=2]="INFO",ee[ee.WARN=3]="WARN",ee[ee.ERROR=4]="ERROR",ee[ee.SILENT=5]="SILENT";const te={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},ne=Z.INFO,ie={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},se=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=ie[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class re{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?te[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ne,this._logHandler=se,this._userLogHandler=null,J.push(this)}}let oe,ae;const ce=new WeakMap,le=new WeakMap,ue=new WeakMap,he=new WeakMap,de=new WeakMap;let fe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return le.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ue.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return me(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function pe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ae||(ae=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ve(this),t),me(ce.get(this))}:function(...t){return me(e.apply(ve(this),t))}:function(t,...n){const i=e.call(ve(this),t,...n);return ue.set(i,t.sort?t.sort():[t]),me(i)}}function ge(e){return"function"==typeof e?pe(e):(e instanceof IDBTransaction&&function(e){if(le.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));le.set(e,t)}(e),t=e,(oe||(oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,fe):e);var t}function me(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(me(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&ce.set(t,e)})).catch((()=>{})),de.set(t,e),t}(e);if(he.has(e))return he.get(e);const t=ge(e);return t!==e&&(he.set(e,t),de.set(t,e)),t}const ve=e=>de.get(e);function ye(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=me(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(me(o.result),e.oldVersion,e.newVersion,me(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const we=["get","getKey","getAll","getAllKeys","count"],_e=["put","add","delete","clear"],be=new Map;function Ie(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(be.get(t))return be.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=_e.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!we.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return be.set(t,r),r}fe=(e=>({...e,get:(t,n,i)=>Ie(t,n)||e.get(t,n,i),has:(t,n)=>!!Ie(t,n)||e.has(t,n)}))(fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Te=new re("@firebase/app"),ke={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Se=new Map,Le=new Map;function Ce(e,t){try{e.container.addComponent(t)}catch(n){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ae(e){const t=e.name;if(Le.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;Le.set(t,e);for(const t of Se.values())Ce(t,e);return!0}function De(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ne=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ne.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw Ne.create("bad-app-name",{appName:String(s)});var r;if(n||(n=null===(r=D())||void 0===r?void 0:r.config),!n)throw Ne.create("no-options");const o=Se.get(s);if(o){if(j(n,o.options)&&j(i,o.config))return o;throw Ne.create("duplicate-app",{appName:s})}const a=new Y(s);for(const e of Le.values())a.addComponent(e);const c=new Re(n,i,a);return Se.set(s,c),c}function Oe(e="[DEFAULT]"){const t=Se.get(e);if(!t&&"[DEFAULT]"===e)return Me();if(!t)throw Ne.create("no-app",{appName:e});return t}function xe(e,t,n){var i;let s=null!==(i=ke[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Te.warn(e.join(" "))}Ae(new X(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Pe=null;function Ue(){return Pe||(Pe=ye("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ne.create("idb-open",{originalErrorMessage:e.message})}))),Pe}async function Fe(e,t){var n;try{const n=(await Ue()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ve(e)),n.done}catch(e){if(e instanceof P)Te.warn(e.message);else{const t=Ne.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Te.warn(t.message)}}}function Ve(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Be();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Be(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ze(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ze(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=E(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Be(){return(new Date).toISOString().substring(0,10)}class qe{async runIndexedDBEnvironmentCheck(){return!!C()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await Ue()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ve(e))}catch(e){if(e instanceof P)Te.warn(e.message);else{const n=Ne.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Te.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Fe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ze(e){return E(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;$e="",Ae(new X("platform-logger",(e=>new Ee(e)),"PRIVATE")),Ae(new X("heartbeat",(e=>new je(e)),"PRIVATE")),xe("@firebase/app","0.8.3",$e),xe("@firebase/app","0.8.3","esm2017"),xe("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xe("firebase","9.13.0","app");function He(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function Ke(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ge=Ke,We=new U("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xe=new re("@firebase/auth");function Qe(e,...t){Xe.logLevel<=Z.ERROR&&Xe.error(`Auth (9.13.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw tt(e,...t)}function Je(e,...t){return tt(e,...t)}function Ze(e,t,n){const i=Object.assign(Object.assign({},Ge()),{[t]:n});return new U("auth","Firebase",i).create(t,{appName:e.name})}function et(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ye(e,"argument-error"),Ze(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return We.create(e,...t)}function nt(e,t,...n){if(!e)throw tt(t,...n)}function it(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qe(t),new Error(t)}function st(e,t){e||it(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map;function ot(e){st(e instanceof Function,"Expected a class definition");let t=rt.get(e);return t?(st(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ct(){return"http:"===lt()||"https:"===lt()}function lt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ct()||S()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{get(){return ut()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t){st(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},gt=new ht(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vt(e,t,n,i,s={}){return yt(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=q(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ft.fetch()(_t(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function yt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},pt),t);try{const t=new bt(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw It(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw It(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw It(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw It(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ze(e,a,o);Ye(e,a)}}catch(t){if(t instanceof P)throw t;Ye(e,"network-request-failed")}}async function wt(e,t,n,i,s={}){const r=await vt(e,t,n,i,s);return"mfaPendingCredential"in r&&Ye(e,"multi-factor-auth-required",{_serverResponse:r}),r}function _t(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?dt(e.config,s):`${e.config.apiScheme}://${s}`}class bt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Je(this.auth,"network-request-failed"))),gt.get())}))}}function It(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Je(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return 1e3*Number(e)}function kt(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return Qe("JWT malformed, contained fewer than 3 sections"),null;try{const e=T(i);return e?JSON.parse(e):(Qe("Failed to decode base64 JWT payload"),null)}catch(e){return Qe("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof P&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Lt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{_initializeTime(){this.lastSignInTime=Et(this.lastLoginAt),this.creationTime=Et(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(e){var t;const n=e.auth,i=await e.getIdToken(),s=await St(e,async function(e,t){return vt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));nt(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=He(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ct(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){nt(e.idToken,"internal-error"),nt(void 0!==e.idToken,"internal-error"),nt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=kt(e);return nt(t,"internal-error"),nt(void 0!==t.exp,"internal-error"),nt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return nt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await yt(e,{},(async()=>{const n=q({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=_t(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ft.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new Dt;return n&&(nt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(nt("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(nt("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return it("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){nt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Rt{async getIdToken(e){const t=await St(this,this.stsTokenManager.getToken(this.auth,e));return nt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=W(e),i=await n.getIdToken(t),s=kt(i);nt(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Et(Tt(s.auth_time)),issuedAtTime:Et(Tt(s.iat)),expirationTime:Et(Tt(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=W(e);await At(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(nt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){nt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await At(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await St(this,async function(e,t){return vt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;nt(y&&I,e,"internal-error");const E=Dt.fromJSON(this.name,I);nt("string"==typeof y,e,"internal-error"),Nt(u,e.name),Nt(h,e.name),nt("boolean"==typeof w,e,"internal-error"),nt("boolean"==typeof _,e,"internal-error"),Nt(d,e.name),Nt(f,e.name),Nt(p,e.name),Nt(g,e.name),Nt(m,e.name),Nt(v,e.name);const T=new Rt({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new Dt;i.updateFromServerResponse(t);const s=new Rt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await At(s),s}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=He(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ct(s.createdAt||void 0,s.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Mt.type="NONE";const Ot=Mt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t,n){return`firebase:${e}:${t}:${n}`}class Pt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Pt(ot(Ot),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||ot(Ot);const r=xt(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=Rt._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Pt(s,e,n)):new Pt(s,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=xt(this.userKey,i.apiKey,s),this.fullPersistenceKey=xt("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Bt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ft(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zt(t))return"Blackberry";if($t(t))return"Webos";if(Vt(t))return"Safari";if((t.includes("chrome/")||jt(t))&&!t.includes("edge/"))return"Chrome";if(qt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ft(e=k()){return/firefox\//i.test(e)}function Vt(e=k()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jt(e=k()){return/crios\//i.test(e)}function Bt(e=k()){return/iemobile/i.test(e)}function qt(e=k()){return/android/i.test(e)}function zt(e=k()){return/blackberry/i.test(e)}function $t(e=k()){return/webos/i.test(e)}function Ht(e=k()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Kt(){return L()&&10===document.documentMode}function Gt(e=k()){return Ht(e)||qt(e)||$t(e)||zt(e)||/windows phone/i.test(e)||Bt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t=[]){let n;switch(e){case"Browser":n=Ut(k());break;case"Worker":n=`${Ut(k())}-${e}`;break;default:n=e}return`${n}/JsCore/9.13.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return nt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await At(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?W(e):null;return t&&nt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&nt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ot(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new U("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;nt(t,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return nt(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return nt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jt(this),this.idTokenSubscription=new Jt(this),this.beforeStateQueue=new Xt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=We,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Yt(e){return W(e)}class Jt{get next(){return nt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=H((e=>this.observer=e))}}function Zt(e,t,n){const i=Yt(e);nt(i._canInitEmulator,i,"emulator-config-failed"),nt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=en(t),{host:o,port:a}=function(e){const t=en(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:tn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:tn(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function en(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class nn{toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t){return vt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn extends nn{static _fromEmailAndPassword(e,t){return new rn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new rn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return wt(e,"POST","/v1/accounts:signInWithPassword",mt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return wt(e,"POST","/v1/accounts:signInWithEmailLink",mt(e,t))}(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return wt(e,"POST","/v1/accounts:signInWithEmailLink",mt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t){return wt(e,"POST","/v1/accounts:signInWithIdp",mt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends nn{static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=He(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new an(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return on(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,on(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,on(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=q(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln extends nn{static _fromVerification(e,t){return new ln({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ln({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return wt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await wt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,t));if(n.temporaryProof)throw It(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return wt(e,"POST","/v1/accounts:signInWithPhoneNumber",mt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),cn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new ln({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static parseLink(e){const t=function(e){const t=z($(e)).link,n=t?z($(t)).deep_link_id:null,i=z($(e)).deep_link_id;return(i?z($(i)).link:null)||i||n||t||e}(e);try{return new un(t)}catch(e){return null}}constructor(e){var t,n,i,s,r,o;const a=z($(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);nt(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{static credential(e,t){return rn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=un.parseLink(t);return nt(n,"argument-error"),rn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=hn.PROVIDER_ID}}hn.PROVIDER_ID="password",hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends dn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pn extends fn{static credential(e){return an._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com",pn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends fn{static credential(e,t){return an._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}gn.GOOGLE_SIGN_IN_METHOD="google.com",gn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn extends fn{static credential(e){return an._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}mn.GITHUB_SIGN_IN_METHOD="github.com",mn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends fn{static credential(e,t){return an._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function yn(e,t){return wt(e,"POST","/v1/accounts:signUp",mt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.TWITTER_SIGN_IN_METHOD="twitter.com",vn.PROVIDER_ID="twitter.com";class wn{static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Rt._fromIdTokenResponse(e,n,i),r=_n(n);return new wn({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=_n(n);return new wn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function _n(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends P{static _fromErrorAndOperation(e,t,n,i){return new bn(e,t,n,i)}constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,bn.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function In(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw bn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t,n=!1){const i=await St(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Tn(e,t,n=!1){var i;const{auth:s}=e,r="reauthenticate";try{const i=await St(e,In(s,r,t,e),n);nt(i.idToken,s,"internal-error");const o=kt(i.idToken);nt(o,s,"internal-error");const{sub:a}=o;return nt(e.uid===a,s,"user-mismatch"),wn._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&Ye(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t,n=!1){const i="signIn",s=await In(e,i,t),r=await wn._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Sn(e,t){return kn(Yt(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ln(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=W(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},r=await St(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return vt(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function Cn(e){return W(e).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends An{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Kt()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=k();return Vt(e)||Ht(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Gt(),this._shouldAllowMigration=!0}}Dn.type="LOCAL";const Nn=Dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends An{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Rn.type="SESSION";const Mn=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class On{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new On(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.receivers=[];class Pn{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=xn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(){return void 0!==Un().WorkerGlobalScope&&"function"==typeof Un().importScripts}class Vn{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function jn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Bn(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Vn(e).toPromise()}(),t(await Bn()))}))}))}async function qn(e,t,n){const i=jn(e,!0).put({fbase_key:t,value:n});return new Vn(i).toPromise()}function zn(e,t){const n=jn(e,!0).delete(t);return new Vn(n).toPromise()}class $n{async _openDb(){return this.db||(this.db=await Bn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=On._getInstance(Fn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bn();return await qn(e,"__sak","1"),await zn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>qn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=jn(e,!1).get(t),i=await new Vn(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>zn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=jn(e,!1).getAll();return new Vn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}$n.type="LOCAL";const Hn=$n;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Je("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function Gn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gn("rcb"),new ht(3e4,6e4);async function Wn(e,t,n){var i;const s=await n.verify();try{let r;if(nt("string"==typeof s,e,"argument-error"),nt("recaptcha"===n.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){nt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return vt(e,"POST","/v2/accounts/mfaEnrollment:start",mt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{nt("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;nt(n,e,"missing-multi-factor-info");const o=await function(e,t){return vt(e,"POST","/v2/accounts/mfaSignIn:start",mt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return vt(e,"POST","/v1/accounts:sendVerificationCode",mt(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{verifyPhoneNumber(e,t){return Wn(this.auth,e,W(t))}static credential(e,t){return ln._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Xn.credentialFromTaggedObject(t)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ln._fromTokenResponse(t,n):null}constructor(e){this.providerId=Xn.PROVIDER_ID,this.auth=Yt(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(e,t){return t?ot(t):(nt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn.PROVIDER_ID="phone",Xn.PHONE_SIGN_IN_METHOD="phone";class Yn extends nn{_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,t){return on(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Jn(e){return kn(e.auth,new Yn(e),e.bypassAuthState)}function Zn(e){const{auth:t,user:n}=e;return nt(n,t,"internal-error"),Tn(n,new Yn(e),e.bypassAuthState)}async function ei(e){const{auth:t,user:n}=e;return nt(n,t,"internal-error"),En(n,new Yn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jn;case"linkViaPopup":case"linkViaRedirect":return ei;case"reauthViaPopup":case"reauthViaRedirect":return Zn;default:Ye(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new ht(2e3,1e4);async function ii(e,t,n){const i=Yt(e);et(e,t,dn);const s=Qn(i,n);return new si(i,"signInViaPopup",t,s).executeNotNull()}class si extends ti{async executeNotNull(){const e=await this.execute();return nt(e,this.auth,"internal-error"),e}async onExecution(){st(1===this.filter.length,"Popup operations only handle one event");const e=xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Je(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ni.get())};e()}constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri=new Map;class oi extends ti{async execute(){let e=ri.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=li(t),i=ci(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ai(e,t){ri.set(e._key(),t)}function ci(e){return ot(e._redirectPersistence)}function li(e){return xt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(e,t,n=!1){const i=Yt(e),s=Qn(i,t),r=new oi(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class hi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gi=/^https?/;async function mi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(vi(e))return}catch(e){}Ye(e,"unauthorized-domain")}function vi(e){const t=at(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!gi.test(n))return!1;if(pi.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new ht(3e4,6e4);function wi(){const e=Un().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let _i=null;function bi(e){return _i=_i||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(Je(e,"network-request-failed"))},timeout:yi.get()})}if(null===(s=null===(i=Un().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Un().gapi)||void 0===r?void 0:r.load)){const t=Gn("iframefcb");return Un()[t]=()=>{gapi.load?o():n(Je(e,"network-request-failed"))},Kn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw _i=null,e}))}(e),_i}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new ht(5e3,15e3),Ei={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ti=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ki(e){const t=e.config;nt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?dt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.13.0"},s=Ti.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${q(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Si={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Li{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ci(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Si),{width:i.toString(),height:s.toString(),top:r,left:o}),l=k().toLowerCase();n&&(a=jt(l)?"_blank":n),Ft(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=k()){var t;return Ht(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Li(null);const h=window.open(t||"",a,u);nt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Li(h)}function Ai(e,t,n,i,s,r){nt(e.config.authDomain,e,"auth-domain-config-required"),nt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.13.0",eventId:s};if(t instanceof dn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",V(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof fn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?dt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${q(a).slice(1)}`}const Di=class{async _openPopup(e,t,n,i){var s;st(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Ci(e,Ai(e,t,n,at(),i),xn())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=Ai(e,t,n,at(),i),Un().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(st(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await bi(e),n=Un().gapi;return nt(n,e,"internal-error"),t.open({where:document.body,url:ki(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ei,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Je(e,"network-request-failed"),r=Un().setTimeout((()=>{i(s)}),Ii.get());function o(){Un().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new hi(e);return t.register("authEvent",(t=>{nt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),Ye(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gt()||Vt()||Ht()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=ui,this._overrideRedirectResult=ai}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){nt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ri=M("authIdTokenMaxAge")||300;let Mi=null;var Oi;Oi="Browser",Ae(new X("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{nt(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),nt(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:Oi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wt(Oi)},o=new Qt(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ot);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ae(new X("auth-internal",(e=>{const t=Yt(e.getProvider("auth").getImmediate());return new Ni(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),xe("@firebase/auth","0.20.11",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Oi)),xe("@firebase/auth","0.20.11","esm2017");var xi,Pi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Ui={},Fi=Fi||{},Vi=Pi||self;function ji(){}function Bi(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function qi(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var zi="closure_uid_"+(1e9*Math.random()>>>0),$i=0;function Hi(e,t,n){return e.call.apply(e.bind,arguments)}function Ki(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Gi(e,t,n){return(Gi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Hi:Ki).apply(null,arguments)}function Wi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Xi(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function Qi(){this.s=this.s,this.o=this.o}Qi.prototype.s=!1,Qi.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,zi)&&e[zi]||(e[zi]=++$i))},Qi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ji(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Zi(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Bi(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function es(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}es.prototype.h=function(){this.defaultPrevented=!0};var ts=function(){if(!Vi.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Vi.addEventListener("test",ji,t),Vi.removeEventListener("test",ji,t)}catch(e){}return e}();function ns(e){return/^[\s\xa0]*$/.test(e)}var is=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ss(e,t){return e<t?-1:e>t?1:0}function rs(){var e=Vi.navigator;return e&&(e=e.userAgent)?e:""}function os(e){return-1!=rs().indexOf(e)}function as(e){return as[" "](e),e}as[" "]=ji;var cs,ls,us=os("Opera"),hs=os("Trident")||os("MSIE"),ds=os("Edge"),fs=ds||hs,ps=os("Gecko")&&!(-1!=rs().toLowerCase().indexOf("webkit")&&!os("Edge"))&&!(os("Trident")||os("MSIE"))&&!os("Edge"),gs=-1!=rs().toLowerCase().indexOf("webkit")&&!os("Edge");function ms(){var e=Vi.document;return e?e.documentMode:void 0}e:{var vs="",ys=(ls=rs(),ps?/rv:([^\);]+)(\)|;)/.exec(ls):ds?/Edge\/([\d\.]+)/.exec(ls):hs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ls):gs?/WebKit\/(\S+)/.exec(ls):us?/(?:Version)[ \/]?(\S+)/.exec(ls):void 0);if(ys&&(vs=ys?ys[1]:""),hs){var ws=ms();if(null!=ws&&ws>parseFloat(vs)){cs=String(ws);break e}}cs=vs}var _s,bs={};function Is(){return function(e){var t=bs;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=is(String(cs)).split("."),n=is("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=ss(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||ss(0==s[2].length,0==r[2].length)||ss(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))}if(Vi.document&&hs){var Es=ms();_s=Es||(parseInt(cs,10)||void 0)}else _s=void 0;var Ts=_s;function ks(e,t){if(es.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ps){e:{try{as(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ss[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ks.X.h.call(this)}}Xi(ks,es);var Ss={2:"touch",3:"pen",4:"mouse"};ks.prototype.h=function(){ks.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function As(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=s,this.key=++Cs,this.ba=this.ea=!1}function Ds(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ns(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Rs(e){const t={};for(const n in e)t[n]=e[n];return t}const Ms="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Os(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Ms.length;t++)n=Ms[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function xs(e){this.src=e,this.g={},this.h=0}function Ps(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=Yi(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ds(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Us(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==i)return s}return-1}xs.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Us(e,t,i,s);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new As(t,this.src,r,!!i,s)).ea=n,e.push(t)),t};var Fs="closure_lm_"+(1e6*Math.random()|0),Vs={};function js(e,t,n,i,s){if(i&&i.once)return qs(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)js(e,t[r],n,i,s);return null}return n=Xs(n),e&&e[Ls]?e.N(t,n,qi(i)?!!i.capture:!!i,s):Bs(e,t,n,!1,i,s)}function Bs(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=qi(s)?!!s.capture:!!s,a=Gs(e);if(a||(e[Fs]=a=new xs(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Ks;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ts||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Hs(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function qs(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)qs(e,t[r],n,i,s);return null}return n=Xs(n),e&&e[Ls]?e.O(t,n,qi(i)?!!i.capture:!!i,s):Bs(e,t,n,!0,i,s)}function zs(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)zs(e,t[r],n,i,s);else i=qi(i)?!!i.capture:!!i,n=Xs(n),e&&e[Ls]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Us(r=e.g[t],n,i,s))&&(Ds(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Gs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Us(t,n,i,s)),(n=-1<e?t[e]:null)&&$s(n))}function $s(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Ls])Ps(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Hs(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Gs(t))?(Ps(n,e),0==n.h&&(n.src=null,t[Fs]=null)):Ds(e)}}}function Hs(e){return e in Vs?Vs[e]:Vs[e]="on"+e}function Ks(e,t){if(e.ba)e=!0;else{t=new ks(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&$s(e),e=n.call(i,t)}return e}function Gs(e){return(e=e[Fs])instanceof xs?e:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xs(e){return"function"==typeof e?e:(e[Ws]||(e[Ws]=function(t){return e.handleEvent(t)}),e[Ws])}function Qs(){Qi.call(this),this.i=new xs(this),this.P=this,this.I=null}function Ys(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new es(t,e);else if(t instanceof es)t.target=t.target||e;else{var s=t;Os(t=new es(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=Js(o,i,!0,t)&&s}if(s=Js(o=t.g=e,i,!0,t)&&s,s=Js(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=Js(o=t.g=n[r],i,!1,t)&&s}function Js(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ps(e.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}Xi(Qs,Qi),Qs.prototype[Ls]=!0,Qs.prototype.removeEventListener=function(e,t,n,i){zs(this,e,t,n,i)},Qs.prototype.M=function(){if(Qs.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ds(n[i]);delete t.g[e],t.h--}}this.I=null},Qs.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},Qs.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Zs=Vi.JSON.stringify;function er(){var e=ar;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var tr,nr=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new ir),(e=>e.reset()));class ir{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function sr(e){Vi.setTimeout((()=>{throw e}),0)}function rr(e,t){tr||function(){var e=Vi.Promise.resolve(void 0);tr=function(){e.then(cr)}}(),or||(tr(),or=!0),ar.add(e,t)}var or=!1,ar=new class{add(e,t){const n=nr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function cr(){for(var e;e=er();){try{e.h.call(e.g)}catch(e){sr(e)}var t=nr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}or=!1}function lr(e,t){Qs.call(this),this.h=e||1,this.g=t||Vi,this.j=Gi(this.lb,this),this.l=Date.now()}function ur(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function hr(e,t,n){if("function"==typeof e)n&&(e=Gi(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Gi(e.handleEvent,e)}return 2147483647<Number(t)?-1:Vi.setTimeout(e,t||0)}function dr(e){e.g=hr((()=>{e.g=null,e.i&&(e.i=!1,dr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Xi(lr,Qs),(xi=lr.prototype).ca=!1,xi.R=null,xi.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ys(this,"tick"),this.ca&&(ur(this),this.start()))}},xi.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},xi.M=function(){lr.X.M.call(this),ur(this),delete this.g};class fr extends Qi{l(e){this.h=arguments,this.g?this.i=!0:dr(this)}M(){super.M(),this.g&&(Vi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function pr(e){Qi.call(this),this.h=e,this.g={}}Xi(pr,Qi);var gr=[];function mr(e,t,n,i){Array.isArray(n)||(n&&(gr[0]=n.toString()),n=gr);for(var s=0;s<n.length;s++){var r=js(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function vr(e){Ns(e.g,(function(e,t){this.g.hasOwnProperty(t)&&$s(e)}),e),e.g={}}function yr(){this.g=!0}function wr(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Zs(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}pr.prototype.M=function(){pr.X.M.call(this),vr(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},yr.prototype.Aa=function(){this.g=!1},yr.prototype.info=function(){};var _r={},br=null;function Ir(){return br=br||new Qs}function Er(e){es.call(this,_r.Pa,e)}function Tr(e){const t=Ir();Ys(t,new Er(t))}function kr(e,t){es.call(this,_r.STAT_EVENT,e),this.stat=t}function Sr(e){const t=Ir();Ys(t,new kr(t,e))}function Lr(e,t){es.call(this,_r.Qa,e),this.size=t}function Cr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Vi.setTimeout((function(){e()}),t)}_r.Pa="serverreachability",Xi(Er,es),_r.STAT_EVENT="statevent",Xi(kr,es),_r.Qa="timingevent",Xi(Lr,es);var Ar={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Dr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Nr(){}function Rr(e){return e.h||(e.h=e.i())}function Mr(){}Nr.prototype.h=null;var Or,xr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pr(){es.call(this,"d")}function Ur(){es.call(this,"c")}function Fr(){}function Vr(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new pr(this),this.O=Br,e=fs?125:void 0,this.T=new lr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new jr}function jr(){this.i=null,this.g="",this.h=!1}Xi(Pr,es),Xi(Ur,es),Xi(Fr,Nr),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},Or=new Fr;var Br=45e3,qr={},zr={};function $r(e,t,n){e.K=1,e.v=lo(so(t)),e.s=n,e.P=!0,Hr(e,null)}function Hr(e,t){e.F=Date.now(),Xr(e),e.A=so(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),Eo(n.i,"t",i),e.C=0,n=e.l.H,e.h=new jr,e.g=Ia(e.l,n?t:null,!e.s),0<e.N&&(e.L=new fr(Gi(e.La,e,e.g),e.N)),mr(e.S,e.g,"readystatechange",e.ib),t=e.H?Rs(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Tr(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function Kr(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function Gr(e,t,n){let i,s=!0;for(;!e.I&&e.C<n.length;){if(i=Wr(e,n),i==zr){4==t&&(e.o=4,Sr(14),s=!1),wr(e.j,e.m,null,"[Incomplete Response]");break}if(i==qr){e.o=4,Sr(15),wr(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}wr(e.j,e.m,i,null),eo(e,i)}Kr(e)&&i!=zr&&i!=qr&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Sr(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),pa(t),t.K=!0,Sr(11))):(wr(e.j,e.m,n,"[Invalid Chunked Response]"),Zr(e),Jr(e))}function Wr(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?zr:(n=Number(t.substring(n,i)),isNaN(n)?qr:(i+=1)+n>t.length?zr:(t=t.substr(i,n),e.C=i+n,t))}function Xr(e){e.V=Date.now()+e.O,Qr(e,e.O)}function Qr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Cr(Gi(e.gb,e),t)}function Yr(e){e.B&&(Vi.clearTimeout(e.B),e.B=null)}function Jr(e){0==e.l.G||e.I||va(e.l,e)}function Zr(e){Yr(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ur(e.T),vr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function eo(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Ao(n.h,e)))if(!e.J&&Ao(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ma(n),oa(n)}fa(n),Sr(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=Cr(Gi(n.cb,n),6e3));if(1>=Co(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else wa(n,11)}else if((e.J||n.g==e)&&ma(n),!ns(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const t=l[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=l[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Do(r,r.h),r.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,co(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((i=n).sa=ba(i,i.H?i.ka:null,i.V),o.J){No(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Yr(a),Xr(a)),i.g=o}else da(i);0<n.i.length&&ca(n)}else"stop"!=l[0]&&"close"!=l[0]||wa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?wa(n,7):ra(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Tr()}catch(e){}}function to(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Bi(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Bi(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Bi(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(xi=Vr.prototype).setTimeout=function(e){this.O=e},xi.ib=function(e){e=e.target;const t=this.L;t&&3==Zo(e)?t.l():this.La(e)},xi.La=function(e){try{if(e==this.g)e:{const u=Zo(this.g);var t=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||fs||this.g&&(this.h.h||this.g.fa()||ea(this.g)))){this.I||4!=u||7==t||Tr(),Yr(this);var n=this.g.aa();this.Y=n;t:if(Kr(this)){var i=ea(this.g);e="";var s=i.length,r=4==Zo(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Zr(this),Jr(this);var o="";break t}this.h.i=new Vi.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ns(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Sr(12),Zr(this),Jr(this);break e}wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eo(this,n)}this.P?(Gr(this,u,o),fs&&this.i&&3==u&&(mr(this.S,this.T,"tick",this.hb),this.T.start())):(wr(this.j,this.m,o,null),eo(this,o)),4==u&&Zr(this),this.i&&!this.I&&(4==u?va(this.l,this):(this.i=!1,Xr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Sr(12)):(this.o=0,Sr(13)),Zr(this),Jr(this)}}}catch(e){}},xi.hb=function(){if(this.g){var e=Zo(this.g),t=this.g.fa();this.C<t.length&&(Yr(this),Gr(this,e,t),this.i&&4!=e&&Xr(this))}},xi.cancel=function(){this.I=!0,Zr(this)},xi.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Tr(),Sr(17)),Zr(this),this.o=2,Jr(this)):Qr(this,this.V-e)};var no=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function io(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof io){this.h=void 0!==t?t:e.h,ro(this,e.j),this.s=e.s,this.g=e.g,oo(this,e.m),this.l=e.l,t=e.i;var n=new wo;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ao(this,n),this.o=e.o}else e&&(n=String(e).match(no))?(this.h=!!t,ro(this,n[1]||"",!0),this.s=uo(n[2]||""),this.g=uo(n[3]||"",!0),oo(this,n[4]),this.l=uo(n[5]||"",!0),ao(this,n[6]||"",!0),this.o=uo(n[7]||"")):(this.h=!!t,this.i=new wo(null,this.h))}function so(e){return new io(e)}function ro(e,t,n){e.j=n?uo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function oo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ao(e,t,n){t instanceof wo?(e.i=t,function(e,t){t&&!e.j&&(_o(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bo(this,t),Eo(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ho(t,vo)),e.i=new wo(t,e.h))}function co(e,t,n){e.i.set(t,n)}function lo(e){return co(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function uo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ho(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,fo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fo(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}io.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ho(t,po,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ho(t,po,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ho(n,"/"==n.charAt(0)?mo:go,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ho(n,yo)),e.join("")};var po=/[#\/\?@]/g,go=/[#\?:]/g,mo=/[#\?]/g,vo=/[#\?@]/g,yo=/#/g;function wo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _o(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bo(e,t){_o(e),t=To(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Io(e,t){return _o(e),t=To(e,t),e.g.has(t)}function Eo(e,t,n){bo(e,t),0<n.length&&(e.i=null,e.g.set(To(e,t),Ji(n)),e.h+=n.length)}function To(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(xi=wo.prototype).add=function(e,t){_o(this),this.i=null,e=To(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},xi.forEach=function(e,t){_o(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},xi.oa=function(){_o(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},xi.W=function(e){_o(this);let t=[];if("string"==typeof e)Io(this,e)&&(t=t.concat(this.g.get(To(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},xi.set=function(e,t){return _o(this),this.i=null,Io(this,e=To(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},xi.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},xi.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function ko(e){this.l=e||So,Vi.PerformanceNavigationTiming?e=0<(e=Vi.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Vi.g&&Vi.g.Ga&&Vi.g.Ga()&&Vi.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var So=10;function Lo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Co(e){return e.h?1:e.g?e.g.size:0}function Ao(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Do(e,t){e.g?e.g.add(t):e.h=t}function No(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ro(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ji(e.i)}function Mo(){}function Oo(){this.g=new Mo}function xo(e,t,n){const i=n||"";try{to(e,(function(e,n){let s=e;qi(e)&&(s=Zs(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Po(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function Uo(e){this.l=e.ac||null,this.j=e.jb||!1}function Fo(e,t){Qs.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Vo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ko.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Mo.prototype.stringify=function(e){return Vi.JSON.stringify(e,void 0)},Mo.prototype.parse=function(e){return Vi.JSON.parse(e,void 0)},Xi(Uo,Nr),Uo.prototype.g=function(){return new Fo(this.l,this.j)},Uo.prototype.i=function(e){return function(){return e}}({}),Xi(Fo,Qs);var Vo=0;function jo(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Bo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,qo(e)}function qo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(xi=Fo.prototype).open=function(e,t){if(this.readyState!=Vo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,qo(this)},xi.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Vi).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},xi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Bo(this)),this.readyState=Vo},xi.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Vi.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jo(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},xi.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Bo(this):qo(this),3==this.readyState&&jo(this)}},xi.Va=function(e){this.g&&(this.response=this.responseText=e,Bo(this))},xi.Ua=function(e){this.g&&(this.response=e,Bo(this))},xi.ga=function(){this.g&&Bo(this)},xi.setRequestHeader=function(e,t){this.v.append(e,t)},xi.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},xi.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var zo=Vi.JSON.parse;function $o(e){Qs.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ho,this.K=this.L=!1}Xi($o,Qs);var Ho="",Ko=/^https?$/i,Go=["POST","PUT"];function Wo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Xo(e),Yo(e)}function Xo(e){e.D||(e.D=!0,Ys(e,"complete"),Ys(e,"error"))}function Qo(e){if(e.h&&void 0!==Fi&&(!e.C[1]||4!=Zo(e)||2!=e.aa()))if(e.v&&4==Zo(e))hr(e.Ha,0,e);else if(Ys(e,"readystatechange"),4==Zo(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.H).match(no)[1]||null;if(!s&&Vi.self&&Vi.self.location){var r=Vi.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ko.test(s?s.toLowerCase():"")}n=i}if(n)Ys(e,"complete"),Ys(e,"success");else{e.m=6;try{var o=2<Zo(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",Xo(e)}}finally{Yo(e)}}}function Yo(e,t){if(e.g){Jo(e);const n=e.g,i=e.C[0]?ji:null;e.g=null,e.C=null,t||Ys(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function Jo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Vi.clearTimeout(e.A),e.A=null)}function Zo(e){return e.g?e.g.readyState:0}function ea(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ho:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ta(e){let t="";return Ns(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function na(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ta(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):co(e,t,n))}function ia(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sa(e){this.Ca=0,this.i=[],this.j=new yr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ia("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ia("baseRetryDelayMs",5e3,e),this.bb=ia("retryDelaySeedMs",1e4,e),this.$a=ia("forwardChannelMaxRetries",2,e),this.ta=ia("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new ko(e&&e.concurrentRequestLimit),this.Fa=new Oo,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ra(e){if(aa(e),3==e.G){var t=e.U++,n=so(e.F);co(n,"SID",e.I),co(n,"RID",t),co(n,"TYPE","terminate"),ua(e,n),(t=new Vr(e,e.j,t,void 0)).K=2,t.v=lo(so(n)),n=!1,Vi.navigator&&Vi.navigator.sendBeacon&&(n=Vi.navigator.sendBeacon(t.v.toString(),"")),!n&&Vi.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ia(t.l,null),t.g.da(t.v)),t.F=Date.now(),Xr(t)}_a(e)}function oa(e){e.g&&(pa(e),e.g.cancel(),e.g=null)}function aa(e){oa(e),e.u&&(Vi.clearTimeout(e.u),e.u=null),ma(e),e.h.cancel(),e.m&&("number"==typeof e.m&&Vi.clearTimeout(e.m),e.m=null)}function ca(e){Lo(e.h)||e.m||(e.m=!0,rr(e.Ja,e),e.C=0)}function la(e,t){var n;n=t?t.m:e.U++;const i=so(e.F);co(i,"SID",e.I),co(i,"RID",n),co(i,"AID",e.T),ua(e,i),e.o&&e.s&&na(i,e.o,e.s),n=new Vr(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ha(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Do(e.h,n),$r(n,i,t)}function ua(e,t){e.ia&&Ns(e.ia,(function(e,n){co(t,n,e)})),e.l&&to({},(function(e,n){co(t,n,e)}))}function ha(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Gi(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{xo(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function da(e){e.g||e.u||(e.Z=1,rr(e.Ia,e),e.A=0)}function fa(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Cr(Gi(e.Ia,e),ya(e,e.A)),e.A++,!0)}function pa(e){null!=e.B&&(Vi.clearTimeout(e.B),e.B=null)}function ga(e){e.g=new Vr(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=so(e.sa);co(t,"RID","rpc"),co(t,"SID",e.I),co(t,"CI",e.L?"0":"1"),co(t,"AID",e.T),co(t,"TYPE","xmlhttp"),ua(e,t),e.o&&e.s&&na(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=lo(so(t)),n.s=null,n.P=!0,Hr(n,e)}function ma(e){null!=e.v&&(Vi.clearTimeout(e.v),e.v=null)}function va(e,t){var n=null;if(e.g==t){ma(e),pa(e),e.g=null;var i=2}else{if(!Ao(e.h,t))return;n=t.D,No(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Ys(i=Ir(),new Lr(i,n)),ca(e)}else da(e);else if(3==(s=t.o)||0==s&&0<e.pa||!(1==i&&function(e,t){return!(Co(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Za?0:e.$a)||(e.m=Cr(Gi(e.Ja,e,t),ya(e,e.C)),e.C++,0)))}(e,t)||2==i&&fa(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:wa(e,5);break;case 4:wa(e,10);break;case 3:wa(e,6);break;default:wa(e,2)}}function ya(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function wa(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=Gi(e.kb,e);n||(n=new io("//www.google.com/images/cleardot.gif"),Vi.location&&"http"==Vi.location.protocol||ro(n,"https"),lo(n)),function(e,t){const n=new yr;if(Vi.Image){const i=new Image;i.onload=Wi(Po,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Wi(Po,n,i,"TestLoadImage: error",!1,t),i.onabort=Wi(Po,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Wi(Po,n,i,"TestLoadImage: timeout",!1,t),Vi.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Sr(2);e.G=0,e.l&&e.l.va(t),_a(e),aa(e)}function _a(e){if(e.G=0,e.la=[],e.l){const t=Ro(e.h);0==t.length&&0==e.i.length||(Zi(e.la,t),Zi(e.la,e.i),e.h.i.length=0,Ji(e.i),e.i.length=0),e.l.ua()}}function ba(e,t,n){var i=n instanceof io?so(n):new io(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),oo(i,i.m);else{var s=Vi.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new io(null,void 0);i&&ro(r,i),t&&(r.g=t),s&&oo(r,s),n&&(r.l=n),i=r}return n=e.D,t=e.za,n&&t&&co(i,n,t),co(i,"VER",e.ma),ua(e,i),i}function Ia(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new $o(new Uo({jb:!0})):new $o(e.ra)).Ka(e.H),t}function Ea(){}function Ta(){if(hs&&!(10<=Number(Ts)))throw Error("Environmental error: no available transport.")}function ka(e,t){Qs.call(this),this.g=new sa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ns(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ns(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Ca(this)}function Sa(e){Pr.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function La(){Ur.call(this),this.status=1}function Ca(e){this.g=e}(xi=$o.prototype).Ka=function(e){this.L=e},xi.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Or.g(),this.C=this.u?Rr(this.u):Rr(Or),this.g.onreadystatechange=Gi(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Wo(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=Vi.FormData&&e instanceof Vi.FormData,!(0<=Yi(Go,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jo(this),0<this.B&&((this.K=function(e){return hs&&Is()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Gi(this.qa,this)):this.A=hr(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Wo(this,e)}},xi.qa=function(){void 0!==Fi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ys(this,"timeout"),this.abort(8))},xi.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ys(this,"complete"),Ys(this,"abort"),Yo(this))},xi.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yo(this,!0)),$o.X.M.call(this)},xi.Ha=function(){this.s||(this.F||this.v||this.l?Qo(this):this.fb())},xi.fb=function(){Qo(this)},xi.aa=function(){try{return 2<Zo(this)?this.g.status:-1}catch(e){return-1}},xi.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},xi.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),zo(t)}},xi.Ea=function(){return this.m},xi.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(xi=sa.prototype).ma=8,xi.G=1,xi.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Vr(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=Rs(r),Os(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ha(this,s,t),co(n=so(this.F),"RID",e),co(n,"CVER",22),this.D&&co(n,"X-HTTP-Session-Id",this.D),ua(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(ta(r)))+"&"+t:this.o&&na(n,this.o,r)),Do(this.h,s),this.Ya&&co(n,"TYPE","init"),this.O?(co(n,"$req",t),co(n,"SID","null"),s.Z=!0,$r(s,n,null)):$r(s,n,t),this.G=2}}else 3==this.G&&(e?la(this,e):0==this.i.length||Lo(this.h)||la(this))},xi.Ia=function(){if(this.u=null,ga(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Cr(Gi(this.eb,this),e)}},xi.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Sr(10),oa(this),ga(this))},xi.cb=function(){null!=this.v&&(this.v=null,oa(this),fa(this),Sr(19))},xi.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Sr(2)):(this.j.info("Failed to ping google.com"),Sr(1))},(xi=Ea.prototype).xa=function(){},xi.wa=function(){},xi.va=function(){},xi.ua=function(){},xi.Ra=function(){},Ta.prototype.g=function(e,t){return new ka(e,t)},Xi(ka,Qs),ka.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Sr(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ba(e,null,e.V),ca(e)},ka.prototype.close=function(){ra(this.g)},ka.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Zs(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&ca(t)},ka.prototype.M=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,ka.X.M.call(this)},Xi(Sa,Pr),Xi(La,Ur),Xi(Ca,Ea),Ca.prototype.xa=function(){Ys(this.g,"a")},Ca.prototype.wa=function(e){Ys(this.g,new Sa(e))},Ca.prototype.va=function(e){Ys(this.g,new La)},Ca.prototype.ua=function(){Ys(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,ka.prototype.send=ka.prototype.u,ka.prototype.open=ka.prototype.m,ka.prototype.close=ka.prototype.close,Ar.NO_ERROR=0,Ar.TIMEOUT=8,Ar.HTTP_ERROR=6,Dr.COMPLETE="complete",Mr.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",Qs.prototype.listen=Qs.prototype.N,$o.prototype.listenOnce=$o.prototype.O,$o.prototype.getLastError=$o.prototype.Oa,$o.prototype.getLastErrorCode=$o.prototype.Ea,$o.prototype.getStatus=$o.prototype.aa,$o.prototype.getResponseJson=$o.prototype.Sa,$o.prototype.getResponseText=$o.prototype.fa,$o.prototype.send=$o.prototype.da,$o.prototype.setWithCredentials=$o.prototype.Ka;var Aa=Ui.createWebChannelTransport=function(){return new Ta},Da=Ui.getStatEventTarget=function(){return Ir()},Na=Ui.ErrorCode=Ar,Ra=Ui.EventType=Dr,Ma=Ui.Event=_r,Oa=Ui.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},xa=Ui.FetchXmlHttpFactory=Uo,Pa=Ui.WebChannel=Mr,Ua=Ui.XhrIo=$o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}Fa.UNAUTHENTICATED=new Fa(null),Fa.GOOGLE_CREDENTIALS=new Fa("google-credentials-uid"),Fa.FIRST_PARTY=new Fa("first-party-uid"),Fa.MOCK_USER=new Fa("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Va="9.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new re("@firebase/firestore");function Ba(){return ja.logLevel}function qa(e,...t){if(ja.logLevel<=Z.DEBUG){const n=t.map(Ha);ja.debug(`Firestore (${Va}): ${e}`,...n)}}function za(e,...t){if(ja.logLevel<=Z.ERROR){const n=t.map(Ha);ja.error(`Firestore (${Va}): ${e}`,...n)}}function $a(e,...t){if(ja.logLevel<=Z.WARN){const n=t.map(Ha);ja.warn(`Firestore (${Va}): ${e}`,...n)}}function Ha(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e="Unexpected state"){const t=`FIRESTORE (${Va}) INTERNAL ASSERTION FAILED: `+e;throw za(t),new Error(t)}function Ga(e,t){e||Ka()}function Wa(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qa extends P{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Za{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fa.UNAUTHENTICATED)))}shutdown(){}}class ec{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class tc{start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Ya;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ya,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{qa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(qa("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ya)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(qa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ga("string"==typeof t.accessToken),new Ja(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ga(null===e||"string"==typeof e),new Fa(e)}constructor(e){this.t=e,this.currentUser=Fa.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class nc{I(){return this.g?this.g():(Ga(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i,this.type="FirstParty",this.user=Fa.FIRST_PARTY,this.p=new Map}}class ic{getToken(){return Promise.resolve(new nc(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Fa.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n,i){this.h=e,this.l=t,this.m=n,this.g=i}}class sc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rc{start(e,t){const n=e=>{null!=e.error&&qa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,qa("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{qa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?i(e):qa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ga("string"==typeof e.token),this.A=e.token,new sc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=oc(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function cc(e,t){return e<t?-1:e>t?1:0}function lc(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{static now(){return uc.fromMillis(Date.now())}static fromDate(e){return uc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new uc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?cc(this.nanoseconds,e.nanoseconds):cc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Qa(Xa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Qa(Xa.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Qa(Xa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Qa(Xa.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{static fromTimestamp(e){return new hc(e)}static min(){return new hc(new uc(0,0))}static max(){return new hc(new uc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{get length(){return this.len}isEqual(e){return 0===dc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&Ka(),void 0===n?n=e.length-t:n>e.length-t&&Ka(),this.segments=e,this.offset=t,this.len=n}}class fc extends dc{construct(e,t,n){return new fc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Qa(Xa.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new fc(t)}static emptyPath(){return new fc([])}}const pc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gc extends dc{construct(e,t,n){return new gc(e,t,n)}static isValidIdentifier(e){return pc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gc(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Qa(Xa.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Qa(Xa.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Qa(Xa.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Qa(Xa.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gc(t)}static emptyPath(){return new gc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{static fromPath(e){return new mc(fc.fromString(e))}static fromName(e){return new mc(fc.fromString(e).popFirst(5))}static empty(){return new mc(fc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===fc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new mc(new fc(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}vc.UNKNOWN_ID=-1;function yc(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=hc.fromTimestamp(1e9===i?new uc(n+1,0):new uc(n,i));return new _c(s,mc.empty(),t)}function wc(e){return new _c(e.readTime,e.key,-1)}class _c{static min(){return new _c(hc.min(),mc.empty(),-1)}static max(){return new _c(hc.max(),mc.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function bc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=mc.comparator(e.documentKey,t.documentKey),0!==n?n:cc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ec{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(e){if(e.code!==Xa.FAILED_PRECONDITION||e.message!==Ic)throw e;qa("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ka(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new kc(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof kc?t:kc.resolve(t)}catch(e){return kc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):kc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):kc.reject(t)}static resolve(e){return new kc(((t,n)=>{t(e)}))}static reject(e){return new kc(((t,n)=>{n(e)}))}static waitFor(e){return new kc(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=kc.resolve(!1);for(const n of e)t=t.next((e=>e?kc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new kc(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new kc(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc{ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ac(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Dc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lc.at=-1;class Nc{insert(e,t){return new Nc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mc.BLACK,null,null))}remove(e){return new Nc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rc(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Mc.EMPTY}}class Rc{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Mc{copy(e,t,n,i,s){return new Mc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Mc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Mc.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ka();if(this.right.isRed())throw Ka();const e=this.left.check();if(e!==this.right.check())throw Ka();return e+(this.isRed()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Mc.RED,this.left=null!=i?i:Mc.EMPTY,this.right=null!=s?s:Mc.EMPTY,this.size=this.left.size+1+this.right.size}}Mc.EMPTY=null,Mc.RED=!0,Mc.BLACK=!1,Mc.EMPTY=new class{get key(){throw Ka()}get value(){throw Ka()}get color(){throw Ka()}get left(){throw Ka()}get right(){throw Ka()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Mc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xc(this.data.getIterator())}getIteratorFrom(e){return new xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Oc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Oc(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new Nc(this.comparator)}}class xc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{static empty(){return new Pc([])}unionWith(e){let t=new Oc(gc.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Pc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(gc.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{static fromBase64String(e){const t=atob(e);return new Fc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fc(t)}[Uc](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return cc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Fc.EMPTY_BYTE_STRING=new Fc("");const Vc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jc(e){if(Ga(!!e),"string"==typeof e){let t=0;const n=Vc.exec(e);if(Ga(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Bc(e.seconds),nanos:Bc(e.nanos)}}function Bc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function qc(e){return"string"==typeof e?Fc.fromBase64String(e):Fc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $c(e){const t=e.mapValue.fields.__previous_value__;return zc(t)?$c(t):t}function Hc(e){const t=jc(e.mapValue.fields.__local_write_time__.timestampValue);return new uc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,n,i,s,r,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Gc{static empty(){return new Gc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Gc&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}function Wc(e){return null==e}function Xc(e){return 0===e&&1/e==-1/0}function Qc(e){return"number"==typeof e&&Number.isInteger(e)&&!Xc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?zc(e)?4:hl(e)?9007199254740991:10:Ka()}function Zc(e,t){if(e===t)return!0;const n=Jc(e);if(n!==Jc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hc(e).isEqual(Hc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=jc(e.timestampValue),i=jc(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,qc(e.bytesValue).isEqual(qc(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Bc(e.geoPointValue.latitude)===Bc(t.geoPointValue.latitude)&&Bc(e.geoPointValue.longitude)===Bc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Bc(e.integerValue)===Bc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Bc(e.doubleValue),i=Bc(t.doubleValue);return n===i?Xc(n)===Xc(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return lc(e.arrayValue.values||[],t.arrayValue.values||[],Zc);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Cc(n)!==Cc(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Zc(n[e],i[e])))return!1;return!0}(e,t);default:return Ka()}var i}function el(e,t){return void 0!==(e.values||[]).find((e=>Zc(e,t)))}function tl(e,t){if(e===t)return 0;const n=Jc(e),i=Jc(t);if(n!==i)return cc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return cc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Bc(e.integerValue||e.doubleValue),i=Bc(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return nl(e.timestampValue,t.timestampValue);case 4:return nl(Hc(e),Hc(t));case 5:return cc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=qc(e),i=qc(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=cc(n[e],i[e]);if(0!==t)return t}return cc(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=cc(Bc(e.latitude),Bc(t.latitude));return 0!==n?n:cc(Bc(e.longitude),Bc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=tl(n[e],i[e]);if(t)return t}return cc(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Yc.mapValue&&t===Yc.mapValue)return 0;if(e===Yc.mapValue)return 1;if(t===Yc.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=cc(i[e],r[e]);if(0!==t)return t;const o=tl(n[i[e]],s[r[e]]);if(0!==o)return o}return cc(i.length,r.length)}(e.mapValue,t.mapValue);default:throw Ka()}}function nl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return cc(e,t);const n=jc(e),i=jc(t),s=cc(n.seconds,i.seconds);return 0!==s?s:cc(n.nanos,i.nanos)}function il(e){return sl(e)}function sl(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=jc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qc(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,mc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=sl(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${sl(e.fields[s])}`;return n+"}"}(e.mapValue):Ka()}function rl(e){return!!e&&"integerValue"in e}function ol(e){return!!e&&"arrayValue"in e}function al(e){return!!e&&"nullValue"in e}function cl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ll(e){return!!e&&"mapValue"in e}function ul(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ac(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ul(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ul(e.arrayValue.values[n]);return t}return Object.assign({},e)}function hl(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{static empty(){return new dl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ll(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(t)}setAll(e){let t=gc.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=ul(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());ll(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ac(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new dl(ul(this.value))}constructor(e){this.value=e}}function fl(e){const t=[];return Ac(e.fields,((e,n)=>{const i=new gc([e]);if(ll(n)){const e=fl(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Pc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pl{static newInvalidDocument(e){return new pl(e,0,hc.min(),hc.min(),dl.empty(),0)}static newFoundDocument(e,t,n){return new pl(e,1,t,hc.min(),n,0)}static newNoDocument(e,t){return new pl(e,2,t,hc.min(),dl.empty(),0)}static newUnknownDocument(e,t){return new pl(e,3,t,hc.min(),dl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=hc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof pl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,i,s,r){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.data=s,this.documentState=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ht=null}}function ml(e,t=null,n=[],i=[],s=null,r=null,o=null){return new gl(e,t,n,i,s,r,o)}function vl(e){const t=Wa(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+il(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Wc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>il(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>il(e))).join(",")),t.ht=e}return t.ht}function yl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Nl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],i=t.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Zc(n.value,i.value))return!1;var n,i;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ml(e.startAt,t.startAt)&&Ml(e.endAt,t.endAt)}function wl(e){return mc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class _l extends class{}{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new bl(e,t,n):"array-contains"===t?new kl(e,n):"in"===t?new Sl(e,n):"not-in"===t?new Ll(e,n):"array-contains-any"===t?new Cl(e,n):new _l(e,t,n)}static lt(e,t,n){return"in"===t?new Il(e,n):new El(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(tl(t,this.value)):null!==t&&Jc(this.value)===Jc(t)&&this.ft(tl(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ka()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class bl extends _l{matches(e){const t=mc.comparator(e.key,this.key);return this.ft(t)}constructor(e,t,n){super(e,t,n),this.key=mc.fromName(n.referenceValue)}}class Il extends _l{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=Tl("in",t)}}class El extends _l{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=Tl("not-in",t)}}function Tl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>mc.fromName(e.referenceValue)))}class kl extends _l{matches(e){const t=e.data.field(this.field);return ol(t)&&el(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class Sl extends _l{matches(e){const t=e.data.field(this.field);return null!==t&&el(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class Ll extends _l{matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!el(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Cl extends _l{matches(e){const t=e.data.field(this.field);return!(!ol(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>el(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}class Al{constructor(e,t){this.position=e,this.inclusive=t}}class Dl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Rl(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?mc.comparator(mc.fromName(o.referenceValue),n.key):tl(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Ml(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Zc(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function xl(e,t,n,i,s,r,o,a){return new Ol(e,t,n,i,s,r,o,a)}function Pl(e){return new Ol(e)}function Ul(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Fl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Vl(e){for(const t of e.filters)if(t.dt())return t.field;return null}function jl(e){return null!==e.collectionGroup}function Bl(e){const t=Wa(e);if(null===t._t){t._t=[];const e=Vl(t),n=Fl(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new Dl(e)),t._t.push(new Dl(gc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Dl(gc.keyField(),e))}}}return t._t}function ql(e){const t=Wa(e);if(!t.wt)if("F"===t.limitType)t.wt=ml(t.path,t.collectionGroup,Bl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Bl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Dl(n.field,t))}const n=t.endAt?new Al(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Al(t.startAt.position,t.startAt.inclusive):null;t.wt=ml(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function zl(e,t,n){return new Ol(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $l(e,t){return yl(ql(e),ql(t))&&e.limitType===t.limitType}function Hl(e){return`${vl(ql(e))}|lt:${e.limitType}`}function Kl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${il(t.value)}`})).join(", ")}]`),Wc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>il(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>il(e))).join(",")),`Target(${t})`}(ql(e))}; limitType=${e.limitType})`}function Gl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):mc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=Rl(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Bl(n),i)||n.endAt&&!function(e,t,n){const i=Rl(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Bl(n),i)));var n,i}function Wl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xl(e){return(t,n)=>{let i=!1;for(const s of Bl(e)){const e=Ql(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Ql(e,t,n){const i=e.field.isKeyField()?mc.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?tl(i,s):Ka()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(t)?"-0":t}}function Jl(e){return{integerValue:""+e}}function Zl(e,t){return Qc(t)?Jl(t):Yl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function tu(e,t,n){return e instanceof su?ru(e,t):e instanceof ou?au(e,t):n}function nu(e,t){var n,i;return e instanceof cu?rl(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null}class iu extends eu{}class su extends eu{constructor(e){super(),this.elements=e}}function ru(e,t){const n=uu(t);for(const t of e.elements)n.some((e=>Zc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class ou extends eu{constructor(e){super(),this.elements=e}}function au(e,t){let n=uu(t);for(const t of e.elements)n=n.filter((e=>!Zc(e,t)));return{arrayValue:{values:n}}}class cu extends eu{constructor(e,t){super(),this.It=e,this.yt=t}}function lu(e){return Bc(e.integerValue||e.doubleValue)}function uu(e){return ol(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.version=e,this.transformResults=t}}class du{static none(){return new du}static exists(e){return new du(void 0,e)}static updateTime(e){return new du(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function fu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class pu{}function gu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ku(e.key,du.none()):new _u(e.key,e.data,du.none());{const n=e.data,i=dl.empty();let s=new Oc(gc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new bu(e.key,i,new Pc(s.toArray()),du.none())}}function mu(e,t,n){var i;e instanceof _u?function(e,t,n){const i=e.value.clone(),s=Eu(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof bu?function(e,t,n){if(!fu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Eu(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Iu(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function vu(e,t,n,i){return e instanceof _u?function(e,t,n,i){if(!fu(e.precondition,t))return n;const s=e.value.clone(),r=Tu(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof bu?function(e,t,n,i){if(!fu(e.precondition,t))return n;const s=Tu(e.fieldTransforms,i,t),r=t.data;return r.setAll(Iu(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(s=t,r=n,fu(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function yu(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=nu(i.transform,e||null);null!=s&&(null===n&&(n=dl.empty()),n.set(i.field,s))}return n||null}function wu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&lc(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof su&&i instanceof su||n instanceof ou&&i instanceof ou?lc(n.elements,i.elements,Zc):n instanceof cu&&i instanceof cu?Zc(n.yt,i.yt):n instanceof iu&&i instanceof iu);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class _u extends pu{getFieldMask(){return null}constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class bu extends pu{getFieldMask(){return this.fieldMask}constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Iu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Eu(e,t,n){const i=new Map;Ga(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,tu(o,a,n[s]))}return i}function Tu(e,t,n){const i=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);i.set(a.field,(r=c,o=t,(s=e)instanceof iu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,r):s instanceof su?ru(s,r):s instanceof ou?au(s,r):function(e,t){const n=nu(e,t),i=lu(n)+lu(e.yt);return rl(n)&&rl(e.yt)?Jl(i):Yl(e.It,i)}(s,r)))}var s,r,o;return i}class ku extends pu{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Su extends pu{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cu,Au;function Du(e){switch(e){default:return Ka();case Xa.CANCELLED:case Xa.UNKNOWN:case Xa.DEADLINE_EXCEEDED:case Xa.RESOURCE_EXHAUSTED:case Xa.INTERNAL:case Xa.UNAVAILABLE:case Xa.UNAUTHENTICATED:return!1;case Xa.INVALID_ARGUMENT:case Xa.NOT_FOUND:case Xa.ALREADY_EXISTS:case Xa.PERMISSION_DENIED:case Xa.FAILED_PRECONDITION:case Xa.ABORTED:case Xa.OUT_OF_RANGE:case Xa.UNIMPLEMENTED:case Xa.DATA_LOSS:return!0}}function Nu(e){if(void 0===e)return za("GRPC error has no .code"),Xa.UNKNOWN;switch(e){case Cu.OK:return Xa.OK;case Cu.CANCELLED:return Xa.CANCELLED;case Cu.UNKNOWN:return Xa.UNKNOWN;case Cu.DEADLINE_EXCEEDED:return Xa.DEADLINE_EXCEEDED;case Cu.RESOURCE_EXHAUSTED:return Xa.RESOURCE_EXHAUSTED;case Cu.INTERNAL:return Xa.INTERNAL;case Cu.UNAVAILABLE:return Xa.UNAVAILABLE;case Cu.UNAUTHENTICATED:return Xa.UNAUTHENTICATED;case Cu.INVALID_ARGUMENT:return Xa.INVALID_ARGUMENT;case Cu.NOT_FOUND:return Xa.NOT_FOUND;case Cu.ALREADY_EXISTS:return Xa.ALREADY_EXISTS;case Cu.PERMISSION_DENIED:return Xa.PERMISSION_DENIED;case Cu.FAILED_PRECONDITION:return Xa.FAILED_PRECONDITION;case Cu.ABORTED:return Xa.ABORTED;case Cu.OUT_OF_RANGE:return Xa.OUT_OF_RANGE;case Cu.UNIMPLEMENTED:return Xa.UNIMPLEMENTED;case Cu.DATA_LOSS:return Xa.DATA_LOSS;default:return Ka()}}(Au=Cu||(Cu={}))[Au.OK=0]="OK",Au[Au.CANCELLED=1]="CANCELLED",Au[Au.UNKNOWN=2]="UNKNOWN",Au[Au.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Au[Au.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Au[Au.NOT_FOUND=5]="NOT_FOUND",Au[Au.ALREADY_EXISTS=6]="ALREADY_EXISTS",Au[Au.PERMISSION_DENIED=7]="PERMISSION_DENIED",Au[Au.UNAUTHENTICATED=16]="UNAUTHENTICATED",Au[Au.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Au[Au.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Au[Au.ABORTED=10]="ABORTED",Au[Au.OUT_OF_RANGE=11]="OUT_OF_RANGE",Au[Au.UNIMPLEMENTED=12]="UNIMPLEMENTED",Au[Au.INTERNAL=13]="INTERNAL",Au[Au.UNAVAILABLE=14]="UNAVAILABLE",Au[Au.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ac(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Dc(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Nc(mc.comparator);function Ou(){return Mu}const xu=new Nc(mc.comparator);function Pu(...e){let t=xu;for(const n of e)t=t.insert(n.key,n);return t}function Uu(e){let t=xu;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Fu(){return ju()}function Vu(){return ju()}function ju(){return new Ru((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Bu=new Nc(mc.comparator),qu=new Oc(mc.comparator);function zu(...e){let t=qu;for(const n of e)t=t.add(n);return t}const $u=new Oc(cc);function Hu(){return $u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Gu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ku(hc.min(),i,Hu(),Ou(),zu())}constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}}class Gu{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Gu(n,t,zu(),zu(),zu())}constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,n,i){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=i}}class Xu{constructor(e,t){this.targetId=e,this.At=t}}class Qu{constructor(e,t,n=Fc.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Yu{get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=zu(),t=zu(),n=zu();return this.bt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Ka()}})),new Gu(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=eh()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}constructor(){this.Rt=0,this.bt=eh(),this.Pt=Fc.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}}class Ju{Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Ka()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,i=this.Xt(t);if(i){const e=i.target;if(wl(e))if(0===n){const n=new mc(e.path);this.jt(t,n,pl.newNoDocument(n,hc.min()))}else Ga(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,i)=>{const s=this.Xt(i);if(s){if(n.current&&wl(s.target)){const t=new mc(s.target.path);null!==this.Ut.get(t)||this.ee(i,t)||this.jt(i,t,pl.newNoDocument(t,e))}n.Dt&&(t.set(i,n.xt()),n.Nt())}}));let n=zu();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const i=new Ku(e,t,this.Kt,this.Ut,n);return this.Ut=Ou(),this.qt=Zu(),this.Kt=new Oc(cc),i}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,t)?i.kt(t,1):i.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Yu,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Oc(cc),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||qa("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Yu),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ou(),this.qt=Zu(),this.Kt=new Oc(cc)}}function Zu(){return new Nc(mc.comparator)}function eh(){return new Nc(mc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th={asc:"ASCENDING",desc:"DESCENDING"},nh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class ih{constructor(e,t){this.databaseId=e,this.gt=t}}function sh(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rh(e,t){return e.gt?t.toBase64():t.toUint8Array()}function oh(e,t){return sh(e,t.toTimestamp())}function ah(e){return Ga(!!e),hc.fromTimestamp(function(e){const t=jc(e);return new uc(t.seconds,t.nanos)}(e))}function ch(e,t){return(n=e,new fc(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function lh(e){const t=fc.fromString(e);return Ga(Ch(t)),t}function uh(e,t){return ch(e.databaseId,t.path)}function hh(e,t){const n=lh(t);if(n.get(1)!==e.databaseId.projectId)throw new Qa(Xa.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Qa(Xa.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new mc(gh(n))}function dh(e,t){return ch(e.databaseId,t)}function fh(e){const t=lh(e);return 4===t.length?fc.emptyPath():gh(t)}function ph(e){return new fc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gh(e){return Ga(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function mh(e,t,n){return{name:uh(e,t),fields:n.value.mapValue.fields}}function vh(e,t){let n;if(t instanceof _u)n={update:mh(e,t.key,t.value)};else if(t instanceof ku)n={delete:uh(e,t.key)};else if(t instanceof bu)n={update:mh(e,t.key,t.data),updateMask:Lh(t.fieldMask)};else{if(!(t instanceof Su))return Ka();n={verify:uh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof iu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof su)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ou)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cu)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Ka()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(s=t.precondition).updateTime?{updateTime:oh(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Ka())),n;var i,s}function yh(e,t){return{documents:[dh(e,t.path)]}}function wh(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=dh(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=dh(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(cl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NAN"}};if(al(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(cl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NOT_NAN"}};if(al(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Th(e.field),op:Eh(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>{return{field:Th((t=e).field),direction:Ih(t.dir)};var t}))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=(a=e,c=t.limit,a.gt||Wc(c)?c:{value:c});var a,c,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function _h(e){let t=fh(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ga(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=bh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Dl(kh((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Wc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Al(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Al(n,t)}(n.endAt)),xl(t,s,o,r,a,"F",c,l)}function bh(e){return e?void 0!==e.unaryFilter?[Sh(e)]:void 0!==e.fieldFilter?[(t=e,_l.create(kh(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ka()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>bh(e))).reduce(((e,t)=>e.concat(t))):Ka():[];var t}function Ih(e){return th[e]}function Eh(e){return nh[e]}function Th(e){return{fieldPath:e.canonicalString()}}function kh(e){return gc.fromServerFormat(e.fieldPath)}function Sh(e){switch(e.unaryFilter.op){case"IS_NAN":const t=kh(e.unaryFilter.field);return _l.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=kh(e.unaryFilter.field);return _l.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kh(e.unaryFilter.field);return _l.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=kh(e.unaryFilter.field);return _l.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ka()}}function Lh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ch(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Dh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Nh=Dh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&mu(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vu(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vu();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=gu(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(hc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),zu())}isEqual(e){return this.batchId===e.batchId&&lc(this.mutations,e.mutations,((e,t)=>wu(e,t)))&&lc(this.baseMutations,e.baseMutations,((e,t)=>wu(e,t)))}constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}}class Mh{static from(e,t,n){Ga(e.mutations.length===n.length);let i=Bu;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new Mh(e,t,n,i)}constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{withSequenceNumber(e){return new xh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new xh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,i,s=hc.min(),r=hc.min(),o=Fc.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.re=e}}function Uh(e){const t=_h({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zl(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Bc(e.integerValue));else if("doubleValue"in e){const n=Bc(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),Xc(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(qc(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?hl(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Ka()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const e of Object.keys(n))this._e(e,t),this.ae(n[e],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const e of n)this.ae(e,t)}ge(e,t){this.le(t,37),mc.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}constructor(){}}Fh.Te=new Fh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vh{addToCollectionParentIndex(e,t){return this.Ye.add(t),kc.resolve()}getCollectionParents(e,t){return kc.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return kc.resolve()}deleteFieldIndex(e,t){return kc.resolve()}getDocumentsMatchingTarget(e,t){return kc.resolve(null)}getIndexType(e,t){return kc.resolve(0)}getFieldIndexes(e,t){return kc.resolve([])}getNextCollectionGroupToUpdate(e){return kc.resolve(null)}getMinOffset(e,t){return kc.resolve(_c.min())}getMinOffsetFromCollectionGroup(e,t){return kc.resolve(_c.min())}updateCollectionGroup(e,t,n){return kc.resolve()}updateIndexEntries(e,t){return kc.resolve()}constructor(){this.Ye=new jh}}class jh{add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Oc(fc.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Oc(fc.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Bh{static withCacheSize(e){return new Bh(e,Bh.DEFAULT_COLLECTION_PERCENTILE,Bh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bh.DEFAULT_COLLECTION_PERCENTILE=10,Bh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bh.DEFAULT=new Bh(41943040,Bh.DEFAULT_COLLECTION_PERCENTILE,Bh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bh.DISABLED=new Bh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qh{next(){return this.bn+=2,this.bn}static Pn(){return new qh(0)}static vn(){return new qh(-1)}constructor(e){this.bn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?kc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Ru((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $h{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&vu(n.mutation,e,Pc.empty(),uc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,zu()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=zu()){const i=Fu();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Pu();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Fu();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,zu())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Ou();const r=ju(),o=ju();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof bu)?s=s.insert(t.key,t):void 0!==o&&(r.set(t.key,o.mutation.getFieldMask()),vu(o.mutation,t,o.mutation.getFieldMask(),uc.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new $h(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ju();let i=new Nc(((e,t)=>e-t)),s=zu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||Pc.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||zu()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Vu();c.forEach((e=>{if(!s.has(e)){const i=gu(t.get(e),n.get(e));null!==i&&l.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return kc.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return i=t,mc.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):jl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var i}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):kc.resolve(Fu());let o=-1,a=s;return r.next((t=>kc.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?kc.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,zu()))).next((e=>({batchId:o,changes:Uu(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new mc(t)).next((e=>{let t=Pu();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=Pu();return this.indexManager.getCollectionParents(e,i).next((r=>kc.forEach(r,(r=>{const o=(a=t,c=r.child(i),new Ol(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===i.get(n)&&(i=i.insert(n,pl.newInvalidDocument(n)))}));let n=Pu();return i.forEach(((i,s)=>{const r=e.get(i);void 0!==r&&vu(r.mutation,s,Pc.empty(),uc.now()),Gl(t,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):kc.resolve(pl.newInvalidDocument(t))}constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{getBundleMetadata(e,t){return kc.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ah(n.createTime)}),kc.resolve()}getNamedQuery(e,t){return kc.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:(n=t).name,query:Uh(n.bundledQuery),readTime:ah(n.readTime)}),kc.resolve();var n}constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{getOverlay(e,t){return kc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Fu();return kc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ue(e,t,i)})),kc.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),kc.resolve()}getOverlaysForCollection(e,t,n){const i=Fu(),s=t.length+1,r=new mc(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return kc.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new Nc(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Fu(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Fu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return kc.resolve(o)}ue(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Oh(t,n));let s=this.es.get(t);void 0===s&&(s=zu(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}constructor(){this.overlays=new Nc(mc.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Xh(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Xh(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new mc(new fc([])),n=new Xh(t,e),i=new Xh(t,e+1),s=[];return this.rs.forEachInRange([n,i],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new mc(new fc([])),n=new Xh(t,e),i=new Xh(t,e+1);let s=zu();return this.rs.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Xh(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.ns=new Oc(Xh.ss),this.rs=new Oc(Xh.os)}}class Xh{static ss(e,t){return mc.comparator(e.key,t.key)||cc(e._s,t._s)}static os(e,t){return cc(e._s,t._s)||mc.comparator(e.key,t.key)}constructor(e,t){this.key=e,this._s=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{checkEmpty(e){return kc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Rh(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.gs=this.gs.add(new Xh(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return kc.resolve(r)}lookupMutationBatch(e,t){return kc.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ps(n),s=i<0?0:i;return kc.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return kc.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return kc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xh(t,0),i=new Xh(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(e=>{const t=this.ys(e._s);s.push(t)})),kc.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Oc(cc);return t.forEach((e=>{const t=new Xh(e,0),i=new Xh(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,i],(e=>{n=n.add(e._s)}))})),kc.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;mc.isDocumentKey(s)||(s=s.child(""));const r=new Xh(new mc(s),0);let o=new Oc(cc);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e._s)),!0)}),r),kc.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Ga(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return kc.forEach(t.mutations,(i=>{const s=new Xh(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Xh(t,0),i=this.gs.firstAfterOrEqual(n);return kc.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,kc.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Oc(Xh.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return kc.resolve(n?n.document.mutableCopy():pl.newInvalidDocument(t))}getEntries(e,t){let n=Ou();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():pl.newInvalidDocument(e))})),kc.resolve(n)}getAllFromCollection(e,t,n){let i=Ou();const s=new mc(t.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:e,value:{document:s}}=r.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||bc(wc(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return kc.resolve(i)}getAllFromCollectionGroup(e,t,n,i){Ka()}As(e,t){return kc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Jh(this)}getSize(e){return kc.resolve(this.size)}constructor(e){this.Es=e,this.docs=new Nc(mc.comparator),this.size=0}}class Jh extends zh{applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(n)})),kc.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}constructor(e){super(),this.Yn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),kc.resolve()}getLastRemoteSnapshotVersion(e){return kc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return kc.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),kc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),kc.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new qh(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,kc.resolve()}updateTargetData(e,t){return this.Dn(t),kc.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,kc.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),kc.waitFor(s).next((()=>i))}getTargetCount(e){return kc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return kc.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),kc.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),kc.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),kc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return kc.resolve(n)}containsKey(e,t){return kc.resolve(this.Ps.containsKey(t))}constructor(e){this.persistence=e,this.Rs=new Ru((e=>vl(e)),yl),this.lastRemoteSnapshotVersion=hc.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wh,this.targetCount=0,this.vs=qh.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Qh(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){qa("MemoryPersistence","Starting transaction:",e);const i=new td(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((e=>this.referenceDelegate.Os(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ms(e,t){return kc.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Lc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Zh(this),this.indexManager=new Vh,this.remoteDocumentCache=new Yh((e=>this.referenceDelegate.xs(e))),this.It=new Ph(t),this.Ns=new Kh(this.It)}}class td extends Ec{constructor(e){super(),this.currentSequenceNumber=e}}class nd{static Bs(e){return new nd(e)}get Ls(){if(this.$s)return this.$s;throw Ka()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),kc.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),kc.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),kc.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return kc.forEach(this.Ls,(n=>{const i=mc.fromPath(n);return this.Us(e,i).next((e=>{e||t.removeEntry(i,hc.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return kc.or([()=>kc.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}constructor(e){this.persistence=e,this.Fs=new Wh,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd{static Ci(e,t){let n=zu(),i=zu();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new sd(e,t.fromCache,n,i)}constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.ki(e,t).next((s=>s||this.Oi(e,t,i,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Ul(t))return kc.resolve(null);let n=ql(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=zl(t,null,"F"),n=ql(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=zu(...i);return this.Ni.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.Fi(t,i);return this.$i(t,r,s,n.readTime)?this.ki(e,zl(t,null,"F")):this.Bi(e,r,t,n)}))))})))))}Oi(e,t,n,i){return Ul(t)||i.isEqual(hc.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((s=>{const r=this.Fi(t,s);return this.$i(t,r,n,i)?this.Mi(e,t):(Ba()<=Z.DEBUG&&qa("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kl(t)),this.Bi(e,r,t,yc(i,-1)))}))}Fi(e,t){let n=new Oc(Xl(e));return t.forEach(((t,i)=>{Gl(e,i)&&(n=n.add(i))})),n}$i(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,t){return Ba()<=Z.DEBUG&&qa("QueryEngine","Using full collection scan to execute query:",Kl(t)),this.Ni.getDocumentsMatchingQuery(e,t,_c.min())}Bi(e,t,n,i){return this.Ni.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hh(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}constructor(e,t,n,i){this.persistence=e,this.Li=t,this.It=i,this.Ui=new Nc(cc),this.qi=new Ru((e=>vl(e)),yl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}}function ad(e,t,n,i){return new od(e,t,n,i)}async function cd(e,t){const n=Wa(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=zu();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function ld(e){const t=Wa(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function ud(e,t,n){let i=zu(),s=zu();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Ou();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(hc.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):qa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function hd(e,t){const n=Wa(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function dd(e,t){const n=Wa(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Cs.getTargetData(e,t).next((s=>s?(i=s,kc.resolve(i)):n.Cs.allocateTargetId(e).next((s=>(i=new xh(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ui.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function fd(e,t,n){const i=Wa(e),s=i.Ui.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Sc(e))throw e;qa("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ui=i.Ui.remove(t),i.qi.delete(s.target)}function pd(e,t,n){const i=Wa(e);let s=hc.min(),r=zu();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Wa(e),s=i.qi.get(n);return void 0!==s?kc.resolve(i.Ui.get(s)):i.Cs.getTargetData(t,n)}(i,e,ql(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Li.getDocumentsMatchingQuery(e,t,n?s:hc.min(),n?r:zu()))).next((e=>(gd(i,Wl(t),e),{documents:e,Hi:r})))))}function gd(e,t,n){let i=e.Ki.get(t)||hc.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ki.set(t,i)}class md{er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Hu()}}class vd{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new md,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Lr=new md,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){qa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){qa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends class{get co(){return!1}ao(e,t,n,i,s){const r=this.ho(e,t);qa("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(e,r,o,n).then((e=>(qa("RestConnection","Received: ",e),e)),(t=>{throw $a("RestConnection",`${e} failed with error: `,t,"url: ",r,"request:",n),t}))}_o(e,t,n,i,s,r){return this.ao(e,t,n,i,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Va,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=_d[e];return`${this.oo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(e,t,n,i){return new Promise(((s,r)=>{const o=new Ua;o.setWithCredentials(!0),o.listenOnce(Ra.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Na.NO_ERROR:const t=o.getResponseJson();qa("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Na.TIMEOUT:qa("Connection",'RPC "'+e+'" timed out'),r(new Qa(Xa.DEADLINE_EXCEEDED,"Request time out"));break;case Na.HTTP_ERROR:const n=o.getStatus();if(qa("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Xa).indexOf(t)>=0?t:Xa.UNKNOWN}(e.status);r(new Qa(t,e.message))}else r(new Qa(Xa.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Qa(Xa.UNAVAILABLE,"Connection failed."));break;default:Ka()}}finally{qa("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(i);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Aa(),r=Da(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new xa({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=i.join("");qa("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new bd({Hr:e=>{u?qa("Connection","Not sending because WebChannel is closed:",e):(l||(qa("Connection","Opening WebChannel transport."),c.open(),l=!0),qa("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Pa.EventType.OPEN,(()=>{u||qa("Connection","WebChannel transport opened.")})),d(c,Pa.EventType.CLOSE,(()=>{u||(u=!0,qa("Connection","WebChannel transport closed"),h.io())})),d(c,Pa.EventType.ERROR,(e=>{u||(u=!0,$a("Connection","WebChannel transport errored:",e),h.io(new Qa(Xa.UNAVAILABLE,"The operation could not be completed")))})),d(c,Pa.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Ga(!!n);const i=n,s=i.error||(null===(t=i[0])||void 0===t?void 0:t.error);if(s){qa("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Cu[e];if(void 0!==t)return Nu(t)}(e),n=s.message;void 0===t&&(t=Xa.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),u=!0,h.io(new Qa(t,n)),c.close()}else qa("Connection","WebChannel received:",n),h.ro(n)}})),d(r,Ma.STAT_EVENT,(e=>{e.stat===Oa.PROXY?qa("Connection","Detected buffering proxy"):e.stat===Oa.NOPROXY&&qa("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e){return new ih(e,!0)}class kd{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-n);i>0&&qa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(e,t,n=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===Xa.RESOURCE_EXHAUSTED?(za(t.toString()),za("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===Xa.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Qa(Xa.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return qa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(qa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,i,s,r,o,a){this.Hs=e,this.vo=n,this.Vo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new kd(e,t)}}class Ld extends Sd{jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Ka(),r=t.targetChange.targetIds||[],o=function(e,t){return e.gt?(Ga(void 0===t||"string"==typeof t),Fc.fromBase64String(t||"")):(Ga(void 0===t||t instanceof Uint8Array),Fc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Xa.UNKNOWN:Nu(e.code);return new Qa(t,e.message||"")}(a);n=new Qu(s,r,o,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=hh(e,i.document.name),r=ah(i.document.updateTime),o=new dl({mapValue:{fields:i.document.fields}}),a=pl.newFoundDocument(s,r,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new Wu(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=hh(e,i.document),r=i.readTime?ah(i.readTime):hc.min(),o=pl.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Wu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=hh(e,i.document),r=i.removedTargetIds||[];n=new Wu([],r,s,null)}else{if(!("filter"in t))return Ka();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,s=new Lu(i),r=e.targetId;n=new Xu(r,s)}}var i;return n}(this.It,e),n=function(e){if(!("targetChange"in e))return hc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?hc.min():t.readTime?ah(t.readTime):hc.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ph(this.It),t.addTarget=function(e,t){let n;const i=t.target;return n=wl(i)?{documents:yh(e,i)}:{query:wh(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=rh(e,t.resumeToken):t.snapshotVersion.compareTo(hc.min())>0&&(n.readTime=sh(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ka()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ph(this.It),t.removeTarget=e,this.Bo(t)}constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.It=s}}class Cd extends Sd{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Ga(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Ga(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?ah(e.updateTime):ah(t);return n.isEqual(hc.min())&&(n=ah(t)),new hu(n,e.transformResults||[])}(e,n)))):[]),s=ah(e.commitTime);return this.listener.Zo(s,i)}var t,n;return Ga(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ph(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>vh(this.It,e)))};this.Bo(t)}constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.It=s,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends class{}{su(){if(this.nu)throw new Qa(Xa.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.ao(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qa(Xa.UNKNOWN,e.toString())}))}_o(e,t,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xa.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Qa(Xa.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=i,this.nu=!1}}class Dd{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(za(t),this.ou=!1):qa("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr((e=>{n.enqueueAndForget((async()=>{jd(this)&&(qa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Wa(e);t._u.add(4),await Md(t),t.gu.set("Unknown"),t._u.delete(4),await Rd(t)}(this))}))})),this.gu=new Dd(n,i)}}async function Rd(e){if(jd(e))for(const t of e.wu)await t(!0)}async function Md(e){for(const t of e.wu)await t(!1)}function Od(e,t){const n=Wa(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Vd(n)?Fd(n):rf(n).ko()&&Pd(n,t))}function xd(e,t){const n=Wa(e),i=rf(n);n.du.delete(t),i.ko()&&Ud(n,t),0===n.du.size&&(i.ko()?i.Fo():jd(n)&&n.gu.set("Unknown"))}function Pd(e,t){e.yu.Mt(t.targetId),rf(e).zo(t)}function Ud(e,t){e.yu.Mt(t),rf(e).Ho(t)}function Fd(e){e.yu=new Ju({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),rf(e).start(),e.gu.uu()}function Vd(e){return jd(e)&&!rf(e).No()&&e.du.size>0}function jd(e){return 0===Wa(e)._u.size}function Bd(e){e.yu=void 0}async function qd(e){e.du.forEach(((t,n)=>{Pd(e,t)}))}async function zd(e,t){Bd(e),Vd(e)?(e.gu.hu(t),Fd(e)):e.gu.set("Unknown")}async function $d(e,t,n){if(e.gu.set("Online"),t instanceof Qu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.du.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.du.delete(i),e.yu.removeTarget(i))}(e,t)}catch(n){qa("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Hd(e,n)}else if(t instanceof Wu?e.yu.Gt(t):t instanceof Xu?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(hc.min()))try{const t=await ld(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.du.get(i);s&&e.du.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Fc.EMPTY_BYTE_STRING,n.snapshotVersion)),Ud(e,t);const i=new xh(n.target,t,1,n.sequenceNumber);Pd(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){qa("RemoteStore","Failed to raise snapshot:",t),await Hd(e,t)}}async function Hd(e,t,n){if(!Sc(t))throw t;e._u.add(1),await Md(e),e.gu.set("Offline"),n||(n=()=>ld(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{qa("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Rd(e)}))}function Kd(e,t){return t().catch((n=>Hd(e,n,t)))}async function Gd(e){const t=Wa(e),n=of(t);let i=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Wd(t);)try{const e=await hd(t.localStore,i);if(null===e){0===t.fu.length&&n.Fo();break}i=e.batchId,Xd(t,e)}catch(e){await Hd(t,e)}Qd(t)&&Yd(t)}function Wd(e){return jd(e)&&e.fu.length<10}function Xd(e,t){e.fu.push(t);const n=of(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Qd(e){return jd(e)&&!of(e).No()&&e.fu.length>0}function Yd(e){of(e).start()}async function Jd(e){of(e).eu()}async function Zd(e){const t=of(e);for(const n of e.fu)t.Xo(n.mutations)}async function ef(e,t,n){const i=e.fu.shift(),s=Mh.from(i,t,n);await Kd(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Gd(e)}async function tf(e,t){t&&of(e).Yo&&await async function(e,t){if(Du(n=t.code)&&n!==Xa.ABORTED){const n=e.fu.shift();of(e).Mo(),await Kd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Gd(e)}var n}(e,t),Qd(e)&&Yd(e)}async function nf(e,t){const n=Wa(e);n.asyncQueue.verifyOperationInProgress(),qa("RemoteStore","RemoteStore received new credentials");const i=jd(n);n._u.add(3),await Md(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Rd(n)}async function sf(e,t){const n=Wa(e);t?(n._u.delete(2),await Rd(n)):t||(n._u.add(2),await Md(n),n.gu.set("Unknown"))}function rf(e){return e.pu||(e.pu=function(e,t,n){const i=Wa(e);return i.su(),new Ld(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:qd.bind(null,e),Zr:zd.bind(null,e),Wo:$d.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Vd(e)?Fd(e):e.gu.set("Unknown")):(await e.pu.stop(),Bd(e))}))),e.pu}function of(e){return e.Iu||(e.Iu=function(e,t,n){const i=Wa(e);return i.su(),new Cd(t,i.connection,i.authCredentials,i.appCheckCredentials,i.It,n)}(e.datastore,e.asyncQueue,{Yr:Jd.bind(null,e),Zr:tf.bind(null,e),tu:Zd.bind(null,e),Zo:ef.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Gd(e)):(await e.Iu.stop(),e.fu.length>0&&(qa("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class af{static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new af(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qa(Xa.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ya,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function cf(e,t){if(za("AsyncQueue",`${t}: ${e}`),Sc(e))return new Qa(Xa.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static emptySet(e){return new lf(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lf))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new lf;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||mc.comparator(t.key,n.key):(e,t)=>mc.comparator(e.key,t.key),this.keyedMap=Pu(),this.sortedSet=new Nc(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Ka():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Tu=new Nc(mc.comparator)}}class hf{static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new hf(e,t,lf.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,i,s,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.Au=void 0,this.listeners=[]}}class ff{constructor(){this.queries=new Ru((e=>Hl(e)),$l),this.onlineState="Unknown",this.Ru=new Set}}async function pf(e,t){const n=Wa(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new df),s)try{r.Au=await n.onListen(i)}catch(e){const n=cf(e,`Initialization of query '${Kl(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.bu(n.onlineState),r.Au&&t.Pu(r.Au)&&yf(n)}async function gf(e,t){const n=Wa(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function mf(e,t){const n=Wa(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.Pu(e)&&(i=!0);s.Au=e}}i&&yf(n)}function vf(e,t,n){const i=Wa(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function yf(e){e.Ru.forEach((e=>{e.next()}))}class wf{Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new hf(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=hf.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _f{constructor(e){this.key=e}}class bf{constructor(e){this.key=e}}class If{get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new uf,i=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const l=i.get(e),u=Gl(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ka()}};return n(e)-n(t)}(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const r=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==s.length||a?{snapshot:new hf(this.query,e.Qu,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=zu(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new bf(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new _f(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=zu();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return hf.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=zu(),this.mutatedKeys=zu(),this.Gu=Xl(e),this.Qu=new lf(this.Gu)}}class Ef{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Tf{constructor(e){this.key=e,this.nc=!1}}class kf{get isPrimaryClient(){return!0===this.dc}constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new Ru((e=>Hl(e)),$l),this.rc=new Map,this.oc=new Set,this.uc=new Nc(mc.comparator),this.cc=new Map,this.ac=new Wh,this.hc={},this.lc=new Map,this.fc=qh.vn(),this.onlineState="Unknown",this.dc=void 0}}async function Sf(e,t){const n=$f(e);let i,s;const r=n.ic.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const e=await dd(n.localStore,ql(t));n.isPrimaryClient&&Od(n.remoteStore,e);const r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await Lf(n,t,i,"current"===r,e.resumeToken)}return s}async function Lf(e,t,n,i,s){e._c=(t,n,i)=>async function(e,t,n,i){let s=t.view.Wu(n);s.$i&&(s=await pd(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Ff(e,t.targetId,o.Xu),o.snapshot}(e,t,n,i);const r=await pd(e.localStore,t,!0),o=new If(t,r.Hi),a=o.Wu(r.documents),c=Gu.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),l=o.applyChanges(a,e.isPrimaryClient,c);Ff(e,n,l.Xu);const u=new Ef(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function Cf(e,t){const n=Wa(e),i=n.ic.get(t),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter((e=>!$l(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await fd(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),xd(n.remoteStore,i.targetId),Pf(n,i.targetId)})).catch(Tc)):(Pf(n,i.targetId),await fd(n.localStore,i.targetId,!0))}async function Af(e,t){const n=Wa(e);try{const e=await function(e,t){const n=Wa(e),i=t.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const o=[];t.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,r.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);var u,h,d;t.targetMismatches.has(a)?l=l.withResumeToken(Fc.EMPTY_BYTE_STRING,hc.min()).withLastLimboFreeSnapshotVersion(hc.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),h=l,d=r,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,l))}));let a=Ou(),c=zu();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(ud(e,r,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!i.isEqual(hc.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return kc.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.cc.get(t);i&&(Ga(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.nc=!0:e.modifiedDocuments.size>0?Ga(i.nc):e.removedDocuments.size>0&&(Ga(i.nc),i.nc=!1))})),await Bf(n,e,t)}catch(e){await Tc(e)}}function Df(e,t,n){const i=Wa(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ic.forEach(((n,i)=>{const s=i.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Wa(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(i=!0)})),i&&yf(n)}(i.eventManager,t),e.length&&i.sc.Wo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Nf(e,t,n){const i=Wa(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.cc.get(t),r=s&&s.key;if(r){let e=new Nc(mc.comparator);e=e.insert(r,pl.newNoDocument(r,hc.min()));const n=zu().add(r),s=new Ku(hc.min(),new Map,new Oc(cc),e,n);await Af(i,s),i.uc=i.uc.remove(r),i.cc.delete(t),jf(i)}else await fd(i.localStore,t,!1).then((()=>Pf(i,t,n))).catch(Tc)}async function Rf(e,t){const n=Wa(e),i=t.batch.batchId;try{const e=await function(e,t){const n=Wa(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=kc.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);Ga(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=zu();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);xf(n,i,null),Of(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Bf(n,e)}catch(e){await Tc(e)}}async function Mf(e,t,n){const i=Wa(e);try{const e=await function(e,t){const n=Wa(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Ga(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);xf(i,t,n),Of(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Bf(i,e)}catch(e){await Tc(e)}}function Of(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function xf(e,t,n){const i=Wa(e);let s=i.hc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.hc[i.currentUser.toKey()]=s}}function Pf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.rc.get(t))e.ic.delete(i),n&&e.sc.wc(i,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Uf(e,t)}))}function Uf(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(xd(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),jf(e))}function Ff(e,t,n){for(const i of n)i instanceof _f?(e.ac.addReference(i.key,t),Vf(e,i)):i instanceof bf?(qa("SyncEngine","Document no longer in limbo: "+i.key),e.ac.removeReference(i.key,t),e.ac.containsKey(i.key)||Uf(e,i.key)):Ka()}function Vf(e,t){const n=t.key,i=n.path.canonicalString();e.uc.get(n)||e.oc.has(i)||(qa("SyncEngine","New document in limbo: "+n),e.oc.add(i),jf(e))}function jf(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new mc(fc.fromString(t)),i=e.fc.next();e.cc.set(i,new Tf(n)),e.uc=e.uc.insert(n,i),Od(e.remoteStore,new xh(ql(Pl(n.path)),i,2,Lc.at))}}async function Bf(e,t,n){const i=Wa(e),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((e,a)=>{o.push(i._c(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=sd.Ci(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.sc.Wo(s),await async function(e,t){const n=Wa(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>kc.forEach(t,(t=>kc.forEach(t.Si,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>kc.forEach(t.Di,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Sc(e))throw e;qa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ui.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(t,s)}}}(i.localStore,r))}async function qf(e,t){const n=Wa(e);if(!n.currentUser.isEqual(t)){qa("SyncEngine","User change. New user:",t.toKey());const e=await cd(n.localStore,t);n.currentUser=t,(i=n).lc.forEach((e=>{e.forEach((e=>{e.reject(new Qa(Xa.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.lc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Bf(n,e.ji)}var i}function zf(e,t){const n=Wa(e),i=n.cc.get(t);if(i&&i.nc)return zu().add(i.key);{let e=zu();const i=n.rc.get(t);if(!i)return e;for(const t of i){const i=n.ic.get(t);e=e.unionWith(i.view.ju)}return e}}function $f(e){const t=Wa(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Af.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Nf.bind(null,t),t.sc.Wo=mf.bind(null,t.eventManager),t.sc.wc=vf.bind(null,t.eventManager),t}function Hf(e){const t=Wa(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,t),t}class Kf{async initialize(e){this.It=Td(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return ad(this.persistence,new rd,e.initialUser,this.It)}yc(e){return new ed(nd.Bs,this.It)}gc(e){return new vd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Gf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Df(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=qf.bind(null,this.syncEngine),await sf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ff}createDatastore(e){const t=Td(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Id(i));var i,s,r;return s=e.authCredentials,r=e.appCheckCredentials,new Ad(s,r,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Df(this.syncEngine,e,0),r=wd.C()?new wd:new yd,new Nd(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new kf(e,t,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Wa(e);qa("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Md(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(e,t,n){if(!n)throw new Qa(Xa.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Xf(e){if(!mc.isDocumentKey(e))throw new Qa(Xa.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ka()}function Yf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Qa(Xa.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qf(e);throw new Qa(Xa.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jf=new Map;class Zf{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Qa(Xa.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Qa(Xa.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Qa(Xa.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{get app(){if(!this._app)throw new Qa(Xa.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Qa(Xa.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Za;switch(e.type){case"gapi":const t=e.client;return new ic(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Qa(Xa.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Jf.get(e);t&&(qa("ComponentProvider","Removing Datastore"),Jf.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1}}function tp(e,t,n,i={}){var s;const r=(e=Yf(e,ep))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&$a("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Fa.MOCK_USER;else{t=x(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Qa(Xa.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Fa(r)}e._authCredentials=new ec(new Ja(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sp(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new np(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class ip{withConverter(e){return new ip(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class sp extends ip{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new np(this.firestore,null,new mc(e))}withConverter(e){return new sp(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Pl(n)),this._path=n,this.type="collection"}}function rp(e,t,...n){if(e=W(e),1===arguments.length&&(t=ac.R()),Wf("doc","path",t),e instanceof ep){const i=fc.fromString(t,...n);return Xf(i),new np(e,null,new mc(i))}{if(!(e instanceof np||e instanceof sp))throw new Qa(Xa.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(fc.fromString(t,...n));return Xf(i),new np(e.firestore,e instanceof sp?e.converter:null,new mc(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class op{next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):za("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ap{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qa(Xa.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ya;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=cf(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Fa.UNAUTHENTICATED,this.clientId=ac.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{qa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(qa("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function cp(e,t){e.asyncQueue.verifyOperationInProgress(),qa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await cd(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function lp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await up(e);qa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>nf(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>nf(t.remoteStore,n))),e.onlineComponents=t}async function up(e){return e.offlineComponents||(qa("FirestoreClient","Using default OfflineComponentProvider"),await cp(e,new Kf)),e.offlineComponents}async function hp(e){return e.onlineComponents||(qa("FirestoreClient","Using default OnlineComponentProvider"),await lp(e,new Gf)),e.onlineComponents}function dp(e){return hp(e).then((e=>e.syncEngine))}async function fp(e){const t=await hp(e),n=t.eventManager;return n.onListen=Sf.bind(null,t.syncEngine),n.onUnlisten=Cf.bind(null,t.syncEngine),n}function pp(e,t,n={}){const i=new Ya;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new op({next:r=>{t.enqueueAndForget((()=>gf(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Qa(Xa.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Qa(Xa.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new wf(Pl(n.path),r,{includeMetadataChanges:!0,Nu:!0});return pf(e,o)}(await fp(e),e.asyncQueue,t,n,i))),i.promise}class gp{get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=Ed();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new Ya;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Sc(e))throw e;qa("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;throw za("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=af.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(i),i}zc(){this.Kc&&Ka()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new kd(this,"async_queue_retry"),this.Wc=()=>{const e=Ed();e&&qa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Ed();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}}function mp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class vp extends ep{_terminate(){return this._firestoreClient||wp(this),this._firestoreClient.terminate()}constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new gp,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function yp(e){return e._firestoreClient||wp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wp(e){var t;const n=e._freezeSettings(),i=(s=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Kc(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;e._firestoreClient=new ap(e._authCredentials,e._appCheckCredentials,e._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _p{static fromBase64String(e){try{return new _p(Fc.fromBase64String(e))}catch(e){throw new Qa(Xa.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new _p(Fc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Qa(Xa.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gc(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return cc(this._lat,e._lat)||cc(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Qa(Xa.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Qa(Xa.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=/^__.*__$/;class kp{toMutation(e,t){return null!==this.fieldMask?new bu(e,this.data,this.fieldMask,t,this.fieldTransforms):new _u(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class Sp{toMutation(e,t){return new bu(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function Lp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ka()}}class Cp{get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.ua(e),i}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.ia({path:n,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return qp(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Lp(this.sa)&&Tp.test(e))throw this.ha('Document fields cannot begin and end with "__"')}constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Ap{da(e,t,n,i=!1){return new Cp({sa:e,methodName:t,fa:n,path:gc.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Td(e)}}function Dp(e){const t=e._freezeSettings(),n=Td(e._databaseId);return new Ap(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Np(e,t,n,i,s,r={}){const o=e.da(r.merge||r.mergeFields?2:0,t,n,s);Fp("Data must be an object, but it was:",o,i);const a=Pp(i,o);let c,l;if(r.merge)c=new Pc(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Vp(t,i,n);if(!o.contains(s))throw new Qa(Xa.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);zp(e,s)||e.push(s)}c=new Pc(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new kp(new dl(a),c,l)}class Rp extends Ip{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rp}}function Mp(e,t,n,i){const s=e.da(1,t,n);Fp("Data must be an object, but it was:",s,i);const r=[],o=dl.empty();Ac(i,((e,i)=>{const a=Bp(t,e,n);i=W(i);const c=s.ca(a);if(i instanceof Rp)r.push(a);else{const e=xp(i,c);null!=e&&(r.push(a),o.set(a,e))}}));const a=new Pc(r);return new Sp(o,a,s.fieldTransforms)}function Op(e,t,n,i,s,r){const o=e.da(1,t,n),a=[Vp(t,i,n)],c=[s];if(r.length%2!=0)throw new Qa(Xa.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<r.length;e+=2)a.push(Vp(t,r[e])),c.push(r[e+1]);const l=[],u=dl.empty();for(let e=a.length-1;e>=0;--e)if(!zp(l,a[e])){const t=a[e];let n=c[e];n=W(n);const i=o.ca(t);if(n instanceof Rp)l.push(t);else{const e=xp(n,i);null!=e&&(l.push(t),u.set(t,e))}}const h=new Pc(l);return new Sp(u,h,o.fieldTransforms)}function xp(e,t){if(Up(e=W(e)))return Fp("Unsupported field value:",t,e),Pp(e,t);if(e instanceof Ip)return function(e,t){if(!Lp(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=xp(s,t.aa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=W(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zl(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=uc.fromDate(e);return{timestampValue:sh(t.It,n)}}if(e instanceof uc){const n=new uc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:sh(t.It,n)}}if(e instanceof Ep)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _p)return{bytesValue:rh(t.It,e._byteString)};if(e instanceof np){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ch(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Qf(e)}`)}(e,t)}function Pp(e,t){const n={};return Dc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ac(e,((e,i)=>{const s=xp(i,t.ra(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Up(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof uc||e instanceof Ep||e instanceof _p||e instanceof np||e instanceof Ip)}function Fp(e,t,n){if(!Up(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Qf(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}var i}function Vp(e,t,n){if((t=W(t))instanceof bp)return t._internalPath;if("string"==typeof t)return Bp(e,t);throw qp("Field path arguments must be of type string or ",e,!1,void 0,n)}const jp=new RegExp("[~\\*/\\[\\]]");function Bp(e,t,n){if(t.search(jp)>=0)throw qp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bp(...t.split("."))._internalPath}catch(i){throw qp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qp(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Qa(Xa.INVALID_ARGUMENT,a+e+c)}function zp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{get id(){return this._key.path.lastSegment()}get ref(){return new np(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}}class Hp extends $p{data(){return super.data()}}function Kp(e,t){return"string"==typeof t?Bp(e,t):t instanceof bp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Qa(Xa.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wp{convertValue(e,t="none"){switch(Jc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qc(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ka()}}convertObject(e,t){const n={};return Ac(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Ep(Bc(e.latitude),Bc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=$c(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Hc(e));default:return null}}convertTimestamp(e){const t=jc(e);return new uc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fc.fromString(e);Ga(Ch(n));const i=new Gc(n.get(1),n.get(3)),s=new mc(n.popFirst(5));return i.isEqual(t)||za(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qp{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class Yp extends $p{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Kp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}}class Jp extends Yp{data(e={}){return super.data(e)}}class Zp{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Jp(this._firestore,this._userDataWriter,n.key,n,new Qp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Qa(Xa.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Jp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Qp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Jp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Qp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:eg(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Qp(i.hasPendingWrites,i.fromCache),this.query=n}}function eg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ka()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tg(e){e=Yf(e,np);const t=Yf(e.firestore,vp);return pp(yp(t),e._key).then((n=>ag(t,e,n)))}class ng extends Wp{convertBytes(e){return new _p(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new np(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function ig(e,t,n){e=Yf(e,np);const i=Yf(e.firestore,vp),s=Xp(e.converter,t,n);return og(i,[Np(Dp(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,du.none())])}function sg(e,t,n,...i){e=Yf(e,np);const s=Yf(e.firestore,vp),r=Dp(s);let o;return o="string"==typeof(t=W(t))||t instanceof bp?Op(r,"updateDoc",e._key,t,n,i):Mp(r,"updateDoc",e._key,t),og(s,[o.toMutation(e._key,du.exists(!0))])}function rg(e,...t){var n,i,s;e=W(e);let r={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||mp(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(mp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,l,u;if(e instanceof np)l=Yf(e.firestore,vp),u=Pl(e._key.path),c={next:n=>{t[o]&&t[o](ag(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Yf(e,ip);l=Yf(n.firestore,vp),u=n._query;const i=new ng(l);c={next:e=>{t[o]&&t[o](new Zp(l,i,n,e))},error:t[o+1],complete:t[o+2]},Gp(e._query)}return function(e,t,n,i){const s=new op(i),r=new wf(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>pf(await fp(e),r))),()=>{s.bc(),e.asyncQueue.enqueueAndForget((async()=>gf(await fp(e),r)))}}(yp(l),u,a,c)}function og(e,t){return function(e,t){const n=new Ya;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Hf(e);try{const e=await function(e,t){const n=Wa(e),i=uc.now(),s=t.reduce(((e,t)=>e.add(t.key)),zu());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ou(),c=zu();return n.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=yu(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new bu(e.key,t,fl(t.value.mapValue),du.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Uu(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.hc[e.currentUser.toKey()];i||(i=new Nc(cc)),i=i.insert(t,n),e.hc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Bf(i,e.changes),await Gd(i.remoteStore)}catch(e){const t=cf(e,"Failed to persist write");n.reject(t)}}(await dp(e),t,n))),n.promise}(yp(e),t)}function ag(e,t,n){const i=n.docs.get(t._key),s=new ng(e);return new Yp(e,s,t._key,i,new Qp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){Va="9.13.0",Ae(new X("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new vp(new tc(e.getProvider("auth-internal")),new rc(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Qa(Xa.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gc(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),xe("@firebase/firestore","3.7.2",e),xe("@firebase/firestore","3.7.2","esm2017")}();const cg={apiKey:"AIzaSyChIA2OZ4E0UkJlyXWIRNMESxHZl6bZW8A",authDomain:"goit-js-teamproject-filmoteka.firebaseapp.com",projectId:"goit-js-teamproject-filmoteka",storageBucket:"goit-js-teamproject-filmoteka.appspot.com",databaseURL:"https://goit-js-teamproject-filmoteka-default-rtdb.europe-west1.firebaseio.app",messagingSenderId:"52080437719",appId:"1:52080437719:web:4ce162519b5bdd8c51c392"};var lg=r("g8j98"),ug=r("h6eer");function hg(e,t){e.textContent=t,e.classList.add("show"),setTimeout((()=>{e.textContent="",e.classList.remove("show")}),5e3)}function dg(e){e.forEach((e=>{e.style.display="flex"}))}function fg(e){e.forEach((e=>{e.style.display="none"}))}function pg(e,t,n){e.classList[t](n)}var gg=r("7rYDH"),mg=r("9lWur"),vg=r("bTcpz"),yg=(lg=r("g8j98"),r("37v9V"));yg=r("37v9V");const wg={onShow:function(){const e=document.querySelector(".modal-movie"),t=e.querySelector('[data-list="watched"]'),n=e.querySelector('[data-list="queue"]'),i=e.querySelector(".buttons-list__film-modal"),s=e.querySelector(".modal-movie__notify"),r=t.closest("[data-id]").dataset.id,o=document.querySelector(".movie-poop");o&&o.addEventListener("click",(async()=>{const e=document.querySelector(".poop-close");await(0,yg.searchTrailer)(r).then((e=>{document.querySelector(".backdrop").insertAdjacentHTML("beforeend",e)})),e.style.display="block";const t=document.querySelector(".backdrop-iframe");t.addEventListener("click",(n=>{n.target===t&&(t.remove(),e.remove())}))}));(async function(e){if(!(0,lg.loadDataFromLocalSt)("userUID"))return void(i.style.display="flex");const s="UA"===(0,lg.loadDataFromLocalSt)("language"),r=await ym("watched"),o=await ym("queue");Object.keys(r).includes(String(e))&&(pg(t,"add","button__header--active"),t.textContent=s?"У переглянутих":"in watched list"),Object.keys(o).includes(String(e))&&(pg(n,"add","button__header--active"),n.textContent=s?"У черзі":"in queue list"),i.style.display="flex"})(r),t.addEventListener("click",(async function(e){const t="UA"===(0,lg.loadDataFromLocalSt)("language");(0,lg.loadDataFromLocalSt)("userUID")?e.target.classList.value.includes("button__header--active")?(pg(e.target,"remove","button__header--active"),e.target.textContent=t?"У переглянуті":"add to watched",vm(r,"watched"),hg(s,t?"Фільм видалено зі списку переглядів!":"The movie has been removed from your Watched list!")):(pg(e.target,"add","button__header--active"),e.target.textContent=t?"У переглянутих":"in watched list",wm(r,e.target.dataset.list),hg(s,t?"Фільм додано до вашого списку перегляду!":"The movie has been added to your watch list!")):hg(s,t?"Будь ласка, зареєструйтесь або увійдіть у свій обліковий запис, щоб мати можливість додавати фільми до списків відтворення.":"Please register or log in to your account to be able to add movies to playlists.")})),n.addEventListener("click",(function(e){const t="UA"===(0,lg.loadDataFromLocalSt)("language");(0,lg.loadDataFromLocalSt)("userUID")?e.target.classList.value.includes("button__header--active")?(pg(e.target,"remove","button__header--active"),e.target.textContent=t?"У чергу":"add to queue",vm(r,"queue"),hg(s,t?"Фільм видалено з вашого списку черги!":"The movie has been removed from your Queue list!")):(pg(e.target,"add","button__header--active"),e.target.textContent=t?"У черзі":"in queue list",wm(r,e.target.dataset.list),hg(s,t?"Фільм додано до списку черги!":"The movie has been added to your Queue list!")):hg(s,t?"Будь ласка, зареєструйтесь або увійдіть у свій обліковий запис, щоб мати можливість додавати фільми до списків відтворення.":"Please register or log in to your account to be able to add movies to playlists.")}))}},_g=new(0,mg.Modal)(wg),bg=new(0,gg.API);async function Ig(e){const t=e.target.closest(".movie-card");if(!t)return;const n=await bg.getSearchMoviesByID(t.id),i=await(0,vg.getModalMarkup)(n);_g.open(i)}gg=r("7rYDH");var Eg=r("6DImk");const Tg=document.querySelector(".pagination-list");function kg(){return{prevBtn:Tg.querySelector(".btn.prev"),numberedBtns:Tg.querySelectorAll(".numb"),nextBtn:Tg.querySelector(".btn.next")}}function Sg(e,t){if(e<2)return"<li></li>";let n,i="",s=0,r=t,o=r-2,a=r+2;for(r>1&&(i+='<li class="btn prev")"><button>\n    <svg class="pag-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 8H3.33325" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n    </button></li>'),r>3&&e>5&&(i+='<li class="first numb" data-num="1" ><button>1</button></li>',r>4&&e>5&&(i+='<li class="dots"><span>...</span></li>')),r===e&&o-2>0?o-=2:r===e-1&&o-1>0&&(o-=1),1===r?(a+=2,o=0):2===r&&(a+=1),s=o;s<=a;s++)s>e||(0===s&&(s+=1),n=r===s?"active":"",i+=`<li class="numb ${n}" data-num=${s} ><button>${s}</button></li>`);return r<e-2&&e>5&&(r<e-3&&e>5&&(i+='<li class="dots"><button>...</button></li>'),i+=`<li class="last numb" data-num=${e} ><button>${e}</button></li>`),r<e&&(i+='<li class="btn next"><button>\n    <svg class="pag-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3.33341 8H12.6667" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" style="stroke:var(--color, black)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n    </button></li>'),i}function Lg(){const{height:e}=document.querySelector(".header").getBoundingClientRect();scrollTo(0,e)}let Cg={},Ag=()=>{};function Dg(e,t,n){Ag=t,Cg=n,Tg.innerHTML=Sg(e,Cg.pageToFetch);!function({prevBtn:e,numberedBtns:t,nextBtn:n}){e&&e.addEventListener("click",Ng);n&&n.addEventListener("click",Rg);t.forEach((e=>e.addEventListener("click",Mg)))}(kg())}function Ng(e){Cg.decrementPage(),Ag(),Lg()}async function Rg(e){Cg.incrementPage(),Ag(),Lg()}function Mg(e){Cg.pageToFetch=Number(e.target.dataset.num),Ag(),Lg()}let Og=()=>{};function xg(e){Og=e}var Pg=r("gUo8S");lg=r("g8j98"),ug=r("h6eer"),vg=r("bTcpz");async function Ug(){const e="UA"===(0,lg.loadDataFromLocalSt)("language"),t=`<div class="js-random-card">\n  \n<div class="js-random-card__wrapper">\n<div class="movie-card__info">\n<p class="movie-card__info-wrap">${e?"Отримай рандомний фільм!":"Get a random movie!"}</p>\n<p  class="movie-card__name">${e?"Тисни на картку!":"Click on the card!"}</p></div>\n${Pg.imgForRandom}</div>\n<div class="movie-card__info">\n<p  class="movie-card__name">${e?"Тисни на картку!":"Click on the card!"}</p>\n<p class="movie-card__info-wrap">${e?"Отримай рандомний фільм!":"Get a random movie!"}</p>\n  </div>\n</div>`;ug.moviesList.insertAdjacentHTML("beforeend",t);document.querySelector(".js-random-card").addEventListener("click",Fg)}async function Fg(){const e=Vg(),t=(await jg(`https://api.themoviedb.org/3/movie/now_playing?api_key=9cca312caffd11f4ae9f11244d585025&page=${Vg()}`)).results.map((e=>e.id));let n="";n="UA"===(0,lg.loadDataFromLocalSt)("language")?"uk-UK":"en-US";const i=t[e],s=await jg(`https://api.themoviedb.org/3/movie/${i}?api_key=9cca312caffd11f4ae9f11244d585025&language=${n}`),r=await(0,vg.getModalMarkup)(s);_g.open(r)}function Vg(){return Math.floor(20*Math.random())+1}async function jg(e){return await fetch(e).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>{console.log("error",e)}))}const Bg=new(0,gg.API),qg=document.querySelector(".movies-grid__list");async function zg(){const e=await async function(){try{return await Bg.getTrendingMovies("day")}catch(e){console.log(e.message)}}(),t=e.results.map((e=>(0,Eg.createMovieCardMarkup)(e))),n=(await Promise.all(t)).join("");qg.innerHTML=n,xg(zg),Dg(e.total_pages,zg,Bg),Ug()}qg.addEventListener("click",Ig);lg=r("g8j98");const $g=1280,Hg=768,Kg=9,Gg=8,Wg=4,Xg={start:0,end:null,count:null,page:1};let Qg=()=>{};async function Yg(e,t){t&&(Qg=t);const n=Math.ceil(e.length/Xg.count),i=e.slice(Xg.start,Xg.end);return function(e){Tg.innerHTML=Sg(e,Xg.page);!function({prevBtn:e,numberedBtns:t,nextBtn:n}){e&&e.addEventListener("click",Zg);n&&n.addEventListener("click",tm);t.forEach((e=>e.addEventListener("click",nm)))}(kg())}(n),i}function Jg(){Xg.start=0,Xg.page=1,function(){const e=window.screen.width;e>=$g?Xg.count=Xg.end=Kg:e>=Hg&&e<=$g?Xg.count=Xg.end=Gg:e<=Hg&&(Xg.count=Xg.end=Wg)}()}function Zg(e){Lg(),em()}function em(){Xg.page-=1,im(),Qg()}function tm(e){Lg(),Xg.page+=1,im(),Qg()}function nm(e){Lg(),Xg.page=Number(e.target.dataset.num),im(),Qg()}function im(){const e=Xg.page-1;Xg.start=e*Xg.count,Xg.end=Xg.start+Xg.count}Jg();Eg=r("6DImk"),Pg=r("gUo8S");var sm=function(e){var t,n=Object.prototype,i=n.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),a=new A(i||[]);return s(o,"_invoke",{value:k(e,n,a)}),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="executing",p="completed",g={};function m(){}function v(){}function y(){}var w={};l(w,o,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(D([])));b&&b!==n&&i.call(b,o)&&(w=b);var I=y.prototype=m.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(s,r,o,a){var c=h(e[s],e,r);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&i.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,a)}))}a(c.arg)}var r;s(this,"_invoke",{value:function(e,i){function s(){return new t((function(t,s){n(e,i,t,s)}))}return r=r?r.then(s,s):s()}})}function k(e,t,n){var i=d;return function(s,r){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===s)throw r;return N()}for(n.method=s,n.arg=r;;){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=h(e,t,n);if("normal"===c.type){if(i=n.done?p:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function S(e,n){var i=n.method,s=e.iterator[i];if(s===t)return n.delegate=null,"throw"===i&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var r=h(s,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,g;var o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function D(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,r=function n(){for(;++s<e.length;)if(i.call(e,s))return n.value=e[s],n.done=!1,n;return n.value=t,n.done=!0,n};return r.next=r}}return{next:N}}function N(){return{value:t,done:!0}}return v.prototype=y,s(I,"constructor",{value:y,configurable:!0}),s(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},E(T.prototype),l(T.prototype,a,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,i,s,r){void 0===r&&(r=Promise);var o=new T(u(t,n,i,s),r);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(I),l(I,c,"Generator"),l(I,o,(function(){return this})),l(I,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var i in t)n.push(i);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},e.values=D,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function s(i,s){return a.type="throw",a.arg=e,n.next=i,s&&(n.method="next",n.arg=t),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&i.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=e,o.arg=t,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var s=i.arg;C(n)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:D(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=sm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=sm:Function("r","regeneratorRuntime = r")(sm)}Pg=r("gUo8S");function rm(e){e&&(e.preventDefault(),Jg()),pg(ug.watchedBtn,"add","button__header--active"),pg(ug.queueBtn,"remove","button__header--active"),om(),(0,lg.saveDataToLocalSt)("film-list","watched"),mm("watched")}
//!----------------| for pagination |------------------------
async function om(){lm("watched",om)}async function am(){lm("queue",am)}async function cm(){lm("watched",cm)}async function lm(e,t){const n=await ym(e),i=Object.keys(n).slice(1,n.length),s=await Yg(i,t);xg(rm),async function(e){const t=e.map((async e=>await pm(e))),n=await Promise.all(t),i=await n.map((async e=>await(0,Eg.createMovieCardMarkup)(e))),s=(await Promise.all(i)).join("");if(!s||s.length<1){const e="UA"===(0,lg.loadDataFromLocalSt)("language")?"Наразі Ваша бібліотека порожня!":"Your library is currently empty!";return void(ug.moviesList.innerHTML=await(`<div class="empty-lib"><p>${e}</p>\n      ${Pg.emptyLib}\n    </div>`))}ug.moviesList.innerHTML=await s}
//!----------------| for pagination |------------------------
(s)}async function um(e){const t=await ym(e),n=Object.keys(t).slice(1,t.length),i=await Yg(n);if(i.length<1)return void em();const s=i.map((async e=>await pm(e))),r=await Promise.all(s),o=await r.map((async e=>await(0,Eg.createMovieCardMarkup)(e))),a=(await Promise.all(o)).join("");ug.moviesList.innerHTML=await a}function hm(){pg(ug.libraryLink,"add","active"),pg(ug.homeLink,"remove","active"),pg(ug.watchedBtn,"add","button__header--active"),pg(ug.queueBtn,"remove","button__header--active"),fg(ug.homePage),dg(ug.libraryPage),um("watched")}function dm(e){e.preventDefault(),ug.header.classList.contains("header__library")&&ug.header.classList.remove("header__library"),ug.header.classList.add("header__home");const t=window.window.innerWidth;t>767&&(ug.slider.style.display="block"),console.log("viewportWidth",t),(0,lg.saveDataToLocalSt)("page","home"),pg(ug.homeLink,"add","active"),pg(ug.libraryLink,"remove","active"),fg(ug.libraryPage),dg(ug.homePage),Bg.pageToFetch=1,zg()}function fm(){pg(ug.homeLink,"add","active"),pg(ug.libraryLink,"remove","active"),fg(ug.libraryPage),dg(ug.homePage),zg()}async function pm(e){try{return await bg.getSearchMoviesByID(e)}catch(e){console.log(e.message)}}ug.libraryLink.addEventListener("click",(async function(e){e&&(e.preventDefault(),Jg());ug.header.classList.contains("header__home")&&ug.header.classList.remove("header__home");ug.header.classList.add("header__library"),ug.slider.style.display="none",hm(),cm(),(0,lg.saveDataToLocalSt)("page","library"),(0,lg.saveDataToLocalSt)("film-list","watched")})),ug.homeLink.addEventListener("click",dm),ug.logo.addEventListener("click",dm),ug.watchedBtn.addEventListener("click",rm),ug.queueBtn.addEventListener("click",(function(e){e&&(e.preventDefault(),Jg());pg(ug.queueBtn,"add","button__header--active"),pg(ug.watchedBtn,"remove","button__header--active"),am(),(0,lg.saveDataToLocalSt)("film-list","queue"),mm("queue")}));"home"===(0,lg.loadDataFromLocalSt)("page")?(ug.header.classList.contains("header__library")&&ug.header.classList.remove("header__library"),ug.header.classList.add("header__home")):(ug.header.classList.contains("header__home")&&ug.header.classList.remove("header__home"),ug.header.classList.add("header__library"));const gm=function(e,t){const n="string"==typeof e?e:t||"(default)",i=De("object"==typeof e?e:Oe(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=R("firestore");e&&tp(i,...e)}return i}(Me(cg));function mm(e){rg(rp(gm,(0,lg.loadDataFromLocalSt)("userUID"),e),(e=>{"library"===(0,lg.loadDataFromLocalSt)("page")&&um((0,lg.loadDataFromLocalSt)("film-list"))}))}async function vm(e,t){try{await sg(rp(gm,(0,lg.loadDataFromLocalSt)("userUID"),t),{[Number(e)]:new Rp("deleteField")})}catch(e){console.log(e.message)}}async function ym(e){try{const t=await tg(rp(gm,(0,lg.loadDataFromLocalSt)("userUID"),e));return t.exists()?t.data():void console.log("No such document!")}catch(e){console.log(e.message)}}async function wm(e,t){try{await sg(rp(gm,(0,lg.loadDataFromLocalSt)("userUID"),t),{[Number(e)]:[Date.now().toString()]})}catch(e){console.log(e.message)}}async function _m(e,t){try{await ig(rp(gm,e,t),{1:1})}catch(e){console.log(e.message)}}lg=r("g8j98"),ug=r("h6eer"),mg=r("9lWur");const bm=function(e=Oe()){const t=De(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=De(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(j(n.getOptions(),null!=t?t:{}))return e;Ye(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Di,persistence:[Hn,Nn,Mn]}),i=M("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ri)return;const i=null==t?void 0:t.token;Mi!==i&&(Mi=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){W(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){W(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=N("auth");return r&&Zt(n,`http://${r}`),n}(Me(cg));var Im,Em,Tm;Im=e=>{e?("library"===(0,lg.loadDataFromLocalSt)("page")?hm():fm(),dg(ug.loginLinks),fg(ug.logoutLinks),pg(ug.siteNav,"add","visible"),ug.greeting.querySelector(".user-name").textContent=`${e.displayName}`,ug.greeting.style.display="block"):(fm(),(0,lg.saveDataToLocalSt)("page","home"),dg(ug.logoutLinks),fg(ug.loginLinks),pg(ug.homeLink,"add","active"),pg(ug.siteNav,"add","visible"),ug.greeting.querySelector(".user-name").textContent="",ug.greeting.style.display="none")},W(bm).onAuthStateChanged(Im,Em,Tm);const km={onShow:function(){const e=document.querySelector(".modal"),t=e.querySelector(".form__signup"),n=e.querySelector(".form__login"),i=e.querySelector("#signup"),s=e.querySelector("#login"),r=e.querySelectorAll(".auth-providers__link--google-login"),o=e.querySelectorAll(".auth-providers__link--facebook-login");async function a(e){e.preventDefault();const t=new pn;try{const e=ii(bm,t),n=e.user;pn.credentialFromResult(e).accessToken;(0,lg.saveDataToLocalSt)("userUID",n.uid),ym().then((e=>{e||(_m(n.uid,"watched"),_m(n.uid,"queue"))})),Sm.close()}catch(e){e.code,e.message,e.customData.email,pn.credentialFromError(e)}}async function c(e){e.preventDefault();const t=new gn;try{const e=await ii(bm,t),n=(gn.credentialFromResult(e),e.user);(0,lg.saveDataToLocalSt)("userUID",n.uid),ym().then((e=>{e||(_m(n.uid,"watched"),_m(n.uid,"queue"))})),Sm.close()}catch(e){e.code,e.message,e.customData.email,gn.credentialFromError(e)}}pg(e,"add","modal__auth"),i.addEventListener("click",(function(t){t.preventDefault();const n=t.target.closest("form");n.classList.value.split(" ").find((t=>{"slide-up"!==t?pg(n,"add","slide-up"):(pg(s.closest("form"),"add","slide-up"),pg(e,"remove","modal__signup--up"),pg(n,"remove","slide-up"))}))})),s.addEventListener("click",(function(t){t.preventDefault();const n=t.target.closest("form");n.classList.value.split(" ").find((t=>{"slide-up"!==t?pg(n,"add","slide-up"):(pg(i.closest("form"),"add","slide-up"),pg(e,"add","modal__signup--up"),pg(n,"remove","slide-up"))}))})),t.addEventListener("submit",(async function(e){e.preventDefault();const n=e.currentTarget.email.value,i=e.currentTarget.password.value,s=e.currentTarget.userName.value,r=t.querySelector(".form__notification--error");if(n&&i&&s)if(i.length<6)hg(r,"The password must be at least six characters long.");else try{const e=(await async function(e,t,n){const i=Yt(e),s=await yn(i,{returnSecureToken:!0,email:t,password:n}),r=await wn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}(bm,n,i)).user;(0,lg.saveDataToLocalSt)("userUID",e.uid),ug.greeting.querySelector(".user-name").textContent=`${s}`,ug.greeting.style.display="block",t.reset(),_m(e.uid,"watched"),_m(e.uid,"queue"),e.displayName||await Ln(bm.currentUser,{displayName:s}),Sm.close()}catch(e){if("Firebase: Error (auth/email-already-in-use)."===e.message)return void hg(r,"A user with this email already exists. Sign in or try again.")}else hg(r,"All fields must be filled!")})),n.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.email.value,i=e.currentTarget.password.value,s=n.querySelector(".form__notification--error");if(t&&i)try{const e=(await function(e,t,n){return Sn(W(e),hn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(bm,t,i)).user;(0,lg.saveDataToLocalSt)("userUID",e.uid),ug.greeting.querySelector(".user-name").textContent=`${e.displayName}`,n.reset(),Sm.close()}catch(e){"Firebase: Error (auth/wrong-password)."===e.message&&hg(s,"Invalid password. Enter a valid password and try again."),"Firebase: Error (auth/user-not-found)."===e.message&&hg(s,"There is no registered user with this email. Please register or try again.")}else hg(s,"All fields must be filled!")})),r.forEach((e=>e.addEventListener("click",c))),o.forEach((e=>e.addEventListener("click",a)))}},Sm=new(0,mg.Modal)(km);ug.sigupLink.addEventListener("click",(function(){Sm.open('\n    <form class="form__signup">\n      <a href="#"\n        ><h2 class="form__title" id="signup"><span>or</span>Sign up</h2></a\n      >\n      <div class="inputs__wrapper">\n        <input\n          name="userName"\n          type="text"\n          class="form__input"\n          placeholder="Name"\n        />\n        <input\n          name="email"\n          type="email"\n          class="form__input"\n          placeholder="Email"\n        />\n        <input\n          name="password"\n          type="password"\n          class="form__input"\n          placeholder="Password"\n        />\n      </div>\n      <button type="submit" class="form__submit-btn">Sign up</button>\n      <div class="error__wrapper">\n        <p class="form__notification--error"></p>\n      </div>\n\n      <ul class="auth-providers auth-providers--signup">\n        <li class="auth-providers__item">\n          <a\n            class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--signup"\n            id="fb"\n            href="#"\n          >\n            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>\n          </a>\n        </li>\n        <li class="auth-providers__item">\n          <a\n            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"\n            id="google"\n            href="#"\n          >\n            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>\n          </a>\n        </li>\n      </ul>\n    </form>\n    <form class="form__login slide-up">\n      <div class="center">\n        <a href="#"\n          ><h2 class="form__title" id="login"><span>or</span>Log in</h2></a\n        >\n        <div class="inputs__wrapper">\n          <input\n            name="email"\n            type="email"\n            class="form__input"\n            placeholder="Email"\n          />\n          <input\n            name="password"\n            type="password"\n            class="form__input"\n            placeholder="Password"\n          />\n        </div>\n        <button type="submit" class="form__submit-btn">Log in</button>\n        <div class="error__wrapper">\n          <p class="form__notification--error">.</p>\n        </div>\n        <ul class="auth-providers auth-providers--login">\n          <li class="auth-providers__item">\n            <a\n              class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--login"\n              id="fb"\n              href="#"\n            >\n              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>\n              </svg>\n            </a>\n          </li>\n          <li class="auth-providers__item">\n            <a\n              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"\n              id="google"\n              href="#"\n            >\n              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </form>\n  ')})),ug.loginLink.addEventListener("click",(function(){Sm.open('\n    <form class="form__signup slide-up">\n      <a href="#"\n        ><h2 class="form__title" id="signup"><span>or</span>Sign up</h2></a\n      >\n      <div class="inputs__wrapper">\n        <input\n          name="userName"\n          type="text"\n          class="form__input"\n          placeholder="Name"\n        />\n        <input\n          name="email"\n          type="email"\n          class="form__input"\n          placeholder="Email"\n        />\n        <input\n          name="password"\n          type="password"\n          class="form__input"\n          placeholder="Password"\n        />\n      </div>\n      <button type="submit" class="form__submit-btn">Sign up</button>\n      <div class="error__wrapper">\n        <p class="form__notification--error"></p>\n      </div>\n\n      <ul class="auth-providers auth-providers--signup">\n        <li class="auth-providers__item">\n          <a\n            class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--signup"\n            id="fb"\n            href="#"\n          >\n            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>\n          </a>\n        </li>\n        <li class="auth-providers__item">\n          <a\n            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"\n            id="google"\n            href="#"\n          >\n            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>\n          </a>\n        </li>\n      </ul>\n    </form>\n    <form class="form__login">\n      <div class="center">\n        <a href="#"\n          ><h2 class="form__title" id="login"><span>or</span>Log in</h2></a\n        >\n        <div class="inputs__wrapper">\n          <input\n            name="email"\n            type="email"\n            class="form__input"\n            placeholder="Email"\n          />\n          <input\n            name="password"\n            type="password"\n            class="form__input"\n            placeholder="Password"\n          />\n        </div>\n        <button type="submit" class="form__submit-btn">Log in</button>\n        <div class="error__wrapper">\n          <p class="form__notification--error">.</p>\n        </div>\n        <ul class="auth-providers auth-providers--login">\n          <li class="auth-providers__item">\n            <a\n              class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--login"\n              id="fb"\n              href="#"\n            >\n              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>\n            </a>\n          </li>\n          <li class="auth-providers__item">\n            <a\n              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"\n              id="google"\n              href="#"\n            >\n              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </form>\n  ')})),ug.logoutLink.addEventListener("click",(async function(e){e.preventDefault(),fm(),(0,lg.removeDataFromLocalSt)("userUID"),await Cn(bm)})),window.onload=()=>{window.onscroll=function(e){let t=window.scrollY;t>300&&(ProgressBar(),scrollbarAnimation(),t=null)};const e=document.querySelector(".isShowBtn");window.onscroll=()=>{window.scrollY>300?e.classList.remove("isHiden"):e.classList.add("isHiden")},e.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}};let Lm=document.querySelector(".loader");window.addEventListener("load",(()=>{Lm.classList.add("hide"),setTimeout((()=>{Lm.remove()}),400)})),r("6DImk");gg=r("7rYDH"),Eg=r("6DImk"),lg=r("g8j98");const Cm=new(0,gg.API),Am={form:document.querySelector(".home__form"),moviesList:document.querySelector(".movies-grid__list"),notifyEl:document.querySelector(".form__error-notification--for-header")};async function Dm(){const e=await async function(){try{return await Cm.getMoviesByKeyWord()}catch(e){console.log(e.message)}}();if(!e||!e.results.length){const e="UA"===(0,lg.loadDataFromLocalSt)("language")?"Результат пошуку хибний. Введіть вірну назву фільму та повторіть спробу.":"Search result not successful. Enter the correct movie name and try again.";return zg(),void hg(Am.notifyEl,e)}const t=e.results.map((e=>(0,Eg.createMovieCardMarkup)(e))),n=(await Promise.all(t)).join("");Am.moviesList.innerHTML=n,xg(Dm),Dg(e.total_pages,Dm,Cm)}Am.moviesList.addEventListener("click",Ig),Am.form.addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.query.value;if(e.currentTarget.reset(),t===Cm.queryToFetch&&1===Cm.pageToFetch)return;Cm.queryToFetch=t,Cm.pageToFetch=1,Am.moviesList.innerHTML="",Dm()})),r("8ZhYW");lg=r("g8j98");const Nm={toggleLang:document.querySelector(".theme-switch__toggle")};!function(){const e=(0,lg.loadDataFromLocalSt)("theme");void 0!==e?"dark"===e?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme")):(document.body.classList.add("light-theme"),(0,lg.saveDataToLocalSt)("theme","light"))}(),Nm.toggleLang.addEventListener("change",(function(e){document.body.classList.contains("light-theme")?(document.body.classList.remove("light-theme"),document.body.classList.add("dark-theme"),(0,lg.saveDataToLocalSt)("theme","dark")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),(0,lg.saveDataToLocalSt)("theme","light"))}));lg=r("g8j98");var Rm=r("8ZhYW");const Mm={langSwitcher:document.querySelector(".language-switcher__checkbox")};let Om=document.querySelectorAll("[data-enlang]");function xm(e){"ua"===e?(document.body.classList.remove("ua"),document.body.classList.add("en")):(document.body.classList.remove("en"),document.body.classList.add("ua"))}function Pm(e){"UA"===e?(0,lg.saveDataToLocalSt)("language","EN"):(0,lg.saveDataToLocalSt)("language","UA")}function Um(e){"EN"===e?Om.forEach((e=>{e.textContent=e.dataset.ualang,e.hasAttribute("placeholder")&&(e.placeholder=e.dataset.ualang)})):Om.forEach((e=>{e.textContent=e.dataset.enlang,e.hasAttribute("placeholder")&&(e.placeholder=e.dataset.enlang)}))}!function(){const e=(0,lg.loadDataFromLocalSt)("language");void 0!==e?"EN"===e?(Um("UA"),document.body.classList.add("en")):(Um("EN"),document.body.classList.add("ua")):(Um("EN"),document.body.classList.add("ua"),(0,lg.saveDataToLocalSt)("language","UA"))}(),Mm.langSwitcher.addEventListener("change",(function(e){document.body.classList.contains("ua")?(Um("UA"),Pm("UA"),xm("ua")):(Um("EN"),Pm("EN"),xm("en"));(0,Rm.fetchGenres)(),Og()}));lg=r("g8j98");const Fm={language:{EN:"Switch to Ukrainian",UA:"Перейти на Англійську"},theme:{EN:{dark:"Switch to Light",light:"Switch to Dark"},UA:{dark:"Змінити тему на Cвітлу",light:"Змінити тему на Темну"}}};let Vm=document.createElement("div");Vm.className="tooltip",Vm.hidden=!0,document.body.append(Vm),document.addEventListener("mouseover",(function(e){let t=e.target.closest("[data-tooltip]");if(!t)return;let n=(0,lg.loadDataFromLocalSt)("theme"),i=(0,lg.loadDataFromLocalSt)("language");"language-switch"===t.dataset.tooltip&&(Vm.innerHTML=void 0!==i?Fm.language[i]:Fm.language.UA);"theme-switch"===t.dataset.tooltip&&(void 0!==n?Vm.innerHTML=Fm.theme[i][n]:("EN"===i&&(Vm.innerHTML=Fm.theme.EN.light),Vm.innerHTML=Fm.theme.UA.light));Vm.hidden=!1;let s,r,o=t.getBoundingClientRect();s=o.x+t.offsetWidth/2-Vm.offsetWidth/2,s<0&&(s=0);r=o.y-Vm.offsetHeight-5,r<0&&(r=o.y+t.offsetHeight+5);Vm.style.left=s+"px",Vm.style.top=r+"px"})),document.addEventListener("mouseout",(function(){Vm.hidden=!0}));document.querySelectorAll(".icon").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("open")}))}));const jm=document.querySelector(".nav-icon-mob");if(jm){const e=document.querySelector(".utils__wrapper");jm.addEventListener("click",(function(t){jm.classList.toggle("_active"),e.classList.toggle("_active")}))}var Bm=[{name:"Serhii Revva",nameUA:"Сергій Ревва",photo:"https://lh3.google.com/u/0/d/1be4MGnbFl4S29ZgkiDWlkwQ2CKi30Cfy=w1354-h948-iv1",position:"Team Lead",positionUA:"Керівник",git:"https://github.com/besha2vox"},{name:"Valeria Nikitiuk",nameUA:"Валерія Нікітюк ",photo:"https://lh3.google.com/u/0/d/14WpuDG-TiTtUYxSxEYh4XUIlaX0cezt1=w903-h948-iv1",position:"Scrum Master",positionUA:"Наглядач-мотиватор",git:"https://github.com/ValeriaNikitiuk"},{name:"Leonid Melnyk",nameUA:"Леонід Мельник ",photo:"https://lh3.google.com/u/0/d/1QNoeElHKYPAgrt0CIgZMJ2byQdXmqjHL=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/LM2030"},{name:"Nastya Belkina",nameUA:"Настя Бєлкіна",photo:"https://lh3.google.com/u/0/d/1bq65LCfPXOnt5GOPH09FVgKONUSSA31r=w1920-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/Belkina23"},{name:"Yuliia Gorokhova",nameUA:"Юлія Горохова",photo:"https://lh3.google.com/u/0/d/1KEbY47UZaqvWps6FPm6MiMlqu-kYgGxR=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/YuliiaGorokhova"},{name:"Oleksandr Romanchuk",nameUA:"Олександр Романчук",photo:"https://lh3.google.com/u/0/d/1Nd--AXOp0LBlm4j1tFG6bXMKWU84X8x7=w1920-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/OleksandrRomanchuk"},{name:"Hanna Kostiana",nameUA:"Ганна Костяна",photo:"https://lh3.google.com/u/0/d/1h10bsGscmJuYpnZIBAY1Gb9NOy1djyCg=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/AnnaKostyanaya"},{name:"Viktor Hanzenko",nameUA:"Віктор Ганзенко",photo:"https://lh3.google.com/u/0/d/12Zl7VMxmOxa1zp0UH5lgfzc0jRjwbxGV=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/HanzenkoViktor"},{name:"Tetiana Kuzma",nameUA:"Тетяна Кузьма",photo:"https://lh3.google.com/u/0/d/1bAS0uPBoKKS-oZMS4sgHlBTbXKq-Z9EW=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/tekuzm"},{name:"Nikita Reva",nameUA:"Нікіта Рева",photo:"https://lh3.google.com/u/0/d/14vwdl8nCFkFcR5I4Y2Hh778LdVIyw3q6=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"github.com/Nikita0708"},{name:"Andrii Ursolov",nameUA:"Андрій Урсолов",photo:"https://lh3.google.com/u/0/d/1wD85kdSqvgfIhfydU_a__judCeCW4f6k=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/andrewurs"},{name:"Vadym Surovytskyi",nameUA:"Вадим Суровицький",photo:"https://lh3.google.com/u/0/d/1if2ps3vZ3TP_Fkvs_LqaKDJb20frPlAm=w903-h948-iv1",position:"Developer",positionUA:"Роботяга",git:"https://github.com/xnskie"}];mg=r("9lWur"),lg=r("g8j98");const qm={onShow:function(){const e=document.querySelector(".modal");e.classList.add("modal__team"),e.classList.remove("modal")}},zm=new(0,mg.Modal)(qm),$m={teamBtns:document.querySelectorAll(".page-footer__action-btn")};const Hm=()=>Bm.map((({git:e,photo:t,nameUA:n,positionUA:i})=>` \n<li class="team-item"> \n      <img class="team-img" src="${t}" alt="${n}" width="100"> \n      <div class="team-desc-container">\n      <div class="team__member">\n      <a class="git-member" href="https://github.com/besha2vox/goit-js-teamproject-filmoteka" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>\n    \n    <p class="team-name">${n}</p> \n    </div> \n        \n        <p class="team-position">${i}</p> \n    </div> \n</li> `)).join(""),Km=e=>{let t="";const n=(0,lg.loadDataFromLocalSt)("language");t=void 0!==n?"EN"===n?`<div class="heading__wrapper"><a class="git-project" href="https://github.com/besha2vox/goit-js-teamproject-filmoteka" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">\n<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a><h2 class="typing-team">  Our  team  "IT  Kotiki"</h2></div> \n      <ul class="team-list">${Bm.map((({git:e,photo:t,name:n,position:i})=>` \n<li class="team-item"> \n      <img class="team-img" src="${t}" alt="${n}" width="100"> \n      <div class="team-desc-container"> \n      <div class="team__member">\n      <a class="git-member" href="https://github.com/besha2vox/goit-js-teamproject-filmoteka" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>\n    <p class="team-name">${n}</p>  \n    </div> \n        \n        <p class="team-position">${i}</p> \n    </div> \n</li> `)).join("")}</ul>`:`<div class="heading__wrapper"><a class="git-project" href="https://github.com/besha2vox/goit-js-teamproject-filmoteka" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">\n<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a><h2 class="typing-team"> Команда "IT Котики"</h2></div> \n      <ul class="team-list">${Hm()}</ul>`:`<div class="wrapper"><a class="git-project" href="https://github.com/besha2vox/goit-js-teamproject-filmoteka" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">\n<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a><h2 class="typing-team">Команда "IT Котики"</h2></div> \n        <ul class="team-list">${Hm()}</ul>`,zm.open(t)};$m.teamBtns.forEach((e=>e.addEventListener("click",Km))),r("37v9V"),r("5PF1K");
//# sourceMappingURL=index.65697327.js.map
