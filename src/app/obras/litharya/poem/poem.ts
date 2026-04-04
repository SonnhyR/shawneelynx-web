import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Character {
  name: string;
  subtitle: string;
  img: string;
  previewText: string;
  fullDescription: string;
  objectPos?: string;
}

@Component({
  selector: 'app-poem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './poem.html',
  styleUrls: ['./poem.css']
})
export class PoemComponent implements OnInit {
  selectedCharacter: Character | null = null;

  protagonistas: Character[] = [
    {
      name: 'Kaelan de Cyrion',
      subtitle: 'El príncipe de Hielo',
      img: '/assets/images/lan.png',
      previewText: 'Kaelan es, en apariencia, todo lo que Evenny no es: directo, físico, con una frialdad que roza lo insultante...',
      fullDescription: `Kaelan es, en apariencia, todo lo que Evenny no es: directo, físico, con una frialdad que roza lo insultante. Su palabra es escasa pero certera, y cuando habla, lo hace con una cadencia descendente que convierte cada frase en un veredicto. No hay lugar para la ambigüedad en su mundo. O se está con él, o se está en su contra.

Nació como el tercer hijo, el "accidente", el que nunca debió estar en los planes de nadie. Esa sensación de ser un estorbo lo acompañó durante años, moldeando un carácter que aprende a no pedir, a no esperar, a no necesitar. Se convirtió en soldado porque era lo único que se esperaba de él: fuerza bruta, lealtad inquebrantable, y una capacidad para el sacrificio que rayaba en lo autodestructivo.

Pero debajo de esa coraza de hielo, Kaelan es dulce, introvertido y tierno y aunque no expresa lo que siente —quizás ni siquiera sabe nombrarlo— sus acciones hablan por él. Cuida de los suyos con una devoción que roza la obsesión, aunque nunca reciba reconocimiento a cambio. Corvan, su mejor amigo, es el único que ha visto atisbos de la vulnerabilidad que Kaelan esconde bajo su fachada de guerrero impasible.

Su relación con Evenny es, para él, un campo minado emocional que nunca aprendió a navegar. Lo que siente lo confunde, lo enfurece, lo aterra. Porque Evenny no es un enemigo al que pueda derrotar con la espada, ni un aliado al que pueda comprender con la lógica. Es un espejo que le devuelve una imagen de sí mismo que no reconoce: alguien capaz de anhelar, de desear, de necesitar.

En el presente de Poem, Kaelan es un hombre roto en un sentido diferente al de Evenny. No ha perdido el amor; ha perdido el contexto. Su memoria le dice que Evenny es el enemigo, pero su cuerpo, sus instintos, sus sueños, le susurran otra verdad. Atrapado entre dos realidades, Kaelan se aferra a lo único que parece sólido: la versión de sí mismo que recuerda. Y esa versión, trágicamente, es la que menos se parece al hombre que realmente es.`,
      objectPos: 'center'
    },
    {
      name: 'Evenny de Aeloreas',
      subtitle: 'El príncipe Esmeralda',
      img: '/assets/images/evenny.png',
      previewText: 'Evenny es un hombre atrapado entre dos versiones de sí mismo: la que muestra al mundo y la que guarda en la oscuridad...',
      fullDescription: `Evenny es un hombre atrapado entre dos versiones de sí mismo: la que muestra al mundo y la que guarda en la oscuridad. Ante la corte y el pueblo, es el príncipe perfecto: elocuente, carismático, con una sonrisa que desarma y una palabra amable para cada súbdito. Su voz melódica y su acento cantarino lo hacen parecer accesible, casi vulnerable, pero esa es su primera y más efectiva máscara.

Por dentro, Evenny es un estratega nato, entrenado desde joven en el arte del espionaje y el sigilo. Sabe moverse entre las sombras, leer las intenciones ajenas y anticipar movimientos antes de que ocurran. Su mente es un tablero de ajedrez donde cada gesto, cada palabra, cada silencio, es una pieza que puede usar a su favor. No es un luchador cuerpo a cuerpo, pero su verdadera arma no es la fuerza: es la paciencia, la observación y una capacidad casi enfermiza para guardar secretos —los suyos y los ajenos.

Pero bajo esa coraza de astucia y control, Evenny es profundamente leal. Su familia es su talón de Aquiles. Haría cualquier cosa por proteger a sus hermanas, especialmente a Rhiannon, a quien siente responsable desde la muerte de su madre. Ese amor incondicional lo ha llevado a tomar decisiones que otros calificarían de imprudentes o incluso suicidas.

Con Kaelan, Evenny es diferente. No puede fingir con él. O quizás nunca ha sabido hacerlo. Lo que empezó como una fricción molesta se convirtió en una obsesión silenciosa, y luego en un amor que lo aterra porque es el único territorio que no puede controlar. Evenny ama con la misma intensidad con la que espía: con cada fibra de su ser, con una atención obsesiva al detalle, y con el miedo constante de que todo se desmorone.

En el presente de Poem, Evenny está destrozado. El hombre que aprendió a leer a los demás no puede leer a su propio esposo. El espía que siempre tuvo un plan ahora solo tiene esperanza. Y la esperanza, para alguien como él, es el territorio más peligroso de todos.`,
      objectPos: 'center'
    }
  ];

