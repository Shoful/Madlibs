function madlib(){
	let choice = prompt("Would you like Story One or Story Two?");
	if (choice === "Story One"){
		storyOne();} 
  else if (choice === "Story Two") 
  { storyTwo();}
  
  else { alert("Incorrect Submission")}

	function storyOne() {
		    let adj = prompt("type an adjective");
        let pl = prompt("type a general place");
        let vh = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let noun = prompt("type a plural noun");
        let verb1 = prompt("type an 'ing' verb");
        let verb2 = prompt("type another 'ing' verb");
        let food = prompt("type a food name (plural)");
        let sport = prompt("type the name of a sport");
        let verb3 = prompt("type another 'ing' verb");
        let emotion = prompt("type an emotion");
        let number = prompt("type a number");
    
	      let storyline1 = alert(`A vacation is when you take a trip to some ${adj} place near an amazing ${pl}. A good vacation place is one where you can ride ${vh} or play ${game} or go hunting for ${noun}. I like to spend my time ${verb1} or ${verb2}. When parents go on a vacation, they spend their time eating three ${food} a day. Usually, fathers play ${sport}, and mothers spend their time ${verb3}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`);
}

	function storyTwo() {
		let adj2 = prompt("type an adjective");
		let pl2 = prompt("type a famous place");
		let noun2 = prompt("type a plural noun");
		let adj3 = prompt("type another adjective");
		let food2 = prompt("type a food (plural)");
		let emotion2 = prompt("type an emotion");
		let verb2 = prompt("type an 'ing' verb");
		let place2 = prompt("type a common place");
		let adj4 = prompt("type another adjective");
		let noun3 = prompt("type a noun");
		let adj5 = prompt("type another adjective");
		let noun4 = prompt("type another noun");
		let fam = prompt("type a family member");
    let adj6 = prompt("type another adjective");
        
    let storyline2 = alert(`Today we took a ${adj2} fieldtrip to ${pl2}. They're famous for making ${noun2} and for cooking ${adj3} ${food2}. Eating all that food mad made me feel ${emotion2}. Next we enjoyed the local tradition of ${verb2} in the middle of the ${place2}! Finally, we went shopping for souvenirs. I bought a ${adj4} ${noun3} for myself, and a ${adj5} ${noun4} for ny favorite ${fam}. I'll definitely never forget this ${adj6} trip!`)
}
}
madlib();