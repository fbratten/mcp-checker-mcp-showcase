# MCP Server Checker - Showcase

Public showcase for [MCP Server Checker](https://github.com/fbratten/mcp-server-checker) - a comprehensive validation tool for Model Context Protocol servers.

## Live Demo

Visit the showcase: [fbratten.github.io/mcp-checker-mcp-showcase](https://fbratten.github.io/mcp-checker-mcp-showcase/)

## What It Does

MCP Server Checker validates MCP servers against the MCP Protocol Specification using a two-score system:

- **Compliance Score** - Binary pass/fail gate for hard requirements (handshake, JSON-RPC, security)
- **Maturity Score** - Quality gradient 0-100% across four domains with badge levels

### Validation Domains

| Domain | Weight | Coverage |
|--------|--------|----------|
| Runtime | 40% | Protocol, lifecycle, transport, robustness |
| Code Analysis | 25% | Structure, patterns, documentation, schema |
| Best Practices | 20% | Spec compliance, architecture, security |
| LLM Ergonomics | 15% | Naming, descriptions, schema usability |

### Badge Levels

| Badge | Requirement |
|-------|------------|
| CERTIFIED | Compliance PASS + Maturity 95%+ |
| PRODUCTION_READY | Compliance PASS + Maturity 85%+ |
| FUNCTIONAL | Compliance PASS + Maturity 70%+ |
| DEVELOPMENT | Compliance PASS + Maturity 50%+ |
| NON_COMPLIANT | Compliance FAIL |

### MCP Tools

| Tool | Purpose |
|------|---------|
| `check_server` | Validate a server - returns compliance + maturity |
| `list_checks` | List all 50+ validation checks |
| `get_profiles` | Get validation profile definitions |
| `get_fix_packs` | Get remediation suggestions |
| `suggest_fixes` | Suggest fix packs from results |

## Tech Stack

- Python 3.11+
- FastMCP
- 173 tests passing
- 9 completed MVPs

## Part of

[Adaptivearts.ai](https://adaptivearts.ai) - Independent AI Research Initiative
