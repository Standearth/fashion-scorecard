  
  export default function createFootnotes() {
    console.log('creating footnotes');
    var footnotes = document.getElementsByClassName("footnote");
		var notes = document.getElementsByClassName("notes");
    var existing = document.getElementsByClassName("note");
    if (existing.length > 0) {
      for( var i = 0; i < existing.length; i++) {
        console.log(existing[i]);
       // existing[i].remove();
      }
    }
		if( footnotes.length > 0 ) {
      var notes2 = notes[0].getElementsByTagName("li");
			for( var i = 0; i < footnotes.length; i++) {
        let num = parseInt(footnotes[i].getElementsByTagName('sup')[0].innerHTML);
        num = num-1;
        let note = document.createElement('span');
				note.classList.add('note');
				note.innerHTML = notes2[num].innerHTML;
				footnotes[i].append(note);
			}
		}
  };