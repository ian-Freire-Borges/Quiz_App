const data = [
  {
    category: "Mamíferos",
    questions: [
      {
        question: "Qual é o maior mamífero terrestre?",
        options: ["Elefante africano", "Rinoceronte", "Hipopótamo", "Búfalo"],
        answer: "Elefante africano",
        tip: "Pode pesar até 7 toneladas"
      },
      {
        question: "Qual mamífero põe ovos?",
        options: ["Ornitorrinco", "Toupeira", "Morcego", "Rato"],
        answer: "Ornitorrinco",
        tip: "Um animal australiano com bico de pato"
      },
      {
        question: "Quantos dedos tem um panda-gigante na pata dianteira?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        tip: "Inclui um 'falso polegar' para segurar bambu"
      },
      {
        question: "Qual destes é o menor mamífero do mundo?",
        options: ["Musaranho-pigmeu", "Morcego-abelha", "Rato-canguru", "Toupeira-dourada"],
        answer: "Morcego-abelha",
        tip: "Pesa menos de 2 gramas"
      },
      {
        question: "Qual animal tem a gestação mais longa?",
        options: ["Elefante (22 meses)", "Baleia (18 meses)", "Girafa (15 meses)", "Rinoceronte (16 meses)"],
        answer: "Elefante (22 meses)",
        tip: "Quase 2 anos de gestação"
      },
      {
        question: "Qual destes NÃO é um primata?",
        options: ["Lêmure", "Társio", "Coala", "Gibão"],
        answer: "Coala",
        tip: "É um marsupial, como os cangurus"
      },
      {
        question: "Quantos dentes tem um golfinho?",
        options: ["20-30", "50-60", "80-100", "120-140"],
        answer: "80-100",
        tip: "Variam conforme a espécie"
      },
      {
        question: "Qual destes animais hiberna?",
        options: ["Urso-polar", "Esquilo", "Texugo", "Todos acima"],
        answer: "Todos acima",
        tip: "Reduzem metabolismo no inverno"
      },
      {
        question: "Qual é o único mamífero venenoso?",
        options: ["Ornitorrinco", "Rato-topo", "Musaranho", "Lóris"],
        answer: "Ornitorrinco",
        tip: "Macho tem esporões venenosos"
      },
      {
        question: "Qual animal tem o cérebro maior?",
        options: ["Elefante", "Golfinho", "Humano", "Baleia-cachalote"],
        answer: "Baleia-cachalote",
        tip: "Até 8 kg de cérebro"
      }
    ]
  },
  {
    category: "Aves",
    questions: [
      {
        question: "Qual ave não voa?",
        options: ["Pinguim", "Avestruz", "Ema", "Todas acima"],
        answer: "Todas acima",
        tip: "Adaptadas para correr ou nadar"
      },
      {
        question: "Quantas penas tem um beija-flor?",
        options: ["500-600", "900-1000", "1200-1500", "2000+"],
        answer: "900-1000",
        tip: "São extremamente leves"
      },
      {
        question: "Qual ave migra mais longe?",
        options: ["Gaivota", "Andorinha", "Maçarico", "Águia"],
        answer: "Maçarico",
        tip: "Voa 11.000 km sem parar"
      },
      {
        question: "Qual é a envergadura da maior ave voadora?",
        options: ["2,5 m", "3,5 m", "4,5 m", "5,5 m"],
        answer: "3,5 m",
        tip: "Albatroz-errante"
      },
      {
        question: "Qual ave imita sons humanos?",
        options: ["Papagaio", "Corvo", "Melro", "Todas acima"],
        answer: "Todas acima",
        tip: "Algumas até conversam"
      },
      {
        question: "Quantos ovos põe um pinguim-imperador por ano?",
        options: ["1", "2", "3", "4"],
        answer: "1",
        tip: "Os pais se revezam no cuidado"
      },
      {
        question: "Qual ave tem visão mais aguçada?",
        options: ["Águia", "Coruja", "Falcão", "Abetarda"],
        answer: "Águia",
        tip: "Vê 8x melhor que humanos"
      },
      {
        question: "Qual destas NÃO é uma ave de rapina?",
        options: ["Gavião", "Urubu", "Cegonha", "Açor"],
        answer: "Cegonha",
        tip: "Alimenta-se de pequenos animais"
      },
      {
        question: "Qual ave constrói o maior ninho?",
        options: ["Águia", "Japu", "Pardal", "Tecelão"],
        answer: "Tecelão",
        tip: "Ninhos comunitários de 8m"
      },
      {
        question: "Qual ave vive mais?",
        options: ["Arara (80 anos)", "Corvo (40 anos)", "Avestruz (50 anos)", "Cisne (30 anos)"],
        answer: "Arara (80 anos)",
        tip: "Podem ultrapassar humanos"
      }
    ]
  },
  {
    category: "Répteis",
    questions: [
      {
        question: "Quantas espécies de cobras existem?",
        options: ["500", "1500", "3000", "5000"],
        answer: "3000",
        tip: "25% são venenosas"
      },
      {
        question: "Qual lagarto corre sobre a água?",
        options: ["Basilisco", "Iguana", "Camaleão", "Dragão"],
        answer: "Basilisco",
        tip: "Chamado de 'lagarto-jesus'"
      },
      {
        question: "Qual tartaruga vive mais?",
        options: ["Verde (80 anos)", "Gigante (150 anos)", "Marinha (100 anos)", "De-caixa (120 anos)"],
        answer: "Gigante (150 anos)",
        tip: "Das ilhas Seychelles"
      },
      {
        question: "Como os crocodilos respiram debaixo d'água?",
        options: ["Brânquias", "Pulmões (ficam imóveis)", "Pele", "Nariz selado"],
        answer: "Pulmões (ficam imóveis)",
        tip: "Reduzem batimentos cardíacos"
      },
      {
        question: "Qual cobra é a mais longa?",
        options: ["Píton-reticulada", "Sucuri", "Cobra-real", "Jiboia"],
        answer: "Píton-reticulada",
        tip: "Até 10 metros"
      },
      {
        question: "Quantos olhos tem uma tuatara?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        tip: "Terceiro olho no topo da cabeça"
      },
      {
        question: "Qual réptil muda de cor?",
        options: ["Iguana", "Camaleão", "Lagarto", "Todos acima"],
        answer: "Todos acima",
        tip: "Camaleões são os mais rápidos"
      },
      {
        question: "Qual jacaré é o maior?",
        options: ["Jacaré-açu", "Jacaré-do-pantanal", "Jacaré-americano", "Jacaré-chinês"],
        answer: "Jacaré-açu",
        tip: "Até 6 metros"
      },
      {
        question: "Como as cobras 'ouvem'?",
        options: ["Ouvidos", "Língua", "Vibrações no chão", "Olhos"],
        answer: "Vibrações no chão",
        tip: "Sentem movimentos"
      },
      {
        question: "Qual destes NÃO é um dinossauro moderno?",
        options: ["Crocodilo", "Tuatara", "Tartaruga", "Pássaro"],
        answer: "Tartaruga",
        tip: "Aves são dinossauros vivos"
      }
    ]
  },
  {
    category: "Insetos",
    questions: [
      {
        question: "Quantas espécies de insetos existem?",
        options: ["500 mil", "1 milhão", "2 milhões", "5 milhões"],
        answer: "1 milhão",
        tip: "60% de todas as espécies"
      },
      {
        question: "Qual inseto vive 1 dia?",
        options: ["Efemeróptero", "Libélula", "Mosca", "Formiga"],
        answer: "Efemeróptero",
        tip: "Fase adulta apenas"
      },
      {
        question: "Quantas formigas existem por humano?",
        options: ["10 mil", "100 mil", "1 milhão", "10 milhões"],
        answer: "1 milhão",
        tip: "Biomassa maior que humanos"
      },
      {
        question: "Qual borboleta migra mais?",
        options: ["Monarca", "Branca", "Azul", "Coruja"],
        answer: "Monarca",
        tip: "4.000 km nos EUA"
      },
      {
        question: "Quantas patas tem um centopeia?",
        options: ["50", "100", "Depende da espécie", "Nenhuma"],
        answer: "Depende da espécie",
        tip: "Sempre número ímpar"
      },
      {
        question: "Qual inseto é mais inteligente?",
        options: ["Abelha", "Formiga", "Barata", "Louva-deus"],
        answer: "Abelha",
        tip: "Resolve problemas complexos"
      },
      {
        question: "Quantos olhos tem uma libélula?",
        options: ["2", "4", "6", "8"],
        answer: "6",
        tip: "Visão de 360 graus"
      },
      {
        question: "Qual formiga é a maior?",
        options: ["Cortadeira", "Bala", "Dinoponera", "Todas"],
        answer: "Dinoponera",
        tip: "Até 3 cm"
      },
      {
        question: "Quantas vezes um mosquito bate as asas por segundo?",
        options: ["100", "300", "600", "1000"],
        answer: "600",
        tip: "Causa o zumbido"
      },
      {
        question: "Qual inseto é mais veloz?",
        options: ["Libélula", "Mosca", "Besouro", "Barata"],
        answer: "Libélula",
        tip: "Até 55 km/h"
      }
    ]
  },
  {
    category: "Animais Marinhos",
    questions: [
      {
        question: "Qual é o maior animal do planeta?",
        options: ["Tubarão-branco", "Baleia-azul", "Lula-gigante", "Tubarão-baleia"],
        answer: "Baleia-azul",
        tip: "Até 180 toneladas"
      },
      {
        question: "Quantos corações tem um polvo?",
        options: ["1", "2", "3", "4"],
        answer: "3",
        tip: "Dois param quando nada"
      },
      {
        question: "Qual peixe é o mais rápido?",
        options: ["Atum", "Peixe-vela", "Tubarão", "Salmão"],
        answer: "Peixe-vela",
        tip: "110 km/h"
      },
      {
        question: "Como os golfinhos dormem?",
        options: ["Flutuando", "Metade do cérebro", "No fundo", "Não dormem"],
        answer: "Metade do cérebro",
        tip: "Sono uni-hemisférico"
      },
      {
        question: "Qual é o mais venenoso?",
        options: ["Polvo-de-anéis", "Peixe-pedra", "Água-viva", "Serpente-marinha"],
        answer: "Polvo-de-anéis",
        tip: "Mata em minutos"
      },
      {
        question: "Quantos estômagos tem um tubarão?",
        options: ["1", "2", "3", "Depende"],
        answer: "Depende",
        tip: "Alguns têm estômago em J"
      },
      {
        question: "Qual baleia canta?",
        options: ["Jubarte", "Azul", "Cachalote", "Orca"],
        answer: "Jubarte",
        tip: "Canções complexas"
      },
      {
        question: "Qual destes NÃO é um peixe?",
        options: ["Tubarão", "Raia", "Cavalo-marinho", "Baleia"],
        answer: "Baleia",
        tip: "É um mamífero"
      },
      {
        question: "Quantos tentáculos tem um lula?",
        options: ["6", "8", "10", "12"],
        answer: "10",
        tip: "8 braços + 2 tentáculos"
      },
      {
        question: "Qual coral vive mais?",
        options: ["Cérebro (100 anos)", "Chifre (300 anos)", "Negro (4.000 anos)", "Fogo (50 anos)"],
        answer: "Negro (4.000 anos)",
        tip: "Mais velho que pirâmides"
      }
    ]
  },
  {
    category: "Curiosidades",
    questions: [
      {
        question: "Qual animal tem impressões digitais como humanos?",
        options: ["Gorila", "Coala", "Chimpanzé", "Urso"],
        answer: "Coala",
        tip: "Quase indistinguíveis"
      },
      {
        question: "Qual animal dorme de pé?",
        options: ["Cavalo", "Girafa", "Elefante", "Todos"],
        answer: "Todos",
        tip: "Mecanismo de bloqueio"
      },
      {
        question: "Qual é o animal mais barulhento?",
        options: ["Baleia-azul", "Macaco", "Cigarra", "Elefante"],
        answer: "Baleia-azul",
        tip: "188 decibéis"
      },
      {
        question: "Qual animal tem a pele mais grossa?",
        options: ["Rinoceronte", "Elefante", "Hipopótamo", "Baleia"],
        answer: "Rinoceronte",
        tip: "Até 5 cm"
      },
      {
        question: "Qual vive em grupos mais numerosos?",
        options: ["Formiga", "Abelha", "Gafanhoto", "Morcego"],
        answer: "Gafanhoto",
        tip: "Nuvens de bilhões"
      },
      {
        question: "Qual animal tem o salto mais alto?",
        options: ["Pulga", "Grilo", "Canguru", "Leopardo"],
        answer: "Pulga",
        tip: "200x seu tamanho"
      },
      {
        question: "Qual é o animal mais resistente?",
        options: ["Tardígrado", "Barata", "Camelo", "Tubarão"],
        answer: "Tardígrado",
        tip: "Sobrevive no espaço"
      },
      {
        question: "Qual animal tem o olfato mais apurado?",
        options: ["Urso", "Tubarão", "Mariposa", "Elefante"],
        answer: "Mariposa",
        tip: "Cheira a 10 km"
      },
      {
        question: "Qual é o animal mais antigo?",
        options: ["Tartaruga", "Caranguejo", "Esponja", "Água-viva"],
        answer: "Esponja",
        tip: "Existia antes dos dinossauros"
      },
      {
        question: "Qual animal é imortal?",
        options: ["Água-viva Turritopsis", "Lagosta", "Estrela-do-mar", "Nenhum"],
        answer: "Água-viva Turritopsis",
        tip: "Reverte para estágio juvenil"
      }
    ]
  }
];

export default data;