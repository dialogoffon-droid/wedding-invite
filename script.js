body {
  margin: 0;
  font-family: "Georgia", serif;
  background: #fffdf8;
  color: #3b2f2f;
  text-align: center;
}

/* Герой-секция */
.hero {
  position: relative;
  padding: 100px 20px;
  background: #f8f5f0;
}

.hero h1 {
  font-size: 48px;
  margin: 0;
}

.hero .date {
  font-size: 20px;
  margin: 10px 0;
}

/* Декор */
.angel {
  position: absolute;
  width: 120px;
  opacity: 0.9;
}

.angel-left {
  top: 50px;
  left: 5%;
}

.angel-right {
  top: 50px;
  right: 5%;
}

.decor-top,
.decor-bottom {
  width: 250px;
  opacity: 0.8;
}

.heart-center {
  width: 80px;
  margin-top: 30px;
}

/* Subhero */
.subhero {
  background: #efe9e1;
  padding: 60px 20px;
}

.subhero h3 {
  margin: 0 0 20px 0;
  font-size: 24px;
}

.rings {
  width: 80px;
  opacity: 0.9;
}

/* RSVP форма */
.section {
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rsvp-form input,
.rsvp-form select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.rsvp-form button {
  padding: 14px;
  font-size: 18px;
  background: #3b2f2f;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.rsvp-form button:hover {
  opacity: 0.85;
}

/* Footer */
footer {
  background: #f4f0ea;
  padding: 40px 20px;
}

.footer-img {
  width: 90px;
  margin: 10px;
  opacity: 0.9;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .angel {
    width: 80px;
    top: 30px;
  }

  .decor-top,
  .decor-bottom {
    width: 180px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero .date {
    font-size: 18px;
  }
}
