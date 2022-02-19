import { db } from "./db/models";
import { Section } from "./db/models/section";

db.Area.findAll({ include: [{ model: db.Section }] }).then((areas) => {
  areas.forEach((area) => {
    const sections_name = area.sections.map((s) => {
      const section = s as Section;
      return section.name;
    });
    console.log(`${area.id}: ${area.name}: ${sections_name}`);
  });
});
