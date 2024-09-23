import { useState } from 'react';
import { 
	ScrollView,
	Dimensions, 
	NativeSyntheticEvent, 
	NativeScrollEvent 
} from 'react-native';
import { Container, IndicatorContainer, Image, Indicator } from './styles';

const { width: screenWidth } = Dimensions.get('window');

// Ajuste a tipagem para aceitar um array de objetos com a propriedade 'uri'
interface ImageCarrosselProps {
  listImagens: { uri: string }[];
}

export function ImageCarrossel({ listImagens }: ImageCarrosselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <Container>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {listImagens.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image.uri }}
          />
        ))}
      </ScrollView>

      <IndicatorContainer>
        {listImagens.map((_, index) => (
          <Indicator
            key={index}
            style={[
              { opacity: index === activeIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </IndicatorContainer>
    </Container>
  );
}

