# Teste 2

Número de Instâncias: 5
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     641 ms
Fastest query speed:  99 ms
Slowest query speed:  2177 ms
Mean RPS:             30.85 req/sec
Total time:           32413 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     656 ms
Fastest query speed:  66 ms
Slowest query speed:  1873 ms
Mean RPS:             29.93 req/sec
Total time:           33407 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     662 ms
Fastest query speed:  15 ms
Slowest query speed:  2148 ms
Mean RPS:             29.74 req/sec
Total time:           33621 ms

Data Transferred
Mean query:      345 B
Largest query:   367 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     753 ms
Fastest query speed:  200 ms
Slowest query speed:  2221 ms
Mean RPS:             26.16 req/sec
Total time:           38220 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     678 ms
Fastest query speed:  15 ms
Slowest query speed:  2221 ms
Mean RPS:             104.66 req/sec
Total time:           38220 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
