# Verificación de Requisitos – Cooperativa de Caficultores "Café de Altura"

## Requisitos Cumplidos

### Gestión de Asociados

✅ Registrar nuevos asociados a la cooperativa.

Se implementó la creación de asociados mediante el endpoint correspondiente, almacenando la información en archivos JSON.

✅ Consultar asociados.

Se implementó la consulta general de asociados registrados.

✅ Actualizar datos del asociado.

Se desarrolló la funcionalidad para modificar la información de un asociado existente.

✅ Eliminar asociados.

Se implementó la eliminación de asociados mediante su identificador.

---

### Gestión de Fincas

✅ Registrar fincas.

Se desarrolló el registro de fincas asociadas a los productores.

✅ Consultar fincas.

Se implementó la consulta de las fincas almacenadas.

✅ Actualizar datos de las fincas.

Se desarrolló la actualización de la información de las fincas registradas.

✅ Eliminar fincas.

Se implementó la eliminación de fincas.

---

### Gestión de Cosechas

✅ Registrar cosechas por finca.

Se desarrolló el registro de cosechas asociadas a una finca.

✅ Consultar cosechas.

Se implementó la consulta de cosechas registradas.

✅ Actualizar cosechas.

Se desarrolló la modificación de información de las cosechas.

✅ Eliminar cosechas.

Se implementó la eliminación de registros de cosecha.

---

### Gestión de Ventas

✅ Registrar ventas.

Se desarrolló el registro de ventas de café.

✅ Consultar ventas.

Se implementó la consulta de ventas registradas.

✅ Actualizar ventas.

Se desarrolló la modificación de ventas existentes.

✅ Eliminar ventas.

Se implementó la eliminación de ventas registradas.

---

## Requisitos Parcialmente Cumplidos

### Consultar asociados activos e inactivos

⚠️ Se pueden consultar todos los asociados, pero no existe un filtro específico para listar únicamente los activos o únicamente los inactivos.

### Relación entre asociado y fincas

⚠️ Se registra el propietario de la finca, pero no se valida completamente la relación entre ambas entidades al realizar operaciones complejas.

---

## Requisitos Pendientes

### Restricción para eliminar asociados

❌ No se implementó la regla:

> Eliminar un asociado solo si no tiene fincas ni cosechas registradas.

Actualmente la eliminación se realiza de forma directa sin validar si existen registros relacionados.

### Descuento automático del inventario de cosecha

❌ No se implementó la regla:

> Registrar ventas de café descontando del inventario de cosecha.

Actualmente las ventas se registran de forma independiente y no actualizan automáticamente la cantidad disponible de la cosecha asociada.

### Control de inventario disponible

❌ No se valida que la cantidad vendida sea menor o igual a la cantidad producida en la cosecha.

### Reglas de negocio avanzadas

❌ No se implementaron validaciones para impedir inconsistencias entre:

- Asociados y fincas.
- Fincas y cosechas.
- Cosechas y ventas.

---

# Conclusión

El proyecto cumple completamente con la implementación de las operaciones CRUD para las entidades **Asociado**, **Finca**, **Cosecha** y **Venta**, así como con la organización del código mediante **Programación Orientada a Objetos (POO)** y persistencia en archivos JSON.

Sin embargo, quedaron pendientes algunas reglas de negocio específicas solicitadas en el enunciado, especialmente las relacionadas con validaciones entre entidades, restricciones para eliminación de asociados y el manejo automático del inventario de las cosechas durante las ventas.
Al igual que los tests propuestos por el instructor.

## Nivel de Cumplimiento Estimado

**Cumplimiento funcional aproximado: 85%**

El sistema cumple con todos los CRUD solicitados y la estructura general del proyecto, pero aún requiere la implementación de algunas reglas de negocio para satisfacer completamente los requisitos planteados por la cooperativa. 
