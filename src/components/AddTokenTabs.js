import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CoinToToken from "./CoinToToken/CoinToToken";
import ExchangeToToken from "./ExchangeToToken/ExchangeToToken";
import { Container, Paper } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`add-token-tabpanel-${index}`}
      aria-labelledby={`add-token-tab-${index}`}
      {...other}
    >
      {value === index && <Container p={3}>{children}</Container>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `add-token-tab-${index}`,
    "aria-controls": `add-token-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    width: "clamp(400px, 90vw, 550px)",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  tabPanel: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    paddingBottom: "2rem",
  },
});

export default function AddTokenTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Add token tabs"
        >
          <Tab label="Coin to Token" {...a11yProps(0)} />
          <Tab label="Exchange/VMN to Token" {...a11yProps(1)} />
        </Tabs>

        <div className={classes.tabPanel}>
          <TabPanel value={value} index={0}>
            <CoinToToken />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ExchangeToToken />
          </TabPanel>
        </div>
      </Paper>
    </div>
  );
}
