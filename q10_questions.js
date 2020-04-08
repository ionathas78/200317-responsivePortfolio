const _questionSet = [
    //  Question - Type - Answer - LockPos
    //  'c' for a confirm (text) question, 'p' for a prompt (yes/no) question. 'a' to display an alert (Question won't be counted. Answer is disregarded).
    //  LockPos: Don't shuffle the order of this question.
    //  Answer should be in lowercase.
    /* - */ {question: "See if you can answer the following questions about the Dungeons & Dragons Roleplaying Game correctly:", type: "a", answer: null, lockPos: true},
    
    /* 1 */ {question: "Faerun is the name of a major continent in the Forgotten Realms setting.", type: "c", answer: true, lockPos: false},
    /* 2 */ {question: "There have been 4 ability scores in the last three editions of D&D, grouped with half physical attributes and half mental or social attributes.", type: "c", answer: false, lockPos: false},
    /* 3 */ {question: "Corellon Latherian is the god of the elves.", type: "c", answer: true, lockPos: false},
    /* 4 */ {question: "Druids are primal champions connected to the spirits of the land they protect that wield divine spells and can transform into animals.", type: "c", answer: true, lockPos: false},
    /* 5 */ {question: "Since 2nd edition AD&D, the most common D&D alignment system has 2 axes: Good vs. Evil and Elves vs. Dwarves.", type: "c", answer: false, lockPos: false},
    /* 6 */ {question: "The Sword Coast is a busy region on the shores of the Sea of Fallen Stars. It's full of commerce and danger, and home to such cities as Waterdeep, Neverwinter, and Cormyr.", type: "c", answer: false, lockPos: false},
    /* 7 */ {question: "Drow are dark elves that live in a subterranean, matriarchal society and have the innate ability to cast certain magical spells.", type: "c", answer: true, lockPos: false},
    /* 8 */ {question: "A broadsword is any blade 9 inches or shorter that inflicts a d4 damage die for a human-sized wielder.", type: "c", answer: false, lockPos: false},
    /* 9 */ {question: "In 2nd edition D&D, only a human with a Charisma of 17 or 18 could be take the Paladin class.", type: "c", answer: true, lockPos: false},
    /* 10 */ {question: "A beholder is a terrifying aberration that has one enormous eye in the center of its round body, with ten eyestalks protruding from its head.", type: "c", answer: true, lockPos: false},
    
    /* - */ {question: "And a bonus question:", type: "a", answer: null, lockPos: true},
    /* 11 */ {question: "In roleplaying games, a Die with 20 sides is called what?", type: "p", answer: "d20", lockPos: true},
    
    /* - */ {question: "Dungeons & Dragons, Forgotten Realms, and all associated names are the sole property of Wizards of the Coast.", type: "a", answer: null, lockPos: true}
];
