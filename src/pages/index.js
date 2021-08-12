import { makeStyles } from "@material-ui/styles";
import AddTokenTabs from "../components/AddTokenTabs";
import Image from "next/image";
import logo from "../../public/images/logo.svg";

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
        <Image src={logo} alt="ethereum logo" />
      </div>

      <AddTokenTabs />
    </div>
  );
}

export default HomePage;
