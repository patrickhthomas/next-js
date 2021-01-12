import Head from 'next/head'
import button from '../components/Button.module.scss'
import { motion } from "framer-motion"
import Layout from '../components/Layout'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dandelion</title>
        <link rel="icon" href="/favicon.ico" />
        <script async charset="utf-8"
    src="//cdn.iframe.ly/embed.js?api_key=..." 
></script>
      </Head>
      <body class="grid">
      
      <motion.div 
          animate={{
            x: [1, 4, 10],
            y: [1, 5, 1],
            scale: .8,
            rotation: 360
          }}
          transition={{
            repeat: Infinity, repeatType: "mirror", bounce: 1, duration: 10
          }}>
        <img className="blob2"src="/assets/blob2.svg" alt="yellow blob"></img>
      </motion.div>

                  <motion.div 
          animate={{
            x: [1, 4, 10],
            y: [1, 5, 1],
            scale: .8,
            rotation: 360
          }}
          transition={{
            repeat: Infinity, repeatType: "mirror", bounce: 1, duration: 10
          }}>
        <img className="blob4"src="/assets/blob2.svg" alt="yellow blob"></img>
      </motion.div>
        <motion.div 
          animate={{
            x: [1, 4, 10],
            y: [1, 5, 1],
            scale: .8,
            rotation: 360
          }}
          transition={{
            repeat: Infinity, repeatType: "mirror", bounce: 1, duration: 10
          }}>
        <img className="blob3"src="/assets/blob.svg" alt="yellow blob"></img>
      </motion.div>


        <motion.div 
          animate={{
            x: [1, 4, 10],
            y: [1, 5, 1],
            scale: .8,
            rotation: 360
          }}
          transition={{
            repeat: Infinity, repeatType: "mirror", bounce: 1, duration: 10
          }}>
        <img className="blob"src="/assets/blob.svg" alt="yellow blob"></img>
      </motion.div>

      <main>
        <motion.div animate={{ scale: 1.2 }}>
        <h1 className="title primary">
          Coming soon
        </h1>
        </motion.div>
        <h2>to Downtown Vancouver</h2>
        <motion.div animate={{ scale: .8 }}>
        <div className="container">
        <img className="image" src="/assets/big-logo.svg" alt=""></img>
        </div>
        </motion.div>
        <h4>Winner of the inaugural Vancouver Downtown Association Launchpad Competition</h4>
        <motion.div
    whileHover={{
      scale: [1, 1.02, 1.08, 1.02, 1],
      rotate: [0, .3, -.2, .4, 0]
    }}
    whileTap={{
      scale: 0.8
    }}
    transition={{
      type: "spring", bounce: 1, duration: .4
    }}
  >
        <button className={button.button}>Click it!</button>
  </motion.div>

  

        

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
        
      </main>
      </body>

      <footer>

      </footer>

      <style jsx>{`
        .body {
          max-width: 100%;
        }
        .blob, .blob2, .blob3, .blob4{
          position: fixed;
          left: -150px;
          
        }
        .blob2{
          position: fixed;
          z-index: -1;
          left: -45px;
          top: 90px;
          transform: scale(1.2);
        }

        .blob3 {
          right: -900px;
          top: 100px;
          transform: scale(1.5);
        }

        .blob4 {
          right: -900px;
          top: 150px;
          transform: scale(1.8);
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 100%;
            text-shadow:
   -3px -3px 0 #F6F3FA,  
    3px -3px 0 #F6F3FA,
    -3px 3px 0 #F6F3FA,
    3px 3px 0 #F6F3FA;
          letter-spacing: 4px;
          max-width: 100%;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          background-color: #E5E2E9;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
