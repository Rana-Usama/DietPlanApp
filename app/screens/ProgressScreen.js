import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, FlatList, Switch, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function ProgressScreen(props) {

    const [activeButton, setActiveButton] = useState('0');

    const [recipesButton, setRecipesButton] = useState('0');

    return (
        <Screen style={styles.screen}>
            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(32) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0, width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.5), fontFamily: 'Montserrat_700Bold' }} >
                        Progress
                    </Text>
                </View>

                {/* First List */}
                <View style={{ marginLeft: RFPercentage(2.8), flexDirection: 'row', marginTop: RFPercentage(5), width: '30%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'flex-start' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Weight
                        </Text>
                        {activeButton == '1' ?
                            <View style={{ width: RFPercentage(8), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Mood
                        </Text>
                        {activeButton == '2' ?
                            <View style={{ width: RFPercentage(6), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>
                </View>

                {/* Recipes List */}
                {activeButton == '1' ?

                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(3.5), width: '90%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('1')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                April
                            </Text>
                            {recipesButton == '1' ?
                                <View style={{ width: RFPercentage(5), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('2')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                3 Months
                            </Text>
                            {recipesButton == '2' ?
                                <View style={{ width: RFPercentage(9), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('3')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                6 Months
                            </Text>
                            {recipesButton == '3' ?
                                <View style={{ width: RFPercentage(9), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('4')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Year
                            </Text>
                            {recipesButton == '4' ?
                                <View style={{ width: RFPercentage(5), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('5')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                From Beginning
                            </Text>
                            {recipesButton == '5' ?
                                <View style={{ width: RFPercentage(16), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
            </ImageBackground>


            {/* If Weight Button is active */}
            {activeButton == '1' ?
                <>
                    {/* 3 Months Body */}
                    {recipesButton == '2' ?
                        <ScrollView style={{ flex: 1, width: '100%' }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(3) }}>

                                <View style={{ width: '90%', height: RFPercentage(45), backgroundColor: Colors.white, borderRadius: RFPercentage(2.6), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontFamily: 'Montserrat_500Medium' }} >
                                        Graph
                                    </Text>
                                </View>

                                <View style={{ marginTop: RFPercentage(3), flexDirection: 'row', width: '86%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(20), height: RFPercentage(5.5), borderRadius: RFPercentage(10), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_500Medium' }} >
                                            Add Entry
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(24), height: RFPercentage(5.5), borderRadius: RFPercentage(10), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_500Medium' }} >
                                            View Photo Gallery
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(50), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', borderRadius: RFPercentage(2.5) }} >
                                    <ScrollView style={{ flex: 1, width: '100%' }} >

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                                Entries
                                            </Text>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(3), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                                <TouchableOpacity activeOpacity={0.8} >
                                                    <Feather name="minus-circle" style={{ fontSize: RFPercentage(3.6) }} color={Colors.purple} />
                                                </TouchableOpacity>
                                                <View style={{ marginLeft: RFPercentage(1) }} >
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontFamily: 'Montserrat_500Medium' }} >
                                                        55 Kg
                                                    </Text>
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                                        Monday 22 April, 2022
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                                    Photo
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                                <TouchableOpacity activeOpacity={0.8} >
                                                    <Feather name="minus-circle" style={{ fontSize: RFPercentage(3.6) }} color={Colors.purple} />
                                                </TouchableOpacity>
                                                <View style={{ marginLeft: RFPercentage(1) }} >
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontFamily: 'Montserrat_500Medium' }} >
                                                        55 Kg
                                                    </Text>
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                                        Monday 22 April, 2022
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                                    Photo
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                        <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                                <TouchableOpacity activeOpacity={0.8} >
                                                    <Feather name="minus-circle" style={{ fontSize: RFPercentage(3.6) }} color={Colors.purple} />
                                                </TouchableOpacity>
                                                <View style={{ marginLeft: RFPercentage(1) }} >
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontFamily: 'Montserrat_500Medium' }} >
                                                        55 Kg
                                                    </Text>
                                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                                        Monday 22 April, 2022
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                                    Photo
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                    </ScrollView>
                                </View>
                                <View style={{ marginBottom: RFPercentage(6) }} />
                            </View>
                        </ScrollView>
                        :
                        null
                    }
                </>
                :
                null
            }

            {/* If Weight Button is active */}
            {activeButton == '2' ?
                <>
                    <ScrollView style={{ flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: RFPercentage(3) }}>

                            <View style={{ width: '90%', height: RFPercentage(45), backgroundColor: Colors.white, borderRadius: RFPercentage(2.6), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3), fontFamily: 'Montserrat_500Medium' }} >
                                    Graph
                                </Text>
                            </View>

                            <View style={{ marginTop: RFPercentage(3), flexDirection: 'row', width: '86%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                                <TouchableOpacity activeOpacity={0.8} style={{ width: RFPercentage(20), height: RFPercentage(5.5), borderRadius: RFPercentage(10), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_500Medium' }} >
                                        Add Entry
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(24), height: RFPercentage(5.5), borderRadius: RFPercentage(10), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_500Medium' }} >
                                        View Photo Gallery
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: RFPercentage(3), width: '86%', height: RFPercentage(50), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', borderRadius: RFPercentage(2.5) }} >
                                <ScrollView style={{ flex: 1, width: '100%' }} >

                                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_600SemiBold' }} >
                                            Entries
                                        </Text>
                                    </View>
                                    <View style={{ marginTop: RFPercentage(3), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                            <TouchableOpacity activeOpacity={0.8} >
                                                <Feather name="minus-circle" style={{ fontSize: RFPercentage(3.6) }} color={Colors.purple} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: RFPercentage(1) }} >
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontFamily: 'Montserrat_500Medium' }} >
                                                    Happy
                                                </Text>
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                                    Monday 22 April, 2022
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                                Photo
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                            <TouchableOpacity activeOpacity={0.8} >
                                                <Feather name="minus-circle" style={{ fontSize: RFPercentage(3.6) }} color={Colors.purple} />
                                            </TouchableOpacity>
                                            <View style={{ marginLeft: RFPercentage(1) }} >
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.7), fontFamily: 'Montserrat_500Medium' }} >
                                                    Sad
                                                </Text>
                                                <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                                                    Monday 22 April, 2022
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: RFPercentage(10), height: RFPercentage(4), backgroundColor: Colors.grey, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2) }} >
                                                Photo
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: RFPercentage(4), width: '100%', backgroundColor: Colors.grey, height: RFPercentage(0.1) }} />

                                </ScrollView>
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

export default ProgressScreen;