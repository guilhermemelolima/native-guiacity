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
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
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
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
    border-radius: 10px;
    height: 70px;
`;

export const CategoryItem = styled(TouchableOpacity)<Props>`
    padding: 10px;
    background-color: ${({ theme, type}) => (
		type === "SELECTED" ? theme.COLORS.GREEN : theme.COLORS.BACKGROUND_LIGHT
	)};
    border-radius: 5px;
`;

export const CategoryText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.TEXT_PRIMARY};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;
