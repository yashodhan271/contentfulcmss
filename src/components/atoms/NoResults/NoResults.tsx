import React from 'react';
import styles from './styles.module.scss';

interface NoResultsProps {
  message: string;
}

const NoResults: React.FC<NoResultsProps> = ({ message }) => {
  return (
    <p className={styles.noResults}>{message}</p>
  );
};

export default NoResults;