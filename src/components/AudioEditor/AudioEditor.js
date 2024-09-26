import React from "react";
import Waveform from "@/components/Waveform/Waveform";
import { Button } from "@mantine/core";

function AudioEditor({ onClose, file }) {
  return (
    <div>
      <Waveform audioFile={file} onClose={onClose} />
    </div>
  );
}

export default AudioEditor;
