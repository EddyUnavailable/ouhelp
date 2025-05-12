import styles from "../styles/main.module.css";

export default function ARMRPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.h1}>Establishing Liability for Murder: AR & MR</h1>

      <section>
        <h2 className={styles.h2}>1. Actus Reus (AR) – The Guilty Act</h2>
        <p className={styles.p}>
          The actus reus of murder is the unlawful killing of a human being under the Queen's peace. This must be:
        </p>
        <ul className={styles.ul}>
          <li>Unlawful – not justified by law (e.g. not self-defence).</li>
          <li>A killing – the act must result in the death of a person.</li>
          <li>Under the Queen's peace – the killing must not occur during wartime combat between enemies.</li>
        </ul>
        <p className={styles.p}>
          The act must be voluntary, meaning the defendant must have control over their actions. It may be an act or an omission (failure to act), but in the case of omissions, there must be a legal duty to act.
        </p>
        <p className={styles.p}>
          Causation must be established:
        </p>
        <ul className={styles.ul}>
          <li><strong>Factual causation:</strong> The 'but for' test — but for the defendant's conduct, would the death have occurred?</li>
          <li><strong>Legal causation:</strong> The conduct must be a substantial and operating cause of the death.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.h2}>2. Mens Rea (MR) – The Guilty Mind</h2>
        <p className={styles.p}>
          The mens rea for murder is referred to as "malice aforethought." This includes:
        </p>
        <ul className={styles.ul}>
          <li><strong>Intention to kill</strong></li>
          <li><strong>Intention to cause grievous bodily harm (GBH)</strong></li>
        </ul>
        <p className={styles.p}>
          The intention can be:
        </p>
        <ul className={styles.ul}>
          <li><strong>Direct intention:</strong> Where causing death or GBH was the defendant's aim or purpose.</li>
          <li><strong>Oblique intention:</strong> Where death or serious injury was a virtually certain result of the defendant's actions and the defendant appreciated that fact.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.h2}>3. Concurrence</h2>
        <p className={styles.p}>
          For criminal liability to be established, the actus reus and mens rea must coincide in time — this is called the principle of concurrence (or simultaneity).
        </p>
      </section>

      <footer>
        <p className={styles.p}>© 2025 Law Study App. All rights reserved.</p>
      </footer>
    </div>
  );
}