  secundarios: Character[] = [
    {
      name: 'Rhiannon de Aeloreas',
      subtitle: 'La hermana firme',
      img: '/assets/images/rhia.png',
      previewText: 'Rhiannon es, en apariencia, la princesa perfecta: educada, elegante, con una sonrisa que desarma...',
      fullDescription: `Rhiannon es, en apariencia, la princesa perfecta: educada, elegante, con una sonrisa que desarma y una palabra amable para cada ocasión. Sabe cuándo callar, cuándo hablar, y cuándo sonreír como si nada la afectara. Esa máscara de cortesía impecable la ha perfeccionado desde niña, porque aprendió muy temprano que la vulnerabilidad es un lujo que no puede permitirse.

Rhiannon es leal hasta el extremo con Evenny. Él es su ancla, su modelo, la única persona frente a la que baja la guardia. Por él, sacrificaría su propia felicidad. Por él, ha callado secretos que la corroen por dentro. Y por él, terminará tomando decisiones que la llevarán a lugares oscuros de los que no podrá regresar.

En la superficie, Rhiannon es la princesa que todos quieren. Por debajo, es un campo de minas donde cualquier paso en falso puede hacerla estallar.`,
      objectPos: 'center'
    },
    {
      name: 'Ithandriel de Vespera',
      subtitle: 'El príncipe de hierro',
      img: '/assets/images/ithandriel.png',
      previewText: 'Ithandriel es el príncipe heredero de Vespera, el reino del hierro y la tecnología, pero...',
      fullDescription: `Ithandriel es el príncipe heredero de Vespera, el reino del hierro y la tecnología, pero si tuvieras que adivinarlo solo por su actitud, nunca lo harías. Es de los que entra a una habitación y la enciende sin querer, de los que roba miradas sin esforzarse, de los que parece estar siempre disfrutando de algo que los demás no alcanzan a ver.

Su voz es ronca, característica de los vesperianos, pero a diferencia de la frialdad cortante de sus compatriotas, la de Ithandriel tiene un matiz juguetón, casi un ronroneo. Habla con una seguridad relajada, como si el mundo fuera un juego y él ya supiera todas las reglas. Sus frases suelen terminar en una sonrisa, y esa sonrisa no es amable ni educada: es pícara, cómplice, peligrosa.

Es un hedonista confeso. Le gusta el vino caro, las noches largas y las compañías interesantes. No porque sea frívolo, sino porque cree que la vida es demasiado corta para negarse placeres. En Vespera, donde todo es eficiencia y producción, Ithandriel es una anomalía: un príncipe que se toma el tiempo de disfrutar, de reír, de seducir. Y es bueno en ello.

Pero debajo de esa fachada de hombre fácil y despreocupado, Ithandriel es mucho más astuto de lo que aparenta. Su picardía no es ingenua; es una máscara, igual que la seriedad de otros es la suya. Sabe leer a la gente, anticipar sus movimientos, y usar su propio encanto como un arma. Nadie se toma en serio al príncipe que siempre está de fiesta. Y ese es exactamente su objetivo.

Con Evenny, Ithandriel tiene una historia que no se puede resumir en una frase. Hubo un tiempo en que sus caminos estuvieron más cerca, y aunque ese tiempo ya pasó, la complicidad permanece. Ithandriel es de los pocos que puede hacer reír a Evenny cuando nadie más lo consigue, y también de los pocos que sabe cuándo no debe intentarlo.

No es un hombre de gestos grandiosos ni de promesas eternas. Ithandriel vive el momento, disfruta el presente, y no se ata a nada que no le dé libertad. Pero quienes logran ver más allá de su sonrisa pícara descubren a alguien leal, generoso y mucho más profundo de lo que su fama de hedonista sugiere.

Ithandriel ríe como si la vida fuera una broma, seduce como si fuera su única obligación, y esconde bajo su sonrisa pícara un corazón que siente más de lo que admite..`,
      objectPos: 'center'
    },
    {
      name: 'Neera',
      subtitle: 'La compañera fiel',
      img: '/assets/images/neera.png',
      previewText: 'Neera es una hipogrifo hembra, compañera inseparable de Kaelan desde que nació...',
      fullDescription: `Neera es una hipogrifo hembra, compañera inseparable de Kaelan desde que nació. Evenny la trajo aún como huevo de uno de sus viajes a Drakkonia, y desde entonces, ella y Kaelan han crecido juntos, compartiendo una conexión que va más allá de la de un jinete y su montura.

El Plumaje:

Su parte de águila es de un gris plateado muy pálido, casi como la superficie del agua cuando el cielo está nublado. En las puntas de las alas y en su coronilla, tiene un delicado matiz azul verdoso, similar al reflejo del sol en una charca profunda. Sus plumas no son rígidas como las de un ave común; tienen un brillo satinado y líquido que, al moverse, crea la ilusión de que ondas de agua recorren su cuello y sus alas.

La Mirada:

Sus ojos son enormes, redondos y profundos, típicos de un ave rapaz, pero con un color hipnótico: un ámbar claro con destellos verdes y azules, como mirar el fondo de un río cristalino desde la superficie. Siempre están húmedos y brillantes, como si acabara de sacar la cabeza del agua. Cuando te mira, tienes la sensación de que puede ver a través de ti, hasta el fondo de tu ser. De ahí su nombre: Neera, que en una antigua lengua de Drakkonia significa "la que mira el alma".

El Cuerpo:

Su parte de yegua es de un blanco roto o crema muy suave, que se asemeja a la espuma del mar. No es un blanco brillante, sino mate y aterciopelado. Su crin y su cola no son pelo de caballo común; son largas, finas y sedosas, como madejas de seda líquida. Al galopar o volar, fluyen detrás de ella con la gracia de una cascada, del mismo azul verdoso de las puntas de sus alas.

Detalles Mágicos:

Dependiendo de la luz del día, su pelaje y plumas pueden reflejar el entorno como un espejo de agua quieta. Si vuela sobre un prado, se verá verdosa por abajo; si se posa sobre una roca, se volverá gris. Su movimiento es inusualmente silencioso: no se oye el batir de sus alas, sino un susurro parecido al del agua corriendo entre las piedras. Su relincho, cuando se le escapa, imita el sonido de una cascada lejana.

Personalidad:

Neera es dócil, traviesa y educada. Tiene una inteligencia aguda que no siempre demuestra, y un sentido del humor juguetón que reserva para quienes conoce bien. Es especialmente protectora con Kaelan —más de lo que él mismo admite— y desconfía instintivamente de quienes le hacen daño, aunque no siempre pueda explicar por qué.

Es, sin duda, la mejor amiga de Kaelan. Y aunque no pueda hablar, su mirada —esa mirada profunda que parece ver el alma— dice más que mil palabras.`,
      objectPos: 'center'
    },
    {
      name: 'Lysander de Cyrion',
      subtitle: 'El príncipe bufón',
      img: '/assets/images/lysander.png',
      previewText: 'Lysander es el segundo hijo del rey Jodreth de Cyrion, y el hermano del medio...',
      fullDescription: `Lysander es el segundo hijo del rey Jodreth de Cyrion, y el hermano del medio entre el político Eirik y el guerrero Kaelan. Si tuviera que definirse en una palabra, sería "el payaso". Su sonrisa es perpetua, sus comentarios, siempre fuera de lugar, y su capacidad para convertir cualquier situación seria en una broma de mal gusto es, para algunos, exasperante, y para otros, preocupante.

Es difícil saber qué piensa realmente Lysander, porque nunca baja la guardia. Habla de todo y no dice nada. Se ríe de todos y no se ríe de sí mismo. Es el alma de cualquier fiesta y, paradójicamente, el hombre más solo en una habitación llena de gente.

Con sus hermanos, es diferente. Con Eirik, el heredero perfecto, mantiene una distancia respetuosa salpicada de sarcasmo. Con Kaelan, el hermano pequeño al que no sabe cómo acercarse, es más cuidadoso, más genuino, aunque nunca del todo vulnerable.

Con Rhiannon, es una provocación constante. Le gusta sacarla de quicio, ver cómo su compostura se resquebraja y emerge algo más crudo, más real. No sabe por qué lo hace, o quizá sí, pero nunca lo admitiría. Sería más fácil culpar al aburrimiento, a la costumbre, a la simple diversión de molestar a una princesa aeloreana que se cree superior.

Lysander ríe para que nadie pregunte por qué no llora.`,
      objectPos: 'center'
    },
    {
      name: 'Corvan de Thelynor',
      subtitle: 'El amigo leal',
      img: '/assets/images/corvan.png',
      previewText: 'Corvan es, en apariencia, la personificación de la lealtad cyriana: firme, directa...',
      fullDescription: `Corvan es, en apariencia, la personificación de la lealtad cyriana: firme, directa, con una presencia imponente que inspira confianza y respeto. Como capitán de los ejércitos de Cyrion y mejor amigo del príncipe Kaelan, es el hombre en quien todos depositan sus secretos más oscuros, porque su palabra es inquebrantable y su hombro, siempre disponible.

Su voz, como la de todo cyriano, es suave y descendente, pero en él adquiere un matiz adicional: una calidez casi paternal que lo hace parecer accesible, incluso tierno, a pesar de su físico de guerrero. Es el tipo de persona que escucha más de lo que habla, y cuando habla, lo hace con una honestidad que desarma. Nunca dice lo que quieres oír; dice lo que cree que es cierto, y eso lo ha convertido en el consejero más valioso de Kaelan.

Con Evenny, Corvan es cordial pero reservado. Hay una distancia cortés que nunca termina de cerrarse, como si entre ellos hubiera un cristal invisible que ninguno se atreve a romper. Evenny le ha confiado el cuidado de Kaelan en los momentos más difíciles, y Corvan siempre ha respondido con una dedicación que raya en lo sacrificial.

Es, en resumen, el amigo que todos desearían tener. El hombre que nunca falla. El pilar sobre el que otros se apoyan sin preguntar si él, a su vez, necesita apoyo.`,
      objectPos: 'center'
    },
    {
      name: 'Xina de Virell',
      subtitle: 'La hermana de elección',
      img: '/assets/images/xina.png',
      previewText: 'Xina es la comandante de la Guardia de Sombras, el escuadrón de élite de espías...',
      fullDescription: `Xina es la comandante de la Guardia de Sombras, el escuadrón de élite de espías que responde únicamente ante Evenny. Su presencia es tan discreta como su nombre: se mueve entre las sombras con una naturalidad que hace olvidar que está allí, y suele aparecer justo cuando más se la necesita, sin que nadie sepa de dónde salió.

Su personalidad es un contraste fascinante con su oficio. Fuera de la misión, Xina es directa, sarcástica y tiene un sentido del humor seco que reserva exclusivamente para Evenny. Es la única persona que puede llamarle "idiota" sin temor a represalias, y también la única que lo abraza cuando nadie más ve sus grietas.

Llevan más de diez años de amistad, desde que eran dos niños entrenando juntos en las academias reales. Xina conoce a Evenny mejor que nadie, quizás incluso mejor que él mismo. Sabe cuándo está fingiendo, cuándo está sufriendo y cuándo está a punto de tomar una decisión estúpida por amor. Y aunque a veces le duele verlo sufrir, nunca ha intentado cambiar su corazón. Solo ha prometido protegerlo, pase lo que pase.

Es leal, inteligente y letal con una daga. Pero sobre todo, es la hermana que Evenny eligió, y eso, para ella, lo es todo.`,
      objectPos: 'top center'
    },
    {
      name: 'Eirik de Cyrion',
      subtitle: 'El heredero político',
      img: '/assets/images/eirik.png',
      previewText: 'Eirik es el primogénito del rey Jodreth, el heredero perfecto que nunca ha dado motivos de queja...',
      fullDescription: `Eirik es el primogénito del rey Jodreth, el heredero perfecto que nunca ha dado motivos de queja. Donde Kaelan es espada, Eirik es pluma. Donde Lysander es caos, Eirik es orden. Es un hombre calculador, paciente, que mide cada palabra antes de pronunciarla y cada acción antes de ejecutarla.

Su relación con Kaelan es distante pero no fría. Lo respeta como guerrero, pero no termina de comprenderlo. Y aunque nunca lo ha dicho en voz alta, Eirik siente que Kaelan tiene algo que él nunca podrá tener: la libertad de no ser el heredero, la libertad de fracasar, la libertad de ser humano.

En la corte, Eirik es impecable. En privado, es un hombre que carga con el peso de un reino en los hombros y que rara vez permite que alguien vea cómo ese peso lo doblega.`,
      objectPos: 'top center'
    },
    {
      name: 'Lyra de Aeloreas',
      subtitle: 'La gemela silenciosa',
      img: '/assets/images/lyra.png',
      previewText: 'Lyra es la mayor de las gemelas —aunque apenas por unos minutos— y la más...',
      fullDescription: `Lyra es la mayor de las gemelas —aunque apenas por unos minutos— y la más callada de las dos. Su presencia es discreta, casi imperceptible, pero eso no significa que pase desapercibida. Quienes la conocen saben que Lyra lo ve todo.

Tiene la costumbre de quedarse al margen de las conversaciones, tejiendo o dibujando en silencio, pero sus ojos, brillantes y atentos, recorren cada gesto, cada palabra, cada silencio incómodo. Nada se le escapa. Es la primera en notar que Evenny ha dormido mal, que Kaelan está más tenso de lo habitual, que Rhiannon sonríe demasiado para ser sincera.

Lyra no busca protagonismo. No necesita ser el centro de atención. Su lugar está en los bordes, observando, escuchando, entendiendo. Y cuando habla —porque habla, aunque no tan a menudo como su hermana—, sus palabras suelen tener un peso que sorprende a quienes esperan la frivolidad de una adolescente.

Es, en esencia, la conciencia silenciosa de la familia. Y aunque pocos lo noten, es también la más parecida a Evenny en su forma de observar el mundo.`,
      objectPos: 'top center'
    },
    {
      name: 'Elara de Aeloreas',
      subtitle: 'La gemela tormenta',
      img: '/assets/images/elara.png',
      previewText: 'Elara es todo lo que Lyra no es: ruidosa, impulsiva, y con una energía que...',
      fullDescription: `Elara es todo lo que Lyra no es: ruidosa, impulsiva, y con una energía que parece inagotable. Si Lyra es la sombra, Elara es el relámpago. Irrumpe en las habitaciones sin avisar, hace preguntas que nadie más se atrevería a formular, y abraza a la gente sin preguntar si ellos quieren ser abrazados.

Es imposible ignorarla. Su risa se escucha desde el otro extremo del palacio, y su curiosidad la lleva a meterse en problemas con una frecuencia que desespera a sus tutores. Elara quiere saberlo todo, probarlo todo, experimentarlo todo. No entiende de sutilezas ni de silencios diplomáticos. Para ella, las cosas son blancas o negras, buenas o malas, divertidas o aburridas.

Con Kaelan, Elara es especialmente cariñosa. No lo ve como un príncipe de Cyrion ni como el esposo de su hermano; lo ve como "Honni", el hombre que le enseñó a montar a caballo y que nunca se enfada cuando ella le roba las galletas. Su afecto es incondicional, y ese cariño transparente es, para Kaelan, un misterio que no sabe cómo procesar.

Elara es, en muchos sentidos, el recordatorio de que la paz no es solo tratados y fronteras. También es esto: una niña que crece sin miedo, que abraza sin preguntar, que ríe sin medir las consecuencias.`,
      objectPos: 'top center'
    },
    {
      name: 'Rey Khallik de Aeloreas',
      subtitle: 'El rey roble',
      img: '/assets/images/khallik.png',
      previewText: 'Khallik es el rey de Aeloreas, el monarca que llevó a su reino de la guerra a la paz...',
      fullDescription: `Khallik es el rey de Aeloreas, el monarca que llevó a su reino de la guerra a la paz, aunque esa transición le costara más de lo que está dispuesto a admitir. Es un hombre alto, de presencia imponente y palabra medida. Cuando habla, lo hace con la autoridad de quien ha gobernado durante décadas y ha tomado decisiones que otros no se atreverían ni a imaginar.

Su apodo no oficial es "el Rey Roble": fuerte, arraigado, inmutable. Pero los robles también pueden ser rígidos, y su rigidez ha sido, a veces, la causa de más de un conflicto con sus propios hijos.

Khallik ama a Evenny. No hay duda de eso. Pero su amor es el de un rey que ve a su heredero como una extensión de su legado, no como un hijo al que debe proteger. Espera de él perfección, lealtad incondicional y una capacidad para el sacrificio que él mismo demostró cuando vio a su esposa tener a las gemelas, sabiendo que podría morir. Y ella murió.

Desde entonces, la relación entre Khallik y sus hijos es compleja. Evenny lo admira y lo cuestiona a partes iguales. Rhiannon lo respeta pero lo teme. Las gemelas apenas lo conocen. Y Khallik, en lugar de acercarse, se ha refugiado en la política, en los tratados, en la construcción de una paz que quizá le sirva para justificar todas las pérdidas.

Es un hombre que cree estar haciendo lo correcto. Y esa convicción, más que cualquier maldad, es lo que lo hace peligroso.`,
      objectPos: 'center'
    }
  ];

  constructor() {
    console.log('Componente inicializado');
  }

  ngOnInit() {
    console.log('Personajes principales:', this.protagonistas);
    console.log('Personajes secundarios:', this.secundarios);
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    console.log('Escape presionado');
    this.closeModal();
  }

  openModal(character: Character) {
    console.log('Abriendo modal para:', character.name);
    this.selectedCharacter = character;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    console.log('Cerrando modal');
    this.selectedCharacter = null;
    document.body.style.overflow = 'auto';
  }
}