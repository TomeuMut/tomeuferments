export const project = {
  name: 'Tomeu Ferments',
  email: 'tomeuferments@gmail.com',
  instagram: 'https://www.instagram.com/tomeuferments/',
  url: 'https://tomeuferments.es',
};

export const languageOptions = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ca', label: 'CA', name: 'Català' },
] as const;
export type Language = typeof languageOptions[number]['code'];
export const isLanguage = (value: unknown): value is Language => languageOptions.some(item => item.code === value);

type Content = {
  title: string; description: string; locale: string;
  skip: string; home: string; language: string; openMenu: string; closeMenu: string;
  nav: [string, string, string, string];
  hero: { label: string; title: [string, string]; text: string; cta: string; note: string; imageAlt: string; caption: string; location: string };
  ribbon: [string, string, string];
  story: { label: string; title: [string, string]; paragraphs: string[]; caption: string; imageAlt: string; signature: string };
  philosophy: { label: string; title: [string, string]; intro: string; items: { title: string; text: string }[] };
  gallery: { label: string; title: [string, string]; intro: string; items: { image: string; title: string; subtitle: string; alt: string }[] };
  sharing: { label: string; title: [string, string]; text: string; cta: string; imageAlt: string };
  contact: { label: string; title: [string, string]; text: string; emailLabel: string; instagram: string; rights: string; back: string; note: string };
};

const es: Content = {
  title: 'Tomeu Ferments · Tiempo, tradición y curiosidad',
  description: 'El proyecto personal de Bartomeu en Mallorca. Desde 2017 explorando la fermentación, las maceraciones y los sabores de siempre, con pasión y paciencia.',
  locale: 'es_ES', skip: 'Saltar al contenido', home: 'Inicio', language: 'Idioma', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
  nav: ['El proyecto', 'La filosofía', 'Elaboraciones', 'Hablemos'],
  hero: {
    label: 'Mallorca · Fermentando desde 2017', title: ['Lo bueno', 'lleva tiempo.'],
    text: 'Un proyecto personal sobre fermentación, maceraciones y sabores que guardan memoria. Hecho con las manos, con curiosidad y sin prisas.',
    cta: 'Conoce el proyecto', note: 'Pasión, paciencia y un poco de vida en cada tarro.',
    imageAlt: 'Primer plano de una kombucha de color ámbar en fermentación', caption: 'El tiempo también es un ingrediente.', location: 'Desde 2017 · Mallorca',
  },
  ribbon: ['Procesos naturales', 'Saberes de siempre', 'Curiosidad sin fin'],
  story: {
    label: '01 / El origen', title: ['Todo empezó', 'con una curiosidad.'],
    paragraphs: [
      'Soy Bartomeu. Empecé a fermentar en 2017, guiado por el saber de mi padrina y una idea sencilla: aprovechar la fruta del campo. Lo que nació como una manera de conservar se convirtió en un camino de descubrimiento.',
      'La curiosidad venía de antes. Rachid, un compañero de FP y amigo que trabajaba en el Lorien, un bar de Palma, me había acercado al mundo de las cervezas artesanas. Después llegaron nuevos ingredientes, preguntas y formas de transformar lo cotidiano.',
      'Tomeu Ferments es el espacio donde se encuentran esa memoria y las ganas de experimentar. La vida rural, el producto de temporada y el gusto por las cosas hechas a mano marcan el ritmo. No se trata de correr, sino de observar, aprender y disfrutar del proceso.',
    ],
    caption: 'Bartomeu, detrás de Tomeu Ferments.', imageAlt: 'Bartomeu con una copa durante una presentación de elaboraciones', signature: 'Bartomeu · Tomeu Ferments',
  },
  philosophy: {
    label: '02 / La forma de hacer', title: ['Escuchar al producto.', 'Respetar su tiempo.'],
    intro: 'En cada elaboración hay técnica, pero también intuición, memoria y paciencia. Esta es mi manera de entender lo artesanal.',
    items: [
      { title: 'Tiempo', text: 'Dejar que cada proceso encuentre su ritmo. Observar cómo cambia un aroma, una textura o un sabor, sin querer adelantar el resultado.' },
      { title: 'Origen', text: 'Mirar lo que tenemos cerca: la fruta del campo, las estaciones y el saber transmitido. Aprovechar el producto y darle otra vida.' },
      { title: 'Curiosidad', text: 'Hacer preguntas, probar y seguir aprendiendo. Unir la tradición con nuevas posibilidades, cuidando los detalles de cada elaboración.' },
    ],
  },
  gallery: {
    label: '03 / Un vistazo al proyecto', title: ['Ingredientes sencillos.', 'Transformaciones vivas.'],
    intro: 'Algunas imágenes del universo de Tomeu Ferments: bebidas fermentadas, maceraciones y conservas. Distintas formas de explorar lo que el tiempo puede hacer.',
    items: [
      { image: 'Kombucha.jpeg', title: 'Fermentación', subtitle: 'Observar cómo la vida transforma.', alt: 'Recipiente de kombucha con grifo, cubierto con una tela' },
      { image: 'Maceracio.jpeg', title: 'Maceración', subtitle: 'Aromas que encuentran su tiempo.', alt: 'Tres botellas de cristal con maceraciones y tapones de corcho' },
      { image: 'Conserva.jpeg', title: 'Conservación', subtitle: 'Dar otra vida a lo que nos rodea.', alt: 'Tarro de cristal con pimientos verdes en conserva' },
    ],
  },
  sharing: { label: 'Una curiosidad compartida', title: ['El proceso también', 'se comparte.'], text: 'Hablar de lo que hacemos, intercambiar ideas y descubrir otros puntos de vista también forma parte del camino. En Instagram comparto pequeños momentos de Tomeu Ferments y las elaboraciones que van tomando forma.', cta: 'Sigue el proceso en Instagram', imageAlt: 'Bartomeu compartiendo su experiencia con un grupo de personas' },
  contact: { label: 'Sigamos la conversación', title: ['¿Lo dejamos', 'fermentar?'], text: 'Si te mueve la curiosidad, quieres compartir una idea o simplemente hablar de fermentación, me encantará leerte.', emailLabel: 'Escríbeme', instagram: 'Nos vemos en Instagram', rights: 'Todos los derechos reservados.', back: 'Volver arriba', note: 'Un proyecto personal. Hecho con pasión y paciencia en Mallorca.' },
};

