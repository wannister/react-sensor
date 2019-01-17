import React from 'react';

const numbers = [1, 2, 23, 3, 4, 5];
// const About = () => (
//   <div>
//     <h2>About</h2>
//     This example shows how to use React Router!
//   </div>
// );

function About() {
  const listItems = numbers.map((number) => <li>{number}</li>);
  return (<ul>{listItems}</ul>);
}

export default About;