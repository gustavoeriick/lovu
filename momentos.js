// ============================================================
//  EDITE ESTE ARQUIVO! 💝
//  Cada momento da história de vocês entra aqui.
//  Coloque as fotos na pasta "fotos/" e aponte o nome dela
//  no campo "foto" de cada momento.
// ============================================================

// Data em que vocês começaram (usada no contador do final do site)
// Formato: ano, mês (1 a 12), dia
const INICIO_DO_NAMORO = { ano: 2020, mes: 1, dia: 1 };

const CASAL = {
  ele: "Gustavo",
  ela: "Juliana",
};

const MOMENTOS = [
  {
    foto: null,
    data: "",
    titulo: "Oi minha pop 🍿",
    texto:
      "Fiz uma retrospectiva da nossa história juntos em formato de site.\n" +
      "Espero que goste ❤️",
  },
  {
    foto: null,
    data: "Julho de 2016",
    titulo: "Quem iria adivinhar?",
    texto:
      "Nos conhecemos no Tinder, em julho de 2016. Os dois solteiros a mais de 2 anos, desapegados, sem pressa de entrar em um novo relacionamento...\n" +
      "Mas não conseguíamos passar um único dia sem se falar e foi assim por 6 meses (só por mensagem kkkk)",
  },
  {
    foto: "fotos/sana.jpg",
    data: "Seis meses depois",
    titulo: "Até que veio o convite estranho.",
    texto:
      "Vamos em uma rave no Sana? Bora!!\n" +
      "Eu nunca tinha ido em uma rave, nunca tinha acampado e nunca tinha visto a menina que eu conversava todos os dias pelos últimos 6 meses e que morava a poucos quilômetros de mim. A oportunidade perfeita de viver um momento incrível!",
  },
  {
    foto: "fotos/sana-vista.jpg",
    data: "Ainda no Sana",
    titulo: "Experiência incrível!!",
    texto:
      "A Rave? Não...\n" +
      "Ter te conhecido!!\n" +
      "Me apaixonei duplamente. Por você e pelo lugar. O Sana se tornou a nossa segunda casa.",
  },
  {
    foto: "fotos/virada-de-ano.jpg",
    data: "A virada para 2017",
    titulo: "E agora?",
    texto:
      "Virou o ano e continuamos a nos falar todos os dias como era antes. " +
      "Mas agora eu te conheci, você me conheceu e agora tivemos a certeza. " +
      "Temos uma conexão que não dá para explicar. Parece que te conheço a vida toda.",
  },
  {
    foto: "fotos/um-casal.jpg",
    data: "Pouco tempo depois",
    titulo: "Um casal!",
    texto:
      "Nos tornamos um casal e ninguém esperava! Seus amigos não me conheciam. " +
      "Os meus amigos não te conheciam. Ninguém esperava esse casal! " +
      "Eu lembro que não tínhamos nenhum seguidor em comum no Instagram. " +
      "Se não fosse o Tinder, provavelmente a gente nunca iria se esbarrar e se conhecer.",
  },
  {
    foto: "fotos/qualquer-desculpa.jpg",
    data: "Qualquer dia da semana",
    titulo: "E depois?",
    texto:
      "A gente inventava qualquer coisa pra se ver. " +
      "Eu ia na sua casa no meio da semana. Você ia na minha. " +
      "Às vezes só pra conversar e ficar junto.",
  },
  {
    foto: "fotos/cozinhando.jpg",
    data: "Enquanto isso, na cozinha",
    titulo: "Muita comida!",
    texto:
      "Uma coisa que a gente descobriu rápido que gostava de fazer juntos era cozinhar. " +
      "A gente inventava de fazer toda receita que aparecia na internet. " +
      "A gente tinha até um perfil no Insta, lembra? 😂",
  },
  {
    foto: "fotos/lado-irma.jpg",
    data: "Com seus irmãos",
    titulo: "Esse seu lado",
    texto:
      "Conheci o seu lado irmã. Amo como você cuida dos seus irmãos e sempre lembra deles com carinho. " +
      "E tenho certeza, depois de tanto tempo, que eles te amam tanto quanto você os ama.",
  },
  {
    foto: "fotos/lado-besta.jpg",
    data: "Todo santo dia",
    titulo: "Besta",
    texto: "E amei também conhecer esse seu lado besta ❤️",
  },
  {
    foto: "fotos/companheira.jpg",
    data: "Em todos os rolês",
    titulo: "Minha companheira de sempre",
    texto:
      "Outra coisa também foi descobrir como você sempre está comigo, " +
      "me acompanhando nos rolês, sempre topando e sugerindo algo legal pra fazer. 🍺",
  },
  {
    foto: "fotos/primeira-casa.jpg",
    data: "De volta ao Sana",
    titulo: "Nossa primeira casa",
    texto:
      "No início a gente estava sempre querendo voltar pro Sana pra viver nossa vidinha a dois, " +
      "na nossa casinha que só cabia a gente e duas mochilas.",
  },
  {
    foto: "fotos/tempo-passando.jpg",
    data: "Mês após mês",
    titulo: "O tempo foi passando",
    texto:
      "E aquele casal improvável continuava juntos. " +
      "Ninguém tava entendendo e já estavam deixando de se importar. " +
      "Onde você estava eu estava e é isso. 😂",
  },
  {
    foto: "fotos/manolo.jpg",
    data: "Ali pertinho de casa",
    titulo: "Manolo",
    texto:
      "Nosso chopp favorito ficava tão pertinho. Nem precisava pegar Uber. " +
      "Que saudades inclusive. Uma pena ter fechado. 🥺",
  },
  {
    foto: "fotos/casa-nova.jpg",
    data: "Menos de um ano depois",
    titulo: "Casa nova",
    texto:
      "Em menos de um ano, já estávamos trocando de casa porque a antiga já não estava " +
      "dando conta de tantas viagens e tanta coisa que a gente queria levar. " +
      "Mais espaço e mais conforto. 💙",
  },
  {
    foto: "fotos/cachoeira.jpg",
    data: "Por todas as águas",
    titulo: "Cachoeira",
    texto:
      "Outra coisa que descobrimos foi o amor por cachoeiras. " +
      "Visitamos várias ao longo do tempo juntos.",
  },
  {
    foto: "fotos/tradicao.jpg",
    data: "A virada para 2018",
    titulo: "O início da tradição",
    texto:
      "Nosso primeiro ano juntos resolvemos passar a virada de ano acampando. " +
      "Então conhecemos o Camping das Acerolas em Búzios. " +
      "Foi legal que sua mãe e seu padrinho também foram. " +
      "Nessa virada iniciamos a tradição de passar as viradas de ano acampando, mas ainda nem sabíamos disso.",
  },
  {
    foto: "fotos/jose-goncalves.jpg",
    data: "Em Búzios",
    titulo: "Praia José Gonçalves",
    texto:
      "Lá conhecemos a melhor praia de todas. Uma que nunca tínhamos ouvido falar. " +
      "Linda, calma, rasa e pouco frequentada. Temos que voltar lá!!",
  },
  {
    foto: "fotos/primeiro-passo.jpg",
    data: "Janeiro de 2018",
    titulo: "O primeiro passo",
    texto:
      "Em janeiro de 2018 você deu início a uma virada de chave na sua vida " +
      "com aquele curso na Embelleze. Lembro de ir te buscar depois das aulas.",
  },
  {
    foto: "fotos/bloquinho.jpg",
    data: "Carnaval de 2018",
    titulo: "Primeiro bloquinho",
    texto: "Curtimos nosso primeiro bloquinho juntos com alguns amigos meus.",
  },
  {
    foto: "fotos/motinha.jpg",
    data: "Sobre duas rodas",
    titulo: "Motinha",
    texto:
      "Comprei nossa motinha, que tanto nos levou pra todo canto. Viajamos demais! " +
      "Nos acostumamos a sair e não beber. Curtimos vários shows com ela " +
      "e não precisamos esperar o sol raiar pra voltar pra casa.",
  },
  {
    foto: "fotos/shiva.jpg",
    data: "De surpresa",
    titulo: "Shiva",
    texto:
      "Logo depois do seu aniversário de 22 anos, uma gatinha começou a comer o lixo da sua mãe " +
      "e não queria ir embora. Sua mãe toda vez tinha que enxotar ela. " +
      "Até que um dia ela ficou de vez nas nossas vidas. " +
      "Hoje ela é nossa godona, amor de família, terrívelzinha e etc 🐱",
  },
  {
    foto: "fotos/lugares.jpg",
    data: "Por aí",
    titulo: "Lugares",
    texto: "Conhecemos uns lugares diferentes juntos ❤️",
  },
  {
    foto: "fotos/bebe-come.jpg",
    data: "Como sempre",
    titulo: "Bebe & Come",
    texto: "E sempre comendo e sempre bebendo 😂",
  },
  {
    foto: "fotos/praias.jpg",
    data: "De areia em areia",
    titulo: "Praias",
    texto:
      "Curtimos várias praias também. Principalmente depois da motinha. " +
      "Era uma beleza estacionar em qualquer lugar 🥺",
  },
];

// Mensagem final do site
const MENSAGEM_FINAL = {
  titulo: "Feliz Dia dos Namorados",
  texto:
    "Juliana, cada momento ao seu lado é o meu favorito. " +
    "Te amo hoje, amanhã e em todos os capítulos que ainda vamos escrever juntos.",
};
