import React from 'react';
import {View, Text,  StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-around',
        marginBottom: 22,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    square: {
        width: 26, 
        height: 26,
        backgroundColor: 'orange',
        opacity: 0.5,
        borderRadius: 8,
        marginRight: 18,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 15,
        height: 10,
        borderColor: 'orange',
        borderWidth: 3,
        borderRadius: 8,
    },
    
});

export default Task;