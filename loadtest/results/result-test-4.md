# Teste 2

Número de Instâncias: 1
CPU: 50% para um único core
Memória: 512mb

```markdown
----Summary----

----Target 1: GET http://localhost:8000/cities

Timing
Mean query speed:     1771 ms
Fastest query speed:  208 ms
Slowest query speed:  2985 ms
Mean RPS:             11.19 req/sec
Total time:           89365 ms

Data Transferred
Mean query:      1.4 kB
Largest query:   1.4 kB
Smallest query:  1.4 kB
Total:           1.4 MB

Response Codes
200: 1000 responses (100.00%)

----Target 2: GET http://localhost:8000/states

Timing
Mean query speed:     1783 ms
Fastest query speed:  208 ms
Slowest query speed:  3201 ms
Mean RPS:             11.09 req/sec
Total time:           90144 ms

Data Transferred
Mean query:      346 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Target 3: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1804 ms
Fastest query speed:  241 ms
Slowest query speed:  2808 ms
Mean RPS:             10.98 req/sec
Total time:           91045 ms

Data Transferred
Mean query:      260 kB
Largest query:   260 kB
Smallest query:  260 kB
Total:           260 MB

Response Codes
200: 1000 responses (100.00%)

----Target 4: GET http://localhost:8000/cities/[0-9]{1,3}

Timing
Mean query speed:     1800 ms
Fastest query speed:  656 ms
Slowest query speed:  2877 ms
Mean RPS:             10.98 req/sec
Total time:           91046 ms

Data Transferred
Mean query:      345 B
Largest query:   365 B
Smallest query:  263 B
Total:           346 kB

Response Codes
200: 1000 responses (100.00%)

----Global----

Timing
Mean query speed:     1790 ms
Fastest query speed:  208 ms
Slowest query speed:  3201 ms
Mean RPS:             43.93 req/sec
Total time:           91046 ms

Data Transferred
Mean query:      66 kB
Largest query:   260 kB
Smallest query:  263 B
Total:           262 MB

Response Codes
200: 4000 responses (100.00%)
```
