import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderTopLeftRadius: RFPercentage(3.8), borderTopRightRadius: RFPercentage(3.8), flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(9), backgroundColor: Colors.primary }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity onPress={() => props.navigation.navigate("MealPlanScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ marginTop: RFPercentage(0.8), width: RFPercentage(3.6), height: RFPercentage(3.6) }} source={require('../../../assets/images/home.png')} />
                    <Text style={{ marginTop: RFPercentage(1), color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("WorkoutPlanScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ marginTop: RFPercentage(0.8), width: RFPercentage(6.1), height: RFPercentage(2.7) }} source={require('../../../assets/images/exercise.png')} />
                    <Text style={{ marginTop: RFPercentage(1), color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                        Exercise
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("MealPlanScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ marginTop: RFPercentage(0.8), width: RFPercentage(3.6), height: RFPercentage(3.6) }} source={require('../../../assets/images/foodb.png')} />
                    <Text style={{ marginTop: RFPercentage(1), color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                        Food
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileSettingsScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ marginTop: RFPercentage(0.8), width: RFPercentage(3.6), height: RFPercentage(3.6) }} source={require('../../../assets/images/profile.png')} />
                    <Text style={{ marginTop: RFPercentage(1), color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                        Profile
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default BottomTab;