import React from 'react';
import styles from '@/styles/irac.module.css';  // Import the CSS module

const IRAC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>6.5.1 Using the IRAC Method for Problem Questions</h1>
      <p className={styles.p}>The IRAC method provides an easy-to-remember acronym to help students structure a problem question. This method helps you organize your answer with a clear sequence of points to address. Here is what each letter stands for:</p>
      
      <h2 className={styles.h2}>The IRAC Method</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Letter</th>
            <th className={styles.th}>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}><strong className={styles.strong}>I</strong></td>
            <td className={styles.td}><strong className={styles.strong}>Issue:</strong> Identify the key legal issue(s) in the problem, not just a summary of facts. Focus on the relevant legal question.</td>
          </tr>
          <tr>
            <td className={styles.td}><strong className={styles.strong}>R</strong></td>
            <td className={styles.td}><strong className={styles.strong}>Rule:</strong> Outline the relevant legal rules that apply to the issue. This is where you state the law that addresses the problem.</td>
          </tr>
          <tr>
            <td className={styles.td}><strong className={styles.strong}>A</strong></td>
            <td className={styles.td}><strong className={styles.strong}>Application:</strong> Apply the law to the facts of the case. This is the analysis part, where you argue how the law affects the specific facts of the problem.</td>
          </tr>
          <tr>
            <td className={styles.td}><strong className={styles.strong}>C</strong></td>
            <td className={styles.td}><strong className={styles.strong}>Conclusion:</strong> Summarize the outcome of the application of the rule. What is the legal effect of the rule on the case?</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.h2}>Example Problem Question: Sameera&rsquo;s Criminal Liability</h2>
      <p className={styles.p}>Below is an example of a criminal law problem question that can be analyzed using the IRAC method:</p>

      <p className={styles.p}>
        <strong className={styles.strong}>Sameera&rsquo;s Case:</strong><br />
        Sameera was married to Ronnie for over 15 years and they had two daughters together. During breakfast one morning, Sameera stabbed Ronnie 20 times in the chest with a kitchen knife, killing him. Sameera has a history of mental health problems. She says that she cannot remember stabbing Ronnie 20 times with the knife, but accepts that she must have done so. Sameera has been charged with Ronnie’s murder but has raised a defence of diminished responsibility.
      </p>

      <h3 className={styles.h3}>IRAC Analysis of Sameera&rsquo;s Case</h3>

      <h4 className={styles.h4}><strong className={styles.strong}>Issue:</strong></h4>
      <p className={styles.p}>The issue is whether Sameera is criminally liable for murder or whether she can successfully raise a defence of diminished responsibility due to her mental health history. The central legal question is whether the defence of diminished responsibility can reduce Sameera’s charge from murder to manslaughter.</p>

      <h4 className={styles.h4}><strong className={styles.strong}>Rule:</strong></h4>
      <p className={styles.p}>The legal rule governing murder in the UK is that murder occurs when a person intentionally kills another with malice aforethought. However, a defendant may raise a partial defence of diminished responsibility under the Homicide Act 1957, where the defendant has a mental condition that impairs their ability to form intent or control their actions. If the defence is successful, the charge may be reduced from murder to manslaughter.</p>

      <h4 className={styles.h4}><strong className={styles.strong}>Application:</strong></h4>
      <p className={styles.p}>Sameera has a history of mental health problems, which she asserts contributed to her not remembering the act of stabbing Ronnie, though she accepts that she did it. The application of the law in this case involves assessing whether Sameera’s mental health condition impaired her ability to understand the nature of her actions or control them at the time of the stabbing. Medical evidence of her condition and the fact that she doesn&rsquo;t remember the stabbing might suggest diminished responsibility, but this would depend on expert testimony.</p>

      <h4 className={styles.h4}><strong className={styles.strong}>Conclusion:</strong></h4>
      <p className={styles.p}>The conclusion is that Sameera could be convicted of manslaughter instead of murder if the defence of diminished responsibility is successful. The key factor is whether the court accepts that her mental health condition sufficiently impaired her ability to form the intent required for a murder conviction.</p>
    </div>
  );
};

export default IRAC;
