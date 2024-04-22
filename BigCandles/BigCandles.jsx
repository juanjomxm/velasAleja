import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const catalogBigCandles = [
    {name:'Vela abuela', price: '20000 COP', image: 'https://i.etsystatic.com/12454197/r/il/6b3f6a/3043676617/il_1588xN.3043676617_jagp.jpg'},
    {name: 'Vela mamá', price: '15000 COP', image: 'https://th.bing.com/th/id/OIP.Af7RcB5MkYjI4gUH1D8n9wHaGq?rs=1&pid=ImgDetMain'},
    {name: 'Vela papá', price: '18000 COP', image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/174/623/products/papa_web-021-0ff3df249a140ee1c416234481195961-640-0.jpg'},
]

function ViewBigCandles(){
    const [dataCandles, setDataCandles] = react.useState(catalogBigCandles)

    return(
        <View style={styles.container}>
            {dataCandles.map((item, index)=>(
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

export { ViewBigCandles }