import Head from 'next/head'
import { motion } from "framer-motion"




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dandelion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
      <h1 className="primary title">Coming Soon</h1>
      <h4 className="title-two">to downtown Vancouver</h4>
      </div>

      <div className="card">
        <img className="big-logo"src="assets/big-logo.svg" alt=""></img>
        <div className="blur"></div>
      </div>
    
      <div className="card diamond">
        <img className="d-end" src="assets/mobile/top.png" alt=""/>
        <img className="tr" src="assets/mobile/top-right.png" alt="" />
        <img className="tl" src="assets/mobile/top-left.png" alt="" />
        <h4 className="rel">Premium Teas</h4>
        <span className="break"></span>
        <h4 className="rel">Natural Bodycare</h4>
        <img className="br" src="assets/mobile/bottom-right.png" alt="" />
        <img className="bl" src="assets/mobile/bottom-left.png" alt="" />
        <img className="btm" src="assets/mobile/bottom.png" alt="" />
        
      </div>
    
      <div className="card">
        <p>We’re not quite ready to announce a grand opening date, but we’ll post all the details on this page as soon as we are! Until then, there are a few things you can do to make sure you stay in loop.</p>
      </div>
      <div className="card">
        <h4>Follow us on social media</h4>
        {/*FB logo link | IG logo link*/}
      </div>
      <div className="card">
        <h4>Read about us in the news</h4>
        <div className="news"></div>
        <div className="news"></div>
        <div className="news"></div>
      </div>
      <div className="card">
        <h4>Shop online</h4>
        <button></button>
      </div>
      <div className="card">
        <h4>Get in touch</h4>
        <button></button>
      </div>
      <div className="card"></div>

    </div>
  )
}
