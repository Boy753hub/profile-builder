var template = document.getElementById("template").innerHTML,
	form = document.getElementById("form"),
	preview = document.getElementById("preview"),
	previewBtn = document.getElementById("previewBtn");


previewBtn.addEventListener("click", function() {
	var data = getFormData(),
		html = Mustache.render(template, data);
        preview.innerHTML = html;
        document.body.removeChild(form);
});

function getFormData() {
	return {
		title: getValue("title"),
		firstName: getValue("firstName"),
		lastName: getValue("lastName"),
		style: getValue("style"),
		address: getValue("address"),
		address2: getValue("address2"),
		city: getValue("city"),
		zip: getValue("zip"),
		email: getValue("email"),
		website: getValue("website"),
		interests: getValue("interests"),
		experience: getValue("experience"),
		style: getValue("style")
	};
}

function getValue(id) {
	return document.getElementById(id).value;
}

function setValue(id, value) {
	document.getElementById(id).value = value;
}

