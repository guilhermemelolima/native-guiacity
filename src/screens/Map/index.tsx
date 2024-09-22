import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { categories } from "../../util/categories";

interface Place {
    next_page_token?: string;
    place_id: string;
    name: string;
    reference: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    photos: {
        height: number;
        html_attributions: string[];
        photo_reference: string;
        width: number;
    }[];
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    rating: number;
    user_ratings_total: number;
    scope: string;
    types: string[];
    vicinity: string;
}

const Itapetininga = {
latitude: -23.5900,
    longitude: -48.0400,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06
}

export function Map() {
    const GOOGLE_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

    const [filter, setFilter] = useState("");
    const [markers, setMarkers] = useState<Place[]>([]);

    useEffect(() => {
        async function fetchPlaces() {
            try {
                const result = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-23.5900,-48.0400&radius=10000&type=${filter}&key=${GOOGLE_API_KEY}`);
                setMarkers(result.data.results);
    
                let nextPageToken = result.data.next_page_token;
    
                while (nextPageToken) {
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${nextPageToken}&key=${GOOGLE_API_KEY}`);
                    setMarkers(prevMarkers => [...prevMarkers, ...response.data.results]);
                    nextPageToken = response.data.next_page_token;
                }
            } catch (error) {
                console.error('Erro ao buscar os locais:', error);
            }
            
        }

        if (filter !== "") {
            fetchPlaces();
        }else{
            setMarkers([])
        }
    }, [filter]);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={Itapetininga}>
            {markers.map((item) => (
                <Marker 
                    key={item.place_id}
                    coordinate={{
                        latitude: item.geometry.location.lat,
                        longitude: item.geometry.location.lng,
                    }}
                    title={item.name} 
                    description={item.vicinity}
                    onPress={() => {
                        console.log(item.place_id)
                        async function test(){
                            const result = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&key=${GOOGLE_API_KEY}`);
                            console.log(result)
                        }
                        test()
                    }}
                >
                </Marker>
            ))}
            </MapView>
            <View style={styles.categoryContainer}>
                <FlatList 
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                    contentContainerStyle={{
                        alignItems: "center"
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            key={item.key} 
                            onPress={() => {
                                setFilter(filter === item.key ? "" : item.key)
                            }}
                            style={[
                                styles.categoryItem,
                                filter === item.key ? styles.selectedCategory: null
                            ]}
                        > 
                            <Text style={styles.categoryText}>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
    categoryContainer:{
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    categoryItem:{
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    categoryimage:{
        width: 50,
        height: 50
    },
    categoryText:{
        textAlign: "center",
        color: "#6c6c80",
        fontWeight: "bold"
    },
    selectedCategory:{
        backgroundColor: "#fff",
    },
    markerIcon: {
        width: 50,
        height: 50,
    }
});
