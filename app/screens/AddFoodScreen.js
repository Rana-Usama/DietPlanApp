import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import LineInputField from '../components/common/LineInputField';
import BottomTab from './../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function AddFoodScreen(props) {

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Food Name",
            value: "",
        },
        {
            placeholder: "Glycemic Index",
            value: "",
        },
        {
            placeholder: "Carbohydrates quantity (Per 100 KG)",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

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

            {/* Nav */}
            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: RFPercentage(31.6) }} source={require('../../assets/images/top.png')} >
                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', left: RFPercentage(2.5), top: RFPercentage(6), width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(30), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.4) }} color={Colors.black} />
                </TouchableOpacity>
                <Text style={{ color: Colors.primary, fontSize: RFPercentage(3.9), fontFamily: 'Montserrat_700Bold' }} >
                    Add Food
                </Text>
            </ImageBackground>

            {/* Input field */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', alignSelf: 'center' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(1), alignSelf: 'center' }} >
                                <LineInputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.primary}
                                    placeholderAtCenter={false}
                                    height={RFPercentage(6.8)}
                                    wide={true}
                                    backgroundColor={Colors.newGrey}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1.4)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"96%"}
                                />
                            </View>
                        ))}
                    </View>

                    <View style={{ width: '85%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(6) }} >
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            placeholder={{ label: 'Served as : Snack' }}
                            Icon={iconComponent}
                            items={[
                                { label: '22 May 2022', value: 'may' },
                                { label: '15 June 2022', value: 'june' },
                            ]}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(1), width: '85%', justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.grey, borderWidth: RFPercentage(0.1) }} />

                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(18), height: RFPercentage(5), borderRadius: RFPercentage(10), backgroundColor: Colors.white }} >
                            <Text style={{ color: Colors.primary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_600SemiBold' }} >
                                Add Food Photo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(6) }}>
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
                    <View style={{ marginBottom: RFPercentage(12) }} />
                </View>
            </ScrollView>
            <BottomTab props={props} />
        </Screen>
    );
}

export default AddFoodScreen;