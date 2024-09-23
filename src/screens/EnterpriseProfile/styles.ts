
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 20px; 
    background-color: ${({theme}) => theme.COLORS.LIGHT.BACKGROUND};
`;

export const ImageProfile = styled(Image)`
	margin-top:	60px;
	margin-bottom: 30px;
	width: 200px; 
	height: 200px;
	border-radius: 65px; 
	align-self: center; 
	background-color: ${({ theme }) => theme.colors.light.background};
`;

export const Nome = styled.Text`
	text-align: center;
	margin-bottom: 20px;
	font-size: ${({theme}) => theme.font_size.xl}px;
	font-family: ${({theme}) => theme.font_family.bold};
`;

export const Endereco = styled.Text`
	font-size: ${({theme}) => theme.font_size.md}px;
	font-family: ${({theme}) => theme.font_family.regular};
`;

