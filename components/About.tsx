import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className={styles.aboutBtn}>
        <InfoCircleOutlined />
        About
      </Button>
      <Modal
        title="About"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <a href="https://8bits.vercel.app">8bits Link Shortner</a> is a simple
        serverless link shortner made by (
        <a href="https://twitter.com/uiuxarghya">uiuxarghya</a>) aka{" "}
        <a href="https://uiuxarghya.vercel.app"> Arghya Ghosh</a>, with
        <a href="https://nextjs.org"> NextJS</a>,{" "}
        <a href="https://www.typescriptlang.org"> TypeScript</a>,{" "}
        <a href="https://ant.design">Ant Design</a>,{" "}
        <a href="https://vercel.com">Vercel</a> and{" "}
        <a href="https://www.mongodb.com/atlas">MongoDB Atlas</a>.
      </Modal>
    </>
  );
};

export default About;
