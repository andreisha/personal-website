// ------- VARIABLES -------
// General
var h1 = document.querySelector("h1");
var cv = document.querySelector("#cv");
var photo = document.querySelector("#photo");
var text = document.querySelector("#text");
var download_cv = document.querySelector("#download_cv");
var download = document.querySelector("#download");
var beginningFooter = document.querySelector("#beginningFooter");
var middleFooter = document.querySelector("#middleFooter");
var photo = document.querySelector("#photo");
var hover = document.querySelector(".hover");
var moreinfo = document.querySelector(".moreinfo");
var moreinfo_appearing = document.querySelector(".moreinfo_appearing");
var content = document.querySelector(".content");
var details = document.querySelector(".details_start");
var detailsTxt = document.querySelector(".detailsTxt");
var space = document.querySelector(".space");

// Buttons
var frBtn = document.querySelector("#frBtn");
var esBtn = document.querySelector("#esBtn");
var ukBtn = document.querySelector("#ukBtn");
var brBtn = document.querySelector("#brBtn");
var educationBtn = document.querySelector("#education");
var experiencesBtn = document.querySelector("#experiences");
var projectsBtn = document.querySelector("#projects");
var technologiesBtn = document.querySelector("#technologies");
var interestsBtn = document.querySelector("#interests");

// Education
var cs = document.querySelector(".cs");
var puc = document.querySelector(".puc");
var lfb = document.querySelector(".lfb");
var cs_txt = document.querySelector(".cs_txt");
var puc_txt = document.querySelector(".puc_txt");
var lfb_txt = document.querySelector(".lfb_txt");
var cs_img = document.querySelector(".cs_img");
var puc_img = document.querySelector(".puc_img");
var lfb_img = document.querySelector(".lfb_img");

// Experiences
var alku = document.querySelector(".alku");
var numberly = document.querySelector(".numberly");
var pdr = document.querySelector(".pdr");
var pucInfo = document.querySelector(".puc-info");
var alku_txt = document.querySelector(".alku_txt");
var numberly_txt = document.querySelector(".numberly_txt");
var pdr_txt = document.querySelector(".pdr_txt");
var pucInfo_txt = document.querySelector(".puc-info_txt");

// Projects 
var collector = document.querySelector(".collector");
var diseaseSimulation = document.querySelector(".diseaseSimulation");
var dataScience = document.querySelector(".dataScience");
var parallel = document.querySelector(".parallel");
var metaheuristics = document.querySelector(".metaheuristics");

// Technologies
var programming_languages = document.querySelector(".programming_languages");
var databases = document.querySelector(".databases");
var software = document.querySelector(".software");
var others = document.querySelector(".others");
var python = document.querySelector(".python");
var java = document.querySelector(".java");
var c = document.querySelector(".c");
var php = document.querySelector(".php");
var web = document.querySelector(".web");
var sql = document.querySelector(".sql");
var sparql = document.querySelector(".sparql");
var postgres = document.querySelector(".postgres");
var mysql = document.querySelector(".mysql");
var cassandra = document.querySelector(".cassandra");
var allegro = document.querySelector(".allegro");
var adobe = document.querySelector(".adobe");
var sugar = document.querySelector(".sugar");
var excel = document.querySelector(".excel");
var github = document.querySelector(".github");
var linux = document.querySelector(".linux");
var kafka = document.querySelector(".kafka");

// Interests / Hobbies
var social = document.querySelector(".social");
var running = document.querySelector(".running");
var technology = document.querySelector(".technology");
var traveling = document.querySelector(".traveling");
var socialTxt = "accalauréat";
var runningTxt = "accalauréat";
var travelingTxt = "accalauréat";
var technologyTxt = "accalauréat";

// Texts
var downloadTxt = download.textContent;
var presentationTxt = text.innerHTML;
var educationBtnTxt = educationBtn.textContent;
var experiencesBtnTxt = experiencesBtn.textContent;
var projectsBtnTxt = projectsBtn.textContent;
var technologiesBtnTxt = technologiesBtn.textContent;
var interestsBtnTxt = interestsBtn.textContent;
var hoverTxt = hover.textContent;
var lfbDescription = lfb_txt.innerHTML;
var csDescription = cs_txt.innerHTML;
var pucDescription = puc_txt.innerHTML;
var programmingLanguagesTxt = programming_languages.innerHTML;
var databasesTxt = databases.innerHTML;
var softwareTxt = software.innerHTML;
var othersTxt = others.innerHTML;
var lfbTxt, csTxt, pucTxt, 
	alkuTxt, numberlyTxt, pdrTxt, pucInfoTxt,
	collectorTxt, diseaseSimulationTxt, dataScienceTxt, parallelTxt, metaheuristicsTxt, 
	socialTxt, runningTxt, travelingTxt, technologyTxt;

// ------- INITIALIZATION -------
init();

// ------- LISTENERS -------

// Language buttons
frBtn.addEventListener("click", function(){
	setLanguage("fr");
});

esBtn.addEventListener("click", function(){
	setLanguage("es");
});

ukBtn.addEventListener("click", function(){
	setLanguage("uk");
});

brBtn.addEventListener("click", function(){
	setLanguage("br");
});

// More info buttons
educationBtn.addEventListener("click", function(){
	education();
	showDetails();
	showMoreInfo();
});

experiencesBtn.addEventListener("click", function(){
	experiences();
	showDetails();
	showMoreInfo();
});

projectsBtn.addEventListener("click", function(){
	projects();
	showDetails();
	showMoreInfo();
});

technologiesBtn.addEventListener("click", function(){
	technologies();
	showDetails();
	showMoreInfo();
});

interestsBtn.addEventListener("click", function(){
	interests();
	showDetails();
	showMoreInfo();
});

// ------- FUNCTIONS -------

function init() {
	setLanguage("fr");
	moreinfo.style.visibility = 'visible';
}

