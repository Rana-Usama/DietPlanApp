import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function AddWeightScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>

            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2.5), top: RFPercentage(6), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.9), fontFamily: 'Montserrat_700Bold' }} >
                    Add Weight
                </Text>
            </ImageBackground>

            {/* White Box */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(50), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', borderRadius: RFPercentage(2.5) }} >
                        <View style={{ marginTop: RFPercentage(7), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />
                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                Weight
                            </Text>
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.1), position: 'absolute', right: 0 }} >
                                52 Kg
                            </Text>
                        </View>
                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />
                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                Date
                            </Text>
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.1), position: 'absolute', right: 0 }} >
                                11 April 2022
                            </Text>
                        </View>
                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />
                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                Progress Photo
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                    Photo
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

export default AddWeightScreen;