import React from 'react';
import ReactDOM from 'react-dom';

document.body.style.backgroundColor = "#FDAC53";

function Hi() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=, initial-scale=1.0" />
      <title>RESUME</title>
      <link rel="stylesheet" href="style.css" />
      <h1>Muhammad Moeed</h1>
      <img src="./moeed.jpeg" alt width={150} />
      <h2 style={{ color: "#EFE1CE" }} alig>
        ABOUT ME
      </h2>
      <p>
        Ambitiously seeking to apply my skills in a challenging <br />
        and dynamic environment and to be a part of a team that <br />
        wants to make a difference driven by the will to succeed <br />
        eventually inspiring as a successful entrepreneur.
      </p>
      <h5>CONTACT:03032703135</h5>
      <h5>EMAIL:moeedarif12@gmail.com</h5>
      <h5>DATE OF BIRTH:12/2/2004</h5>
      <h5>
        ADDRESS:Flat no 302, 3rd floor, 3F-3/4, Al Noor homes, Nazimabad no
        3,Near EidGah Ground Karachi
      </h5>
      <h5>CNIC:42301-2311192-7 </h5>
      <h2 style={{ color: "#EFE1CE" }} alig>
        EDUCATION
      </h2>
      <ul>
        <li>
          {" "}
          <b>2020-2022:</b> Intermediate Under Process
        </li>
        <br />
        <li>
          {" "}
          <b>2018-2020:</b> Matriculation
        </li>
      </ul>
      <br />
      <h2 style={{ color: "#EFE1CE" }} alig>
        EXPERIENCE
      </h2>
      <ul>
        <li>
          <b>Fresh Candidate</b>
        </li>
      </ul>
      <br />
      <h2 style={{ color: "#EFE1CE" }} alig>
        INTEREST
      </h2>
      <ul>
        <li> Willing to experience different educational activities</li>
        <li> passionate learner</li>
        <li> Travelling</li>
        <li> Reading</li>
      </ul>
    </div>
  );
  }


ReactDOM.render(<Hi/>, document.querySelector('#root'));