const services = [
  {
    _id: '1',
    name: 'Pregled i konsultacije',
    image: 'https://poliklinika-galekovic.hr/upload/2016/07/thumbs/redoviti-stomatoloski-pregled-2_5788976656586_960xr.jpg',
    description: 'Osnovni stomatološki pregled i plan lečenja. Detaljan pregled zuba, desni i kompletne usne duplje uz procenu trenutnog stanja i izradu individualnog plana lečenja. Pregled uključuje konsultacije sa stomatologom, preporuke za dalje terapije i savete za pravilnu oralnu higijenu i očuvanje zdravlja zuba.',
    price: 1000,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Popravka zuba',
    image: 'https://dentaloralcentar.com/wp-content/uploads/2021/02/Popravka-zuba.jpg',
    description: 'Korišćenje najkvalitetnijih kompozitnih materijala. Savremena restauracija oštećenih i pokvarenih zuba korišćenjem najkvalitetnijih kompozitnih materijala koji pružaju prirodan izgled, dugotrajnost i maksimalnu funkcionalnost. Tretman se izvodi bezbolno uz pažljivo očuvanje zdravog zubnog tkiva i vraćanje estetike osmeha.',
    price: 2500,
    rating: 5,
    numReviews: 24,
  },
  {
    _id: '3',
    name: 'Izbeljivanje zuba',
    image: 'https://www.stomatolog-beograd.rs/login/images/Ordinacijsko-izbeljivanje-zuba---869cbfe034ffa820e26f2e5ff0bcc574362ac8fa.jpg',
    description: 'Profesionalno izbeljivanje zuba savremenim i bezbednim metodama koje omogućavaju vidljivo belje zube već nakon prvog tretmana. Procedura je potpuno prilagođena pacijentu, bez oštećenja gleđi, uz dugotrajne rezultate i blistav, prirodan osmeh.',
    price: 15000,
    rating: 4,
    numReviews: 4,
  },
   {
        _id: '4',
        name: 'Uklanjanje kamenca',
        image: 'https://www.magicdent.co.rs/wp-content/uploads/2023/06/Kako-skinuti-kamenac-sa-zuba.jpg',
        description:
            'Profesionalno uklanjanje zubnog kamenca i naslaga uz pomoć savremene stomatološke opreme, čime se sprečava nastanak karijesa, upale desni i neprijatnog zadaha. Tretman doprinosi zdravlju zuba i desni, ostavljajući osećaj svežine i čistog osmeha.',
        price: 5000,
        rating: 4,
        numReviews: 8,
    },
    {
        _id: '5',
        name: 'Otisci vilice',
        image: 'https://cabunac.com/wp-content/uploads/2020/12/cabunac-3-shape.png',
        description:
            'Digitalno snimanje vilice i precizno uzimanje otisaka zuba radi detaljne dijagnostike i planiranja terapije. Ova procedura omogućava izradu kvalitetnih protetskih i ortodontskih radova, uz maksimalnu preciznost i prilagođenost svakom pacijentu.',
        price: 6000,
        rating: 4.9,
        numReviews: 10,
    },
   {
        _id: '6',
        name: 'Vađenje zuba',
        image: 'https://dentalhub.rs/static/images/vadjenje-zuba.jpg',
        description: 'Bezbolno vađenje zuba uz primenu lokalne anestezije i savremenih stomatoloških metoda koje omogućavaju brz, siguran i što prijatniji tretman za pacijenta. Nakon intervencije pacijent dobija detaljna uputstva za oporavak i pravilnu negu nakon zahvata.',
        price: 3000,
        rating: 4.6,
        numReviews: 8,
    },
    {
        _id: '7',
        name: 'Zubni implanti',
        image: 'https://www.stomatolog-beograd.rs/login/images/Ugradnja-zubnog-implanta---c135c601331ee11b4dba33248e32e1128d19d21d.jpg',
        description: 'Savremena implantološka terapija koja predstavlja trajno i estetski potpuno prirodno rešenje za nadoknadu jednog ili više izgubljenih zuba. Zubni implanti vraćaju funkcionalnost vilice, stabilnost pri žvakanju i samopouzdanje pacijenta, uz dugotrajan i siguran rezultat.',
        price: 60000,
        rating: 5.0,
        numReviews: 5,
    },
    {
  _id: '8',
  name: 'Ortodonske usluge',
  image: 'https://stomatologbeograd.info/wp-content/uploads/2019/05/fiksna-proteza-metalna.jpg',
  description:
    'Ispravljanje nepravilnog položaja zuba pomoću savremenih fiksnih i mobilnih proteza, uz individualno prilagođen plan terapije za svakog pacijenta. Ortodontski tretman poboljšava estetiku osmeha, pravilan zagrižaj i celokupno zdravlje zuba i vilice.',
  price: 45000,
  rating: 4.5,
  numReviews: 7,
},

{
  _id: '9',
  name: 'Dečija stomatologija',
  image: 'https://bodent.rs/wp-content/uploads/2020/11/mlecni-zubi-kod-dece-bodent-1.jpg',
  description:
    'Preventivni pregledi, edukacija i stomatološki tretmani prilagođeni deci svih uzrasta, uz poseban pristup koji omogućava prijatno i bezbrižno iskustvo kod stomatologa. Cilj tretmana je očuvanje zdravlja mlečnih i stalnih zuba, kao i razvijanje pravilnih navika oralne higijene od najranijeg uzrasta.',
  price: 2000,
  rating: 4.8,
  numReviews: 15,
},

{
  _id: '10',
  name: 'Protetske krunice',
  image: 'https://centraldental.rs/wp-content/uploads/2021/08/krunice.jpg',
  description:
    'Izrada estetskih i funkcionalnih zubnih krunica vrhunskog kvaliteta koje omogućavaju prirodan izgled, dugotrajnost i potpunu funkcionalnost zuba. Krunice se izrađuju od savremenih materijala i prilagođavaju individualnim potrebama pacijenta kako bi se postigao zdrav i estetski savršen osmeh.',
  price: 18000,
  rating: 4.9,
  numReviews: 9,
},
{
  _id: '11',
  name: 'Estetske fasete',
  image: 'https://dr-ast.rs/wp-content/uploads/2022/07/fasete-za-zube-dr-ast-2.jpg',
  description:
    'Keramičke fasete predstavljaju savremeno estetsko rešenje za postizanje savršenog izgleda i prirodne beline zuba. Izrađuju se od visokokvalitetnih materijala, potpuno se prilagođavaju obliku i boji zuba pacijenta i omogućavaju blistav, prirodan i dugotrajan osmeh.',
  price: 22000,
  rating: 4.8,
  numReviews: 10,
},
{
  _id: '12',
  name: 'Hitna stomatološka pomoć',
  image: 'https://bodent.rs/wp-content/uploads/2020/09/hitne-stomatoloske-intervencije-beograd-bodent-3.jpg',
  description:
    'Brza i efikasna stomatološka intervencija kod iznenadnog bola, infekcija, otoka i drugih hitnih stomatoloških problema. Pacijentima je omogućena pravovremena pomoć, ublažavanje bola i adekvatna terapija uz profesionalan pristup i savremene metode lečenja.',
  price: 3000,
  rating: 4.9,
  numReviews: 18,
},
];

export default services;