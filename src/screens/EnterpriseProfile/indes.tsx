import { ImageCarrossel } from '@components/ImageCarrossel';
import { Container, Endereco, ImageProfile, Nome } from './styles';
import React from 'react';

const images = [
  { uri: 'https://picsum.photos/720' },
  { uri: 'https://picsum.photos/720' },
  { uri: 'https://picsum.photos/720' },
];

export function EnterpriseProfile() {
  return (
    <Container>
      	<ImageProfile source={{ uri: 'https://picsum.photos/350' }} />
		<Nome>
			{"Nome qualquer"}
		</Nome>
      	<ImageCarrossel listImagens={images} />
	  	<Endereco>
			Endereço: {" um endereço qualquer"}
		</Endereco>
    </Container>
  );
}
