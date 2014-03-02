//(function(){
	var quizJSON = {
		"info": {
			"name":    "Ethical Principles for Nursing",
			"subtittle" : "Drag & Drop Quiz",
			"main":    "<p></p>",
			"results": "",
			"level1":  "",
			"level2":  "",
			"level3":  "",
			"level4":  "",
			"level5":  "" // no comma here
		},
		"questions": [
		// Each Question Comes In The Following Format
			{ // 1ST QUESTION NB droppables id names must be unique for each question
			//NB. droppable id/css format is target-qX-Y where X= quest No. and Y = target element No.
				"qid" : "1",
				"quest" : "Drag and drop each label to correctly identify the structures in the image below.",
				"css" : {
					".qtxt": {
						//position: "absolute",
						"text-align": "left",
						margin: "0 auto",
						padding: ".5em 0 0 0",
						width: "90%",
						font: "bold 0.95em/1.5em Georgia, sans-serif, Helvetica"
					},
					".qtxt h4": {
						font: "1.2em Georgia, sans-serif, Helvetica"
					},
					"#imgcon-1": {
						background: "url('img/DS1.jpg') no-repeat center center",
						width: "400px",
						height: "300px",
					},
					"#target-q1-1": {
						top: "30px",
						left: "75px"
					},
					"#target-q1-2": {
						top: "90px",
						left: "283px"
					},
					"#target-q1-3": {
						top: "235px",
						left: "75px"
					},
					"#target-q1-4": {
						top: "150px",
						left: "250px"
					},
					"#target-q1-5": {
						top: "235px",
						left: "232px"
					}
				},
				"droppables": [
					//NB. Need to Edit "id", "data-name", "data-targpos" & "data-dragpos" values
					{"class": "dropme", "id": "target-q1-1", "data-name": "Oral cavity", "data-targpos" : "left center", "data-dragpos" : "right center"}, // droppable target element 1
					 {"class": "dropme", "id": "target-q1-2", "data-name": "Appendix", "data-targpos" : "center top", "data-dragpos" : "left bottom"},//droppable target element 2
					 {"class": "dropme", "id": "target-q1-3", "data-name": "Oesophagus", "data-targpos" : "center top", "data-dragpos" : "right bottom"}, // droppable target element 3
					 {"class": "dropme", "id": "target-q1-4", "data-name": "Stomach", "data-targpos" : "right center", "data-dragpos" : "left center"}, // droppable target element 3
					 {"class": "dropme", "id": "target-q1-5", "data-name": "Rectum", "data-targpos" : "right center", "data-dragpos" : "left center"}, // droppable target element 3
				],
			   "draggables": [
			   	//NB. Need to Edit "data-name", "value" values
					{"class": "dragme", "data-name": "Appendix", "value": "Appendix"}, // draggable label 1
					{"class": "dragme", "data-name": "Stomach", "value": "Stomach"},// draggable label 2
					{"class": "dragme", "data-name": "Oral cavity", "value": "Oral cavity"}, // draggable label 3
					{"class": "dragme", "data-name": "Rectum", "value": "Rectum"}, // draggable label 3
					{"class": "dragme", "data-name": "Oesophagus", "value": "Oesophagus"} // draggable label 3
				],
			},
			{ // 1ST QUESTION NB droppables id names must be unique for each question
			//NB. droppable id/css format is target-qX-Y where X= quest No. and Y = target element No.
				"qid" : "2",
				"css" : {
					".qtxt-2": {
						//position: "absolute",
						"text-align": "center",
						margin: "0 auto",
						padding: ".5em 0 .5em 0",
						width: "80%",
						font: "italic bold 12px/30px Georgia, serif"
					},
					"#imgcon-2": {
						background: "url('img/DS1.jpg') no-repeat center center",
						width: "400px",
						height: "300px",
					},
					"#target-q2-1": {
						top: "30px",
						left: "75px"
					},
					"#target-q2-2": {
						top: "90px",
						left: "283px"
					},
					"#target-q2-3": {
						top: "235px",
						left: "75px"
					}
				},
				"droppables": [
					//NB. Need to Edit "id", "data-name", "data-targpos" & "data-dragpos" values
					{"class": "dropme", "id": "target-q2-1", "data-name": "nucleole", "data-targpos" : "left center", "data-dragpos" : "right center"}, // droppable target element 1
					 {"class": "dropme", "id": "target-q2-2", "data-name": "chromatin", "data-targpos" : "right center", "data-dragpos" : "left center"},//droppable target element 2
					 {"class": "dropme", "id": "target-q2-3", "data-name": "membrane", "data-targpos" : "center top", "data-dragpos" : "right bottom"} // droppable target element 3
				],
			   "draggables": [
			   	//NB. Need to Edit "data-name", "value" values
					{"class": "dragme", "data-name": "nucleole", "value": "nucleole"}, // draggable label 1
					{"class": "dragme", "data-name": "chromatin", "value": "chromatin"},// draggable label 2
					{"class": "dragme", "data-name": "membrane", "value": "membrane"} // draggable label 3
				],
			}
		]
	};
//})();
