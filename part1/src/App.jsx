const Part = ({ title = "Default Title", exercises = 1 }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Number of exercises {exercises}</p>
    </div>
  );
};

const Header = ({ course = "Default title" }) => {
  return <h1>{course}</h1>;
};

const Content = ({ content = [] }) => {
  return (
    <div>
      {content.map(({ name, exercises }, index) => {
        return <Part key={index} title={name} exercises={exercises} />;
      })}
    </div>
  );
};

const Total = ({ totals = [] }) => {
  const total = totals.reduce((sum, { exercises }) => sum + exercises, 0);
  return <p>Total number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Total totals={parts} />
    </div>
  );
};

export default App;
