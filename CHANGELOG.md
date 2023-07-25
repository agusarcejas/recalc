# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.1] 25-07-2023

### Added

- Test e2e para que el resultado devuelva "Error" cuando la potencia de un numero mayor a 100000
- Test e2e para que el resultado de la division por 0 devuelva "Error"

### Fixed

- Problema al hacer la division por 0 devolvia undefined, ahora devuelve "Error"

## [1.4.0] 19-06-2023

### Added

- Conexion de los botones de la interfaz con la API
- Funcionalidad del boton "C"
- Tests e2e para verificar las funciones principales
- Tests estaticos para corregir errores de flujo de datos

## [1.3.2] 08-06-2023

### Fixed

- Path donde corre eslint

### Fixed

- Problema al correr tests e2e en Windows

## [1.3.1] 05-06-2023

### Added

- Dependencia cross-env para correr tests e2e

### Fixed

- Problema al correr tests e2e en Windows

## [1.3.0] 05-06-2023

### Added

- Interfaz básica de la calculadora
- ESLint para tests estáticos
- Playwright para tests e2e

## [1.2.0] 15-05-2023

### Added

- Sequelize para el manejo de base de datos
- Tests de integración sobre API y modelo
- Integración continua

## [1.1.0] 20-04-2023

### Added

- Endpoint para la función de resta
- Dependencias para realizar tests
- Tests para la función de resta

## [1.0.0] 17-04-2023

### Added

- Interface CLI para realizar cálculos en forma interactiva
- Base de la API
- Funciones core para realizar suma, resta, multiplicación, división y potencia

[unreleased]: https://github.com/frlp-utn-ingsoft/recalc/compare/v1.4.1...HEAD
[1.4.1]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.3.2
[1.4.0]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.3.2
[1.3.2]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.3.2
[1.3.1]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.3.1
[1.3.0]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.3.0
[1.2.0]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.2.0
[1.1.0]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.1.0
[1.0.0]: https://github.com/frlp-utn-ingsoft/recalc/releases/tag/v1.0.0
