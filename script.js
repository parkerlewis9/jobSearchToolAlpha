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


	for(let i = 0; i < somaCompanies.length; i++) {
		let curCompany = somaCompanies[i];
		let jobDiv = createJobComponent(curCompany);
		jobListDiv.appendChild(jobDiv);
	}

};

function createJobComponent(companyName) {
	let jobDiv = createJobDiv(companyName);
	let googleLink = createGoogleLink(companyName);
	
	jobDiv.appendChild(googleLink);

	return jobDiv;

}

function createJobDiv(companyName) {
	let jobDiv = document.createElement("div")
	jobDiv.classList.add("bg-info");

	return jobDiv;
}

function createGoogleLink(companyName) {
	let googleLink = document.createElement("a");
	googleLink.setAttribute("href", `https://www.google.com/#q=${encodeURI(companyName + " san francisco")}&*`);
	googleLink.setAttribute("target", "_blank")
	googleLink.innerText = companyName;

	return googleLink;
}



