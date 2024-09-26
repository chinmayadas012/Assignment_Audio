import React from "react";
import styles from "./HowItWorks.module.css";
import { Blockquote } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";

function HowItWorks({ howItWorksRef }) {
  return (
    <section ref={howItWorksRef} id="how-it-works" className={styles.howItWorks}>
      <h2>How to cut audio</h2>
      <div>
        <Blockquote className={styles.infoBox}>
          <p>
            This app can be used to trim and/or cut audio tracks, remove audio fragments. Fade in and fade out your
            music easily to make the audio harmoniously.
          </p>
          <p>It's fast and easy to use. You can save the audio file in any format (codec parameters are configured).</p>
          <p>It works directly in the browser, no need to install any software, and is available for mobile devices.</p>
        </Blockquote>
      </div>
      <div className={styles.privacyBox}>
        <h4>
          <IconLock size={24} style={{ marginRight: "8px" }} />
          Privacy and Security Guaranteed
        </h4>
        <Blockquote className={styles.infoBox}>
          This is a serverless app. Your files do not leave your device.
        </Blockquote>
      </div>
    </section>
  );
}

export default HowItWorks;
