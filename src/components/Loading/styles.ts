import theme from 'src/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.colors.light.background};
`
export const LoadingIndictor = styled.ActivityIndicator.attrs(({}) => ({
	color: theme.colors.light.background,
	size: 'large'
}))``;
