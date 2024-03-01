const question_number_array = ['Question 1. ', 'Question 2. ', 'Question 3. ', 'Question 4. ', 'Question 5. ']
const question_text_array = ["What is the Earth's primary source of energy? ", "Which gas makes up the majority of Earth's atmosphere? ", 'What is the main function of red blood cells in the human body? ', 'Which planet is known as the "Red Planet" in our solar system? ', 'What is the powerhouse of the cell? ']

const question_number_text = document.getElementById('text-heading')
const question_text = document.getElementById('text-question')

const first_choice_array = ['A. Wind', 'A. Oxygen', 'A. Carrying Oxygen', 'A. Venus', 'A. Nucleus']
const second_choice_array = ['B. Fossil Fuels', 'B. Carbon Dioxide', 'B. Fighting Infections', 'B. Mars', 'B. Mitochondria']
const third_choice_array = ['C. Solar', 'C. Nitrogen', 'C. Digesting Food', 'C. Jupiter', 'C. Endoplasmic Reticulum']

const explanation_div = document.getElementById('explanation')
const explanation_content = document.getElementById('content')
const explanation_array = ['The sun is the primary source of energy for Earth. Solar Energy is harnessed through various methods like solar panels.', "Nitrogen constitutes about 78% of Earth's atmosphere, providing an essential component for life.", 'Red Blood Cells transport oxygen from the lungs to the rest of the body and help remvoe carbon dioxide.', 'Mars is often referred to as the "Red Planet" due to its reddish appearanc, attributed to iron oxide (rust) on its surface.', 'Mitochondria are often called the powerhouse of the cell because they generate energy (ATP) through cellular respiration.']

const first_choice = document.getElementById('choice-1')
const second_choice = document.getElementById('choice-2')
const third_choice = document.getElementById('choice-3')

const quiz_controller_div = document.getElementById('quiz-controller')
const next_question = document.getElementById('next-btn')

let score = 0
let wrong = 0

function display_question(question_number) {
    question_number_text.innerText = question_number_array[question_number]
    question_text.innerText = question_text_array[question_number]
}

function display_choices(question_number) {
    first_choice.innerText = first_choice_array[question_number]
    second_choice.innerText = second_choice_array[question_number]
    third_choice.innerText = third_choice_array[question_number]
}

function show_explanation(question_number) {
    explanation_div.style = "opacity: 1;"
    explanation_content.innerText = explanation_array[question_number]
}

function reset() {
    first_choice.style = ""
    second_choice.style = ""
    third_choice.style = ""
    explanation_div.style = "opacity: 0;"
    quiz_controller_div.style = "opacity: 0;"
}

function show_next_button() {
    quiz_controller_div.style = "opacity: 1;"
}

function show_correct_answer(question_number) {
    switch (question_number) {
        case 0:
            first_choice.style = "background-color: #FF3131;"
            second_choice.style = "background-color: #FF3131;"
            third_choice.style = "background-color: #39FF14; color: #000000;"
            break;
        case 1:
            first_choice.style = "background-color: #FF3131;"
            second_choice.style = "background-color: #FF3131;"
            third_choice.style = "background-color: #39FF14; color: #000000;"
            break;
        case 2:
            first_choice.style = "background-color: #39FF14; color: #000000;"
            second_choice.style = "background-color: #FF3131;"
            third_choice.style = "background-color: #FF3131;"
            break;
        case 3:
            first_choice.style = "background-color: #FF3131;"
            second_choice.style = "background-color: #39FF14; color: #000000;"
            third_choice.style = "background-color: #FF3131;"
            break;
        case 4:
            first_choice.style = "background-color: #FF3131;"
            second_choice.style = "background-color: #39FF14; color: #000000;"
            third_choice.style = "background-color: #FF3131;"
            break;
    }
}

function show_question_one() {
    let answered = false
    display_question(0)
    display_choices(0)
    first_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(0)
            show_explanation(0)
            show_next_button()
        }
    })
    second_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(0)
            show_explanation(0)
            show_next_button()
        }

    })
    third_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(0)
            show_explanation(0)
            show_next_button()
            score++
        }
    })
}



function show_question_two() {
    let answered = false
    display_question(1)
    display_choices(1)
    first_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(1)
            show_explanation(1)
            show_next_button()
        }
    })
    second_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(1)
            show_explanation(1)
            show_next_button()
        }
    })
    third_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(1)
            show_explanation(1)
            show_next_button()
            score++
        }
    })
}

function show_question_three() {
    let answered = false
    display_question(2)
    display_choices(2)
    first_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(2)
            show_explanation(2)
            show_next_button()
            score++
        }
    })
    second_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(2)
            show_explanation(2)
            show_next_button()
        }

    })
    third_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(2)
            show_explanation(2)
            show_next_button()
        }
    })
}

function show_question_four() {
    let answered = false
    display_question(3)
    display_choices(3)
    first_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(3)
            show_explanation(3)
            show_next_button()
        }
    })
    second_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(3)
            show_explanation(3)
            show_next_button()
            score++
        }

    })
    third_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(3)
            show_explanation(3)
            show_next_button()
        }
    })
}

function show_question_five() {
    let answered = false
    display_question(4)
    display_choices(4)
    first_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(4)
            show_explanation(4)
            show_next_button()
        }
    })
    second_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(4)
            show_explanation(4)
            show_next_button()
            score++
        }
    })
    third_choice.addEventListener('click', () => {
        if (!answered) {
            answered = true
            show_correct_answer(4)
            show_explanation(4)
            show_next_button()
        }
    })
}


function quiz() {
    let current_question = 0;

    function show_next_question() {
        switch (current_question) {
            case 0:
                show_question_one();
                break;
            case 1:
                show_question_two();
                break;
            case 2:
                show_question_three();
                break;
            case 3:
                show_question_four();
                break;
            case 4:
                show_question_five();
                break;
        }
    }

    function show_score(score) {
        first_choice.innerText = ""
        second_choice.innerText = ""
        third_choice.innerText = ""
        switch (score) {
            case 0:
                question_number_text.innerText = "You Can Be Much Better!"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
            case 1:
                question_number_text.innerText = "You Can Be Better!"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
            case 2:
                question_number_text.innerText = "I Know You Can Be Good!!"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
            case 3:
                question_number_text.innerText = "Good"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
            case 4:
                question_number_text.innerText = "Very Good!"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
            case 5:
                question_number_text.innerText = "You Did It! You Are Smart!"
                question_text.innerText = `Your Quiz Score Is ${score}`
                break;
        }
    }

    next_question.addEventListener('click', () => {
        reset();
        current_question++;
        if (current_question < question_number_array.length) {
            show_next_question();
        } else {
            show_score(score)
            score = 0
            current_question = -1
            show_next_button()
            next_question.innerText = "Restart Test"
        }
    });
    show_next_question()
}

quiz();
