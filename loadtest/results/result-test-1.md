# Teste 1

Número de Instâncias: 1
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     2909 ms
Fastest query speed:  149 ms
Slowest query speed:  4606 ms
Mean RPS:             6.77 req/sec
Total time:           147330 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 998 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     2929 ms
Fastest query speed:  230 ms
Slowest query speed:  4904 ms
Mean RPS:             6.74 req/sec
Total time:           148338 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     2924 ms
Fastest query speed:  2127 ms
Slowest query speed:  4506 ms
Mean RPS:             6.74 req/sec
Total time:           148338 ms

Data Transferred
Mean query:      346 B
Largest query:   367 B
Smallest query:  263 B
Total:           347 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     2945 ms
Fastest query speed:  228 ms
Slowest query speed:  4702 ms
Mean RPS:             6.72 req/sec
Total time:           148633 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 999 responses (100.00%)

----Global----

Timing
Mean query speed:     2927 ms
Fastest query speed:  149 ms
Slowest query speed:  4904 ms
Mean RPS:             26.89 req/sec
Total time:           148634 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 3997 responses (100.00%)
```
