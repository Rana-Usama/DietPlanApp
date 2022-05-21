import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, FlatList, Switch, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function PersonalizedMealPlanScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0, width: RFPercentage(4), height: RFPercentage(4), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontFamily: 'Montserrat_700Bold' }} >
                        Personalized Meal Plan
                    </Text>
                </View>
            </ImageBackground>

        </Screen>
    );
}

export default PersonalizedMealPlanScreen;