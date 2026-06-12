/* ============================================================
   Nossa História — monta as seções e aplica o parallax.
   Você não precisa mexer aqui: edite apenas o momentos.js 💝
   ============================================================ */

(function () {
  "use strict";

  // ---------- monta a capa e o final com os dados do momentos.js ----------
  document.getElementById("heroNomes").innerHTML =
    CASAL.ele + ' <span class="amp">&amp;</span> ' + CASAL.ela;

  document.getElementById("finalTitulo").textContent = MENSAGEM_FINAL.titulo;
  document.getElementById("finalTexto").textContent = MENSAGEM_FINAL.texto;
  document.getElementById("assinatura").textContent =
    "Com amor, " + CASAL.ele + " ❤";

  // contador de dias juntos
  var inicio = new Date(
    INICIO_DO_NAMORO.ano,
    INICIO_DO_NAMORO.mes - 1,
    INICIO_DO_NAMORO.dia
  );
  var dias = Math.floor((Date.now() - inicio.getTime()) / 86400000);
  if (dias > 0) {
    document.getElementById("contador").innerHTML =
      "<strong>" + dias.toLocaleString("pt-BR") + "</strong> dias escrevendo essa história juntos";
  }

  // ---------- gera uma seção para cada momento ----------
  var linha = document.getElementById("linhaDoTempo");
  var numeros = [
    "Capítulo um", "Capítulo dois", "Capítulo três", "Capítulo quatro",
    "Capítulo cinco", "Capítulo seis", "Capítulo sete", "Capítulo oito",
    "Capítulo nove", "Capítulo dez", "Capítulo onze", "Capítulo doze",
    "Capítulo treze", "Capítulo quatorze", "Capítulo quinze", "Capítulo dezesseis",
    "Capítulo dezessete", "Capítulo dezoito", "Capítulo dezenove", "Capítulo vinte",
    "Capítulo vinte e um", "Capítulo vinte e dois", "Capítulo vinte e três",
    "Capítulo vinte e quatro", "Capítulo vinte e cinco", "Capítulo vinte e seis",
    "Capítulo vinte e sete", "Capítulo vinte e oito", "Capítulo vinte e nove",
    "Capítulo trinta",
  ];

  var capitulo = 0;

  MOMENTOS.forEach(function (momento, i) {
    var section = document.createElement("section");
    section.className = "momento" + (i % 2 === 1 ? " invertido" : "");
    if (!momento.foto) section.classList.add("centralizado");

    var fundo = document.createElement("div");
    fundo.className = "momento-fundo";

    if (momento.foto) {
      var img = document.createElement("img");
      img.src = momento.foto;
      img.alt = momento.titulo;
      img.loading = i < 2 ? "eager" : "lazy";
      img.onerror = function () {
        // foto ainda não existe: mostra o fundo decorado no lugar
        fundo.classList.add("sem-foto");
      };
      fundo.appendChild(img);
    } else {
      // momento sem foto: só o texto sobre o fundo decorado
      fundo.classList.add("sem-foto", "so-texto");
    }

    var conteudo = document.createElement("div");
    conteudo.className = "momento-conteudo";

    // só os momentos com data ganham número de capítulo
    if (momento.data) {
      var numero = document.createElement("p");
      numero.className = "momento-numero fade-item";
      numero.textContent = numeros[capitulo] || "Capítulo " + (capitulo + 1);
      capitulo++;
      conteudo.appendChild(numero);

      var data = document.createElement("span");
      data.className = "momento-data fade-item";
      data.textContent = momento.data;
      conteudo.appendChild(data);
    }

    var titulo = document.createElement("h2");
    titulo.className = "momento-titulo fade-item";
    titulo.textContent = momento.titulo;
    conteudo.appendChild(titulo);

    var texto = document.createElement("p");
    texto.className = "momento-texto fade-item";
    texto.textContent = momento.texto;
    conteudo.appendChild(texto);

    section.appendChild(fundo);
    section.appendChild(conteudo);
    linha.appendChild(section);
  });

  // ---------- textos aparecem suavemente quando a seção entra na tela ----------
  var observer = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
        }
      });
    },
    { threshold: 0.25 }
  );

  document
    .querySelectorAll(".hero, .momento, .final")
    .forEach(function (el) { observer.observe(el); });

  // a capa já aparece de cara
  document.querySelector(".hero").classList.add("visivel");

  // ---------- parallax ----------
  // A imagem de cada seção é 36% mais alta que a tela; conforme a seção
  // atravessa a janela, deslocamos a imagem mais devagar que o scroll.
  var fundos = document.querySelectorAll(".momento-fundo");
  var heroFundo = document.querySelector(".hero-fundo");
  var barra = document.getElementById("progressoBarra");
  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var aguardandoFrame = false;

  function aplicarParallax() {
    aguardandoFrame = false;

    var alturaJanela = window.innerHeight;

    if (!reduzMovimento) {
      fundos.forEach(function (fundo) {
        var caixa = fundo.parentElement.getBoundingClientRect();
        if (caixa.bottom < 0 || caixa.top > alturaJanela) return;

        // -1 (seção entrando por baixo) … +1 (seção saindo por cima)
        var progresso =
          (alturaJanela / 2 - (caixa.top + caixa.height / 2)) /
          ((alturaJanela + caixa.height) / 2);

        var deslocamento = progresso * caixa.height * 0.16;
        fundo.style.transform = "translateY(" + deslocamento + "px)";
      });

      if (heroFundo) {
        heroFundo.style.transform =
          "translateY(" + window.scrollY * 0.35 + "px)";
      }
    }

    var total = document.documentElement.scrollHeight - alturaJanela;
    barra.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + "%";
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!aguardandoFrame) {
        aguardandoFrame = true;
        requestAnimationFrame(aplicarParallax);
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", aplicarParallax);
  aplicarParallax();

  // ---------- corações flutuando no final ----------
  if (!reduzMovimento) {
    var ninho = document.getElementById("coracoes");
    var simbolos = ["❤", "💗", "♥", "💞"];
    for (var i = 0; i < 18; i++) {
      var c = document.createElement("span");
      c.className = "coracao";
      c.textContent = simbolos[i % simbolos.length];
      c.style.left = (i * 53.7) % 100 + "%";
      c.style.fontSize = 0.9 + ((i * 7) % 10) / 8 + "rem";
      c.style.animationDuration = 7 + ((i * 13) % 9) + "s";
      c.style.animationDelay = ((i * 17) % 80) / 10 + "s";
      ninho.appendChild(c);
    }
  }
})();
