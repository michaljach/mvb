---
title: About
tags: page
---

We will define one person of compute as 20 PFLOPS (64 A100s, or a single dense 42U A100 rack). We are in the era of the 1 rack person, consuming about 30kW to provide those 20 PFLOPS.

LLaMA was trained on a cluster of 2048 A100s, with ~312 TFLOPS each. 2048 is currently the most A100s that can work together on a model due to the switch topology.

The cluster has 639 PFLOPS, or 32 people of compute. Large LLaMA used ~1M GPU hours to train. Meaning it used the cluster for 500 hours (3 weeks). 32 people for 3 weeks is about 2 person-years of work. GPT-4 was about 100 person-years
