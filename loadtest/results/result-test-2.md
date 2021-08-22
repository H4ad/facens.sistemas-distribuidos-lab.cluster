# Teste 2

Número de Instâncias: 1
CPU: 25% para um único core
Memória: 512mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     2903 ms
Fastest query speed:  215 ms
Slowest query speed:  4196 ms
Mean RPS:             6.84 req/sec
Total time:           146209 ms

Data Transferred
Mean query:      346 B
Largest query:   364 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     2910 ms
Fastest query speed:  1507 ms
Slowest query speed:  4403 ms
Mean RPS:             6.81 req/sec
Total time:           146915 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     2907 ms
Fastest query speed:  703 ms
Slowest query speed:  4512 ms
Mean RPS:             6.81 req/sec
Total time:           146916 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     2919 ms
Fastest query speed:  208 ms
Slowest query speed:  4214 ms
Mean RPS:             6.79 req/sec
Total time:           147298 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     2910 ms
Fastest query speed:  208 ms
Slowest query speed:  4512 ms
Mean RPS:             27.16 req/sec
Total time:           147298 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
