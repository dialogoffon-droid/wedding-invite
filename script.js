body {
  margin: 0;
  font-family: "Georgia", serif;
  background: #fff;
  color: #333;
  text-align: center;
}

.section {
  padding: 60px 20px;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
}

.section h2 {
  margin-top: 0;
  font-size: 32px;
  margin-bottom: 25px;
}

.hero {
  background: #f4f4f4;
  padding: 100px 20px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.hero-text h1 {
  font-size: 48px;
  margin: 0;
}

.hero-text p {
  font-size: 20px;
  margin: 5px 0 0 0;
}

.subhero {
  background: #e9e4dd;
  padding: 80px 20px;
}

.subhero h3 {
  font-size: 26px;
  margin-top: 10px;
}

.rsvp-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.rsvp-form input,
.rsvp-form select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.rsvp-form button {
  padding: 14px;
  font-size: 18px;
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.rsvp-form button:hover {
  opacity: 0.8;
}

#response {
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}

footer {
  text-align: center;
  padding: 30px;
  font-size: 14px;
  color: #777;
}

/* === Decorative elements === */
.decor-top, .decor-bottom {
  text-align: center;
  margin-top: 30px;
}

.floral-top, .floral-bottom {
  width: 90%;
  max-width: 800px;
  opacity: 0.7;
}

.angel-left, .angel-right {
  width: 100px;
  position: relative;
  top: 20px;
}

.angel-left { margin-right: 20px; }
.angel-right { margin-left: 20px; }

.heart-center {
  width: 100px;
  margin-bottom: 15px;
  opacity: 0.8;
}

footer img {
  width: 70px;
  margin: 10px;
  opacity: 0.7;
}

/* === Адаптив под мобильные устройства === */
@media (max-width: 600px) {
  .hero-text h1 {
    font-size: 36px;
  }
  .angel-left, .angel-right {
    width: 70px;
    top: 10px;
  }
  .heart-center {
    width: 70px;
  }
  footer img {
    width: 50px;
  }
}
