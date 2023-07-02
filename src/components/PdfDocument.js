import React from "react";
import {
  Page,
  Text,
  Font,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Intro from "./intro";
import Header from "./header";
import Bar from "./Bar";

{
  /* <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
</style>  */
}

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
// Font.register(`${public_url}/fonts/Roboto-Medium.ttf`, {
//   family: 'Roboto',
//   weight: '400,500',
// });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "1.4px",
    padding: "5px 10px",
    width: "100%",

    fontFamily: "Roboto",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
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
    // backgroundColor: "#ff003361",
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

  fix2: {
    width: "47%",
    padding: "2px 2px",
  },

  table: {
    width: "97%",

    border: "2px solid blue",

    marginBottom: "5px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid blue",
    // paddingTop: 8,
    // paddingBottom: 8,
    padding: "8px 10px",
    color: "blue",
  },
  header: {
    borderTop: "none",
    backgroundColor: "blue",
    color: "white",
    width: "100%",
  },
  bold: {
    fontWeight: 700,
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "25%",
  },
  row2: {
    width: "12.5%",
  },
  row3: {
    width: "75%",
    textAlign: "center",
  },
  row4: {
    width: "20%",
  },
  row5: {
    width: "27%",
  },

  c1Main: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  c1sub: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  c1tit: {
    width: "25%",

    padding: "2px 8px",
    color: "#ff0033",
    fontWeight: 700,

    fontSize: "14px",
  },

  c1val: {
    width: "70%",

    padding: "2px 8px",

    fontWeight: 500,
    fontSize: "11px",
  },
});

