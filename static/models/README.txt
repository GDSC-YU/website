Some tests I ran to measure the performance of different optimization techniques:

profile: 5mbps, time: 7.0s, type: original (512 kB)

profile: 5mbps, time: 6.4s, type: optimized (229 KB)

profile: 5mbps, time: 6.3/6.4s, type: Draco (60 KB)

profile: 5mbps, time: 6.0/6.2s, type: Meshopt (64 KB)

profile: 5mbps, time: 6.0s, type: Meshopt + gzip (65 KB?)