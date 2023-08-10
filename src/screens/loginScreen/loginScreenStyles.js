import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      flex:1,
      margin:16,
      fontSize: 36,
      justifyContent:'center',
    },
    form:{
      flex:4,
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
    forgetpass:{
      width:'80%',
      flexDirection:'row',
      justifyContent:'flex-end',
    },
    logbutton:{
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
    },
    newaccount:{
      width:'76%',
      margin:10,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end'
    }
  });
  export default styles