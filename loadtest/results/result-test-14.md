# Teste 2

Número de Instâncias: 15
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     184 ms
Fastest query speed:  3 ms
Slowest query speed:  747 ms
Mean RPS:             104.17 req/sec
Total time:           9599 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     205 ms
Fastest query speed:  0 ms
Slowest query speed:  784 ms
Mean RPS:             92.73 req/sec
Total time:           10784 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     205 ms
Fastest query speed:  2 ms
Slowest query speed:  714 ms
Mean RPS:             92.72 req/sec
Total time:           10784 ms

Data Transferred
Mean query:      344 B
Largest query:   365 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     257 ms
Fastest query speed:  69 ms
Slowest query speed:  914 ms
Mean RPS:             75.28 req/sec
Total time:           13283 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     213 ms
Fastest query speed:  0 ms
Slowest query speed:  914 ms
Mean RPS:             301.13 req/sec
Total time:           13283 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
