import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default Logo = () => {
    return (
        <SafeAreaView>
            <View style={styles.headingContainer}>
                    <Text style={styles.headingText1}>Weekend Movie</Text>
                <View style={styles.headerIcons}>
                    <FontAwesome name="user" color="#ffffff" size={30}/>
                    <FontAwesome name="love" color="#ffffff" size={30}/>
                </View>
            </View>
            <View style={styles.languageButton}>
                <TouchableOpacity>
                    <Text style={styles.languageText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.languageText}>Hind</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.languageText}>Telugu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    headingContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'auto',
        height:80,
        backgroundColor:'#000000'
    },
    headerIcons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingRight:10
    },
    headingText1:{
        fontSize:25,
        fontWeight:'bold',
        marginRight:120,
        marginLeft:10,
        color:'white'
    },
})