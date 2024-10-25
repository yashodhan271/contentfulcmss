import { Document } from '@contentful/rich-text-types';
import React from 'react';
import styles from './styles.module.scss';
import BulletPointsTextItem from '@/components/molecules/BulletPointsTextItem/BulletPointsTextItem';
import RichText from '@/components/atoms/RichText/RichText';

interface FormProps {
  iframeUrl: string;
  iframeHeight: string;
  textArea: Document;
}

const Form: React.FC<FormProps> = ({ iframeUrl, iframeHeight, textArea }) => {
  return (
    <div className={styles.form}>
      <iframe
        className={styles.iframe}
        src={iframeUrl}
        width="100%"
        height={`${iframeHeight}px`}
      />
      <div className={styles.textArea}>
        <BulletPointsTextItem text={textArea} />
      </div>
    </div>
  );
};

export default Form;