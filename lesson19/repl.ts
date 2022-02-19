import { db } from "./db/models";

db.Area.findAll({ include: [{ model: db.Section }] }).then((areas) => {
  areas.forEach((area) => {
    // console.log(`${area.id}: ${area.name}`);
    console.log(JSON.stringify(area));
  });
});
