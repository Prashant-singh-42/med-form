import React from "react";
import {
  Page,
  Text,
  Font,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
      fontWeight: "regular",
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
      fontWeight: 500,
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      fontWeight: 700,
    },
    {
      src: "http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf",
      fontWeight: 900,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "1.4px",
    padding: 10,
    width: "100%",

    fontFamily: "Roboto",
  },
  section: {
    flexDirection: "column",
    width: "100%",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    marginTop: "4px",
  },
  headingSub: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  boaderRed: {
    border: "2px solid #ff0033",
    backgroundColor: "#ff003361",
    fontWeight: 900,
    color: "#ff0033",

    padding: "3px",
    marginBottom: "2px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  posReset: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  groupMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "10px",
  },
  groupSub: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
  },
  groupHeading: {
    width: "100%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    paddingLeft: "5px",
  },
  groupHeadingText: {
    color: "blue",
    fontSize: "16px",
    
    fontWeight: 900,
  },
  groupHeadingText2: {
    color: "blue",
    fontSize: "16px",
    
    fontWeight: 500,

    paddingLeft: "5px",
    paddingTop: "5px",

    border: "1px solid blue",
  },
  entities: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",

    padding: "2px 8px",
    width: "100%",
  },

  test: {
    width: "33%",
    backgroundColor: "#ff003361",
    padding: "2px 8px",
  },

  test2: {
    maxWidth: "50%",
    // backgroundColor: "#ff003361",
    padding: "2px 4px",
  },

  fix: {
    width: "17%",
    textAlign: "center",
    padding: "2px 2px",
  },

  barelem: {
    width: "33%",
    textAlign: "center",
    padding: "2px 2px",
  },

  barelemFix1: {
    width: "18%"
  }



});

function Bar() {
  return (
    <View style={ [styles.boaderRed, { marginTop: "-15px", marginBottom: "15px" }] } >
        <Text style={ styles.barelem } >TEST</Text>
        <Text style={ styles.barelem } >RESULT</Text>
        <Text style={ [styles.barelem, styles.barelemFix1] } >NORMAL VALUE</Text>
    </View>
  )
}

export default Bar