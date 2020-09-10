import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NodePlayerView } from 'react-native-nodemediaclient';

const App: () => React$Node = () => {
  let videoPlay;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>Player View</Text>
          <NodePlayerView 
            style={{ height: 400, width: 300 }}
            ref={(viewRef) => { videoPlay = viewRef }}
            inputUrl={"https://1fc659412734.us-east-1.playback.live-video.net/api/video/v1/us-east-1.289791315264.channel.THY7TZ55gz2B.m3u8"}
            scaleMode={"ScaleAspectFit"}
            bufferTime={300}
            maxBufferTime={1000}
            autoplay={true}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
