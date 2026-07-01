# Project 2: The Air Traffic Control
**Infrastructure Engineering Milestone**

## 🌐 Project Overview
This project focused on the foundational deployment of an IaaS (Infrastructure as a Service) workload on Microsoft Azure. The mission was to provision a virtual compute instance (VM), establish a secure cryptographic access tunnel, and deploy a high-concurrency event-driven web daemon (NGINX).

## 🚀 Architectural Blueprint
* **Compute Engine**: Ubuntu 22.04 LTS Instance (Azure B-Series).
* **Network Perimeter**: Azure Network Security Group (NSG) with Port 80/443 (HTTP/HTTPS) and Port 22 (SSH) ingress filtering.
* **Web Serving Stack**: NGINX (Event-driven architecture).
* **Access Control**: Public-Private RSA Key Pair (SSH authentication).

## 🛠️ Operational Milestones
1. **Provisioning**: Managed Azure VM deployment in the Central India region to bypass infrastructure quota constraints.
2. **Access Hardening**: Resolved Windows SSH key permission vulnerabilities (`UNPROTECTED PRIVATE KEY FILE`) to ensure cryptographic integrity.
3. **Deployment**: Configured NGINX daemon as the primary web entry point, effectively replacing static HTML delivery with a lightweight high-concurrency engine.
4. **Perimeter Hardening**: Executed firewall rule injection to transition from internal SSH management access to public web hosting (Port 80).

## 🔗 Live Environment
* **Deployed Web Endpoint**: http://20.235.110.108/
* **Security Protocol**: Verified SSH tunneling for administrative control.