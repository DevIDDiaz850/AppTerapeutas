// En tu archivo QuestionForm.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuestionForm = ({ question, options, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Guarda la respuesta seleccionada en algún estado o almacén
    // y llama a la función onNext para pasar a la siguiente pregunta
    onNext(selectedOption);
  };

  return (
    <View>
      <Text>{question}</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => handleOptionSelect(option)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#000',
              marginRight: 10,
              backgroundColor: selectedOption === option ? '#007AFF' : '#fff',
            }}
          />
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      {/* Agrega un botón "Siguiente" para avanzar */}
    </View>
  );
};

export default QuestionForm;
