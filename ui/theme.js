import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    userTile:{
        fontFamily:'Trebuchet MS',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#000',
        padding:5,
        paddingTop:35,
        paddingBottom:35,
        margin:5
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userTileButton:{
        backgroundColor:'blue',
        padding:5,
        marginLeft:2.5,
        minWidth:55,

    },
    userTileButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    addContactButton:{
        backgroundColor:'blue',
        padding:5
    },
    addContactButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    saveButton:{
        backgroundColor:'blue',
        padding:5,
        marginTop:5
    },
    saveButtonText:{
        color:'#fff',
        textAlign:'center'
    },
    cancelButton:{
        backgroundColor:'red',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        color:'#fff',
        textAlign:'center'
    },  
    textInput:{
        fontFamily:'Trebuchet',
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        margin:2.5,
        padding:2.5
    }
}); 

export default theme; 