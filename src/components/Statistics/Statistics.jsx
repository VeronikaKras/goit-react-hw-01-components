import css from './Statistics.module.css';
import React from 'react';



export const Statistics = ({ title, stats }) => {
    return (
      <section className={ css.statistics}>
<h2 className={ css.title}>Upload stats</h2>

            <ul className={css.stat}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}</span>
                    </li>
                ))}
                

</ul>
</section>
    );
 }

// export const Statistics = ({ title, id,label,percentage } ) => {
//     return (
//       <section className={ css.statistics}>
//   <h2 className={ css.title}>Upload stats</h2>

//   <ul className={ css.stat-list}>
//     <li className={ css.item}>
//       <span className={ css.label}>.docx</span>
//       <span className={ css.percentage}>4%</span>
//     </li>
//     <li className={ css.item}>
//       <span className={ css.label}>.mp3</span>
//       <span className={ css.percentage}>14%</span>
//     </li>
//     <li className={ css.item}>
//       <span className={ css.label}>.pdf</span>
//       <span className={ css.percentage}>41%</span>
//     </li>
//     <li className={ css.item}>
//       <span className={ css.label}>.mp4</span>
//       <span className={ css.percentage}>12%</span>
//     </li>
//   </ul>
// </section>
//     );
//  }
