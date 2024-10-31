import React from "react";
import { ConfigProvider, Select } from "antd";
import { TagList } from "@/entities/tag";
import styles from "./TagSelector.module.css";

type TagSelectorProps = {
  tags: TagList;
  onTagSelect: (selectedTags: string[]) => void;
};

const TagSelectorMobile: React.FC<TagSelectorProps> = ({ tags, onTagSelect }) => (
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
        height: "40px",
      }}
      placeholder="Выберите теги"
      onChange={onTagSelect}
      tagRender={(props) => {
        const { value, closable, onClose } = props;
        const tag = tags.find((tag) => tag.id === value);

        return (
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <span
            style={{
              backgroundColor: tag?.color || "#ccc",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "20px", 
              height: "20px", 
              margin: "3px",
              position: "relative",

            }}
          >
            {closable && (
              <span
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "center", 
                  width: "20px", 
                  height: "20px", 
                }}
              >
                ×
              </span>
            )}
          </span>
          </div>
        );
      }}
      options={tags.map((tag) => ({ label: tag.title, value: tag.id }))}
      filterOption={(input, option) =>
        (option?.label as string).toLowerCase().includes(input.toLowerCase())
      }
    />
    
  </ConfigProvider>
);

export default TagSelectorMobile;
