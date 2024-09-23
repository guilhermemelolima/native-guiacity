import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { categories } from "../../util/categories";

import { CategoryItem, CategoryText, Container, ContainerCategory, Map } from './styles';
import { Place } from 'src/@types/place';
import { useApi } from 'src/hooks/UseApiGoogle';

const Itapetininga = {
    latitude: -23.5900,
    longitude: -48.0400,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06
};

export function MapScreen() {
    const api = useApi(); 
    const [filter, setFilter] = useState("");
    const [markers, setMarkers] = useState<Place[]>([]);

    useEffect(() => {
        async function fetchPlaces() {
            try {
                const result = await api.getPlacesByFilter(filter);
                setMarkers(result.results);  

                let nextPageToken = result.next_page_token;  
				
                while (nextPageToken) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    const response = await api.getNextPlaces(nextPageToken);
                    setMarkers(prevMarkers => [...prevMarkers, ...response.results]);  
                    nextPageToken = response.next_page_token;  
                }
            } catch (error) {
                console.error('Erro ao buscar os locais:', error);
            }
        }

        if (filter !== "") {
            fetchPlaces();
        } else {
            setMarkers([]);
        }
    }, [filter]);

    return (
        <Container>
            <Map initialRegion={Itapetininga}>
                {markers.map((item) => (
                    <Marker 
                        key={item.place_id}
                        coordinate={{
                            latitude: item.geometry.location.lat,
                            longitude: item.geometry.location.lng,
                        }}
                        title={item.name} 
                        description={item.vicinity}
                    />
                ))}
            </Map>
            <ContainerCategory>
                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    contentContainerStyle={{ alignItems: "center" }}
                    renderItem={({ item }) => (
                        <CategoryItem 
                            key={item.key} 
                            onPress={() => setFilter(filter === item.key ? "" : item.key)}
                            type={filter === item.key ? "SELECTED" : "DEFAULT"}
                        >
                            <CategoryText>{item.label}</CategoryText>
                        </CategoryItem>
                    )}
                />
            </ContainerCategory>
        </Container>
    );
}
