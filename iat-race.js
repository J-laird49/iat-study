define(['pipAPI', 'https://cdn.jsdelivr.net/gh/J-laird49/iat-study@main/iat-core.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

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

		base_url : {//Where are your images at?
			image : 'https://github.com/J-laird49/iat-study/tree/main/images'
		} 
	});
});
