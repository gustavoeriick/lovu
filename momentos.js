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
  {
    foto: "fotos/familia.jpg",
    data: "De presente",
    titulo: "Família",
    texto:
      "Através de você eu entendi o que é família. Sempre foi só eu, meu irmão e meus pais. " +
      "Nunca tive família próxima. Meus familiares vi poucas vezes e infelizmente " +
      "não consegui criar esse sentimento por eles. " +
      "Mas através de você eu ganhei uma família ❤️",
  },
  {
    foto: "fotos/shiva-mamae.jpg",
    data: "A família cresceu",
    titulo: "Shiva mamãe",
    texto: "Vimos Shiva ser mamãe e cuidar muito dos nenéns dela ❤️",
  },
  {
    foto: "fotos/exageramos.jpg",
    data: "A virada para 2019",
    titulo: "Exageramos",
    texto:
      "Na nossa segunda virada de 2018 para 2019, resolvemos levar tudo que dava pra pendurar na mochila. " +
      "Só não imaginávamos que isso pesaria uns 30kg e que o rolê seria um dos piores que já tivemos na vida!",
  },
  {
    foto: "fotos/aulas.jpg",
    data: "Professora Juliana",
    titulo: "Aulas",
    texto:
      "Você se aventurou dando aulas. " +
      "Fui muito em gráficas imprimir diplomas e livretos 🚀",
  },
  {
    foto: "fotos/atelie.jpg",
    data: "Março de 2019",
    titulo: "Ateliê",
    texto:
      "Em março de 2019 realizamos o sonho de alugar o ateliê. " +
      "Os atendimentos que você começou fazendo trabalhando para os outros, " +
      "depois atendendo em casa, até indo na casa das pessoas, " +
      "agora teriam seu próprio espaço comercial 🥹",
  },
  {
    foto: "fotos/sonho-realizado.jpg",
    data: "O seu espaço",
    titulo: "Um sonho realizado",
    texto: "Era simples, mas aconchegante e silencioso. E acima de tudo era seu!",
  },
  {
    foto: "fotos/sol.jpg",
    data: "Novembro de 2019",
    titulo: "Sol",
    texto: "Vimos o show de um disco que só a gente ouviu e eu conheci o Dalsin.",
  },
  {
    foto: "fotos/aquela-chuva.jpg",
    data: "Sana, de motinha",
    titulo: "Aquela chuva",
    texto:
      "Viajamos pro Sana de motinha, dessa vez para ficar em chalé. " +
      "Foi tudo lindo, menos a volta, que decidimos sair para não pegar a chuva que estava vindo, mas ela já estava lá. " +
      "Pegamos a pior chuva das nossas vidas. Não tinha o que fazer a não ser seguir viagem debaixo de um pé d'água. " +
      "E quando chegamos em Rio Bonito o céu estava azul, sol brilhando, pista seca, carros secos e a gente encharcados, pingando. " +
      "Tudo na mochila encharcado. Depois do sufoco a gente conseguiu rir da situação 😂",
  },
  {
    foto: "fotos/2020.jpg",
    data: "O ano maluco",
    titulo: "2020",
    texto:
      "Que ano maluco. Comecei o ano sofrendo acidente de moto quase chegando no trabalho. " +
      "Fui afastado por 3 meses por ter fraturado o calcanhar do pé direito e em março...\n" +
      "Somos convidados a morar juntos e a pandemia começa no mesmo mês que eu volto a trabalhar, " +
      "só que dessa vez 100% remoto. Foi tenso, mas temos muitas memórias boas dessa primeira casa. 🥺",
  },
  {
    foto: "fotos/renato.jpg",
    data: "O agregado",
    titulo: "Renato",
    texto:
      "Conhecemos o menino sibito. Que vivia na nossa casa. " +
      "Foi o nosso segundo gato sem termos adotado ele oficialmente. " +
      "Bastava abrir a porta de casa que ele vinha miando e deitando no sofá ou em algum tapete.",
  },
  {
    foto: "fotos/palio.jpg",
    data: "Vai entender",
    titulo: "Pálio",
    texto: "Ganhamos um carro que nunca dirigimos.",
  },
  {
    foto: "fotos/sem-virada.jpg",
    data: "A virada para 2021",
    titulo: "Sem virada no camping",
    texto:
      "Na virada de 2020 para 2021 tínhamos preparado tudo para viajar para o Sana, " +
      "mas não parou de chover por dias. Foi a primeira vez que não passamos a virada no Sana. 😢",
  },
  {
    foto: "fotos/escritorio.jpg",
    data: "Meu cantinho",
    titulo: "Escritório",
    texto:
      "Finalmente montei meu próprio escritório em cada detalhezinho. " +
      "Era meu sonho ter meu cantinho também. 😊",
  },
  {
    foto: "fotos/ano-de-mudancas.jpg",
    data: "Janeiro de 2021",
    titulo: "Ano de mudanças",
    texto:
      "O ano virou e em um dia qualquer do início de janeiro acordamos com os pés na água. " +
      "Nossa casa tinha alagado. E isso nos forçou a sair da nossa casa e procurar um lugar mais seguro para morar. " +
      "E em poucos dias estávamos morando em um apartamento térreo no mesmo bairro.",
  },
  {
    foto: "fotos/cupim.jpg",
    data: "No apartamento novo",
    titulo: "Cupim",
    texto:
      "Em pouco tempo descobrimos que o apartamento estava infestado de cupim " +
      "e tivemos que passar por mais um momento complicado.",
  },
  {
    foto: "fotos/sem-gas.jpg",
    data: "Meses de luta",
    titulo: "Sem Gás",
    texto:
      "Passamos meses sem gás para cozinhar e esquentar a água pro banho. " +
      "Inclusive só conseguimos esse direito porque colocamos a Naturgy na justiça e ganhamos. 🙏",
  },
  {
    foto: "fotos/savana.jpg",
    data: "Todo fim de tarde",
    titulo: "Savana",
    texto:
      "Das poucas coisas que gostávamos de morar no apartamento, " +
      "de longe o pôr do sol era o melhor de todos. " +
      "Tanto que demos o apelido de 'Nossa Savana'.",
  },
  {
    foto: "fotos/sem-exagero.jpg",
    data: "Nossa Savana",
    titulo: "Sem exagero!",
    texto: "Olha esse pôr do sol cara!!",
  },
  {
    foto: "fotos/buzios.jpg",
    data: "Férias de 2022",
    titulo: "Búzios",
    texto:
      "Conhecemos Búzios de outra forma. Pegamos um final de semana no meio das férias " +
      "em um hotelzinho e acabamos ficando 4 dias. Foi uma pena você ter ficado tão resfriada. " +
      "Mas ainda sim conseguimos curtir bastante o lugar. ❤️",
  },
  {
    foto: "fotos/cabanas.jpg",
    data: "Julho de 2022",
    titulo: "Cabanas",
    texto: "Comemos no Cabanas pela primeira vez e amamos!!",
  },
  {
    foto: "fotos/fit.jpg",
    data: "Agosto de 2022",
    titulo: "Fit",
    texto: "Foi a época mais firme de todas de boa alimentação e academia.",
  },
  {
    foto: "fotos/pc-novo.jpg",
    data: "Dezembro de 2022",
    titulo: "Mudanças importantes",
    texto:
      "Em dezembro de 2022 me tornei oficialmente um programador depois de quase um ano estudando. " +
      "Aproveitei a rescisão do contrato e montei um PC novinho para iniciar no trabalho novo " +
      "com um computador novinho. Eu mereço né! 😌",
  },
  {
    foto: "fotos/tecido.jpg",
    data: "Março de 2023",
    titulo: "Tecido",
    texto:
      "Em março de 2023 você começou as aulas de tecido e eu amava te acompanhar " +
      "e assistir você fazendo algo desafiador pela primeira vez.",
  },
  {
    foto: "fotos/tubarao.jpg",
    data: "2023",
    titulo: "Tubarão",
    texto:
      "Vendemos a motinha e compramos o tubarão. Um carro que era seu sonho. " +
      "Até hoje está nos levando pra todo canto. Com ele aprendemos a cuidar de um carro.",
  },
  {
    foto: "fotos/cabelao.jpg",
    data: "Ainda em 2023",
    titulo: "Cabelão",
    texto:
      "Deixei o cabelo crescer. Era um sonho ter cabelo grande e por um tempo foi legal, " +
      "até uns produtos acabarem com ele. Mas valeu a experiência.",
  },
  {
    foto: "fotos/fim-de-uma-era.jpg",
    data: "2023",
    titulo: "Fim de uma era",
    texto:
      "Encerramos os atendimentos com o ateliê no shopping e mudamos para o Centro da cidade. " +
      "Mais um sonho realizado. ❤️",
  },
  {
    foto: "fotos/mudanca-maluca.jpg",
    data: "Na mesma época",
    titulo: "Mudança maluca",
    texto:
      "A mudança do ateliê para o Centro foi uma aventura. No shopping só podia fazer a mudança " +
      "em horário comercial e a mudança no prédio no Centro só podia depois do horário comercial. " +
      "O motorista do caminhão teve uma ideia genial: entrar como carro pagante. Estacionou no " +
      "estacionamento externo e jogamos tudo dentro em tempo recorde. Mas boa parte da mudança " +
      "fizemos de carro.",
  },
];

// Mensagem final do site
const MENSAGEM_FINAL = {
  titulo: "Feliz Dia dos Namorados",
  texto:
    "Juliana, cada momento ao seu lado é o meu favorito. " +
    "Te amo hoje, amanhã e em todos os capítulos que ainda vamos escrever juntos.",
};
