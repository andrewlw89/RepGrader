function getScores(pushupReps, situpReps, gender, age) {

	function mapAgeToIndex(age) {

		if (age <= 21) {
			return 0;
		}
		else if (age <= 26){
			return 1;
		}
		else if (age <= 31) {
			return 2;
		}
		else if (age <= 36) {
			return 3;
		}
		else if (age <= 41) {
			return 4;
		}
		else if (age <= 46) {
			return 5;
		}
		else if (age <= 51) {
			return 6;
		}
		else if (age <= 56) {
			return 7;
		}
		else if (age <= 61) {
			return 8;
		}
		else {
			return 9;
		}
	}

	function getSitupScore(age, reps) {

		var situpsScores = {"21":[21,9,21,34,35,42,49,50,53,54,55],"22":[22,10,23,35,36,43,50,51,54,55,56],"23":[23,12,24,36,38,44,51,52,55,56,57],"24":[24,14,25,37,39,45,52,53,56,57,58],"25":[25,15,27,38,40,46,53,54,57,58,59],"26":[26,17,28,39,41,47,54,56,58,59,60],"27":[27,18,29,41,42,48,55,57,59,60,61],"28":[28,20,31,42,44,49,56,58,60,61,62],"29":[29,22,32,43,45,50,57,59,61,62,63],"30":[30,23,33,44,46,52,58,60,62,63,64],"31":[31,25,35,45,47,53,59,61,63,64,65],"32":[32,26,36,46,48,54,60,62,64,65,66],"33":[33,28,37,47,49,55,61,63,65,66,68],"34":[34,30,39,48,50,56,62,64,66,68,69],"35":[35,31,40,49,52,57,63,66,67,69,70],"36":[36,33,41,50,53,58,64,67,68,70,71],"37":[37,34,43,51,54,59,65,68,69,71,72],"38":[38,36,44,52,55,60,66,69,71,72,73],"39":[39,38,45,54,56,61,67,70,72,73,74],"40":[40,39,47,55,58,62,68,71,73,74,75],"41":[41,41,48,56,59,63,69,72,74,75,76],"42":[42,42,49,57,60,64,70,73,75,76,77],"43":[43,44,50,58,61,65,71,74,76,77,78],"44":[44,46,52,59,62,66,72,76,77,78,79],"45":[45,47,53,60,64,67,73,77,78,79,81],"46":[46,49,55,61,65,68,74,78,79,81,82],"47":[47,50,56,62,66,69,75,79,80,82,83],"48":[48,52,57,63,67,71,76,80,81,83,84],"49":[49,54,59,64,68,72,77,81,82,84,85],"50":[50,55,60,65,69,73,78,82,83,85,86],"51":[51,57,61,66,71,74,79,83,84,86,87],"52":[52,58,63,68,72,75,80,84,85,87,88],"53":[53,60,64,69,73,76,81,86,86,88,89],"54":[54,62,65,70,74,77,82,87,87,89,90],"55":[55,63,67,71,75,78,83,88,88,90,91],"56":[56,65,68,72,76,79,84,89,89,91,92],"57":[57,66,69,73,78,80,85,90,91,92,94],"58":[58,68,71,74,79,81,86,91,92,94,95],"59":[59,70,72,75,80,82,87,92,93,95,96],"60":[60,71,73,76,81,83,88,93,94,96,97],"61":[61,73,75,77,82,84,89,94,95,97,98],"62":[62,74,76,78,84,85,90,96,96,98,99],"63":[63,76,77,79,85,86,91,97,97,99,100],"64":[64,78,79,81,86,87,92,98,98,100,100],"65":[65,79,80,82,87,88,93,99,99,100,100],"66":[66,81,81,83,88,89,94,100,100,100,100],"67":[67,82,83,84,89,91,95,100,100,100,100],"68":[68,84,84,85,91,92,96,100,100,100,100],"69":[69,86,85,86,92,93,97,100,100,100,100],"70":[70,87,87,87,93,94,98,100,100,100,100],"71":[71,89,88,88,94,95,99,100,100,100,100],"72":[72,90,89,89,95,96,100,100,100,100,100],"73":[73,92,91,90,96,97,100,100,100,100,100],"74":[74,94,92,91,98,98,100,100,100,100,100],"75":[75,95,93,92,99,99,100,100,100,100,100],"76":[76,97,95,94,100,100,100,100,100,100,100],"77":[77,98,96,95,100,100,100,100,100,100,100],"78":[78,100,97,96,100,100,100,100,100,100,100],"79":[79,100,99,97,100,100,100,100,100,100,100],"80":[80,100,100,98,100,100,100,100,100,100,100],"81":[81,100,100,99,100,100,100,100,100,100,100],"82":[82,100,100,100,100,100,100,100,100,100,100]};
		var ageIndex = mapAgeToIndex(age);
		var score = situpsScores[reps][ageIndex];
		return score;
	}

	function getPushupScore(age, reps, gender) {
		var pushupsScores = {"m":{"1":[3,15,20,24,26,0,0,0,0,0],"2":[5,17,21,25,27,0,0,0,0,0],"3":[6,18,22,26,28,0,0,0,0,0],"4":[8,19,23,27,29,0,0,0,0,0],"5":[9,20,24,28,30,32,36,43,45,47],"6":[10,21,25,29,31,33,38,44,46,48],"7":[12,22,26,30,32,34,39,46,47,49],"8":[13,23,27,31,33,36,40,47,49,51],"9":[14,25,28,32,34,37,41,48,50,52],"10":[16,26,29,33,35,38,42,49,51,53],"11":[17,27,31,34,36,39,44,50,52,54],"12":[19,28,32,35,37,40,45,51,53,55],"13":[20,29,33,36,38,41,46,52,54,56],"14":[21,30,34,37,39,42,47,53,55,58],"15":[23,31,35,38,41,43,48,54,57,59],"16":[24,33,36,39,42,44,49,56,58,60],"17":[26,34,37,41,43,46,51,57,59,61],"18":[27,35,38,42,44,47,52,58,60,62],"19":[28,36,39,43,45,48,53,59,61,64],"20":[30,37,40,44,46,49,54,60,62,65],"21":[31,38,41,45,47,50,55,61,63,66],"22":[32,39,42,46,48,51,56,62,65,67],"23":[34,41,43,47,49,52,58,63,66,68],"24":[35,42,44,48,50,53,59,64,67,69],"25":[37,43,45,49,51,54,60,66,68,71],"26":[38,44,46,50,52,56,61,67,69,72],"27":[39,45,47,51,53,57,62,68,70,73],"28":[41,46,48,52,54,58,64,69,71,74],"29":[42,47,49,53,55,59,65,70,73,75],"30":[43,49,50,54,56,60,66,71,74,76],"31":[45,50,52,55,57,61,67,72,75,78],"32":[46,51,53,56,58,62,68,73,76,79],"33":[48,52,54,57,59,63,69,74,77,80],"34":[49,53,55,58,60,64,71,76,78,81],"35":[50,54,56,59,61,66,72,77,79,82],"36":[52,55,57,60,62,67,73,78,81,84],"37":[53,57,58,61,63,68,74,79,82,85],"38":[54,58,59,62,64,69,75,80,83,86],"39":[56,59,60,63,65,70,76,81,84,87],"40":[57,60,61,64,66,71,78,82,85,88],"41":[59,61,62,65,67,72,79,83,86,89],"42":[60,62,63,66,68,73,80,84,87,91],"43":[61,63,64,67,69,74,81,86,89,92],"44":[63,65,65,68,70,76,82,87,90,93],"45":[64,66,66,69,71,77,84,88,91,94],"46":[66,67,67,70,72,78,85,89,92,95],"47":[67,68,68,71,73,79,86,90,93,96],"48":[68,69,69,72,74,80,87,91,94,98],"49":[70,70,71,73,75,81,88,92,95,99],"50":[71,71,72,74,76,82,89,93,97,100],"51":[73,73,73,75,77,83,91,94,98,100],"52":[74,74,74,76,78,84,92,96,99,100],"53":[75,75,75,77,79,86,93,97,100,100],"54":[77,76,76,78,81,87,94,98,100,100],"55":[78,77,77,79,82,88,95,99,100,100],"56":[79,78,78,81,83,89,96,100,100,100],"57":[81,79,79,82,84,90,98,100,100,100],"58":[82,81,80,83,85,91,99,100,100,100],"59":[83,82,81,84,86,92,100,100,100,100],"60":[85,83,82,85,87,93,100,100,100,100],"61":[86,84,83,86,88,94,100,100,100,100],"62":[88,85,84,87,89,96,100,100,100,100],"63":[89,86,85,88,90,97,100,100,100,100],"64":[90,87,86,89,91,98,100,100,100,100],"65":[92,89,87,90,92,99,100,100,100,100],"66":[93,90,88,91,93,100,100,100,100,100],"67":[94,91,89,92,94,100,100,100,100,100],"68":[96,92,91,93,95,100,100,100,100,100],"69":[97,93,92,94,96,100,100,100,100,100],"70":[99,94,93,95,97,100,100,100,100,100],"71":[100,95,94,96,98,100,100,100,100,100],"72":[100,97,95,97,99,100,100,100,100,100],"73":[100,98,96,98,100,100,100,100,100,100],"74":[100,99,97,99,100,100,100,100,100,100],"75":[100,100,98,100,100,100,100,100,100,100],"76":[100,100,99,100,100,100,100,100,100,100],"77":[100,100,100,100,100,100,100,100,100,100]}, "f": {"1":[29,38,41,41,42,0,0,0,0],"2":[30,39,42,43,44,0,0,0,0],"3":[32,41,43,44,45,0,0,0,0],"4":[34,42,44,45,47,0,0,0,0],"5":[36,43,45,47,48,49,52,53,54],"6":[37,45,47,48,50,50,53,55,56],"7":[39,46,48,49,51,52,55,56,58],"8":[41,48,49,49,53,54,57,58,60],"9":[43,49,49,50,54,55,58,60,62],"10":[44,49,50,52,56,57,60,62,64],"11":[46,50,52,54,57,58,62,64,66],"12":[48,52,54,56,59,60,63,65,68],"13":[50,54,55,58,60,62,65,67,70],"14":[51,56,56,59,61,63,67,69,72],"15":[53,57,58,60,63,65,68,71,74],"16":[55,59,59,61,64,66,70,73,76],"17":[57,60,60,63,66,68,72,75,78],"18":[58,61,61,64,67,70,73,76,80],"19":[60,63,62,65,69,71,75,78,82],"20":[62,64,64,67,70,73,77,80,84],"21":[63,66,65,68,72,74,78,82,86],"22":[65,67,66,69,73,76,80,84,88],"23":[67,68,67,71,75,78,82,85,90],"24":[69,70,68,72,76,79,83,87,92],"25":[70,71,70,73,78,81,85,89,94],"26":[72,72,71,75,79,82,87,91,96],"27":[74,74,72,76,81,84,88,93,98],"28":[76,75,73,77,82,86,90,95,100],"29":[77,77,75,79,84,87,92,96,100],"30":[79,78,76,80,85,89,93,98,100],"31":[81,79,77,81,87,90,95,100,100],"32":[83,81,78,83,88,92,97,100,100],"33":[84,82,79,84,90,94,98,100,100],"34":[86,83,81,85,91,95,100,100,100],"35":[88,85,82,87,93,97,100,100,100],"36":[90,86,83,88,94,98,100,100,100],"37":[91,88,84,89,96,100,100,100,100],"38":[93,89,85,91,97,100,100,100,100],"39":[95,90,87,92,99,100,100,100,100],"40":[97,92,88,93,100,100,100,100,100],"41":[98,93,89,95,100,100,100,100,100],"42":[100,94,90,96,100,100,100,100,100],"43":[100,96,92,97,100,100,100,100,100],"44":[100,97,93,99,100,100,100,100,100],"45":[100,99,94,100,100,100,100,100,100],"46":[100,100,95,100,100,100,100,100,100],"47":[100,100,96,100,100,100,100,100,100],"48":[100,100,98,100,100,100,100,100,100],"49":[100,100,99,100,100,100,100,100,100],"50":[100,100,100,100,100,100,100,100,100],"51":[100,100,100,100,100,100,100,100,100],"52":[100,100,100,100,100,100,100,100,100],"53":[100,100,100,100,100,100,100,100,100],"54":[100,100,100,100,100,100,100,100,100],"55":[100,100,100,100,100,100,100,100,100],"56":[100,100,100,100,100,100,100,100,100],"57":[100,100,100,100,100,100,100,100,100],"58":[100,100,100,100,100,100,100,100,100],"59":[100,100,100,100,100,100,100,100,100],"60":[100,100,100,100,100,100,100,100,100],"61":[100,100,100,100,100,100,100,100,100],"62":[100,100,100,100,100,100,100,100,100],"63":[100,100,100,100,100,100,100,100,100],"64":[100,100,100,100,100,100,100,100,100],"65":[100,100,100,100,100,100,100,100,100],"66":[100,100,100,100,100,100,100,100,100],"67":[100,100,100,100,100,100,100,100,100],"68":[100,100,100,100,100,100,100,100,100],"69":[100,100,100,100,100,100,100,100,100],"70":[100,100,100,100,100,100,100,100,100],"71":[100,100,100,100,100,100,100,100,100],"72":[100,100,100,100,100,100,100,100,100],"73":[100,100,100,100,100,100,100,100,100],"74":[100,100,100,100,100,100,100,100,100],"75":[100,100,100,100,100,100,100,100,100],"76":[100,100,100,100,100,100,100,100,100],"77":[100,100,100,100,100,100,100,100,100]}};
		var ageIndex = mapAgeToIndex(age);
		var score = pushupsScores[gender][reps][ageIndex];
		return score;
	}

	return [getSitupScore(age, situpReps), getPushupScore(age, pushupReps, gender)];
}

export default getScores;