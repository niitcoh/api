const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use('/img', express.static(path.resolve(__dirname, 'img')));

let data = [
  {
  nombre: 'Hit me hard & soft',
  artista: 'Billie eilish',
  descripcion: 'El tercer álbum de estudio de Billie Eilish, «HIT ME HARD AND SOFT», lanzado a través de Darkroom/Interscope Records, es su trabajo más atrevido hasta la fecha, una colección diversa pero cohesiva de canciones, idealmente escuchadas en su totalidad, de principio a fin. exactamente como sugiere el título del álbum; te golpea fuerte y suave tanto lírica como sonoramente, mientras cambia géneros y desafía tendencias a lo largo del camino. Con la ayuda de su hermano y único colaborador, FINNEAS, la pareja escribió, grabó y produjo el álbum juntos en su ciudad natal de Los Ángeles. Este álbum llega inmediatamente después de sus dos álbumes de gran éxito, «WHEN WE ALL FALL ASLEEP WHERE DO WE GO?» y «Happier Than Ever», y trabaja para desarrollar aún más el mundo de Billie Eilish.<br><br><b>TRACKLIST</b><br><ol><li>Skinny</li><li>Lunch</li><li>Chihiro</li><li>Birds Of A Feather</li><li>Wildflower</li><li>The Greatest</li><li>LAmour De Ma Vie</li><li>The Diner</li><li>Bittersuite</li><li>Blue</li></ol>',
  precio: "32.990",
  stock: 121,
  foto: '/img/hitme.jpg'
},
  {
    nombre: 'When we all fall asleep, where do we go',
    artista: 'Billie eilish',
    descripcion: '<br><br><b>TRACKLIST</b><br><ol><li>!!!!!!!</li><li>Bad Guy</li><li>Xanny</li><li>You Should See Me In A Crown</li><li>All The Good Girls Go To Hell</li><li>Wish You Were Gay</li><li>When The Partys Over</li><li>8</li><li>My Strange Addiction</li><li>Bury A Friend</li><li>Ilomilo</li><li>Listen Before I Go</li><li>I Love You</li><li>Goodbye</li></ol>',
    precio: "31.990",
    stock: 51,
    foto: '/img/whenwe.jpg'
  },
  {
    nombre: 'Dont smile at me',
    artista: 'Billie eilish',
    descripcion: '<br><br><b>TRACKLIST</b><br><ol><li>Copycat</li><li>Idontwannabeyouanymore</li><li>My Boy</li><li>Watch</li><li>Party Favor</li><li>Bellyache</li><li>Ocean Eyes</li><li>Hostage</li></ol>',
    precio: "29.900",
    stock: 2,
    foto: '/img/dontat.jpg'
  },
  {
    nombre: 'Happier than ever',
    artista: 'Billie eilish',
    descripcion: 'LP doble prensado de vinilo, lanzamiento 2021. Billie Eilish lanza su muy esperado segundo álbum, Happier Than Ever. <br><br>Continuando con la tradición de su debut récord, ganador de varios premios Grammy, When We All Fall Asleep, Where Do We Go?, este álbum de estudio de 16 pistas no cuenta con escritores ni productores externos y fue escrito por Billie y su hermano Finneas, quien lo produjo en Los Ángeles.<br><br> Incluye los sencillos exitosos Therefore I Am y My Future.<br><br><b>TRACKLIST</b><br><ol><li>Getting Older</li><li>I Didnt Change My Number</li><li>Billie Bossa Nova</li><li>My Future</li><li>Oxytocin</li><li>Goldwing</li><li>Lost Cause</li><li>Halleys Comet</li><li>Not My Responsibility</li><li>Overheated</li><li>Everybody Dies</li><li>Your Power</li><li>Nda</li><li>Therefore I Am</li><li>Happier Than Ever</li><li>Male Fantasy</li></ol>',
    precio: "33.990",
    stock: 13,
    foto: '/img/happier.jpg'
  },
  {
    nombre: 'ANTI-ICON',
    artista: 'Ghostemane',
    descripcion: '<br><br><b>TRACKLIST</b><br><ol><li>Intro.Destitute</li><li>Vagabond</li><li>Lazaretto</li><li>Sacrilege</li><li>AI</li><li>Fed Up</li><li>The Winds of Change</li><li>Hydrochloride</li><li>Hellrap</li><li>Anti-Social Masochistic Rage [ASMR]</li><li>Melanchoholic</li><li>Calamity</li><li>Falling Down</li></ol>',
    precio: "15.990",
    stock: 1,
    foto: '/img/anti.jpg'
  },
  {
    nombre: 'THAT’S THE SPIRIT',
    artista: 'Bring me the horizon',
    descripcion: '<br><br><b>TRACKLIST</b><br><br><br><b>Side A</b><br><ol><li>Doomed</li><li>Happy Song</li><li>Throne</li><li>True Friends</li><li>AI</li><li>Follow You</li><li>What You Need</li></ol><br><br><b>Side B</b><ol><br><li>Avalanche</li><li>Run</li><li>Drown</li><li>Blasphemy</li><li>AI</li><li>Oh No</li></ol>',
    precio: "54.990",
    stock: 4,
    foto: '/img/spirit.jpg'
  },
  {
    nombre: 'Sempiternal',
    artista: 'Bring me the horizon',
    descripcion: '<br><br><b>TRACKLIST</b><br><ol><li>Can You Feel My Heart</li><li>The House Of Wolves</li><li>Empire (Let Them Sing)</li><li>Sleepwalking</li><li>AI</li><li>Go To Hell For Heavens Sake</li><li>Shadow Moses</li><li>And The Snakes Start To Sing</li><li>Seen It All Before</li><li>Anti-vist</li><li>Crooked Young</li><li>Hospital For Souls</li></ol>',
    precio: "54.990",
    stock: 7,
    foto: '/img/sempiternal.jpg'
  }
];

app.use(express.json());

app.get('/api/vinilos', (req, res) => {
  res.json(data);
});

app.post('/api/comics', (req, res) => {
  console.log('peticion POST con body', req.body);
  data.push(req.body);
  res.send('Datos Guardados');
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
