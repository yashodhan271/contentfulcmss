import React, { useState } from 'react';
import styles from './styles.module.scss';
interface CheckboxProps {
  filterKey: string;
  label: string;
  checked?: boolean;
  onChange?: (e: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ filterKey, label, checked, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" name={filterKey} checked={checked} onChange={onChange} />
        <span>{label}</span>
      </label>
    </div>

  );
};

export default Checkbox;