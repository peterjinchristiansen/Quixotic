const router = require('express').Router();
// requires the routes we created in quiz-routes.js
const quizRoutes = require('./quiz-routes.js');
const questionRoutes = require('./question-routes.js');
const userRoutes = require('./user-routes.js');

// Middleware to append /quizzes to the apis specified url
router.use('/quizzes', quizRoutes);
router.use('/questions', questionRoutes);
router.use('/user', userRoutes);

module.exports = router;