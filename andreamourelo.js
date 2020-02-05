// ------- VARIABLES -------
// General
var h1 = document.querySelector("h1");
var cv = document.querySelector("#cv");
var photo = document.querySelector("#photo");
var text = document.querySelector("#text");
var download = document.querySelector("#download");
var beginningFooter = document.querySelector("#beginningFooter");
var middleFooter = document.querySelector("#middleFooter");
var photo = document.querySelector("#photo");
var moreinfo = document.querySelector(".moreinfo");
var moreinfo_appearing = document.querySelector(".moreinfo_appearing");
var content = document.querySelector(".content");
var details = document.querySelector(".details");
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
// var csDescription = "<b>Diplôme d'ingénieure généraliste</b><br>2013-2019, Paris";
// var pucDescription = "<b>Double diplôme en informatique</b><br>2018-2019, Rio de Janeiro";
// var lfbDescription = "<b>Baccalauréat Scientifique</b><br>1998-2013, Barcelone";

// Experiences
var alku = document.querySelector(".alku");
var numberly = document.querySelector(".numberly");
var pdr = document.querySelector(".pdr");
var pucInfo = document.querySelector(".puc-info");
var alku_txt = document.querySelector(".alku_txt");
var numberly_txt = document.querySelector(".numberly_txt");
var pdr_txt = document.querySelector(".pdr_txt");
var pucInfo_txt = document.querySelector(".puc-info_txt");
// var alkuTxt = "<b>ALKUPETS</b><br><i>E-commerce Developer (stage)</i><br><br>During 6 months ";
// var numberlyTxt = "<b>NUMBERLY<br></b><i>Project Manager (stage)</i><br><br>During 6 months ";
// var pdrTxt = "<b>PUNT DE REFERÈNCIA</b><br><i>Data Analyst (stage)</i><br><br>During 6 months ";
// var pucInfoTxt = "<b>LABORATORIO DE BANCO DE DADOS E BIOINFORMATICA PUC-RIO</b><br><i>Software Developer (stage)</i><br><br>During 6 months ";
// var alkuDescription = "<b>E-commerce Developer</b><br>fev-juillet 2017, Quito";
// var numberlyDescription = "<b>Project Manager</b><br>aout 2017-janvier 2018, Londres";
// var pdrDescription = "<b>Data Analyst</b><br>fev-juin 2018, Barcelone";
// var pucInfoDescription = "<b>Software Developer</b><br>avril-déc 2019, Rio de Janeiro";

// Projects 
var collector = document.querySelector(".collector");
var diseaseSimulation = document.querySelector(".diseaseSimulation");
var dataScience = document.querySelector(".dataScience");
var parallel = document.querySelector(".parallel");
var metaheuristics = document.querySelector(".metaheuristics");
// var collectorTxt = "accalauréat";
// var diseaseSimulationTxt = "accalauréat";
// var dataScienceTxt = "accalauréat";
// var parallelTxt = "accalauréat";
// var metaheuristicsTxt = "accalauréat";

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
var lfbDescription = lfb_txt.innerHTML;
var csDescription = cs_txt.innerHTML;
var pucDescription = puc_txt.innerHTML;

var lfbTxt, csTxt, pucTxt,
	alkuDescription, numberlyDescription, pdrDescription, pucInfoDescription, alkuTxt, numberlyTxt, pdrTxt, pucInfoTxt,
	collectorTxt, diseaseSimulationTxt, dataScienceTxt, parallelTxt, metaheuristicsTxt, 
	socialTxt, runningTxt, travelingTxt, technologyTxt;

// var frenchText = "Bonjour ! Je m'appelle Andrea Mourelo et je suis développeuse." +
// 				"<br><br>Je suis intéressée par le développement de solutions logicielles ou techniques" +
// 				"<br>ayant un réel <b>impact social</b>, notamment dans les domaines de la santé ou l'éducation.";

// Spanish

var spanishText = "¡Hola! Me llamo Andrea Mourelo ";

// English

var englishText = "Hello! My name is Andrea Mourelo";

// Portuguese

var portugueseText = "Oi! meu nome é Andrea Mourelo";

