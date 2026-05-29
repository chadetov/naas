# NaaS — Nothing as a Service ™

> The world's first **enterprise-grade** platform for doing absolutely nothing, at scale, with five nines of uptime.*

<sub>* the nines are also nothing</sub>

[![build](https://img.shields.io/badge/build-nothing-lightgrey)](#)
[![coverage](https://img.shields.io/badge/coverage-0%25%20(intentional)-blue)](#)
[![uptime](https://img.shields.io/badge/uptime-∞%25-brightgreen)](#)
[![latency](https://img.shields.io/badge/latency-0ms*-success)](#)
[![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](#)
[![carbon](https://img.shields.io/badge/carbon%20footprint-also%20nothing-green)](#)
[![vibes](https://img.shields.io/badge/vibes-immaculate-ff69b4)](#)

---

## What is NaaS?

For decades, the cloud has been bloated with *things*. Servers. Containers. Microservices. Macroservices. That one Kubernetes cluster nobody is allowed to touch.

**NaaS** disrupts this paradigm by offering the only product the market truly needs: **nothing.** Delivered instantly. Globally. With zero cold starts, because there is nothing to start.

```
$ curl https://api.nothing.example/v1/nothing
(no output — working as intended)
```

You're welcome.

## Why Nothing?

| Feature | Other Clouds | NaaS |
|---|---|---|
| Cold starts | 💀 | None (nothing is always warm) |
| Memory leaks | 😰 | Impossible (no memory used) |
| Security vulnerabilities | 🚨 | Cannot exploit what isn't there |
| Technical debt | 📈 | Negative |
| 3 AM pages | 📟📟📟 | The pager is also nothing |
| Migration cost | 💸💸💸 | Already nothing — you're done |

## Quickstart

Getting started with NaaS takes seconds, because there is nothing to do.

```bash
# Install nothing
npm install   # installs 0 dependencies, as promised

# Run the service
npm start
```

Then open [http://localhost:1984](http://localhost:1984) and behold: nothing, beautifully rendered.

> 💡 **Pro tip:** You can also experience NaaS without installing anything by simply *not* running it. This is the recommended deployment for production.

## The API

NaaS exposes a fully RESTful, GraphQL-adjacent, gRPC-curious API.

| Endpoint | Method | Returns | SLA |
|---|---|---|---|
| `/v1/nothing` | `GET` | `204 No Content` | Instant |
| `/v1/nothing` | `POST` | Your nothing, accepted | Instant |
| `/v1/everything` | `GET` | `402 Payment Required` (enterprise tier) | — |
| `/health` | `GET` | Always healthy. There is nothing to fail. | — |
| `/metrics` | `GET` | The void, quantified | — |

### Example

```bash
$ curl -i http://localhost:1984/v1/nothing
HTTP/1.1 204 No Content
X-Powered-By: Sheer Force of Will
X-Nothing-Region: us-void-1
X-Existential-Status: at peace
```

## Pricing

| Tier | Price | What You Get |
|---|---|---|
| **Free** | $0/mo | Nothing |
| **Pro** | $99/mo | Nothing, but faster |
| **Enterprise** | Contact Sales | Nothing, with a dedicated account manager who also does nothing |
| **Sovereign Nothing** | 📞 | Air-gapped, on-prem nothing for your most sensitive absence of data |

*All tiers are functionally identical. The difference is spiritual.*

## Architecture

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Client    │─────▶│ Load        │─────▶│             │
│             │◀─────│ Balancer    │◀─────│  (nothing)  │
└─────────────┘      └─────────────┘      └─────────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │  CDN cache  │   cache hit rate: 100%
                     │  (empty)    │   (it's all the same nothing)
                     └─────────────┘
```

Horizontally scalable to ∞ nodes, each serving a precisely equal share of nothing.

## Testimonials

> "We migrated our entire monolith to NaaS over a weekend. Monday morning, nothing happened. Best decision we ever made."
> — *CTO, Series C startup that no longer exists*

> "Finally, a vendor that under-promises and exactly delivers."
> — *Gartner, probably*

> "5/5. Would receive nothing again."
> — *Verified Customer*

## Roadmap

- [x] Nothing (v1)
- [x] Nothing, but typed (v1.1)
- [ ] Nothing, but it's blockchain
- [ ] Nothing, but AI-powered
- [ ] Nothing 2.0 (full rewrite in Rust, still nothing, now memory-safe)
- [ ] IPO

## Contributing

PRs that add features will be closed immediately, as they violate our core value proposition. PRs that *remove* features are warmly welcomed. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## FAQ

**Q: Is this a joke?**
A: NaaS does not comment on rumors.

**Q: What's your disaster recovery plan?**
A: There is no disaster. There is nothing to recover.

**Q: Is it GDPR compliant?**
A: We collect nothing, store nothing, and sell nothing. Our DPO is a houseplant.

**Q: Can I self-host?**
A: You already are. Look around you. It's everywhere.

## License

[MIT](LICENSE) — do nothing with it, freely.
