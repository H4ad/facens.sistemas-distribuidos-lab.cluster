# Teste 2

Número de Instâncias: 1
CPU: 50% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     1751 ms
Fastest query speed:  104 ms
Slowest query speed:  2995 ms
Mean RPS:             11.34 req/sec
Total time:           88211 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     1758 ms
Fastest query speed:  104 ms
Slowest query speed:  3037 ms
Mean RPS:             11.21 req/sec
Total time:           89193 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1769 ms
Fastest query speed:  388 ms
Slowest query speed:  3101 ms
Mean RPS:             11.19 req/sec
Total time:           89386 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1780 ms
Fastest query speed:  149 ms
Slowest query speed:  3031 ms
Mean RPS:             11.14 req/sec
Total time:           89738 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     1765 ms
Fastest query speed:  104 ms
Slowest query speed:  3101 ms
Mean RPS:             44.57 req/sec
Total time:           89738 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
