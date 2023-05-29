# fastify-react-ssr
A simple project to collect and measure some performance metrics when using SSR with React from Fastify.

## Features
The project has only a single feature (page) which is a list of the first 100 updated GitHub repositories for a specific org (NearForm).

## Metrics collected
All the metrics it was collected by [WebPageTest](https://www.webpagetest.org/).

| Node version | TTFB | Start Render | FCP | Speed Index | LCP | CLS | TBT | Page Weight | RPS | Link |
|--------------|------|--------------|-----|-------------|-----|-----|-----|-------------|-----|------|
| 20 | .379s | .700s | .714s | .700s | .714s | 0 | .000s | 28KB | 19.2 (202 requests in 10.04s) | [Summary](https://www.webpagetest.org/result/230529_BiDcTE_CYW/) |
| 18 | .379s | .700s | .751s | .700s | .751s | 0 | .000s | 29KB | 16.9 (179 requests in 10.06s) | [Summary](https://www.webpagetest.org/result/230529_BiDc39_CY4/) |
| 16 | .382 | .700s | .753s | .700s | .753s | 0 | .000s | 29KB | 16.5 (175 requests in 10.06s) | [Summary](https://www.webpagetest.org/result/230529_BiDc94_D0B/) |

### Specifications
- Browser: Google Chrome v113
- Connectivity: 5000/1000 Kbps, 28ms latency
- Docker Version: 20.10.12
- Environment: Desktop
- Hosted in: Fly
- Internet connection: Cable
- Region: Virginia USA
- Test runs: 9
