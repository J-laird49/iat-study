define(['pipAPI', 'https://cdn.jsdelivr.net/gh/J-laird49/iat-study@main/iat-core.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    //Randomly select which of two sets of category labels to use.
    let raceSet = API.shuffle(['a','b'])[0];
    let blackLabels = [];
    let whiteLabels = [];

    if (raceSet == 'a') {
        blackLabels.push('African Americans');
        whiteLabels.push('European Americans');
    } else {
        blackLabels.push('Black people');
        whiteLabels.push('White people');
    }

    API.addGlobal({
        raceiat:{},
        raceSet:raceSet,
        blackLabels:blackLabels,
        whiteLabels:whiteLabels,
        //Select randomly what attribute words to see. 
        //Based on Axt, Feng, & Bar-Anan (2021).
        posWords : API.shuffle([
            'Glad', 'Joyful', 'Delight', 'Friendship', 'Terrific', 'Happy', 'Friend', 'Adore', 'Beautiful'
        ]), 
        negWords : API.shuffle([
            'Horrible', 'Humiliate', 'Hurtful', 'Bothersome', 'Disgust', 'Awful', 'Rotten', 'Poison', 'Abuse'
        ])
    });

    let global = API.getGlobal();
	
	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'bf14_nc.jpg'}, 
    			{image : 'bf23_nc.jpg'}, 
    			{image : 'bf56_nc.jpg'}, 
    			{image : 'bm14_nc.jpg'}, 
    			{image : 'bm23_nc.jpg'}, 
    			{image : 'bm56_nc.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'wf2_nc.jpg'}, 
    			{image : 'wf3_nc.jpg'}, 
    			{image : 'wf6_nc.jpg'}, 
    			{image : 'wm1_nc.jpg'}, 
    			{image : 'wm4_nc.jpg'}, 
    			{image : 'wm6_nc.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]},
                {word: global.negWords[6]},
                {word: global.negWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
                {word: global.posWords[6]},
                {word: global.posWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
	},
	base_url : {//Where are your images at?
		image : 'https://github.com/J-laird49/iat-study/tree/main/images'
	},
	isTouch : global.$isTouch
     });
});
