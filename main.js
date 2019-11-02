/** 
 * This file handles the main controller for the app
 *
 * @author Mark Kenneth G. Esguerra <esguerrakenneth@gmail.com>
 */

var app = new Vue({
	el: "#app", 
	data: {
		title : "FLAMES", 
		crush_name: "", 
		your_name: "", 
		computation: "",
		result: "",
		showResult: false, 
		showComputation: false
	}, 
	methods: {
		checkResult: function(e) {
			e.preventDefault();
			var original_name = this.your_name;
			var original_crush_name = this.crush_name;
			var your_name = this.your_name.trim().toLowerCase().replace(/ /g, '');
			var crush_name = this.crush_name.trim().toLowerCase().replace(/ /g, '');
			var result = "";
			var name_result_letters = [];
			var crush_result_letters = [];
			var l_yourname = "";
			var l_crushname = "";
			var total_matches = 0;
			var has_match;
			var flames = this.title;

			//your name to crush name
			for (var i = 0; i < your_name.length; i++) {
				l_yourname = your_name.charAt(i);
				has_match = [];
				for (var x = 0; x < crush_name.length; x++) {
					l_crushname = crush_name.charAt(x);
					if (l_yourname == l_crushname) {
						has_match.push(true);
					}
				}
				if (has_match.includes(true)) {
					name_result_letters.push (l_yourname);
				}
			}

			//crush name to your name
			for (var i = 0; i < crush_name.length; i++) {
				l_crushname = crush_name.charAt(i);	
				has_match = [];
				for (var x = 0; x < your_name.length; x++) {
					l_yourname = your_name.charAt(x);
					if (l_crushname == l_yourname) {
						has_match.push(true);
					}
				}
				if (has_match.includes(true)) {
					crush_result_letters.push (l_crushname);
				}
			}

			total_matches = name_result_letters.length + crush_result_letters.length;

			var result = assessResult(total_matches);

			if (result) {
				var result_your_name = modifyNameFont(original_name, name_result_letters);
				var result_crush_name = modifyNameFont(original_crush_name, crush_result_letters);
				var place = "";

				this.computation += "<span>" + result_your_name + "</span><br />";
				this.computation += "<span>" + result_crush_name + "</span><br />";
				this.computation += "<span>Total matched letters: " + total_matches + "</span><br />";
				this.computation += "Count 1 to " + total_matches + " with the word FLAMES recursively.";


				this.result = result;
				this.showResult = true;
			}
		}, 
		viewComputation: function(e) {
			e.preventDefault();
			if (!this.showComputation) {
				this.showComputation = true;
			}
			else {
				this.showComputation = false;
			}
			
		}, 
		closeResult: function(e) {
			e.preventDefault();
			this.showResult = false;
			this.your_name = "";
			this.crush_name = "";
			this.computation = "";
		}
	}
});

function assessResult(total_letter_matches) {
	var result_index = 0;
	var flames = "FLAMES";
	
	if (total_letter_matches <= 6) {
		result_index = total_letter_matches;
	}
	else {
		result_index = total_letter_matches % 6;
	}

	switch (flames.charAt(result_index - 1)) {
		case "F":
			result = "Friends";
			break;
		case "L":
			result = "Lovers";
			break;
		case "A":
			result = "Affection";
			break;
		case "M":
			result = "Marriage";
			break;
		case "E":
			result = "Enemies";
			break;
		case "S":
			result = "Soulmates";
			break;
		default: 
			result = false;
	}

	return result;
}
/** 
 * Modify the name's font based on the result. This is
 * to know the emphasize the affected letters.
 *
 */
function modifyNameFont(name, affected_letters) {
	var result_name = "";

	for (var i = 0; i < name.length; i++) {
		var letter = name.charAt(i);
		if (affected_letters.includes(letter)) {
			result_name += "<span style='color: red'>" + letter + "</span>";
		}
		else {
			result_name += letter;
		}
	}

	return result_name + " = " + affected_letters.length;
}