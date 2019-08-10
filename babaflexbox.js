// code from baba, error ketika input
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.half1}>
        <View style={[styles.half11, styles.half1x]}>
          <Text style={styles.hari}>Mon</Text>
        </View>
        <View style={[styles.half12, styles.half1x]}>
          <Text style={styles.hari}>Tue</Text>
        </View>
        <View style={[styles.half13, styles.half1x]}>
          <Text style={styles.hari}>Wed</Text>
        </View>
        <View style={[styles.half14, styles.half1x]}>
          <Text style={styles.hari}>Thu</Text>
        </View>
        <View style={[styles.half15, styles.half1x]}>
          <Text style={styles.hari}>Fri</Text>
        </View>
        <View style={[styles.half16, styles.half1x]}>
          <Text style={styles.hari}>Sat</Text>
        </View>
        <View style={[styles.half17, styles.half1x]}>
          <Text style={styles.hari}>Sun</Text>
        </View>
      </View>


      <View style={styles.half2}>
        <View style={[styles.half21, styles.half2x]}>
          <View style={[styles.half211, styles.half2x]}>
          </View>
          <View style={[styles.half212, styles.half2x]}>
          </View>
          <View style={[styles.half213, styles.half2x]}>
          </View>
          <View style={[styles.half214, styles.half2x]}>
          </View>
          <View style={[styles.half215, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half22, styles.half2x]}>
          <View style={[styles.half221, styles.half2x]}>
          </View>
          <View style={[styles.half222, styles.half2x]}>
          </View>
          <View style={[styles.half223, styles.half2x]}>
          </View>
          <View style={[styles.half224, styles.half2x]}>
          </View>
          <View style={[styles.half225, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half23, styles.half2x]}>
          <View style={[styles.half231, styles.half2x]}>
          </View>
          <View style={[styles.half232, styles.half2x]}>
          </View>
          <View style={[styles.half233, styles.half2x]}>
          </View>
          <View style={[styles.half234, styles.half2x]}>
          </View>
          <View style={[styles.half235, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half24, styles.half2x]}>
          <View style={[styles.half241, styles.half2x]}>
          </View>
          <View style={[styles.half242, styles.half2x]}>
          </View>
          <View style={[styles.half243, styles.half2x]}>
          </View>
          <View style={[styles.half244, styles.half2x]}>
          </View>
          <View style={[styles.half245, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half25, styles.half2x]}>
          <View style={[styles.half251, styles.half2x]}>
          </View>
          <View style={[styles.half252, styles.half2x]}>
          </View>
          <View style={[styles.half253, styles.half2x]}>
          </View>
          <View style={[styles.half254, styles.half2x]}>
          </View>
          <View style={[styles.half255, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half26, styles.half2x]}>
          <View style={[styles.half261, styles.half2x]}>
          </View>
          <View style={[styles.half262, styles.half2x]}>
          </View>
          <View style={[styles.half263, styles.half2x]}>
          </View>
          <View style={[styles.half264, styles.half2x]}>
          </View>
          <View style={[styles.half265, styles.half2x]}>
          </View>
        </View>
        <View style={[styles.half27, styles.half2x]}>
          <View style={[styles.half271, styles.half2x]}>
          </View>
          <View style={[styles.half272, styles.half2x]}>
          </View>
          <View style={[styles.half273, styles.half2x]}>
          </View>
          <View style={[styles.half274, styles.half2x]}>
          </View>
          <View style={[styles.half275, styles.half2x]}>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  half1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'wheat'
  },
  half1x: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  // half11: {
  // },
  // half12: {
  // },
  // half13: {
  // },
  // half14: {
  // },
  // half15: {
  // },
  // half16: {
  // },
  half17: {
    backgroundColor: 'tan'
  },

  half2: {
    flex: 10,
    flexDirection: "row",
    backgroundColor: 'gainsboro'
  },
  half2x: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1
  },
  // half21: {
  // },
  // half22: {
  // },
  // half23: {
  // },
  // half24: {
  // },
  // half25: {
  // },
  // half26: {
  // },
  half27: {
    backgroundColor: 'wheat'
  },
  hari: {
    color: 'black',
    fontSize: 18
  }
})
