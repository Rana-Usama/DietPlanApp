import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, FlatList, Switch, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function PersonalizedWorkoutPlanScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            title: 'Workout Name',
            value: "",
        },
        {
            placeholder: "11:00 AM",
            title: 'Workout Hour',
            value: "",
        },
        {
            placeholder: "10 min",
            title: 'Workout Duration',
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const [inputField2, SetInputField2] = useState([
        {
            placeholder: "Workout Plan Name",
            value: "",
        },
    ]);

    const handleChange2 = (text, i) => {
        let tempfeilds = [...inputField2];
        tempfeilds[i].value = text;
        SetInputField2(tempfeilds);

    };
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                {/* <View style={{ marginTop: RFPercentage(8), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} > */}
                <TouchableOpacity onPress={() => props.navigation.navigate("WorkoutPlanScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2.5), top: RFPercentage(6), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.3), fontFamily: 'Montserrat_700Bold' }} >
                    Personalized
                </Text>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.3), fontFamily: 'Montserrat_700Bold' }} >
                    Workout Plan
                </Text>
                {/* </View> */}
            </ImageBackground>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Input field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1.8) }} >
                                <View style={{ width: '32%' }} >
                                    <Text style={{ marginRight: RFPercentage(3), color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_500Medium' }} >
                                        {item.title}
                                    </Text>
                                </View>
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.darkGrey}
                                    height={RFPercentage(6)}
                                    backgroundColor={Colors.white}
                                    borderWidth={RFPercentage(0.2)}
                                    borderColor={Colors.white}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(20)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"60%"}
                                />
                            </View>
                        ))}
                    </View>

                    <View style={{ right: RFPercentage(-3), flexDirection: 'row', marginTop: RFPercentage(2), width: '100%', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }} >
                        {/* Button */}
                        <MyAppButton
                            title="Add"
                            // onPress={() => props.navigation.navigate("PersonalizedMealPlanScreen")}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={"Montserrat_600SemiBold"}
                            fontSize={RFPercentage(2.2)}
                            borderRadius={RFPercentage(30)}
                            width={"47%"}
                        />
                    </View>

                    {/* White Box */}
                    <View style={{ marginTop: RFPercentage(3), borderRadius: RFPercentage(2), width: '85%', height: RFPercentage(45), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center' }} >
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                {/*Meal Plan Name Input field */}
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    {inputField2.map((item, i) => (
                                        <View key={i} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1.8) }} >
                                            <InputField
                                                placeholder={item.placeholder}
                                                placeholderColor={Colors.darkGrey}
                                                height={RFPercentage(6)}
                                                backgroundColor={Colors.secondary}
                                                borderWidth={RFPercentage(0.2)}
                                                borderColor={Colors.secondary}
                                                secure={item.secure}
                                                borderRadius={RFPercentage(20)}
                                                color={Colors.black}
                                                fontSize={RFPercentage(2)}
                                                handleFeild={(text) => handleChange2(text, i)}
                                                value={item.value}
                                                width={"58%"}
                                            />
                                        </View>
                                    ))}
                                </View>

                                <View style={{ marginTop: RFPercentage(2), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} />

                                {/* Plan 1 */}
                                <View style={{ width: '90%', marginTop: RFPercentage(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                        <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(10), height: RFPercentage(3.7), borderRadius: RFPercentage(10), backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center' }}  >
                                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_500Medium' }} >
                                                Update
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2), width: RFPercentage(10), height: RFPercentage(3.7), borderRadius: RFPercentage(10), backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center' }}  >
                                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_500Medium' }} >
                                                Delete
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'flex-start' }} >

                                        <Text style={{ marginTop: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(2.2), fontFamily: 'Montserrat_600SemiBold' }} >
                                            Cardio
                                        </Text>
                                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.7) }} >
                                            11:00 AM
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ marginTop: RFPercentage(5), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} />

                                {/* Plan 2 */}
                                <View style={{ width: '90%', marginTop: RFPercentage(5), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                        <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(10), height: RFPercentage(3.7), borderRadius: RFPercentage(10), backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center' }}  >
                                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_500Medium' }} >
                                                Update
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2), width: RFPercentage(10), height: RFPercentage(3.7), borderRadius: RFPercentage(10), backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center' }}  >
                                            <Text style={{ color: Colors.black, fontFamily: 'Montserrat_500Medium' }} >
                                                Delete
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ position: 'absolute', left: 0, justifyContent: 'center', alignItems: 'flex-start' }} >

                                        <Text style={{ marginTop: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(2.2), fontFamily: 'Montserrat_600SemiBold' }} >
                                            Muscle Gain
                                        </Text>
                                        <Text style={{ color: Colors.darkGrey, fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.7) }} >
                                            11:00 AM
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ marginTop: RFPercentage(5), width: '100%', height: RFPercentage(0.1), backgroundColor: Colors.grey }} />

                                {/* Button */}
                                <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
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
                                        width={"60%"}
                                    />
                                </View>

                                <View style={{ marginBottom: RFPercentage(3) }} />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>
            <BottomTab props={props} />
        </Screen>
    );
}

export default PersonalizedWorkoutPlanScreen;