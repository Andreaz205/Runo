import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from "../app/components/screens/home/Home";
import {NextPage} from "next";

const HomePage: NextPage = () =>  {
  return (
    <Home />
  )
}

export default HomePage
