const handleSubmit = (e) => {
    e.preventDefault();
    let Data = {
        question: document.getElementById('question').value,
        option1: document.getElementById("OptionA").value,
        option2: document.getElementById("OptionB").value,
        option3: document.getElementById("OptionC").value,
        option4: document.getElementById("OptionD").value,
        answer: document.getElementById("CorrectAnswer").value
    }
}
