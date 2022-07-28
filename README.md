# **8bits Link Shortner** &nbsp; ![GitHub release (latest by date)](https://img.shields.io/github/v/release/uiuxarghya/8bits) [![Website](https://img.shields.io/website?url=https%3A%2F%2F8bits.vercel.app&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAZCAYAAADqrKTxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgB7ZRNDoIwEIXflHoPiInXEE+iJsbEW+gpiLgQT0K8Bv7APaCtpQV34wKjK96ieWnfl0wyMyX0KtIVAjqDkzJrzLZZawUGiHBLYm9FDBJzNqnNBaSq1koImXd8hulmwUL3YwaSy8HljdA3kO1TEzlXBzEeackmFQ6YNHsPRbvKXRapPShkIRj0WYky8cHaPVT4pC4roaUvKXBjFLFAO0Zaui0Ym/t3yPYJfsWNDvE85WxS6asdCpel9+Wvv7AXkbg7KN08dlIAAAAASUVORK5CYII=)](https://8bits.vercel.app)

<div align="center">
<img src=".github/images/banner.svg" align="center">
</div>

<br/>

> A simple serverless url shortenener.
> Built with ❤︎ by <a href="https://uiuxarghya.vercel.app">Arghya Ghosh</a>.

## **📄 About**

[8bits Link Shortener](https://8bits.vercel.app) is a simple serverless url shortener with MongoDB and Vercel. It helps you shorten long links for easy sharing.

## **🎯 Features**

- ⚡️ **Fast:** Paste long url and get/copy short url in less than a second.
- ❤️ **Lightweight & Simple:** Crafted with minimalistic UI design.
- 🔒 **Secure by Design:** Since it's serverless, it's secure.

## **📖 Documentation**

To know in-depth about 8bits Link Shortener, please visit the [documentation](https://github.com/uiuxarghya/8bits/wiki).

## **⚙️ Buitlt With**

- [Next.js](https://nextjs.org) - The React Framework
  for Production.
- [Ant Design](https://ant.design) - A design language for React.
- [MongoDB](https://www.mongodb.com/) - A document-oriented database.
- [Vercel](https://vercel.com/) - A hosting platform for modern web apps.

## **✨ Getting Started**

### **Prerequisites**

1. A basic understanding of the [Next.js](https://nextjs.org) framework is required.
2. You should have [Vercel CLI](https://vercel.com/cli) installed.
3. A MongoDB database is required.
4. A Vercel account is required.

### **Variables reference**

Please note that entered values are case-sensitive. Default values are provided as an example to help you figure out what should be entered.

> On Vercel, you have to add the following Environment Variables to your project while deploying to production.

| Variable               | Default Value                                   | Description                       |
| ---------------------- | ----------------------------------------------- | --------------------------------- |
| MONGODB_URI            | mongodb+srv://cluster0.example.mongodb.net      | MongoDB connection string.        |
| NEXT_PUBLIC_VERCEL_URL | https://8bits.vercel.app or https://example.com | Vercel URL or your custom domain. |

### **Usage**

#### **To develop locally**

1. Clone the repository.

```bash
  $ git clone https://github.com/uiuxarghya/8bits.git
  $ cd 8bits
  $ npm install
```

2. Create a `.env.local` file repository's root directory with your own keys.

```local
  MONGODB_URI=""
  NEXT_PUBLIC_VERCEL_URL=""
```

3. Run `vercel dev` to start the development server and open the browser at `http://localhost:3000`.

### **OR**

#### **Deploy now with Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fuiuxarghya%2F8bits&env=MONGODB_URI,NEXT_PUBLIC_VERCEL_URL&envDescription=Click%20on%20learn%20more%20to%20know%20more%20about%20the%20env%20variables&envLink=https%3A%2F%2Fgithub.com%2Fuiuxarghya%2F8bits%23variables-reference&project-name=8bits&repo-name=8bits&redirect-url=https%3A%2F%2Fgithub.com%2Fuiuxarghya%2F8bits&demo-title=8bits%20Link%20Shortener&demo-description=A%20simple%20serverless%20URL%20shortener%20made%20with%20Mongo%20DB%20and%20Vercel.&demo-url=https%3A%2F%2Fwww.8bits.vercel.app%2F&demo-image=https%3A%2F%2Fwww.8bits.vercel.app%2Fog.png)

> Provide the following environment variables to your Vercel project.

## **👍 Contribute**

If you want to say thank you and/or support the active development of 8bits:

- Add a [GitHub Star](https://github.com/uiuxarghya/8bits/star) to the project.
- Tweet about the project [on your Twitter](https://twitter.com/intent/tweet?text=8bits%20Link%20Shortener%20-%20A%20simple%20serverless%20URL%20shortener%20made%20with%20%40MongoDB%20and%20%40vercel.%20Designed%20to%20be%20%23simple%20%2C%20%23fast%20and%20%23secure%20with%20%23nextjs.%20%F0%9F%9A%80&url=https%3A%2F%2Fgithub.com%2Fuiuxarghya%2F8bits&via=uiuxarghya).
- Write a review or tutorial on [Medium](https://medium.com), [Dev.to](https://dev.to) or personal blog.
- Support the project by [donating a cup of coffee](https://www.buymeacoffee.com/uiuxarghya).

## **👦 Author**

- **[Arghya Ghosh](https://github.com/uiuxarghya)** ([@uiuxarghya](https://twitter.com/uiuxarghya)) - Creator

## **⚖️ License**

This project is licensed under the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0) - see the [`LICENSE`](LICENSE) file for details.
