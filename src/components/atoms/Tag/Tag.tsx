import React from 'react';
import styles from './styles.module.scss';
interface TagProps {
  tagKey: string;
  value: string;
  activeTag: string;
  onClick: ({ key, value }: { key: string; value: string }) => void;
}

const Tag: React.FC<TagProps> = ({ tagKey, value, activeTag, onClick }) => {
  return (
    <button
      className={`${styles.tag} ${activeTag === tagKey && styles.active}`}
      onClick={() => onClick({ key: tagKey, value: value })}>
      {value}
    </button>
  );
};

export default Tag;