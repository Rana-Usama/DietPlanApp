import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, FlatList, Switch, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//config
import Colors from '../config/Colors';

function WorkoutConfiguratorScreenCart({ t1, t2, t3 }) {

    const [disable, setDisbale] = useState(false);

    return (

        <View style={{ marginTop: RFPercentage(2), width: '90%', height: RFPercentage(18), justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: disable ? Colors.purple : Colors.white, borderRadius: RFPercentage(2.2) }} >
            <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(3), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <Ionicons name="md-time-outline" style={{ fontSize: RFPercentage(3.4) }} color={disable ? Colors.white : Colors.primary} />
                <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Montserrat_600SemiBold', color: disable ? Colors.white : Colors.primary, fontSize: RFPercentage(2.7) }} >
                    {t1}
                </Text>
            </View>
            <View style={{ marginTop: RFPercentage(2), marginLeft: RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Montserrat_500Medium', color: disable ? Colors.white : Colors.primary, fontSize: RFPercentage(1.9) }} >
                    {t2}
                </Text>
                <Text style={{ marginLeft: RFPercentage(2), fontFamily: 'Montserrat_500Medium', color: disable ? Colors.white : Colors.primary, fontSize: RFPercentage(2.7) }} >
                    {t3}
                </Text>
            </View>

            {/* Button */}
            {disable ?
                <TouchableOpacity activeOpacity={0.8} onPress={() => setDisbale(false)} style={{ width: RFPercentage(14), height: RFPercentage(4.2), borderRadius: RFPercentage(20), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(2) }} >
                    <Text style={{ color: Colors.secondary, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                        Enable
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity activeOpacity={0.8} onPress={() => setDisbale(true)} style={{ width: RFPercentage(14), height: RFPercentage(4.2), borderRadius: RFPercentage(20), backgroundColor: Colors.grey, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(2) }} >
                    <Text style={{ color: Colors.darkGrey2, fontSize: RFPercentage(1.8), fontFamily: 'Montserrat_400Regular' }} >
                        Disabled
                    </Text>
                </TouchableOpacity>
            }

        </View>


    );
}

export default WorkoutConfiguratorScreenCart;