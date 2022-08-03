import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "black",
    border: 0,
    color: "white",
    minHeight: "100vh",
    padding: 20,
  },
  title: {
    color: "red",
    fontSize: 34,
    fontWeight: 900,
    fontFamily: "Gamer",
  },
  play: {
    width: 300,
    height: 100,
    fontWeight: 900,
  },
  logo: {
    width: "50%",
    marginLeft: "25%",
  },
  loading: {
    width: "40vw",
    border: "1px solid white",
    height: 30,
    alignItems: "center",
    padding: 2,
  },
  playText: { 
    fontSize: 55, 
    fontFamily: "Gamer", 
    color: "yellow"
  },
  loadingText: { 
    fontSize: 18, 
    fontFamily: "Gamer !important", 
    color: "gray"
  },
});

export default useStyles;
