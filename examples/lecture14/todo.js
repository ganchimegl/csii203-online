function calculate(){
	let balance = parseInt(document.getElementById("balance").value);
	let duration = parseInt(document.getElementById("duration").value);
	let interest = parseInt(document.getElementById("interest").value);

	let tbody = document.getElementById("tbody");
	let endbalance = balance;
	let row = "";
	for(let i = 1; i<=duration; i++){
		row = "<tr><td>"+i+"</td><td>"+endbalance.toFixed(2)+"</td><td>"+(endbalance*interest*0.01).toFixed(2)+"</td><td>"+(endbalance+endbalance*interest*0.01).toFixed(2)+"</td><tr>";
		tbody.innerHTML += row;
		endbalance += endbalance*interest*0.01;
	}
}