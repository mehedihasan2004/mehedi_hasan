"use client";

import { useState } from "react";
import Tooltip from "../aui/Tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import skillsCategories, { TSkill, TSkillsCategory } from "@/constants/skills";
import { Span } from "@/utils/motion";

const Skills = () => {
  let [activeTab, setActiveTab] = useState(skillsCategories[0].value);

  return (
    <section id="skills">
      <h4 className="text-2xl font-bold text-sky-600">Skills</h4>
      <Tabs
        defaultValue="frontend"
        className="flex md:felx-row justify-start gap-4 w-full lg:h-[230px] md:h-[360px]"
      >
        <TabsList className="justify-start bg-sky-400/10 h-full flex flex-col space-x-1 items-start w-1/4 lg:pl-8 md:pl-4">
          {skillsCategories.map(({ value, label }) => (
            <TabsTrigger
              onClick={() => setActiveTab(value)}
              key={value}
              value={value}
              style={{ WebkitTapHighlightColor: "transparent" }}
              className={`${
                activeTab === value ? "" : "hover:text-white/60"
              } relative px-3 py-2 text-sm text-white/70 outline-sky-400 transition focus-visible:outline-2 w-full font-semibold text-start`}
            >
              {activeTab === value && (
                <Span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-sky-500/30 text-white/80"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full bg-white/5 px-4">
          {skillsCategories.map(({ value, skills }: TSkillsCategory) => (
            <TabsContent
              key={value}
              value={value}
              className="flex flex-row flex-wrap gap-4"
            >
              {skills.map(({ name, image }: TSkill, i: number) => (
                <Tooltip key={i} id={i} name={name} image={image} />
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default Skills;
