import { makeStyles } from "@material-ui/styles";
import AddTokenTabs from "../components/AddTokenTabs";

const useStyles = makeStyles({
  imgContainer: {
    width: "15rem",
    margin: "5rem auto 3rem",
  },
});

function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.imgContainer}>
        <img src="/images/logo.svg" alt="ethereum logo" />
      </div>

      <AddTokenTabs />
    </div>
  );
}

export default HomePage;
