(() => {
  "use strict";
  const CFG = window.TIMELESS_CONFIG || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const money = n => `${Number(n || 0).toLocaleString("en-US")} ${CFG.CURRENCY || "EGP"}`;
  const STORAGE = { cart: "timeless_cart_v1", favorites: "timeless_favorites_v1" };
  const BUILTIN_PRODUCTS = [{"id":"watch-01","name":"The Meridian","slug":"the-meridian","description":"A clean, understated dress watch designed for everyday elegance.","priceEGP":1450,"category":"Classic","gender":"Men","style":"Dress","primaryColor":"Black","caseMaterial":"Stainless steel","strapMaterial":"Black leather","image":"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=85"],"isFeatured":true,"isNew":false,"isBestSeller":true,"stock":8,"dialColor":"Black"},{"id":"watch-02","name":"The Nocturne","slug":"the-nocturne","description":"A dark dial and streamlined profile bring a modern edge to a timeless silhouette.","priceEGP":1690,"category":"Minimalist","gender":"Men","style":"Minimal","primaryColor":"Black","caseMaterial":"Stainless steel","strapMaterial":"Black leather","image":"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=85"],"isFeatured":true,"isNew":true,"isBestSeller":false,"stock":6,"dialColor":"Black"},{"id":"watch-03","name":"The Atlantic","slug":"the-atlantic","description":"A navy-inspired dial gives this versatile watch a confident, contemporary feel.","priceEGP":1890,"category":"Modern","gender":"Men","style":"Casual","primaryColor":"Navy","caseMaterial":"Stainless steel","strapMaterial":"Silver metal bracelet","image":"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=85"],"isFeatured":true,"isNew":false,"isBestSeller":true,"stock":5,"dialColor":"Navy"},{"id":"watch-04","name":"The Ivory Edit","slug":"the-ivory-edit","description":"Soft tones and a slim profile for a quiet, considered look.","priceEGP":1250,"category":"Minimalist","gender":"Women","style":"Minimal","primaryColor":"Cream","caseMaterial":"Stainless steel","strapMaterial":"Cream leather","image":"https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=85"],"isFeatured":false,"isNew":true,"isBestSeller":false,"stock":7,"dialColor":"Cream"},{"id":"watch-05","name":"The Silverline","slug":"the-silverline","description":"A crisp silver bracelet paired with a versatile dark face.","priceEGP":1750,"category":"Classic","gender":"Men","style":"Dress","primaryColor":"Silver","caseMaterial":"Stainless steel","strapMaterial":"Silver metal bracelet","image":"https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1200&q=85"],"isFeatured":false,"isNew":true,"isBestSeller":true,"stock":9,"dialColor":"Black"},{"id":"watch-06","name":"The Petite Muse","slug":"the-petite-muse","description":"A delicate silhouette that feels equally at home with daily and evening looks.","priceEGP":1390,"category":"Elegant","gender":"Women","style":"Dress","primaryColor":"Silver","caseMaterial":"Stainless steel","strapMaterial":"Silver metal bracelet","image":"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=85"],"isFeatured":false,"isNew":true,"isBestSeller":false,"stock":4,"dialColor":"White"},{"id":"watch-07","name":"The Field Note","slug":"the-field-note","description":"A practical sport-inspired design with a relaxed everyday character.","priceEGP":1150,"category":"Sport","gender":"Men","style":"Sport","primaryColor":"Black","caseMaterial":"Resin and steel","strapMaterial":"Black silicone","image":"https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":false,"stock":10,"dialColor":"Black"},{"id":"watch-08","name":"The Blue Hour","slug":"the-blue-hour","description":"A blue face adds a subtle point of difference without sacrificing versatility.","priceEGP":1580,"category":"Modern","gender":"Men","style":"Casual","primaryColor":"Navy","caseMaterial":"Stainless steel","strapMaterial":"Blue silicone","image":"https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":true,"isBestSeller":true,"stock":5,"dialColor":"Navy"},{"id":"watch-09","name":"The Monochrome","slug":"the-monochrome","description":"A balanced monochrome design with clear, confident lines.","priceEGP":1320,"category":"Minimalist","gender":"Men","style":"Minimal","primaryColor":"Black","caseMaterial":"Stainless steel","strapMaterial":"Black mesh","image":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":true,"stock":7,"dialColor":"Black"},{"id":"watch-10","name":"The Sunday","slug":"the-sunday","description":"A warm cream dial and clean markers make this a relaxed classic.","priceEGP":1190,"category":"Classic","gender":"Women","style":"Dress","primaryColor":"Cream","caseMaterial":"Stainless steel","strapMaterial":"Brown leather","image":"https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":false,"stock":8,"dialColor":"Cream"},{"id":"watch-11","name":"The Studio","slug":"the-studio","description":"A pared-back silhouette for people who appreciate details over noise.","priceEGP":1490,"category":"Minimalist","gender":"Women","style":"Minimal","primaryColor":"Silver","caseMaterial":"Stainless steel","strapMaterial":"Silver metal bracelet","image":"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":true,"isBestSeller":false,"stock":6,"dialColor":"White"},{"id":"watch-12","name":"The Navigator","slug":"the-navigator","description":"A sporty everyday watch with a confident, functional presence.","priceEGP":1790,"category":"Sport","gender":"Men","style":"Sport","primaryColor":"Navy","caseMaterial":"Stainless steel","strapMaterial":"Navy silicone","image":"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":true,"stock":5,"dialColor":"Navy"},{"id":"watch-13","name":"The Crescent","slug":"the-crescent","description":"A refined smaller-case design with a silver finish and understated face.","priceEGP":1290,"category":"Elegant","gender":"Women","style":"Dress","primaryColor":"Silver","caseMaterial":"Stainless steel","strapMaterial":"Silver mesh","image":"https://images.unsplash.com/photo-1506193095-80bc749473f2?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1506193095-80bc749473f2?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":false,"stock":4,"dialColor":"White"},{"id":"watch-14","name":"The Afterdark","slug":"the-afterdark","description":"A black-on-black look with a contemporary, urban attitude.","priceEGP":1650,"category":"Modern","gender":"Men","style":"Casual","primaryColor":"Black","caseMaterial":"Stainless steel","strapMaterial":"Black silicone","image":"https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":false,"stock":8,"dialColor":"Black"},{"id":"watch-15","name":"The Sunday Silver","slug":"the-sunday-silver","description":"A versatile silver-tone bracelet with a light, uncluttered dial.","priceEGP":1550,"category":"Classic","gender":"Women","style":"Casual","primaryColor":"Silver","caseMaterial":"Stainless steel","strapMaterial":"Silver metal bracelet","image":"https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":true,"stock":6,"dialColor":"White"},{"id":"watch-16","name":"The Coastline","slug":"the-coastline","description":"A relaxed navy-and-silver combination made for everyday wear.","priceEGP":1390,"category":"Modern","gender":"Women","style":"Casual","primaryColor":"Navy","caseMaterial":"Stainless steel","strapMaterial":"Navy leather","image":"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=85","gallery":["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=85"],"isFeatured":false,"isNew":false,"isBestSeller":false,"stock":9,"dialColor":"Navy"}];
  const safeParse = (key, fallback) => { try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; } };
  let products = [], cart = safeParse(STORAGE.cart, []), favorites = safeParse(STORAGE.favorites, []);
  let quickProduct = null, quickQty = 1, lastFocused = null, menuOpen = false, toastTimer = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function save() { localStorage.setItem(STORAGE.cart, JSON.stringify(cart)); localStorage.setItem(STORAGE.favorites, JSON.stringify(favorites)); }
  function totalQty() { return cart.reduce((n, row) => n + row.qty, 0); }
  function cartTotal() { return cart.reduce((sum, row) => sum + (getProduct(row.id)?.priceEGP || 0) * row.qty, 0); }
  function getProduct(id) { return products.find(p => p.id === id); }
  function safeText(v) { return String(v ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
  function imageMarkup(p, extra = "") {
    const initials = safeText((p.name || "T").split(/\s+/).slice(-1)[0].slice(0,1).toUpperCase());
    return `<img class="${extra}" src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy" decoding="async" onerror="this.classList.add('image-failed');this.nextElementSibling.classList.add('visible')"><span class="image-fallback" aria-hidden="true">${initials}</span>`;
  }
  function card(p, opts = {}) {
    const isFav = favorites.includes(p.id);
    const classes = ["product-card", opts.featured ? "featured" : "", opts.dark ? "dark-card" : ""].filter(Boolean).join(" ");
    return `<article class="${classes}" data-product-id="${safeText(p.id)}">
      <div class="product-visual">${imageMarkup(p)}
        <button class="favorite-btn ${isFav ? "active" : ""}" data-action="favorite" data-id="${safeText(p.id)}" aria-label="${isFav ? "Remove" : "Add"} ${safeText(p.name)} ${isFav ? "from" : "to"} favorites" aria-pressed="${isFav}"><i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
        <div class="quick-overlay"><button class="mini-action" data-action="quick" data-id="${safeText(p.id)}">Quick view</button><button class="mini-action add-action" data-action="add" data-id="${safeText(p.id)}"><i class="fa-solid fa-plus"></i> Add to bag</button></div>
      </div>
      <div class="product-meta"><span class="product-kicker">${safeText(p.category)} / ${safeText(p.gender)}</span><div class="product-name-row"><h3 class="product-name">${safeText(p.name)}</h3><span class="product-price">${money(p.priceEGP)}</span></div>${opts.featured ? `<p class="product-description">${safeText(p.description)}</p>` : ""}</div>
    </article>`;
  }
  function renderCards(target, list, opts = {}) {
    const el = typeof target === "string" ? $(target) : target;
    if (!el) return;
    el.innerHTML = list.map(p => card(p, opts)).join("");
  }
  function updateCounts() {
    $("#cartCount").textContent = totalQty();
    $("#favoriteCount").textContent = favorites.length;
    $("#drawerCartCount").textContent = `(${totalQty()})`;
    $("#cartOpen").setAttribute("aria-label", `Open shopping bag, ${totalQty()} items`);
  }
  function updateBadge(el) { if (!el) return; el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); setTimeout(() => el.classList.remove("pop"), 450); }
  function toast(message, icon = "fa-check") {
    const region = $("#toastRegion"); if (!region) return;
    const el = document.createElement("div"); el.className = "toast"; el.innerHTML = `<i class="fa-solid ${icon}"></i><span>${safeText(message)}</span>`;
    region.append(el); setTimeout(() => { el.classList.add("hide"); setTimeout(() => el.remove(), 300); }, 2800);
  }
  function persistAndRender() { save(); updateCounts(); renderCart(); renderFavorites(); renderAllProductCards(); }
  function renderAllProductCards() {
    renderCards("#featuredGrid", CFG.FEATURED_PRODUCT_IDS.map(getProduct).filter(Boolean), {featured:true});
    renderCards("#newTrack", CFG.NEW_ARRIVAL_IDS.map(getProduct).filter(Boolean), {dark:true});
    renderCards("#bestTrack", CFG.BEST_SELLER_IDS.map(getProduct).filter(Boolean));
    renderCatalog();
  }
  function renderCatalog() {
    const query = ($("#searchInput")?.value || "").trim().toLowerCase();
    const gender = $("#genderFilter")?.value || "", category = $("#categoryFilter")?.value || "", dial = $("#dialFilter")?.value || "";
    const max = Number($("#maxPrice")?.value || 2000), sort = $("#sortFilter")?.value || "featured";
    let list = products.filter(p => {
      const hay = [p.name,p.category,p.style,p.description,p.gender,p.primaryColor,p.dialColor].join(" ").toLowerCase();
      return (!query || hay.includes(query)) && (!gender || p.gender === gender) && (!category || p.category === category) && (!dial || (p.dialColor || "").toLowerCase() === dial.toLowerCase()) && p.priceEGP <= max;
    });
    if (sort === "low") list.sort((a,b) => a.priceEGP-b.priceEGP);
    else if (sort === "high") list.sort((a,b) => b.priceEGP-a.priceEGP);
    else if (sort === "az") list.sort((a,b) => a.name.localeCompare(b.name));
    else list.sort((a,b) => Number(b.isFeatured)-Number(a.isFeatured));
    renderCards("#catalogGrid", list);
    $("#resultCount").textContent = `${list.length} ${list.length === 1 ? "watch" : "watches"}`;
    $("#emptyResults").hidden = list.length !== 0;
    $("#maxPriceLabel").textContent = money(max);
  }
  function populateCategories() {
    const select = $("#categoryFilter");
    [...new Set(products.map(p => p.category).filter(Boolean))].sort().forEach(c => {
      const opt = document.createElement("option"); opt.value = c; opt.textContent = c; select.append(opt);
    });
  }
  async function loadProducts() {
    let local = [];
    try {
      const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 5000);
      const response = await fetch(CFG.PRODUCT_CATALOG_URL || "data/products.json", {signal:controller.signal, cache:"no-cache"});
      clearTimeout(timeout);
      if (!response.ok) throw new Error(`Catalog HTTP ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data) || !data.length) throw new Error("Local catalog is empty or invalid");
      local = data.filter(p => p.id && p.name && Number.isFinite(Number(p.priceEGP)) && p.image).map(p => ({...p, priceEGP:Number(p.priceEGP), gallery:Array.isArray(p.gallery)?p.gallery:[p.image]}));
    } catch (err) {
      console.warn("TIMELESS: local JSON unavailable; using built-in fallback.", err);
      local = BUILTIN_PRODUCTS;
    }
    products = local;
    // Dials is an optional public reference catalogue, not a source of demo EGP prices or image rights.
    // Its image CDN must not be hotlinked. Local products therefore remain the shopping source of truth.
    if (CFG.USE_EXTERNAL_API && CFG.API_BASE_URL) {
      try {
        const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), CFG.API_TIMEOUT_MS || 4500);
        const response = await fetch(`${CFG.API_BASE_URL.replace(/\/$/,"")}/models?page=1&pageSize=8`, {signal:controller.signal, headers:{Accept:"application/json"}});
        clearTimeout(timeout);
        if (!response.ok) throw new Error(`Dials API HTTP ${response.status}`);
        const payload = await response.json();
        if (!Array.isArray(payload.data)) throw new Error("Unexpected Dials API response shape");
        console.info(`TIMELESS: Dials API reachable (${payload.data.length} model references). Local demo prices and licensed image sources remain in use.`);
      } catch (err) { console.info("TIMELESS: optional Dials API unavailable; local catalog remains active.", err.message); }
    }
    populateCategories(); renderAllProductCards(); updateCounts(); renderCart(); renderFavorites();
  }
  function setFavorite(id) {
    favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
    save(); updateCounts(); renderAllProductCards(); renderFavorites();
    toast(favorites.includes(id) ? "Saved to your favorites" : "Removed from favorites", favorites.includes(id) ? "fa-heart" : "fa-heart-crack");
  }
  function renderCart() {
    const host = $("#cartItems"), footer = $("#cartFooter");
    const valid = cart.filter(row => getProduct(row.id));
    if (!valid.length) {
      host.innerHTML = `<div class="empty-state"><i class="fa-solid fa-box-open"></i><h3>Your bag is waiting.</h3><p>Find a timepiece that feels like you.</p><button class="button button-primary" data-action="continue">Explore watches <i class="fa-solid fa-arrow-right"></i></button></div>`;
      footer.innerHTML = ""; return;
    }
    host.innerHTML = valid.map(row => { const p = getProduct(row.id); return `<div class="cart-line" data-line-id="${safeText(p.id)}"><img class="line-image" src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy" onerror="this.style.opacity='.2'"><div><h3 class="line-name">${safeText(p.name)}</h3><div class="line-price">${money(p.priceEGP)}</div><div class="line-controls"><button class="qty-button" data-action="qty" data-id="${safeText(p.id)}" data-delta="-1" aria-label="Decrease ${safeText(p.name)} quantity">−</button><span class="qty-number">${row.qty}</span><button class="qty-button" data-action="qty" data-id="${safeText(p.id)}" data-delta="1" aria-label="Increase ${safeText(p.name)} quantity">+</button></div></div><div class="cart-line-end"><span class="line-total">${money(p.priceEGP*row.qty)}</span><button class="remove-button" data-action="remove" data-id="${safeText(p.id)}">Remove</button></div></div>`; }).join("");
    footer.innerHTML = `<div class="subtotal-row"><span>Subtotal</span><span>${money(cartTotal())}</span></div><button class="button button-primary" data-action="checkout">Continue to demo checkout <i class="fa-solid fa-arrow-right"></i></button><button class="text-button" data-action="continue">Continue shopping</button><button class="text-button" data-action="clear">Clear bag</button>`;
  }
  function renderFavorites() {
    const host = $("#favoriteItems"); if (!host) return;
    const saved = favorites.map(getProduct).filter(Boolean);
    if (!saved.length) { host.innerHTML = `<div class="empty-state"><i class="fa-regular fa-heart"></i><h3>Keep what you love.</h3><p>Tap the heart on any watch and it will be saved here.</p><button class="button button-primary" data-action="continue">Explore watches <i class="fa-solid fa-arrow-right"></i></button></div>`; return; }
    host.innerHTML = saved.map(p => `<div class="favorite-line"><img class="line-image" src="${safeText(p.image)}" alt="${safeText(p.name)}" loading="lazy"><div><h3 class="line-name">${safeText(p.name)}</h3><div class="line-price">${money(p.priceEGP)}</div><div class="line-controls"><button class="remove-button" data-action="add" data-id="${safeText(p.id)}">Add to bag</button><button class="remove-button" data-action="quick" data-id="${safeText(p.id)}">Details</button></div></div><button class="remove-button" data-action="favorite" data-id="${safeText(p.id)}" aria-label="Remove ${safeText(p.name)} from favorites"><i class="fa-solid fa-heart"></i></button></div>`).join("");
  }
  function animateTruck(source) {
    const truck = $("#cartOpen"), flyer = $("#parcelFlyer");
    if (!truck || reduceMotion) { if (truck) { truck.classList.add("animating"); setTimeout(()=>truck.classList.remove("animating"),800); } return; }
    const from = source?.getBoundingClientRect?.(), to = truck.getBoundingClientRect();
    const startX = from ? from.left + from.width/2 : window.innerWidth/2, startY = from ? from.top + from.height/2 : window.innerHeight/2;
    const endX = to.left + to.width/2, endY = to.top + to.height/2;
    flyer.style.transition = "none"; flyer.style.left = `${startX-17}px`; flyer.style.top = `${startY-17}px`; flyer.style.opacity = "1"; flyer.style.transform = "scale(.8) rotate(-8deg)";
    flyer.classList.remove("fly"); void flyer.offsetWidth;
    requestAnimationFrame(() => { flyer.classList.add("fly"); flyer.style.left = `${endX-17}px`; flyer.style.top = `${endY-17}px`; flyer.style.transform = "scale(.25) rotate(35deg)"; });
    const animationMs = Math.max(500, Number(CFG.CART_ANIMATION_MS)||1500);
    setTimeout(() => { flyer.classList.remove("fly"); flyer.style.opacity="0"; truck.classList.add("animating"); updateBadge($("#cartCount")); setTimeout(()=>truck.classList.remove("animating"),800); }, Math.min(animationMs,1200));
  }
  function addToCart(id, source, qty = 1) {
    const p = getProduct(id); if (!p) { toast("This watch is not available right now", "fa-circle-exclamation"); return; }
    const row = cart.find(x => x.id === id);
    if (row) row.qty += qty; else cart.push({id,qty});
    save(); updateCounts(); renderCart(); animateTruck(source); toast(`${p.name} added to your bag`);
    if (source?.classList?.contains("add-action")) { source.classList.add("added"); source.innerHTML = '<i class="fa-solid fa-check"></i> Added'; setTimeout(()=>{ if(source.isConnected){source.classList.remove("added");source.innerHTML='<i class="fa-solid fa-plus"></i> Add to bag';}},1100); }
  }
  function changeQty(id, delta) {
    const row = cart.find(x=>x.id===id); if (!row) return;
    row.qty += delta; if (row.qty <= 0) cart = cart.filter(x=>x.id!==id);
    save(); updateCounts(); renderCart();
  }
  function removeFromCart(id) { cart = cart.filter(x=>x.id!==id); save(); updateCounts(); renderCart(); toast("Watch removed from your bag","fa-trash"); }
  function openDrawer(which) {
    closeMenu(); $("#overlay").classList.add("visible");
    const drawer = which === "cart" ? $("#cartDrawer") : $("#favoritesDrawer");
    $$(".drawer").forEach(d => { d.classList.remove("open"); d.setAttribute("aria-hidden","true"); });
    drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); document.body.classList.add("locked");
    setTimeout(()=>drawer.querySelector("button")?.focus(),100);
  }
  function closeDrawers() {
    $$(".drawer").forEach(d=>{d.classList.remove("open");d.setAttribute("aria-hidden","true");});
    $("#overlay").classList.remove("visible"); document.body.classList.remove("locked");
  }
  function openQuick(id) {
    const p=getProduct(id); if(!p)return;
    quickProduct=p;quickQty=1;lastFocused=document.activeElement;
    $("#quickContent").innerHTML=`<div class="quick-layout"><div>${imageMarkup(p,"quick-image")}</div><div class="quick-info"><p class="eyebrow">${safeText(p.category)} / ${safeText(p.gender)} COLLECTION</p><h2 id="quickName">${safeText(p.name)}</h2><div class="quick-price">${money(p.priceEGP)}</div><p class="quick-description">${safeText(p.description)}</p><div class="spec-list"><div><span>Case</span><strong>${safeText(p.caseMaterial||"Stainless steel")}</strong></div><div><span>Strap</span><strong>${safeText(p.strapMaterial||"See product details")}</strong></div><div><span>Style</span><strong>${safeText(p.style||p.category)}</strong></div><div><span>Dial color</span><strong>${safeText(p.dialColor||p.primaryColor||"Not specified")}</strong></div></div><div class="quick-qty"><span>Quantity</span><button data-action="quickqty" data-delta="-1" aria-label="Decrease quantity">−</button><span id="quickQtyValue">1</span><button data-action="quickqty" data-delta="1" aria-label="Increase quantity">+</button></div><button class="button button-primary" data-action="quickadd" data-id="${safeText(p.id)}">Add to bag · ${money(p.priceEGP)} <i class="fa-solid fa-arrow-right"></i></button></div></div>`;
    $("#quickViewBackdrop").hidden=false;document.body.classList.add("locked");$("#quickClose").focus();
  }
  function closeQuick() { $("#quickViewBackdrop").hidden=true; if(!$("#cartDrawer").classList.contains("open")&&!$("#favoritesDrawer").classList.contains("open"))document.body.classList.remove("locked");lastFocused?.focus?.(); }
  function openCheckout() {
    $("#checkoutSummary").innerHTML=cart.map(r=>{const p=getProduct(r.id);return p?`<div class="checkout-summary-row"><span>${safeText(p.name)} × ${r.qty}</span><span>${money(p.priceEGP*r.qty)}</span></div>`:""}).join("")+`<div class="checkout-summary-row total"><span>Demo subtotal</span><span>${money(cartTotal())}</span></div>`;
    $("#demoConfirm").checked=false;$("#demoPlaceOrder").disabled=true;closeDrawers();$("#checkoutBackdrop").hidden=false;document.body.classList.add("locked");$("#demoConfirm").focus();
  }
  function closeCheckout(){ $("#checkoutBackdrop").hidden=true;document.body.classList.remove("locked"); }
  function openMenu() {
    if(menuOpen)return;menuOpen=true;$("#menuToggle").classList.add("active");$("#menuToggle").setAttribute("aria-expanded","true");$("#menuToggle").setAttribute("aria-label","Close navigation menu");
    $("#mobileMenu").classList.add("open");$("#mobileMenu").setAttribute("aria-hidden","false");$("#overlay").classList.add("visible");document.body.classList.add("locked");
  }
  function closeMenu() {
    if(!menuOpen)return;menuOpen=false;$("#menuToggle").classList.remove("active");$("#menuToggle").setAttribute("aria-expanded","false");$("#menuToggle").setAttribute("aria-label","Open navigation menu");
    $("#mobileMenu").classList.remove("open");$("#mobileMenu").setAttribute("aria-hidden","true");
    if(!$(".drawer.open")&&$("#quickViewBackdrop").hidden&&$("#checkoutBackdrop").hidden){$("#overlay").classList.remove("visible");document.body.classList.remove("locked");}
  }
  function setupCarousel(track) {
    if(!track)return;let down=false,startX=0,scrollLeft=0,moved=false;
    track.addEventListener("pointerdown",e=>{if(e.pointerType==="mouse"&&e.button!==0)return;down=true;moved=false;startX=e.clientX;scrollLeft=track.scrollLeft;track.classList.add("dragging");});
    window.addEventListener("pointerup",()=>{down=false;track.classList.remove("dragging");setTimeout(()=>{moved=false;},0);});
    track.addEventListener("pointermove",e=>{if(!down)return;const dx=e.clientX-startX;if(Math.abs(dx)>6)moved=true;if(moved)track.scrollLeft=scrollLeft-dx;});
    track.addEventListener("click",e=>{if(moved){e.stopPropagation();e.preventDefault();}},true);
  }
  function filterGender(gender) {
    $("#genderFilter").value=gender||"";renderCatalog();
    if(gender)toast(`${gender}'s collection selected`,"fa-filter");
  }
  function setupEvents() {
    window.addEventListener("scroll",()=>$("#siteHeader").classList.toggle("scrolled",window.scrollY>35),{passive:true});
    $("#menuToggle").addEventListener("click",()=>menuOpen?closeMenu():openMenu());
    $("#overlay").addEventListener("click",()=>{closeDrawers();closeMenu();});
    $("#cartOpen").addEventListener("click",()=>openDrawer("cart"));$("#favoritesOpen").addEventListener("click",()=>openDrawer("favorites"));
    $("#mobileCart").addEventListener("click",()=>openDrawer("cart"));$("#mobileFavorites").addEventListener("click",()=>openDrawer("favorites"));
    $$("[data-close]").forEach(b=>b.addEventListener("click",closeDrawers));
    $("#quickClose").addEventListener("click",closeQuick);$("#quickViewBackdrop").addEventListener("click",e=>{if(e.target===$("#quickViewBackdrop"))closeQuick();});
    $("#checkoutClose").addEventListener("click",closeCheckout);$("#checkoutBackdrop").addEventListener("click",e=>{if(e.target===$("#checkoutBackdrop"))closeCheckout();});
    $("#demoConfirm").addEventListener("change",e=>$("#demoPlaceOrder").disabled=!e.target.checked);
    $("#demoPlaceOrder").addEventListener("click",()=>{if($("#demoPlaceOrder").disabled)return;closeCheckout();cart=[];save();updateCounts();renderCart();toast("Demo complete — no order or payment was created","fa-circle-check");});
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape"){closeDrawers();closeMenu();if(!$("#quickViewBackdrop").hidden)closeQuick();if(!$("#checkoutBackdrop").hidden)closeCheckout();}
      if(e.key==="Tab"&&!$("#quickViewBackdrop").hidden){const focusables=$$('button:not([disabled]),a[href],input,select,[tabindex="0"]',$("#quickViewBackdrop"));if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    });
    $$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>closeMenu()));
    $$("[data-filter-gender]").forEach(a=>a.addEventListener("click",()=>filterGender(a.dataset.filterGender)));
    $$("[data-collection]").forEach(a=>a.addEventListener("click",()=>{filterGender(a.dataset.collection);}));
    ["searchInput","genderFilter","categoryFilter","dialFilter","sortFilter","maxPrice"].forEach(id=>$("#"+id).addEventListener(id==="searchInput"?"input":"change",renderCatalog));
    $("#resetFilters").addEventListener("click",()=>{$("#searchInput").value="";$("#genderFilter").value="";$("#categoryFilter").value="";$("#dialFilter").value="";$("#sortFilter").value="featured";$("#maxPrice").value="2000";renderCatalog();});
    $("#searchToggle").addEventListener("click",()=>{document.querySelector("#all-watches").scrollIntoView({behavior:reduceMotion?"auto":"smooth"});setTimeout(()=>$("#searchInput").focus(),350);});
    $$(".carousel-arrow").forEach(b=>b.addEventListener("click",()=>{const track=$("#"+b.dataset.target);if(!track)return;const first=track.querySelector(".product-card");const step=first?first.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||20):300;track.scrollBy({left:Number(b.dataset.dir)*step*2,behavior:reduceMotion?"auto":"smooth"});}));
    ["#newTrack","#bestTrack"].forEach(s=>setupCarousel($(s)));
    document.addEventListener("click",e=>{
      const action=e.target.closest("[data-action]");if(!action)return;
      const {action:kind,id,delta}=action.dataset;
      if(kind==="favorite"){setFavorite(id);}
      else if(kind==="quick"){openQuick(id);}
      else if(kind==="add"){addToCart(id,action);}
      else if(kind==="qty"){changeQty(id,Number(delta));}
      else if(kind==="remove"){removeFromCart(id);}
      else if(kind==="clear"){cart=[];save();updateCounts();renderCart();toast("Your bag has been cleared","fa-trash");}
      else if(kind==="continue"){closeDrawers();closeMenu();document.querySelector("#all-watches").scrollIntoView({behavior:reduceMotion?"auto":"smooth"});}
      else if(kind==="checkout"){openCheckout();}
      else if(kind==="quickqty"){quickQty=Math.max(1,Math.min(10,quickQty+Number(delta)));$("#quickQtyValue").textContent=quickQty;const p=quickProduct;const btn=$('[data-action="quickadd"]');if(btn&&p)btn.innerHTML=`Add to bag · ${money(p.priceEGP*quickQty)} <i class="fa-solid fa-arrow-right"></i>`;}
      else if(kind==="quickadd"){addToCart(id,action,quickQty);closeQuick();}
    });
    $$(".placeholder-link").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();toast("Add your real social profile URL in index.html","fa-link");}));
  }
  function initHero() {
    const video=$("#heroVideo");
    if(video){
      const videoReady=()=>{video.classList.remove("video-unavailable");preloadReady("video");};
      const videoFailed=()=>{video.classList.add("video-unavailable");preloadReady("video");};
      const tryPlay=()=>{video.muted=true;video.defaultMuted=true;const attempt=video.play?.();if(attempt&&typeof attempt.catch==="function")attempt.catch(()=>{});};
      video.addEventListener("canplay",()=>{videoReady();tryPlay();},{once:true});
      video.addEventListener("error",videoFailed);
      video.querySelectorAll("source").forEach(s=>s.addEventListener("error",videoFailed)); /* <source> errors do not bubble to <video> */
      ["touchstart","click","scroll"].forEach(evt=>window.addEventListener(evt,()=>{if(video.paused)tryPlay();},{once:true,passive:true})); /* low-power / autoplay-blocked fallback */
      tryPlay();
      if(video.readyState>=3)videoReady();
      else if(video.networkState===HTMLMediaElement.NETWORK_NO_SOURCE)videoFailed();
    }else preloadReady("video");
    const h=$(".hero h1");if(h&&CFG.HERO_HEADING){const pieces=CFG.HERO_HEADING.split("Signature.");h.innerHTML=pieces.length>1?`${safeText(pieces[0])}<em>Signature.</em>`:safeText(CFG.HERO_HEADING);}
    const copy=$(".hero-copy");if(copy&&CFG.HERO_DESCRIPTION)copy.textContent=CFG.HERO_DESCRIPTION;
    const buttons=$$(".hero-buttons .button");if(buttons[0]&&CFG.PRIMARY_BUTTON_LABEL)buttons[0].childNodes[0].textContent=CFG.PRIMARY_BUTTON_LABEL+" ";if(buttons[1]&&CFG.SECONDARY_BUTTON_LABEL)buttons[1].textContent=CFG.SECONDARY_BUTTON_LABEL;
  }
  /* ---- Preloader: real progress (products + page load + hero video), min display time, then curtain reveal ---- */
  const PRELOAD_MIN=1900, PRELOAD_MAX=6500, RING_C=2*Math.PI*64;
  const preload={flags:{products:false,load:false,video:false},start:performance.now(),shown:0,done:false};
  function preloadReady(key){preload.flags[key]=true;}
  function paintPreload(){
    const ring=$("#plRing"),pct=$("#plPercent");
    if(ring)ring.style.strokeDashoffset=String(RING_C*(1-preload.shown/100));
    if(pct)pct.textContent=preload.shown>=99.5?"100":String(Math.round(preload.shown)).padStart(2,"0");
  }
  function initPreloader(){
    if(!$("#preloader"))return;
    const tick=()=>{
      if(preload.done)return;
      const t=performance.now()-preload.start,f=preload.flags;
      const real=10+(f.products?30:0)+(f.load?30:0)+(f.video?30:0);
      const target=t>=PRELOAD_MAX?100:Math.min(real,Math.min(100,(t/PRELOAD_MIN)*100));
      preload.shown+=(target-preload.shown)*.12;
      if(target-preload.shown<.4)preload.shown=target;
      paintPreload();
      if(preload.shown>=100){hidePreloader();return;}
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    window.setTimeout(hidePreloader,PRELOAD_MAX+1500); /* failsafe (e.g. background tab) */
  }
  function hidePreloader(){
    if(preload.done)return;preload.done=true;
    const preloader=$("#preloader");document.body.classList.remove("loading");
    const video=$("#heroVideo");if(video&&video.paused){video.muted=true;video.play?.().catch?.(()=>{});}
    if(!preloader)return;
    preload.shown=100;paintPreload();
    preloader.classList.add("is-hidden");
    window.setTimeout(()=>preloader.remove(),1500);
  }
  async function init() {
    const year=$("#year");if(year)year.textContent=new Date().getFullYear();
    initHero();setupEvents();
    try{await loadProducts();}catch(error){console.error("TIMELESS product initialization failed:",error);}
    preloadReady("products");
  }
  document.addEventListener("DOMContentLoaded",()=>{initPreloader();init();});
  window.addEventListener("load",()=>preloadReady("load"));
  if(document.readyState==="complete")preloadReady("load");
})();