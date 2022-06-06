import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from "react-native-modal-datetime-picker";


//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function AddFoodToMealPlanScreen(props) {

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
    const [date, setDate] = useState(new Date())

    const handleDatePicked = date => {
        setDate(date)
    };


    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>
            <DateTimePicker
                // textColor={Colors.primary}
                isDarkModeEnabled={true}
                isVisible={isDateTimePickerVisible}
                onConfirm={(date) => handleDatePicked(date)}
                onCancel={() => setIsDateTimePickerVisible(false)}
                mode="date"
            />
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <TouchableOpacity onPress={() => props.navigation.navigate("MealPlanScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2.5), top: RFPercentage(6), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
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
                <TouchableOpacity onPress={() => setIsDateTimePickerVisible(true)} style={{ width: '100%', position: 'absolute', left: 0 }} >
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_600SemiBold' }} >
                        {date.toDateString()}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFPercentage(2), width: '88%', justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.darkGrey, borderWidth: RFPercentage(0.1) }} />

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

            <BottomTab props={props} />
        </Screen>
    );
}

export default AddFoodToMealPlanScreen;