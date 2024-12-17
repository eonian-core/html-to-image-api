import React from 'react';
import styles from './DefaultTemplate.module.scss';

interface Winner {
    name: string;
    percentage: string;
    handle: string;
    logoUrl?: string;
}

interface DefaultTemplateProps {
    parameters: {
        mainWinner: Winner;
        category: string;
        topWinners: Winner[];
        tags?: string[]; // Make tags optional
    };
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ parameters }) => {
    const { mainWinner, category, topWinners, tags = [] } = parameters; // Default to an empty array

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img
                    src={mainWinner.logoUrl || '/default-logo.png'}
                    alt={mainWinner.name}
                    className={styles.logo}
                />
                <div>
                    <h2 className={styles.title}>Top Crypto of the Day</h2>
                    <p className={styles.handle}>@TopCryptoToday</p>
                </div>
            </div>
            <div className={styles.mainWinner}>
                <p className={styles.mainWinnerText}>
                    <span role="img" aria-label="chart">📈</span>
                    <strong>${mainWinner.name}</strong> up on {mainWinner.percentage} today / by <a href={`https://twitter.com/${mainWinner.handle}`} className={styles.link}>@{mainWinner.handle}</a>
                </p>
            </div>
            <div className={styles.topWinners}>
                <p>Other top gainers among <strong>#{category}</strong> coins:</p>
                <ul>
                    {topWinners.map((winner, index) => (
                        <li key={index} className={styles.winnerItem}>
                            <strong>${winner.name}</strong> ▲{winner.percentage} / <a href={`https://twitter.com/${winner.handle}`} className={styles.link}>@{winner.handle}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>#{tag}</span>
                ))}
            </div>
            <p className={styles.footer}>Follow, to not miss the next #TopCryptoOfTheDay</p>
        </div>
    );
};

export default DefaultTemplate;