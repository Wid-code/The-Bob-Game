// Array wit objects like walls, points, tunnels etc.
var objects = [];

// Level loading
function loadLevel(currentLevel) {

    // Checking for possible loaded objects
    var wallsObjects = document.getElementsByClassName("wall");
	var pointsObjects = document.getElementsByClassName("point");
	var tunelObjects = document.getElementsByClassName("tunel");
	var portalObjects = document.getElementsByClassName("portal");

	// Deleting objects that are already loaded
	Array.from(wallsObjects).map(wallFromDocument => {
		wallFromDocument.remove();
	});
	Array.from(pointsObjects).map(pointFromDocument => {
		pointFromDocument.remove();
	});
	Array.from(tunelObjects).map(tunelFromDocument => {
		tunelFromDocument.remove();
	});
	Array.from(portalObjects).map(portalFromDocument => {
		portalFromDocument.remove();
	});

	// Array clearing
    objects = [];

	// Creating objects declared in "objects.js"
	objectsProperties.map(singleProperty => {
		if (singleProperty.level == currentLevel) {

			let newObject = document.createElement("div");
			
			newObject.style.left = singleProperty.left;
			newObject.style.top = singleProperty.top;
			newObject.style.height = singleProperty.height;
			newObject.style.width = singleProperty.width;
			newObject.style.backgroundColor = singleProperty.backgroundColor;
			newObject.style.backgroundImage = singleProperty.background;
			newObject.className = singleProperty.objectType;

			document.querySelector(".container > .shadow").appendChild(newObject);

			objects.push({
				objectType: singleProperty.objectType,
				x: newObject.getBoundingClientRect().x,
				y: newObject.getBoundingClientRect().y,
				height: newObject.getBoundingClientRect().height,
				width: newObject.getBoundingClientRect().width,
				remove: () => { newObject.remove() },
				doAction: () => { singleProperty.doAction(newObject) }
			});
		}
	});
	// Making sure that Bob respawns in declared coordinates
	bobRespawn();
}

