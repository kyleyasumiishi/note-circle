const noteCircle = [["A","A"], ["A#","Bb"], ["B","B"], ["C","C"], ["C#","Db"], ["D","D"], ["D#","Eb"], ["E","E"], ["F","F"], ["F#","Gb"], ["G","G"], ["G#","Ab"]];

// console.log(noteCircle);
// console.log(noteCircle.length);
// for (let i=0; i < noteCircle.length; i++) {
//     console.log(i);
// }

function randomNote() {
    const pitch = Math.floor(Math.random() * noteCircle.length);
    const enharmonic = Math.floor(Math.random() * 2);
    return noteCircle[pitch][enharmonic];
}

for (let i = 0; i < 100; i++) {
    randomNote();
}
