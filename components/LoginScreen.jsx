import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from './../constants/Colors';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as SecureStore from 'expo-secure-store';

WebBrowser.maybeCompleteAuthSession();

const clearSecureStoreData = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log(`SecureStore data cleared for key: ${key}`);
  } catch (error) {
    console.error(`Failed to clear SecureStore data for key ${key}:`, error);
  }
};

export default function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Handle MFA or other steps if necessary
      }
    } catch (err) {
      console.error("OAuth error", err);
      setError("OAuth error: " + err.message);
      await clearSecureStoreData('__clerk_client_jwt');
    } finally {
      setLoading(false);
    }
  }, [startOAuthFlow]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('./../assets/images/login.jpg')} style={styles.image} />
        <View>
          <TouchableOpacity style={styles.btn} onPress={onPress} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.btnText}>Get Started With NAVERMEG</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Application made by Vermeg for Vermeg</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SCND,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  image: {
    width: 380,
    height: 290,
    borderRadius: 20,
    borderWidth: 10,
    borderColor: '#000',
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 99,
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'outfit',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  footer: {
    marginTop: 30,
  },
  footerText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
  },
});
