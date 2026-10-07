/* CER Alternativas — maqueta. Sin dependencias salvo los íconos de Lucide. */
(function () {
  "use strict";

  var doc = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function icons() { if (window.lucide) window.lucide.createIcons(); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  /* ---------- Aparición al hacer scroll ---------- */
  var io = !reduce && "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0 })
    : null;
  function observe(els) { els.forEach(function (el) { if (io) io.observe(el); else el.classList.add("is-in"); }); }

  /* ---------- Tema claro / oscuro ---------- */
  var themeBtn = $(".theme-toggle");
  function syncThemeLabel() {
    var label = doc.getAttribute("data-theme") === "dark" ? "Light" : "Dark";
    themeBtn.setAttribute("aria-label", label);
    themeBtn.title = label;
  }
  themeBtn.addEventListener("click", function () {
    var next = doc.getAttribute("data-theme") === "dark" ? "light" : "dark";
    doc.setAttribute("data-theme", next);
    try { localStorage.setItem("cer-theme", next); } catch (e) {}
    syncThemeLabel();
  });
  syncThemeLabel();

  /* ---------- Header: fondo al bajar, se esconde al bajar y vuelve al subir ---------- */
  var header = $("#cabecera");
  var lastY = window.scrollY;

  /* ---------- Menú mobile ---------- */
  var menuBtn = $(".menu-toggle");
  var nav = $("#nav");
  var subBtn = $(".nav-btn");
  $$(".nav-list > li").forEach(function (li, i) { li.style.setProperty("--i", i); });

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    header.classList.remove("is-hidden");
  }
  function setSubmenu(open) { subBtn.setAttribute("aria-expanded", String(open)); }

  menuBtn.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
  subBtn.addEventListener("click", function () { setSubmenu(subBtn.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a) return;
    setMenu(false);
    setSubmenu(false);
    a.blur();
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".has-menu")) setSubmenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setMenu(false); setSubmenu(false); }
  });
  window.matchMedia("(min-width: 1200px)").addEventListener("change", function (e) { if (e.matches) setMenu(false); });

  /* ---------- Sección activa en el menú ---------- */
  var navLinks = $$('.nav-list a.nav-link[href^="#"]');
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["inicio", "programas", "ofertas", "proceso", "nosotros", "contacto"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ---------- Línea de tiempo del proceso ---------- */
  var timeline = $("#timeline");
  var steps = $$(".step", timeline);
  function updateTimeline() {
    var r = timeline.getBoundingClientRect();
    var vh = window.innerHeight;
    if (r.bottom < -200 || r.top > vh + 200) return;
    var mark = vh * 0.62;
    var p = Math.min(1, Math.max(0, (mark - r.top) / r.height));
    timeline.style.setProperty("--p", p.toFixed(4));
    steps.forEach(function (s) {
      var sr = s.getBoundingClientRect();
      s.classList.toggle("is-active", sr.top + sr.height / 2 < mark);
    });
  }

  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 16);
    if (!document.body.classList.contains("menu-open") && Math.abs(y - lastY) > 4) {
      var goingDown = y > lastY && y > 480;
      header.classList.toggle("is-hidden", goingDown);
      if (goingDown) setSubmenu(false);
      lastY = y;
    }
    updateTimeline();
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", updateTimeline);
  onScroll();

  /* ---------- Ofertas ---------- */
  var offers = window.OFFERS || [];
  var list = $("#lista-ofertas");
  var form = $("#buscador");
  var qJob = form.querySelector('[name="trabajo"]');
  var qLoc = form.querySelector('[name="ubicacion"]');
  var filtros = $("#filtros");
  var quick = $("#destinos-rapidos");

  function jobRow(o, i) {
    return (
      '<li class="job" data-id="' + o.id + '" data-reveal style="--d:' + (i * 0.08).toFixed(2) + 's">' +
        '<span class="job-index">' + pad(offers.indexOf(o) + 1) + "</span>" +
        '<div class="job-main">' +
          '<div class="job-head">' +
            '<h4 class="job-title"><button type="button" data-action="detalle">' + esc(o.name) + "</button></h4>" +
            '<span class="badge-new">Nuevo</span>' +
          "</div>" +
          '<p class="job-type">' + esc(o.type) + "</p>" +
          '<p class="job-desc">' + esc(o.description) + "</p>" +
          '<ul class="job-meta">' +
            '<li><i data-lucide="calendar-range" class="ico-sm"></i>' + esc(o.date) + "</li>" +
            '<li><i data-lucide="wallet" class="ico-sm"></i>' + esc(o.salary) + "</li>" +
            '<li><i data-lucide="map-pin" class="ico-sm"></i>' + esc(o.location) + "</li>" +
          "</ul>" +
        "</div>" +
        '<div class="job-actions">' +
          '<button class="btn btn-ghost" type="button" data-action="detalle">Ver más</button>' +
          '<button class="btn btn-solid" type="button" data-action="aplicar"><span>Aplicar</span><i data-lucide="arrow-right" class="ico-sm"></i></button>' +
        "</div>" +
      "</li>"
    );
  }

  function chip(icon, value, field) {
    return '<button type="button" class="chip" data-clear="' + field + '">' +
      '<i data-lucide="' + icon + '" class="ico-sm"></i>' + esc(value) +
      '<i data-lucide="x" class="ico-sm"></i></button>';
  }

  function applyFilter() {
    var j = norm(qJob.value.trim());
    var l = norm(qLoc.value.trim());
    var items = offers.filter(function (o) {
      return norm(o.name).indexOf(j) > -1 && norm(o.location).indexOf(l) > -1;
    });

    list.innerHTML = items.length
      ? items.map(jobRow).join("")
      : '<li class="jobs-empty"><i data-lucide="search-x" class="ico"></i><span>Sin resultados</span></li>';

    var chips = [];
    if (qJob.value.trim()) chips.push(chip("briefcase", qJob.value.trim(), "trabajo"));
    if (qLoc.value.trim()) chips.push(chip("map-pin", qLoc.value.trim(), "ubicacion"));
    filtros.innerHTML = chips.join("");
    filtros.hidden = !chips.length;

    $$("button", quick).forEach(function (b) {
      b.setAttribute("aria-pressed", String(norm(b.dataset.loc) === l));
    });

    icons();
    observe($$(".job", list));
  }

  // Destinos rápidos: salen de las mismas ofertas
  var places = offers.map(function (o) { return o.location; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; });
  quick.innerHTML = places.map(function (p) {
    return '<button type="button" data-loc="' + esc(p) + '" aria-pressed="false"><i data-lucide="map-pin" class="ico-sm"></i>' + esc(p) + "</button>";
  }).join("");
  $("#destinos").innerHTML = places.map(function (p) { return '<option value="' + esc(p) + '">'; }).join("");

  quick.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    qLoc.value = b.getAttribute("aria-pressed") === "true" ? "" : b.dataset.loc;
    applyFilter();
  });
  filtros.addEventListener("click", function (e) {
    var b = e.target.closest("[data-clear]");
    if (!b) return;
    form.querySelector('[name="' + b.dataset.clear + '"]').value = "";
    applyFilter();
  });
  qJob.addEventListener("input", applyFilter);
  qLoc.addEventListener("input", applyFilter);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    applyFilter();
    $("#ofertas").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  });

  /* ---------- Modales ---------- */
  var dlgDetalle = $("#dlg-detalle");
  var dlgAplicar = $("#dlg-aplicar");
  var formA = $("#form-aplicar");
  var formError = $("#form-error");
  var selected = null;

  function openDialog(d) {
    if (typeof d.showModal === "function") d.showModal();
    else d.setAttribute("open", "");
  }
  function closeDialog(d, then) {
    if (!d.open) { if (then) then(); return; }
    if (reduce) { d.close(); if (then) then(); return; }
    d.classList.add("is-closing");
    window.setTimeout(function () {
      d.classList.remove("is-closing");
      d.close();
      if (then) then();
    }, 190);
  }
  $$("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) {
      if (e.target === d || e.target.closest("[data-close]")) closeDialog(d);
    });
    d.addEventListener("cancel", function (e) { e.preventDefault(); closeDialog(d); });
  });

  function ul(items) {
    return '<ul class="list">' + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }
  function fact(label, value) { return "<div><dt>" + label + "</dt><dd>" + esc(value) + "</dd></div>"; }

  function showDetail(o) {
    selected = o;
    $("#detalle-lugar").innerHTML = '<i data-lucide="map-pin" class="ico-sm"></i>' + esc(o.location);
    $("#detalle-titulo").textContent = o.name;
    var html = "<h5>Requisitos laborales:</h5>" + ul(o.requirements);
    if (o.benefits && o.benefits.length) {
      html += "<h5>Beneficios ofrecidos:</h5>" + ul(o.benefits);
    } else {
      html += '<dl class="facts">' +
        fact("Posición: ", o.position) +
        fact("Tipo de oferta: ", o.type) +
        fact("Horas por semana: ", o.hoursPerWeek + " horas") +
        fact("Ubicación: ", o.location) +
        fact("Salario: ", o.salary) +
        "</dl>";
    }
    html += "<h5>Vacantes disponibles: </h5>" + ul(o.vacancy);
    var body = $("#detalle-cuerpo");
    body.innerHTML = html;
    icons();
    openDialog(dlgDetalle);
    body.scrollTop = 0;
  }

  function showApply(o) {
    selected = o;
    $("#aplicar-titulo").textContent = "Aplicando a: " + o.name;
    formError.hidden = true;
    $$("input", formA).forEach(function (i) { i.removeAttribute("aria-invalid"); });
    openDialog(dlgAplicar);
  }

  list.addEventListener("click", function (e) {
    var b = e.target.closest("[data-action]");
    if (!b) return;
    var id = Number(b.closest(".job").dataset.id);
    var o = offers.filter(function (x) { return x.id === id; })[0];
    if (b.dataset.action === "aplicar") showApply(o);
    else showDetail(o);
  });

  $("#detalle-aplicar").addEventListener("click", function () {
    var o = selected;
    closeDialog(dlgDetalle, function () { showApply(o); });
  });

  formA.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = {};
    var missing = false;
    ["name", "lastname", "email", "phone"].forEach(function (k) {
      var input = formA.querySelector('[name="' + k + '"]');
      v[k] = input.value.trim();
      if (!v[k]) { missing = true; input.setAttribute("aria-invalid", "true"); }
      else input.removeAttribute("aria-invalid");
    });
    if (missing) { formError.hidden = false; return; }
    formError.hidden = true;

    // Mismo mensaje que arma el sitio actual
    var message = "Hola, soy " + v.name + " " + v.lastname + ". \n\nQuiero aplicar a " + selected.name +
      ". \n\nMis datos de contacto son: \nEmail: " + v.email + ", \nTeléfono: " + v.phone +
      " \n\nAdjunto mi CV en el correo. \n\nSaludos.";
    window.location.href = "mailto:rr.hh@ceralternativas.com?subject=" +
      encodeURIComponent("Postulación " + selected.name) + "&body=" + encodeURIComponent(message);
    closeDialog(dlgAplicar, function () { formA.reset(); });
  });

  /* ---------- Arranque ---------- */
  applyFilter();
  icons();
  observe($$("[data-reveal]").filter(function (el) { return !el.closest("#lista-ofertas"); }));

  function start() { window.requestAnimationFrame(function () { doc.classList.add("is-loaded"); }); }
  var waits = [];
  if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
  var heroImg = $(".hero-photo img");
  if (heroImg && heroImg.decode) waits.push(heroImg.decode().catch(function () {}));
  Promise.race([
    Promise.all(waits),
    new Promise(function (r) { window.setTimeout(r, 1200); })
  ]).then(start, start);
})();
