import React from "react";
import Layout from "../Layouts/Layout";
import Scanner from "../assets/Scanner.jpg";
import Qr from "../assets/Qr.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Layout>
            <div className="flex-col  justify-center	 ">
                <h2 className="text-orange-400	font-semibold text-xl m-8 flex	justify-center">
                    About Ordo
                </h2>

                <p className="m-8 flex	justify-center">
                    Welcome to our web-based restaurant ordering system! We're
                    excited to introduce our innovative QR code menu ordering
                    system that allows customers to order and pay for their
                    meals directly from their table.
                </p>
                <p className="m-8 flex	justify-center">
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
                <p className="m-8 flex	justify-center">
                    Our system is designed to make the ordering process fast,
                    simple, and convenient. Customers can scan the QR code on
                    their table with their smartphone or mobile device to access
                    the restaurant's menu. From there, they can browse the menu,
                    place their order, and pay for their meal all from the
                    comfort of their own table. This means no more waiting in
                    line, no more struggling to flag down a server, and no more
                    fumbling with cash or credit cards. Our system is designed
                    with both customers and restaurants in mind. For customers,
                    our system offers a hassle-free dining experience that saves
                    time and eliminates frustration. For restaurants, our system
                    streamlines the ordering process, reduces wait times, and
                    allows for more efficient table turnover. We pride ourselves
                    on providing a high-quality service that is both reliable
                    and user-friendly. Our system is easy to set up and can be
                    customized to meet the unique needs of each restaurant. Our
                    team is always available to answer any questions or provide
                    support to ensure that your restaurant's QR code menu
                    ordering system runs smoothly.
                </p>
                <div className="py-8 bg-yellow-500 mx-6 rounded-lg	">
                    <img
                        src={Qr}
                        className="m-auto w-1/5 h-1/5   	"
                        alt="Scanner"
                    />
                </div>
                <p className="m-8 flex	justify-center">
                    Thank you for choosing our QR code menu ordering system. We
                    look forward to serving you and helping your restaurant
                    provide a better dining experience for your customers.
                </p>
                <div className="h-16 w-36 bg-orange-400  flex 	items-center	 justify-center	rounded-lg mx-auto my-10">
                    <Link to="/" className=" text-xl font-bold text-white">
                        {" "}
                        Go to Home
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
