dataSetVersion = "2023-08-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
      key: "game",
      tooltip: "Check this to restrict to certain games",
      checked: false,
      sub: [
        { name: "Phoenix Wright: Ace Attorney", key: "aa1" },
        { name: "Ace Attorney: Justice for All", key: "aa2" },
        { name: "Ace Attorney: Trials & Tribulations", key: "aa3" },
        { name: "Apollo Justice: Ace Attorney", key: "aa4" },
        { name: "Ace Attorney: Dual Destines", key: "aa5" },
        { name: "Ace Attorney: Spirit of Justice", key: "aa6" },
        { name: "Ace Attorney Investigations: Miles Edgeworth", key: "aai1" },
        { name: "Gyakuten Kenji 2", tooltip: "Unofficial title: \"Ace Attorney Investigations 2: Prosecutor's Path\"", key: "aai2" },
        { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
        { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" }
      ]
    },
    {
      name: "Filter by Profession",
      key: "prof",
      tooltip: "Check this to restrict to characters to a certain profession",
      checked: false,
      sub: [ { name: "Defense attorneys", key: "atto" }, 
             { name: "Prosecutors", key: "pros" }, 
             { name: "Assistants", key: "assi" }, 
             { name: "Detectives", key: "det" }, 
             { name: "Judges", key: "jud"}
      ]
    },
    {
      name: "Filter by Role",
      key: "role",
      tooltip: "Check this to restrict to characters to a role in the story. BEWARE OF SPOILERS!",
      checked: false,
      sub: [ { name: "Culprits", key: "cul" }, 
             { name: "Victims", key: "vic" }, 
             { name: "Defendants", key: "def" }
      ]
    },
    {
      name: "Remove animals",
      key: "ani",
      tooltip: "Check this if you don't want animals to be listed",
      checked: false
    }
  ];
  
  dataSet[dataSetVersion].characterData = [
    // Piper at the Gates of Dawn
    { name: "Astronomy Domine", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6", "vs"], prof: ["atto"], role: ["def"] } },
    { name: "Lucifer Sam", img: "piper.jpg", opts: { game: [ "aa1", "aa3", "aai1", "aai2", "aa6"], prof: [], role: ["def"] } },
    { name: "Matilda Mother", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3"], prof: ["atto", "assi"], role: ["vic"] } },
    { name: "Flaming", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aai1", "aa4", "aa5", "aa6"], prof: ["jud"], role: [] } },
    { name: "Pow R. Toc H.", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aa4"], prof: [], role: ["pros"] } },
    { name: "Take Up Thy Stethoscope and Walk", img: "piper.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: ["cul"] } },
    { name: "Interstellar Overdrive", img: "piper.jpg", opts: { game: [ "aa1"], prof: [], role: ["vic"] } },
    { name: "The Gnome", img: "piper.jpg", opts: { game: [ "aa1", "aai1"], prof: [], role: [ ] } },
    { name: "Chapter 24", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aa4", "aa5", "aa6"], prof: [], role: [ ] } },
    { name: "The Scarecrow", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aai1", "aai2", "aa5", "aa6", "vs"], prof: ["pros"], role: ["def"] } },
    { name: "Bike", img: "piper.jpg", opts: { game: [ "aa1", "aa2", "aa3", "vs", "aa6"], prof: ["assi"], role: ["def"] } },

    // A Saucerful of Secrets
    { name: "Let There Be More Light", img: "saucerful.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "Remember a Day", img: "saucerful.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Set the Controls for the Heart of the Sun", img: "saucerful.jpg", opts: { game: [ "aa1"], prof: [], role: [ "cul" ] } },
    { name: "Corporal Clegg", img: "saucerful.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "A Saucerful of Secrets", img: "saucerful.jpg", opts: { game: [ "aa1", "aa2", "aai1", "aai2"], prof: [], role: [ ] } },
    { name: "See-Saw", img: "saucerful.jpg", opts: { game: [ "aa1", "aa2", "aai2"], prof: [], role: [ "def"] } },
    { name: "Jugband Blues", img: "saucerful.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },

    // More
    { name: "Cirrus Minor", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "The Nile Song", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Crying Song", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Up the Khyber", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Green is the Colour", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Cymbaline", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Party Sequence", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Main Theme", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Ibiza Bar", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "More Blues", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Quicksilver", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "A Spanish Piece", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },
    { name: "Dramatic Theme", img: "more.jpg", opts: { game: [ "aa1"], prof: [], role: [ ] } },

    // Ummagumma
    { name: "Astronomy Domine (Live)", img: "ummagumma.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: [ ] } },
    { name: "Careful with that Axe, Eugene (Live)", img: "ummagumma.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: [ ] } },
    { name: "Set the Controls for the Heart of the Sun (Live)", img: "ummagumma.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: [ ] } },
    { name: "A Saucerful of Secrets (Live)", img: "ummagumma.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: [ ] } },
    { name: "Sysyphus", img: "ummagumma.jpg", opts: { game: [ "aa1", "aai2"], prof: [], role: [ ] } },
    { name: "Grantchester Meadows", img: "ummagumma.jpg", opts: { game: [ "aa1"], prof: [], role: [ "cul"] } },
    { name: "Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict", img: "ummagumma.jpg", opts: { game: [ "aa1", "aa2", "aai2"], prof: [], role: [ ] } },
    { name: "The Narrow Way", img: "ummagumma.jpg", opts: { game: [ "aa1"], prof: ["atto"], role: ["vic"] } },
    { name: "The Grand Vizier's Garden Party", img: "ummagumma.jpg", opts: { game: [ "aa1", "aa3"], prof: ["atto"], role: [] } },

    // Atom Heart Mother
    { name: "Atom Heart Mother Suite", img: "ahm.jpg", opts: { game: [ "aa1"], prof: [], role: [ ], ani: true } },
    { name: "If", img: "ahm.jpg", opts: { game: [ "aa1"], prof: [], role: [ "cul"] } },
    { name: "Summer '68", img: "ahm.jpg", opts: { game: [ "aa1", "aai2"], prof: ["atto"], role: ["vic"] } },
    { name: "Fat Old Sun", img: "ahm.jpg", opts: { game: [ "aa1", "aa2", "aa3", "aa4", "aai1", "aai2"], prof: ["det"], role: [] } },
    { name: "Alan's Psychedelic Breakfast", img: "ahm.jpg", opts: { game: [ "aa1", "aai1", "aai2"], prof: ["pros"], role: ["cul"] } },

    // Meddle
    { name: "One of These Days", img: "meddle.jpg", opts: { game: [ "aa1", "aa4", "aai1", "aai2", "aa6"], prof: ["assi", "det"], role: [] } },
    { name: "A Pillow of Winds", img: "meddle.jpg", opts: { game: [ "aa1", "aai1", "aa4"], prof: [], role: [ ] } },
    { name: "Fearless", img: "meddle.jpg", opts: { game: [ "aa1"], prof: ["det"], role: ["cul"] } },
    { name: "San Tropez", img: "meddle.jpg", opts: { game: [ "aa1"], prof: ["det"], role: ["vic"] } },
    { name: "Seamus", img: "meddle.jpg", opts: { game: [ "aa1"], prof: ["det"], role: [ ] } },
    { name: "Echoes", img: "meddle.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },

    // Obscured by Clouds
    { name: "Obscured by Clouds", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "When You're In", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Burning Bridges", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "The Gold it's in the...", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Wot's... Uh the Deal", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Mudmen", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Childhood's End", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Free Four", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Stay", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },
    { name: "Absolutely Curtains", img: "obc.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["vic"] } },

    // The Dark Side of the Moon
    { name: "Speak to Me", img: "dsotm.jpg", opts: { game: [ "aa1"], prof: ["pros"], role: ["def"] } },
    { name: "Breathe", img: "dsotm.jpg", opts: { game: [ "aa1"], prof: ["det"], role: [] } },
    { name: "On the Run", img: "dsotm.jpg", opts: { game: [ "aa1"], prof: [], role: ["cul"] } },
    { name: "Time", img: "dsotm.jpg", opts: { game: [ "aa2", "aa3", "aa5","aa6"], prof: ["assi"], role: [] } },
    { name: "The Great Gig in the Sky", img: "dsotm.jpg", opts: { game: [ "aa2", "aa3","aai1", "aai2"], prof: ["pros"], role: [] } },
    { name: "Money", img: "dsotm.jpg", opts: { game: [ "aa2", "aa3", "aai1"], prof: [], role: ["def"] } },
    { name: "Us and Them", img: "dsotm.jpg", opts: { game: [ "aa2"], prof: [], role: ["vic"] } },
    { name: "Any Colour You Like", img: "dsotm.jpg", opts: { game: [ "aa2"], prof: [], role: ["cul"] } },
    { name: "Brain Damage", img: "dsotm.jpg", opts: { game: [ "aa2", "aa4"], prof: [], role: ["cul"] } },
    { name: "Eclipse", img: "dsotm.jpg", opts: { game: [ "aa2", "aa3"], prof: [], role: ["cul"] } },

    // Wish You Were Here
    { name: "Shine On You Crazy Diamond", img: "wywh.jpg", opts: { game: [ "aa2"], prof: [], role: ["vic"] } },
    { name: "Welcome to the Machine", img: "wywh.jpg", opts: { game: [ "aa2"], prof: [], role: [ "cul"] } },
    { name: "Have a Cigar", img: "wywh.jpg", opts: { game: [ "aa2"], prof: [], role: [ ] } },
    { name: "Wish You Were Here", img: "wywh.jpg", opts: { game: [ "aa2"], prof: [], role: [ ] } },

    // Animals
    { name: "Pigs on the Wing", img: "animals.jpg", opts: { game: [ "aa2"], prof: [], role: ["vic"] } },
    { name: "Dogs", img: "animals.jpg", opts: { game: [ "aa2", "aai2"], prof: [], role: [ ] } },
    { name: "Pigs (Three Different Ones)", img: "animals.jpg", opts: { game: [ "aa2"], prof: [], role: ["vic"] } },
    { name: "Sheep", img: "animals.jpg", opts: { game: [ "aa2"], prof: [], role: ["def"] } },

    // The Wall
    { name: "In the Flesh?", img: "wall.jpg", opts: { game: [ "aa2", "aai2"], prof: [], role: [ ], ani: true } },
    { name: "The Thin Ice", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: [ ], ani: true } },
    { name: "Another Brick in the Wall, Part 1", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: [ ] } },
    { name: "The Happiest Days of Our Lives", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: [ ] } },
    { name: "Another Brick in the Wall, Part 2", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: [ ], ani: true } },
    { name: "Mother", img: "wall.jpg", opts: { game: [ "aa2", "aa3"], prof: [], role: [ ] } },
    { name: "Goodbye Blue Sky", img: "wall.jpg", opts: { game: [ "aa2", "aai2"], prof: [], role: ["cul"] } },
    { name: "Empty Spaces", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: ["vic"] } },
    { name: "Young Lust", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: ["cul", "def"] } },
    { name: "One of My Turns", img: "wall.jpg", opts: { game: [ "aa2"], prof: [], role: [] } },
    { name: "Don't Leave Me Now", img: "wall.jpg", opts: { game: [ "aa1"], prof: [], role: [ ], ani: true } },
    { name: "Another Brick in the Wall, Part 3", img: "wall.jpg", opts: { game: [ "aa3"], prof: ["pros"], role: ["vic", "cul"] } },
    { name: "Goodbye Cruel World", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ "cul", "vic"] } },
    { name: "Hey You", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "Is There Anybody Out There?", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "Nobody Home", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ "def"] } },
    { name: "Vera", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "Bring the Boys Back Home", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "Comfortably Numb", img: "wall.jpg", opts: { game: ["aa3"], prof: [], role: ["cul"] } },
    { name: "The Show Must Go On", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "In the Flesh", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "Run Like Hell", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "Waiting for the Worms", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [] } },
    { name: "Stop", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "The Trial", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "Outside the Wall", img: "wall.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },

    // The Final Cut
    { name: "The Post War Dream", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: ["cul"] } },
    { name: "Your Possible Pasts", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: [ "def"] } },
    { name: "One of the Few", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "When the Tigers Broke Free", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: ["vic"] } },
    { name: "The Hero's Return", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: ["def"] } },
    { name: "The Gunner's Dream", img: "tfc.jpg", opts: { game: [ "aa3"], prof: [], role: [ ] } },
    { name: "Paranoid Eyes", img: "tfc.jpg", opts: { game: [ "aa4", "aa5", "aa6"], prof: ["atto", "assi"], role: [ ] } },
    { name: "Get Your Filthy Hands Off My Desert", img: "tfc.jpg", opts: { game: [ "aa4", "aa5", "aa6"], prof: ["assi"], role: ["def"] } },
    { name: "The Fletcher Memorial Home", img: "tfc.jpg", opts: { game: [ "aa4", "aa5"], prof: ["pros"], role: [ ] } },
    { name: "Southampton Dock", img: "tfc.jpg", opts: { game: [ "aa4"], prof: ["atto"], role: [ "cul"] } },
    { name: "The Final Cut", img: "tfc.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic", "def"] } },
    { name: "Not Now John", img: "tfc.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic", "def"] } },
    { name: "Two Suns in the Sunset", img: "tfc.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic", "def"] } },

    // A Momentary Lapse of Reason
    { name: "Signs of Life", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "Learning to Fly", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "The Dogs of War", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "One Slip", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "On the Turning Away", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ "def"] } },
    { name: "Yet Another Movie", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic"] } },
    { name: "Round and Around", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "A New Machine", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ "cul"] } },
    { name: "Terminal Frost", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "Sorrow", img: "amlor.jpg", opts: { game: [ "aa4"], prof: [ "det"], role: [ "cul"] } },

    // The Division Bell
    { name: "Cluster One", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic"] } },
    { name: "What Do You Want from Me", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: [ "def"] } },
    { name: "Poles Apart", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: [ ] } },
    { name: "Marooned", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic"] } },
    { name: "A Great Day for Freedom", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: [ "def"] } },
    { name: "Wearing the Inside Out", img: "tdb.jpg", opts: { game: [ "aa4"], prof: [], role: ["vic"] } },
    { name: "Take It Back", img: "tdb.jpg", opts: { game: [ "aa5", "aa6"], prof: ["assi","atto"], role: [ "def" ] } },
    { name: "Coming Back to Life", img: "tdb.jpg", opts: { game: [ "aa5", "aa6"], prof: ["pros"], role: [ "def"] } },
    { name: "Keep Talking", img: "tdb.jpg", opts: { game: [ "aa5"], prof: ["det"], role: [ "cul"] } },
    { name: "Lost for Words", img: "tdb.jpg", opts: { game: [ "aa5", "aa6"], prof: ["pros"], role: [] } },
    { name: "High Hopes", img: "tdb.jpg", opts: { game: [ "aa5"], prof: [], role: [ "def"] } },
    // ...continue for all remaining character objects, mapping to the next Pink Floyd song in album order...
  ]