const en: Content = {
  title: 'Tomeu Ferments · Time, tradition and curiosity',
  description: 'Bartomeu’s personal project in Mallorca. Exploring fermentation, maceration and traditional flavours since 2017, with passion and patience.',
  locale: 'en_GB', skip: 'Skip to content', home: 'Home', language: 'Language', openMenu: 'Open menu', closeMenu: 'Close menu',
  nav: ['The project', 'The philosophy', 'Creations', 'Let’s talk'],
  hero: { label: 'Mallorca · Fermenting since 2017', title: ['Good things', 'take time.'], text: 'A personal project about fermentation, maceration and flavours that carry memories. Made by hand, with curiosity and without rushing.', cta: 'Discover the project', note: 'Passion, patience and a little life in every jar.', imageAlt: 'Close-up of amber kombucha fermenting in a jar', caption: 'Time is an ingredient, too.', location: 'Since 2017 · Mallorca' },
  ribbon: ['Natural processes', 'Traditional knowledge', 'Endless curiosity'],
  story: {
    label: '01 / The beginning', title: ['It all began', 'with curiosity.'],
    paragraphs: [
      'I’m Bartomeu. I started fermenting in 2017, guided by my grandmother’s knowledge and a simple idea: making the most of fruit from the land. What began as a way of preserving became a journey of discovery.',
      'The curiosity started earlier. Rachid, a friend and classmate from vocational training who worked at Lorien, a bar in Palma, had introduced me to craft beer. New ingredients, questions and ways of transforming everyday things followed.',
      'Tomeu Ferments is where those memories meet the desire to experiment. Rural life, seasonal produce and a love of making things by hand set the pace. It’s about observing, learning and enjoying the process.',
    ],
    caption: 'Bartomeu, the person behind Tomeu Ferments.', imageAlt: 'Bartomeu holding a glass during a presentation of his creations', signature: 'Bartomeu · Tomeu Ferments',
  },
  philosophy: {
    label: '02 / The approach', title: ['Listen to the ingredient.', 'Respect its time.'], intro: 'Every creation involves technique, but also intuition, memory and patience. This is what making things by hand means to me.',
    items: [
      { title: 'Time', text: 'Letting each process find its own rhythm. Watching an aroma, texture or flavour change, without trying to rush the result.' },
      { title: 'Origin', text: 'Looking at what is close to us: fruit from the land, the seasons and knowledge passed down. Making the most of produce and giving it another life.' },
      { title: 'Curiosity', text: 'Asking questions, experimenting and continuing to learn. Bringing tradition together with new possibilities, with care for every detail.' },
    ],
  },
  gallery: {
    label: '03 / A glimpse of the project', title: ['Simple ingredients.', 'Living transformations.'], intro: 'A few images from the world of Tomeu Ferments: fermented drinks, macerations and preserves. Different ways of exploring what time can do.',
    items: [
      { image: 'Kombucha.jpeg', title: 'Fermentation', subtitle: 'Watching life transform ingredients.', alt: 'Kombucha vessel with a tap, covered with a cloth' },
      { image: 'Maceracio.jpeg', title: 'Maceration', subtitle: 'Giving aromas time to develop.', alt: 'Three glass bottles of macerations with cork stoppers' },
      { image: 'Conserva.jpeg', title: 'Preservation', subtitle: 'Giving what surrounds us another life.', alt: 'Glass jar of preserved green peppers' },
    ],
  },
  sharing: { label: 'A shared curiosity', title: ['The process is', 'for sharing, too.'], text: 'Talking about what we do, exchanging ideas and discovering other perspectives are part of the journey. On Instagram I share small moments from Tomeu Ferments and the creations taking shape.', cta: 'Follow the process on Instagram', imageAlt: 'Bartomeu sharing his experience with a group of people' },
  contact: { label: 'Keep the conversation going', title: ['Shall we let', 'it ferment?'], text: 'If you’re curious, have an idea to share or simply want to talk about fermentation, I’d love to hear from you.', emailLabel: 'Write to me', instagram: 'See you on Instagram', rights: 'All rights reserved.', back: 'Back to top', note: 'A personal project. Made with passion and patience in Mallorca.' },
};

