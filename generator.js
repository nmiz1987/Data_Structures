function* genID() {
	let i = 0;
	while (i < 10) {
		yield ++i;
	}
}

const gen = genID();
var stt = false;
while (!stt) {
	var nxt = gen.next();
	if (nxt.done == true) break;
	stt = nxt.done;
	console.log(nxt);
}
