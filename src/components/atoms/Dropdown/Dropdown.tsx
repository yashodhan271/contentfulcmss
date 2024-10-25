'use client';

import React, { useState } from 'react';
import styles from './styles.module.scss';
import ReactDropdown from 'react-dropdown';

interface DropdownProps {
  label?: string;
  onChange?: (e: any) => void;
  options: { value: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, onChange, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      {label && <p className={styles.label}>{label}</p>}
      <ReactDropdown
        className={styles.dropdown}
        onChange={onChange}

        controlClassName={styles.control}
        menuClassName={styles.menu}
        arrowClosed={<span className={`${styles.arrow__close}`} />}
        arrowOpen={<span className={`${styles.arrow__open}`} />}
        options={options}
      />
    </>
  );
};

export default Dropdown;