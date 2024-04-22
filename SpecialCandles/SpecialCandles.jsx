import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const catalogSpecialCandles = [
    {name: 'Dia de la madre', price: '15000 COP', image: 'https://th.bing.com/th/id/OIP.Af7RcB5MkYjI4gUH1D8n9wHaGq?rs=1&pid=ImgDetMain'},
    {name: 'Dia del padre', price: '18000 COP', image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/174/623/products/papa_web-021-0ff3df249a140ee1c416234481195961-640-0.jpg'},
    {name:'Amor y amistad', price: '20000 COP', image: 'https://sweetcandlecol.com/wp-content/uploads/2022/04/Velas-Para-Amor-y-Amistad.jpg'}
]

function ViewSpecialCandles(){
    const [dataCandles, setDataCandles] = react.useState(catalogSpecialCandles)

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

export { ViewSpecialCandles }