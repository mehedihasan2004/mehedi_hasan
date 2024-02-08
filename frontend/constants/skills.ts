type TSkill = { name: string; image: string };
type TSkillsCategory = { value: string; label: string; skills: TSkill[] };

const languages: TSkill[] = [
  { name: "Html", image: "/common/html.png" },
  { name: "Css", image: "/common/css.png" },
  { name: "C", image: "/languages/c.png" },
  { name: "C++", image: "/languages/cpp.png" },
  { name: "Javascript", image: "/common/js.png" },
  { name: "Typescript", image: "/common/ts.png" },
];

const frontendSkills: TSkill[] = [
  { name: "Html 5", image: "/common/html.png" },
  { name: "Css 3", image: "/common/css.png" },
  { name: "Javascript", image: "/common/js.png" },
  { name: "Typescript", image: "/common/ts.png" },
  { name: "React Js", image: "/frontend/react.png" },
  { name: "Next Js", image: "/frontend/next.png" },
  { name: "Firebase Auth", image: "/common/firebase.png" },
  { name: "Next Auth", image: "/frontend/nextauth.png" },
  { name: "Redux & RTK", image: "/frontend/redux.png" },
  { name: "React Router DOM", image: "/frontend/react-router-dom.png" },
  { name: "TanStack Query", image: "/frontend/tanstack.png" },
  { name: "React Hook Form", image: "/frontend/react-hook-form.png" },
  { name: "Axios", image: "/frontend/axios.png" },
  { name: "Material UI", image: "/frontend/mui.png" },
  { name: "Ant Design", image: "/frontend/antd.png" },
  { name: "Tailwind Css", image: "/frontend/tailwind.png" },
  { name: "ShadCn UI", image: "/frontend/shadcn.png" },
];

const backendSkills: TSkill[] = [
  { name: "Javascript", image: "/common/js.png" },
  { name: "Typescript", image: "/common/ts.png" },
  { name: "Node Js", image: "/backend/node.png" },
  { name: "Express Js", image: "/backend/express.png" },
  { name: "MongoDB", image: "/backend/mongodb.png" },
  { name: "Mongoose", image: "/backend/mongoose.png" },
  { name: "PostgreSQL", image: "/backend/postgres.png" },
  { name: "Prisma", image: "/backend/prisma.png" },
  { name: "Zod", image: "/backend/zod.png" },
  { name: "JWT", image: "/backend/jwt.png" },
  { name: "Bcrypt", image: "/backend/bcrypt.jpg" },
];

const tools: TSkill[] = [
  { name: "VS Code", image: "/tools/vs-code.png" },
  { name: "Git", image: "/tools/git.png" },
  { name: "GitHub", image: "/tools/github.png" },
  { name: "Trello", image: "/tools/trello.png" },
  { name: "Jira", image: "/tools/jira.png" },
  { name: "Figma", image: "/tools/figma.png" },
  { name: "Supabase", image: "/tools/supabase.png" },
  { name: "Firebase", image: "/common/firebase.png" },
  { name: "Netlify", image: "/tools/netlify.png" },
  { name: "Vercel", image: "/tools/vercel.png" },
  { name: "Postman", image: "/tools/postman.png" },
  { name: "Draw SQL", image: "/tools/draw-sql.png" },
  { name: "Chrome Dev Tools", image: "/tools/chrome-dev-tool.png" },
  { name: "Prettier", image: "/tools/prettier.png" },
  { name: "ESlint", image: "/tools/eslint.png" },
  { name: "Husky", image: "/tools/husky.png" },
];

const skillsCategories: TSkillsCategory[] = [
  { value: "languages", label: "Languages", skills: languages },
  { value: "frontend", label: "Frontend", skills: frontendSkills },
  { value: "backend", label: "Backend", skills: backendSkills },
  { value: "tools", label: "Tools", skills: tools },
];

export type { TSkillsCategory, TSkill };
export default skillsCategories;
