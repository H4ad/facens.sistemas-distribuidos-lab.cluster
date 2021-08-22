# Teste 2

Número de Instâncias: 6
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     431 ms
Fastest query speed:  65 ms
Slowest query speed:  1592 ms
Mean RPS:             45.14 req/sec
Total time:           22154 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     492 ms
Fastest query speed:  27 ms
Slowest query speed:  1525 ms
Mean RPS:             39.44 req/sec
Total time:           25355 ms

Data Transferred
Mean query:      345 B
Largest query:   367 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     523 ms
Fastest query speed:  6 ms
Slowest query speed:  1816 ms
Mean RPS:             37.71 req/sec
Total time:           26518 ms

Data Transferred
Mean query:      345 B
Largest query:   367 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     618 ms
Fastest query speed:  99 ms
Slowest query speed:  1612 ms
Mean RPS:             31.71 req/sec
Total time:           31536 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     516 ms
Fastest query speed:  6 ms
Slowest query speed:  1816 ms
Mean RPS:             126.84 req/sec
Total time:           31536 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
