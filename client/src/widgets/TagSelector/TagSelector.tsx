import React from 'react';
import { Select } from 'antd';
import { TagList } from '@/entities/tag';
import styles from "./TagSelector.module.css";



type TagSelectorProps = {
  tags: TagList;
  onTagSelect: (selectedTags: string[]) => void;
};

const TagSelector: React.FC<TagSelectorProps> = ({ tags, onTagSelect }) => (
  <Select className={styles.select}
    mode="multiple"
    style={{ width: 215, fontFamily: "Unbounded",
      fontWeight: "normal"}}
    placeholder="Выберите теги"
    onChange={onTagSelect} 
    tagRender={(props) => {
      const { label, value, closable, onClose } = props;
      const tag = tags.find((tag) => tag.id === value);

      return (
        <span
          style={{
            backgroundColor: tag?.color || '#ccc',
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {label}
          {closable && (
            <span
              onClick={onClose}
              style={{
                marginLeft: '8px',
                cursor: 'pointer',
                color: '#fff'
              }}
            >
              ×
            </span>
          )}
        </span>
      );
    }}
    options={tags.map((tag) => ({ label: tag.title, value: tag.id }))}
    filterOption={(input, option) =>
      (option?.label as string).toLowerCase().includes(input.toLowerCase())
    }

  />
);

export default TagSelector;