function setLanguage(lang) {
	if (lang === "fr") {
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea.png')";
		// Changing texts
		hideMoreInfo();
		text.innerHTML = "Bonjour ! Je m'appelle Andrea Mourelo et je suis une jeune développeuse d’origine espagnole. " +
		    "<br><br>Je suis intéressée par le développement de solutions logicielles ou techniques" +
	        "<br>ayant un réel <b>impact social</b>, notamment dans les domaines de la santé ou l'éducation.";
		download.textContent = "TÉLÉCHARGER CV";
		download_cv.href="CV/CV_Mourelo_Andrea_FR.pdf";
		beginningFooter.textContent = "Icones faites par ";
		middleFooter.textContent = "sur ";
		educationBtn.textContent = "FORMATION";
		experiencesBtn.textContent = "EXPÉRIENCES";
		projectsBtn.textContent = "PROJETS";
		technologiesBtn.textContent = "TECHNOLOGIES";
		interestsBtn.textContent = "INTÉRÊTS";
		hover.textContent = "Passez la souris sur les éléments pour plus d'informations";
		// Education
		lfbDescription = "<b>Baccalauréat Scientifique</b><br>1998-2013, Barcelone";
		csDescription = "<b>Diplôme d'ingénieure généraliste</b><br>2013-2019, Paris";
		pucDescription = "<b>Double diplôme en informatique</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "<b>LYCÉE FRANÇAIS DE BARCELONE</b><br><br>Au lycée, j’ai suivi et obtenu un Baccalauréat Scientifique, mention Très Bien, avec 13.25/14 à la <i>Selectividad Española</i> (BAC espagnol).";
		csTxt = "<b>CENTRALESUPÉLEC (Parcous Centrale Paris)</b><br><br>Après deux années de classes préparatoires MPSI/MP, j’ai intégré l’École Centrale Paris, où j’ai suivi pendant deux ans une formation d’ingénieure généraliste - option informatique.<br>Les cours principaux que j'ai suivi ont été : Systèmes d’information, Développement logiciel, Communications Numérique et Réseaux, Stratégie et Marketing, Éthique et responsabilité, Développement Durable.";
		pucTxt = "<b>PONTIFICIA UNIVERSIDADE CATÓLICA DO RIO DE JANEIRO (PUC-Rio)</b><br><br>Pendant un an et demi, j’ai suivi une formation spécialisée en ingénierie informatique.<br>Les cours principaux suivis ont été : Concurrence et Parallélisme, Bases de données, Systèmes opérationnels, Structures de données, Introduction à la Data Science, Big Data & Streaming, Tests et mesures de Software.<br><br>Pendant mon temps libre, j’ai aussi participé en groupe à:<br>- Un marathon de SQL de 3h (SBBD 2019), obtenant la 2ème place<br>- Un marathon de programmation de 4h (maratona VTEX)";
		// Experiences
		alkuDescription = "<b>E-commerce Developer</b><br>fev-juillet 2017, Quito";
		numberlyDescription = "<b>Project Manager</b><br>aout 2017-janvier 2018, Londres";
		pdrDescription = "<b>Data Analyst</b><br>fev-juin 2018, Barcelone";
		pucInfoDescription = "<b>Software Developer</b><br>avril-déc 2019, Rio de Janeiro";
		alkuTxt = "<br><b>ALKUPETS</b><br><i>E-commerce Developer (stage)</i><br><br>ALKU est une start-up sociale basée en Équateur qui produit à la main des jouets recyclés et des traitements naturels pour chiens qui respectent l'environnement et aident les communautés locales. <br><br>Avec 4 autres étudiants, nous avons développé une plateforme de e-commerce pour qu'ils soient plus visibles, et avons passé 1 mois à Quito pour terminer le projet et améliorer les processus de l'entreprise.";
		numberlyTxt = "<br><b>NUMBERLY</b><br><i>Project Manager (stage)</i><br><br>Numberly (ancien 1000mercis group) est une société de publicité et de marketing interactif, aidant ses clients à concevoir, développer, mettre en œuvre et maximiser le ROI de leurs campagnes marketing et de publicité interactives (Internet, téléphones mobiles et tablettes). <br><br>J'étais responsable de: <br>* Gérer les campagnes e-mails et mobiles pour les clients du Royaume-Uni, du Moyen-Orient et d'Espagne <br> * Travailler avec les graphistes, les équipes marketing, les développeurs front-end et les équipes de data engineers<br> * Surveiller les flux des bases de données et des workflows Adobe <br> * Gérer deux projets internes, concernant une page de désabonnement des communications SMS et une plateforme de briefing pour les clients";
		pdrTxt = "<br><b>PUNT DE REFERÈNCIA</b><br><i>Data Analyst (stage)</i><br><br>Punt de Referència est une ONG catalane qui vise à aider les jeunes adultes défavorisés dans leur émancipation avec différents projets de tutorat et de logement. <br><br> J'étais responsable de: <br> * Travailler sur la façon de collecter, stocker et analyser les données sur la base de données et le logiciel CRM (SugarCRM) pour mieux mesurer l'impact des projets de Punt de Referencia <br> * Implémenter différentes procédures pour rendre certains processus plus efficaces (automatisation des rapports et envoi d'e-mails) <br> * Aider dans les tâches techniques générales (WordPress, problèmes avec le logiciel, etc.) et rédiger une documentation sur l'utilisation du logiciel et sur les différents processus <br> * Travailler en étroite collaboration avec les éducateurs sociaux pour en savoir plus sur leur travail et comprendre leurs besoins";
		pucInfoTxt = "<br><b>DATABASE AND BIOINFORMATICS LABORATORY AT PUC-RIO</b><br><i>Software Developer (stage)</i><br><br>Le Laboratoire de Bases de Données et Bioinformatique est un laboratoire de la PUC-Rio qui recherche et implémente des solutions logicielles liées aux bases de données. <br> Pendant mon stage, j’ai participé à deux projets. Le projet Twitter Crawler, qui visait à créer une application web pour collecter et traiter des données issues de Twitter, pour ainsi aider les chercheurs en sciences sociales, où j'étais responsable du: <br> * Développement de nouvelles fonctionnalités pour améliorer la plateforme (profil utilisateur et connexion, visualisation des données, analyse des médias, FAQ, envoi automatique d'e-mails, nettoyage automatique de la base de données, parallélisation de tâches, etc. en HTML / CSS et PHP) <br> * Rédaction de documentation et de rapports sur ce qui est fait dans l'application <br> * J'ai également eu la possibilité de co-écrire et de présenter un article sur le projet au Simposium Brésilien sur les Bases de Données (SBBD 2019), où nous avons obtenu un Runner Up Award (3 meilleurs articles). <br> <br> Le projet NIMA, qui avait pour but de développer une plateforme de recherche pour trouver des informations sur toutes les actions/personnes impliquées/recherches effectuées dans l’université par rapport à l’environnement. J'étais responsable de: <br> * Configurer la machine Cloud et développer une première version de la plateforme à partir de zéro (Python) <br> * Créer et maintenir la base de données en graphe (AllegroGraph avec SparQL)";
		// Projects
		collectorTxt = "<b>TWITTER STREAMING COLLECTOR</b><br><br>L'objectif de ce projet était de créer un outil de collecte et de traitement des données de streaming obtenues en temps réel à partir du réseau social Twitter <br> <br> Utilisé: Java, Kafka, Cassandra";
		diseaseSimulationTxt = "<b>DISEASE SIMULATION</b><br><br>Ce projet visait à travailler sur le concept de simulation de graphes. De plus, tous les concepts ont été appliqués dans un exemple pratique de contagion des maladies dans une population. <br> <br> Utilisé: Python (NetworkX)";
		dataScienceTxt = "<b>DATA SCIENCE</b><br><br>J'ai fait quelques projets pour découvrir et explorer certains concepts de la Data Science: <br> - Analyse descriptive des données de l'ONU pour explorer les inégalités entre les sexes dans le monde <br> - Classification sur un ensemble de données sur la maladie de Parkinson <br> - Régression linéaire et clusterisation sur un ensemble de données <br> <br> Utilisé: Python (Skicit Learn, Pandas)";
		parallelTxt = "<b>PARALLELIZING WORK</b><br><br>Au cours de ce projet, j'ai parallélisé certaines tâches sur le projet Twitter Crawler de mon stage au Laboratoire de Bases de Données et de Bioinformatique à la PUC-Rio, aidant le système à devenir plus rapide. <br> <br> Utilisé: Python";
		metaheuristicsTxt = "<b>METAHEURISTICS</b><br><br>Lors d'un cours au PUC-Rio, j'ai été initiée aux concepts de la métaheuristique et les ai appliqués dans deux projets: <br> - Generalized Vehicle Routing Problem (GVRP)<br>- Multi-Capacity Bin Packing Problem (MCBPP) <br> <br> Utilisé: Python";
		// Technologies
		programmingLanguagesTxt = "<b>Langages de programmation</b>";
		databasesTxt = "<b>Bases de données</b>";
		softwareTxt = "<b>Software</b>";
		othersTxt = "<b>Autres</b>";
		// Interests
		socialTxt = "<b>IMPACT SOCIAL ET VOLONTARIAT </b> <br> <br>Je crois vraiment en l'impact que quelques personnes motivées peuvent avoir dans notre société et en l'importance de petites actions quotidiennes. <br> <br> C’est pourquoi, quand je peux, j'essaie de donner un peu de mon temps dans des projets bénévoles: <br> * Pendant deux ans à l'université, j'ai été présidente de l'association de loi 1901 <i>Centrale Egalité des Chances (devenue OSER) </i> qui ouevre pour l’ouverture sociale <br> * J'ai aussi donné cours de mathématiques et d'espagnol pour des jeunes immigrés à Barcelone (2018) et à l'Association Parque Vivo de Rio de Janeiro (2019)";
		runningTxt = "<b>SPORTS </b> <br> <br> Dans mon temps libre, j'adore courir, faire des randonnées et suivre des cours de danse !";
		travelingTxt = "<b>VOYAGES</b><br><br>J'adore voyager et découvrir de nouvelles cultures et de nouveaux paysages. Je suis particulièrement passionnée par la compréhension de l’impact qu’ont les langues sur la culture et sur le comportement des gens !";
		technologyTxt = "<b>TECHNOLOGIE</b><br><br>Je crois vraiment que la technologie peut changer positivement notre société et qu'elle aura un grand impact dans les prochaines générations, c'est pourquoi je veux apprendre autant que possible et consacrer mon énergie à des projets technologiques qui ont un impact positif.";
		} else if (lang === "es") {
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/sbbd1.png')";
		// Changing texts
		hideMoreInfo();
		text.innerHTML = "¡Hola! Me llamo Andrea Mourelo y soy una joven programadora española.<br><br>Mi interés principal es el desarrollo de soluciones técnicas o de <i>software</i> que tengan un <b>impacto social</b> fuerte, particularmente en las áreas de la salud y la educación."
		download.textContent = "DESCARGAR CV";
		download_cv.href="CV/CV_Mourelo_Andrea_ES.pdf";
		beginningFooter.textContent = "Iconos hechos por ";
		middleFooter.textContent = "en ";
		educationBtn.textContent = "FORMACIÓN";
		experiencesBtn.textContent = "EXPERIENCIAS";
		projectsBtn.textContent = "PROYECTOS";
		technologiesBtn.textContent = "TECNOLOGIAS";
		interestsBtn.textContent = "INTERESES";
		hover.textContent = "Pase el ratón sobre los elementos para obtener más informaciones";
		// Education
		lfbDescription = "<b><i>Baccalauréat</i> Científico</b><br>1998-2013, Barcelona";
		csDescription = "<b>Grado en ingeniería generalista</b><br>2013-2019, París";
		pucDescription = "<b>Doble diploma en informática</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "<b>LYCÉE FRANÇAIS DE BARCELONE</b><br><br>Hice un <i>Baccalauréat Scientifique</i> (Bachillerato Científico) con énfasis en matemáticas, física y biología, obteniendo 13.25/14 en la Selectividad Española.";
		csTxt = "<b>CENTRALESUPÉLEC (Antigua Centrale Paris)</b><br><br>Tras dos años de <i>classes préparatoires MPSI/MP</i> (curso intensivo de matemáticas y física), entré en la <i>École Centrale Paris</i>, donde me formé en ingenieria generalista - opción informática. <br> Las principales disciplinas que hice fueron: Sistemas de Información, Desarrollo de Software, Redes y Comunicaciones Digitales, Estrategia y Marketing, Ética y Responsabilidad, Desarrollo Sostenible.";
		pucTxt = "<b>PONTIFICIA UNIVERSIDADE CATÓLICA DO RIO DE JANEIRO (PUC-Rio)</b><br><br>Durante un año y medio, hice un doble diploma en informática. <br> Las principales disciplinas que hice fueron: Computación concurrente y paralelismo, Bases de datos, Sistemas operativos, Estructuras de datos, Introducción a la Data Sciente, Big Data y Streaming, Tests y mediciones de software. <br> <br> Durante mi tiempo libre, también participé en grupo a: <br> - Un maratón SQL de 3h (SBBD 2019), obteniendo el 2do lugar <br> - Un maratón de programación de 4h (maratona VTEX)";
		// Experiences
		alkuDescription = "<b>E-commerce Developer</b><br>feb-julio 2017, Quito";
		numberlyDescription = "<b>Project Manager</b><br>agosto 2017-enero 2018, Londres";
		pdrDescription = "<b>Data Analyst</b><br>feb-junio 2018, Barcelona";
		pucInfoDescription = "<b>Software Developer</b><br>abril-dic 2019, Rio de Janeiro";
		alkuTxt = "<br><b>ALKUPETS</b><br><i>E-commerce Developer (prácticas)</i><br><br>ALKU es una start-up social con sede en Ecuador que produce juguetes reciclados a mano y tratamientos naturales para perros que respetan el medio ambiente y ayudan a las comunidades locales. <br> <br> Con otros 4 estudiantes, desarrollamos una plataforma de e-commerce para hacerlos más visibles, y pasamos 1 mes en Quito para completar el proyecto y mejorar los procesos de la empresa.";
		numberlyTxt = "<br><b>NUMBERLY</b><br><i>Project Manager (prácticas)</i><br><br>Numberly (anteriormente 1000mercis group) es una empresa de publicidad y marketing interactivo que ayuda a sus clientes a diseñar, desarrollar, implementar y maximizar el ROI de sus campañas de marketing y publicidad interactivas (Internet, teléfonos móviles y tabletas). <br> <br> Fui responsable de: <br> * Gestionar campañas de correo electrónico y móviles para clientes en el Reino Unido, Oriente Medio y España <br> * Trabajar con diseñadores gráficos, equipos de marketing, desarrolladores front-end y equipos de ingenieros de datos <br> * Supervisar el flujo de las bases de datos y los workflows de Adobe <br> * Gestionar dos proyectos internos: una página de cancelación de suscripción para comunicaciones SMS y una plataforma de información para clientes";
		pdrTxt = "<br><b>PUNT DE REFERÈNCIA</b><br><i>Data Analyst (prácticas)</i><br><br>Punt de Referència es una ONG catalana cuyo objetivo es ayudar a los jóvenes ex-tutelados en su emancipación con diferentes programas de mentoría y de vivienda. <br> <br> Fui responsable por: <br> * Trabajar en cómo recopilar, almacenar y analizar datos en la base de datos y el software CRM (SugarCRM) para medir mejor el impacto de los proyectos de Punt de Referencia <br> * Implementar diferentes procedimientos para hacer que ciertos procesos fueran más eficientes (automatizar informes y el envío de correos electrónicos) <br> * Ayudae en tareas técnicas generales (WordPress, problemas con el software, etc.) y escribir documentación sobre el uso del software y sobre los diferentes procesos <br> * Trabajar en estrecha colaboración con los educadores sociales para obtener más información sobre su trabajo y comprender sus necesidades";
		pucInfoTxt = "<br><b>DATABASE AND BIOINFORMATICS LABORATORY AT PUC-RIO</b><br><i>Software Developer (prácticas)</i><br><br>El Laboratorio de Bases de Datos y Bioinformática es un laboratorio de la PUC-Rio que investiga e implementa soluciones de software vinculadas a bases de datos. <br> <br> Durante mis prácticas, participé en dos proyectos. El proyecto Twitter Crawler, que tenía como objetivo crear una aplicación web para recopilar y procesar datos de Twitter, para ayudar a los investigadores en ciencias sociales, donde fui responsable por: <br> * Desarrollar nuevas herramientas para mejorar la plataforma (perfil de usuario y conexión, visualización de datos, análisis de medios de comunicación, página de preguntas frecuentes, envío automático de correos electrónicos, limpieza automática de la base de datos, paralelización de tareas, etc. en HTML / CSS y PHP) <br> * Escribir documentación e informes sobre lo que hace la aplicación <br> * También tuve la oportunidad de co-escribir y presentar un artículo sobre el proyecto en el Simposio de Bases de Batos de Brasil (SBBD 2019), donde obtuvimos un premio Runner Up Award (3 mejores artículos). <br> <br> El proyecto NIMA, que tenía como objetivo desarrollar una plataforma de búsqueda para encontrar información sobre todas las acciones/personas involucradas/investigaciones llevadas a cabo en la universidad en relación con el medio ambiente. Fui responsable por: <br> * Configurar la máquina en la nube y desarrollar una primera versión de la plataforma desde cero (Python) <br> * Crear y mantener la base de datos en grafos (AllegroGraph con SparQL)";
		// Projects
		collectorTxt = "<b>TWITTER STREAMING COLLECTOR</b><br><br>El objetivo de este proyecto era crear una herramienta para recopilar y procesar datos de streaming obtenidos en tiempo real desde la red social Twitter <br> <br> Utilicé: Java, Kafka, Cassandra";
		diseaseSimulationTxt = "<b>DISEASE SIMULATION</b><br><br> Este proyecto tuvo como objetivo trabajar en el concepto de simulación de grafos. Además, todos los conceptos fueron aplicados en un ejemplo práctico de contagio de enfermedades en una población. <br> <br> Utilicé: Python (NetworkX)";
		dataScienceTxt = "<b>DATA SCIENCE</b><br><br>Hice algunos proyectos para descubrir y explorar ciertos conceptos de Data Science: <br> - Análisis descriptivo de datos de la ONU para explorar las desigualdades de género en el mundo <br> - Clasificación en un conjunto de datos sobre la enfermedad de Parkinson <br> <br> Regresión lineal y clustering en un conjunto de datos <br> <br> Utilicé: Python (Skicit Learn, Pandas)";
		parallelTxt = "<b>PARALLELIZING WORK</b><br><br>Durante este proyecto, hice que ciertas tareas del proyecto Twitter Crawler del Laboratorio de Bases de Datos y Bioinformática de la PUC-Rio fuesen paralelas, ayudando así al sistema a ser más rápido. <br> <br> Utilicé: Python";
		metaheuristicsTxt = "<b>METAHEURISTICS</b><br><br>Durante una disciplina en la PUC-Rio, tuve una introducción a los conceptos de la metaheurística y los apliqué en dos proyectos:<br> - Generalized Vehicle Routing Problem (GVRP)<br>- Multi-Capacity Bin Packing Problem (MCBPP) <br> <br> Utilicé: Python";
		// Technologies
		programmingLanguagesTxt = "<b>Lenguajes de programación</b>";
		databasesTxt = "<b>Bases de datos</b>";
		softwareTxt = "<b>Software</b>";
		othersTxt = "<b>Otros</b>";
		// Interests
		socialTxt = "<b>IMPACTO SOCIAL Y VOLUNTARIADO </b> <br> <br> Creo realmente que algunas personas motivadas pueden tener un gran impacto en nuestra sociedad, y también en la importancia de pequeñas acciones diarias. <br> <br> Por eso, cuando puedo, trato de dedicar parte de mi tiempo a proyectos de voluntariado: <br> * Durante dos años en la universidad, fui presidenta de la asociación de inclusión social <i> Centrale Égalité des Chances (ahora OSER) </i> <br> * También di clases de matemáticas y español para jóvenes inmigrantes en Barcelona (2018) y en la Asociación Parque Vivo de Rio de Janeiro (2019)";
		runningTxt = "<b>DEPORTES </b> <br> <br> En mi tiempo libre, ¡me encanta correr, caminar en la montaña y hacer clases de baile!";
		travelingTxt = "<b>VIAJES </b> <br> <br> Me encanta viajar y descubrir nuevas culturas y nuevos paisajes. ¡Me apasiona especialmente comprender el impacto que tienen los idiomas en la cultura y en el comportamiento de las personas!";
		technologyTxt = "<b>TECNOLOGÍA </b> <br> <br>Realmente creo que la tecnología puede cambiar positivamente nuestra sociedad y que tendrá un gran impacto en las próximas generaciones, por eso quiero aprender tanto como sea posible y dedicar mi energía a proyectos tecnológicos que tengan un impacto positivo.";
	} else if (lang === "uk") {
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea9.png')";
		// Changing texts
		hideMoreInfo();
		text.innerHTML = "Hello! My name is Andrea Mourelo and I am a young Spanish developer. <br><br>My main interest is the development of technical solutions or software having a strong <b> social impact</b>, particularly in the areas of health and education."
		download.textContent = "DOWNLOAD CV";
		download_cv.href="CV/CV_Mourelo_Andrea_EN.pdf";
		beginningFooter.textContent = "Icons made by ";
		middleFooter.textContent = "in ";
		educationBtn.textContent = "EDUCATION";
		experiencesBtn.textContent = "EXPERIENCES";
		projectsBtn.textContent = "PROJECTS";
		technologiesBtn.textContent = "TECHNOLOGIES";
		interestsBtn.textContent = "INTERESTS";
		hover.textContent = "Hover over the elements for more information";
		// Education
		lfbDescription = "<b>Scientific <i>Baccalauréat</i></b><br>1998-2013, Barcelona";
		csDescription = "<b>General engineering degree</b><br>2013-2019, Paris";
		pucDescription = "<b>Double degree in Computer Science</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "<b>LYCÉE FRANÇAIS DE BARCELONE</b><br><br>I did a <i>Baccalauréat Scientifique</i> (French Scientific High School Diploma) with emphasis on mathematics, physics and biology, obtaining 13.25/14 in the Spanish <i>Selectividad</i>.";
		csTxt = "<b>CENTRALESUPÉLEC (Former Centrale Paris)</b><br><br>After two years of <i>classes préparatoires MPSI/MP</i> (intensive course in mathematics and physics), I entered the <i>École Centrale Paris</i>, where I graduated in general engineering - Computer Science option. <br>The main disciplines I followed were: Information Systems, Software Development, Digital Networks and Communications, Strategy and Marketing, Ethics and Responsibility, Sustainable Development.";
		pucTxt = "<b>PONTIFICIA UNIVERSIDADE CATÓLICA DO RIO DE JANEIRO (PUC-Rio)</b><br><br>During a year and a half, I did a Double Degree in Computer Science. <br>The main disciplines I followed were: Concurrent Computing and Parallelism, Databases, Operating Systems, Data Structures, Introduction to Data Sciente, Big Data and Streaming, Tests and Software Measurements. <br><br>During my spare time, I also participated in groups to: <br> - A 3h SQL marathon (SBBD 2019), getting 2nd place <br> - A 4h programming marathon (VTEX marathon)";
		// Experiences
		alkuDescription = "<b>E-commerce Developer</b><br>feb-july 2017, Quito";
		numberlyDescription = "<b>Project Manager</b><br>aug 2017-jan 2018, London";
		pdrDescription = "<b>Data Analyst</b><br>feb-june 2018, Barcelona";
		pucInfoDescription = "<b>Software Developer</b><br>april-dec 2019, Rio de Janeiro";
		alkuTxt = "<br><b>ALKUPETS</b><br><i>E-commerce Developer (internship)</i><br><br>ALKU is a social start-up based in Ecuador which produces handmade recycled toys and natural treats for dogs which are environmentally friendly and help local communities.<br>With another 4 students, we developed an e-commerce platform for them to be more visible and spent 1 month in Quito to finish the project and improve the company processes.";
		numberlyTxt = "<br><b>NUMBERLY</b><br><i>Project Manager (internship)</i><br><br>Numberly (former 1000mercis group) is an interactive advertising and marketing company, helping its clients to design, develop, implement, and maximize the ROI of their interactive marketing and advertising campaigns (Internet, mobile phones and tablets).<br>I was responsible for:<br>* Managing emailing and mobile campaigns for UK, Middle East and Spain Clients<br>* Working with graphic designers, marketing teams, front-end developers and data engineering teams<br>* Monitoring of database flows and Adobe workflows<br>* Managing internal projects concerning an unsubscribing page for SMS communication and a briefing platform for clients";
		pdrTxt = "<br><b>PUNT DE REFERÈNCIA</b><br><i>Data Analyst (internship)</i><br><br>Punt de Referència is a Catalan NGO which aims to help unprivileged young adults in their emancipation with different mentoring and housing projects.<br>I was responsible for:<br>* Working on how to collect, store and analyse data on the database & CRM software (SugarCRM) to better measure the impact of Punt de Referencia's projects<br>* Implementing different procedures to make some processes more effective (automating reports and e-mail sending)<br>* Helping in general technical tasks (WordPress, software issues, etc.) and writing documentation on how to use the software and the different processes<br>* Working closely with social educators to learn about their work and understand their needs";
		pucInfoTxt = "<br><b>DATABASE AND BIOINFORMATICS LABORATORY AT PUC-RIO</b><br><i>Software Developer (internship)</i><br><br>The Database and BioInformatics Laboratory is a lab at PUC-Rio that researches and implements software solutions linked to databases.<br>I was part of two projects: the Twitter Crawler Project, which aim was to create a web application that collects and processes Twitter data to help Social Science Researches, where I was responsible for:<br>* Developing new features to improve the platform (user profile and login, data visualization, media analysis, FAQ, automatic e-mail sending, automatic database cleaning, parallelization of tasks, etc. in HTML/CSS and PHP)<br>* Writing documentation and reports about what is done in the application<br>* I also had the opportunity to co-write and present an article about the project at the Brazilian Simposium on Databases (SBBD 2019), where we got a Runner Up Award (top 3 articles).<br><br>The NIMA project, which purpose was to develop a search platform for people to find information about all the actions/people involved/research done in the university in relation to the environment. I was responsible for:<br>* Setting up the Cloud machine and developing a first version of the platform from scratch (Python)<br>* Creating and maintaining the graph database (AllegroGraph with SparQL)";
		// Projects
		collectorTxt = "<b>TWITTER STREAMING COLLECTOR</b><br><br>The aim of this project was to create a tool to collect and process streaming data obtained in real time from the social network Twitter.<br><br>Used : Java, Kafka, Cassandra";
		diseaseSimulationTxt = "<b>DISEASE SIMULATION</b><br><br>This project aimed to work on the concept of graph simulation. In addition, all the concepts were applied in a practical example of population disease contagion.<br><br>Used: Python (NetworkX)";
		dataScienceTxt = "<b>DATA SCIENCE</b><br><br>I did some projects to discover and explore some Data Science concepts in Python:<br>- Descriptive analysis on UN data to explore Gender Inequalities in the world<br>- Classification on a parkinson's disease dataset<br>- Linear Regression & Clusterization on a dataset<br><br>Used: Python (Skicit Learn, Pandas)";
		parallelTxt = "<b>PARALLELIZING WORK</b><br><br>During this project, I parallelized some tasks on the Twitter Crawler project from my internship at the Database and Bioinformatics Lab at PUC-Rio, helping the system become quicker.<br><br>Used: Python";
		metaheuristicsTxt = "<b>METAHEURISTICS</b><br><br>During a course at PUC-Rio, I was introduced to the concepts of metaheuristics and applied them in two projects: <br>- Generalized Vehicle Routing Problem (GVRP)<br>- Multi-Capacity Bin Packing Problem (MCBPP)<br><br>Used: Python";
		// Technologies
		programmingLanguagesTxt = "<b>Programming languages</b>";
		databasesTxt = "<b>Databases</b>";
		softwareTxt = "<b>Software</b>";
		othersTxt = "<b>Others</b>";
		// Interests
		socialTxt = "<b>SOCIAL IMPACT AND VOLUNTEERING</b><br><br>I truly believe in the impact that motivated people can have in our society and in the importance of little daily actions.<br><br>That’s why, when I can, I try to give some of my time to volunteering:<br>* During two years at university, I was president of the social inclusion association <i>Centrale Egalité des Chances (now OSER)</i><br>* I also gave maths and spanish classes to young immigrants in Barcelona (2018) and in Parque Vivo Association in Rio de Janeiro (2019)";
		runningTxt = "<b>SPORTS</b><br><br>In my spare time, I love running, hiking and taking dancing classes!";
		travelingTxt = "<b>TRAVELING</b><br><br>I love traveling and discovering new cultures and landscapes. I am especially passionate about understanding how languages impact on culture and people’s behaviour!";
		technologyTxt = "<b>TECHNOLOGY</b><br><br>I really believe that technology can change our society for good and that it will have a big impact in the next generations, that’s why I want to learn as much as I can and spend my energy on technology projects that have a positive impact.";
	} else {
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea5.png')";
		// Changing texts
		hideMoreInfo();
		text.innerHTML = "Olá! Meu nome é Andrea Mourelo e sou uma jovem desenvolvedora espanhola.<br><br>Meu principal interesse é o desenvolvimento de soluções técnicas ou de <i>software </i> que tenham um forte <b> impacto social</b>, em especial nas áreas da saúde e da educação."
		download.textContent = "BAIXAR CV";
		download_cv.href="CV/CV_Mourelo_Andrea_PT.pdf";
		beginningFooter.textContent = "Icones feitos por ";
		middleFooter.textContent = "em ";
		educationBtn.textContent = "ESTUDOS";
		experiencesBtn.textContent = "EXPERIÊNCIAS";
		projectsBtn.textContent = "PROJETOS";
		technologiesBtn.textContent = "TECNOLOGIAS";
		interestsBtn.textContent = "INTERESSES";
		hover.textContent = "Passe o mouse sobre os elementos para obter mais informações";
		// Education
		lfbDescription = "<b><i>Baccalauréat</i> em Ciências</b><br>1998-2013, Barcelona";
		csDescription = "<b>Graduação em engenharia da computação</b><br>2013-2019, Paris";
		pucDescription = "<b>Dupla diplomação</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "<b>LYCÉE FRANÇAIS DE BARCELONE</b><br><br>No ensino médio, obtive um <i>Baccalauréat Scientifique</i> com ênfase em matemática, física e biologia, obtendo 13,25/14 na <i>Selectividad</i> espanhola.";
		csTxt = "<b>CENTRALESUPÉLEC (Antiga Centrale Paris)</b><br><br>Após dois anos de <i>classes préparatoires MPSI/MP</i> (curso intensivo de matemática e física), entrei na École Centrale Paris, onde me formei em engenharia da computação. <br> As principais disciplinas que fiz foram: Sistemas de Informação, Desenvolvimento de Software, Redes e Comunicações Digitais, Estratégia e Marketing, Ética e Responsabilidade, Desenvolvimento Sustentável.";
		pucTxt = "<b>PONTIFICIA UNIVERSIDADE CATÓLICA DO RIO DE JANEIRO (PUC-Rio)</b><br><br>Durante um ano e meio, fiz um duplo diploma em engenharia da computação. <br> As principais disciplinas que fiz foram: Concorrência e Paralelismo, Bancos de Dados, Sistemas Operacionais, Estruturas de Dados, Introdução à Data Sciente, Big Data e Streaming, Testes e Medidas de Software. <br><br>Durante meu tempo livre, também participei em grupos a: <br> - Uma maratona de SQL de 3h (SBBD 2019), ficando em 2º lugar <br> - Uma maratona de programação de 4h (maratona VTEX)";
		// Experiences
		alkuDescription = "<b>E-commerce Developer</b><br>fev-julho 2017, Quito";
		numberlyDescription = "<b>Project Manager</b><br>agosto 2017-jan 2018, Londres";
		pdrDescription = "<b>Data Analyst</b><br>fev-junho 2018, Barcelona";
		pucInfoDescription = "<b>Software Developer</b><br>abril-dez 2019, Rio de Janeiro";
		alkuTxt = "<br><b>ALKUPETS</b><br><i>E-commerce Developer (estágio)</i><br><br>ALKU é uma startup social no Equador que produz à mão brinquedos reciclados e tratamentos naturais para cães que respeitam o meio ambiente e ajudam às comunidades locais. <br> <br> Com outros 4 alunos, desenvolvemos uma plataforma de e-commerce para torná-los mais visíveis e passamos 1 mês em Quito para concluir o projeto e melhorar os processos da empresa.";
		numberlyTxt = "<br><b>NUMBERLY</b><br><i>Project Manager (estágio)</i><br><br>A Numberly (antigo 1000mercis group) é uma empresa de publicidade e marketing interativa que ajuda seus clientes a projetar, desenvolver, implementar e maximizar o ROI de suas campanhas de marketing e publicidade interativa (Internet, celulares e tablets). <br> <br> Fui responsável por: <br> * Gerenciar as campanhas de email e de dispositivos móveis para clientes no Reino Unido, Oriente Médio e Espanha. * Trabalhar com designers gráficos, equipes de marketing, desenvolvedores front-end e equipes de engenheiros de dados <br> * Monitorar o fluxo dos bancos de dados e os worklflows da Adobe <br> * Gerenciar dois projetos internos: uma página de cancelamento de assinatura para comunicações por SMS e uma plataforma de informações para os clientes";
		pdrTxt = "<br><b>PUNT DE REFERÈNCIA</b><br><i>Data Analyst (estágio)</i><br><br>A Punt de Referència é uma ONG catalã cujo objetivo é ajudar os jovens ex-tutelados pelo governo em sua emancipação com diferentes programas de mentoring e de moradia. <br> <br> Fui responsável por: <br> * Trabalhar em como coletar, armazenar e analisar dados no banco de dados e no software CRM (SugarCRM) para medir melhor o impacto dos projetos<br> * Implementar procedimentos para tornar certos processos mais eficientes (automatizar relatórios e o envio de e-mails) <br> * Ajudar nas tarefas técnicas gerais (WordPress, problemas de software, etc.) e escrever documentação sobre o uso do software e dos diferentes processos <br> * Trabalhar em estreita colaboração com educadores sociais para obter mais informações sobre seu trabalho e entender suas necessidades";
		pucInfoTxt = "<br><b>LABORATORIO DE BANCO DE DADOS E BIOINFORMATICA DA PUC-RIO</b><br><i>Software Developer (estágio)</i><br><br>O Laboratório de Banco de Dados e Bioinformática é um laboratório da PUC-Rio que pesquisa e implementa soluções de software vinculadas a bancos de dados. <br><br> Durante meu estágio, participei de dois projetos. O projeto Twitter Crawler, que teve como objetivo criar uma sistema de coleta e processamento de dados do Twitter, para ajudar aos pesquisadores de ciências sociais, onde fui responsável por: <br> * Desenvolver novas ferramentas para melhorar a plataforma (perfil do usuário e conexão, visualização de dados, análise de mídia, página de perguntas freqüentes, envio automático de e-mails, limpeza automática do banco de dados, paralelização de tarefas etc. em HTML/CSS e PHP) <br> * Escrever documentação e relatórios sobre o que o sistema fazia <br> * Também tive a oportunidade de co-escrever e apresentar um artigo sobre o projeto no Simpósio Brasileiro de Banco de Dados (SBBD 2019), onde obtivemos o prêmio Runner Up (3 melhores artigos). <br> <br> O projeto NIMA, que teve como objetivo desenvolver uma plataforma de busca para encontrar informações sobre todas as ações/pessoas envolvidas/pesquisas feitas na universidade em relação ao meio ambiente. Fui responsável por: <br> * Configurar a máquina na nuvem e desenvolver uma primeira versão da plataforma a partir do zero (Python) <br> * Criar e manter o banco de dados em grafos (AllegroGraph com SparQL)";
		// Projects
		collectorTxt = "<b>TWITTER STREAMING COLLECTOR</b><br><br>O objetivo deste projeto foi criar uma ferramenta para coletar e processar dados de streaming obtidos em tempo real a partir da rede social Twitter <br> <br> Usei: Java, Kafka, Cassandra";
		diseaseSimulationTxt = "<b>DISEASE SIMULATION</b><br><br>Este projeto teve como objetivo trabalhar o conceito de simulação de grafos. Além disso, todos os conceitos foram aplicados em um exemplo prático de contágio de doenças em uma população. <br> <br> Usei: Python (NetworkX)";
		dataScienceTxt = "<b>DATA SCIENCE</b><br><br>Fiz alguns projetos para descobrir e explorar certos conceitos da Data Science: <br> - Análise descritiva dos dados da ONU para explorar as desigualdades de gênero no mundo <br> - Classificação de um conjunto de dados sobre a doença de Parkinson <br > Regressão linear e clustering em um conjunto de dados <br> <br> Usei: Python (Skicit Learn, Pandas)";
		parallelTxt = "<b>PARALLELIZING WORK</b><br><br>Durante esse projeto, paralelizei algumas tarefas do projeto Twitter Crawler do Laboratório de Bancos de Dados e Bioinformática da PUC-Rio, ajudando assim o sistema a ser mais rápido. <br> <br> Usei: Python";
		metaheuristicsTxt = "<b>METAHEURISTICS</b><br><br>Durante uma disciplina na PUC-Rio, fiz uma introdução aos conceitos de metaheurística e os apliquei em dois projetos:<br> - Generalized Vehicle Routing Problem (GVRP)<br>- Multi-Capacity Bin Packing Problem (MCBPP) <br> <br> Usei: Python";
		// Technologies
		programmingLanguagesTxt = "<b>Linguagens de programação</b>";
		databasesTxt = "<b>Bancos de dados</b>";
		softwareTxt = "<b>Software</b>";
		othersTxt = "<b>Outros</b>";
		// Interests
		socialTxt = "<b>IMPACTO SOCIAL E VOLUNTARIADO </b> <br> <br>Realmente acredito que algumas pessoas motivadas podem ter um grande impacto em nossa sociedade e também na importância de pequenas ações diárias. <br> <br> Então, quando posso, tento dedicar parte do meu tempo a projetos de voluntariado: <br> * Por dois anos na universidade, fui presidenta da associação de inclusão social <i> Centrale Égalité des Chances (agora OSER) </i> <br> * Também ensinei matemática e espanhol para jovens imigrantes em Barcelona (2018) e na Associação Parque Vivo do Rio de Janeiro (2019)";
		runningTxt = "<b>ESPORTES </b> <br> <br> No meu tempo livre, adoro correr, fazer trilhas e aulas de dança!";
		travelingTxt = "<b>VIAGENS </b> <br> <br> Adoro viajar e descobrir novas culturas e novas paisagens. Sou especialmente apaixonada por entender o impacto que as línguas têm na cultura e no comportamento das pessoas!";
		technologyTxt = "<b>TECNOLOGIA </b> <br> <br>Realmente acredito que a tecnologia pode mudar positivamente a nossa sociedade e que terá um grande impacto nas próximas gerações, por isso quero aprender o máximo possível e dedicar minha energia a projetos tecnológicos que tenham um impacto positivo.";
	}
}

