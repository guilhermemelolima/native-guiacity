
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 20px; 
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const ImageProfile = styled(Image)`
	margin-top:	60px;
	margin-bottom: 30px;
	width: 200px; 
	height: 200px;
	border-radius: 65px; 
	align-self: center; 
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const Nome = styled.Text`
	text-align: center;
	margin-bottom: 20px;
	font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
	font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;

export const Endereco = styled.Text`
	font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
	font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

