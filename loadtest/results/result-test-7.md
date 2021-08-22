# Teste 2

Número de Instâncias: 4
CPU: 25% para um único core
Memória: 256mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     886 ms
Fastest query speed:  83 ms
Slowest query speed:  1684 ms
Mean RPS:             22.25 req/sec
Total time:           44952 ms

Data Transferred
Mean query:      345 B
Largest query:   367 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     891 ms
Fastest query speed:  86 ms
Slowest query speed:  1888 ms
Mean RPS:             22.21 req/sec
Total time:           45034 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     892 ms
Fastest query speed:  86 ms
Slowest query speed:  1797 ms
Mean RPS:             22.19 req/sec
Total time:           45068 ms

Data Transferred
Mean query:      345 B
Largest query:   367 B
Smallest query:  263 B
Total:           345 kB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     946 ms
Fastest query speed:  136 ms
Slowest query speed:  1874 ms
Mean RPS:             20.90 req/sec
Total time:           47855 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     904 ms
Fastest query speed:  83 ms
Slowest query speed:  1888 ms
Mean RPS:             83.58 req/sec
Total time:           47855 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
