// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Health Assessment Modal
const startAssessmentBtn = document.getElementById('start-assessment');
const assessmentModal = document.getElementById('assessment-modal');
const closeModal = document.querySelector('.close-modal');
const assessmentForm = document.getElementById('assessment-form');
const assessmentResults = document.getElementById('assessment-results');
const questionContainer = document.getElementById('question-container');
const prevQuestionBtn = document.getElementById('prev-question');
const nextQuestionBtn = document.getElementById('next-question');
const progressBar = document.getElementById('assessment-progress');
const wellnessScoreDisplay = document.getElementById('wellness-score');
const categoryScoresDisplay = document.getElementById('category-scores');

// Assessment Questions
const questions = [
  { id: 1, category: 'physical', question: 'How often do you engage in physical activity?', options: [
      { text: 'Rarely or never', value: 0 },
      { text: '1-2 times per week', value: 25 },
      { text: '3-4 times per week', value: 75 },
      { text: '5+ times per week', value: 100 }
  ]},
  { id: 2, category: 'nutrition', question: 'How would you describe your eating habits?', options: [
      { text: 'Mostly processed foods', value: 0 },
      { text: 'Mix of processed and whole foods', value: 50 },
      { text: 'Mostly whole foods', value: 75 },
      { text: 'Balanced, whole food diet', value: 100 }
  ]},
  { id: 3, category: 'sleep', question: 'How many hours of sleep do you typically get each night?', options: [
      { text: 'Less than 5 hours', value: 0 },
      { text: '5-6 hours', value: 25 },
      { text: '6-7 hours', value: 50 },
      { text: '7-8 hours', value: 75 },
      { text: '8+ hours', value: 100 }
  ]},
  { id: 4, category: 'stress', question: 'How often do you feel stressed?', options: [
      { text: 'Almost always', value: 0 },
      { text: 'Frequently', value: 25 },
      { text: 'Sometimes', value: 50 },
      { text: 'Rarely', value: 75 },
      { text: 'Almost never', value: 100 }
  ]},
  // Add 6 more questions here
  { id: 5, category: 'physical', question: 'Do you participate in any sports?', options: [
      { text: 'No', value: 0 },
      { text: 'Occasionally', value: 50 },
      { text: 'Regularly', value: 100 }
  ]},
  { id: 6, category: 'nutrition', question: 'How many servings of fruits and vegetables do you eat daily?', options: [
      { text: '0-1 servings', value: 0 },
      { text: '2-3 servings', value: 50 },
      { text: '4+ servings', value: 100 }
  ]},
  { id: 7, category: 'sleep', question: 'Do you have a consistent sleep schedule?', options: [
      { text: 'No', value: 0 },
      { text: 'Sometimes', value: 50 },
      { text: 'Yes', value: 100 }
  ]},
  { id: 8, category: 'stress', question: 'How do you typically manage stress?', options: [
      { text: 'Poorly', value: 0 },
      { text: 'Okay', value: 50 },
      { text: 'Well', value: 100 }
  ]},
  { id: 9, category: 'physical', question: 'Do you do strength training?', options: [
      { text: 'Never', value: 0 },
      { text: 'Occasionally', value: 50 },
      { text: 'Regularly', value: 100 }
  ]},
  { id: 10, category: 'nutrition', question: 'Do you cook at home?', options: [
      { text: 'Rarely', value: 0 },
      { text: 'Sometimes', value: 50 },
      { text: 'Often', value: 100 }
  ]},
  { id: 11, category: 'sleep', question: 'Do you use screens before bed?', options: [
      { text: 'Always', value: 0 },
      { text: 'Sometimes', value: 50 },
      { text: 'Never', value: 100 }
  ]},
  { id: 12, category: 'stress', question: 'Do you take breaks during the day?', options: [
      { text: 'Rarely', value: 0 },
      { text: 'Sometimes', value: 50 },
      { text: 'Often', value: 100 }
  ]}
];


// Initialize assessment variables
let currentQuestion = 0;
let answers = [];

// Open assessment modal
if (startAssessmentBtn) {
    startAssessmentBtn.addEventListener('click', () => {
        assessmentModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        initializeAssessment();
    });
}

// Close assessment modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        assessmentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === assessmentModal) {
        assessmentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize assessment
function initializeAssessment() {
    currentQuestion = 0;
    answers = Array(questions.length).fill(null);
    assessmentForm.classList.add('active');
    assessmentResults.classList.remove('active');
    renderQuestion();
    updateProgress();
}

// Render current question
function renderQuestion() {
    questionContainer.innerHTML = '';

    const questionData = questions[currentQuestion];
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    const questionTitle = document.createElement('h3');
    questionTitle.textContent = questionData.question;
    questionDiv.appendChild(questionTitle);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    questionData.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;

        if (answers[currentQuestion] !== null && answers[currentQuestion].index === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionDiv.classList.add('selected');

            answers[currentQuestion] = { index, value: option.value, category: questionData.category };
            nextQuestionBtn.disabled = false;
        });

        optionsDiv.appendChild(optionDiv);
    });

    questionDiv.appendChild(optionsDiv);
    questionContainer.appendChild(questionDiv);

    prevQuestionBtn.disabled = currentQuestion === 0;
    nextQuestionBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next';
    nextQuestionBtn.disabled = answers[currentQuestion] === null;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Navigate to previous question
if (prevQuestionBtn) {
    prevQuestionBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
            updateProgress();
        }
    });
}

