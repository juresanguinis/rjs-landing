# Things to update every month

Use this checklist to refresh site content. It is written to be easy for an AI assistant to follow.

## Required updates

1. Update monthly news items
   - Source: r/juresanguinis top posts for the current month
   - File: src/utils/constants/news.constants.ts
   - Replace titles, URLs, authors, categories, and summaries with fresh items

2. Update the News page month label
   - File: src/pages-sections/news/NewsSection.tsx
   - Change the headline "February 2026 Edition" to the current month and year

3. Update community embeds
   - Source: r/juresanguinis
   - File: src/utils/constants/community.constants.ts
   - Refresh the 5 items for each tag: highlight, top, hot

## Optional updates (if content changes)

4. Review resources list
   - Source: https://www.reddit.com/r/juresanguinis/wiki/index/
   - File: src/utils/constants/resources.constants.ts
   - Add or replace links if the wiki structure changes

## Quick verification

- Run build: npm run build
- Spot-check: /news, /community, /resources
