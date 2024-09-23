import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: ${screenWidth - 40}px;  
  height: 400px;
  resize-mode: cover;  
  border-radius: 10px;  
`;

export const IndicatorContainer = styled.View`
  flex-direction: row; 
  position: absolute;
  bottom: 10px;
`;

export const Indicator = styled.View`
  height: 8px;
  width: 8px;    
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.light.primary};  
  margin-horizontal: 4px;
`;
