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
    padding: 48,
    fontFamily: "Gamer !important",
  },
  playerText: {
    color: "gray",
    fontSize: 34,
    padding: 12,
    fontWeight: 900,
    fontFamily: "Gamer !important",
  },
  playerTextSelected: {
    color: "yellow",
    padding: 12,
    fontSize: 34,
    fontWeight: 900,
    fontFamily: "Gamer !important",
  },
  select: {
    width: 300,
    height: 50,
    cursor: 'pointer'
  },
  selected: {
    width: 300,
    height: 50,
    color: 'black',
    cursor: 'pointer',
    backgroundColor: 'gray',
  },
  logo: {
    width: "40%",
    marginLeft: "30%",
  },
  play: {
    width: 300,
    height: 70,
    fontWeight: 900,
    marginTop: `24px !important`
  },
  loading: {
    width: "40vw",
    border: "1px solid white",
    height: 30,
    alignItems: "center",
    padding: 2,
    marginTop: `24px !important`
  },
  playText: { 
    fontSize: 24, 
    fontFamily: "Gamer", 
    color: "yellow"
  },
  loadingText: { 
    fontSize: 18, 
    fontFamily: "Gamer !important", 
    color: "gray",
    marginTop: `24px !important`
  },
});

export default useStyles;
