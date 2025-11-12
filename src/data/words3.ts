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
];
