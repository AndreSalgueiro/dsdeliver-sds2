import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrdersCard';

function Orders() {

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrdersCard/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: '5%',
    paddingLeft: '5%'  }
});

export default Orders;