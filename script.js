const personalities = {
    personality1: 0,
    personality2: 0,
  };
  



  
  function question1() {
    questionText.textContent = "Question 1";
    createButton("Option 1", "personality1", question2);
    createButton("Option 2", "personality2", question2);
  }
  
  function question2() {
    questionText.textContent = "Question 2";
    createButton("Option 1", "personality1", question3);
    createButton("Option 2", "personality2", question3);
  }
  
  function question3() {
    questionText.textContent = "Question 3";
    createButton("Option 1", "personality1", endQuiz);
    createButton("Option 2", "personality2", endQuiz);
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