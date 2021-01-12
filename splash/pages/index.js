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
      </div>
    
      <div className="card diamond">
        <img className="d-end" src="assets/mobile/top.png" alt=""/>
        <img className="tr" src="assets/mobile/top-right.png" alt="" />
        <img className="tl" src="assets/mobile/top-left.png" alt="" />
        <h4 className="rel">Tea and stuff</h4>
        <span className="break"></span>
        <h4 className="rel">Tea and stuff</h4>
        <img className="br" src="assets/mobile/bottom-right.png" alt="" />
        <img className="bl" src="assets/mobile/bottom-left.png" alt="" />
        <img className="btm" src="assets/mobile/bottom.png" alt="" />
        
      </div>
    
      <div className="card">
      </div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>

    </div>
  )
}
