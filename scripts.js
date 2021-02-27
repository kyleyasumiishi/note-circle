const noteCircle = [["A","A"], ["A#","Bb"], ["B","B"], ["C","C"], ["C#","Db"], ["D","D"], ["D#","Eb"], ["E","E"], ["F","F"], ["F#","Gb"], ["G","G"], ["G#","Ab"]];

// Button Clicks




// LOGIC

function randomNote() {
    const pitch = Math.floor(Math.random() * noteCircle.length);
    const enharmonic = Math.floor(Math.random() * 2);
    return noteCircle[pitch][enharmonic];
}

function findPitchPosition(note) {
    for (let i = 0; i < noteCircle.length; i++) {
        if (noteCircle[i].includes(note)) {
            return i; 
        };
    }
}

function findNoteDistance(note1, note2) {
    const note1Position = findPitchPosition(note1);
    const note2Position = findPitchPosition(note2);
    const distance = Math.abs(note1Position - note2Position);
    return Math.min(12 - distance, distance);
}

// TESTS 

function test_findPitchPosition () {
    console.log(findPitchPosition("A"));
    console.log(findPitchPosition("A#"));
    console.log(findPitchPosition("Bb"));
    console.log(findPitchPosition("B"));
    console.log(findPitchPosition("C"));
    console.log(findPitchPosition("C#"));
    console.log(findPitchPosition("Db"));
    console.log(findPitchPosition("D"));
    console.log(findPitchPosition("D#"));
    console.log(findPitchPosition("Eb"));
    console.log(findPitchPosition("E"));
    console.log(findPitchPosition("F"));
    console.log(findPitchPosition("F#"));
    console.log(findPitchPosition("Gb"));
    console.log(findPitchPosition("G"));
    console.log(findPitchPosition("G#"));
    console.log(findPitchPosition("Ab"));
}

function test_findNoteDistance() {
    console.log(findNoteDistance("A","D") == 5);
    console.log(findNoteDistance("A","C#") == 4);
    console.log(findNoteDistance("G","E") == 3);
    console.log(findNoteDistance("Bb","Ab") == 2);
    console.log(findNoteDistance("D#","Eb") == 0);
    console.log(findNoteDistance("G","C") == 5);
    console.log(findNoteDistance("G","B") == 4);
    console.log(findNoteDistance("D","A#") == 4);
    console.log(findNoteDistance("F#","C") == 6);
    console.log(findNoteDistance("E","F") == 1);
    console.log(findNoteDistance("C","B") == 1);
    console.log(findNoteDistance("A","A") == 0);
}

