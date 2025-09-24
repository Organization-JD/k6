import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import http from "k6/http";
import { sleep } from "k6";
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";

export const options = {
  vus: 10,
  duration: "10s",
};

export default function () {
  const randomFirstName = randomString(8);
  console.log(`Hello, my first name is ${randomFirstName}`);

  const randomLastName = randomString(10, `aeioubcdfghijpqrstuv`);
  console.log(`Hello, my last name is ${randomLastName}`);

  const randomCharacterWeighted = randomString(1, `AAAABBBCCD`);
  console.log(`Chose a random character ${randomCharacterWeighted}`);
}
