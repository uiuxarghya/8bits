import { Button, Layout, Result, Typography } from 'antd';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const { Header, Content, Footer } = Layout;

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>404 | Page Not Found | 8bits Link Shortener</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
                <a href="/"><div className={styles.logo} />
                    <h1 className={styles.name}>Link Shortener</h1></a>
            </Header>
            <Content className={styles.error}>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary"><a href="/">Back Home</a></Button>} />
            </Content>
            <Footer className={styles.footer}>
                <a className={styles.link} href="https://uiuxarghya.netlify.app" target="_blank">uiuxarghya</a> | 8bits Link Shortener &copy; 2021
            </Footer>
        </Layout>
    );
}
