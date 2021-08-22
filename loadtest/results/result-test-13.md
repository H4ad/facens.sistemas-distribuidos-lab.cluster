# Teste 2

Número de Instâncias: 10
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     233 ms
Fastest query speed:  1 ms
Slowest query speed:  925 ms
Mean RPS:             84.50 req/sec
Total time:           11834 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     278 ms
Fastest query speed:  1 ms
Slowest query speed:  957 ms
Mean RPS:             69.78 req/sec
Total time:           14330 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     287 ms
Fastest query speed:  3 ms
Slowest query speed:  1014 ms
Mean RPS:             67.26 req/sec
Total time:           14867 ms

Data Transferred
Mean query:      344 B
Largest query:   367 B
Smallest query:  263 B
Total:           344 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     365 ms
Fastest query speed:  68 ms
Slowest query speed:  1007 ms
Mean RPS:             52.89 req/sec
Total time:           18908 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     291 ms
Fastest query speed:  1 ms
Slowest query speed:  1014 ms
Mean RPS:             211.37 req/sec
Total time:           18924 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