// Education
function education() {
	// Erase other things
	experiences_disappear();
	projects_disappear();
	technologies_disappear();
	interests_disappear();
	// Set design
	moreinfo_appearing.classList.add("moreinfo_appearing_education_active");
	content.classList.add("content_appearing");
	cs.classList.add("cs_appearing");
	puc.classList.add("puc_appearing");
	lfb.classList.add("lfb_appearing");
	space.classList.add("spaceToFooter");
	// Set text
	cs_txt.innerHTML = csDescription;
	puc_txt.innerHTML = pucDescription;
	lfb_txt.innerHTML = lfbDescription;
	// Images
	cs_img.src = "img/education/logo-centrale-supelec.png";
	puc_img.src = "img/education/logo-puc-rio.jpeg";
	lfb_img.src = "img/education/logo-lfb.jpeg";
	cs_img.classList.remove("cs_img_disappearing");
	puc_img.classList.remove("puc_img_disappearing");
	lfb_img.classList.remove("lfb_img_disappearing");
}

function education_disappear() {
	// Remove classes
	cs.classList.remove("cs_appearing");
	puc.classList.remove("puc_appearing");
	lfb.classList.remove("lfb_appearing");
	space.classList.remove("spaceToFooter");
	// Remove text
	cs_txt.innerHTML = ""
	puc_txt.innerHTML = ""
	lfb_txt.innerHTML = ""
	// Images
	cs_img.classList.add("cs_img_disappearing");
	puc_img.classList.add("puc_img_disappearing");
	lfb_img.classList.add("lfb_img_disappearing");
}

