import http from "k6/http";
import { check } from "k6";

export default function () {
  console.log(__ENV.BASE_URL);
  const payload = JSON.stringify({
    email: "developers@getduna.com",
    password: "superadmin",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(`${__ENV.BASE_URL}/api/v1/login`, payload, params);
  const token = response.json().token;
  console.log(token);
  console.log(response.body, response.status);

  check(response, {
    "status is 200": (r) => r.status === 200,
  });
}
