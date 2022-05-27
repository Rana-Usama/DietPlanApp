import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "react-native-modal-datetime-picker";

//components
import Screen from './../components/Screen';
import ScheduleScreenTodayComponent from './../components/ScheduleScreenTodayComponent';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ScheduleScreen(props) {

    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false)
    const [date, setDate] = useState(new Date())

    const handleDatePicked = date => {
        setDate(date)
    };


    const [activeButton, setActiveButton] = useState('0');

    const [cartColor, setCartColor] = useState(false);

    const [minus, setMinus] = useState(false);

    const [check, setCheck] = useState('0');

    const [firstCheck, setFirstCheck] = useState(false);



    const todayCartData = [
        {
            time: '10:00 AM',
            Title: 'Breakfast',
            subTitle: 'Avacado salad, Blueberries'
        },
        {
            time: '10:00 AM',
            Title: 'Breakfast',
            subTitle: 'Avacado salad, Blueberries'
        },
        {
            time: '10:00 AM',
            Title: 'Breakfast',
            subTitle: 'Avacado salad, Blueberries'
        },
        {
            time: '10:00 AM',
            Title: 'Breakfast',
            subTitle: 'Avacado salad, Blueberries'
        },
    ]

    return (
        <Screen style={styles.screen}>
            <DateTimePicker
                // textColor={Colors.primary}
                isDarkModeEnabled={true}
                isVisible={isDateTimePickerVisible}
                onConfirm={(date) => handleDatePicked(date)}
                onCancel={() => setIsDateTimePickerVisible(false)}
                mode="date"
            />
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(32) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0, width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsDateTimePickerVisible(true)} style={{ position: 'absolute', right: 0 }} >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                            {date.toDateString()}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: RFPercentage(3), color: Colors.primary, fontSize: RFPercentage(3.5), fontFamily: 'Montserrat_700Bold' }} >
                    Schedule
                </Text>

                {/* First List */}
                <View style={{ marginLeft: RFPercentage(2.8), flexDirection: 'row', marginTop: RFPercentage(5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_600SemiBold' }} >
                            Today
                        </Text>
                        {activeButton == '1' ?
                            <View style={{ width: RFPercentage(6), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ marginLeft: RFPercentage(4), justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_600SemiBold' }} >
                            Tomorrow
                        </Text>
                        {activeButton == '2' ?
                            <View style={{ width: RFPercentage(10), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* If Today Button is active */}
            {activeButton == '1' ?
                <>
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            {todayCartData.map((item, i) => (
                                <ScheduleScreenTodayComponent key={i} time={item.time} Title={item.Title} subTitle={item.subTitle} />

                            ))}

                            <View style={{ marginBottom: RFPercentage(12) }} />
                        </View>
                    </ScrollView>
                </>
                :
                null
            }

            {/* If Tomorrow Button is active */}
            {activeButton == '2' ?
                <>
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                            <View style={{ width: '90%', height: RFPercentage(14), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                <View style={{ marginBottom: RFPercentage(2), marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.8), fontFamily: 'Montserrat_600SemiBold' }} >
                                        Water
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(1.4), color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_400Regular' }} >
                                        0.25/2L
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', position: 'absolute', right: RFPercentage(2), top: RFPercentage(2) }} >
                                    <View style={{ width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.secondary, borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                            -250ml
                                        </Text>
                                    </View>
                                    <View style={{ marginLeft: RFPercentage(1.5), width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.primary, borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                            -250ml
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: RFPercentage(2), alignSelf: 'center', width: '90%', height: RFPercentage(14), backgroundColor: cartColor ? Colors.secondary : Colors.white, borderRadius: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                                <View style={{ marginLeft: RFPercentage(2) }} >
                                    <Ionicons name="time-outline" style={{ fontSize: RFPercentage(3) }} color={Colors.primary} />
                                    <Text style={{ marginTop: RFPercentage(1), color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_400Regular' }} >
                                        10:00 AM
                                    </Text>
                                </View>

                                <View style={{ marginLeft: RFPercentage(2), justifyContent: 'center', alignItems: 'flex-start' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.8), fontFamily: 'Montserrat_600SemiBold' }} >
                                        Cardio
                                    </Text>
                                    <Text style={{ marginTop: RFPercentage(1), color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_400Regular' }} >
                                        25 Minutes
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: RFPercentage(1), top: RFPercentage(2) }} >
                                    <TouchableOpacity activeOpacity={0.8} >
                                        <Feather name="plus-circle" style={{ fontSize: RFPercentage(2.8) }} color={Colors.primary} />
                                    </TouchableOpacity>

                                    {cartColor ?
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => setCartColor(false)} >
                                            <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(2.8), marginLeft: RFPercentage(1) }} color={Colors.black} />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => setCartColor(true)} >
                                            <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(2.8), marginLeft: RFPercentage(1) }} color={Colors.primary} />
                                        </TouchableOpacity>
                                    }

                                </View>
                            </View>

                            <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(40), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', borderRadius: RFPercentage(2.5) }} >
                                <ScrollView style={{ flex: 1, width: '100%' }} >
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                                        <View style={{ marginTop: RFPercentage(7), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />
                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <TouchableOpacity activeOpacity={0.8} >
                                                <Feather name="minus-circle" style={{ fontSize: RFPercentage(2.6) }} color={Colors.primary} />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                                Squats
                                            </Text>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                                                <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(2.8), marginLeft: RFPercentage(1) }} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <TouchableOpacity activeOpacity={0.8} >
                                                <Feather name="minus-circle" style={{ fontSize: RFPercentage(2.6) }} color={Colors.primary} />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                                Running
                                            </Text>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                                                <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(2.8), marginLeft: RFPercentage(1) }} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <TouchableOpacity activeOpacity={0.8} >
                                                <Feather name="minus-circle" style={{ fontSize: RFPercentage(2.6) }} color={Colors.primary} />
                                            </TouchableOpacity>
                                            <Text style={{ marginLeft: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                                Jumping Jacks
                                            </Text>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                                                <AntDesign name="checkcircle" style={{ fontSize: RFPercentage(2.8), marginLeft: RFPercentage(1) }} color={Colors.black} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                    </View>
                                </ScrollView>
                            </View>

                            {/* Mood Box */}
                            <View style={{ marginTop: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center', width: '90%', height: RFPercentage(35), backgroundColor: Colors.white, borderRadius: RFPercentage(3) }} >
                                {/* First Row */}
                                <View style={{ width: '90%', marginTop: RFPercentage(5), justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_600SemiBold' }} >
                                        Mood
                                    </Text>
                                    <View style={{ position: 'absolute', right: 0 }} >
                                        <TouchableOpacity onPress={() => setFirstCheck(true)} activeOpacity={0.8} style={{ width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {firstCheck ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ marginTop: RFPercentage(2), width: '75%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                    <View style={{ bottom: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4.8), height: RFPercentage(4.8) }} source={require('../../assets/images/m1.png')} />
                                        <TouchableOpacity onPress={() => setCheck('2')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '2' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m2.png')} />
                                        <TouchableOpacity onPress={() => setCheck('3')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '3' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m3.png')} />
                                        <TouchableOpacity onPress={() => setCheck('4')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '4' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m4.png')} />
                                        <TouchableOpacity onPress={() => setCheck('5')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '5' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m5.png')} />
                                        <TouchableOpacity onPress={() => setCheck('6')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '6' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Second row */}
                                <View style={{ marginTop: RFPercentage(2), width: '75%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                    <View style={{ left: RFPercentage(1), justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m6.png')} />
                                        <TouchableOpacity onPress={() => setCheck('7')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '7' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m7.png')} />
                                        <TouchableOpacity onPress={() => setCheck('8')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '8' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m8.png')} />
                                        <TouchableOpacity onPress={() => setCheck('9')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '9' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m9.png')} />
                                        <TouchableOpacity onPress={() => setCheck('10')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '10' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/m4.png')} />
                                        <TouchableOpacity onPress={() => setCheck('11')} activeOpacity={0.8} style={{ marginTop: RFPercentage(1), width: RFPercentage(3), height: RFPercentage(3), borderColor: Colors.darkGrey, borderWidth: RFPercentage(0.1), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: RFPercentage(20) }} >
                                            {check == '11' ?
                                                <TouchableOpacity activeOpacity={0.8} style={{ borderRadius: RFPercentage(6), width: RFPercentage(2), height: RFPercentage(2), backgroundColor: Colors.darkGrey }} />
                                                :
                                                null
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginBottom: RFPercentage(12) }} />
                        </View>
                    </ScrollView>
                </>
                :
                null
            }

            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.newGrey
    }
})

export default ScheduleScreen;