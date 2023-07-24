import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Text style={{ color: '#000' }}>Poop!</Text>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;


