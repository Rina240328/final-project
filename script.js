//Scroll down to find the function to work on!
let personalities = {
    "angry": 0,
    "what": 0,
    "soldier": 0,
    "singing" : 0,
    "shocked" : 0,
};

let questions = [
    {
        id:0, // First question
        text: "What is the best way to relax?",
        image: "https://contentful.harrypotter.com/usf1vwtuqyxm/3e6KEgfIcdQwZf4ss6wI77/731fe1da0bde50b22301d8e744610f80/the-sorting-hat_1_1800x1248.png",
        choices: {
            "read a book": ["what", "singing"],
            "play video games": ["soldier", "angry"],
            "go to the beach": ["shocked", "singing"],
            "do absolutely nothing": ["angry", "shocked"]
        }
    },
    {
        id:1,
        text: "What is your favorite color?",
        image: "lil_images/story/rainbow.png",
        choices: {
            "blue": ["singing", "what"],
            "yellow": ["angry", "shocked"],
            "red": ["soldier", "what"],
            "some mixture of the above": ["soldier", "singing"]
        }
    },
    {
        id:2,
        text: "What kind of bread is best?",
        image: "lil_images/story/baked.png",
        choices: {
            "sourdough": ["singing", "shocked"],
            "pizza rolls": ["angry"],
            "bagels": ["soldier", "shocked"],
            "french toast": ["what"]
        }
    },
    {
        id:3,
        text: "would you rather have $200 now, or 20,000 v-bucks in a year?",
        image: "lil_images/story/fortnite.png",
        choices: {
            "$200 now": ["angry", "shocked"],
            "those sweet, sweet v-bucks": ["singing", "what", "soldier"]
        }
    },
    {
        id:4,
        text: "what super power would you choose?",
        image: "lil_images/story/batcat.png",
        choices: {
            "flight": ["singing"],
            "invincibility": ["soldier", "angry"],
            "teleportation": ["shocked"],
            "telekinesis": ["what"]
        }
    },
    {
        id:5,
        text: "do you like dogs?",
        image: "lil_images/story/catdog.png",
        choices: {
            "yes": ["angry"],
            "no": ["soldier", "what", "singing", "shocked"]
        }
    }
];


// This keeps track of which question we're on
let currentQuestion = 0;

// Let's complete this function
function loadQuestion(ID) {
    // The loadQuestion function should update the text, images, and buttons of the question with the ID given.
    
    // Step 1
    let questionText = document.getElementById('question-text');
    let questionimage = document.getElementById('question-image');
    let choices = document.getElementById('choices');
    // Step 2
    questionText.innerHTML = questions[ID].text;
    questionimage.src = questions[ID].image;
    // Step 6
    choices.innerHTML = "";
    for (const [choice, personality] of Object.entries(questions[ID].choices)) {
        // Step 3
        let button = document.createElement("button");
        button.innerHTML = choice;
        button.className = "choice-button";
        // Step 4
        choices.appendChild(button);
        // Step 5
        button.addEventListener("click", function() {
            changeQuestion(currentQuestion + 1, personality);
        });
        
    }
}

function changeQuestion(newQuestion, cats) {
    console.log("state is: " + newQuestion);
    cats.forEach(cat => {
        personalities[cat]++;
        console.log(cat + personalities[cat]);
    });

    currentQuestion = newQuestion;

    if (currentQuestion === 6) {
        endGame();
    } else {
        loadQuestion(currentQuestion);
    }
}

function endGame() {
    let maxCount = 0;
    let maxCat = '';

    for (const [cat, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCat = cat;
        }
    }

    console.log(maxCat);

    const text = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');
    const catImagePath = `lil_images/cats/${maxCat}.png`;

    const img = new Image();
    img.src = catImagePath;
    img.className = 'responsive-image';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        questionImage.src = img.src;
        choicesContainer.style.display = 'none';

        text.textContent = `You got ${maxCat} cat!`;
    }

}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    loadQuestion(currentQuestion);
}


console.log("Welcome to the Personality Quiz!");
console.log(personalities);
console.log(questions);
window.startGame = startGame;