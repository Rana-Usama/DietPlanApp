import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import InputField from './../components/common/InputField';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function MealPlanScreen(props) {

    const [activeButton, setActiveButton] = useState('0');

    const [recipesButton, setRecipesButton] = useState('0');

    const byMealCartData = [
        {
            title: 'Breakfast',
            imageTitle: 'Lemon Pasta',
            imageSource: require('../../assets/images/bm1.png')
            // onPress:
        },
        {
            title: 'Snacks',
            imageTitle: 'Apple Pie',
            imageSource: require('../../assets/images/bm2.png')
        },
        {
            title: 'Lunch',
            imageTitle: 'Summer Salad',
            imageSource: require('../../assets/images/bm3.png')
        },
        {
            title: 'Dinner',
            imageTitle: 'Bacon and Tomatoes',
            imageSource: require('../../assets/images/bm4.png')
        },
    ]

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search",
            iconName: 'search',
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };


    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(32) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")} activeOpacity={0.8} style={{ position: 'absolute', left: 0, width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color={Colors.black} />
                    </TouchableOpacity>
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.5), fontFamily: 'Montserrat_700Bold' }} >
                        Meal Plan
                    </Text>
                </View>

                {/* First List */}
                <View style={{ flexDirection: 'row', marginTop: RFPercentage(5), width: '90%', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('1')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Recipes
                        </Text>
                        {activeButton == '1' ?
                            <View style={{ width: RFPercentage(10), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('2')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            Meal Plan Configurator
                        </Text>
                        {activeButton == '2' ?
                            <View style={{ width: RFPercentage(22), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                            :
                            null
                        }
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveButton('3')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                        <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                            GL/GI Table
                        </Text>
                        {activeButton == '3' ?
                            <View style={{ width: RFPercentage(10), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
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
                                By Meal
                            </Text>
                            {recipesButton == '1' ?
                                <View style={{ width: RFPercentage(10), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('2')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                All
                            </Text>
                            {recipesButton == '2' ?
                                <View style={{ width: RFPercentage(6), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('3')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Foods Favourite
                            </Text>
                            {recipesButton == '3' ?
                                <View style={{ width: RFPercentage(16), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => setRecipesButton('4')} style={{ justifyContent: 'center', alignItems: 'center' }}  >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold' }} >
                                Created by me
                            </Text>
                            {recipesButton == '4' ?
                                <View style={{ width: RFPercentage(14), height: RFPercentage(0.7), borderRadius: RFPercentage(0.5), backgroundColor: Colors.secondary }} />
                                :
                                null
                            }
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
            </ImageBackground>

            {/* By Meal Body */}
            {recipesButton == '1' ?
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {byMealCartData.map((item, i) => (
                            <View key={i} style={{ width: '90%', justifyContent: 'center', alignItems: 'center', marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2) }} >
                                <View style={{ position: 'absolute', top: 0, left: RFPercentage(1.4) }} >
                                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.1), fontFamily: 'Montserrat_600SemiBold' }} >
                                        {item.title}
                                    </Text>
                                </View>
                                <ImageBackground style={{ overflow: 'hidden', marginTop: RFPercentage(4), width: '100%', height: RFPercentage(13), borderRadius: RFPercentage(10), justifyContent: 'center', alignItems: 'center' }} source={item.imageSource} >
                                    {/* empty view for background opacity */}
                                    <View style={{ borderBottomRightRadius: RFPercentage(2), borderBottomLeftRadius: RFPercentage(2), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }} >
                                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.4), fontFamily: 'Montserrat_500Medium' }} >
                                            {item.imageTitle}
                                        </Text>
                                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                                            <AntDesign name="pluscircleo" style={{ fontSize: RFPercentage(4) }} color={Colors.secondary} />
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </View>
                        ))}

                        <View style={{ marginBottom: RFPercentage(6) }} />
                    </View>
                </ScrollView>
                :
                null
            }

            {/* All Body */}
            {recipesButton == '2' ?
                <ScrollView style={{ flex: 1, width: '100%' }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {/* Input field */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {inputField.map((item, i) => (
                                <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1.8) }} >
                                    <InputField
                                        placeholder={item.placeholder}
                                        placeholderColor={Colors.darkGrey}
                                        height={RFPercentage(6.4)}
                                        leftIconName={item.iconName}
                                        backgroundColor={Colors.white}
                                        // onTouchStart={() => setGreenBorder(true)}
                                        // onTouchEnd={() => setGreenBorder(false)}
                                        borderWidth={RFPercentage(0.2)}
                                        borderColor={Colors.white}
                                        secure={item.secure}
                                        borderRadius={RFPercentage(20)}
                                        color={Colors.black}
                                        fontSize={RFPercentage(2)}
                                        handleFeild={(text) => handleChange(text, i)}
                                        value={item.value}
                                        width={"92%"}
                                    />
                                </View>
                            ))}
                        </View>

                        <ImageBackground style={{ overflow: 'hidden', width: RFPercentage(26), height: RFPercentage(30), borderRadius: RFPercentage(3) }} source={require('../../assets/images/all1.png')} >








                        </ImageBackground>




                        <View style={{ marginBottom: RFPercentage(6) }} />
                    </View>
                </ScrollView>
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

export default MealPlanScreen;