import React from "react";
import Layout from "../Layouts/Layout";
import Scanner from "../assets/Scanner.jpg";
import Qr from "../assets/Qr.jpg";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

export default function Home() {
    return (
        <Layout>
            <div className="flex-col  justify-center	 ">
                <h2 className="text-orange-400	font-semibold text-xl m-8 flex	justify-center">
                    About Ordo
                </h2>

                <p className="m-8 flex	justify-start">
                    Welcome to our web-based restaurant ordering system! We're
                    excited to introduce our innovative QR code menu ordering
                    system that allows customers to order and pay for their
                    meals directly from their table.
                </p>
                <p className="m-8 flex	justify-start">
                    Our system is designed to make the ordering process fast,
                    simple, and convenient. Customers can scan the QR code on
                    their table with their smartphone or mobile device to access
                    the restaurant's menu. From there, they can browse the menu,
                    place their order, and pay for their meal all from the
                    comfort of their own table. This means no more waiting in
                    line, no more struggling to flag down a server, and no more
                    fumbling with cash or credit cards.{" "}
                </p>

                <img
                    src={Scanner}
                    className="m-auto w-1/2 h-1/2	"
                    alt="Scanner"
                />
                <p className="m-8 flex	justify-start">
                    Thank you for choosing our QR code menu ordering system. We
                    look forward to serving you and helping your restaurant
                    provide a better dining experience for your customers.
                </p>
                <HomeButton />
            </div>
        </Layout>
    );
}
