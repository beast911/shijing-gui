import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';


const Center = () => {
    return ([
        <Text style={[centerStyle.center, centerStyle.title]}>《诗 经》</Text>,
        <Text style={[centerStyle.center, centerStyle.details]}> 又称《诗三百》<br></br>中国最早的诗歌总集 </Text>,
        <Text style={centerStyle.footer}>林 & 双</Text>]
    );
};

const centerStyle = StyleSheet.create({
    center: {
        textAlign: "center",
        width: "62%",
        position: "absolute",
        margin: "auto",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    title: {
        height: window.innerHeight / 2,
        fontSize: "50px",
        fontWeight: "bold"
    },
    details: {
        height: window.innerHeight / 10,
        fontSize: "20px"
    },
    footer: {
        fontWeight: "bold",
        fontSize: "20px",
        position: "absolute",
        bottom: 0,
        paddingBottom: "35px",
        width: window.innerWidth / 4,
        right: 0,
        paddingRight: "10px"
    }
});

export default Center;