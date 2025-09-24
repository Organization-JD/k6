import http from "k6/http";
import { sleep } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

export const options = {
  vus: 1,
  duration: "5s",
  ext: {
    loadimpact: {
      projectID: 3694381,
    },
  },
};

export default function () {
  let res = http.get("https://self-signed.badssl.com");
  // expect.soft(res.status).toBe(200);
  // sleep(1);
  sleep(randomIntBetween(1, 5)); // sleep between 1 and 5 seconds.
}