const ca: Content = {
  title: 'Tomeu Ferments · Temps, tradició i curiositat',
  description: 'El projecte personal d’en Bartomeu a Mallorca. Des del 2017 explorant la fermentació, les maceracions i els sabors de sempre, amb passió i paciència.',
  locale: 'ca_ES', skip: 'Ves al contingut', home: 'Inici', language: 'Idioma', openMenu: 'Obrir el menú', closeMenu: 'Tancar el menú',
  nav: ['El projecte', 'La filosofia', 'Elaboracions', 'Parlem-ne'],
  hero: { label: 'Mallorca · Fermentant des del 2017', title: ['Les coses bones', 'volen temps.'], text: 'Un projecte personal sobre fermentació, maceracions i sabors que guarden memòria. Fet amb les mans, amb curiositat i sense presses.', cta: 'Coneix el projecte', note: 'Passió, paciència i un poc de vida a cada pot.', imageAlt: 'Primer pla d’una kombutxa de color ambre en fermentació', caption: 'El temps també és un ingredient.', location: 'Des del 2017 · Mallorca' },
  ribbon: ['Processos naturals', 'Sabers de sempre', 'Curiositat sense fi'],
  story: {
    label: '01 / L’origen', title: ['Tot va començar', 'amb una curiositat.'],
    paragraphs: [
      'Som en Bartomeu. Vaig començar a fermentar l’any 2017, guiat pel saber de la meva padrina i una idea senzilla: aprofitar la fruita del camp. El que va néixer com una manera de conservar es va convertir en un camí de descobriment.',
      'La curiositat venia d’abans. En Rachid, un company de FP i amic que feia feina al Lorien, un bar de Palma, m’havia acostat al món de les cerveses artesanes. Després varen arribar nous ingredients, preguntes i maneres de transformar el que tenim a mà.',
      'Tomeu Ferments és l’espai on es troben aquesta memòria i les ganes d’experimentar. La vida rural, el producte de temporada i el gust per les coses fetes a mà marquen el ritme. Es tracta d’observar, aprendre i gaudir del procés.',
    ],
    caption: 'En Bartomeu, darrere de Tomeu Ferments.', imageAlt: 'En Bartomeu amb una copa durant una presentació d’elaboracions', signature: 'Bartomeu · Tomeu Ferments',
  },
  philosophy: {
    label: '02 / La manera de fer', title: ['Escoltar el producte.', 'Respectar el seu temps.'], intro: 'A cada elaboració hi ha tècnica, però també intuïció, memòria i paciència. Aquesta és la meva manera d’entendre l’artesania.',
    items: [
      { title: 'Temps', text: 'Deixar que cada procés trobi el seu ritme. Observar com canvia una aroma, una textura o un sabor, sense voler avançar el resultat.' },
      { title: 'Origen', text: 'Mirar el que tenim a prop: la fruita del camp, les estacions i el saber transmès. Aprofitar el producte i donar-li una altra vida.' },
      { title: 'Curiositat', text: 'Fer preguntes, provar i continuar aprenent. Unir la tradició amb noves possibilitats, cuidant els detalls de cada elaboració.' },
    ],
  },
  gallery: {
    label: '03 / Una mirada al projecte', title: ['Ingredients senzills.', 'Transformacions vives.'], intro: 'Algunes imatges de l’univers de Tomeu Ferments: begudes fermentades, maceracions i conserves. Diferents maneres d’explorar el que el temps pot fer.',
    items: [
      { image: 'Kombucha.jpeg', title: 'Fermentació', subtitle: 'Observar com la vida transforma.', alt: 'Recipient de kombutxa amb aixeta, cobert amb una tela' },
      { image: 'Maceracio.jpeg', title: 'Maceració', subtitle: 'Aromes que troben el seu temps.', alt: 'Tres botelles de vidre amb maceracions i taps de suro' },
      { image: 'Conserva.jpeg', title: 'Conservació', subtitle: 'Donar una altra vida al que ens envolta.', alt: 'Pot de vidre amb pebres verds en conserva' },
    ],
  },
  sharing: { label: 'Una curiositat compartida', title: ['El procés també', 'es comparteix.'], text: 'Parlar del que feim, intercanviar idees i descobrir altres punts de vista també forma part del camí. A Instagram compartesc petits moments de Tomeu Ferments i les elaboracions que van prenent forma.', cta: 'Segueix el procés a Instagram', imageAlt: 'En Bartomeu compartint la seva experiència amb un grup de persones' },
  contact: { label: 'Continuem la conversa', title: ['Ho deixam', 'fermentar?'], text: 'Si et mou la curiositat, vols compartir una idea o simplement parlar de fermentació, m’agradarà llegir-te.', emailLabel: 'Escriu-me', instagram: 'Ens veim a Instagram', rights: 'Tots els drets reservats.', back: 'Tornar a dalt', note: 'Un projecte personal. Fet amb passió i paciència a Mallorca.' },
};

export const content: Record<Language, Content> = { es, en, ca };
