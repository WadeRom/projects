import { useState } from "react";

//Exercises 1.3 - 1.5
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
//Exercises 1.3 - 1.5

//Exercises 1.6 Unicafe

const Title = ({ children = 'empty' }) => <h1>{children}</h1>;
const Display = ({ children = 'empty' }) => <div>{children}</div>;

const calculateMetrics = ({ data, operation }) => {
  return data.reduce((acc, current) => operation(acc, current), 0);
};

const Button = ({ children = 'empty', onClick }) => (
  <button onClick={onClick}>{children}</button>
);

const Feed = ({ label = 'Label is empty', total = 0 }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{(total === false) ? '' : total}</td>
    </tr>
  );
};

const Statistics = ({ metrics }) => {
  const total = calculateMetrics({
    data: metrics,
    operation: (acc, current) => acc + current,
  });

  const allFeedback = {
    total: total,
    average: metrics.length ? total / metrics.length : 0,
    positiveFeedback: metrics.length ? (metrics[0] / total) * 100 || 0 : 0,
  };

  return (
    <>
      <Feed label="total" total={allFeedback.total} />
      <Feed label="average" total={`${allFeedback.average}%`} />
      <Feed
        label="positive feedback"
        total={`${allFeedback.positiveFeedback}%`}
      />
    </>
  );
};

const Feeds = ({ feeds = {} }) => {
  return (
    <>
      <Feed label="good:" total={feeds.good} />
      <Feed label="neutral:" total={feeds.neutral} />
      <Feed label="bad:" total={feeds.bad} />
    </>
  );
};

//Exercises 1.6 Unicafe

const App = () => {
  const [feed, setFeed] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeed = (key) => {
    if (!(key in feed)) return;
    setFeed({ ...feed, [key]: feed[key] + 1 });
  };

  const hasFeedback = feed.good > 0 || feed.neutral > 0 || feed.bad > 0;

  return (
    <>
      <Display>
        <Title>give feedback</Title>
        <Button onClick={() => handleFeed("good")}>good</Button>
        <Button onClick={() => handleFeed("neutral")}>neutral</Button>
        <Button onClick={() => handleFeed("bad")}>bad</Button>
      </Display>
      <Display>
        <Title>statics</Title>
        {!hasFeedback ? (
          <Feed label="No feedback given" total={false}/>
        ) : (
          <>
            <Feeds feeds={feed} />
            <Statistics metrics={[feed.good, feed.neutral, feed.bad]} />
          </>
        )}
      </Display>
    </>
  );
};

export default App;
