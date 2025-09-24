import http from "k6/http";
import { sleep } from "k6";
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1,
  duration: "10s",
  // ext: {
  //   loadimpact: {
  //     projectID: 3694381,
  //   },
  // },
  cloud: {
    projectID: 4613008,
  },
};

export default function () {
  let res = http.get("https://quickpizza.grafana.com");
  // expect.soft(res.status).toBe(200);
  // sleep(1);
  sleep(randomIntBetween(1, 5)); // sleep between 1 and 5 seconds.
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
