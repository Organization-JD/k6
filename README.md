Permite cambiar el numero de usuarios virtuales, la duracion y el numero de iteraciones
Forma larga

```bash
k6 run script.js --vus 1 --duration 10s --iterations 1
```

Forma corta

```bash
k6 run script.js -u 1 -d 10s -i 1
```

Permite ejecutar el test script en componentes no publicados o inseguros de cierta manera

```bash
k6 run script2.js --insecure-skip-tls-verify
```

Permite enviar variables de entorno al ejecutar el test

```bash
k6 run -e BASE_URL=https://auth.dev.deuna.io env-var.js
```

Permite obtener el resultado de la ejecucion en formato json

```bash
k6 run script.js --summary-export=result.json
```

Permite obtener con mayor detalle el resultado de la ejecucion en formato json

```bash
k6 run script.js --out json=full_results.json
```

Permite obtener el exit code de la anterior ejecucion

```bash
0 success execution
>0 fail execution
```

Permite conectar con grafana cloud

```bash
k6 cloud login --token def7e0a17d880d698e0f1ef6546ca878eacb9657f1da32dc89027c412898e06b
```

Permite ejecutar el test en grafana clud

```bash
k6 cloud run script.js
```

Permite ejecutar el test localmente y subir el resultado a grafana cloud

```bash
k6 run script.js -o cloud
```