lfb.addEventListener("mouseover", function(){
	showDetails();
	lfbText();
});

lfb.addEventListener("mouseout", function(){
	hideDetailsText();
});

cs.addEventListener("mouseover", function(){
	showDetails();
	csText();
});

cs.addEventListener("mouseout", function(){
	hideDetailsText();
});

puc.addEventListener("mouseover", function(){
	showDetails();
	pucText();
});

puc.addEventListener("mouseout", function(){
	hideDetailsText();
});

// Experiences

function experiences() {
	// Erase other things
	education_disappear();
	projects_disappear();
	technologies_disappear();
	interests_disappear();
	// Set design
	moreinfo_appearing.classList.add("moreinfo_appearing_education_active");
	content.classList.add("content_appearing");
	alku.classList.add("alku_appearing", "images");
	numberly.classList.add("numberly_appearing", "images");
	pdr.classList.add("pdr_appearing", "images");
	pucInfo.classList.add("pucInfo_appearing", "images");
	space.classList.add("spaceToFooter");
	// Set text
	alku_txt.innerHTML = alkuDescription;
	numberly_txt.innerHTML = numberlyDescription;
	pdr_txt.innerHTML = pdrDescription;
	pucInfo_txt.innerHTML = pucInfoDescription;
}

function experiences_disappear(){
	// Remove classes
	moreinfo_appearing.classList.remove("moreinfo_appearing_education_active");
	alku.classList.remove("alku_appearing", "images");
	numberly.classList.remove("numberly_appearing", "images");
	pdr.classList.remove("pdr_appearing", "images");
	pucInfo.classList.remove("pucInfo_appearing", "images");
	space.classList.remove("spaceToFooter");
	// Set text
	alku_txt.innerHTML = "";
	numberly_txt.innerHTML = "";
	pdr_txt.innerHTML = "";
	pucInfo_txt.innerHTML = "";
}

