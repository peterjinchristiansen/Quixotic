
async function newQuizHandler(event) {
    event.preventDefault();
    // get the quiz title and category from the homepage
    const title = document.querySelector('input[name="quiz-title"]').value;
    const category = document.querySelector('select[name="quiz-category"]').value;

    if(title && category) {
        const response = await fetch(`/api/quizzes`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                category
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(quiz => {
           const newQuizId = quiz.id;
           document.location.replace(`/create/${newQuizId}`);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

    } else {
        alert("Please Input a Title and Select a Category for your Quiz!")
    }

}

async function goToSeachHandler(event) {
    event.preventDefault();
    // get the searched category and title
    const title = document.querySelector('input[name="quiz-search"]').value;
    const category = document.querySelector('select[name="category-search"]').value;
    
    if(!title) {
        document.location.replace(`/search/${category}`);
    } else {
        document.location.replace(`/search/${category}/${title}`);
    }
}

document.querySelector('.outline-2a').addEventListener('submit', goToSeachHandler);

document.querySelector('.outline-2b').addEventListener('submit', newQuizHandler);

