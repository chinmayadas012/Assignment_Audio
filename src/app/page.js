"use client";

import { useState, useRef } from "react";
import { AppShell, Text, Button, Stack, Modal, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./page.module.css";
import AudioEditor from "@/components/AudioEditor/AudioEditor";
import NavBar from "@/components/NavBar/NavBar.js";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks/HowItWorks.js";

export default function HomePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showLanding, setShowLanding] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const howItWorksRef = useRef(null);
  const stickyRef = useRef(null);

  const handleFileUpload = (file) => {
    setShowLanding(false);
    setUploadedFile(file);
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <AppShell navbar={{ width: showNav ? 80 : 0, breakpoint: "sm" }} padding={0} className={styles.appShell}>
      <Stack align="center">
        <Burger
          lineSize={2}
          size="lg"
          opened={showNav}
          onClick={() => setShowNav((prev) => !prev)}
          color="white"
          aria-label="Toggle navigation"
          className={styles.crossButton}
        />
        <NavBar showNav={showNav} />
      </Stack>

      <AppShell.Main>
        <div className={`${styles.stickyHeader}`} ref={stickyRef}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToHowItWorks();
            }}
            className={styles.headerLink}
          >
            HOW IT WORKS
          </a>
          <Link href="/joiner" className={styles.headerLink}>
            JOINER
          </Link>
        </div>

        {showLanding ? (
          <Stack align="center" justify="flex-start" className={styles.landing}>
            <div className={styles.contentWrapper}>
              <p className={styles.h1}>Audio Cutter</p>
              <h3 className={styles.h3}>Free editor to trim and cut any audio file online</h3>
              <Button
                variant="outline"
                size="md"
                radius="xl"
                onClick={() => document.getElementById("fileInput").click()}
                className={styles.browseButton}
              >
                Browse my files
              </Button>
              <input
                id="fileInput"
                type="file"
                className={styles.hiddenInput}
                onChange={(e) => handleFileUpload(e.target.files[0])}
                accept="audio/*"
              />
            </div>

            <HowItWorks howItWorksRef={howItWorksRef} />
          </Stack>
        ) : (
          <AudioEditor onClose={() => setShowLanding(true)} file={uploadedFile} />
        )}
      </AppShell.Main>

      <Modal opened={opened} onClose={close} title="Are you sure you want to finish editing?" centered>
        <Text size="sm">Any associated audio track settings will be deleted along with it.</Text>
        <Button color="red" onClick={close} mt="md">
          Yes, delete
        </Button>
      </Modal>
    </AppShell>
  );
}