alku.addEventListener("mouseover", function(){
	showDetailsLong();
	alkuText();
});

alku.addEventListener("mouseout", function(){
	hideDetailsText();
});

numberly.addEventListener("mouseover", function(){
	showDetailsLong();
	numberlyText();
});

numberly.addEventListener("mouseout", function(){
	hideDetailsText();
});

pdr.addEventListener("mouseover", function(){
	showDetailsLong();
	pdrText();
});

pdr.addEventListener("mouseout", function(){
	hideDetailsText();
});

pucInfo.addEventListener("mouseover", function(){
	showDetailsLong();
	pucInfoText();
});

pucInfo.addEventListener("mouseout", function(){
	hideDetailsText();
});

// Projects

function projects() {
	// Erase other things
	education_disappear();
	experiences_disappear();
	technologies_disappear();
	interests_disappear();
	// Set design
	moreinfo_appearing.classList.add("moreinfo_appearing_education_active");
	content.classList.add("content_appearing");
	collector.classList.add("images_projects");
	diseaseSimulation.classList.add("images_projects");
	dataScience.classList.add("images_projects");
	parallel.classList.add("images_projects");
	metaheuristics.classList.add("images_projects");
	// Set text
	collector.innerHTML = "<b>Twitter Streaming Collector</b>";
	diseaseSimulation.innerHTML = "<b>Disease Simulation</b>";
    dataScience.innerHTML = "<b>Data Science</b>";
	parallel.innerHTML = "<b>Parallelizing Work</b>";
	metaheuristics.innerHTML = "<b>Metaheuristics</b>";
}

