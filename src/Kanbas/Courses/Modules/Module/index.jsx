import ModuleTitle from "./ModuleTitle";
import ModuleDescription from "./ModuleDescription";
import Lesson from "./Lesson";

const iconsSize = "20";

function Module({ module }) {
  const { name, description, lessons } = module;

  return (
    <div className="wd-module">
      <ModuleTitle title={name} size={iconsSize} />
      <ModuleDescription description={description} size={iconsSize} />
      {lessons && lessons.map((lesson, index) => (
        <Lesson key={index} lesson={lesson} size={iconsSize} />
      ))}
    </div>
  );
}

export default Module;
