import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
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
                <InfoCircleOutlined />About
            </Button>
            <Modal title="About" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <a href="/">8bits Link Shortner</a> is a simple serverless link shortner made with
                <a href="https://nextjs.org" > NextJS</a>, <a href="https://ant.design" >Ant Design</a>, <a href="https://vercel.com" >Vercel</a> and <a href="https://www.mongodb.com/atlas" >MongoDB Atlas</a>.
            </Modal>
        </>
    );
};

export default About;