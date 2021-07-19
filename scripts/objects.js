// Ojects to load on maps according to the current level
var objectsProperties = [
    
    // Level 1 

	{
        objectType: "wall",
		level: 1, 
        top: "80%",
        left: "0%",
        height: "20%",
        width: "63%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
	{
        objectType: "wall",
		level: 1,
        top: "40%",
        left: "75%",
        height: "60%",
        width: "25%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
	{
        objectType: "wall",
		level: 1,
        top: "0%",
        left: "58%",
        height: "66%",
        width: "5%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
		level: 1,
        top: "25%",
        left: "45%",
        height: "3%",
        width: "10%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
		level: 1,
        top: "40%",
        left: "15%",
        height: "3%",
        width: "10%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
		level: 1,
        top: "60%",
        left: "35%",
        height: "3%",
        width: "10%",
		background: "url(./images/brickWall.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "point",
        level: 1,
        top: "20%",
        left: "49%",
        height: "2vh",
        width: "2vh",
        doAction: (object) => { }
	},
    {
        objectType: "portal",
        level: 1,
        top: "calc(40% - 8vh)",
        left: "100%",
        height: "8vh",
        width: "2vh",
        doAction: (object) => { }
    },
    {
        objectType: "tunel",
        level: 1,
        top: "0",
        left: "63%",
        height: "100%",
        width: "12%",
        doAction: (object) => { }
    },

    // Level 2

	{
        objectType: "wall",
        level: 2,
        top: "90%",
        left: "0%",
        height: "10%",
        width: "20%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "90%",
        left: "80%",
        height: "40%",
        width: "20%",
		background: "url(./images/brickWallDark.png)",
        doAction: () => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "90%",
        left: "35%",
        height: "40%",
        width: "10%",
		background: "url(./images/brickWallDark.png)",
        doAction: () => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "90%",
        left: "55%",
        height: "40%",
        width: "10%",
		background: "url(./images/brickWallDark.png)",
        doAction: () => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "57%",
        left: "0%",
        height: "10%",
        width: "90%",
		background: "url(./images/brickWallDark.png)",
        doAction: () => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "25%",
        left: "10%",
        height: "10%",
        width: "90%",
		background: "url(./images/brickWallDark.png)",
        doAction: () => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "0",
        left: "60%",
        height: "20%",
        width: "4%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "10%",
        left: "80%",
        height: "15%",
        width: "4%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "10%",
        left: "40%",
        height: "15%",
        width: "4%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "35%",
        left: "44%",
        height: "15%",
        width: "4%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 2,
        top: "42%",
        left: "54%",
        height: "15%",
        width: "4%",
		background: "url(./images/brickWallDark.png)",
        doAction: (object) => {  }
	},
    {
        objectType: "point",
        level: 2,
        top: "46%",
        left: "50%",
        height: "2vh",
        width: "2vh",
        doAction: (object) => {}
	},
    {
        objectType: "portal",
        level: 2,
        top: "calc(25% - 8vh)",
        left: "100%",
        height: "8vh",
        width: "2vh",
        doAction: (object) => { }
    },

    // Level 3

    {
        objectType: "wall",
        level: 3,
        top: "50%",
        left: "0",
        height: "5%",
        width: "10%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "wall",
        level: 3,
        top: "40%",
        left: "16%",
        height: "60%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},
    {
        objectType: "wall",
        level: 3,
        top: "0",
        left: "16%",
        height: "20%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},
    {
        objectType: "wall",
        level: 3,
        top: "70%",
        left: "36%",
        height: "30%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},
    {
        objectType: "wall",
        level: 3,
        top: "0",
        left: "36%",
        height: "50%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},
    {
        objectType: "wall",
        level: 3,
        top: "30%",
        left: "60%",
        height: "70%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},
    {
        objectType: "wall",
        level: 3,
        top: "0",
        left: "60%",
        height: "10%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},{
        objectType: "wall",
        level: 3,
        top: "55%",
        left: "80%",
        height: "60%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},{
        objectType: "wall",
        level: 3,
        top: "0",
        left: "80%",
        height: "35%",
        width: "4%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => { bobRespawn() }
	},{
        objectType: "wall",
        level: 3,
        top: "50%",
        left: "90%",
        height: "5%",
        width: "10%",
		background: "url(./images/brickWallGreen.JPG)",
        doAction: (object) => {  }
	},
    {
        objectType: "tunel",
        level: 3,
        top: "0",
        left:"45%",
        height: "100%",
        width: "10%",
        doAction: (object) => {  }
    },
    {
        objectType: "point",
        level: 3,
        top: "5%",
        left: "27%",
        height: "2vh",
        width: "2vh",
        doAction: (object) => {}
	},
    {
        objectType: "portal",
        level: 3,
        top: "calc(50% - 8vh)",
        left: "100%",
        height: "8vh",
        width: "2vh",
        doAction: (object) => { }
    }

    
]