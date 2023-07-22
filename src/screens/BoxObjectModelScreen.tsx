import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    title: {
     fontSize: 20,
     borderWidth: 1,
     marginHorizontal: 50,
     marginVertical: 50,
     paddingVertical: 50,
     textAlign: "center"
    //  width: 150
    //  backgroundColor: "red"
    }
});