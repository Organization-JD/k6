import http from "k6/http";
import { check } from "k6";

export default function () {
  const body = JSON.stringify({
    username: "test_123123131",
    password: "test123",
  });

  const payload = JSON.stringify({
    email: "developers@getduna.com",
    password: "superadmin",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // http.post("https://quickpizza.grafana.com/api/post", body, params);
  // http.post("https://test-api.k6.io/user/register/", body, params);
  const response = http.post(
    "https://auth.dev.deuna.io/api/v1/login",
    payload,
    params
  );
  const token = response.json().token;
  console.log(token);
  console.log(response.body, response.status);

  check(response, {
    "status is 200": (r) => r.status === 200,
  });
}
