# Teste 2

Número de Instâncias: 2
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     1684 ms
Fastest query speed:  68 ms
Slowest query speed:  3297 ms
Mean RPS:             11.71 req/sec
Total time:           85360 ms

Data Transferred
Mean query:      345 B
Largest query:   366 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     1703 ms
Fastest query speed:  67 ms
Slowest query speed:  3495 ms
Mean RPS:             11.58 req/sec
Total time:           86351 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1716 ms
Fastest query speed:  69 ms
Slowest query speed:  3398 ms
Mean RPS:             11.50 req/sec
Total time:           86953 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1766 ms
Fastest query speed:  253 ms
Slowest query speed:  3189 ms
Mean RPS:             11.20 req/sec
Total time:           89258 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     1717 ms
Fastest query speed:  67 ms
Slowest query speed:  3495 ms
Mean RPS:             44.81 req/sec
Total time:           89259 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
