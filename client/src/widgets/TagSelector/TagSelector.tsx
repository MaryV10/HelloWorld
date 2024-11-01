import React from "react";
import { ConfigProvider, Select } from "antd";
import { TagList } from "@/entities/tag";
import styles from "./TagSelector.module.css";

type TagSelectorProps = {
  tags: TagList;
  onTagSelect: (selectedTags: string[]) => void;
};

const TagSelector: React.FC<TagSelectorProps> = ({ tags, onTagSelect }) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 20,
        colorBorder: "transparent",
        colorText: "black",
        colorTextPlaceholder: "#757575",
      },
    }}
  >
    <Select
      className={styles.select}
      mode="multiple"
      style={{
        fontFamily: "Unbounded",
        fontWeight: "normal",
        borderRadius: "20px",
        color: "black",
        border: "none",
      }}
      placeholder="Выберите теги"
      onChange={onTagSelect}
      tagRender={(props) => {
        const { label, value, closable, onClose } = props;
        const tag = tags.find((tag) => tag.id === value);

        return (
          <span
            style={{
              backgroundColor: tag?.color || "#ccc",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "20px",
              display: "inline-flex",
              alignItems: "center",
              margin: "3px",
            }}
          >
            {label}
            {closable && (
              <span
                onClick={onClose}
                style={{
                  marginLeft: "8px",
                  cursor: "pointer",
                  color: "#fff",
                }}
              ></span>
            )}
          </span>
        );
      }}
      options={tags.map((tag) => ({ label: tag.title, value: tag.id }))}
      filterOption={(input, option) =>
        (option?.label as string).toLowerCase().includes(input.toLowerCase())
      }
    />
  </ConfigProvider>
);

export default TagSelector;
