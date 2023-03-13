---
theme: seriph
background: https://images.unsplash.com/photo-1506434304575-afbb92660c28?w=1280&q=80&fm=jpg
lineNumbers: true
drawings:
  persist: false
remoteAssets: true
colorSchema: dark

themeConfig:
  primary: '#ffffff'
transition: fade
layout: cover

fonts:
  sans: 'Helvetica Neue'
  serif: 'PT Serif'
  mono: 'PT mono'
---

# An unbuffered tale of my first year in video streaming

background from [unsplash/KOBU Agency](https://unsplash.com/photos/4H67yWXO2-M)

<style>
  h1 {
    @apply bg-black bg-opacity-70 p-10 rounded-xl
  }
</style>

---
layout: section
transition: slide-up
---

# What to expect 👀

<!-- 
- About engineering in video streaming, not content production
-->

---
layout: section
transition: slide-left
---

# Shameless plug for Spekky Bandit Gaming

<img src="/spekky_bandit.jpg" class="plug" />

[Videos on Youtube](https://www.youtube.com/@spekkybanditgaming)

<style>
  .plug {
    @apply mx-auto rounded-full
  }
</style>
<!-- 
Couldn't be here tonight as he's too busy playing games
-->

---
layout: statement
transition: slide-down
---

- ## My journey to video streaming 🚗
- ## Video streaming 101 🎓
- ## The challenges & Solutions 🚀

<style>
  li {
    @apply text-left m-5
  }
</style>

<!-- 
Who am I and how did I get to working in video streaming?
Not just talk about technical challenges, but forming a team and working with third parties. 
Not specific to current client
Talk through the solutions
-->

---
layout: section
transition: slide-left
---

# My Journey 🚗

---
layout: statement
transition: slide-left
---

## Healthcare Software 🚑

<hr class="absolute inset-y-0 right-0" style="width: 330px; top: 276px"/>

<!-- 
- Vertical scaling
- Low level engineering, performance tuning
- More transactions than visa
- Speeding up releases to go international
-->

---
layout: statement
transition: slide-left
---

<hr class="absolute inset-y-0 left-0" style="width: 350px; top: 276px"/>

## Banking Software 💰

<hr class="absolute inset-y-0 right-0" style="width: 350px; top: 276px"/>

<!--
- Open Banking - OAuth, security, k8s
-->
---
layout: statement
transition: slide-left
---

<hr class="absolute inset-y-0 left-0" style="width: 350px; top: 276px"/>

## Logistics Software 🚢

<hr class="absolute inset-y-0 right-0" style="width: 350px; top: 276px"/>

<!--
- Event driven architecture
-->

---
layout: statement
transition: slide-left
---

<hr class="absolute inset-y-0 left-0" style="width: 350px; top: 276px"/>

## Video Streaming 🎥

<!--
- Wanted to go back to apps with scale
- Get to know the tech really well
-->
---
layout: section
transition: slide-up
---

# Video Streaming 101 🎓

(live streaming)

<!--
Look at live streaming as it's more challenging
-->

---
layout: statement
transition: slide-left
---

```mermaid
sequenceDiagram
    participant VP as Video Player
    participant S as Server
    loop Every 2 seconds
        VP->>S: Where can I get the segments from?
        S->>VP: 
        VP->>S: I'll take the HD video segment
        S->>VP: 
    end
```

<!--
 - Illusion of continuity
-->

---
layout: quote
transition: slide-left
---

## 1 million streams at 5 Mbit/s
$$
\begin{split}
  &= 1,000,000 × 5,000,000 \space\footnotesize bit/s \\
  &= 5,000,000,000,000 \space\footnotesize bit/s \\
  &\huge= 5 \space\normalsize Tbit/s
\end{split}
$$

<style>
  p {
    @apply text-left
  }
  .katex-display {
    @apply text-left
  }
  .katex-display .katex  {
    @apply text-left
  }
</style>

---
layout: statement
transition: slide-left
---

<img src="/chatgpt1.png" />

^^^ [ChatGPT](https://chat.openai.com/)

---
layout: statement
transition: slide-left
---

<img src="/chatgpt2.png" />

^^^ [ChatGPT](https://chat.openai.com/)

---
layout: statement
transition: slide-left
---

```mermaid
sequenceDiagram
    participant VP as Video Player
    participant S as Server
    loop Every 2 seconds
        VP->>S: Where can I get the segments from?
        S->>VP: 
        VP->>S: I'll take the HD video segment
        S->>VP: 
    end
```
<!--
 - But can use http and so CDNs
-->

---
layout: quote
---

```mermaid
flowchart RL
    P(Video Player)
    CDN --> P
```

---
layout: quote
---

```mermaid
flowchart RL
    P(Video Player)
    R(Raw Stream)
    CDN --> P
    Encoder --> CDN
    R --> Encoder
```

---
layout: quote
---

```mermaid
flowchart RL
    P(Video Player)
    EA(Encoder 0)
    EB(Encoder 1)
    RA(Raw Stream X)
    RB(Raw Stream Y)
    CDN --> P
    RA --> EA --> CDN
    RB --> EB --> CDN
```
---
layout: quote
---

```mermaid
flowchart RL
    P(Video Player)
    C1(CDN A)
    C2(CDN B)
    EA(Encoder 0)
    EB(Encoder 1)
    RA(Raw Stream X)
    RB(Raw Stream Y)
    C1 --> P
    C2 --> P
    RA --> EA --> C1
    RB --> EB --> C1
    EA --> C2
    EB --> C2
```

<div class="absolute bottom-0">
  <p>
    <a href="https://aws.amazon.com/blogs/media/part4-how-to-set-up-a-resilient-end-to-end-live-workflow/">
      See AWS blog on encoder redundancy
    </a>
  </p>
  <p>
    <a href="https://npaw.com/blog/what-is-multi-cdn-for-video-streaming/">
      See NPAW blog on multi-cdn
    </a>
  </p>
</div>

<!--
 - Take a break from the techy stuff
 - Go back to the start - forming a team
 - Diversity of skills and backgrounds
 - What roles people play?
 - Imposter syndrome
 - Example of pre-warming the pipeline
 - Ways of working
 - Different requests for work from different people
 - Testing
-->

---
layout: quote
transition: slide-down
---

```mermaid
flowchart RL
    P(Video Player)
    C1(CDN A)
    C2(CDN B)
    EA(Encoder 0)
    EB(Encoder 1)
    RA(Raw Stream X)
    RB(Raw Stream Y)
    DW>Web]
    DM>Mobile]
    DS>Samsung TV]
    DL>LG TV]
    DA>Apple TV]
    DAF>...And Many More]

    P -.- DW
    P -.- DM
    P -.- DS
    P -.- DL
    P -.- DA
    P -.- DAF
    C1 --> P
    C2 --> P
    RA --> EA --> C1
    RB --> EB --> C1
    EA --> C2
    EB --> C2
```

<!--
Not catered for by all cloud testing solutions
Can we give ourselves 90% confidence by some lower level tests?
How to test video playback quality?
DRM?
-->

---
layout: section
transition: slide-left
---

# DRM 🤕

Digital Rights Management

---
layout: section
---

```mermaid
flowchart RL
    P("Untrusted Video Player ❌")
    VC("Valuable Content 💰")
    VC --> P
```

---
layout: section
---

```mermaid
flowchart RL
    P("Trusted Video Player ✅")
    VC("Valuable Content 💰")
    VC --> P
```

---
layout: section
transition: slide-up
---

```mermaid
flowchart RL
    P("Trusted Video Player ✅")
    VC("Valuable Content 💰")
    D("<p style='font-size: 60px; margin-block-start: 0.5em'>😈🎥</p>")
    VC --> P --> D
```

---
layout: section
transition: slide-left
---

```mermaid
sequenceDiagram
    participant VP as Video Player
    participant S as Server
    loop Every 2 seconds
        VP->>S: Where can I get the segments from?
        S->>VP: 
        VP->>S: I'll take the HD video segment
        S->>VP: 
    end
```

```mermaid
flowchart RL
    P(Video Player)
    EA(Encoder 0)
    EB(Encoder 1)
    RA(Raw Stream X)
    RB(Raw Stream Y)
    CDN --> P
    RA --> EA --> CDN
    RB --> EB --> CDN
```

---
layout: section
transition: slide-up
---

<div class="flex">
  <div class="flex-1">
    <p>
      Encoder 0
    </p>
    <img src="/0.jpeg" class="w-52 m-5 mx-auto" />
    </div>
  <div class="flex-1">
    <p>
      Encoder 1
    </p>
    <img src="/1.jpeg" class="w-52 m-5 mx-auto" />
  </div>
</div>

`leon` in binary: `01101100 01100101 01101111 01101110`

```mermaid
flowchart RL
    P(Video Player)
    0(0)
    1(1)
    2(1)
    3(0)
    4(1)
    5(1)
    6(0)
    7(0)
    dot("...")
    dot --> 7 --> 6 --> 5 --> 4 --> 3 --> 2 --> 1 --> 0 --> P
```

# 😮

---
layout: section
---

# Thank You 🙏


Slides: [https://leonyork.github.io/yorkshire-devops-03-2023](https://leonyork.github.io/yorkshire-devops-03-2023)

<img src="/qr.png" class="w-32 mx-auto" />

<img src="https://avatars.githubusercontent.com/u/39865400?v=4" class="circle" />
<img src="/iw.jpeg" class="circle" />

<style>
  .circle {
    @apply mx-auto rounded-full w-32 inline m-10
  }
</style>
<!-- -->