function projects_disappear(){
	// Remove classes
	moreinfo_appearing.classList.remove("moreinfo_appearing_education_active");
	collector.classList.remove("images_projects");
	diseaseSimulation.classList.remove("images_projects");
	dataScience.classList.remove("images_projects");
	parallel.classList.remove("images_projects");
	metaheuristics.classList.remove("images_projects");
	// Set text
	collector.innerHTML = "";
	diseaseSimulation.innerHTML = "";
    dataScience.innerHTML = "";
	parallel.innerHTML = "";
	metaheuristics.innerHTML = "";
}

collector.addEventListener("mouseover", function(){
	showDetails();
	collectorText();
});

collector.addEventListener("mouseout", function(){
	hideDetailsText();
});

diseaseSimulation.addEventListener("mouseover", function(){
	showDetails();
	diseaseSimulationText();
});

diseaseSimulation.addEventListener("mouseout", function(){
	hideDetailsText();
});

dataScience.addEventListener("mouseover", function(){
	showDetails();
	dataScienceText();
});

dataScience.addEventListener("mouseout", function(){
	hideDetailsText();
});

parallel.addEventListener("mouseover", function(){
	showDetails();
	parallelText();
});

parallel.addEventListener("mouseout", function(){
	hideDetailsText();
});

metaheuristics.addEventListener("mouseover", function(){
	showDetails();
	metaheuristicsText();
});

