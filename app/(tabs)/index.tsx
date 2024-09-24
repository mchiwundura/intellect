import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';

const initialQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: 'What is the capital of France?',
    options: ['Madrid', 'Paris', 'Berlin', 'Rome'],
    answer: 'Paris',
    EF: 2.5,
    I: 0,
    R: 0,
    nextReview: Date.now(),
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    EF: 2.5,
    I: 0,
    R: 0,
    nextReview: Date.now(),
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: 'Which element has the chemical symbol O?',
    options: ['Gold', 'Oxygen', 'Silver', 'Iron'],
    answer: 'Oxygen',
    EF: 2.5,
    I: 0,
    R: 0,
    nextReview: Date.now(),
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['Mark Twain', 'William Shakespeare', 'Charles Dickens', 'Jane Austen'],
    answer: 'William Shakespeare',
    EF: 2.5,
    I: 0,
    R: 0,
    nextReview: Date.now(),
  },
  // Add more questions as needed
];

const Flashcard = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showQualityButtons, setShowQualityButtons] = useState(false);

  // Function to get the next due question
  const getNextQuestion = () => {
    const dueQuestions = questions
      .filter(q => q.type === 'multipleChoice' && q.nextReview <= Date.now())
      .sort((a, b) => a.nextReview - b.nextReview);
    return dueQuestions.length > 0 ? dueQuestions[0] : null;
  };

  const loadNextQuestion = () => {
    const nextQuestion = getNextQuestion();
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setShowQualityButtons(false);
    } else {
      // No due questions
      setCurrentQuestion(null);
    }
  };

  // Call loadNextQuestion on component mount
  React.useEffect(() => {
    loadNextQuestion();
  }, []);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setShowQualityButtons(true);
  };

  const handleQualityResponse = q => {
    // Update the question's EF, I, R, and nextReview
    const updatedQuestions = questions.map(qst => {
      if (qst.id === currentQuestion.id) {
        let { EF, I, R } = qst;
        const quality = q; // Quality score from 0 to 5

        if (quality < 3) {
          R = 0;
          I = 1;
        } else {
          if (R === 0) {
            I = 1;
          } else if (R === 1) {
            I = 6;
          } else {
            I = Math.round(I * EF);
          }
          R += 1;
        }

        // Update EF
        EF = EF + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (EF < 1.3) EF = 1.3;

        // Schedule next review
        const nextReview = Date.now() + I * 24 * 60 * 60 * 1000; // Convert days to milliseconds

        return { ...qst, EF, I, R, nextReview };
      }
      return qst;
    });

    setQuestions(updatedQuestions);
    loadNextQuestion();
  };

  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.questionText}>No more due questions!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(option)}
          disabled={showQualityButtons}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      {showQualityButtons && (
        <View style={styles.qualityButtonsContainer}>
          <Text style={styles.answerText}>
            {selectedOption === currentQuestion.answer ? 'Correct!' : 'Incorrect!'}
          </Text>
          <Text style={styles.promptText}>How easy was it to recall this answer?</Text>
          <View style={styles.qualityButtons}>
            <TouchableOpacity
              style={styles.qualityButton}
              onPress={() => handleQualityResponse(0)}
            >
              <Text style={styles.qualityButtonText}>Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qualityButton}
              onPress={() => handleQualityResponse(3)}
            >
              <Text style={styles.qualityButtonText}>Hard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qualityButton}
              onPress={() => handleQualityResponse(4)}
            >
              <Text style={styles.qualityButtonText}>Good</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.qualityButton}
              onPress={() => handleQualityResponse(5)}
            >
              <Text style={styles.qualityButtonText}>Easy</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Flashcard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#58CC02',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  questionText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    width: '100%',
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#FFD700',
  },
  optionText: {
    fontSize: 18,
    color: '#000000',
  },
  answerText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 10,
  },
  promptText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  qualityButtonsContainer: {
    alignItems: 'center',
  },
  qualityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qualityButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  qualityButtonText: {
    fontSize: 16,
    color: '#58CC02',
  },
});
