import React from "react";
import { View, TouchableOpacity,Text } from "react-native";
import styles from "./otpScreenStyles";


const OtpScreen =({ navigation })=>{
    const handlePop = () => {
        alert('your account has been created')
        navigation.popToTop()
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePop}>
                <Text>Go back home</Text>
            </TouchableOpacity>
        </View>
    )

}
export default OtpScreen