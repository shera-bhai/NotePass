// src/components/Buy.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Buy.css';
import React from "react";
import Navbar from './Navbar';

function Buy(){
    return(
        <>
        <Navbar/>
      <div className="container">
        <section className="header">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" className="back-video" />
        </section>
        <br /><br /><br />
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <table className="_table">
            <tbody>
              {books.map((book, index) => (
                <tr className={index % 2 === 0 ? 'table_row' : 'table_row2'} key={book._id}>
                  <td className="table_data" data-tilt>
                    <a href={`./buy${index + 1}.html`}>
                      <img src={book.imageUrl} alt={`Book ${index + 1}`} />
                    </a>
                    <h3>{book.title}</h3>
                    <h4>Check our Price</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <footer className="footer">
        <div>
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">affiliate program</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">shipping</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">order status</a></li>
                  <li><a href="#">payment options</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="books.html">Buy Books</a></li>
                  <li><a href="https://forms.gle/4PG2bsPxTYpgJuBd7" target="_blank">Sell Books</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f" /></a>
                  <a href="#"><i className="fab fa-twitter" /></a>
                  <a href="#"><i className="fab fa-instagram" /></a>
                  <a href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Buy;
