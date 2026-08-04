# ARCH-022 · Chapter 08 — Consent, Privacy & Customer Identity

**Document ID:** ARCH-022-08

**Version:** 1.0

**Status:** Draft

**Owner:** Enterprise Architecture Team

**Last Updated:** 2026-08-05

**Parent Document:** ARCH-022 — Identity, Organizations & Access

---

# Purpose

This chapter defines customer identity journeys, consent, account linking, guest access, privacy rights, recovery, minors or represented persons, and identity-data minimization.

---

# Customer Identity Principles

* Permit anonymous or pseudonymous use when identity is unnecessary.
* Increase proofing only when the task, risk, contract, or law requires it.
* Explain why personal information is needed.
* Separate account identity, customer relationship, conversation, memory, and transaction records.
* Do not infer consent from continued interaction.
* Provide accessible correction, export, restriction, deletion, and recovery paths.
* Prevent account enumeration and identity-linking errors.

---

# Progressive Identity

A customer may progress from anonymous visitor to contact-verified user, authenticated account holder, transaction participant, or strongly verified subject.

Progress preserves the current journey safely but does not merge unrelated histories or tenant identities automatically. Each assurance increase records purpose, method category, time, and scope.

---

# Consent Record

A consent record includes:

* Subject or authorized representative
* Controller or responsible organization
* Purpose
* Data categories
* Processing and sharing boundaries
* Channel
* Notice version
* Choice and time
* Expiry or review
* Withdrawal and resulting behavior
* Evidence reference

Consent is not used where another lawful or contractual basis applies, and it is not bundled with unrelated choices.

---

# Conversation, Memory, and Learning

Customer identity does not authorize indefinite use of conversation content.

Separate controls apply to:

* Conversation retention
* Personalization and durable memory
* Human handoff
* Recording and transcription
* Feedback analysis
* Evaluation datasets
* Cross-tenant aggregated learning
* Marketing communication

Memory and learning candidates preserve consent, tenant, purpose, provenance, retention, correction, and deletion requirements under ARCH-016 and ARCH-029.

---

# Account Linking

Linking two customer identities, external accounts, channel identities, or transaction records requires verified control or approved evidence.

Similarity, shared device, contact reuse, name match, conversation content, or model inference cannot independently authorize linking.

Users can inspect and challenge material links where appropriate.

---

# Guest and Reservation Authorization

In the Casa Lluvia reference, booking contact, staying guest, payment actor, and property-authorized guest may be different relationships.

Guest identity submission for authorization is purpose limited to property access and related obligations. Identity documents are collected through protected channels, minimized, retained according to policy, and excluded from prompts, general conversation history, analytics, and knowledge stores.

Receiving a self-check-in code requires the authoritative booking, payment, authorization, and policy conditions; conversation familiarity cannot satisfy them.

---

# Representatives and Delegates

A person may act for another customer, organization, dependent, or represented party only through a recognized relationship and permitted purpose.

The system records actor and subject separately. A representative's authentication does not merge their identity with the represented person.

---

# Recovery and Dispute

Customer recovery supports lost authenticators, changed contact information, suspected takeover, inaccessible channels, and identity disputes.

Recovery protects privacy, avoids account enumeration, records evidence, and may restrict high-risk changes until assurance is restored.

Disputed identity links, unauthorized accounts, and incorrect attributes have owned investigation, correction, notification, and downstream propagation.

---

# Data Minimization

Identity services expose purpose-specific claims rather than full profiles. Consumers receive only attributes necessary for the current decision.

Sensitive proofing evidence is referenced and protected rather than copied. Analytics uses de-identified or aggregated information where individual identity is unnecessary.

