import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Testimonial />
        <Footer />
        </>
    );
}
