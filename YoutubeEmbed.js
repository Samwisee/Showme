import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeEmbed() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={225}
        width={400}
        videoId={"4dBgFUwZl_c"}
        // onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}