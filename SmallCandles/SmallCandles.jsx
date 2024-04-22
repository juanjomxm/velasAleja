import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const catalogSmallCandles = [
    {name: 'Velita', price: '10000 COP', image: 'https://th.bing.com/th/id/OIP.ZJ387DFxO5VYvRXUpOFrCwHaHa?rs=1&pid=ImgDetMain'},
    {name: 'Arbol pequeño', price: '20000 COP', image: 'https://i.etsystatic.com/14223543/r/il/08e935/2666349382/il_fullxfull.2666349382_8dp6.jpg'}
]

function SmallCandles(){
    const [dataSmallCandles, setDataSmallCandles] = React.useState(catalogSmallCandles)

    return(
        <View style={styles.container}>
            {dataSmallCandles.map((item, index)=>(
                <View key={index} style={styles.itemContainer}>
                    <Text>{item.name}</Text>
                    <Image
                    source={{uri: item.image}}
                    style={styles.image}
                    />
                    <Text>{item.price}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },
    itemContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
});

export { SmallCandles }