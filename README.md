# Reto Técnico Performance Testing

## Tecnologías y Herramientas

- **Apache JMeter**: 5.6.3
- **Java**: JDK 8 o superior
- **API**: FakeStore API (https://fakestoreapi.com)

## Prerequisitos Técnicos

1. **Java JDK 8+** instalado y configurado en PATH
2. **Apache JMeter 5.6.3** descargado y configurado
3. Conexión a internet para acceder a la API
4. Archivo `data.csv` con credenciales de usuarios

## Estructura del Proyecto

```
PERFORMANCE/
├── RetoTecnicoPerformance.jmx    # Plan de pruebas JMeter
├── data.csv                      # Datos de usuarios
├── summaryReport.csv             # Reporte generado
└── reporteHTMLFullUsers/         # Reporte HTML detallado
```

## Configuración de Datos

El archivo `data.csv` debe contener:
```csv
user,passwd
donero,ewedon
kevinryan,kev02937@
johnd,m38rmF$
derek,jklg*_56
mor_2314,83r5^_
```

## Ejecución Paso a Paso

### 1. Modo GUI (Desarrollo/Debug)
```bash
# Abrir JMeter GUI
jmeter

# Cargar el archivo RetoTecnicoPerformance.jmx
# File > Open > RetoTecnicoPerformance.jmx
# Ejecutar: Run > Start
```

### 2. Modo No-GUI (Producción)
```bash
# Ejecutar desde línea de comandos
jmeter -n -t RetoTecnicoPerformance.jmx -l results.jtl

# Con reporte HTML
jmeter -n -t RetoTecnicoPerformance.jmx -l results.jtl -e -o reporteHTML/
```

## Generación de Reportes

### Reporte CSV (Automático)
- Se genera automáticamente en `summaryReport.csv`
- Contiene métricas básicas de rendimiento

### Reporte HTML Detallado
```bash
# Generar reporte HTML desde archivo JTL
jmeter -g results.jtl -o reporteHTMLCompleto/

# O durante la ejecución
jmeter -n -t RetoTecnicoPerformance.jmx -l results.jtl -e -o reporteHTML/
```

## Interpretación del Reporte

### Métricas Clave

| Métrica | Descripción | Valor Objetivo |
|---------|-------------|----------------|
| **Average Response Time** | Tiempo promedio de respuesta | < 1500ms |
| **Error Rate** | Porcentaje de errores | < 3% |
| **Throughput** | Transacciones por segundo | Variable |
| **90th Percentile** | 90% de requests bajo este tiempo | < 2000ms |

### Archivos de Reporte

1. **summaryReport.csv**: Métricas básicas
2. **index.html**: Dashboard principal con gráficos
3. **statistics.json**: Datos estadísticos detallados

## Validación de Requerimientos

### Aserciones Configuradas

1. **Duration Assertion**: 
   - Límite: 1500ms por request
   - Validación: Cada request debe completarse en < 1.5 segundos

2. **Error Rate Assertion**:
   - Límite: 3% de error rate
   - Validación: JSR223 script verifica que errores < 3%

### Criterios de Éxito

✅ **PASS**: Error rate ≤ 3% AND Average response time ≤ 1500ms  
❌ **FAIL**: Error rate > 3% OR Average response time > 1500ms

### Verificación Manual

```bash
# Revisar el archivo de log para errores
grep "false" summaryReport.csv | wc -l

# Calcular error rate
# (Requests fallidos / Total requests) * 100 < 3%
```

## Configuración de Carga

- **Usuarios**: 20 concurrentes
- **Ramp-up**: 30 segundos
- **Duración**: 300 segundos (5 minutos)
- **Patrón**: Carga constante con datos CSV rotativos

## Troubleshooting

### Errores Comunes

1. **FileNotFoundException**: Verificar ruta de `data.csv`
2. **Connection timeout**: Verificar conectividad a internet
3. **High error rate**: Revisar credenciales en CSV o límites de API

### Logs Útiles

- JMeter log: `jmeter.log`
- Resultados detallados: `results.jtl`
- Errores específicos: View Results Tree en GUI