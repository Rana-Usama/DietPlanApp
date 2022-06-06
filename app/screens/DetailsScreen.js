import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function DetailsScreen(props) {

    const [heart, setHeart] = useState(false);

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.newGrey }}>

            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'flex-start', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <View style={{ marginTop: RFPercentage(5), width: '84%', justifyContent: 'center', alignItems: 'flex-start' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate("MealPlanScreen")} activeOpacity={0.8} style={{ width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                        <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

                        {heart ?
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setHeart(false)} >
                                <AntDesign name="heart" style={{ fontSize: RFPercentage(3.5) }} color={Colors.red} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setHeart(true)}   >
                                <AntDesign name="heart" style={{ fontSize: RFPercentage(3.5) }} color={"rgba(139, 32, 136, 0.24)"} />
                            </TouchableOpacity>
                        }
                        <TouchableOpacity activeOpacity={0.8} >
                            <AntDesign name="pluscircleo" style={{ marginLeft: RFPercentage(3), fontSize: RFPercentage(3.5) }} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ marginTop: RFPercentage(6), color: Colors.primary, fontSize: RFPercentage(3.9), fontFamily: 'Montserrat_700Bold' }} >
                    Watercress Salad
                </Text>
            </ImageBackground>

            <View style={{ marginTop: RFPercentage(5), width: '100%', justifyContent: 'flex-end', alignItems: 'flex-start', flexDirection: 'row', alignSelf: 'center' }} >
                <View style={{ marginTop: RFPercentage(4), position: 'absolute', width: '50%', justifyContent: 'center', alignItems: 'flex-start', left: RFPercentage(3) }} >
                    <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_600SemiBold' }} >
                        Ingredients
                    </Text>

                    <Text style={{ marginTop: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_400Regular' }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas integer auctor pellentesque risus mattis nunc. Mattis
                        ut magna in mollis placerat accumsan, quis porttitor.
                    </Text>
                </View>
                <Image style={{ width: RFPercentage(20), height: RFPercentage(27.6) }} source={require('../../assets/images/food.png')} />
            </View>

            <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(2.6), fontFamily: 'Montserrat_600SemiBold' }} >
                    Preparation
                </Text>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ marginTop: RFPercentage(2), color: Colors.primary, fontSize: RFPercentage(1.9), fontFamily: 'Montserrat_400Regular' }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas integer auctor pellentesque risus mattis nunc. Mattis
                        ut magna in mollis placerat accumsan, quis porttitor.
                    </Text>
                </View>
            </View>

            <BottomTab props={props} />
        </Screen>
    );
}

export default DetailsScreen;