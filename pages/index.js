import { makeStyles } from "@material-ui/styles";
import AddTokenTabs from "../components/AddTokenTabs";

const useStyles = makeStyles({
  imgContainer: {
    width: "15rem",
    margin: "5rem auto 3rem",
  },
});

function index() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.imgContainer}>
        <img src="/images/logo.svg" />
      </div>

      <AddTokenTabs />
    </div>
  );
}

export default index;
