# Teste 2

Número de Instâncias: 8
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     405 ms
Fastest query speed:  15 ms
Slowest query speed:  1182 ms
Mean RPS:             48.79 req/sec
Total time:           20497 ms

Data Transferred
Mean query:      345 B
Largest query:   366 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     408 ms
Fastest query speed:  2 ms
Slowest query speed:  1536 ms
Mean RPS:             47.63 req/sec
Total time:           20995 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     429 ms
Fastest query speed:  3 ms
Slowest query speed:  1778 ms
Mean RPS:             45.70 req/sec
Total time:           21881 ms

Data Transferred
Mean query:      346 B
Largest query:   366 B
Smallest query:  263 B
Total:           347 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     519 ms
Fastest query speed:  82 ms
Slowest query speed:  1302 ms
Mean RPS:             37.76 req/sec
Total time:           26483 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     441 ms
Fastest query speed:  2 ms
Slowest query speed:  1778 ms
Mean RPS:             151.04 req/sec
Total time:           26483 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
