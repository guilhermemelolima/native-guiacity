import { TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'SELECTED' | 'DEFAULT' ;

type Props = {
	type: ButtonTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
	flex: 1;
    background-color: ${({theme}) => theme.colors.light.background};
`;

export const Map = styled(MapView)`
    flex: 1;
`;

export const ContainerCategory = styled.View`
    position: absolute;
    bottom: 40px;
    left: 10px;
    right: 10px;
    flex-direction: row;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.light.background};
    border-radius: 10px;
    height: 70px;
`;

export const CategoryItem = styled(TouchableOpacity)<Props>`
    padding: 10px;
    background-color: ${({ theme, type}) => (
		type === "SELECTED" ? theme.colors.light.primary : theme.colors.light.background
	)};
    border-radius: 5px;
`;

export const CategoryText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_size.lg}px;
        color: ${theme.colors.light.text_primary};
        font-family: ${theme.font_family.bold};
    `};
`;