// Navigate to next question or show results
if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
            updateProgress();
        } else {
            showResults();
        }
    });
}
// Chatbot Functionality
// Chatbot Functionality with Gemini API
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Replace with your Gemini API key
const GEMINI_API_KEY = 'AIzaSyBRjJQAF95UxjxxEejUAGZ4TUZ3opRmOjA';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// Function to send user input to Gemini API
async function sendToGemini(userMessage) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: userMessage }],
                }],
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch response from Gemini API');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text; // Extract the bot's response
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, something went wrong. Please try again.';
    }
}

// Function to add a message to the chat window
function addMessageToChat(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message
}

// Event listener for send button
if (sendBtn && userInput) {
    sendBtn.addEventListener('click', async () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessageToChat(userMessage, true); // Add user message to chat
            userInput.value = ''; // Clear input field

            try {
                const botResponse = await sendToGemini(userMessage); // Get bot response
                addMessageToChat(botResponse); // Add bot response to chat
            } catch (error) {
                addMessageToChat('Sorry, something went wrong. Please try again.'); // Handle errors
                console.error(error);
            }
        }
    });

    // Event listener for Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click(); // Trigger send button click
        }
    });
}



const testimonialSlider = document.getElementById('testimonial-slider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
    // Hide all slides
    testimonialSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the current slide and activate dot
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
}

if (prevBtn && nextBtn) {
    // Previous button
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = testimonialSlides.length - 1;
        }
        showSlide(currentSlide);
    });

    // Next button
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= testimonialSlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });
}

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        currentSlide = slideIndex;
        showSlide(currentSlide);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    if (nextBtn) {
        nextBtn.click();
    }
}, 5000);



function animateCounter(elementId, target, duration) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let start = 0;
  const increment = Math.ceil(target / (duration / 16));
  
  const timer = setInterval(() => {
      start += increment;
      element.textContent = start.toLocaleString();
      
      if (start >= target) {
          element.textContent = target.toLocaleString();
          clearInterval(timer);
      }
  }, 16);
}

// Intersection Observer for counters
const countersSection = document.querySelector('.trust-counters');

if (countersSection) {
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          animateCounter('consultation-counter', 10000, 2000);
          animateCounter('customer-counter', 5000, 2000);
          animateCounter('product-counter', 500, 2000);
          observer.unobserve(countersSection);
      }
  }, { threshold: 0.5 });

  observer.observe(countersSection);
}

// Calculate and show results
// Calculate and show results
function showResults() {
  assessmentForm.classList.remove('active');
  assessmentResults.classList.add('active');

  // Calculate scores
  const scores = { physical: 0, nutrition: 0, sleep: 0, stress: 0 };
  const categoryCounts = { physical: 0, nutrition: 0, sleep: 0, stress: 0 };

  answers.forEach(answer => {
      if (answer !== null) {
          scores[answer.category] += answer.value;
          categoryCounts[answer.category]++;
      }
  });

  // Calculate average scores
  const avgScores = {};
  for (const category in scores) {
      avgScores[category] = categoryCounts[category] > 0 ? scores[category] / categoryCounts[category] : 0;
  }

  // Calculate overall wellness score
  const overallScore = Math.round((avgScores.physical + avgScores.nutrition + avgScores.sleep + avgScores.stress) / 4);

  // Animate the score count-up effect
  let currentScore = 0;
  const scoreElement = document.getElementById('wellness-score');
  const scoreInterval = setInterval(() => {
      if (currentScore >= overallScore) {
          clearInterval(scoreInterval);
      } else {
          currentScore++;
          scoreElement.textContent = currentScore;
      }
  }, 30);

  // Set width for progress bars and update text
  const physicalBar = document.getElementById('physical-score');
  const nutritionBar = document.getElementById('nutrition-score');
  const sleepBar = document.getElementById('sleep-score');
  const stressBar = document.getElementById('stress-score');

  const physicalPercent = Math.round(avgScores.physical);
  const nutritionPercent = Math.round(avgScores.nutrition);
  const sleepPercent = Math.round(avgScores.sleep);
  const stressPercent = Math.round(avgScores.stress);

  physicalBar.style.width = `${physicalPercent}%`;
  nutritionBar.style.width = `${nutritionPercent}%`;
  sleepBar.style.width = `${sleepPercent}%`;
  stressBar.style.width = `${stressPercent}%`;

  // Update percentage text directly to ensure they match
  document.getElementById('physical-percent').textContent = `${physicalPercent}%`;
  document.getElementById('nutrition-percent').textContent = `${nutritionPercent}%`;
  document.getElementById('sleep-percent').textContent = `${sleepPercent}%`;
  document.getElementById('stress-percent').textContent = `${stressPercent}%`;

  // Animate percentages
  animatePercentage(document.getElementById('physical-percent'), physicalPercent);
  animatePercentage(document.getElementById('nutrition-percent'), nutritionPercent);
  animatePercentage(document.getElementById('sleep-percent'), sleepPercent);
  animatePercentage(document.getElementById('stress-percent'), stressPercent);

  // Display recommendations based on score
  const recommendationElement = document.getElementById('recommendations-list');
  if (overallScore >= 80) {
      recommendationElement.innerHTML = "Great job! Keep up your healthy habits!";
  } else if (overallScore >= 50) {
      recommendationElement.innerHTML = "You're doing well, but there's room for improvement.";
  } else {
      recommendationElement.innerHTML = "Consider making healthier lifestyle choices to improve your well-being.";
  }
}

// Animate percentage display function
function animatePercentage(element, targetValue) {
  let currentValue = 0;
  const interval = setInterval(() => {
      if (currentValue >= targetValue) {
          clearInterval(interval);
      } else {
          currentValue++;
          element.textContent = `${currentValue}%`;
      }
  }, 30);
}
