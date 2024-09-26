import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button } from "@mantine/core";
import styles from "./Waveform.module.css";

function Waveform({ audioFile, onClose }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    // Initialize WaveSurfer
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#A8DBA8",
      progressColor: "#3B8686",
      cursorColor: "#3B8686",
      barWidth: 2,
      barRadius: 3,
      responsive: true,
      height: 128,
    });

    if (audioFile) {
      const objectUrl = URL.createObjectURL(audioFile);
      wavesurfer.current.load(objectUrl);

      // Cleanup function
      return async () => {
        // Check if WaveSurfer instance exists
        if (wavesurfer.current) {
          try {
            await wavesurfer.current.destroy();
          } catch (e) {
            // Ignore AbortError caused by aborting the loading process
          }
        }
        // Revoke the object URL to free up memory
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      };
    }
  }, [audioFile]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
  };

  return (
    <div>
      <div>
        <div id="waveform" ref={waveformRef} />
      </div>
      <div className={styles.waveformContainer}>
        <Button onClick={handlePlayPause}>
          {wavesurfer.current && wavesurfer.current.isPlaying() ? "Pause" : "Play"}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default Waveform;
