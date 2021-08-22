# Teste 2

Número de Instâncias: 20
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     151 ms
Fastest query speed:  1 ms
Slowest query speed:  1365 ms
Mean RPS:             122.32 req/sec
Total time:           8175 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     175 ms
Fastest query speed:  1 ms
Slowest query speed:  1670 ms
Mean RPS:             109.09 req/sec
Total time:           9166 ms

Data Transferred
Mean query:      346 B
Largest query:   366 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     188 ms
Fastest query speed:  1 ms
Slowest query speed:  1534 ms
Mean RPS:             101.63 req/sec
Total time:           9839 ms

Data Transferred
Mean query:      346 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     380 ms
Fastest query speed:  55 ms
Slowest query speed:  1517 ms
Mean RPS:             51.44 req/sec
Total time:           19439 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     224 ms
Fastest query speed:  1 ms
Slowest query speed:  1670 ms
Mean RPS:             205.76 req/sec
Total time:           19440 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
