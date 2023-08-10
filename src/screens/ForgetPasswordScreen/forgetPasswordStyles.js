import React from "react";
import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    title:{
        marginTop:30,
        fontSize: 18,
        textAlign:'center',
      },
    choices:{
        width:'80%',
        justifyContent:'center'
    },
    choicecontainer:{
        backgroundColor:"#F1F1F1",
        borderColor:"#F1F1F1",
        borderWidth:1,
        borderRadius:12,
        flexDirection:'row',
        alignItems:'center',
        height:'30%',
        width:'100%',
        marginVertical:15,     
    },
    icon:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#D9D9D9',
        borderRadius:'50%',
        padding:10,
        margin:20,
    }
    
})
export default styles