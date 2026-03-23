import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '9yeubu24',
    dataset: 'production',
  },
  // Required for non-interactive deploy (GitHub Actions). Must match your *.sanity.studio slug.
  studioHost: 'michal-paczka-content',
});
