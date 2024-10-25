import React, { useState } from 'react';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Accordion from '@/components/molecules/Accordion/Accordion';
import AccordionItem from '@/components/molecules/Accordion/AccordionItem/AccordionItem';
import styles from './styles.module.scss';

interface Props {
  data: any;
  onCheckedTagsChange: (newCheckedTags: { key: string; label: string }[]) => void;
  checkedTags: { key: string; label: string }[];
}

const FilterList: React.FC<Props> = ({ data, onCheckedTagsChange, checkedTags }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, item: { key: string; label: string }) => {
    let newCheckedTags;
    if (e.target.checked) {
      newCheckedTags = [...checkedTags, item];
    } else {
      newCheckedTags = checkedTags.filter(tag => tag.key !== item.key);
    }
    onCheckedTagsChange(newCheckedTags);
  };

  return (
    <div className={styles.filterList}>
      <Accordion>
        {data.filters.map((filter: any, index: number) => (
          <AccordionItem key={index} header={filter.title} headerSize="small" type="filters" hasChevron>
            {filter.list.map((item: any) => (
              <Checkbox
                key={item.key}
                filterKey={item.key}
                label={item.value}
                checked={checkedTags.some(tag => tag.key === item.key)}
                onChange={(e) => handleChange(e, { key: item.key, label: item.value })}
              />
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterList;