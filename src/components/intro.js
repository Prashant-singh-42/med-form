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
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
      fontWeight: "regular",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf",
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





  table: {
    width: '97%',

    border: '2px solid blue',
    

    marginBottom: '5px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid blue',
    // paddingTop: 8,
    // paddingBottom: 8,
    padding: "8px 10px",
    color: "blue",
  },
  header: {
    borderTop: 'none',
    backgroundColor: "blue",
    color: "white",
    width: "100%",
  },
  bold: {
    fontWeight: 700,
  },
  // So Declarative and unDRY 👌
  row1: {
    width: '25%',
  },
  row2: {
    width: '12.5%',
  },
  row3: {
    width: '75%',
    textAlign: 'center',
  },
  row4: {
    width: '20%',
  },
  row5: {
    width: '27%',
  },

  c1Main: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",


    marginTop: "20px",
  },

  c1sub: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  c1tit: {
    width: "35%",

    padding: "2px 8px",
    color: "#ff0033",
    fontWeight: 500,

    fontSize: "13px",

  },

  c1val: {

    width: "65%",

    padding: "2px 8px",

    fontWeight: 500,
    fontSize: "11px",

  },

  intro: {
    marginBottom: "20px",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }


});

function Intro( {person} ) {
  return (
    <View  style={styles.intro} >
          <View style={styles.c1Main} >
            <View style={styles.c1sub} >
              <Text style={styles.c1tit} >Name</Text>
              <Text style={styles.c1val} > {person.name} </Text>
            </View>
            <View style={styles.c1sub} >
              <Text style={styles.c1tit} >Age & Sex</Text>
              <Text style={styles.c1val} > {person.age} </Text>
            </View>
            <View style={styles.c1sub} >
              <Text style={styles.c1tit} >Examination Required </Text>
              <Text style={styles.c1val} > {person.examination} </Text>
            </View>
            <View style={styles.c1sub} >
              <Text style={styles.c1tit} >Reffered By</Text>
              <Text style={styles.c1val} > {person.reffered} </Text>
            </View>
            <View style={styles.c1sub} >
              <Text style={styles.c1tit} >Date</Text>
              <Text style={styles.c1val} > {person.date} </Text>
            </View>
        </View>
          <View style={styles.heading}>
            <View style={styles.boaderRed}>
              <Text>REPORT</Text>
            </View>
            <View style={styles.boaderRed}>
              <Text>BIO CHEMISTRY</Text>
            </View>
        </View>
    </View>
  )
}

export default Intro