import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function AddFoodToMealPlanScreen(props) {

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>

            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2.5), top: RFPercentage(6), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.9), fontFamily: 'Montserrat_700Bold' }} >
                    Add Food to
                </Text>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.9), fontFamily: 'Montserrat_700Bold' }} >
                    Meal Plan
                </Text>
            </ImageBackground>

            <View style={{ width: '88%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6) }} >
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={{ label: 'Select Date' }}
                    Icon={iconComponent}
                    items={[
                        { label: '22 May 2022', value: 'may' },
                        { label: '15 June 2022', value: 'june' },
                    ]}
                />
            </View>
            <View style={{ marginTop: RFPercentage(1), width: '88%', justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.darkGrey, borderWidth: RFPercentage(0.1) }} />

            <View style={{ width: '88%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6) }} >
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    placeholder={{ label: 'Select Meal' }}
                    Icon={iconComponent}
                    items={[
                        { label: 'Breakfast', value: 'breakfast' },
                        { label: 'Lunch', value: 'lunch' },
                    ]}
                />
            </View>
            <View style={{ marginTop: RFPercentage(1), width: '88%', justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.darkGrey, borderWidth: RFPercentage(0.1) }} />

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(15) }}>
                <MyAppButton
                    title="Add"
                    // onPress={() => handleLogin()}
                    gradient={true}
                    bold={false}
                    borderColor={Colors.primary}
                    color={Colors.white}
                    fontFamily={"Montserrat_600SemiBold"}
                    fontSize={RFPercentage(2.2)}
                    borderRadius={RFPercentage(30)}
                    width={"65%"}
                />
            </View>
        </Screen>
    );
}

export default AddFoodToMealPlanScreen;