metaheuristics.addEventListener("mouseout", function(){
	hideDetailsText();
});


// Technologies

function technologies() {
	// Erase other things
	education_disappear();
	experiences_disappear();
	projects_disappear();
	interests_disappear();
	// Set design
	moreinfo_appearing.classList.add("moreinfo_appearing_experiences_active");
	content.classList.add("content_appearing");
	programming_languages.classList.add("images_technologies");
	databases.classList.add("images_technologies");
	software.classList.add("images_technologies");
	others.classList.add("images_technologies");
	// Set text
	programming_languages.innerHTML = programmingLanguagesTxt;
	databases.innerHTML = databasesTxt;
    software.innerHTML = softwareTxt;
	others.innerHTML = othersTxt;
}

function technologies_disappear() {
	// Remove classes
	moreinfo_appearing.classList.remove("moreinfo_appearing_experiences_active");
	programming_languages.classList.remove("images_technologies");
	databases.classList.remove("images_technologies");
	software.classList.remove("images_technologies");
	others.classList.remove("images_technologies");
	// Set text
	programming_languages.innerHTML = "";
	databases.innerHTML = "";
    software.innerHTML = "";
	others.innerHTML = "";
}

programming_languages.addEventListener("mouseover", function(){
	showDetails();
	programmingLanguagesImages();
});

