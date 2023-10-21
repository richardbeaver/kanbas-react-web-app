import ModuleTitle from "./ModuleTitle";
import ModuleDescription from "./ModuleDescription";
import Lesson from "./Lesson";

const iconsSize = "20";

function Module({ module }) {
  const { name, description, lessons } = module;

  return (
    <div className="wd-module">
      <details open>
        <summary>
          <ModuleTitle title={name} size={iconsSize} />
        </summary>
        <ModuleDescription description={description} />
        {lessons && lessons.map((lesson, index) => (
          <Lesson key={index} lesson={lesson} size={iconsSize} />
        ))}
      </details>
    </div>
  );
}

export default Module;
