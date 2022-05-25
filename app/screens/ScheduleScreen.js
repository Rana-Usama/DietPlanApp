import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import ScheduleScreenTodayComponent from './../components/ScheduleScreenTodayComponent';

//config
import Colors from '../config/Colors';

function ScheduleScreen(props) {

    const [activeButton, setActiveButton] = useState('0');

    const [cartColor, setCartColor] = useState(false);

    const [minus, setMinus] = useState(false);

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
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(32) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0, width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.5), fontFamily: 'Montserrat_700Bold' }} >
                        Schedule
                    </Text>
                </View>

                {/* First List */}
                <View style={{ marginLeft: RFPercentage(2.8), flexDirection: 'row', marginTop: RFPercentage(5), width: '34%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Today
                        </Text>
                        {activeButton == '1' ?
                            <View style={{ width: RFPercentage(6), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
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

                            <View style={{ marginBottom: RFPercentage(6) }} />
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

                            <View style={{ marginTop: RFPercentage(3), width: '90%', height: RFPercentage(40), backgroundColor: Colors.white, borderRadius: RFPercentage(3) }} >

                            </View>

                            <View style={{ marginBottom: RFPercentage(6) }} />
                        </View>
                    </ScrollView>
                </>
                :
                null
            }
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