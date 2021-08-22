# Teste 2

Número de Instâncias: 3
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     1065 ms
Fastest query speed:  90 ms
Slowest query speed:  3613 ms
Mean RPS:             18.41 req/sec
Total time:           54305 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     1118 ms
Fastest query speed:  91 ms
Slowest query speed:  3282 ms
Mean RPS:             17.67 req/sec
Total time:           56601 ms

Data Transferred
Mean query:      347 B
Largest query:   365 B
Smallest query:  263 B
Total:           347 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1134 ms
Fastest query speed:  197 ms
Slowest query speed:  3484 ms
Mean RPS:             17.33 req/sec
Total time:           57694 ms

Data Transferred
Mean query:      346 B
Largest query:   367 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1168 ms
Fastest query speed:  192 ms
Slowest query speed:  3211 ms
Mean RPS:             16.78 req/sec
Total time:           59588 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     1121 ms
Fastest query speed:  90 ms
Slowest query speed:  3613 ms
Mean RPS:             67.13 req/sec
Total time:           59589 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
