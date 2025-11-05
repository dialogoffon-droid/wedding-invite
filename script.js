body {
  margin: 0;
  font-family: "Georgia", serif;
  color: #3b2f2f;
  background: url('images/paper-texture.jpg') repeat;
  background-size: cover;
  line-height: 1.6;
}

section {
  padding: 80px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* HERO */
.hero {
  position: relative;
  padding-top: 140px;
}
.hero h1 {
  font-size: 54px;
  letter-spacing: 2px;
  margin: 0;
}
.hero p {
  font-size: 22px;
  margin: 10px 0;
  font-style: italic;
}
.hero .heart {
  margin-top: 20px;
  width: 80px;
}
.angel {
  position: absolute;
  width: 120px;
  top: 40px;
}
.angel.left { left: 40px; }
.angel.right { right: 40px; }

/* INTRO & DETAILS & WISHES */
.intro, .details, .wishes {
  background: rgba(255,255,255,0.8);
  border-radius: 20px;
  padding: 60px;
  margin-bottom: 60px;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
}
.divider {
  margin-top: 30px;
  width: 150px;
}

/* MAP PLACEHOLDER */
.map-placeholder {
  margin: 30px auto;
  width: 80%;
  height: 200px;
  background: #f5f5f5;
  border: 2px dashed #bbb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
}

/* RSVP */
.rsvp-form {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.rsvp-form input, .rsvp-form select {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.rsvp-form button {
  padding: 14px;
  font-size: 18px;
  background: #3b2f2f;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.rsvp-form button:hover { background: #5c4444; }

/* RESERVE */
.reserve {
  opacity: 0.7;
  font-style: italic;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #444;
}
.footer-icon {
  width: 80px;
  margin: 0 10px;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero h1 { font-size: 38px; }
  .angel { width: 80px; top: 20px; }
  .intro, .details, .wishes { padding: 40px 20px; }
}
