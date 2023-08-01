---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/lassejlv.png',
    name: 'Lasse Vestergaard',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/lassejlv' },
    ]
  },
 
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      We are a small team of passionate developers. We love open source and building great products.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
