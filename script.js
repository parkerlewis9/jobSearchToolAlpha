window.onload = function() {
	const somaCompanies = [	
						"Digital think",
						"User Testing",
						"tilt",
						"ohm connect",
						"iheart media",
						"lion semiconductor",
						"guaranteed rate",
						"envoy",
						"brigade",
						"techsoup global",
						"ubisoft",
						"hosting",
						"frog",
						"talix",
						"SAY",
						"splunk>",
						"saison",
						"6sense",
						"olivia",
						"roboto games",
						"jax vineyards",
						"win-win",
						"grid net",
						"wall.a.be inc",
						"tendo",
						"KPCB",
						"light",
						"sandbox",
						"matter",
						"idean",
						"degreed",
						"CMG",
						"Weebly",
						"The IoT CDM.",
						"criteol",
						"live work",
						"arcanum",
						"juniper networks",
						"HSK",
						"HoneyBook",
						"Boosted Inc",
						"DKC Public Relations",
						"Sauce Labs Inc",
						"Turbine Labs",
						"Awasu",
						"Rocketport Capital",
						"Element Analytics",
						"Gigwalk",
						"Life 360",
						"august"
					];


	let jobListDiv = document.getElementById("job-list");


	for(let companyId = 0; companyId < somaCompanies.length; companyId++) {
		let curCompany = somaCompanies[companyId];
		let jobDiv = createJobComponent(curCompany, companyId);
		
		jobListDiv.appendChild(jobDiv);
	}

	checkCompletedInLocalStorage();
};

function checkCompletedInLocalStorage() {
	for(let companyId in localStorage){
		if(localStorage[companyId] === "completed") {
			let completedCompanyInput = document.getElementById(companyId);
			completedCompanyInput.checked = true;
		}
	}
}

function createJobComponent(companyName, companyId) {
	let jobDiv = createJobDiv(companyName, companyId);
	let googleLink = createGoogleLink(companyName);
	
	jobDiv.appendChild(googleLink);

	return jobDiv;

}

function createJobDiv(companyName, companyId) {
	let jobDiv = document.createElement("div")
	jobDiv.classList.add("bg-info");

	let completedCheckbox = createCompletedCheckbox(companyId);
	jobDiv.appendChild(completedCheckbox)

	return jobDiv;
}

function createGoogleLink(companyName) {
	let googleLink = document.createElement("a");
	googleLink.setAttribute("href", `https://www.google.com/#q=${encodeURI(companyName + " san francisco")}&*`);
	googleLink.setAttribute("target", "_blank")
	googleLink.innerText = companyName;

	return googleLink;
}

function createCompletedCheckbox(companyId) {
	let checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	checkBox.id = companyId;

	checkBox.addEventListener("click", changeCompletedStatus)

	return checkBox;
}

function changeCompletedStatus(e) {
	localStorage[this.id] === "completed" ? toggleStatus.call(this, "notCompleted") : toggleStatus.call(this, "completed")
	
}

function toggleStatus(booleanString) {
	localStorage.setItem(this.id, booleanString)
}

