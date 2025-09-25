1. Permite cambiar el numero de usuarios virtuales, la duracion y el numero de iteraciones
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

# Comandos Git

Permite ver la diferencia de cambios con respecto al staged

```bash
git diff --staged
```

Permite agregar al staged y mensaje en el commit

```bash
git commit -am ""
```

Permite actualizar el mensaje en el commit

```bash
git commit --amend -m "README.md actualizado"
```

Permite deshacer los cambios del ultimo commit e historial
Permite renombrar el archivo moviendo dentro de la misma carpeta
Permite eliminar el archivo

```bash
git reset --soft HEAD^
git reflog
git mv README.md readme.md
git rm README.md
git merge "nombre-rama"
git branch -d "nombre-rama" -f
git tag "nombre-tag"
git tag -d "nombre-tag"
git tag -a v1.0.0 -m "Version 1.0.0 lista"
git tag -a v1.0.0 "hash del commit que queremos" -m "Version beta lista"
```
