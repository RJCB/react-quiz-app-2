# Quiz app built using React JS
App can be accessed at  https://rjcb.github.io/react-quiz-app-2/

## How the game works
1. Start quiz
2. 5 random questions are loaded. Select your answer and click `Check answers` button
3. Answers will be validated and correct, wrong answers will be highlighted
4. Score will be displayed at the bottom
5. Once `Check answers` is clicked, options are unclickable/disabled and `Play again` button will displayed, clicking it will redirect to Start page

## screenshots

<img width="350" height="357" alt="Screen Shot 2022-03-10 at 1 33 25 PM" src="https://user-images.githubusercontent.com/37097058/157793105-4dd045d5-3900-47bb-8c82-5a0418717337.png"> <img width="350" alt="Screen Shot 2022-03-10 at 3 29 03 PM" src="https://user-images.githubusercontent.com/37097058/157793107-6c66b335-1991-4eda-8292-f3539f486c5f.png">
<img width="350" alt="Screen Shot 2022-03-10 at 3 31 56 PM" src="https://user-images.githubusercontent.com/37097058/157793108-d9068fac-046c-45de-82b0-64601a43955c.png">

## components
This app has 3 components: Start, Quiz, and Question

## API - Trivia API
Quiz questions are fetched from `opentdb`

## Ideas
1. Provide user with an option to choose number of questions,category, difficulty. Right now, we fetch 5 questions of Any type with Medium difficulty.
2. Add timer
3. Confetti if user scores 100% (maybe)
