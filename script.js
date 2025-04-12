const personalities = {
    Griffindor:0,
    hufflepuff:0,
    ravenclaw:0,
    slytherin:0,


  };
  



  
  function question1() {
    questionText.textContent = "What would you do if someone was hurt";
    createButton("get help", "hufflepuff", question2);
    createButton("ask what happened", "Griffindor", question2);
    createButton("try to fix their pain with magic", "ravenclaw", question2);
    createButton("leave it", "slytherin", question2);
  }
  
  function question2() {
    questionText.textContent = "what is your favorite spell";
    createButton("Wingardium Leviosa", "ravenclaw", question3);
    createButton("Expecto Patronum", "Griffindor", question3);
    createButton("lumos", "hufflepuff", question3);
    createButton("Serpensortia", "slytherin", question3);
  }
  
  function question3() {
    questionText.textContent = "If you see a teacher do something illegal what would you do?";
    createButton("tell on another teacher", "slytherin", question4);
    createButton("ask what the teacher was doing", "ravenclaw", question4);
    createButton("pretend you didnt see anything", "hufflepuff", question4);
    createButton("tell your friends about it and try to fix it", "Griffindor", question4);
  }
  
  function question4() {
    questionText.textContent = "if you see one of your housemates go into the forbidden forest what would you do?";
    createButton("follow", "Griffindor", question5);
    createButton("see who it is", "ravenclaw", question5);
    createButton("try to stop him/she", "hufflepuff", question5);
    createButton("get the teacher", "slytherin", question5);
  }
  function question5() {
    questionText.textContent = "what magical creature is your favorite";
    createButton("hippogriff", "Griffindor", endQuiz);
    createButton("phoenix", "hufflepuff", endQuiz);
    createButton("snake", "slytherin", endQuiz);
    createButton("Dobby the elf", "ravenclaw", endQuiz);
  }
  
  



  
  function createButton(text, personality, nextQuestionFn) {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = 'choice-button';
    button.onclick = () => {
      personalities[personality]++;
      clearButtons();
      nextQuestionFn();
    };
    choicesContainer.appendChild(button);
  }
  
  function clearButtons() {
    choicesContainer.innerHTML = '';
  }
  
  function endQuiz() {
    let topPersonality = '';
    let topScore = -1;
  
    for (const [personality, score] of Object.entries(personalities)) {
      if (score > topScore) {
        topScore = score;
        topPersonality = personality;
      }
    }
    console.log(topPersonality);
    questionText.textContent = "Your personality is " + topPersonality + "! 🎉";
    clearButtons();
  }
  

  
  function startGame() {
    document.getElementById('game-container').style.display = 'block';
    question1();
  }
  
  const questionText = document.getElementById('question-text');
  const choicesContainer = document.getElementById('choices');
  
startGame();