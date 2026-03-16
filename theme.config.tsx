import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>Dinusha&apos;s Tech Diary</span>,
  project: {
    link: 'https://github.com/dmchandrasinghe',
  },
  docsRepositoryBase: 'https://github.com/dmchandrasinghe/dmchandrasinghe-diary',
  footer: {
    text: `© ${new Date().getFullYear()} Dinusha Chandrasinghe · DevOps Tech Diary`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Dinusha\'s Tech Diary',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Dinusha Chandrasinghe's personal DevOps tech diary covering Kubernetes, IaaC, Infrastructure, Automation, Migration, AI, Development, and EV Vehicles." />
    </>
  ),
}

export default config
