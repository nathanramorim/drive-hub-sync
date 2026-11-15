(function () {
  "use strict";

  // Abas Claude / agy
  var buttons = document.querySelectorAll(".tab-btn");
  var panels = document.querySelectorAll(".tab-panel");

  function showTab(name) {
    buttons.forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === name);
      b.setAttribute("aria-selected", b.dataset.tab === name ? "true" : "false");
    });
    panels.forEach(function (p) {
      p.classList.toggle("active", p.id === "tab-" + name);
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { showTab(b.dataset.tab); });
  });

  // Botões "Copiar"
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.parentElement.querySelector("pre");
      var text = pre ? pre.innerText : "";
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copiado!";
        btn.classList.add("done");
        setTimeout(function () {
          btn.textContent = old;
          btn.classList.remove("done");
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done);
      } else {
        var area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
        done();
      }
    });
  });
})();
