import styles from "@/styles/Home.module.css";
import Layout from "@/layout/default";
import { useState } from "react";
import Card from "@/components/card";

export default function tammer() {
  // watch text
  const [text, setText] = useState("");
  return (
    <>
      <main className={styles.main}>
        <Layout type="atsss">
          <div>Tammer Awaitting</div>
          <div>
            Text :&nbsp;
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.currentTarget.value);
                console.log("currentTarget :", e.currentTarget.value);
              }}
            />
          </div>
          <div>
            <Card title="checkmate" />
          </div>
        </Layout>
      </main>
    </>
  );
}
