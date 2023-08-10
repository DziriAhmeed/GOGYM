import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    flex:1,
    marginTop:26,
    fontSize: 36,
    justifyContent:'center',
  },
  form:{
    flex:5,
    alignItems:'center',
    width:'100%'
  },
  input:{
    width:'80%',
      height:50,
      borderColor:'gray',
      borderRadius:12,
      borderWidth:1,
      marginVertical:10,
      padding:10,
  },
  createbutton:{
    width:'80%',
      height:45,
      margin:20,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#0094FF',
      borderColor:'#0094FF',
      borderWidth:1,
      borderRadius:12,
  }
});
export default styles;