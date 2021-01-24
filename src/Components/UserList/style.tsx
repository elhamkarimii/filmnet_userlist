import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    container:{
  width:'100%',
  display:'flex',
  justifyContent:'center',
  border:'none'
    },
    table: {
      minWidth: 650,
      maxWidth:'90%',
      border:'1px solid #C5C5C5 ',
      borderRadius:'7px'
    },
    tableHead:{
      backgroundColor:'#C5C5C5'
    }
  });