programming_languages.addEventListener("mouseout", function(){
	hideProgrammingLanguagesImages();
});

databases.addEventListener("mouseover", function(){
	showDetails();
	databasesImages();
});

databases.addEventListener("mouseout", function(){
	hideDatabasesImages();
});

software.addEventListener("mouseover", function(){
	showDetails();
	softwareImages();
});

software.addEventListener("mouseout", function(){
	hideSoftwareImages();
});

others.addEventListener("mouseover", function(){
	showDetails();
	othersImages();
});

others.addEventListener("mouseout", function(){
	hideOthersImages();
});

// Interests

function interests() {
	// Erase other things
	education_disappear();
	experiences_disappear();
	projects_disappear();
	technologies_disappear();
	// Set design
	moreinfo_appearing.classList.add("moreinfo_appearing_experiences_active");
	content.classList.add("content_appearing");
	social.classList.add("images_interests", "social_appearing");
	running.classList.add("images_interests", "running_appearing");
	technology.classList.add("images_interests", "technology_appearing");
	traveling.classList.add("images_interests", "traveling_appearing");
}
function interests_disappear(){
	moreinfo_appearing.classList.remove("moreinfo_appearing_experiences_active");
	social.classList.remove("images_interests", "social_appearing");
	running.classList.remove("images_interests", "running_appearing");
	technology.classList.remove("images_interests", "technology_appearing");
	traveling.classList.remove("images_interests", "traveling_appearing");
}

social.addEventListener("mouseover", function(){
	showDetails();
	socialText();
});

social.addEventListener("mouseout", function(){
	hideDetailsText();
});

running.addEventListener("mouseover", function(){
	showDetails();
	runningText();
});

running.addEventListener("mouseout", function(){
	hideDetailsText();
});

traveling.addEventListener("mouseover", function(){
	showDetails();
	travelingText();
});

traveling.addEventListener("mouseout", function(){
	hideDetailsText();
});

technology.addEventListener("mouseover", function(){
	showDetails();
	technologyText();
});

technology.addEventListener("mouseout", function(){
	hideDetailsText();
});

// ------- TEXTS -------

// Texts - general

function showMoreInfo(){
	moreinfo_appearing.style.visibility = 'visible';
}

function showDetails(){
	details.style.visibility = 'visible';
	details.classList.remove("details_short", "details_long");
	details.classList.add("details");
}

function showDetailsShort(){
	details.style.visibility = 'visible';
	details.classList.remove("details", "details_long");
	details.classList.add("details_short");
}

function showDetailsLong(){
	details.style.visibility = 'visible';
	details.classList.remove("details", "details_short");
	details.classList.add("details_long");
}

function hideMoreInfo() {
	moreinfo_appearing.style.visibility = 'hidden';
	details.style.visibility = 'visible';
}

function hideDetailsText(){
	detailsTxt.textContent = "";
}

// Texts - Education

function lfbText(){
	detailsTxt.innerHTML = lfbTxt;
}

function csText(){
	detailsTxt.innerHTML = csTxt;
}

function pucText(){
	detailsTxt.innerHTML = pucTxt;
}

// Texts - Experiences

function alkuText(){
	detailsTxt.innerHTML = alkuTxt;
}

function numberlyText(){
	detailsTxt.innerHTML = numberlyTxt;
}

function pdrText(){
	detailsTxt.innerHTML = pdrTxt;
}

function pucInfoText(){
	detailsTxt.innerHTML = pucInfoTxt;
}

// Texts - Projects

function collectorText(){
	detailsTxt.innerHTML = collectorTxt;
}

function diseaseSimulationText(){
	detailsTxt.innerHTML = diseaseSimulationTxt;
}

function dataScienceText(){
	detailsTxt.innerHTML = dataScienceTxt;
}

function parallelText(){
	detailsTxt.innerHTML = parallelTxt;
}

function metaheuristicsText(){
	detailsTxt.innerHTML = metaheuristicsTxt;
}

// Texts - Interests

function socialText(){
	detailsTxt.innerHTML = socialTxt;
}

function runningText(){
	detailsTxt.innerHTML = runningTxt;
}

function travelingText(){
	detailsTxt.innerHTML = travelingTxt;
}

function technologyText(){
	detailsTxt.innerHTML = technologyTxt;
}

// ------- IMAGES -------

// Images - general

function hideDetailsImages() {
}

// Images - Technologies - show
 
function programmingLanguagesImages() {
	showDetailsLong();
	python.classList.add("icons_appearing", "python_appearing");
	java.classList.add("icons_appearing", "java_appearing");
	c.classList.add("icons_appearing", "c_appearing");
	php.classList.add("icons_appearing", "php_appearing");
	web.classList.add("icons_appearing", "web_appearing");
	sql.classList.add("icons_appearing", "sql_appearing");
	sparql.classList.add("icons_appearing", "sparql_appearing");
}

function databasesImages() {
	showDetailsLong();
	postgres.classList.add("icons_appearing", "postgres_appearing");
	mysql.classList.add("icons_appearing", "mysql_appearing");
	cassandra.classList.add("icons_appearing", "cassandra_appearing");
	allegro.classList.add("icons_appearing", "allegro_appearing");
}

function softwareImages() {
	showDetailsLong();
	adobe.classList.add("icons_appearing_3", "adobe_appearing");
	sugar.classList.add("icons_appearing_3", "sugar_appearing");
	excel.classList.add("icons_appearing_3", "excel_appearing");
}

function othersImages() {
	showDetailsLong();
	github.classList.add("icons_appearing_3", "github_appearing");
	linux.classList.add("icons_appearing_3", "linux_appearing");
	kafka.classList.add("icons_appearing_3", "kafka_appearing");
}

// Images - Technologies - Hide

function hideProgrammingLanguagesImages() {
	python.classList.remove("icons_appearing", "python_appearing");
	java.classList.remove("icons_appearing", "java_appearing");
	c.classList.remove("icons_appearing", "c_appearing");
	php.classList.remove("icons_appearing", "php_appearing");
	web.classList.remove("icons_appearing", "web_appearing");
	sql.classList.remove("icons_appearing", "sql_appearing");
	sparql.classList.remove("icons_appearing", "sparql_appearing");
}

function hideDatabasesImages() {
	postgres.classList.remove("icons_appearing", "postgres_appearing");
	mysql.classList.remove("icons_appearing", "mysql_appearing");
	cassandra.classList.remove("icons_appearing", "cassandra_appearing");
	allegro.classList.remove("icons_appearing", "allegro_appearing");
}

function hideSoftwareImages() {
	adobe.classList.remove("icons_appearing_3", "adobe_appearing");
	sugar.classList.remove("icons_appearing_3", "sugar_appearing");
	excel.classList.remove("icons_appearing_3", "excel_appearing");
}

function hideOthersImages() {
	github.classList.remove("icons_appearing_3", "github_appearing");
	linux.classList.remove("icons_appearing_3", "linux_appearing");
	kafka.classList.remove("icons_appearing_3", "kafka_appearing");
}
