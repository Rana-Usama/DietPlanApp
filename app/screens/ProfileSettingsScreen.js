import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Switch, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ProfileSettingsScreen(props) {

    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    const [isEnabled5, setIsEnabled5] = useState(false);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

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
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(5), width: '84%', justifyContent: 'center', alignItems: 'flex-start' }} >
                    <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.9), marginTop: RFPercentage(4), fontFamily: 'Montserrat_700Bold' }} >
                    Profile Settings
                </Text>
                <View style={{ width: '90%', position: 'absolute', bottom: RFPercentage(4), left: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_600SemiBold' }} >
                        Username :
                    </Text>
                    <Text style={{ marginLeft: RFPercentage(0.5), color: Colors.purple, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_600SemiBold' }} >
                        abby.racbury@gmail.com
                    </Text>
                </View>
            </ImageBackground>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* First Type */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }} >
                        <Text style={{ position: 'absolute', left: 0, color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Auto Complete Meals
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.white }}
                            thumbColor={isEnabled1 ? '#5C40AF' : Colors.primary}
                            ios_backgroundColor={Colors.grey}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }} >
                        <Text style={{ position: 'absolute', left: 0, color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Auto Complete Workout Routines
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.white }}
                            thumbColor={isEnabled2 ? '#5C40AF' : Colors.primary}
                            ios_backgroundColor={Colors.grey}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>

                    {/* Second type */}
                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Notification with
                            </Text>
                        </View>
                        <View style={{ width: RFPercentage(13), height: RFPercentage(5.5), backgroundColor: Colors.white, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }} >
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: ' ' }}
                                    Icon={iconComponent}
                                    items={[
                                        { label: '15 min', value: '15' },
                                        { label: '1 hr', value: '1' },
                                        { label: '4 hr', value: '4' },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1.2) }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Before each meal
                            </Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.white }}
                            thumbColor={isEnabled3 ? '#5C40AF' : Colors.primary}
                            ios_backgroundColor={Colors.grey}
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Notification with
                            </Text>
                        </View>
                        <View style={{ width: RFPercentage(13), height: RFPercentage(5.5), backgroundColor: Colors.white, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }} >
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: ' ' }}
                                    Icon={iconComponent}
                                    items={[
                                        { label: '15 min', value: '15' },
                                        { label: '1 hr', value: '1' },
                                        { label: '4 hr', value: '4' },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1.2) }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Before each workout
                            </Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.white }}
                            thumbColor={isEnabled4 ? '#5C40AF' : Colors.primary}
                            ios_backgroundColor={Colors.grey}
                            onValueChange={toggleSwitch4}
                            value={isEnabled4}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start' }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Notification every
                            </Text>
                        </View>
                        <View style={{ width: RFPercentage(13), height: RFPercentage(5.5), backgroundColor: Colors.white, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }} >
                                <RNPickerSelect
                                    onValueChange={(value) => console.log(value)}
                                    placeholder={{ label: ' ' }}
                                    Icon={iconComponent}
                                    items={[
                                        { label: '15 min', value: '15' },
                                        { label: '1 hr', value: '1' },
                                        { label: '4 hr', value: '4' },
                                    ]}
                                />
                            </View>
                        </View>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: RFPercentage(1.2) }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                For drinking water
                            </Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: Colors.white }}
                            thumbColor={isEnabled5 ? '#5C40AF' : Colors.primary}
                            ios_backgroundColor={Colors.grey}
                            onValueChange={toggleSwitch5}
                            value={isEnabled5}
                        />
                    </View>


                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
                        <MyAppButton
                            title="Change Password"
                            // onPress={() => handleLogin()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={"Montserrat_600SemiBold"}
                            fontSize={RFPercentage(2.2)}
                            borderRadius={RFPercentage(30)}
                            width={"66%"}
                        />
                    </View>
                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(3) }}>
                        <MyAppButton
                            title="Sign Out"
                            // onPress={() => handleLogin()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={"Montserrat_600SemiBold"}
                            fontSize={RFPercentage(2.2)}
                            borderRadius={RFPercentage(30)}
                            width={"66%"}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>

            <BottomTab props={props} />
        </Screen>
    );
}

export default ProfileSettingsScreen;