function PdfDocument({ person }) {
  return (
    <Document>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Blood Glucose (F)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Glucose_F}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>70-110 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Blood Glucose (PP)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Glucose_PP}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>100-160 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Blood Glucose (Random)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Glucose_Ran}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>100-160 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Blood Urea</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.urea}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>15-46 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Blood Urea Nitrogen (BUN)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ureaNitrogen}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>10-20 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Creatine</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.creatinine}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>0.8-1.4 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Uric Acid</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.uricAcid}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>M-3.4-7 mg/dl F-1.5-6 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Total Lipids</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Lipids}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>400-800 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Total Cholesterol</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Cholesterol}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>130-250 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. HDL Cholesterol</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.HDLCholesterol}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>30-80 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. LDL Cholesterol</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.LDLCholestersol}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>Upto 150 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. VLDL Cholesterol</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.VLDLCholesterol}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>15-40 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Triglycerides</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.triglycerides}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>10-160 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Bilirubin Total</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.BilirubinTotal}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>0.2-0.8 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Bilirubin Direct</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.BilirubinDirect}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>0.0-0.2 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Bilirubin Indirect</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.BilirubinInDirect}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>0.0-0.7 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Alkaline Phosphate</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.AlkalinePhosphate}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>2-11 K.A.Units</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S.G.O.T</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.SGOT}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>8-40 l.Unit/Ml</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S.G.P.T</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.SGPT}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>5-35 l.Unit/Ml</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Total Protein</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.protein}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>6.0-8.0 gm/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Albumin</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.albumin}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>3.5-5.3 gm/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Globulin</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.globulin}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>2.3-3.5 gm/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>A.G Ratio</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.AGratio}</Text>
            </View>
            {/* <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>test</Text>
            </View> */}
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Serum Acid Phosphate (Total) </Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.acidPhosphate}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>
                0.5-4.0 KA unit70-240 M/L Child 150-590 m/l
              </Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Lactate Dehydrogenase (LDH)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.lactate}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>60-210 Su/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Amylase</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.sAmylase}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>2.5-4.8 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Phosphorus</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.sPhosphorus}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>9.0-10.8 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Calcium</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Calcium}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>136-142 meg/lit</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Sodium (Na+)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.SSodium}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>4.0-5.6 meg/lit</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Potassium (K+)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.SPotassium}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>98-106 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>S. Chloride (Cl-)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.sChloride}</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Normal Value</Text>
              <Text style={styles.c1val}>22-30 mg/dl</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Header />
          <Intro person={person} />
          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>Widal Test</Text>
              <Text style={styles.row3}> Result </Text>
            </View>

            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>Bacterial Suspention</Text>
              <Text style={styles.row2}> 1/20 </Text>
              <Text style={styles.row2}> 1/40 </Text>
              <Text style={styles.row2}> 1/80 </Text>
              <Text style={styles.row2}> 1/160 </Text>
              <Text style={styles.row2}> 1/320 </Text>
              <Text style={styles.row2}> 1/640 </Text>
            </View>

            <View style={styles.row} wrap={false}>
              <Text style={styles.row1}>S. Typhi "O"</Text>
              <Text style={styles.row2}> {person.typhiO20} </Text>
              <Text style={styles.row2}> {person.typhiO40} </Text>
              <Text style={styles.row2}> {person.typhiO80} </Text>
              <Text style={styles.row2}> {person.typhiO160} </Text>
              <Text style={styles.row2}> {person.typhiO320} </Text>
              <Text style={styles.row2}> {person.typhiO640} </Text>
            </View>

            <View style={styles.row} wrap={false}>
              <Text style={styles.row1}>S. Typhi "H"</Text>
              <Text style={styles.row2}> {person.typhiH20} </Text>
              <Text style={styles.row2}> {person.typhiH40} </Text>
              <Text style={styles.row2}> {person.typhiH80} </Text>
              <Text style={styles.row2}> {person.typhiH160} </Text>
              <Text style={styles.row2}> {person.typhiH320} </Text>
              <Text style={styles.row2}> {person.typhiH640} </Text>
            </View>

            <View style={styles.row} wrap={false}>
              <Text style={styles.row1}>S. Para Typhi "AH"</Text>
              <Text style={styles.row2}> {person.paraTyphiAH20} </Text>
              <Text style={styles.row2}> {person.paraTyphiAH40} </Text>
              <Text style={styles.row2}> {person.paraTyphiAH80} </Text>
              <Text style={styles.row2}> {person.paraTyphiAH160} </Text>
              <Text style={styles.row2}> {person.paraTyphiAH320} </Text>
              <Text style={styles.row2}> {person.paraTyphiAH640} </Text>
            </View>

            <View style={styles.row} wrap={false}>
              <Text style={styles.row1}>S. Para Typhi "BH"</Text>
              <Text style={styles.row2}> {person.paraTyphiBH20} </Text>
              <Text style={styles.row2}> {person.paraTyphiBH40} </Text>
              <Text style={styles.row2}> {person.paraTyphiBH80} </Text>
              <Text style={styles.row2}> {person.paraTyphiBH160} </Text>
              <Text style={styles.row2}> {person.paraTyphiBH320} </Text>
              <Text style={styles.row2}> {person.paraTyphiBH640} </Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Bicarbonate (HCO3-)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Bicarbonate}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Rheumatoid Factor (R.F)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.RheumatoidFactor}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>C. Reactive Protein</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ReactiveProtein}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>VDRL</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.VDRL}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>
                PPD Test (Montoux Test) After 72 Hrs
              </Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.PPD}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>HCV Antibodies Test</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.HCVAnti}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>
                HBsAG (Australia Antigen) Card Test
              </Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.HBsAGCard}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>HIV 1 & 2</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.HIV}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>
                Antistrepto Lysin "O" titre (ASO)
              </Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ASO}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Coombs Test (Direct/Indirect)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.OmbsTest}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Prothrombin Time</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.prothrombine}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Rh Antibody Time</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Antiody}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Aldehyde Test (Kala-Azar)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.AldehydeTest}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>ABO</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ABO}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>RH</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Rh}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Rapid Typhi dot Test (lgF, IGM)</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.RaphidTyphi}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>
                Rapid TB Test (One Step Tuberculosis Test - lgF, lgM)
              </Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.RapidTBTest}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>ZN Stain for AFB</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ZMStain}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>ZN Stain for Lepra Bacilli</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ZHStain}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>Gravindex Test</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.GravindexTest}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>By Strip</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.ByStrip}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.c1Main}>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Test Name</Text>
              <Text style={styles.c1val}>By Card</Text>
            </View>
            <View style={styles.c1sub}>
              <Text style={styles.c1tit}>Result</Text>
              <Text style={styles.c1val}>{person.Bycard}</Text>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <Bar />
          <View style={styles.groupMain}>
            <View style={styles.groupSub}>
              <View style={styles.entities}>
                <Text style={styles.test}>Blood Glucose (F)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.Glucose_F } </Text>
                <Text style={[styles.test, styles.fix]}> 70-110 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Blood Glucose (P.P 2hr) </Text>
                <Text style={[styles.test, styles.fix2]}> {person.Glucose_PP } </Text>
                <Text style={[styles.test, styles.fix]}> 100-160 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Blood Glucose (Random) </Text>
                <Text style={[styles.test, styles.fix2]}> {person.Glucose_Ran } </Text>
                <Text style={[styles.test, styles.fix]}> 100-160 mg/dl </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <Bar />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText}> Renal Profile </Text>
            </View>
            <View style={styles.groupSub}>
              <View style={styles.entities}>
                <Text style={styles.test}>Blood Urea</Text>
                <Text style={[styles.test, styles.fix2]}> {person.urea } </Text>
                <Text style={[styles.test, styles.fix]}> 15-46 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Blood Urea Nitrogen (BUN)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.ureaNitrogen } </Text>
                <Text style={[styles.test, styles.fix]}> 10-20 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Creatine</Text>
                <Text style={[styles.test, styles.fix2]}> {person.creatinine } </Text>
                <Text style={[styles.test, styles.fix]}> 0.8-1.4 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Uric Acid</Text>
                <Text style={[styles.test, styles.fix2]}> {person.uricAcid } </Text>
                <Text style={[styles.test, styles.fix]}> M-3.4-7 mg/dl F-1.5-6 mg/dl</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <Bar />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText}> Lipid Profile </Text>
            </View>
            <View style={styles.groupSub}>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Total Lipids</Text>
                <Text style={[styles.test, styles.fix2]}> {person.Lipids } </Text>
                <Text style={[styles.test, styles.fix]}> 400-800 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Total Cholesterol</Text>
                <Text style={[styles.test, styles.fix2]}> {person.Cholesterol } </Text>
                <Text style={[styles.test, styles.fix]}> 130-250 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. HDL Cholesterol</Text>
                <Text style={[styles.test, styles.fix2]}> {person.LDLCholestersol } </Text>
                <Text style={[styles.test, styles.fix]}> 30-80 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. LDL Cholesterol</Text>
                <Text style={[styles.test, styles.fix2]}> {person.LDLCholestersol } </Text>
                <Text style={[styles.test, styles.fix]}> Upto 150 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. VLDL Cholesterol</Text>
                <Text style={[styles.test, styles.fix2]}> {person.VLDLCholesterol } </Text>
                <Text style={[styles.test, styles.fix]}> 15-40 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Triglycerides</Text>
                <Text style={[styles.test, styles.fix2]}> {person.triglycerides } </Text>
                <Text style={[styles.test, styles.fix]}> 10-160 mg/dl </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <Bar />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText}> Liver Profile </Text>
            </View>
            <View style={styles.groupSub}>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Bilirubin-Total</Text>
                <Text style={[styles.test, styles.fix2]}> {person.BilirubinTotal } </Text>
                <Text style={[styles.test, styles.fix]}> 0.2-0.8 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Bilirubin-Direct</Text>
                <Text style={[styles.test, styles.fix2]}> {person.BilirubinDirect } </Text>
                <Text style={[styles.test, styles.fix]}> 0.0-0.2 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Bilirubin-Indirect</Text>
                <Text style={[styles.test, styles.fix2]}> {person.BilirubinInDirect } </Text>
                <Text style={[styles.test, styles.fix]}> 0.0-0.7 mg/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Alkaline-Phosphates</Text>
                <Text style={[styles.test, styles.fix2]}> {person.AlkalinePhosphate } </Text>
                <Text style={[styles.test, styles.fix]}> 2-11 K.A.Units </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S.G.O.T</Text>
                <Text style={[styles.test, styles.fix2]}> {person.SGOT } </Text>
                <Text style={[styles.test, styles.fix]}> 8-40 l.Unit/Ml </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S.G.P.T</Text>
                <Text style={[styles.test, styles.fix2]}> {person.SGPT } </Text>
                <Text style={[styles.test, styles.fix]}> 5-35 l.Unit/Ml </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Total Protein</Text>
                <Text style={[styles.test, styles.fix2]}> {person.protein } </Text>
                <Text style={[styles.test, styles.fix]}>6.0-8.0 gm/dl</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Albumin</Text>
                <Text style={[styles.test, styles.fix2]}> {person.albumin } </Text>
                <Text style={[styles.test, styles.fix]}> 3.5-5.3 gm/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Serum Globulin</Text>
                <Text style={[styles.test, styles.fix2]}> {person.globulin } </Text>
                <Text style={[styles.test, styles.fix]}> 2.3-3.5 gm/dl </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>A.G Ratio</Text>
                <Text style={[styles.test, styles.fix2]}> {person.AGratio } </Text>
                <Text style={[styles.test, styles.fix]}>test</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Acid Phosphates (Total)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.acidPhosphate } </Text>
                <Text style={[styles.test, styles.fix]}>0.5-4.0 KA unit</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Lactate Dehydrogenase (LDH)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.lactate } </Text>
                <Text style={[styles.test, styles.fix]}> 70-240 M/L Child 150-590 m/l</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Amylase</Text>
                <Text style={[styles.test, styles.fix2]}> {person.sAmylase } </Text>
                <Text style={[styles.test, styles.fix]}>60-210 Su/dl</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Phosphorus</Text>
                <Text style={[styles.test, styles.fix2]}> {person.sPhosphorus } </Text>
                <Text style={[styles.test, styles.fix]}>2.5-4.8 mg/dl</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Calcium</Text>
                <Text style={[styles.test, styles.fix2]}> {person.Calcium } </Text>
                <Text style={[styles.test, styles.fix]}> 9.0-10.8 mg/dl </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <Bar />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText}> Electrolytes </Text>
            </View>
            <View style={styles.groupSub}>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Sodium (Na+)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.SSodium } </Text>
                <Text style={[styles.test, styles.fix]}>136-142 meg/lit</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Potassium (K+)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.SPotassium } </Text>
                <Text style={[styles.test, styles.fix]}>4.0-5.6 meg/lit</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>S. Chloride (Cl-)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.sChloride } </Text>
                <Text style={[styles.test, styles.fix]}>98-106 mg/dl</Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test}>Bicarbonate (HCO3-)</Text>
                <Text style={[styles.test, styles.fix2]}> {person.Bicarbonate } </Text>
                <Text style={[styles.test, styles.fix]}>22-30 mg/dl</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={[styles.groupMain, {marginTop: "-80px"}]}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText2}> SEROLOGY </Text>
            </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Rheumatoid Factor (R.F)</Text>
                <Text style={styles.test2}> {person.RheumatoidFactor} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>C. Reactive Protein</Text>
                <Text style={styles.test2}> {person.ReactiveProtein} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>VDRL</Text>
                <Text style={styles.test2}> {person.VDRL} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>PPD Test (Montoux Test) After 72 Hrs</Text>
                <Text style={styles.test2}> {person.PPD} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>HCV Antibodies Test</Text>
                <Text style={styles.test2}> {person.HCVAnti} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>HBsAG (Australia Antigen) Card Test</Text>
                <Text style={styles.test2}> {person.HBsAGCard} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>HIV 1 & 2</Text>
                <Text style={styles.test2}> {person.HIV} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Antistrepto Lysin "O" titre (ASO)</Text>
                <Text style={styles.test2}> {person.ASO} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Coombs Test (Direct/Indirect)</Text>
                <Text style={styles.test2}> {person.OmbsTest} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Prothrombine Time</Text>
                <Text style={styles.test2}> {person.prothrombine} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Rh Antibody Time</Text>
                <Text style={styles.test2}> {person.Antiody} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Aldehyde Test (Kala-Azar)</Text>
                <Text style={styles.test2}> {person.AldehydeTest} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>ABO</Text>
                <Text style={styles.test2}> {person.ABO} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>RH</Text>
                <Text style={styles.test2}> {person.Rh} </Text>
              </View>

              <View style={styles.table} break>

                <View style={[styles.row, styles.bold, styles.header]}>
                  <Text style={styles.row1}>Widal Test</Text>
                  <Text style={styles.row3}> Result </Text>
                </View>

                <View style={[styles.row, styles.bold, styles.header]}>
                  <Text style={styles.row1}>Bacterial Suspention</Text>
                  <Text style={styles.row2}> 1/20 </Text>
                  <Text style={styles.row2}> 1/40 </Text>
                  <Text style={styles.row2}> 1/80 </Text>
                  <Text style={styles.row2}> 1/160 </Text>
                  <Text style={styles.row2}> 1/320 </Text>
                  <Text style={styles.row2}> 1/640 </Text>
                </View>

                <View style={styles.row} wrap={false}>
                  <Text style={styles.row1}>S. Typhi "O"</Text>
                  <Text style={styles.row2}> { person.typhiO20 } </Text>
                  <Text style={styles.row2}> { person.typhiO40 } </Text>
                  <Text style={styles.row2}> { person.typhiO80 } </Text>
                  <Text style={styles.row2}> { person.typhiO160 } </Text>
                  <Text style={styles.row2}> { person.typhiO320 } </Text>
                  <Text style={styles.row2}> { person.typhiO640 } </Text>
                </View>

                <View style={styles.row} wrap={false}>
                  <Text style={styles.row1}>S. Typhi "H"</Text>
                  <Text style={styles.row2}> { person.typhiH20 } </Text>
                  <Text style={styles.row2}> { person.typhiH40 } </Text>
                  <Text style={styles.row2}> { person.typhiH80 } </Text>
                  <Text style={styles.row2}> { person.typhiH160 } </Text>
                  <Text style={styles.row2}> { person.typhiH320 } </Text>
                  <Text style={styles.row2}> { person.typhiH640 } </Text>
                </View>

                <View style={styles.row} wrap={false}>
                  <Text style={styles.row1}>S. Para Typhi "AH"</Text>
                  <Text style={styles.row2}> { person.paraTyphiAH20 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiAH40 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiAH80 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiAH160 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiAH320 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiAH640 } </Text>
                </View>

                <View style={styles.row} wrap={false}>
                  <Text style={styles.row1}>S. Para Typhi "BH"</Text>
                  <Text style={styles.row2}> { person.paraTyphiBH20 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiBH40 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiBH80 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiBH160 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiBH320 } </Text>
                  <Text style={styles.row2}> { person.paraTyphiBH640 } </Text>
                </View>

              </View>

              <View style={styles.entities}>
                <Text style={styles.test2}>Rapid Typhi dot Test (lgF, IGM)</Text>
                <Text style={styles.test2}> {person.RaphidTyphi} </Text>
              </View>

          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText2}> TUBERCLOSIS </Text>
            </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Rapid TB Test (One Step Tuberculosis Test - lgF, lgM)</Text>
                <Text style={styles.test2}> {person.RapidTBTest} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>ZN Stain for AFB</Text>
                <Text style={styles.test2}> {person.ZMStain} </Text>              
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>ZN Stain for Lepra Bacilli</Text>
                <Text style={styles.test2}> {person.ZHStain} </Text>                
              </View>
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Header />
          <Intro person={person} />
          <View style={styles.groupMain}>
            <View style={styles.groupHeading}>
              <Text style={styles.groupHeadingText2}> PREGNANCY TEST </Text>
            </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>Gravindex Test</Text>
                <Text style={styles.test2}> {person.GravindexTest} </Text>
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>By strip</Text>
                <Text style={styles.test2}> {person.ByStrip} </Text>                
              </View>
              <View style={styles.entities}>
                <Text style={styles.test2}>By Card</Text>
                <Text style={styles.test2}> {person.Bycard} </Text>                
              </View>
          </View>
        </View>
      </Page>


    </Document>
  );
}

export default PdfDocument;
