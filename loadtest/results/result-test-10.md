# Teste 2

Número de Instâncias: 7
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     477 ms
Fastest query speed:  7 ms
Slowest query speed:  1287 ms
Mean RPS:             41.31 req/sec
Total time:           24206 ms

Data Transferred
Mean query:      346 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     483 ms
Fastest query speed:  33 ms
Slowest query speed:  1495 ms
Mean RPS:             40.84 req/sec
Total time:           24486 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     487 ms
Fastest query speed:  23 ms
Slowest query speed:  1385 ms
Mean RPS:             40.18 req/sec
Total time:           24888 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     544 ms
Fastest query speed:  169 ms
Slowest query speed:  1283 ms
Mean RPS:             36.12 req/sec
Total time:           27685 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     498 ms
Fastest query speed:  7 ms
Slowest query speed:  1495 ms
Mean RPS:             144.48 req/sec
Total time:           27685 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
