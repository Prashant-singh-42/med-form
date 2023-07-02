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

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
      },
      
      hmain: {
        color: "red",

        fontSize: "35px",
        fontWeight: 900,

        textAlign: "center",
        marginTop: "15px",
        letterSpacing: 0,
      },

      hmains: {
        color: "red",

        fontSize: "12px",
        fontWeight: 700,
        textAlign: "center",
      },

      hsub: {
        color: "blue",

        fontSize: "12px",
        fontWeight: 700,
        textAlign: "center",
      },

      space: {
        marginTop: "10px",
      }


});

function Header() {
  return (
    <View style={styles.section}>
        <Text style={styles.hmain}>KAMINI PATHOLOGY CENTRE</Text>
        <Text style={styles.hmains}>Run By ASHA DEEP WELFARE SOCIETY UNDER ACT 21, 1860, Reg No. 440/06/07</Text>
        <Text style={styles.hmains}>"VIMTA" Authorized Collection Centre C.C No. 108</Text>

        <Text style={[styles.hsub, styles.space]}>Dinesh Cinema Road, Obra-Sonebhadra (U.P)</Text>
        <Text style={styles.hsub}>Branch Office in front of Gurudwara, Chopan Road, Obra-Sonebhadra (U.P)</Text>
        <Text style={styles.hsub}>Mobile: 9450161337, 8730000060</Text>
    </View>
  )
}

export default Header