var frenchFooter = 


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
		// Changing texts
		text.innerHTML = "Bonjour ! Je m'appelle Andrea Mourelo et je suis développeuse." +
		    "<br><br>Je suis intéressée par le développement de solutions logicielles ou techniques" +
	        "<br>ayant un réel <b>impact social</b>, notamment dans les domaines de la santé ou l'éducation.";
		download.textContent = "TÉLÉCHARGER CV";
		beginningFooter.textContent = "Icones faites par ";
		middleFooter.textContent = "sur ";
		educationBtn.textContent = "FORMATION";
		experiencesBtn.textContent = "EXPÉRIENCES";
		projectsBtn.textContent = "PROJETS";
		technologiesBtn.textContent = "TECHNOLOGIES";
		interestsBtn.textContent = "INTÉRÊTS";
		hideMoreInfo();
		lfbDescription = "<b>Baccalauréat Scientifique</b><br>1998-2013, Barcelone";
		csDescription = "<b>Diplôme d'ingénieure généraliste</b><br>2013-2019, Paris";
		pucDescription = "<b>Double diplôme en informatique</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "oiii";
		// lfbTxt, csTxt, pucTxt,
		// 	alkuDescription, numberlyDescription, pdrDescription, pucInfoDescription, alkuTxt, numberlyTxt, pdrTxt, pucInfoTxt,
		// 	collectorTxt, diseaseSimulationTxt, dataScienceTxt, parallelTxt, metaheuristicsTxt, 
		// 	socialTxt, runningTxt, travelingTxt, technologyTxt;
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea.png')";
	} else if (lang === "es") {
		// Changing texts
		text.textContent = spanishText;
		download.textContent = "DESCARGAR CV";
		beginningFooter.textContent = "Iconos hechos por ";
		middleFooter.textContent = "en ";
		educationBtn.textContent = "FORMACIÓN";
		experiencesBtn.textContent = "EXPERIENCIAS";
		projectsBtn.textContent = "PROYECTOS";
		technologiesBtn.textContent = "TECNOLOGIAS";
		interestsBtn.textContent = "INTERESES";
		hideMoreInfo();
		lfbDescription = "<b>Baccalauréat Científico</b><br>1998-2013, Barcelone";
		csDescription = "<b>Diplôme d'ingénieure généraliste</b><br>2013-2019, Paris";
		pucDescription = "<b>Double diplôme en informatique</b><br>2018-2019, Rio de Janeiro";
		lfbTxt = "xd";
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/sbbd1.png')";
	} else if (lang === "uk") {
		// Changing texts
		text.textContent = englishText;
		download.textContent = "DOWNLOAD CV";
		beginningFooter.textContent = "Icons made by ";
		middleFooter.textContent = "in ";
		educationBtn.textContent = "EDUCATION";
		experiencesBtn.textContent = "EXPERIENCES";
		projectsBtn.textContent = "PROJECTS";
		technologiesBtn.textContent = "TECHNOLOGIES";
		interestsBtn.textContent = "INTERESTS";
		hideMoreInfo();
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea9.png')";
	} else {
		// Changing texts
		text.textContent = portugueseText;
		download.textContent = "BAIXAR CV";
		beginningFooter.textContent = "Icones feitos por ";
		middleFooter.textContent = "em ";
		educationBtn.textContent = "ESTUDOS";
		experiencesBtn.textContent = "EXPERIÊNCIAS";
		projectsBtn.textContent = "PROJETOS";
		technologiesBtn.textContent = "TECNOLOGIAS";
		interestsBtn.textContent = "INTERESES";
		hideMoreInfo();
		// Changing photo
		photo.style.backgroundImage = "url('img/personal/andrea5.png')";
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
	showDetails();
	alkuText();
});

alku.addEventListener("mouseout", function(){
	hideDetailsText();
});

numberly.addEventListener("mouseover", function(){
	showDetails();
	numberlyText();
});

numberly.addEventListener("mouseout", function(){
	hideDetailsText();
});

pdr.addEventListener("mouseover", function(){
	showDetails();
	pdrText();
});

pdr.addEventListener("mouseout", function(){
	hideDetailsText();
});

pucInfo.addEventListener("mouseover", function(){
	showDetails();
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
	programming_languages.innerHTML = "<b>Programming Languages</b>";
	databases.innerHTML = "<b>Databases</b>";
    software.innerHTML = "<b>Software</b>";
	others.innerHTML = "<b>Others</b>";
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
	details.textContent = "";
}

// Texts - Education

function lfbText(){
	details.innerHTML = lfbTxt;
}

function csText(){
	details.innerHTML = csTxt;
}

function pucText(){
	details.innerHTML = pucTxt;
}

// Texts - Experiences

function alkuText(){
	details.innerHTML = alkuTxt;
}

function numberlyText(){
	details.innerHTML = numberlyTxt;
}

function pdrText(){
	details.innerHTML = pdrTxt;
}

function pucInfoText(){
	details.innerHTML = pucInfoTxt;
}

// Texts - Projects

function collectorText(){
	details.innerHTML = collectorTxt;
}

function diseaseSimulationText(){
	details.innerHTML = diseaseSimulationTxt;
}

function dataScienceText(){
	details.innerHTML = dataScienceTxt;
}

function parallelText(){
	details.innerHTML = parallelTxt;
}

function metaheuristicsText(){
	details.innerHTML = metaheuristicsTxt;
}

// Texts - Interests

function socialText(){
	details.innerHTML = socialTxt;
}

function runningText(){
	details.innerHTML = runningTxt;
}

function travelingText(){
	details.innerHTML = travelingTxt;
}

function technologyText(){
	details.innerHTML = technologyTxt;
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

