import { normalize } from 'path';
import type { Question } from '../models/types.ts';

export const words: Question[] = [
  {
    norwegian: 'klamt',
    english: 'clammy',
    spanish: 'pegajoso',
  },
  {
    norwegian: 'du trosser din frykt',
    english: 'you defy your fear',
    spanish: 'tú desafías tu miedo',
  },
  {
    norwegian: 'lytter til',
    english: 'listens to',
    spanish: 'escucha a',
  },
  {
    norwegian: 'tyngre enn jeg trodde',
    english: 'heavier than i thought',
    spanish: 'más pesado de lo que pensaba',
  },
  {
    norwegian: 'søkkbløtt',
    english: 'soaking wet',
    spanish: 'empapado',
  },
  {
    norwegian: 'har snudd',
    english: 'has turned',
    spanish: 'ha girado',
  },
  {
    norwegian: 'overnattingsmulighet',
    english: 'overnight accommodation',
    spanish: 'alojamiento nocturno',
  },
  {
    norwegian: 'på anlegget',
    english: 'at the facility',
    spanish: 'en la instalación',
  },
  {
    norwegian: 'møkklei',
    english: 'fed up',
    spanish: 'harto',
  },
  {
    norwegian: 'høyeste budet vinner',
    english: 'the highest bid wins',
    spanish: 'la oferta más alta gana',
  },
  {
    norwegian: 'at budkrigen',
    english: 'that the bidding war',
    spanish: 'que la guerra de ofertas',
  },
  {
    norwegian: 'litt grådige',
    english: 'a little greedy',
    spanish: 'un poco codicioso',
  },
  {
    norwegian: 'en åndelig',
    english: 'a spiritual',
    spanish: 'un espiritual',
  },
  {
    norwegian: 'jeg følte at hun',
    english: 'i felt that she',
    spanish: 'sentí que ella',
  },
  {
    norwegian: 'hun hoverte litt',
    english: 'she hovered a bit',
    spanish: 'ella flotó un poco',
  },
  {
    norwegian: 'ikke har dratt',
    english: 'has not pulled',
    spanish: 'no ha tirado',
  },
  {
    norwegian: 'hun har blitt hundset',
    english: 'she has been dogged',
    spanish: 'ella ha sido acosada',
  },
  {
    norwegian: 'å være belærende',
    english: 'to be instructive',
    spanish: 'ser instructivo',
  },
  {
    norwegian: 'det er ingen vits',
    english: 'there is no point',
    spanish: 'no hay sentido',
  },
  {
    norwegian: 'ivaretatt',
    english: 'taken care of',
    spanish: 'cuidado',
  },
  {
    norwegian: 'den anerkjenner jeg',
    english: 'i acknowledge that',
    spanish: 'reconozco eso',
  },
  {
    norwegian: 'har brølt til meg',
    english: 'has roared at me',
    spanish: 'me ha rugido',
  },
  {
    norwegian: 'den mestringa',
    english: 'that mastery',
    spanish: 'ese dominio',
  },
  {
    norwegian: 'en hengkøye',
    english: 'a hammock',
    spanish: 'una hamaca',
  },
  {
    norwegian: 'et velsmakende måltid',
    english: 'a tasty meal',
    spanish: 'una comida sabrosa',
  },
  {
    norwegian: 'litt grådige',
    english: 'a little greedy',
    spanish: 'un poco codicioso',
  },
  {
    norwegian: 'en åndelig',
    english: 'a spiritual',
    spanish: 'un espiritual',
  },
  {
    norwegian: 'nådeløse og nådefulle natur',
    english: 'merciless and merciful nature',
    spanish: 'naturaleza despiadada y misericordiosa',
  },
  {
    norwegian: 'rettferdiggjøring',
    english: 'justification',
    spanish: 'justificación',
  },
  {
    norwegian: 'litt hyklersk',
    english: 'a bit hypocritical',
    spanish: 'un poco hipócrita',
  },
  {
    norwegian: 'grådigheta',
    english: 'the greed',
    spanish: 'la codicia',
  },
  {
    norwegian: 'motstanden',
    english: 'the resistance',
    spanish: 'la resistencia',
  },
  {
    norwegian: 'uthvilt',
    english: 'rested',
    spanish: 'descansado',
  },
  {
    norwegian: 'hendelser',
    english: 'events',
    spanish: 'eventos',
  },
  {
    norwegian: 'antakeligvis',
    english: 'probably',
    spanish: 'probablemente',
  },
  {
    norwegian: 'medmenneskelighet',
    english: 'humanity',
    spanish: 'humanidad',
  },
  {
    norwegian: 'å blidgjøre',
    english: 'to appease',
    spanish: 'apaciguar',
  },
  {
    norwegian: 'havbrisen derimot',
    english: 'the sea breeze, however',
    spanish: 'la brisa marina, sin embargo',
  },
  {
    norwegian: 'avkjølende vann',
    english: 'cooling water',
    spanish: 'agua refrescante',
  },
  {
    norwegian: 'nydelige omgivelser',
    english: 'lovely surroundings',
    spanish: 'hermosos alrededores',
  },
  {
    norwegian: 'opplegg',
    english: 'setup',
    spanish: 'configuración',
  },
  {
    norwegian: 'klype deg',
    english: 'pinch you',
    spanish: 'pellizcarte',
  },
  {
    norwegian: 'til sjøs',
    english: 'at sea',
    spanish: 'en el mar',
  },
  {
    norwegian: 'har svidd',
    english: 'has burned',
    spanish: 'ha quemado',
  },
  {
    norwegian: 'å riste av seg',
    english: 'to shake off',
    spanish: 'sacudirse',
  },
  {
    norwegian: 'bare nikker',
    english: 'just nods',
    spanish: 'solo asiente',
  },
  {
    norwegian: 'avsmak på fråtsinga',
    english: 'aversion to gluttony',
    spanish: 'aversión a la gula',
  },
  {
    norwegian: 'samvittighet',
    english: 'conscience',
    spanish: 'conciencia',
  },
  {
    norwegian: 'i kjelleren',
    english: 'in the basement',
    spanish: 'en el sótano',
  },
  {
    norwegian: 'provosert',
    english: 'provoked',
    spanish: 'provocado',
  },
  {
    norwegian: 'avstå',
    english: 'abstain',
    spanish: 'abstenerse',
  },
  {
    norwegian: 'en opptelling',
    english: 'a count',
    spanish: 'un conteo',
  },
  {
    norwegian: 'gruppeavgjørelse',
    english: 'group decision',
    spanish: 'decisión de grupo',
  },
  {
    norwegian: 'etappe gjennom tett jungel',
    english: 'stage through dense jungle',
    spanish: 'etapa a través de la jungla densa',
  },
  {
    norwegian: 'en straff',
    english: 'a punishment',
    spanish: 'un castigo',
  },
  {
    norwegian: 'noe utedass',
    english: 'some outdoor toilet',
    spanish: 'algún baño al aire libre',
  },
  {
    norwegian: 'beløpet',
    english: 'the amount',
    spanish: 'la cantidad',
  },
  {
    norwegian: 'årslønna mi',
    english: 'my annual salary',
    spanish: 'mi salario anual',
  },
  {
    norwegian: 'i hoderegning',
    english: 'in mental arithmetic',
    spanish: 'en aritmética mental',
  },
  {
    norwegian: 'er trukket',
    english: 'is drawn',
    spanish: 'está dibujado',
  },
  {
    norwegian: 'å bruke formuen',
    english: 'to use the fortune',
    spanish: 'usar la fortuna',
  },
  {
    norwegian: 'å samarbeide med forskerne',
    english: 'to collaborate with the researchers',
    spanish: 'colaborar con los investigadores',
  },
  {
    norwegian: 'å utvikle svevebrett',
    english: 'to develop hoverboards',
    spanish: 'desarrollar hoverboards',
  },
  {
    norwegian: 'flygende bil',
    english: 'flying car',
    spanish: 'coche volador',
  },
  {
    norwegian: 'folk gjenkjenner meg',
    english: 'people recognize me',
    spanish: 'la gente me reconoce',
  },
  {
    norwegian: 'ballen går grævle fort',
    english: 'the ball is rolling really fast',
    spanish: 'la pelota está rodando muy rápido',
  },
  {
    norwegian: 'berg-og-dal-baner',
    english: 'roller coasters',
    spanish: 'montañas rusas',
  },
  {
    norwegian: 'ketsjup og sennep',
    english: 'ketchup and mustard',
    spanish: 'ketchup y mostaza',
  },
  {
    norwegian: 'en ordentlig stas',
    english: 'a proper occasion',
    spanish: 'una ocasión adecuada',
  },
  {
    norwegian: 'du kan spille på lag',
    english: 'you can team up',
    spanish: 'puedes formar equipo',
  },
  {
    norwegian: 'ulike funksjonsvariasjoner',
    english: 'different functional variations',
    spanish: 'diferentes variaciones funcionales',
  },
  {
    norwegian: 'hårkur',
    english: 'hair treatment',
    spanish: 'tratamiento capilar',
  },
  {
    norwegian: 'kan du døpe hjembyen din',
    english: 'can you name your hometown',
    spanish: '¿puedes nombrar tu ciudad natal?',
  },
  {
    norwegian: 'det smaker forferdelig og beiskt',
    english: 'it tastes terrible and bitter',
    spanish: 'sabe terrible y amargo',
  },
  {
    norwegian: 'jeg tvinger henne',
    english: 'i force her',
    spanish: 'la obligo',
  },
  {
    norwegian: 'jeg hadde klart',
    english: 'i had managed',
    spanish: 'había logrado',
  },
  {
    norwegian: 'å peke ham ut',
    english: 'to point him out',
    spanish: 'señalarlo',
  },
  {
    norwegian: 'å bli tatt ut',
    english: 'to be taken out',
    spanish: 'ser sacado',
  },
  {
    norwegian: 'landslaget',
    english: 'the national team',
    spanish: 'el equipo nacional',
  },
  {
    norwegian: 'vise trofeet er kjekt',
    english: 'showing the trophy is nice',
    spanish: 'mostrar el trofeo es agradable',
  },
  {
    norwegian: 'gjeveste trofeet',
    english: 'most prestigious trophy',
    spanish: 'trofeo más prestigioso',
  },
  {
    norwegian: 'køle på deg',
    english: 'cool on you',
    spanish: 'enfriar en ti',
  },
  {
    norwegian: 'hvi du godtar',
    english: 'why you accept',
    spanish: 'por qué aceptas',
  },
  {
    norwegian: 'en romantisk aften ut',
    english: 'a romantic evening out',
    spanish: 'una noche romántica fuera',
  },
  {
    norwegian: 'være ganske pinlig',
    english: 'be quite embarrassing',
    spanish: 'ser bastante embarazoso',
  },
  {
    norwegian: 'to jærbuer',
    english: 'two people from Jæren',
    spanish: 'dos personas de Jæren',
  },
  {
    norwegian: 'frir til meg',
    english: 'appeals to me',
    spanish: 'me atrae',
  },
  {
    norwegian: 'det kan fort bli',
    english: 'it can quickly become',
    spanish: 'puede convertirse rápidamente',
  },
  {
    norwegian: 'fjeset ditt på plakaten',
    english: 'your face on the poster',
    spanish: 'tu cara en el cartel',
  },
  {
    norwegian: 'sumo bryter',
    english: 'sumo wrestler',
    spanish: 'luchador de sumo',
  },
  {
    norwegian: 'hogger du mye ved på hytta',
    english: 'do you chop a lot of wood at the cabin',
    spanish: '¿cortas mucha leña en la cabaña?',
  },
  {
    norwegian: 'økse',
    english: 'axe',
    spanish: 'hacha',
  },
  {
    norwegian: 'har du fått kjeft',
    english: 'have you been scolded',
    spanish: '¿te han regañado?',
  },
  {
    norwegian: 'rev meg litt i armen ørene',
    english: 'tore me a little in the arm ears',
    spanish: 'me rasgó un poco en los oídos del brazo',
  },
  {
    norwegian: 'en drittunge hele veien',
    english: 'a brat all the way',
    spanish: 'un mocoso todo el camino',
  },
  {
    norwegian: 'inn med kua',
    english: 'in with the cow',
    spanish: 'dentro con la vaca',
  },
  {
    norwegian: 'er verre enn å slippe inn en elefant',
    english: 'is worse than letting in an elephant',
    spanish: 'es peor que dejar entrar a un elefante',
  },
  {
    norwegian: 'hoftene og lyskene',
    english: 'the hips and groins',
    spanish: 'las caderas y las ingles',
  },
  {
    norwegian: 'dere sklir bortover plenen',
    english: 'you slide across the lawn',
    spanish: 'te deslizas por el césped',
  },
  {
    norwegian: 'du har skåret mål',
    english: 'you have scored goals',
    spanish: 'has marcado goles',
  },
  {
    norwegian: 'ha beskyttelsesdrakt',
    english: 'have protective suit',
    spanish: 'tener traje protector',
  },
  {
    norwegian: 'er grævle vondt',
    english: 'is really painful',
    spanish: 'es realmente doloroso',
  },
  {
    norwegian: 'hoste og sår hals',
    english: 'coughing and sore throat',
    spanish: 'tos y dolor de garganta',
  },
  {
    norwegian: 'i tilfelle du skulle trenge',
    english: 'in case you might need',
    spanish: 'en caso de que puedas necesitar',
  },
  {
    norwegian: 'hanggliders',
    english: 'hang gliders',
    spanish: 'ala delta',
  },
  {
    norwegian: 'en slede',
    english: 'a sled',
    spanish: 'un trineo',
  },
  {
    norwegian: 'akte fra toppen av bakken',
    english: 'sled from the top of the hill',
    spanish: 'trineo desde la cima de la colina',
  },
  {
    norwegian: 'hvordan jeg bearbeider ting',
    english: 'how i process things',
    spanish: 'cómo proceso las cosas',
  },
  {
    norwegian: 'å gå glipp av',
    english: 'to miss out on',
    spanish: 'perderse',
  },
  {
    norwegian: 'avslutning',
    english: 'graduation',
    spanish: 'graduación',
  },
  {
    norwegian: 'rakk du fødselen',
    english: 'did you make it to the birth',
    spanish: '¿llegaste al nacimiento?',
  },
  {
    norwegian: 'veldig godt klokker',
    english: 'very good watches',
    spanish: 'relojes muy buenos',
  },
  {
    norwegian: 'å arve en klokke',
    english: 'to inherit a watch',
    spanish: 'heredar un reloj',
  },
  {
    norwegian: 'fra gudmoren min',
    english: 'from my godmother',
    spanish: 'de mi madrina',
  },
  {
    norwegian: 'du har krutt i støvelen',
    english: 'you have gunpowder in your boot',
    spanish: 'tienes pólvora en tu bota',
  },
  {
    norwegian: 'noen hyss',
    english: 'some tricks',
    spanish: 'algunos trucos',
  },
  {
    norwegian: 'rampestreker',
    english: 'pranks',
    spanish: 'travesuras',
  },
  {
    norwegian: 'sånnefart bombs',
    english: 'such speed bombs',
    spanish: 'tales bombas de velocidad',
  },
  {
    norwegian: 'garderoben',
    english: 'the wardrobe',
    spanish: 'el armario',
  },
  {
    norwegian: 'hos rektor',
    english: 'at the principal',
    spanish: 'en el director',
  },
  {
    norwegian: 'å brydde meg',
    english: 'to care',
    spanish: 'importar',
  },
  {
    norwegian: 'men klarer det ikke alltid',
    english: 'but do not always manage',
    spanish: 'pero no siempre lo logro',
  },
  {
    norwegian: 'en flekk',
    english: 'a spot',
    spanish: 'una mancha',
  },
  {
    norwegian: 'samlinga',
    english: 'the collection',
    spanish: 'la colección',
  },
  {
    norwegian: 'kjekt å ha',
    english: 'nice to have',
    spanish: 'agradable de tener',
  },
  {
    norwegian: 'mye taletid',
    english: 'a lot of speaking time',
    spanish: 'mucho tiempo de habla',
  },
  {
    norwegian: 'er veldig raus',
    english: 'is very generous',
    spanish: 'es muy generoso',
  },
  {
    norwegian: 'slektninger',
    english: 'relatives',
    spanish: 'parientes',
  },
  {
    norwegian: 'lytter til kroppen',
    english: 'listens to the body',
    spanish: 'escucha al cuerpo',
  },
  {
    norwegian: 'oppsøkte en lege',
    english: 'visited a doctor',
    spanish: 'visitó a un médico',
  },
  {
    norwegian: 'på tross av smertene',
    english: 'despite the pain',
    spanish: 'a pesar del dolor',
  },
  {
    norwegian: 'manglende energi',
    english: 'lack of energy',
    spanish: 'falta de energía',
  },
  {
    norwegian: 'på møteinnkallelsen',
    english: 'on the meeting invitation',
    spanish: 'en la invitación a la reunión',
  },
  {
    norwegian: 'på oppdrag fra',
    english: 'on a mission from',
    spanish: 'en una misión de',
  },
  {
    norwegian: 'i forbindelse med hans bortgang',
    english: 'in connection with his passing',
    spanish: 'en relación con su fallecimiento',
  },
  {
    norwegian: 'veldig nysgjerrig',
    english: 'very curious',
    spanish: 'muy curioso',
  },
  {
    norwegian: 'hva dreier dette seg om',
    english: 'what is this about',
    spanish: 'de qué se trata esto',
  },
  {
    norwegian: 'en litt ømfintlig sak',
    english: 'a bit of a sensitive issue',
    spanish: 'un tema un poco delicado',
  },
  {
    norwegian: 'etter avdødes ønske',
    english: "according to the deceased's wishes",
    spanish: 'según los deseos del fallecido',
  },
  {
    norwegian: 'en grundig gjennomgang',
    english: 'a thorough review',
    spanish: 'una revisión exhaustiva',
  },
  {
    norwegian: 'i henhold til den avdødes vilje',
    english: "in accordance with the deceased's wishes",
    spanish: 'de acuerdo con los deseos del fallecido',
  },
  {
    norwegian: 'i enerom',
    english: 'in a private room',
    spanish: 'en una habitación privada',
  },
  {
    norwegian: 'alle sakspapirer du har',
    english: 'all case papers you have',
    spanish: 'todos los documentos del caso que tienes',
  },
  {
    norwegian: 'en lausunge',
    english: 'a rascal',
    spanish: 'un pícaro',
  },
  {
    norwegian: 'stilt seg bak',
    english: 'stood behind',
    spanish: 'se puso detrás de',
  },
  {
    norwegian: 'kjenner verken ham eller familien',
    english: 'know neither him nor the family',
    spanish: 'no conozco ni a él ni a la familia',
  },
  {
    norwegian: 'han har øyensynlig lagt nye planer',
    english: 'he has apparently made new plans',
    spanish: 'aparentemente ha hecho nuevos planes',
  },
  {
    norwegian: 'bare å henge med',
    english: 'just hang on',
    spanish: 'solo aguanta',
  },
  {
    norwegian: 'en form for svindel',
    english: 'a form of fraud',
    spanish: 'una forma de fraude',
  },
  {
    norwegian: 'omdisponeringer i testamentet',
    english: 'reallocations in the will',
    spanish: 'reasignaciones en el testamento',
  },
  {
    norwegian: 'utdrikningslaget',
    english: 'the bachelor party',
    spanish: 'la despedida de soltero',
  },
  {
    norwegian: 'hun er kliss lik farmor',
    english: 'she is just like grandmother',
    spanish: 'ella es igual que la abuela',
  },
  {
    norwegian: 'utseendemessig',
    english: 'appearance-wise',
    spanish: 'en cuanto a apariencia',
  },
  {
    norwegian: 'hengefjeset',
    english: 'the hanging face',
    spanish: 'la cara colgante',
  },
  {
    norwegian: 'erklært utilregnelig',
    english: 'declared unaccountable',
    spanish: 'declarado irresponsable',
  },
  {
    norwegian: 'ugyldiggjøre testamentet',
    english: 'invalidate the will',
    spanish: 'anular el testamento',
  },
  {
    norwegian: 'å få ugyldiggjort et testament',
    english: 'to have a will invalidated',
    spanish: 'hacer que un testamento sea anulado',
  },
  {
    norwegian: 'livsarven sin',
    english: 'his life inheritance',
    spanish: 'su herencia de vida',
  },
  {
    norwegian: 'en fremme ungen',
    english: 'a premature baby',
    spanish: 'un bebé prematuro',
  },
  {
    norwegian: 'en diskret måte',
    english: 'a discreet way',
    spanish: 'una manera discreta',
  },
  {
    norwegian: 'et ettermæle',
    english: 'a legacy',
    spanish: 'un legado',
  },
  {
    norwegian: 'skal bli husket for',
    english: 'will be remembered for',
    spanish: 'será recordado por',
  },
  {
    norwegian: 'gå enda en runde',
    english: 'go another round',
    spanish: 'ir otra ronda',
  },
  {
    norwegian: 'drittkasting',
    english: 'mudslinging',
    spanish: 'lanzamiento de barro',
  },
  {
    norwegian: 'trynet mitt på forsiden',
    english: 'my face on the front page',
    spanish: 'mi cara en la portada',
  },
  {
    norwegian: 'omdømmet sitt',
    english: 'its reputation',
    spanish: 'su reputación',
  },
  {
    norwegian: 'innkalt til styremøte',
    english: 'called to board meeting',
    spanish: 'llamado a la reunión de la junta',
  },
  {
    norwegian: 'jeg ordner det',
    english: 'i will arrange it',
    spanish: 'lo arreglaré',
  },
  {
    norwegian: 'full forståelse',
    english: 'full understanding',
    spanish: 'comprensión total',
  },
  {
    norwegian: 'ikke for evig',
    english: 'not forever',
    spanish: 'no para siempre',
  },
  {
    norwegian: 'en utålmodig sjel',
    english: 'an impatient soul',
    spanish: 'un alma impaciente',
  },
  {
    norwegian: 'i nattbordskuffen',
    english: 'in the nightstand drawer',
    spanish: 'en el cajón de la mesita de noche',
  },
  {
    norwegian: 'er glidemiddel',
    english: 'is lubricant',
    spanish: 'es lubricante',
  },
  {
    norwegian: 'det er modig',
    english: 'it is brave',
    spanish: 'es valiente',
  },
  {
    norwegian: 'rykter om deg',
    english: 'rumors about you',
    spanish: 'rumores sobre ti',
  },
  {
    norwegian: 'budskapet ditt',
    english: 'your message',
    spanish: 'tu mensaje',
  },
  {
    norwegian: 'stått',
    english: 'stood',
    spanish: 'de pie',
  },
  {
    norwegian: 'en annen virkelighet',
    english: 'another reality',
    spanish: 'otra realidad',
  },
  {
    norwegian: 'er blitt mobba',
    english: 'has been bullied',
    spanish: 'ha sido acosado',
  },
  {
    norwegian: 'i syvende himmel',
    english: 'in seventh heaven',
    spanish: 'en el séptimo cielo',
  },
  {
    norwegian: 'utseendet ditt',
    english: 'your appearance',
    spanish: 'tu apariencia',
  },
  {
    norwegian: 'er forderdelig vondt',
    english: 'is terribly painful',
    spanish: 'es terriblemente doloroso',
  },
  {
    norwegian: 'var visstnok',
    english: 'was apparently',
    spanish: 'era aparentemente',
  },
  {
    norwegian: 'en sånn sønn selv',
    english: 'a son like that himself',
    spanish: 'un hijo así mismo',
  },
  {
    norwegian: 'å trigga meg',
    english: 'to trigger me',
    spanish: 'para desencadenarme',
  },
  {
    norwegian: 'gang på gang',
    english: 'time and time again',
    spanish: 'una y otra vez',
  },
  {
    norwegian: 'overflatisk',
    english: 'superficial',
    spanish: 'superficial',
  },
  {
    norwegian: 'utfordrer meg',
    english: 'challenges me',
    spanish: 'me desafía',
  },
  {
    norwegian: 'blir litt drøyt',
    english: 'gets a bit extreme',
    spanish: 'se vuelve un poco extremo',
  },
  {
    norwegian: 'mødre er gode på å',
    english: 'mothers are good at',
    spanish: 'las madres son buenas en',
  },
  {
    norwegian: 'et frekke motsvar',
    english: 'a cheeky response',
    spanish: 'una respuesta descarada',
  },
  {
    norwegian: 'nesnalobber',
    english: 'nasal lobes',
    spanish: 'lóbulos nasales',
  },
  {
    norwegian: 'pangstart',
    english: 'bang start',
    spanish: 'inicio explosivo',
  },
  {
    norwegian: 'en sketsj fra',
    english: 'a sketch from',
    spanish: 'un boceto de',
  },
  {
    norwegian: 'vi lo mye den dagen',
    english: 'we laughed a lot that day',
    spanish: 'nos reímos mucho ese día',
  },
  {
    norwegian: 'litt sint',
    english: 'a little angry',
    spanish: 'un poco enojado',
  },
  {
    norwegian: 'å grunnlegge din egen munskole',
    english: 'to found your own language school',
    spanish: 'fundar tu propia escuela de idiomas',
  },
  {
    norwegian: 'munk hos meg',
    english: 'monk with me',
    spanish: 'monje conmigo',
  },
  {
    norwegian: 'sinnemestringskurset ditt',
    english: 'your anger management course',
    spanish: 'tu curso de manejo de la ira',
  },
  {
    norwegian: 'kan jo vurdere det',
    english: 'can consider it',
    spanish: 'puede considerarlo',
  },
  {
    norwegian: 'var fingrene for klamme',
    english: 'the fingers were too clammy',
    spanish: 'los dedos estaban demasiado pegajosos',
  },
  {
    norwegian: 'de bare glei ut av meg',
    english: 'they just slipped out of me',
    spanish: 'simplemente se me escaparon',
  },
  {
    norwegian: 'kjempestas',
    english: 'great fun',
    spanish: 'gran diversión',
  },
  {
    norwegian: 'stegene ennå',
    english: 'the steps yet',
    spanish: 'los pasos aún',
  },
  {
    norwegian: 'vals',
    english: 'waltz',
    spanish: 'vals',
  },
  {
    norwegian: 'rabagast',
    english: 'rascal',
    spanish: 'pícaro',
  },
  {
    norwegian: 'tjukke briller',
    english: 'thick glasses',
    spanish: 'gafas gruesas',
  },
  {
    norwegian: 'jevnt og trutt',
    english: 'steady and persistent',
    spanish: 'constante y persistente',
  },
  {
    norwegian: 'påpakning',
    english: 'reprimand',
    spanish: 'reprimenda',
  },
  {
    norwegian: 'en masekråke',
    english: 'a nagging crow',
    spanish: 'un cuervo molesto',
  },
  {
    norwegian: 'tungrock',
    english: 'heavy rock',
    spanish: 'rock pesado',
  },
  {
    norwegian: 'blitt anmeldt',
    english: 'been reported',
    spanish: 'ha sido reportado',
  },
  {
    norwegian: 'ikke vitsen god',
    english: 'not worth it',
    spanish: 'no vale la pena',
  },
  {
    norwegian: 'altså det var seigt',
    english: 'so it was tough',
    spanish: 'así que fue difícil',
  },
  {
    norwegian: 'mer hensynsfull',
    english: 'more considerate',
    spanish: 'más considerado',
  },
  {
    norwegian: 'mehenkje',
    english: 'meanwhile',
    spanish: 'mientras tanto',
  },
  {
    norwegian: 'sa fatteren',
    english: 'said the father',
    spanish: 'dijo el padre',
  },
  {
    norwegian: 'en rotekopp',
    english: 'a messy person',
    spanish: 'una persona desordenada',
  },
  {
    norwegian: 'ute av min liga',
    english: 'out of my league',
    spanish: 'fuera de mi liga',
  },
  {
    norwegian: 'plystringa',
    english: 'the whistling',
    spanish: 'el silbido',
  },
  {
    norwegian: 'fremsto trygg',
    english: 'appeared confident',
    spanish: 'parecía confiado',
  },
  {
    norwegian: 'hater når det skjer',
    english: 'hate when it happens',
    spanish: 'odio cuando sucede',
  },
  {
    norwegian: 'kraft og futt',
    english: 'power and pep',
    spanish: 'poder y energía',
  },
  {
    norwegian: 'å være frekk',
    english: 'to be cheeky',
    spanish: 'ser descarado',
  },
  {
    norwegian: 'du er gjerrig',
    english: 'you are stingy',
    spanish: 'eres tacaño',
  },
  {
    norwegian: 'sinte sanger',
    english: 'angry songs',
    spanish: 'canciones enojadas',
  },
  {
    norwegian: 'er røffe saker',
    english: 'are rough things',
    spanish: 'son cosas difíciles',
  },
  {
    norwegian: 'streng',
    english: 'strict',
    spanish: 'estricto',
  },
  {
    norwegian: 'mykere tone',
    english: 'softer tone',
    spanish: 'tono más suave',
  },
  {
    norwegian: 'kan lene seg inntil',
    english: 'can lean against',
    spanish: 'puede apoyarse contra',
  },
  {
    norwegian: 'trøste',
    english: 'comfort',
    spanish: 'consolar',
  },
  {
    norwegian: 'helt strålende',
    english: 'absolutely brilliant',
    spanish: 'absolutamente brillante',
  },
  {
    norwegian: 'det er de pliktoppfyllende',
    english: 'it is the dutiful',
    spanish: 'son los cumplidores',
  },
  {
    norwegian: 'skifta',
    english: 'changed',
    spanish: 'cambiado',
  },
  {
    norwegian: 'hvilket årskull',
    english: 'which year group',
    spanish: 'qué grupo de año',
  },
  {
    norwegian: 'forige pass',
    english: 'previous passport',
    spanish: 'pasaporte anterior',
  },
  {
    norwegian: 'bak skranken',
    english: 'behind the counter',
    spanish: 'detrás del mostrador',
  },
  {
    norwegian: 'tygde tyggis',
    english: 'chewed gum',
    spanish: 'chicle masticado',
  },
  {
    norwegian: 'har du krympa',
    english: 'have you shrunk',
    spanish: '¿te has encogido?',
  },
  {
    norwegian: 'overdrevent',
    english: 'exaggerated',
    spanish: 'exagerado',
  },
  {
    norwegian: 'skolegården',
    english: 'the schoolyard',
    spanish: 'el patio de la escuela',
  },
  {
    norwegian: 'ungdommens kulturmønstring',
    english: "the youth's cultural showcase",
    spanish: 'la exhibición cultural de la juventud',
  },
  {
    norwegian: 'det er provoserende',
    english: 'it is provocative',
    spanish: 'es provocativo',
  },
  {
    norwegian: 'fisken karpe',
    english: 'the fish carp',
    spanish: 'la carpa de pescado',
  },
  {
    norwegian: 'det innser jeg nå',
    english: 'i realize that now',
    spanish: 'me doy cuenta de eso ahora',
  },
  {
    norwegian: 'rundt mye bråk',
    english: 'around a lot of noise',
    spanish: 'alrededor de mucho ruido',
  },
  {
    norwegian: 'er veldig lite sossete',
    english: 'is very posh',
    spanish: 'es muy elegante',
  },
  {
    norwegian: 'skulle bli optiker',
    english: 'was going to be an optician',
    spanish: 'iba a ser óptico',
  },
  {
    norwegian: 'de hadde skaffet meg',
    english: 'they had gotten me',
    spanish: 'me habían conseguido',
  },
  {
    norwegian: 'syntes jeg var tøff',
    english: 'thought i was tough',
    spanish: 'pensó que era duro',
  },
  {
    norwegian: 'jeg var skikkelig på trynet',
    english: 'i was really on my face',
    spanish: 'estaba realmente en mi cara',
  },
  {
    norwegian: 'inderes barn',
    english: 'inner children',
    spanish: 'niños interiores',
  },
  {
    norwegian: 'er leger og farmasøyter',
    english: 'are doctors and pharmacists',
    spanish: 'son médicos y farmacéuticos',
  },
  {
    norwegian: 'i forhold til meg',
    english: 'in relation to me',
    spanish: 'en relación conmigo',
  },
  {
    norwegian: 'å pynte seg',
    english: 'to dress up',
    spanish: 'vestirse elegante',
  },
  {
    norwegian: 'litt jålete',
    english: 'a bit pretentious',
    spanish: 'un poco pretencioso',
  },
  {
    norwegian: 'stæsje deg litt opp',
    english: 'dress you up a bit',
    spanish: 'vestirte un poco',
  },
  {
    norwegian: 'fine øredobber',
    english: 'nice earrings',
    spanish: 'bonitos pendientes',
  },
  {
    norwegian: 'gliterende genser',
    english: 'sparkling sweater',
    spanish: 'suéter brillante',
  },
  {
    norwegian: 'omgivelsene',
    english: 'the surroundings',
    spanish: 'los alrededores',
  },
  {
    norwegian: 'en fin egenskap',
    english: 'a nice trait',
    spanish: 'un rasgo agradable',
  },
  {
    norwegian: 'å gidde å fikse seg litt',
    english: 'to bother to fix yourself up a bit',
    spanish: 'molestarse en arreglarse un poco',
  },
  {
    norwegian: 'pikeskjørte',
    english: 'pleated skirt',
    spanish: 'falda plisada',
  },
  {
    norwegian: 'rundt blokka',
    english: 'around the block',
    spanish: 'alrededor de la cuadra',
  },
  {
    norwegian: 'vestkantuniformen',
    english: 'the west side uniform',
    spanish: 'el uniforme del lado oeste',
  },
  {
    norwegian: 'jeg vrengte meg',
    english: 'i wrenched myself',
    spanish: 'me retorcí',
  },
  {
    norwegian: 'i skittentøyskurven',
    english: 'in the laundry basket',
    spanish: 'en la cesta de la ropa sucia',
  },
  {
    norwegian: 'bakpå skjorta',
    english: 'on the back of the shirt',
    spanish: 'en la parte trasera de la camisa',
  },
  {
    norwegian: 'sydd den på',
    english: 'sewn it on',
    spanish: 'cosido en',
  },
  {
    norwegian: 'så vanskeligheter med',
    english: 'had difficulties with',
    spanish: 'tuvo dificultades con',
  },
  {
    norwegian: 'annerledeshet',
    english: 'otherness',
    spanish: 'otredad',
  },
  {
    norwegian: 'et gjennombrudd',
    english: 'a breakthrough',
    spanish: 'un avance',
  },
  {
    norwegian: 'hyttete måten',
    english: 'cabin-like manner',
    spanish: 'manera de cabaña',
  },
  {
    norwegian: 'det løsna mye for meg',
    english: 'it loosened up a lot for me',
    spanish: 'se aflojó mucho para mí',
  },
  {
    norwegian: 'vi skulle skrive låter',
    english: 'we were going to write songs',
    spanish: 'íbamos a escribir canciones',
  },
  {
    norwegian: 'jeg er utlending',
    english: 'i am a foreigner',
    spanish: 'soy un extranjero',
  },
  {
    norwegian: 'jeg vil lære deg',
    english: 'i want to teach you',
    spanish: 'quiero enseñarte',
  },
  {
    norwegian: 'å påvirke fellesskapet',
    english: 'to influence the community',
    spanish: 'influir en la comunidad',
  },
  {
    norwegian: 'i fastelavnsboller',
    english: 'in fastelavn buns',
    spanish: 'en bollos de fastelavn',
  },
  {
    norwegian: 'hvordan taklet du rasismen',
    english: 'how did you handle the racism',
    spanish: '¿cómo manejaste el racismo?',
  },
  {
    norwegian: 'en apelyd',
    english: 'a monkey sound',
    spanish: 'un sonido de mono',
  },
  {
    norwegian: 'å børste det av seg',
    english: 'to brush it off',
    spanish: 'despejarlo',
  },
  {
    norwegian: 'som er litt rørende',
    english: 'which is a bit touching',
    spanish: 'lo cual es un poco conmovedor',
  },
  {
    norwegian: 'drakk du vann fra krana',
    english: 'did you drink water from the tap',
    spanish: '¿bebiste agua del grifo?',
  },
  {
    norwegian: 'det tør jeg ikke',
    english: "i don't dare",
    spanish: 'no me atrevo',
  },
  {
    norwegian: 'bra låtvalg',
    english: 'good song choice',
    spanish: 'buena elección de canción',
  },
  {
    norwegian: 'jeg er storfornøyd',
    english: 'i am very satisfied',
    spanish: 'estoy muy satisfecho',
  },
  {
    norwegian: 'i en annen verdensdel',
    english: 'in another continent',
    spanish: 'en otro continente',
  },
  {
    norwegian: 'et kult refreng',
    english: 'a cool chorus',
    spanish: 'un coro genial',
  },
  {
    norwegian: 'veldig digg posisjon',
    english: 'very nice position',
    spanish: 'posición muy agradable',
  },
  {
    norwegian: 'sett av tid til',
    english: 'set aside time for',
    spanish: 'reservar tiempo para',
  },
  {
    norwegian: 'nevø og niese',
    english: 'nephew and niece',
    spanish: 'sobrino y sobrina',
  },
  {
    norwegian: 'en stor begivenhet',
    english: 'a big event',
    spanish: 'un gran evento',
  },
  {
    norwegian: 'å brette klær',
    english: 'to fold clothes',
    spanish: 'doblar la ropa',
  },
  {
    norwegian: 'rett i dass',
    english: 'straight to the toilet',
    spanish: 'directo al inodoro',
  },
  {
    norwegian: 'jeg tar fram et plagg',
    english: 'i take out a garment',
    spanish: 'saco una prenda',
  },
  {
    norwegian: 'er en rotekopp',
    english: 'is a messy person',
    spanish: 'es una persona desordenada',
  },
  {
    norwegian: 'er blitt fortalt',
    english: 'has been told',
    spanish: 'ha sido dicho',
  },
  {
    norwegian: 'har ført til at jeg sitter her nå',
    english: 'has led to me sitting here now',
    spanish: 'ha llevado a que me siente aquí ahora',
  },
  {
    norwegian: 'noen avgjørelser',
    english: 'some decisions',
    spanish: 'algunas decisiones',
  },
  {
    norwegian: 'noe sammenhengende',
    english: 'something coherent',
    spanish: 'algo coherente',
  },
  {
    norwegian: 'kjærlighetsfronten',
    english: 'the love front',
    spanish: 'el frente del amor',
  },
  {
    norwegian: 'gir ut låter',
    english: 'releases songs',
    spanish: 'lanza canciones',
  },
  {
    norwegian: 'ikke er så sunt',
    english: 'is not so healthy',
    spanish: 'no es tan saludable',
  },
  {
    norwegian: 'å bli forstått',
    english: 'to be understood',
    spanish: 'ser entendido',
  },
  {
    norwegian: 'at noen godtar deg',
    english: 'that someone accepts you',
    spanish: 'que alguien te acepte',
  },
  {
    norwegian: 'en slags trygghet',
    english: 'a kind of security',
    spanish: 'una especie de seguridad',
  },
  {
    norwegian: 'kan få trøst',
    english: 'can get comfort',
    spanish: 'puede obtener consuelo',
  },
  {
    norwegian: 'venter på at skjebnen skal føre den rette til meg',
    english: 'waiting for fate to bring the right one to me',
    spanish: 'esperando que el destino me traiga al indicado',
  },
  {
    norwegian: 'så kommer de foran karrieren',
    english: 'then they come before the career',
    spanish: 'luego vienen antes de la carrera',
  },
  {
    norwegian: 'innebærer å trille rundt på en koffert',
    english: 'involves rolling around a suitcase',
    spanish: 'implica rodar una maleta',
  },
  {
    norwegian: 'den sangen handler om',
    english: 'that song is about',
    spanish: 'esa canción trata de',
  },
  {
    norwegian: 'er strømlinjeforma',
    english: 'is streamlined',
    spanish: 'está optimizado',
  },
  {
    norwegian: 'nye sedler',
    english: 'new bills',
    spanish: 'billetes nuevos',
  },
  {
    norwegian: 'oppmerksomhet rundt deg',
    english: 'attention around you',
    spanish: 'atención a tu alrededor',
  },
  {
    norwegian: 'folk og røvere',
    english: 'people and robbers',
    spanish: 'gente y ladrones',
  },
  {
    norwegian: 'de stjal blant annet',
    english: 'they stole among other things',
    spanish: 'robaron entre otras cosas',
  },
  {
    norwegian: 'skinke og bakervarer',
    english: 'ham and baked goods',
    spanish: 'jamón y productos horneados',
  },
  {
    norwegian: 'å havne bak murene',
    english: 'to end up behind bars',
    spanish: 'terminar entre rejas',
  },
  {
    norwegian: 'så røk førerkortet',
    english: 'then the driving license broke',
    spanish: 'entonces se rompió la licencia de conducir',
  },
  {
    norwegian: 'som en prest etterpå',
    english: 'like a priest afterwards',
    spanish: 'como un sacerdote después',
  },
  {
    norwegian: 'forandring fryder',
    english: 'change is delightful',
    spanish: 'el cambio es encantador',
  },
  {
    norwegian: 'stort ratt',
    english: 'big steering wheel',
    spanish: 'volante grande',
  },
  {
    norwegian: 'jeg arvet et maleri',
    english: 'i inherited a painting',
    spanish: 'heredé una pintura',
  },
  {
    norwegian: 'overfører aksjene',
    english: 'transfers the shares',
    spanish: 'transfiere las acciones',
  },
  {
    norwegian: 'gjøre offentlig',
    english: 'make public',
    spanish: 'hacer público',
  },
  {
    norwegian: 'er ubehagelig',
    english: 'is unpleasant',
    spanish: 'es desagradable',
  },
  {
    norwegian: 'jeg har grua meg til',
    english: 'i have dreaded',
    spanish: 'he temido',
  },
  {
    norwegian: 'har vært i mediene',
    english: 'has been in the media',
    spanish: 'ha estado en los medios',
  },
  {
    norwegian: 'å lykkes i modellbransjen',
    english: 'to succeed in the modeling industry',
    spanish: 'tener éxito en la industria del modelaje',
  },
  {
    norwegian: 'kan late som man er en annen person',
    english: 'can pretend to be another person',
    spanish: 'puede pretender ser otra persona',
  },
  {
    norwegian: 'eksponeringsterapi',
    english: 'exposure therapy',
    spanish: 'terapia de exposición',
  },
  {
    norwegian: 'delvis',
    english: 'partially',
    spanish: 'parcialmente',
  },
  {
    norwegian: 'frykten du har',
    english: 'the fear you have',
    spanish: 'el miedo que tienes',
  },
  {
    norwegian: 'dess ufarligere blir det',
    english: 'the less dangerous it becomes',
    spanish: 'cuanto menos peligroso se vuelve',
  },
  {
    norwegian: 'har du en nys',
    english: 'do you have a sneeze',
    spanish: '¿tienes un estornudo?',
  },
  {
    norwegian: 'kjole og skjørt',
    english: 'dress and skirt',
    spanish: 'vestido y falda',
  },
  {
    norwegian: 'hevede øynebryn',
    english: 'raised eyebrows',
    spanish: 'cejas levantadas',
  },
  {
    norwegian: 'lakserosa',
    english: 'salmon pink',
    spanish: 'rosa salmón',
  },
  {
    norwegian: 'du hadde turt',
    english: 'you had dared',
    spanish: 'te habías atrevido',
  },
  {
    norwegian: 'ikke så langt unna',
    english: 'not so far away',
    spanish: 'no tan lejos',
  },
  {
    norwegian: 'ofra veldig mye',
    english: 'sacrificed a lot',
    spanish: 'sacrificado mucho',
  },
  {
    norwegian: 'nesten annenhver helg',
    english: 'almost every other weekend',
    spanish: 'casi todos los fines de semana',
  },
  {
    norwegian: 'oppfylt',
    english: 'fulfilled',
    spanish: 'cumplido',
  },
  {
    norwegian: 'få fullført',
    english: 'get completed',
    spanish: 'completar',
  },
  {
    norwegian: 'bodde jeg på rektors kontor',
    english: 'i lived in the principal’s office',
    spanish: 'vivía en la oficina del director',
  },
  {
    norwegian: 'på lakseoppdrett',
    english: 'in salmon farming',
    spanish: 'en la cría de salmón',
  },
  {
    norwegian: 'sjøskapninger',
    english: 'sea creatures',
    spanish: 'criaturas marinas',
  },
  {
    norwegian: 'i merdene på fjorden',
    english: 'in the pens on the fjord',
    spanish: 'en los corrales del fiordo',
  },
  {
    norwegian: 'er omtrent likt',
    english: 'is about the same',
    spanish: 'es más o menos lo mismo',
  },
  {
    norwegian: 'den lakselusen kan jo spre seg',
    english: 'the salmon louse can spread',
    spanish: 'el piojo de mar puede extenderse',
  },
  {
    norwegian: 'det kan få sår',
    english: 'it can get sores',
    spanish: 'puede tener llagas',
  },
  {
    norwegian: 'blir svakere',
    english: 'becomes weaker',
    spanish: 'se vuelve más débil',
  },
  {
    norwegian: 'på lakseoppdrett',
    english: 'in salmon farming',
    spanish: 'en la cría de salmón',
  },
  {
    norwegian: 'i stor skala',
    english: 'on a large scale',
    spanish: 'a gran escala',
  },
  {
    norwegian: 'grubler på ting',
    english: 'pondering things',
    spanish: 'reflexionando sobre las cosas',
  },
  {
    norwegian: 'grubling fører til',
    english: 'pondering leads to',
    spanish: 'la reflexión conduce a',
  },
  {
    norwegian: 'noe særlig godt',
    english: 'something particularly good',
    spanish: 'algo particularmente bueno',
  },
  {
    norwegian: 'ikke er reelt',
    english: 'is not real',
    spanish: 'no es real',
  },
  {
    norwegian: 'fremstår for andre',
    english: 'appears to others',
    spanish: 'aparece a los demás',
  },
  {
    norwegian: 'som har vært verre',
    english: 'that has been worse',
    spanish: 'que ha sido peor',
  },
  {
    norwegian: 'har du noen teknikker',
    english: 'do you have any techniques',
    spanish: '¿tienes alguna técnica?',
  },
  {
    norwegian: 'å gjøre det verre',
    english: 'to make it worse',
    spanish: 'empeorarlo',
  },
  {
    norwegian: 'å gruble for mye',
    english: 'to ponder too much',
    spanish: 'reflexionar demasiado',
  },
  {
    norwegian: 'har du trent markløft',
    english: 'have you trained deadlift',
    spanish: '¿has entrenado peso muerto?',
  },
  {
    norwegian: 'en treningsøkt',
    english: 'a workout session',
    spanish: 'una sesión de entrenamiento',
  },
  {
    norwegian: 'på et utested',
    english: 'at a nightclub',
    spanish: 'en un club nocturno',
  },
  {
    norwegian: 'har forberedt meg',
    english: 'have prepared myself',
    spanish: 'me he preparado',
  },
  {
    norwegian: 'en hyllest',
    english: 'a tribute',
    spanish: 'un tributo',
  },
  {
    norwegian: 'jeg ble rørt',
    english: 'i was touched',
    spanish: 'me conmovió',
  },
  {
    norwegian: 'et par hakk under',
    english: 'a couple of notches below',
    spanish: 'un par de niveles por debajo',
  },
  {
    norwegian: 'på kassegitar',
    english: 'on acoustic guitar',
    spanish: 'en guitarra acústica',
  },
  {
    norwegian: 'oppfinnelser',
    english: 'inventions',
    spanish: 'inventos',
  },
  {
    norwegian: 'er veldig høylytt',
    english: 'is very loud',
    spanish: 'es muy ruidoso',
  },
  {
    norwegian: 'kan man rømme fra seg',
    english: 'can one escape from oneself',
    spanish: '¿puede uno escapar de sí mismo?',
  },
  {
    norwegian: 'hold deg positiv nå',
    english: 'stay positive now',
    spanish: 'mantente positivo ahora',
  },
  {
    norwegian: 'jeg rykter om deg',
    english: 'i rumor about you',
    spanish: 'yo rumor sobre ti',
  },
  {
    norwegian: 'en dansegalla',
    english: 'a dance gala',
    spanish: 'una gala de baile',
  },
  {
    norwegian: 'beste poseringa',
    english: 'best pose',
    spanish: 'mejor pose',
  },
  {
    norwegian: 'en som er sjenert',
    english: 'one who is shy',
    spanish: 'uno que es tímido',
  },
  {
    norwegian: 'streng på at',
    english: 'strict that',
    spanish: 'estricto que',
  },
  {
    norwegian: 'jeg måtte vise leg sist',
    english: 'i had to show id last',
    spanish: 'tuve que mostrar identificación por última vez',
  },
  {
    norwegian: 'hvordan dukka du opp her',
    english: 'how did you show up here',
    spanish: '¿cómo apareciste aquí?',
  },
  {
    norwegian: 'et sketsjprogram',
    english: 'a sketch show',
    spanish: 'un programa de bocetos',
  },
  {
    norwegian: 'du naila det',
    english: 'you nailed it',
    spanish: 'lo clavaste',
  },
  {
    norwegian: 'jeg er konfliktsky',
    english: 'i am conflict-averse',
    spanish: 'soy reacio al conflicto',
  },
  {
    norwegian: 'jeg har schmækt',
    english: 'i have charm',
    spanish: 'tengo encanto',
  },
  {
    norwegian: 'på meg løstennene',
    english: 'on me the dentures',
    spanish: 'en mí las dentaduras postizas',
  },
  {
    norwegian: 'har du sneket sammen',
    english: 'have you sneaked together',
    spanish: '¿te has colado juntos?',
  },
  {
    norwegian: 'en fyr helt til Syden',
    english: 'a guy all the way to the South',
    spanish: 'un tipo hasta el sur',
  },
  {
    norwegian: 'det er bare jug',
    english: 'it is just lies',
    spanish: 'son solo mentiras',
  },
  {
    norwegian: 'ble ikke oss',
    english: 'did not become us',
    spanish: 'no nos convertimos en nosotros',
  },
  {
    norwegian: 'har stalket sjefen min',
    english: 'have stalked my boss',
    spanish: 'he acosado a mi jefe',
  },
  {
    norwegian: 'da gjemte jeg meg',
    english: 'then i hid',
    spanish: 'entonces me escondí',
  },
  {
    norwegian: 'endte opp med å bli',
    english: 'ended up becoming',
    spanish: 'terminó convirtiéndose',
  },
  {
    norwegian: 'så gæren at jeg fulgte etter',
    english: 'so crazy that i followed',
    spanish: 'tan loco que seguí',
  },
  {
    norwegian: 'en etterforsker',
    english: 'an investigator',
    spanish: 'un investigador',
  },
  {
    norwegian: 'outsmarter alle skurkene',
    english: 'outsmarts all the villains',
    spanish: 'supera a todos los villanos',
  },
  {
    norwegian: 'du hadde leppa inne',
    english: 'you had the lip in',
    spanish: 'tenías el labio adentro',
  },
  {
    norwegian: 'jeg har det på plass',
    english: 'i have it in place',
    spanish: 'lo tengo en su lugar',
  },
  {
    norwegian: 'jeg er nøye på',
    english: 'i am careful about',
    spanish: 'soy cuidadoso con',
  },
  {
    norwegian: 'påfører barna mina',
    english: 'inflict on my children',
    spanish: 'infligir a mis hijos',
  },
  {
    norwegian: 'presis er for sent',
    english: 'precisely is too late',
    spanish: 'precisamente es demasiado tarde',
  },
  {
    norwegian: 'for tidlig til ting',
    english: 'too early for things',
    spanish: 'demasiado temprano para las cosas',
  },
  {
    norwegian: 'so ro lillemann',
    english: 'so calm little man',
    spanish: 'así que calma pequeño hombre',
  },
  {
    norwegian: 'jeg løstenner',
    english: 'i dentures',
    spanish: 'yo dentaduras postizas',
  },
  {
    norwegian: 'vært innblandet i',
    english: 'been involved in',
    spanish: 'estado involucrado en',
  },
  {
    norwegian: 'en barnevernspedagog',
    english: 'a child welfare educator',
    spanish: 'un educador de bienestar infantil',
  },
  {
    norwegian: 'barnevernet',
    english: 'child welfare services',
    spanish: 'servicios de bienestar infantil',
  },
  {
    norwegian: 'i avisene',
    english: 'in the newspapers',
    spanish: 'en los periódicos',
  },
  {
    norwegian: 'å kjefte litt',
    english: 'to scold a little',
    spanish: 'regañar un poco',
  },
  {
    norwegian: 'årets sitat',
    english: 'quote of the year',
    spanish: 'cita del año',
  },
  {
    norwegian: 'skække barn',
    english: 'naughty child',
    spanish: 'niño travieso',
  },
  {
    norwegian: 'i en grøft og er fulle',
    english: 'in a ditch and are drunk',
    spanish: 'en una zanja y están borrachos',
  },
  {
    norwegian: 'i en grøftekant',
    english: 'in a ditch',
    spanish: 'en una zanja',
  },
  {
    norwegian: 'yndlingssangen din',
    english: 'your favorite song',
    spanish: 'tu canción favorita',
  },
  {
    norwegian: 'ummidelbart',
    english: 'immediately',
    spanish: 'inmediatamente',
  },
  {
    norwegian: 'midlertidig',
    english: 'temporarily',
    spanish: 'temporalmente',
  },
  {
    norwegian: 'tar imot deg',
    english: 'welcomes you',
    spanish: 'te da la bienvenida',
  },
  {
    norwegian: 'første blikk',
    english: 'first glance',
    spanish: 'primer vistazo',
  },
  {
    norwegian: 'blekk',
    english: 'ink',
    spanish: 'tinta',
  },
  {
    norwegian: 'jeg stormet bort',
    english: 'i stormed away',
    spanish: 'me alejé furioso',
  },
  {
    norwegian: 'sjekketriks',
    english: 'pickup tricks',
    spanish: 'trucos de recogida',
  },
  {
    norwegian: 'å tyne',
    english: 'to exploit',
    spanish: 'explotar',
  },
  {
    norwegian: 'i den rekkefølgen',
    english: 'in that order',
    spanish: 'en ese orden',
  },
  {
    norwegian: 'jeg lagde den kvelden',
    english: 'i made that evening',
    spanish: 'hice esa noche',
  },
  {
    norwegian: 'de kyssa ikke',
    english: "they didn't kiss",
    spanish: 'no se besaron',
  },
  {
    norwegian: 'lakmustesten',
    english: 'the litmus test',
    spanish: 'la prueba de fuego',
  },
  {
    norwegian: 'blir fort utålmodig',
    english: 'gets impatient quickly',
    spanish: 'se impacienta rápidamente',
  },
  {
    norwegian: 'at skjebnen',
    english: 'that fate',
    spanish: 'que el destino',
  },
  {
    norwegian: 'er gjenkjennelig i hvert fall',
    english: 'is recognizable at least',
    spanish: 'es reconocible al menos',
  },
  {
    norwegian: 'er utålmodige typer',
    english: 'are impatient types',
    spanish: 'son tipos impacientes',
  },
  {
    norwegian: 'stått på scenen',
    english: 'stood on stage',
    spanish: 'estado en el escenario',
  },
  {
    norwegian: 'har innsikt',
    english: 'has insight',
    spanish: 'tiene visión',
  },
  {
    norwegian: 'til smugler',
    english: 'to smuggle',
    spanish: 'para contrabandear',
  },
  {
    norwegian: 'såpass, ja',
    english: 'that much, yes',
    spanish: 'tanto, sí',
  },
  {
    norwegian: 'vurderte du å kjøpe opp',
    english: 'did you consider buying up',
    spanish: '¿consideraste comprar?',
  },
  {
    norwegian: 'han roper til meg',
    english: 'he shouts to me',
    spanish: 'él me grita',
  },
  {
    norwegian: 'forgudet',
    english: 'idolized',
    spanish: 'idolatrado',
  },
  {
    norwegian: 'hun låste døra',
    english: 'she locked the door',
    spanish: 'ella cerró la puerta con llave',
  },
  {
    norwegian: 'sperret meg inne på do',
    english: 'locked me in the bathroom',
    spanish: 'me encerró en el baño',
  },
  {
    norwegian: 'en havnaksjon',
    english: 'a harbor action',
    spanish: 'una acción portuaria',
  },
  {
    norwegian: 'gjengvold',
    english: 'retaliatory violence',
    spanish: 'violencia retaliatoria',
  },
  {
    norwegian: 'en rettferdig hevn',
    english: 'a just revenge',
    spanish: 'una venganza justa',
  },
  {
    norwegian: 'er vitne til livet ditt',
    english: 'is witness to your life',
    spanish: 'es testigo de tu vida',
  },
  {
    norwegian: 'hele veien',
    english: 'all the way',
    spanish: 'todo el camino',
  },
  {
    norwegian: 'forhåpentligvis om lenge',
    english: 'hopefully soon',
    spanish: 'con suerte pronto',
  },
  {
    norwegian: 'å kline med på jobb',
    english: 'to make out at work',
    spanish: 'hacer el amor en el trabajo',
  },
  {
    norwegian: 'veldig raus',
    english: 'very generous',
    spanish: 'muy generoso',
  },
  {
    norwegian: 'søsken',
    english: 'siblings',
    spanish: 'hermanos',
  },
  {
    norwegian: 'på en skala fra en til ti',
    english: 'on a scale from one to ten',
    spanish: 'en una escala del uno al diez',
  },
  {
    norwegian: 'lydteknikerne',
    english: 'the sound technicians',
    spanish: 'los técnicos de sonido',
  },
  {
    norwegian: 'fotografene',
    english: 'the photographers',
    spanish: 'los fotógrafos',
  },
  {
    norwegian: 'mestringsfølelse',
    english: 'sense of mastery',
    spanish: 'sensación de dominio',
  },
  {
    norwegian: 'rullestoler',
    english: 'wheelchairs',
    spanish: 'sillas de ruedas',
  },
  {
    norwegian: 'å opprettholde',
    english: 'to maintain',
    spanish: 'mantener',
  },
  {
    norwegian: 'en progredierende sykdom',
    english: 'a progressive disease',
    spanish: 'una enfermedad progresiva',
  },
  {
    norwegian: 'nedover',
    english: 'downward',
    spanish: 'hacia abajo',
  },
  {
    norwegian: 'overst',
    english: 'at the top',
    spanish: 'en la parte superior',
  },
  {
    norwegian: 'nederst',
    english: 'at the bottom',
    spanish: 'en la parte inferior',
  },
  {
    norwegian: 'en syk klang',
    english: 'a sick sound',
    spanish: 'un sonido enfermo',
  },
  {
    norwegian: 'å besvime',
    english: 'to faint',
    spanish: 'desmayarse',
  },
  {
    norwegian: 'er ganske kraftfullt',
    english: 'is quite powerful',
    spanish: 'es bastante poderoso',
  },
  {
    norwegian: 'myndigheter',
    english: 'authorities',
    spanish: 'autoridades',
  },
  {
    norwegian: 'vært ordentlig forbanna',
    english: 'been really pissed off',
    spanish: 'estado realmente enojado',
  },
  {
    norwegian: 'skal slippe å havne i rullestol',
    english: 'will avoid ending up in a wheelchair',
    spanish: 'evitará terminar en una silla de ruedas',
  },
  {
    norwegian: 'er litt nummen',
    english: 'is a bit numb',
    spanish: 'está un poco entumecido',
  },
  {
    norwegian: 'sliter med å skure',
    english: 'struggles to scrub',
    spanish: 'lucha por fregar',
  },
  {
    norwegian: 'på en kork',
    english: 'on a cork',
    spanish: 'en un corcho',
  },
  {
    norwegian: 'bak knærne kommer melkesyren',
    english: 'behind the knees comes the lactic acid',
    spanish: 'detrás de las rodillas viene el ácido láctico',
  },
  {
    norwegian: 'du nødt til å appellere til',
    english: 'you need to appeal to',
    spanish: 'necesitas apelar a',
  },
  {
    norwegian: 'på groruddalsvis',
    english: 'in Groruddalen style',
    spanish: 'al estilo de Groruddalen',
  },
  {
    norwegian: 'et tilfeldig utvalg',
    english: 'a random selection',
    spanish: 'una selección aleatoria',
  },
  {
    norwegian: 'som stiller opp',
    english: 'who shows up',
    spanish: 'que aparece',
  },
  {
    norwegian: 'er følelsen jeg får',
    english: 'is the feeling i get',
    spanish: 'es la sensación que tengo',
  },
  {
    norwegian: 'innførte beslutningsforumet',
    english: 'introduced the decision-making forum',
    spanish: 'introdujo el foro de toma de decisiones',
  },
  {
    norwegian: 'kynikerne',
    english: 'the cynics',
    spanish: 'los cínicos',
  },
  {
    norwegian: 'har tatt fullstendig overhånd',
    english: 'has completely gotten out of hand',
    spanish: 'se ha salido completamente de control',
  },
  {
    norwegian: 'anstendigheten',
    english: 'decency',
    spanish: 'decencia',
  },
  {
    norwegian: 'at sånne harde verdier',
    english: 'that such hard values',
    spanish: 'que tales valores duros',
  },
  {
    norwegian: 'dolker syke folk i ryggen',
    english: 'stab sick people in the back',
    spanish: 'apuñalar a los enfermos por la espalda',
  },
  {
    norwegian: 'hva er prosedyren for',
    english: 'what is the procedure for',
    spanish: 'cuál es el procedimiento para',
  },
  {
    norwegian: 'mange aktører inne',
    english: 'many actors involved',
    spanish: 'muchos actores involucrados',
  },
  {
    norwegian: 'siste leddet',
    english: 'the last link',
    spanish: 'el último eslabón',
  },
  {
    norwegian: 'jeg takker egentlig',
    english: 'i actually thank',
    spanish: 'realmente agradezco',
  },
  {
    norwegian: 'er så sårbare',
    english: 'are so vulnerable',
    spanish: 'son tan vulnerables',
  },
  {
    norwegian: 'vi antar at det fins',
    english: 'we assume that it exists',
    spanish: 'suponemos que existe',
  },
  {
    norwegian: 'som hittil har fått',
    english: 'which so far has received',
    spanish: 'que hasta ahora ha recibido',
  },
  {
    norwegian: 'en tiltro',
    english: 'a confidence',
    spanish: 'una confianza',
  },
  {
    norwegian: 'skrudd igjen',
    english: 'screwed again',
    spanish: 'atornillado de nuevo',
  },
  {
    norwegian: 'kranene',
    english: 'the taps',
    spanish: 'los grifos',
  },
  {
    norwegian: 'altså kunne ha virket',
    english: 'thus could have worked',
    spanish: 'así podría haber funcionado',
  },
  {
    norwegian: 'at vedkommende',
    english: 'that the person',
    spanish: 'que la persona',
  },
  {
    norwegian: 'blir vesentlig dårligere',
    english: 'becomes significantly worse',
    spanish: 'se vuelve significativamente peor',
  },
  {
    norwegian: 'begrensningene',
    english: 'the limitations',
    spanish: 'las limitaciones',
  },
  {
    norwegian: 'dette tilfellet ja',
    english: 'this case yes',
    spanish: 'este caso sí',
  },
  {
    norwegian: 'en bit av dette',
    english: 'a bit of this',
    spanish: 'un poco de esto',
  },
  {
    norwegian: 'utfra at prisen',
    english: 'based on the price',
    spanish: 'basado en el precio',
  },
  {
    norwegian: 'en utfordring å håndtere',
    english: 'a challenge to handle',
    spanish: 'un desafío para manejar',
  },
  {
    norwegian: 'fornuftig å gjøre',
    english: 'sensible to do',
    spanish: 'sensato hacer',
  },
  {
    norwegian: 'et hjelpemiddel',
    english: 'an aid',
    spanish: 'una ayuda',
  },
  {
    norwegian: 'sirkelbevegelser',
    english: 'circular movements',
    spanish: 'movimientos circulares',
  },
  {
    norwegian: 'det går sikkert fortere',
    english: 'it probably goes faster',
    spanish: 'probablemente va más rápido',
  },
  {
    norwegian: 'litt pøbelstreker',
    english: 'a little mischief',
    spanish: 'un poco de travesuras',
  },
  {
    norwegian: 'lovfestingen av',
    english: 'the legalization of',
    spanish: 'la legalización de',
  },
  {
    norwegian: 'et skritt i riktig retning',
    english: 'a step in the right direction',
    spanish: 'un paso en la dirección correcta',
  },
  {
    norwegian: 'er utgått på dato',
    english: 'is expired',
    spanish: 'está caducado',
  },
  {
    norwegian: 'nødt til å tenke nytt',
    english: 'need to think anew',
    spanish: 'necesito pensar de nuevo',
  },
  {
    norwegian: 'blir ikke berørt',
    english: 'is not affected',
    spanish: 'no se ve afectado',
  },
  {
    norwegian: 'enkeltindivider',
    english: 'individuals',
    spanish: 'individuos',
  },
  {
    norwegian: 'ganske svært',
    english: 'quite large',
    spanish: 'bastante grande',
  },
  {
    norwegian: 'det er mitt telt',
    english: 'it is my tent',
    spanish: 'es mi tienda',
  },
  {
    norwegian: 'min pute',
    english: 'my pillow',
    spanish: 'mi almohada',
  },
  {
    norwegian: 'i fare',
    english: 'in danger',
    spanish: 'en peligro',
  },
  {
    norwegian: 'vi mistet oppholdstillatelsen',
    english: 'we lost the residence permit',
    spanish: 'perdimos el permiso de residencia',
  },
  {
    norwegian: 'alt avhenger av om',
    english: 'everything depends on whether',
    spanish: 'todo depende de si',
  },
  {
    norwegian: 'jeg erklærer herved',
    english: 'i hereby declare',
    spanish: 'por la presente declaro',
  },
  {
    norwegian: 'en haug med papirer',
    english: 'a bunch of papers',
    spanish: 'un montón de papeles',
  },
  {
    norwegian: 'vært helt forferdelig',
    english: 'been absolutely terrible',
    spanish: 'ha sido absolutamente terrible',
  },
  {
    norwegian: 'kan legges opp litt annerledes',
    english: 'can be arranged a little differently',
    spanish: 'se puede arreglar un poco diferente',
  },
  {
    norwegian: 'har et uttalt mål',
    english: 'has a stated goal',
    spanish: 'tiene un objetivo declarado',
  },
  {
    norwegian: 'å begrense antall innvandrere',
    english: 'to limit the number of immigrants',
    spanish: 'limitar el número de inmigrantes',
  },
  {
    norwegian: 'noen uskyldige ofre her og der',
    english: 'some innocent victims here and there',
    spanish: 'algunas víctimas inocentes aquí y allá',
  },
  {
    norwegian: 'ingen avkjøring',
    english: 'no exit',
    spanish: 'sin salida',
  },
  {
    norwegian: 'sluppet unna',
    english: 'gotten away',
    spanish: 'salido',
  },
  {
    norwegian: 'det er enden på visa',
    english: 'that is the end of the story',
    spanish: 'ese es el final de la historia',
  },
  {
    norwegian: 'regelverk',
    english: 'regulations',
    spanish: 'regulaciones',
  },
  {
    norwegian: 'helt hjerterått',
    english: 'completely heartless',
    spanish: 'completamente despiadado',
  },
  {
    norwegian: 'fornuftige argumenter',
    english: 'sensible arguments',
    spanish: 'argumentos sensatos',
  },
  {
    norwegian: 'tingrettssaken',
    english: 'the district court case',
    spanish: 'el caso del tribunal de distrito',
  },
  {
    norwegian: 'kronerulling',
    english: 'fundraising',
    spanish: 'recaudación de fondos',
  },
  {
    norwegian: 'lengstværende',
    english: 'longest-lasting',
    spanish: 'más duradero',
  },
  {
    norwegian: 'asylbarna',
    english: 'the asylum children',
    spanish: 'los niños de asilo',
  },
  {
    norwegian: 'tilknytning til Norge',
    english: 'connection to Norway',
    spanish: 'conexión a Noruega',
  },
  {
    norwegian: 'vi må krige for å puste',
    english: 'we have to fight to breathe',
    spanish: 'tenemos que luchar para respirar',
  },
  {
    norwegian: 'til å knekkes',
    english: 'to be broken',
    spanish: 'para ser roto',
  },
  {
    norwegian: 'madrassen',
    english: 'the mattress',
    spanish: 'el colchón',
  },
  {
    norwegian: 'penger til livsopphold',
    english: 'money for living expenses',
    spanish: 'dinero para gastos de vida',
  },
  {
    norwegian: 'på flukt',
    english: 'on the run',
    spanish: 'huyendo',
  },
  {
    norwegian: 'visumet',
    english: 'the visa',
    spanish: 'la visa',
  },
  {
    norwegian: 'hele tatt',
    english: 'entirely',
    spanish: 'enteramente',
  },
  {
    norwegian: 'hun søkt visum',
    english: 'she applied for a visa',
    spanish: 'ella solicitó una visa',
  },
  {
    norwegian: 'først avslag',
    english: 'first rejection',
    spanish: 'primera negación',
  },
  {
    norwegian: 'ikke minst',
    english: 'not least',
    spanish: 'no menos',
  },
  {
    norwegian: 'han fikk innvilget familiegjenforening',
    english: 'he was granted family reunification',
    spanish: 'le concedieron la reunificación familiar',
  },
  {
    norwegian: 'merknader',
    english: 'remarks',
    spanish: 'observaciones',
  },
  {
    norwegian: 'helt forderdelig',
    english: 'absolutely terrible',
    spanish: 'absolutamente terrible',
  },
  {
    norwegian: 'dere aner ikke hvor mange ganger',
    english: 'you have no idea how many times',
    spanish: 'no tienen idea de cuántas veces',
  },
  {
    norwegian: 'gjennombrudd',
    english: 'breakthrough',
    spanish: 'avance',
  },
  {
    norwegian: 'oppdaget',
    english: 'discovered',
    spanish: 'descubierto',
  },
  {
    norwegian: 'den fjerneste anelse om',
    english: 'the slightest hint of',
    spanish: 'la más mínima pista de',
  },
  {
    norwegian: 'opphav',
    english: 'origin',
    spanish: 'origen',
  },
  {
    norwegian: 'å få oversikt over slekten',
    english: 'to get an overview of the family',
    spanish: 'obtener una visión general de la familia',
  },
  {
    norwegian: 'i slekt og forfedre',
    english: 'in kin and ancestors',
    spanish: 'en parientes y antepasados',
  },
  {
    norwegian: 'forestilt seg',
    english: 'imagined',
    spanish: 'imaginado',
  },
  {
    norwegian: 'hva med mennene',
    english: 'what about the men',
    spanish: '¿qué pasa con los hombres?',
  },
  {
    norwegian: 'som ble lovet anonymitet',
    english: 'who were promised anonymity',
    spanish: 'que fueron prometidos anonimato',
  },
  {
    norwegian: 'ukjente barn',
    english: 'unknown children',
    spanish: 'niños desconocidos',
  },
  {
    norwegian: 'ro i sjelen',
    english: 'peace of mind',
    spanish: 'paz mental',
  },
  {
    norwegian: 'oppdaget sannheten',
    english: 'discovered the truth',
    spanish: 'descubrió la verdad',
  },
  {
    norwegian: 'om sitt opphav',
    english: 'about their origin',
    spanish: 'sobre su origen',
  },
  {
    norwegian: 'østlandsområdet',
    english: 'the eastern region',
    spanish: 'la región oriental',
  },
  {
    norwegian: 'tilfeldigvis',
    english: 'by chance',
    spanish: 'por casualidad',
  },
  {
    norwegian: 'søskenflokken vokser stadig',
    english: 'the sibling group is constantly growing',
    spanish: 'el grupo de hermanos está creciendo constantemente',
  },
  {
    norwegian: 'å spikre inn noen datoer',
    english: 'to nail down some dates',
    spanish: 'fijar algunas fechas',
  },
  {
    norwegian: 'søsknene ble unnfanget',
    english: 'the siblings were conceived',
    spanish: 'los hermanos fueron concebidos',
  },
  {
    norwegian: 'oppfordret til å ta',
    english: 'encouraged to take',
    spanish: 'animado a tomar',
  },
  {
    norwegian: 'hemmeligholdet preger helsevesenet',
    english: 'secrecy characterizes the healthcare system',
    spanish: 'el secreto caracteriza el sistema de salud',
  },
  {
    norwegian: 'vil rette søkelyset mot',
    english: 'will focus the spotlight on',
    spanish: 'enfocará el foco en',
  },
  {
    norwegian: 'på tross av',
    english: 'despite',
    spanish: 'a pesar de',
  },
  {
    norwegian: 'til tross for',
    english: 'despite',
    spanish: 'a pesar de',
  },
  {
    norwegian: 'å stå i det',
    english: 'to stand in it',
    spanish: 'estar en ello',
  },
  {
    norwegian: 'tusenvis av barn',
    english: 'thousands of children',
    spanish: 'miles de niños',
  },
  {
    norwegian: 'er unnfanget',
    english: 'are conceived',
    spanish: 'son concebidos',
  },
  {
    norwegian: 'er avkom av',
    english: 'are offspring of',
    spanish: 'son descendientes de',
  },
  {
    norwegian: 'å snevre inn',
    english: 'to narrow down',
    spanish: 'reducir',
  },
  {
    norwegian: 'i sjela før meg',
    english: 'in the soul before me',
    spanish: 'en el alma antes que yo',
  },
  {
    norwegian: 'jusstudenter',
    english: 'law students',
    spanish: 'estudiantes de derecho',
  },
  {
    norwegian: 'i begynnelsen av',
    english: 'in the beginning of',
    spanish: 'al principio de',
  },
  {
    norwegian: 'ønskede barne',
    english: 'wanted children',
    spanish: 'niños deseados',
  },
  {
    norwegian: 'hemmelighold',
    english: 'secrecy',
    spanish: 'secreto',
  },
  {
    norwegian: 'ikke vil stå frem',
    english: 'do not want to come forward',
    spanish: 'no quieren salir adelante',
  },
  {
    norwegian: 'er kimen til',
    english: 'is the seed of',
    spanish: 'es la semilla de',
  },
  {
    norwegian: 'er nedfelt i',
    english: 'is enshrined in',
    spanish: 'está consagrado en',
  },
  {
    norwegian: 'opphavet sitt',
    english: 'their origin',
    spanish: 'su origen',
  },
  {
    norwegian: 'alle disse opplysningene slettes',
    english: 'all this information is deleted',
    spanish: 'toda esta información se elimina',
  },
  {
    norwegian: 'en ens far',
    english: 'one’s father',
    spanish: 'el padre de uno',
  },
  {
    norwegian: 'med opphetet debatt',
    english: 'with heated debate',
    spanish: 'con debate acalorado',
  },
  {
    norwegian: 'samfunnet vårt',
    english: 'our society',
    spanish: 'nuestra sociedad',
  },
  {
    norwegian: 'man merket seg hvis',
    english: 'one noticed if',
    spanish: 'uno notó si',
  },
  {
    norwegian: 'det var fristende',
    english: 'it was tempting',
    spanish: 'era tentador',
  },
  {
    norwegian: 'så intenst opptatt av',
    english: 'so intensely concerned with',
    spanish: 'tan intensamente preocupado por',
  },
  {
    norwegian: 'utredet',
    english: 'investigated',
    spanish: 'investigado',
  },
  {
    norwegian: 'ikke tålte dagens lys',
    english: "couldn't stand the light of day",
    spanish: 'no podía soportar la luz del día',
  },
  {
    norwegian: 'oppvekstbetingelser',
    english: 'upbringing conditions',
    spanish: 'condiciones de crianza',
  },
  {
    norwegian: 'er nærmest til å si om barnet',
    english: 'is almost to say about the child',
    spanish: 'es casi para decir sobre el niño',
  },
  {
    norwegian: 'er ingen oversikt over',
    english: 'is no overview of',
    spanish: 'no hay una visión general de',
  },
  {
    norwegian: 'strøket',
    english: 'the area',
    spanish: 'el área',
  },
  {
    norwegian: 'å være fratatt',
    english: 'to be deprived of',
    spanish: 'ser privado de',
  },
  {
    norwegian: 'urolige barn',
    english: 'restless children',
    spanish: 'niños inquietos',
  },
  {
    norwegian: 'tankene vandrer mye',
    english: 'the thoughts wander a lot',
    spanish: 'los pensamientos vagan mucho',
  },
  {
    norwegian: 'grunnleggende rettighet',
    english: 'fundamental right',
    spanish: 'derecho fundamental',
  },
  {
    norwegian: 'en forelesning',
    english: 'a lecture',
    spanish: 'una conferencia',
  },
  {
    norwegian: 'vi satset alt',
    english: 'we bet everything',
    spanish: 'apostamos todo',
  },
  {
    norwegian: 'bukspyttkjertel',
    english: 'pancreas',
    spanish: 'páncreas',
  },
  {
    norwegian: 'en slektsforsker',
    english: 'a genealogist',
    spanish: 'un genealogista',
  },
  {
    norwegian: 'henoldvis',
    english: 'respectively',
    spanish: 'respectivamente',
  },
  {
    norwegian: 'sammen snevrer vi inn',
    english: 'together we narrow down',
    spanish: 'juntos reducimos',
  },
  {
    norwegian: 'etter ti års leting',
    english: 'after ten years of searching',
    spanish: 'después de diez años de búsqueda',
  },
  {
    norwegian: 'kjempenært',
    english: 'very close',
    spanish: 'muy cerca',
  },
  {
    norwegian: 'stifte foreningen',
    english: 'found the association',
    spanish: 'fundar la asociación',
  },
  {
    norwegian: 'kleine situasjoner',
    english: 'awkward situations',
    spanish: 'situaciones incómodas',
  },
  {
    norwegian: 'i utgangspunktet',
    english: 'in principle',
    spanish: 'en principio',
  },
  {
    norwegian: 'det var tydelig at det var tungt',
    english: 'it was clear that it was heavy',
    spanish: 'estaba claro que era pesado',
  },
  {
    norwegian: 'har båret hele livet',
    english: 'has carried all their life',
    spanish: 'ha llevado toda su vida',
  },
  {
    norwegian: 'en av foreningens frontfigurer',
    english: 'one of the association’s front figures',
    spanish: 'una de las figuras principales de la asociación',
  },
  {
    norwegian: 'å forestille seg',
    english: 'to imagine',
    spanish: 'imaginar',
  },
  {
    norwegian: 'har forandret seg',
    english: 'has changed',
    spanish: 'ha cambiado',
  },
  {
    norwegian: 'ingen foreløpig statistikk',
    english: 'no preliminary statistics',
    spanish: 'sin estadísticas preliminares',
  },
  {
    norwegian: 'litt nedtur',
    english: 'a bit of a downer',
    spanish: 'un poco deprimente',
  },
  {
    norwegian: 'du skuffa du også',
    english: 'you disappointed too',
    spanish: 'tú también decepcionaste',
  },
  {
    norwegian: 'har tatt skrittet',
    english: 'has taken the step',
    spanish: 'ha dado el paso',
  },
  {
    norwegian: 'ti år dien erfarte Norge',
    english: 'ten years the country experienced Norway',
    spanish: 'diez años el país experimentó Noruega',
  },
  {
    norwegian: 'forbilde for unge',
    english: 'role model for young people',
    spanish: 'modelo a seguir para los jóvenes',
  },
  {
    norwegian: 'i nettets mørke avkroker',
    english: 'in the dark corners of the net',
    spanish: 'en los rincones oscuros de la red',
  },
  {
    norwegian: 'forskere på',
    english: 'researchers at',
    spanish: 'investigadores en',
  },
  {
    norwegian: 'mørkhudede',
    english: 'dark-skinned',
    spanish: 'de piel oscura',
  },
  {
    norwegian: 'har forandret holdninger',
    english: 'has changed attitudes',
    spanish: 'ha cambiado actitudes',
  },
  {
    norwegian: 'latterlig oppførsel',
    english: 'ridiculous behavior',
    spanish: 'comportamiento ridículo',
  },
  {
    norwegian: 'i brevveksling',
    english: 'in correspondence',
    spanish: 'en correspondencia',
  },
  {
    norwegian: 'sin forklaring',
    english: 'his explanation',
    spanish: 'su explicación',
  },
  {
    norwegian: 'rettferdiggjøre terrorangrepet',
    english: 'justify the terrorist attack',
    spanish: 'justificar el ataque terrorista',
  },
  {
    norwegian: 'anledninger',
    english: 'occasions',
    spanish: 'ocasiones',
  },
  {
    norwegian: 'en skarp hendelse utelukkes',
    english: 'a sharp incident is excluded',
    spanish: 'se excluye un incidente grave',
  },
  {
    norwegian: 'krenking av islam',
    english: 'offense against Islam',
    spanish: 'ofensa contra el Islam',
  },
  {
    norwegian: 'har ført til voldelige',
    english: 'has led to violent',
    spanish: 'ha llevado a violentos',
  },
  {
    norwegian: 'etablerer vi oss',
    english: 'we establish ourselves',
    spanish: 'nos establecemos',
  },
  {
    norwegian: 'massive styrker',
    english: 'massive forces',
    spanish: 'fuerzas masivas',
  },
  {
    norwegian: 'vi er bevæpnet',
    english: 'we are armed',
    spanish: 'estamos armados',
  },
  {
    norwegian: 'hvis vi får et oppdrag',
    english: 'if we get a mission',
    spanish: 'si recibimos una misión',
  },
  {
    norwegian: 'åtte forebyggere',
    english: 'eight preventers',
    spanish: 'ocho preventores',
  },
  {
    norwegian: 'provoserende',
    english: 'provocative',
    spanish: 'provocativo',
  },
  {
    norwegian: 'forpliktet til å beskytte',
    english: 'obliged to protect',
    spanish: 'obligado a proteger',
  },
  {
    norwegian: 'vår fordømte plikt',
    english: 'our damned duty',
    spanish: 'nuestro maldito deber',
  },
  {
    norwegian: 'lov å ytre seg',
    english: 'allowed to express oneself',
    spanish: 'permitido expresarse',
  },
  {
    norwegian: 'til samfunnet forøvrig',
    english: 'to society in general',
    spanish: 'a la sociedad en general',
  },
  {
    norwegian: 'vi anslår',
    english: 'we estimate',
    spanish: 'estimamos',
  },
  {
    norwegian: 'i rangering av',
    english: 'in ranking of',
    spanish: 'en la clasificación de',
  },
  {
    norwegian: 'hva kjennetegner',
    english: 'what characterizes',
    spanish: 'qué caracteriza',
  },
  {
    norwegian: 'det er hovedsakelig',
    english: 'it is mainly',
    spanish: 'es principalmente',
  },
  {
    norwegian: 'ofte resurssterke',
    english: 'often resourceful',
    spanish: 'a menudo ingenioso',
  },
  {
    norwegian: 'et sjelelig kaos',
    english: 'a spiritual chaos',
    spanish: 'un caos espiritual',
  },
  {
    norwegian: 'en oppskrift på',
    english: 'a recipe for',
    spanish: 'una receta para',
  },
  {
    norwegian: 'gira og hausa opp',
    english: 'excited and hyped up',
    spanish: 'emocionado y animado',
  },
  {
    norwegian: 'forskere innen',
    english: 'researchers within',
    spanish: 'investigadores dentro de',
  },
  {
    norwegian: 'han vanket som yngre',
    english: 'he frequented as a youth',
    spanish: 'frecuentaba de joven',
  },
  {
    norwegian: 'viss dragning',
    english: 'certain attraction',
    spanish: 'cierta atracción',
  },
  {
    norwegian: 'forlatet han miljøet',
    english: 'he left the environment',
    spanish: 'dejó el ambiente',
  },
  {
    norwegian: 'avstumpet til slutte',
    english: 'numbed to the end',
    spanish: 'entumecido hasta el final',
  },
  {
    norwegian: 'drap',
    english: 'murder',
    spanish: 'asesinato',
  },
  {
    norwegian: 'rabiate',
    english: 'rabid',
    spanish: 'rabioso',
  },
  {
    norwegian: 'en søkbar',
    english: 'a searchable',
    spanish: 'un buscable',
  },
  {
    norwegian: 'in ruinene av høyblokka',
    english: 'in the ruins of the high-rise',
    spanish: 'en las ruinas del rascacielos',
  },
  {
    norwegian: 'det gjør inntrykk',
    english: 'it makes an impression',
    spanish: 'hace una impresión',
  },
  {
    norwegian: 'det første som slår meg',
    english: 'the first thing that strikes me',
    spanish: 'lo primero que me llama la atención',
  },
  {
    norwegian: 'er den redselen',
    english: 'is the fear',
    spanish: 'es el miedo',
  },
  {
    norwegian: 'avverget angrep i',
    english: 'averted attack in',
    spanish: 'ataque evitado en',
  },
  {
    norwegian: 'livvakter',
    english: 'bodyguards',
    spanish: 'guardaespaldas',
  },
  {
    norwegian: 'er skvist fra alle kanter',
    english: 'is squeezed from all sides',
    spanish: 'está apretado por todos lados',
  },
  {
    norwegian: 'sjikane og trusler',
    english: 'harassment and threats',
    spanish: 'acoso y amenazas',
  },
  {
    norwegian: 'væpnede vakter',
    english: 'armed guards',
    spanish: 'guardias armados',
  },
  {
    norwegian: 'er immun mot trusler',
    english: 'is immune to threats',
    spanish: 'es inmune a las amenazas',
  },
  {
    norwegian: 'for frafall fra',
    english: 'for dropout from',
    spanish: 'para la deserción de',
  },
  {
    norwegian: 'har posert trusler',
    english: 'has posed threats',
    spanish: 'ha planteado amenazas',
  },
  {
    norwegian: 'det beror på',
    english: 'it depends on',
    spanish: 'depende de',
  },
  {
    norwegian: 'ønske om endring',
    english: 'desire for change',
    spanish: 'deseo de cambio',
  },
  {
    norwegian: 'bak murene blir man',
    english: 'behind the walls one becomes',
    spanish: 'detrás de las paredes uno se vuelve',
  },
  {
    norwegian: 'tilhører en gjeng',
    english: 'belongs to a gang',
    spanish: 'pertenece a una pandilla',
  },
  {
    norwegian: 'flokktilhørighet',
    english: 'pack affiliation',
    spanish: 'afiliación de manada',
  },
  {
    norwegian: 'på fasthet i livet',
    english: 'on solidity in life',
    spanish: 'en solidez en la vida',
  },
  {
    norwegian: 'å dras inn i',
    english: 'to be drawn into',
    spanish: 'ser atraído a',
  },
  {
    norwegian: 'innsatte som',
    english: 'inmates who',
    spanish: 'reclusos que',
  },
  {
    norwegian: 'i luftegården',
    english: 'in the exercise yard',
    spanish: 'en el patio de ejercicios',
  },
  {
    norwegian: 'overtale dem til å',
    english: 'persuade them to',
    spanish: 'persuadirlos para',
  },
  {
    norwegian: 'er mest sårbare',
    english: 'are most vulnerable',
    spanish: 'son los más vulnerables',
  },
  {
    norwegian: 'alle advarer om',
    english: 'everyone warns about',
    spanish: 'todos advierten sobre',
  },
  {
    norwegian: 'en flokk',
    english: 'a pack',
    spanish: 'una manada',
  },
  {
    norwegian: 'av store mengder våpen',
    english: 'of large quantities of weapons',
    spanish: 'de grandes cantidades de armas',
  },
  {
    norwegian: 'straffedømte mennene',
    english: 'the convicted men',
    spanish: 'los hombres condenados',
  },
  {
    norwegian: 'det pumper opp adrenalinet',
    english: 'it pumps up the adrenaline',
    spanish: 'bombea la adrenalina',
  },
  {
    norwegian: 'flere anledninger',
    english: 'several occasions',
    spanish: 'varias ocasiones',
  },
  {
    norwegian: 'i begivenhetenes sentrum',
    english: 'in the center of events',
    spanish: 'en el centro de los eventos',
  },
  {
    norwegian: 'på makkeren deres vegne',
    english: 'on behalf of their partner',
    spanish: 'en nombre de su pareja',
  },
  {
    norwegian: 'de synlige tegnene',
    english: 'the visible signs',
    spanish: 'los signos visibles',
  },
  {
    norwegian: 'å krenke og skjende',
    english: 'to violate and desecrate',
    spanish: 'violar y profanar',
  },
  {
    norwegian: 'skjelver av raseri',
    english: 'trembles with rage',
    spanish: 'tiembla de rabia',
  },
  {
    norwegian: 'ikke bøye seg',
    english: 'not bow down',
    spanish: 'no inclinarse',
  },
  {
    norwegian: 'seksuelle overgripere kalles',
    english: 'sexual offenders are called',
    spanish: 'los agresores sexuales son llamados',
  },
  {
    norwegian: 'rovdyr',
    english: 'predators',
    spanish: 'depredadores',
  },
  {
    norwegian: 'bryter stillheten',
    english: 'breaks the silence',
    spanish: 'rompe el silencio',
  },
  {
    norwegian: 'selve veddeløpsbanen',
    english: 'the racetrack itself',
    spanish: 'la pista de carreras en sí',
  },
  {
    norwegian: 'å tas på ørene',
    english: 'to be taken on the ears',
    spanish: 'ser tomado en las orejas',
  },
  {
    norwegian: 'hestevant',
    english: 'horse-savvy',
    spanish: 'con experiencia en caballos',
  },
  {
    norwegian: 'som har tynget ham et helt liv',
    english: 'that has weighed on him his whole life',
    spanish: 'que lo ha pesado toda su vida',
  },
  {
    norwegian: 'tilfeldigvis',
    english: 'by chance',
    spanish: 'por casualidad',
  },
  {
    norwegian: 'tilgjengelig',
    english: 'available',
    spanish: 'disponible',
  },
  {
    norwegian: 'har unngått',
    english: 'has avoided',
    spanish: 'ha evitado',
  },
  {
    norwegian: 'et boligområde',
    english: 'a residential area',
    spanish: 'una zona residencial',
  },
  {
    norwegian: 'jeg stusset litt over',
    english: 'i was a bit puzzled about',
    spanish: 'estaba un poco desconcertado por',
  },
  {
    norwegian: 'mannlige ofre venter fortsatt på',
    english: 'male victims are still waiting for',
    spanish: 'las víctimas masculinas todavía están esperando',
  },
  {
    norwegian: 'førde anmelder',
    english: 'led the complainant',
    spanish: 'llevó al denunciante',
  },
  {
    norwegian: 'traumene og skammen',
    english: 'the traumas and the shame',
    spanish: 'los traumas y la vergüenza',
  },
  {
    norwegian: 'man utga seg for',
    english: 'one pretended to be',
    spanish: 'uno pretendía ser',
  },
  {
    norwegian: 'for det var der du traffet dem',
    english: 'because that was where you met them',
    spanish: 'porque ahí fue donde los conociste',
  },
  {
    norwegian: 'uttrykket for',
    english: 'the expression for',
    spanish: 'la expresión de',
  },
  {
    norwegian: 'å få litt pulls nå',
    english: 'to get some pulls now',
    spanish: 'para obtener algunos tirones ahora',
  },
  {
    norwegian: 'jeg jar skjøvet det litt foran meg',
    english: 'i have pushed it a bit in front of me',
    spanish: 'lo he empujado un poco frente a mí',
  },
  {
    norwegian: 'han forsker på',
    english: 'he researches',
    spanish: 'él investiga',
  },
  {
    norwegian: 'oppdagelsene',
    english: 'the discoveries',
    spanish: 'los descubrimientos',
  },
  {
    norwegian: 'veldig utbredt',
    english: 'very widespread',
    spanish: 'muy extendido',
  },
  {
    norwegian: 'tiltrekker du sikkert deg',
    english: 'you probably attract',
    spanish: 'probablemente atraes',
  },
  {
    norwegian: 'den brusboksen hans',
    english: 'his soda can',
    spanish: 'su lata de refresco',
  },
  {
    norwegian: 'men det forunder meg ikke lenger',
    english: "but it doesn't surprise me anymore",
    spanish: 'pero ya no me sorprende',
  },
  {
    norwegian: 'over rundkjøringen',
    english: 'over the roundabout',
    spanish: 'sobre la rotonda',
  },
  {
    norwegian: 'han først misbrukt da han var',
    english: 'he was first abused when he was',
    spanish: 'fue abusado por primera vez cuando tenía',
  },
  {
    norwegian: 'involverte gjerningsmannen flere voksne',
    english: 'involved the perpetrator several adults',
    spanish: 'involucró al perpetrador varios adultos',
  },
  {
    norwegian: 'vi hadde med pledd og soveposer',
    english: 'we had blankets and sleeping bags',
    spanish: 'teníamos mantas y sacos de dormir',
  },
  {
    norwegian: 'du skjelver nå',
    english: 'you are trembling now',
    spanish: 'estás temblando ahora',
  },
  {
    norwegian: 'resusterke bærumsfolk',
    english: 'resourceful people from Bærum',
    spanish: 'personas ingeniosas de Bærum',
  },
  {
    norwegian: 'mange tusenlapper',
    english: 'many thousands of kroner',
    spanish: 'muchos miles de coronas',
  },
  {
    norwegian: 'ha pågått',
    english: 'have been going on',
    spanish: 'han estado ocurriendo',
  },
  {
    norwegian: 'er veldig nært',
    english: 'is very close',
    spanish: 'está muy cerca',
  },
  {
    norwegian: 'vært borti',
    english: 'have come across',
    spanish: 'me he encontrado con',
  },
  {
    norwegian: 'utdrag fra anmeldelsen',
    english: 'excerpts from the complaint',
    spanish: 'extractos de la denuncia',
  },
  {
    norwegian: 'det begåttgjentatte overgrep av seksuell karakter',
    english: 'there committed repeated sexual offenses',
    spanish: 'se cometieron repetidos delitos sexuales',
  },
  {
    norwegian: 'flere overgripere',
    english: 'several perpetrators',
    spanish: 'varios perpetradores',
  },
  {
    norwegian: 'han utflørte ting på meg',
    english: 'he flirted things on me',
    spanish: 'él coqueteó cosas conmigo',
  },
  {
    norwegian: 'jeg innrømmer',
    english: 'i admit',
    spanish: 'yo admito',
  },
  {
    norwegian: 'hvor nærme det har vært',
    english: 'how close it has been',
    spanish: 'lo cerca que ha sido',
  },
  {
    norwegian: 'å kamuflere',
    english: 'to camouflage',
    spanish: 'camuflar',
  },
  {
    norwegian: 'landegrenser',
    english: 'national borders',
    spanish: 'fronteras nacionales',
  },
  {
    norwegian: 'utgir en trussel',
    english: 'poses a threat',
    spanish: 'representa una amenaza',
  },
  {
    norwegian: 'stas',
    english: 'fun',
    spanish: 'diversión',
  },
  {
    norwegian: 'det tikker med en gang inn',
    english: 'it ticks in immediately',
    spanish: 'marca inmediatamente',
  },
  {
    norwegian: 'rett på sak',
    english: 'straight to the point',
    spanish: 'ir al grano',
  },
  {
    norwegian: 'er det egen tilfredsstillelse',
    english: 'is it self-satisfaction',
    spanish: 'es auto-satisfacción',
  },
  {
    norwegian: 'vågale',
    english: 'daring',
    spanish: 'atrevido',
  },
  {
    norwegian: 'andre ofre',
    english: 'other victims',
    spanish: 'otras víctimas',
  },
  {
    norwegian: 'emner',
    english: 'topics',
    spanish: 'temas',
  },
  {
    norwegian: 'ble bøtelagt',
    english: 'was fined',
    spanish: 'fue multado',
  },
  {
    norwegian: 'med slibrig telefonsjikane',
    english: 'with lewd telephone harassment',
    spanish: 'con acoso telefónico lascivo',
  },
  {
    norwegian: 'i oppreisning til jenta',
    english: 'in compensation to the girl',
    spanish: 'en compensación a la niña',
  },
  {
    norwegian: ' latterlig lav dom',
    english: 'ridiculously low sentence',
    spanish: 'sentencia ridículamente baja',
  },
  {
    norwegian: 'har slått helt inn',
    english: 'has completely caught on',
    spanish: 'ha atrapado por completo',
  },
  {
    norwegian: 'innkalt til avhør',
    english: 'summoned for interrogation',
    spanish: 'convocado para interrogatorio',
  },
  {
    norwegian: 'verken mor eller far',
    english: 'neither mother nor father',
    spanish: 'ni madre ni padre',
  },
  {
    norwegian: 'litt skyldfølelse',
    english: 'a bit of guilt',
    spanish: 'un poco de culpa',
  },
  {
    norwegian: 'har jeg pugget anmeldelsen',
    english: 'i have memorized the complaint',
    spanish: 'he memorizado la denuncia',
  },
  {
    norwegian: 'fritt oppspinn',
    english: 'pure fiction',
    spanish: 'pura ficción',
  },
  {
    norwegian: 'om gjennomsnittet',
    english: 'about the average',
    spanish: 'sobre el promedio',
  },
  {
    norwegian: 'trakasseringstelefoner',
    english: 'harassment calls',
    spanish: 'llamadas de acoso',
  },
  {
    norwegian: 'innsatsen deres',
    english: 'their effort',
    spanish: 'su esfuerzo',
  },
  {
    norwegian: 'voksne svikter',
    english: 'adults fail',
    spanish: 'los adultos fallan',
  },
  {
    norwegian: 'hovslager',
    english: 'farrier',
    spanish: 'herrador',
  },
  {
    norwegian: 'egenskaper',
    english: 'qualities',
    spanish: 'cualidades',
  },
  {
    norwegian: 'når du innser',
    english: 'when you realize',
    spanish: 'cuando te das cuenta',
  },
  {
    norwegian: 'alt gikk i grus',
    english: 'everything fell apart',
    spanish: 'todo se desmoronó',
  },
  {
    norwegian: 'ikke ble trodd',
    english: 'was not believed',
    spanish: 'no fue creído',
  },
  {
    norwegian: 'kan stole på',
    english: 'can trust',
    spanish: 'puede confiar en',
  },
  {
    norwegian: 'i forhold til',
    english: 'in relation to',
    spanish: 'en relación con',
  },
  {
    norwegian: 'som tar tak sånn ordentlig',
    english: 'who takes hold properly',
    spanish: 'que toma el control adecuadamente',
  },
  {
    norwegian: 'ryster av sinne',
    english: 'shakes with anger',
    spanish: 'tiembla de ira',
  },
  {
    norwegian: 'fellestrekkene',
    english: 'the common features',
    spanish: 'las características comunes',
  },
  {
    norwegian: 'politikernes løfter gikk aldrig i oppfyllelse',
    english: "the politicians' promises never came true",
    spanish: 'las promesas de los políticos nunca se hicieron realidad',
  },
  {
    norwegian: 'var beløpet',
    english: 'the amount was',
    spanish: 'la cantidad era',
  },
  {
    norwegian: 'åpenhet rundt senskadene',
    english: 'openness about the late effects',
    spanish: 'apertura sobre los efectos tardíos',
  },
  {
    norwegian: 'du ligner på ham',
    english: 'you look like him',
    spanish: 'te pareces a él',
  },
  {
    norwegian: 'redsel hver eneste dag',
    english: 'fear every single day',
    spanish: 'miedo todos los días',
  },
  {
    norwegian: 'sparket meg ut',
    english: 'kicked me out',
    spanish: 'me echó',
  },
  {
    norwegian: 'ble helt paff',
    english: 'was completely stunned',
    spanish: 'estaba completamente atónito',
  },
  {
    norwegian: 'jeg datt ned på gulvet',
    english: 'i fell to the floor',
    spanish: 'me caí al suelo',
  },
  {
    norwegian: 'tvillingsøster',
    english: 'twin sister',
    spanish: 'hermana gemela',
  },
  {
    norwegian: 'gjemte meg borti',
    english: 'hid myself away',
    spanish: 'me escondí',
  },
  {
    norwegian: 'senvirkninger',
    english: 'late effects',
    spanish: 'efectos tardíos',
  },
  {
    norwegian: 'brakt',
    english: 'brought',
    spanish: 'traído',
  },
  {
    norwegian: 'i salen',
    english: 'in the saddle',
    spanish: 'en la silla',
  },
  {
    norwegian: 'et utstoppet ekorn',
    english: 'a stuffed squirrel',
    spanish: 'una ardilla disecada',
  },
  {
    norwegian: 'på loppemarked',
    english: 'at the flea market',
    spanish: 'en el mercadillo',
  },
  {
    norwegian: 'i fellesskap rustet seig til',
    english: 'collectively toughened resilient to',
    spanish: 'colectivamente endurecido resistente a',
  },
  {
    norwegian: 'det er ikke tilfelle',
    english: 'that is not the case',
    spanish: 'ese no es el caso',
  },
  {
    norwegian: 'litt utsatt',
    english: 'a bit exposed',
    spanish: 'un poco expuesto',
  },
  {
    norwegian: 'frekk mot meg',
    english: 'rude to me',
    spanish: 'grosero conmigo',
  },
  {
    norwegian: 'månelyst fort',
    english: 'moonlight fast',
    spanish: 'luz de luna rápido',
  },
  {
    norwegian: 'er innafor hva som helst',
    english: 'is within anything',
    spanish: 'está dentro de cualquier cosa',
  },
  {
    norwegian: 'det uttrykkes en bekymring',
    english: 'a concern is expressed',
    spanish: 'se expresa una preocupación',
  },
  {
    norwegian: 'at ingen av voldshendelsene',
    english: 'that none of the violent incidents',
    spanish: 'que ninguno de los incidentes violentos',
  },
  {
    norwegian: 'det var tynt',
    english: 'it was thin',
    spanish: 'estaba delgado',
  },
  {
    norwegian: 'er essensen i',
    english: 'is the essence of',
    spanish: 'es la esencia de',
  },
  {
    norwegian: 'samsvar',
    english: 'consistency',
    spanish: 'consistencia',
  },
  {
    norwegian: 'kan bekreftes',
    english: 'can be confirmed',
    spanish: 'puede ser confirmado',
  },
  {
    norwegian: 'som oppførte seg dårlig tente',
    english: 'who behaved badly lit',
    spanish: 'que se comportó mal encendió',
  },
  {
    norwegian: 'på sykkeldekkene deres',
    english: 'on their bicycle tires',
    spanish: 'en sus neumáticos de bicicleta',
  },
  {
    norwegian: 'å uttale seg om',
    english: 'to comment on',
    spanish: 'comentar sobre',
  },
  {
    norwegian: 'utadvendt og gledet seg til',
    english: 'outgoing and looked forward to',
    spanish: 'extrovertido y esperaba con ansias',
  },
  {
    norwegian: 'skjelvende og usikker',
    english: 'trembling and uncertain',
    spanish: 'temblando e inseguro',
  },
  {
    norwegian: 'klaget til fylkesmannen',
    english: 'complained to the county governor',
    spanish: 'se quejó al gobernador del condado',
  },
  {
    norwegian: 'rimelig kan forventes',
    english: 'reasonably can be expected',
    spanish: 'razonablemente se puede esperar',
  },
  {
    norwegian: 'bare fordufter i nattens mulm',
    english: 'just vanishes into the night',
    spanish: 'simplemente desaparece en la noche',
  },
  {
    norwegian: 'er tydelig preget av',
    english: 'is clearly affected by',
    spanish: 'está claramente afectado por',
  },
  {
    norwegian: 'i markkerpar',
    english: 'in field pairs',
    spanish: 'en pares de campo',
  },
  {
    norwegian: 'det spriker veldig',
    english: 'it varies greatly',
    spanish: 'varía mucho',
  },
  {
    norwegian: 'mange lener seg på',
    english: 'many rely on',
    spanish: 'muchos se apoyan en',
  },
  {
    norwegian: 'ulik forskning',
    english: 'different research',
    spanish: 'investigación diferente',
  },
  {
    norwegian: 'mobbeombudet',
    english: 'the anti-bullying ombudsman',
    spanish: 'el defensor del pueblo contra el acoso escolar',
  },
  {
    norwegian: 'bekreftes av',
    english: 'is confirmed by',
    spanish: 'es confirmado por',
  },
  {
    norwegian: 'svikt',
    english: 'failure',
    spanish: 'fallo',
  },
  {
    norwegian: 'for å bli vernet',
    english: 'to be protected',
    spanish: 'para ser protegido',
  },
  {
    norwegian: 'ble slått og dyttet',
    english: 'was beaten and pushed',
    spanish: 'fue golpeado y empujado',
  },
  {
    norwegian: 'han oppreist fortsatt står',
    english: 'he still stands upright',
    spanish: 'él todavía se mantiene erguido',
  },
  {
    norwegian: 'hun bjeffet og angrep',
    english: 'she barked and attacked',
    spanish: 'ella ladró y atacó',
  },
  {
    norwegian: 'ånden i loven',
    english: 'the spirit of the law',
    spanish: 'el espíritu de la ley',
  },
  {
    norwegian: 'stemplet som',
    english: 'stamped as',
    spanish: 'etiquetado como',
  },
  {
    norwegian: 'tre hovedbitene',
    english: 'three main pieces',
    spanish: 'tres piezas principales',
  },
  {
    norwegian: 'på pensum',
    english: 'on the curriculum',
    spanish: 'en el plan de estudios',
  },
  {
    norwegian: 'å terpe',
    english: 'to drill',
    spanish: 'perforar',
  },
  {
    norwegian: 'en slegge',
    english: 'a sledgehammer',
    spanish: 'un mazo',
  },
  {
    norwegian: 'trehåndtak',
    english: 'wooden handle',
    spanish: 'mango de madera',
  },
  {
    norwegian: 'et fullverdig liv',
    english: 'a full life',
    spanish: 'una vida plena',
  },
  {
    norwegian: 'et uthus på gården',
    english: 'an outbuilding on the farm',
    spanish: 'un anexo en la granja',
  },
  {
    norwegian: 'en tolk',
    english: 'an interpreter',
    spanish: 'un intérprete',
  },
  {
    norwegian: 'overføring av makt',
    english: 'transfer of power',
    spanish: 'transferencia de poder',
  },
  {
    norwegian: 'ingen bekymringer',
    english: 'no worries',
    spanish: 'no hay preocupaciones',
  },
  {
    norwegian: 'oppsøke mennesker',
    english: 'seek out people',
    spanish: 'buscar personas',
  },
  {
    norwegian: 'usynlig besok',
    english: 'invisible visit',
    spanish: 'visita invisible',
  },
  {
    norwegian: 'skal vi ta den vekk',
    english: 'shall we take it away',
    spanish: '¿lo quitamos?',
  },
  {
    norwegian: 'vitenskapelig effect',
    english: 'scientific effect',
    spanish: 'efecto científico',
  },
  {
    norwegian: 'flere kobberrør i plenen',
    english: 'several copper pipes in the lawn',
    spanish: 'varias tuberías de cobre en el césped',
  },
  {
    norwegian: 'en husrens',
    english: 'a house cleansing',
    spanish: 'una limpieza de la casa',
  },
  {
    norwegian: 'mange useriøse aktører',
    english: 'many unserious actors',
    spanish: 'muchos actores poco serios',
  },
  {
    norwegian: 'om bløffmakeri og svindel',
    english: 'about bluffing and fraud',
    spanish: 'sobre engaños y fraudes',
  },
  {
    norwegian: 'som trosser latterliggjøring',
    english: 'who defies ridicule',
    spanish: 'que desafía el ridículo',
  },
  {
    norwegian: 'den kommende utstillingen',
    english: 'the upcoming exhibition',
    spanish: 'la próxima exposición',
  },
  {
    norwegian: 'vekket hele tidens oppsikt',
    english: 'attracted the attention of the whole time',
    spanish: 'atrajo la atención de todo el tiempo',
  },
  {
    norwegian: 'var besatt av tanken',
    english: 'was obsessed with the idea',
    spanish: 'estaba obsesionado con la idea',
  },
  {
    norwegian: 'å oppdage',
    english: 'to discover',
    spanish: 'descubrir',
  },
  {
    norwegian: 'menigheten',
    english: 'the congregation',
    spanish: 'la congregación',
  },
  {
    norwegian: 'stakk',
    english: 'stabbed',
    spanish: 'apuñalado',
  },
  {
    norwegian: 'veivalg',
    english: 'choices',
    spanish: 'elecciones',
  },
  {
    norwegian: 'som livvakt',
    english: 'as a bodyguard',
    spanish: 'como guardaespaldas',
  },
  {
    norwegian: 'utopiske visjoner',
    english: 'utopian visions',
    spanish: 'visiones utópicas',
  },
  {
    norwegian: 'de er i utgangspunktet skeptiske til',
    english: 'they are basically skeptical of',
    spanish: 'son básicamente escépticos de',
  },
  {
    norwegian: 'å stille opp',
    english: 'to show up',
    spanish: 'aparecer',
  },
  {
    norwegian: 'blir tiltrukket av',
    english: 'are attracted to',
    spanish: 'se sienten atraídos por',
  },
  {
    norwegian: 'i skauen',
    english: 'in the woods',
    spanish: 'en el bosque',
  },
  {
    norwegian: 'godt ryktene',
    english: 'good reputation',
    spanish: 'buena reputación',
  },
  {
    norwegian: 'som verserte',
    english: 'that circulated',
    spanish: 'que circulaba',
  },
  {
    norwegian: 'å rykte',
    english: 'to spread',
    spanish: 'difundir',
  },
  {
    norwegian: 'veldig sprikende',
    english: 'very divergent',
    spanish: 'muy divergente',
  },
  {
    norwegian: 'mye sladder',
    english: 'a lot of gossip',
    spanish: 'mucho chisme',
  },
  {
    norwegian: 'som trekkes',
    english: 'that are drawn',
    spanish: 'que se dibujan',
  },
  {
    norwegian: 'i stillhet og ro',
    english: 'in silence and peace',
    spanish: 'en silencio y paz',
  },
  {
    norwegian: 'fra bygda',
    english: 'from the village',
    spanish: 'del pueblo',
  },
  {
    norwegian: 'fra fødselen',
    english: 'from birth',
    spanish: 'desde el nacimiento',
  },
  {
    norwegian: 'rister på hodet',
    english: 'shakes his head',
    spanish: 'sacude la cabeza',
  },
  {
    norwegian: 'kloden',
    english: 'the globe',
    spanish: 'el globo',
  },
  {
    norwegian: 'kan henge med',
    english: 'can keep up',
    spanish: 'puede mantenerse al día',
  },
  {
    norwegian: 'indre fred',
    english: 'inner peace',
    spanish: 'paz interior',
  },
  {
    norwegian: 'er mer nyansert',
    english: 'is more nuanced',
    spanish: 'es más matizado',
  },
  {
    norwegian: 'en streiting',
    english: 'a straight person',
    spanish: 'una persona heterosexual',
  },
  {
    norwegian: 'som trekkes til',
    english: 'who are drawn to',
    spanish: 'que se sienten atraídos por',
  },
  {
    norwegian: 'skadeskutt',
    english: 'injured',
    spanish: 'herido',
  },
  {
    norwegian: 'stråhatt',
    english: 'straw hat',
    spanish: 'sombrero de paja',
  },
  {
    norwegian: 'en fetter',
    english: 'a cousin',
    spanish: 'un primo',
  },
  {
    norwegian: 'treffer på stadig',
    english: 'meet more and more',
    spanish: 'conocer cada vez más',
  },
  {
    norwegian: 'forsøkt å bearbeide',
    english: 'tried to process',
    spanish: 'intentó procesar',
  },
  {
    norwegian: 'et bare juks',
    english: 'a pure fraud',
    spanish: 'un fraude puro',
  },
  {
    norwegian: 'litt innlysende',
    english: 'a bit obvious',
    spanish: 'un poco obvio',
  },
  {
    norwegian: 'mange overbeviser seg selv',
    english: 'many convince themselves',
    spanish: 'muchos se convencen',
  },
  {
    norwegian: 'som tenåring',
    english: 'as a teenager',
    spanish: 'como adolescente',
  },
  {
    norwegian: 'opp listerte',
    english: 'up listed',
    spanish: 'arriba listado',
  },
  {
    norwegian: 'hun veksler mye mellom',
    english: 'she varies a lot between',
    spanish: 'ella varía mucho entre',
  },
  {
    norwegian: 'hun har bommet helt på',
    english: 'she has completely missed',
    spanish: 'ella ha fallado por completo en',
  }
  {
    norwegian: 'veldig givende',
    english: 'very rewarding',
    spanish: 'muy gratificante',
  },
  {
    norwegian: 'som regel ønsker',
    english: 'usually wants',
    spanish: 'generalmente quiere',
  },
  {
    norwegian: 'har unike evner',
    english: 'has unique abilities',
    spanish: 'tiene habilidades únicas',
  },
  {
    norwegian: 'å utnytte folk sitt behov',
    english: 'to exploit people’s needs',
    spanish: 'explotar las necesidades de las personas',
  },
  {
    norwegian: 'så bombastiske uttalser',
    english: 'such bombastic statements',
    spanish: 'declaraciones tan bombásticas',
  },
  {
    norwegian: 'skarpsyn',
    english: 'sharp sight',
    spanish: 'visión aguda',
  },
  {
    norwegian: 'er vanskelig yrke',
    english: 'is a difficult profession',
    spanish: 'es una profesión difícil',
  },
  {
    norwegian: 'utnytter folk',
    english: 'exploits people',
    spanish: 'explota a la gente',
  },
  {
    norwegian: 'pesonlig sliter',
    english: 'personally struggles',
    spanish: 'personalmente lucha',
  },
  {
    norwegian: 'en lesning på meg',
    english: 'a reading on me',
    spanish: 'una lectura sobre mí',
  },
  {
    norwegian: 'en halvøy',
    english: 'a peninsula',
    spanish: 'una península',
  },
  {
    norwegian: 'i stormen',
    english: 'in the storm',
    spanish: 'en la tormenta',
  },
  {
    norwegian:'det er synd',
    english: 'it is a pity',
    spanish: 'es una pena',
  },
  {
    norwegian: 'å bevise',
    english: 'to prove',
    spanish: 'probar',
  },
  {
    norwegian: 'å overbevise',
    english: 'to convince',
    spanish: 'convencer',
  },
  {
    norwegian: 'finner tilhørighet',
    english: 'finds belonging',
    spanish: 'encuentra pertenencia',
  },
  {
    norwegian: 'en stund etterpå',
    english: 'a while later',
    spanish: 'un rato después',
  },
  {
    norwegian: 'du går kledd sånn nå',
    english: 'you are dressed like that now',
    spanish: 'estás vestido así ahora',
  },
  {
    norwegian: 'de narkomanes lege',
    english: 'the drug addicts’ doctor',
    spanish: 'el médico de los drogadictos',
  },
  {
    norwegian: 'er dette utstyret du vil velge',
    english: 'is this the equipment you would choose',
    spanish: '¿es este el equipo que elegirías?',
  },
  {
    norwegian: 'møbelsnekring i noen år',
    english: 'furniture carpentry for a few years',
    spanish: 'carpintería de muebles por unos años',
  },
  {
    norwegian: 'å lindre smerten',
    english: 'to relieve the pain',
    spanish: 'aliviar el dolor',
  },
  {
    norwegian: 'vrake',
    english: 'reject',
    spanish: 'rechazar',
  },
  {
    norwegian: 'å sammenligne de to bransjene',
    english: 'to compare the two industries',
    spanish: 'comparar las dos industrias',
  },
  {
    norwegian: 'et ulovlig rusmiddel på gaten',
    english: 'an illegal drug on the street',
    spanish: 'una droga ilegal en la calle',
  },
  {
    norwegian: 'skyggesidene ver norsk ruspolitikk',
    english: 'the dark sides of Norwegian drug policy',
    spanish: 'los lados oscuros de la política de drogas noruega',
  },
  {
    norwegian: 'en liten brøkdel av dette',
    english: 'a small fraction of this',
    spanish: 'una pequeña fracción de esto',
  },
  {
    norwegian: 'sovetablettene',
    english: 'the sleeping pills',
    spanish: 'las pastillas para dormir',
  },
  {
    norwegian:'mye grums',
    english: 'a lot of grime',
    spanish: 'mucha suciedad',
  },
  {
    norwegian:'milde stoffer',
    english: 'mild substances',
    spanish: 'sustancias suaves',
  },
  {
    norwegian:'er straffbart',
    english: 'is punishable',
    spanish: 'es punible',
  },
  {
    norwegian:'noen tilfeller',
    english: 'some cases',
    spanish: 'algunos casos',
  },
  {
    norwegian:'som motgift ved forgiftning',
    english: 'as an antidote in case of poisoning',
    spanish: 'como antídoto en caso de envenenamiento',
  },
  {
    norwegian:'i materiene',
    english: 'in the materials',
    spanish: 'en los materiales',
  },
  {
    norwegian:'glipp av',
    english: 'lapse of',
    spanish: 'lapsus de',
  },
  {
    norwegian:'rusmidler',
    english: 'drugs',
    spanish: 'drogas',
  },
  {
    norwegian:'betingelse',
    english: 'condition',
    spanish: 'condición',
  },
  {
    norwegian:'jeg kan forestille meg',
    english: 'i can imagine',
    spanish: 'puedo imaginar',
  },
  {
    norwegian:'forestil deg',
    english: 'imagine',
    spanish: 'imagina',
  },
  {
    norwegian:'veldig nært',
    english: 'very close',
    spanish: 'muy cerca',
  },
  {
    norwegian:'i skjul',
    english: 'in hiding',
    spanish: 'escondido',
  },
  {
    norwegian:'bivirkninger',
    english: 'side effects',
    spanish: 'efectos secundarios',
  },
  {
    norwegian:'kan trappe ned',
    english: 'can step down',
    spanish: 'puede bajar',
  },
  {
    norwegian:'å døyve smerten',
    english: 'to dull the pain',
    spanish: 'adormecer el dolor',
  },
  {
    norwegian:'har streved med',
    english: 'has struggled with',
    spanish: 'ha luchado con',
  },
  {
    norwegian:'bedringen',
    english: 'the improvement',
    spanish: 'la mejora',
  },
  {
    norwegian:'et sandkorn',
    english: 'a grain of sand',
    spanish: 'un grano de arena',
  },
  {
    norwegian:'å løsrives fra',
    english: 'to detach from',
    spanish: 'desprenderse de',
  },
  {
    norwegian:'en byrde',
    english: 'a burden',
    spanish: 'una carga',
  },
  {
    norwegian:'er lidelse og smerte',
    english: 'is suffering and pain',
    spanish: 'es sufrimiento y dolor',
  },
  {
    norwegian:'som anerkjenner',
    english: 'that recognizes',
    spanish: 'que reconoce',
  },
  {
    norwegian:'jeg nesten skylder owes',
    english: 'i almost owe',
    spanish: 'casi debo',
  },
  {
    norwegian:'en forestilling om',
    english: 'a notion of',
    spanish: 'una noción de',
  },
  {
    norwegian:'det dreier seg om',
    english: 'it is about',
    spanish: 'se trata de',
  },
  {
    norwegian:'husly',
    english: 'shelter',
    spanish: 'refugio',
  },
  {
    norwegian:'fordommer',
    english: 'prejudices',
    spanish: 'prejuicios',
  },
  {
    norwegian:'som vekker meg',
    english: 'that wakes me',
    spanish: 'que me despierta',
  },
  {
    norwegian:'å lage adferdsfundamentet',
    english: 'to create the behavioral foundation',
    spanish: 'crear la base de comportamiento',
  },
  {
    norwegian:'omgivelsene',
    english: 'the surroundings',
    spanish: 'los alrededores',
  },
  {
    norwegian:'dekningsgrad',
    english: 'coverage ratio',
    spanish: 'índice de cobertura',
  },
  {
    norwegian:'straffbart og livsfarlig',
    english: 'punishable and life-threatening',
    spanish: 'punible y peligroso para la vida',
  },
  {
    norwegian:'befolkningens helse',
    english: 'the population’s health',
    spanish: 'la salud de la población',
  },
  {
    norwegian:'en avveiing',
    english: 'a trade-off',
    spanish: 'un compromiso',
  },
  {
    norwegian:'å reklamere for bred',
    english: 'to advertise for broad',
    spanish: 'publicitar para amplio',
  },
  {
    norwegian:'belastede',
    english: 'burdened',
    spanish: 'cargado',
  },
  {
    norwegian: 'tungt belastede',
    english: 'heavily burdened',
    spanish: 'muy cargado',
  },
  {
    norwegian:'rastløshet',
    english: 'restlessness',
    spanish: 'inquietud',
  },
  {
    norwegian:'rusmiddler og avhengighet',
    english: 'drugs and addiction',
    spanish: 'drogas y adicción',
  },
  {
    norwegian:'garvede',
    english: 'seasoned',
    spanish: 'experimentado',
  },
  {
    norwegian:'har havnet utpå',
    english: 'have ended up out',
    spanish: 'han terminado afuera',
  },
  {
    norwegian:'tvil om det',
    english: 'doubt about it',
    spanish: 'duda al respecto',
  },
  {
    norwegian:'er det avlyttingsutstyr',
    english: 'is it eavesdropping equipment',
    spanish: '¿es equipo de espionaje?',
  },
  {
    norwegian:'selvmordsforsøk',
    english: 'suicide attempt',
    spanish: 'intento de suicidio',
  },
  {
    norwegian:'kramper',
    english: 'cramps',
    spanish: 'calambres',
  },
  {
    norwegian:'å forvalte',
    english: 'to manage',
    spanish: 'administrar',
  },
  {
    norwegian:'er for lite tilpasningsdyktig',
    english: 'is too inflexible',
    spanish: 'es demasiado inflexible', 
  },
  {
    norwegian:'de legemidlene',
    english: 'the medications',
    spanish: 'los medicamentos',
  },
  {
    norwegian:'vi nådd flere ',
    english: 'we reached several',
    spanish: 'alcanzamos varios',
  }
];
