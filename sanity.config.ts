import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { codeInput } from "@sanity/code-input";
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavBar from './components/StudioNavBar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'MY_BLOG_STUDIO',
  title: 'MY BLOG STUDIO',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(),codeInput()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavBar,
    },
  },
  theme: myTheme,
})
