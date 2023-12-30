// StockDashboard.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const StockDashboard = () => {
  const [stockData, setStockData] = useState(null);
  const apiKey = 'pk_ec89278aba9e41559c833a3b8f26253c';
  const symbols = ['aapl', 'googl', 'amzn', 'msft'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols.join(
          ','
        )}&types=quote&token=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (!stockData) {
    return <Text>Loading...</Text>;
  }

  // Rest of the component code, including charts and table, remains the same

  // For simplicity, I'll keep the charts and table code from the previous example.
  // Replace this section with your actual chart and table components.

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Stock Dashboard</Text>

      {/* Your charts and table components go here */}
      {/* ... */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Additional styles as needed
});

export default StockDashboard;
