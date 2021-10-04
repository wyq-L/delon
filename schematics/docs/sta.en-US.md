---
order: 40
title: sta
subtitle: Swagger API generator
type: Documents
---

## Foreword

If the back-end API documentation is described by Swagger, a complete set of API codes can be generated through the following commands:

```bash
ng g ng-alain:sta --url=https://petstore3.swagger.io/api/v3/openapi.json 
```

## Command format

```bash
ng g ng-alain:sta --name=<Swagger name> --url=<Remote URL> --filePath=<Local Swagger.json> --output=<Path to folder>
```

| Name | Default | Description |
|------|---------|-------------|
| `name` | `proxy` | Name for swagger project name |
| `url` | - | URL to swagger schema, Choose one of filePath and url. |
| `filePath` | - | Path to swagger schema, Choose one of filePath and url. |
| `output` | `src/app/${name}` | Path to folder where will been located the created api module |