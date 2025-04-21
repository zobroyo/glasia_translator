
const glasianDictionary = {
    "my": "boot",
    "name": "lami",
    "what's": "boot",
    "your": "lama",
    "yes": "ee",
    "no": "gla",
    "give": "sahur",
    "me": "",
    "rubix": "tu",
    "cube": "tu",
    "rock": "moooooo",
    "spoon": "inglezia",
    "water": "wa",
    "what": "boot",
    "indian": "ding ding ding",
    "food": "chom chom",
    "friend": "dookie",
    "enemy": "grunga",
    "fire": "skrrrah",
    "cold": "brrrr",
    "house": "glumbop",
    "car": "zoom zoom",
    "phone": "bip bip",
    "computer": "zzzapp",
    "light": "blinko",
    "dark": "glooma",
    "night": "snoozah",
    "day": "wakka",
    "run": "zooma",
    "walk": "plod plod",
    "jump": "boinga",
    "fall": "flump",
    "help": "sahur gla",
    "stop": "nah nah",
    "go": "yee yee",
    "toilet": "poop chamber",
    "door": "click clack",
    "chair": "butt holder",
    "tree": "swish swish",
    "cat": "mewmew",
    "dog": "arf arf",
    "fish": "blub blub",
    "human": "beep bop",
    "school": "pain box",
    "work": "grind grind",
    "game": "funfun",
    "fortnite": "tu tu blammo",
    "roblox": "blox blox",
    "minecraft": "diggy diggy",
    "shark": "chompa chompa",
    "attack": "sahur skrrrah",
    "love": "mush mush",
    "hate": "bleh bleh",
    "ok": "ee gla",
    "thank": "sahur",
    "you": "ee",
    "bye": "toodaloo"
};

function translateToGlasia() {
    const englishText = document.getElementById('englishInput').value;
    const words = englishText.split(/\s+/);  // Split the input into words
    const translatedWords = words.map(word => translateWord(word.toLowerCase()));
    const glasianTranslation = translatedWords.join(' '); // Join the translated words back into a sentence
    document.getElementById('glasiaOutput').innerText = glasianTranslation;
}

function translateWord(word) {
    // Check if the word exists in the Glasian dictionary, otherwise leave it unchanged
    return glasianDictionary[word] || word;
}
